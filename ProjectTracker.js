const STORAGE_KEY = "zwayam_form_builder_clients_v1";
const SESSION_KEY = "zwayam_form_builder_session_v1";

const DEFAULT_TRACKER_TEMPLATE = {
  project: {
    name: "Client Project",
    manager: "",
    managerEmail: "",
    plannedStartDate: "",
    plannedEndDate: ""
  },
  milestones: [],
  goLiveChecklist: [],
  goLiveRevisions: [],
  raidLogs: [],
  meta: {
    customMilestoneColumns: []
  }
};

const trackerTemplate = JSON.parse(JSON.stringify(window.TRACKER_DATA || DEFAULT_TRACKER_TEMPLATE));

const projectTitle = document.getElementById("projectTitle");
const projectMeta = document.getElementById("projectMeta");
const projectInfoBox = document.getElementById("projectInfoBox");
const summaryGrid = document.getElementById("summaryGrid");
const insightGrid = document.getElementById("insightGrid");
const tabRow = document.getElementById("tabRow");
const filterRow = document.getElementById("filterRow");
const searchInput = document.getElementById("searchInput");
const statusFilter = document.getElementById("statusFilter");
const tableHead = document.getElementById("tableHead");
const tableBody = document.getElementById("tableBody");
const trackerPanel = document.querySelector(".tracker-panel");
const trackerRoleBadge = document.getElementById("trackerRoleBadge");
const editTrackerBtn = document.getElementById("editTrackerBtn");
const saveTrackerBtn = document.getElementById("saveTrackerBtn");
const cancelTrackerBtn = document.getElementById("cancelTrackerBtn");
const addGenericRowBtn = document.getElementById("addGenericRowBtn");
const addRevisionRowBtn = document.getElementById("addRevisionRowBtn");
const addMilestoneColumnBtn = document.getElementById("addMilestoneColumnBtn");
const removeMilestoneColumnBtn = document.getElementById("removeMilestoneColumnBtn");
const resetTableBtn = document.getElementById("resetTableBtn");
const tabGuideText = document.getElementById("tabGuideText");
const editStatePill = document.getElementById("editStatePill");

let activeTab = "milestones";
let isEditMode = false;
let editSnapshot = null;
let hasUnsavedChanges = false;
let activeDrilldown = null;
let highlightedRowContext = null;
let rowHighlightTimer = null;

const ATS_PHASE_RULES = [
  { phase: "Discovery & Kickoff", match: /(kick.?off|scope|validation|walkthrough|sign.?off)/i },
  { phase: "Solution Design", match: /(requisition|approval|workflow|department|roles|emails|survey|report|duplicity|source validity|personal information)/i },
  { phase: "Build & Configuration", match: /(configuration|module|document finalization|impl|api|development|career site|sso|naukri|integration|smtp|calendar|ssl|bot manager|security)/i },
  { phase: "Testing & UAT", match: /(sanity|testing|uat|bug|rework|internal testing|walkthrough)/i },
  { phase: "Deployment & Go-Live", match: /(training|migration|readiness|go.?live|production instance|movement to production|cutover)/i }
];

const session = loadSession();
const canEdit = session.role === "admin";

let clients = loadClients();
const queryClientId = new URLSearchParams(window.location.search).get("clientId");
let activeClientId = queryClientId || session.clientId || (clients[0] ? clients[0].id : null);
let activeClient = clients.find(client => client.id === activeClientId) || null;

if (!activeClient && clients.length) {
  activeClient = clients[0];
  activeClientId = activeClient.id;
}

if (!activeClient) {
  renderEmptyTracker("No client context found. Open Project Tracker from a client workspace.");
} else {
  ensureClientTracker(activeClient);
  setProjectHeader();
  renderSummary();
  updateFilterVisibility();
  renderActionState();
  renderTable();
}

function renderEmptyTracker(message) {
  if (projectTitle) projectTitle.textContent = "Project Tracker";
  if (projectMeta) projectMeta.textContent = message;
  if (summaryGrid) summaryGrid.innerHTML = "";
  if (projectInfoBox) projectInfoBox.innerHTML = "";
  if (insightGrid) insightGrid.innerHTML = "";
  if (tableHead) tableHead.innerHTML = "";
  if (tableBody) tableBody.innerHTML = '<tr><td class="empty" colspan="20">No data available.</td></tr>';
  if (editTrackerBtn) editTrackerBtn.classList.add("hidden");
  if (saveTrackerBtn) saveTrackerBtn.classList.add("hidden");
  if (cancelTrackerBtn) cancelTrackerBtn.classList.add("hidden");
  if (addGenericRowBtn) addGenericRowBtn.classList.add("hidden");
  if (addRevisionRowBtn) addRevisionRowBtn.classList.add("hidden");
  if (addMilestoneColumnBtn) addMilestoneColumnBtn.classList.add("hidden");
  if (removeMilestoneColumnBtn) removeMilestoneColumnBtn.classList.add("hidden");
  if (tabGuideText) tabGuideText.textContent = "No tracker context available.";
  if (editStatePill) editStatePill.textContent = "No Data";
}

function deepClone(value) {
  return JSON.parse(JSON.stringify(value));
}

function loadSession() {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return { role: "viewer", clientId: null };
    const parsed = JSON.parse(raw);
    return {
      role: parsed?.role || "viewer",
      clientId: parsed?.clientId || null
    };
  } catch (error) {
    return { role: "viewer", clientId: null };
  }
}

function loadClients() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
}

function saveClients() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(clients));
  } catch (error) {
    // ignore storage failures
  }
}

function formatISODate(dateObj) {
  if (!(dateObj instanceof Date) || Number.isNaN(dateObj.getTime())) return "";
  const d = new Date(dateObj);
  d.setHours(0, 0, 0, 0);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function addDays(dateObj, offset) {
  if (!(dateObj instanceof Date) || Number.isNaN(dateObj.getTime())) return null;
  const d = new Date(dateObj);
  d.setDate(d.getDate() + Number(offset || 0));
  return d;
}

function findEarliestAndLatest(rows, startKey, endKey) {
  let earliest = null;
  let latest = null;
  rows.forEach(row => {
    const start = parseDate(row?.[startKey]);
    const end = parseDate(row?.[endKey]);
    if (start && (!earliest || start < earliest)) earliest = start;
    if (end && (!latest || end > latest)) latest = end;
  });
  return { earliest, latest };
}

function buildDateOffsetsFromTemplate(trackerData) {
  if (!trackerData) return;
  trackerData.meta = trackerData.meta || {};
  const milestones = trackerData.milestones || [];
  const checklist = trackerData.goLiveChecklist || [];

  const { earliest: msStart } = findEarliestAndLatest(milestones, "plannedStart", "plannedEnd");
  const { earliest: chStart } = findEarliestAndLatest(checklist, "plannedStart", "plannedEnd");
  const baseStart = msStart || chStart || parseDate(trackerData?.project?.plannedStartDate) || new Date();
  const baseStartIso = formatISODate(baseStart);
  trackerData.meta.baseStartDate = baseStartIso;

  trackerData.meta.milestoneOffsets = milestones.map(item => {
    const start = parseDate(item.plannedStart);
    const end = parseDate(item.plannedEnd);
    const startOffset = start ? Math.round((start - baseStart) / (1000 * 60 * 60 * 24)) : 0;
    const endOffset = end ? Math.round((end - baseStart) / (1000 * 60 * 60 * 24)) : startOffset;
    return { key: String(item.sNo || ""), startOffset, endOffset };
  });

  trackerData.meta.checklistOffsets = checklist.map(item => {
    const start = parseDate(item.plannedStart);
    const end = parseDate(item.plannedEnd);
    const startOffset = start ? Math.round((start - baseStart) / (1000 * 60 * 60 * 24)) : 0;
    const endOffset = end ? Math.round((end - baseStart) / (1000 * 60 * 60 * 24)) : startOffset;
    return { key: String(item.id || ""), startOffset, endOffset };
  });
}

function applyProjectDatesFromOffsets(trackerData) {
  if (!trackerData) return;
  trackerData.meta = trackerData.meta || {};
  const project = trackerData.project || {};
  const anchor = parseDate(project.plannedStartDate || trackerData.meta.baseStartDate);
  if (!anchor) return;

  const milestoneOffsets = trackerData.meta.milestoneOffsets || [];
  const checklistOffsets = trackerData.meta.checklistOffsets || [];
  const milestoneOffsetByKey = new Map(milestoneOffsets.map(item => [String(item.key), item]));
  const checklistOffsetByKey = new Map(checklistOffsets.map(item => [String(item.key), item]));

  (trackerData.milestones || []).forEach(item => {
    const offset = milestoneOffsetByKey.get(String(item.sNo || ""));
    if (!offset) return;
    const start = addDays(anchor, offset.startOffset);
    const end = addDays(anchor, offset.endOffset);
    item.plannedStart = formatISODate(start);
    item.plannedEnd = formatISODate(end);
  });

  (trackerData.goLiveChecklist || []).forEach(item => {
    const offset = checklistOffsetByKey.get(String(item.id || ""));
    if (!offset) return;
    const start = addDays(anchor, offset.startOffset);
    const end = addDays(anchor, offset.endOffset);
    item.plannedStart = formatISODate(start);
    item.plannedEnd = formatISODate(end);
  });

  const { latest } = findEarliestAndLatest(trackerData.milestones || [], "plannedStart", "plannedEnd");
  if (latest) {
    trackerData.project = trackerData.project || {};
    trackerData.project.plannedEndDate = formatISODate(latest);
  }
}

function initializeProjectDateModel(trackerData) {
  if (!trackerData) return;
  trackerData.project = trackerData.project || {};
  trackerData.meta = trackerData.meta || {};

  const milestones = trackerData.milestones || [];
  const checklist = trackerData.goLiveChecklist || [];
  const existingStart = parseDate(trackerData.project.plannedStartDate);
  const existingEnd = parseDate(trackerData.project.plannedEndDate);

  if (!existingStart || !existingEnd) {
    const msDates = findEarliestAndLatest(milestones, "plannedStart", "plannedEnd");
    const chDates = findEarliestAndLatest(checklist, "plannedStart", "plannedEnd");
    const inferredStart = existingStart || msDates.earliest || chDates.earliest || new Date();
    const inferredEnd = existingEnd || msDates.latest || chDates.latest || inferredStart;
    trackerData.project.plannedStartDate = formatISODate(inferredStart);
    trackerData.project.plannedEndDate = formatISODate(inferredEnd);
  }

  if (!Array.isArray(trackerData.meta.milestoneOffsets) || !Array.isArray(trackerData.meta.checklistOffsets) || !trackerData.meta.baseStartDate) {
    buildDateOffsetsFromTemplate(trackerData);
  }

  applyProjectDatesFromOffsets(trackerData);
}

function getLatestGoLiveRevisionDate(trackerData) {
  const revisions = trackerData?.goLiveRevisions || [];
  let latest = null;
  revisions.forEach(item => {
    const revised = parseDate(item?.revisedDate);
    if (revised && (!latest || revised > latest)) latest = revised;
  });
  return latest ? formatISODate(latest) : null;
}

function linkGoLiveRevisionToMilestone(trackerData) {
  const latest = getLatestGoLiveRevisionDate(trackerData);
  if (!latest) return { linked: false, reason: "no_valid_revision" };

  const milestones = trackerData?.milestones || [];
  const goLive = milestones.find(item => /go.?live/i.test(String(item?.milestone || "")));
  if (!goLive) return { linked: false, reason: "go_live_milestone_missing" };

  goLive.plannedEnd = latest;
  if (parseDate(goLive.plannedStart) && parseDate(goLive.plannedEnd) && parseDate(goLive.plannedStart) > parseDate(goLive.plannedEnd)) {
    goLive.plannedStart = latest;
  }

  trackerData.auditLog = Array.isArray(trackerData.auditLog) ? trackerData.auditLog : [];
  trackerData.auditLog.unshift({
    timestamp: new Date().toISOString(),
    event: `Linked Go-Live revision date ${latest} to milestone \"${goLive.milestone || "Go-Live"}\"`
  });
  return { linked: true, date: latest, milestone: goLive.milestone || "Go-Live" };
}

function reindexRaidRows(trackerData) {
  const logs = trackerData?.raidLogs || [];
  logs.forEach((item, index) => {
    item.id = String(index + 1);
  });
}

function createBlankRaidRow(id = "") {
  return {
    id: String(id || ""),
    type: "",
    priority: "",
    currentStatus: "",
    dependentTask: "",
    description: "",
    mitigationPlan: "",
    owner: "",
    assignedTo: "",
    plannedCompletionDate: "",
    actualCompletionDate: "",
    reportedDate: "",
    reportedBy: "",
    comments: "",
    ragStatus: ""
  };
}

function createBlankMilestoneRow(customColumns = []) {
  const row = {
    sNo: "",
    milestone: "",
    owner: "",
    plannedStart: "",
    plannedEnd: "",
    actualStart: "",
    actualEnd: "",
    status: "Yet to Start",
    plannedDays: "",
    donePct: "0"
  };
  customColumns.forEach(col => {
    if (col?.key) row[col.key] = "";
  });
  return row;
}

function createBlankChecklistRow(nextId = "") {
  return {
    id: String(nextId || ""),
    activity: "",
    dependency: "",
    responsibility: "",
    plannedStart: "",
    plannedEnd: "",
    actualStart: "",
    actualEnd: "",
    status: "Not Started",
    remarks: ""
  };
}

function insertRaidRow(trackerData, atIndex) {
  trackerData.raidLogs = Array.isArray(trackerData.raidLogs) ? trackerData.raidLogs : [];
  const newRow = createBlankRaidRow("");
  const index = Math.max(0, Math.min(Number(atIndex) + 1, trackerData.raidLogs.length));
  trackerData.raidLogs.splice(index, 0, newRow);
  reindexRaidRows(trackerData);
}

function addChecklistRow(trackerData) {
  trackerData.goLiveChecklist = Array.isArray(trackerData.goLiveChecklist) ? trackerData.goLiveChecklist : [];
  const ids = trackerData.goLiveChecklist.map(item => Number(item?.id)).filter(Number.isFinite);
  const nextId = (ids.length ? Math.max(...ids) : 0) + 1;
  trackerData.goLiveChecklist.push(createBlankChecklistRow(String(nextId)));
}

function insertMilestoneRow(trackerData, atIndex) {
  trackerData.milestones = Array.isArray(trackerData.milestones) ? trackerData.milestones : [];
  const customColumns = getCustomMilestoneColumns(trackerData);
  const newRow = createBlankMilestoneRow(customColumns);
  const index = Math.max(0, Math.min(Number(atIndex) + 1, trackerData.milestones.length));
  trackerData.milestones.splice(index, 0, newRow);
}

function removeMilestoneRow(trackerData, atIndex) {
  trackerData.milestones = Array.isArray(trackerData.milestones) ? trackerData.milestones : [];
  if (trackerData.milestones.length <= 1) return { removed: false, reason: "minimum_one_row" };
  const index = Number(atIndex);
  const row = trackerData.milestones[index];
  if (!row) return { removed: false, reason: "row_not_found" };
  const ok = window.confirm(`Are you sure you want to delete milestone row "${row.sNo || index + 1}"?`);
  if (!ok) return { removed: false, reason: "cancelled" };
  trackerData.milestones.splice(index, 1);
  return { removed: true };
}

function addGoLiveRevisionRow(trackerData) {
  trackerData.goLiveRevisions = Array.isArray(trackerData.goLiveRevisions) ? trackerData.goLiveRevisions : [];
  trackerData.goLiveRevisions.push({
    previousDate: "",
    revisedDate: "",
    reason: ""
  });
}

function getTabGuideMessage(tab) {
  if (tab === "milestones") return "Milestones: track WBS execution, planned vs actual, and schedule health.";
  if (tab === "checklist") return "Go-Live Checklist: execution readiness items with actual start/end tracking.";
  if (tab === "revisions") return "Go-Live Revisions: capture date shifts and view revision impact automatically.";
  if (tab === "raid") return "RAID Log: track open risks/issues/actions and closure ownership.";
  return "Project tracker section.";
}

function updateToolbarContext() {
  if (tabGuideText) tabGuideText.textContent = getTabGuideMessage(activeTab);
  if (resetTableBtn) {
    if (activeTab === "milestones") resetTableBtn.textContent = "Reset Milestones";
    else if (activeTab === "checklist") resetTableBtn.textContent = "Reset Checklist";
    else if (activeTab === "revisions") resetTableBtn.textContent = "Reset Revisions";
    else if (activeTab === "raid") resetTableBtn.textContent = "Reset RAID";
    else resetTableBtn.textContent = "Reset Table Input";
  }
}

function removeRaidRow(trackerData, atIndex) {
  trackerData.raidLogs = Array.isArray(trackerData.raidLogs) ? trackerData.raidLogs : [];
  if (trackerData.raidLogs.length <= 1) return { removed: false, reason: "minimum_one_row" };
  const index = Number(atIndex);
  const row = trackerData.raidLogs[index];
  if (!row) return { removed: false, reason: "row_not_found" };
  const ok = window.confirm(`Are you sure you want to delete RAID row #${row.id || index + 1}?`);
  if (!ok) return { removed: false, reason: "cancelled" };
  trackerData.raidLogs.splice(index, 1);
  reindexRaidRows(trackerData);
  return { removed: true };
}

function buildFreshTracker(clientName) {
  const fresh = deepClone(trackerTemplate);

  fresh.project = fresh.project || {};
  fresh.project.name = clientName || fresh.project.name || "Client Project";
  fresh.project.manager = "";
  fresh.project.plannedStartDate = formatISODate(new Date());
  fresh.project.plannedEndDate = fresh.project.plannedStartDate;

  fresh.milestones = (fresh.milestones || []).map(item => ({
    ...item,
    status: "Not Started",
    donePct: "0",
    actualStart: "",
    actualEnd: "",
    plannedDays: /^[0-9]+(\.[0-9]+)?$/.test(String(item.plannedDays || "")) ? String(item.plannedDays) : ""
  }));

  fresh.goLiveChecklist = (fresh.goLiveChecklist || []).map(item => ({
    ...item,
    status: "Not Started",
    plannedStart: item.plannedStart || "",
    plannedEnd: item.plannedEnd || "",
    remarks: ""
  }));

  fresh.goLiveRevisions = [];

  fresh.raidLogs = [createBlankRaidRow("1")];

  initializeProjectDateModel(fresh);
  return fresh;
}

function ensureClientTracker(client) {
  if (!client) return;
  if (!client.trackerData || typeof client.trackerData !== "object") {
    client.trackerData = buildFreshTracker(client.name);
    saveClients();
  }

  if (!client.trackerData.project || typeof client.trackerData.project !== "object") {
    client.trackerData.project = {};
  }
  client.trackerData.project.manager = client.trackerData.project.manager || "";
  client.trackerData.project.managerEmail = client.trackerData.project.managerEmail || "";
  client.trackerData.meta = client.trackerData.meta || {};
  if (!Array.isArray(client.trackerData.meta.customMilestoneColumns)) {
    client.trackerData.meta.customMilestoneColumns = [];
  }

  client.trackerData.goLiveChecklist = (client.trackerData.goLiveChecklist || []).map(item => ({
    ...item,
    actualStart: item.actualStart || "",
    actualEnd: item.actualEnd || ""
  }));

  if (!Array.isArray(client.trackerData.raidLogs) || !client.trackerData.raidLogs.length) {
    client.trackerData.raidLogs = [createBlankRaidRow("1")];
  } else {
    reindexRaidRows(client.trackerData);
  }

  client.trackerData.project.name = client.name;
  initializeProjectDateModel(client.trackerData);
}

function getGoLiveMilestone(data) {
  return (data?.milestones || []).find(item => /go.?live/i.test(String(item?.milestone || ""))) || null;
}

function getPlannedGoLiveDate(data) {
  const goLive = getGoLiveMilestone(data);
  return goLive?.plannedEnd || data?.project?.plannedEndDate || "";
}

function getActualGoLiveDate(data) {
  const latestRevision = getLatestGoLiveRevisionDate(data);
  if (latestRevision) return latestRevision;
  const goLive = getGoLiveMilestone(data);
  return goLive?.actualEnd || "";
}

function renderProjectInfoBox() {
  if (!projectInfoBox) return;
  const data = getTrackerData();
  if (!data) {
    projectInfoBox.innerHTML = "";
    return;
  }

  const project = data.project || {};
  const plannedGoLiveDate = getPlannedGoLiveDate(data);
  const actualGoLiveDate = getActualGoLiveDate(data);
  const editable = canEdit && isEditMode;

  projectInfoBox.innerHTML = `
    <article class="project-info-item">
      <span class="project-info-label">Project Manager</span>
      ${editable
        ? `<input class="project-info-input" type="text" data-project-field="manager" value="${escapeHtml(project.manager || "")}" placeholder="Enter manager name">`
        : `<strong class="project-info-value">${escapeHtml(project.manager || "NA")}</strong>`}
    </article>
    <article class="project-info-item">
      <span class="project-info-label">Project Manager Email</span>
      ${editable
        ? `<input class="project-info-input" type="email" data-project-field="managerEmail" value="${escapeHtml(project.managerEmail || "")}" placeholder="Enter manager email">`
        : `<strong class="project-info-value">${escapeHtml(project.managerEmail || "NA")}</strong>`}
    </article>
    <article class="project-info-item">
      <span class="project-info-label">Planned Go-Live Date</span>
      <strong class="project-info-value">${plannedGoLiveDate ? escapeHtml(formatDate(plannedGoLiveDate)) : "NA"}</strong>
    </article>
    <article class="project-info-item">
      <span class="project-info-label">Actual Go-Live Date</span>
      <strong class="project-info-value">${actualGoLiveDate ? escapeHtml(formatDate(actualGoLiveDate)) : "NA"}</strong>
      <span class="project-info-note">Auto from latest Go-Live revision date</span>
    </article>
  `;
}

function normalizeColumnKey(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
}

function getCustomMilestoneColumns(data) {
  const columns = data?.meta?.customMilestoneColumns;
  if (!Array.isArray(columns)) return [];
  return columns
    .filter(item => item && item.key && item.label)
    .map(item => ({
      key: String(item.key),
      label: String(item.label),
      type: item.type === "date" ? "date" : item.type === "number" ? "number" : "text"
    }));
}

function getMilestoneCustomTypeMap() {
  const data = getTrackerData();
  const customColumns = getCustomMilestoneColumns(data);
  return new Map(customColumns.map(col => [col.key, col.type]));
}

function getTrackerData() {
  return activeClient ? activeClient.trackerData : null;
}

function saveTrackerData() {
  if (!activeClient) return;
  ensureClientTracker(activeClient);
  initializeProjectDateModel(activeClient.trackerData);
  const linkState = linkGoLiveRevisionToMilestone(activeClient.trackerData);
  const idx = clients.findIndex(client => client.id === activeClient.id);
  if (idx === -1) return;
  clients[idx].trackerData = activeClient.trackerData;
  saveClients();
  if (linkState.reason === "go_live_milestone_missing") {
    window.alert("No Go-Live milestone found to link revision date.");
  }
}

function titleCase(value) {
  return (value || "").replace(/_/g, " ").replace(/\b\w/g, m => m.toUpperCase());
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function statusClass(status) {
  const val = (status || "").toLowerCase();
  if (val.includes("complete")) return "completed";
  if (val.includes("wip") || val.includes("progress")) return "wip";
  if (val.includes("yet") || val.includes("not")) return "yet";
  if (val.includes("delay") || val.includes("hold")) return "delayed";
  return "yet";
}

function parseDate(input) {
  if (!input) return null;
  if (input instanceof Date) {
    const d = new Date(input);
    d.setHours(0, 0, 0, 0);
    return d;
  }

  const str = String(input).trim();
  let d = null;
  // Handle full ISO date-time safely by extracting local date part.
  let match = str.match(/^(\d{4})-(\d{2})-(\d{2})T/);
  if (match) {
    const y = Number(match[1]);
    const m = Number(match[2]);
    const day = Number(match[3]);
    d = new Date(y, m - 1, day);
  }

  match = str.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!d && match) {
    const y = Number(match[1]);
    const m = Number(match[2]);
    const day = Number(match[3]);
    d = new Date(y, m - 1, day);
  } else {
    match = str.match(/^(\d{2})-(\d{2})-(\d{4})$/);
    if (!d && match) {
      const day = Number(match[1]);
      const m = Number(match[2]);
      const y = Number(match[3]);
      d = new Date(y, m - 1, day);
    } else if (!d) {
      d = new Date(str);
    }
  }

  if (!d || Number.isNaN(d.getTime())) return null;
  d.setHours(0, 0, 0, 0);
  return d;
}

function parsePercent(raw) {
  const num = Number(raw);
  if (Number.isNaN(num)) return 0;
  if (num <= 1) return Math.max(0, Math.min(100, num * 100));
  return Math.max(0, Math.min(100, num));
}

function businessDaysBetween(startDate, endDate, holidays = []) {
  if (!startDate || !endDate) return 0;
  if (endDate < startDate) return 0;
  const holidaySet = new Set(
    (holidays || []).map(item => {
      const d = parseDate(item);
      return d ? formatISODate(d) : null;
    }).filter(Boolean)
  );
  const cur = new Date(startDate);
  cur.setHours(0, 0, 0, 0);
  const end = new Date(endDate);
  end.setHours(0, 0, 0, 0);
  let count = 0;
  while (cur <= end) {
    const day = cur.getDay();
    const iso = formatISODate(cur);
    if (day !== 0 && day !== 6 && !holidaySet.has(iso)) count += 1;
    cur.setDate(cur.getDate() + 1);
  }
  return count;
}

function deriveMilestoneStatus(row) {
  const plannedStart = parseDate(row?.plannedStart);
  const plannedEnd = parseDate(row?.plannedEnd);
  const actualStart = parseDate(row?.actualStart);
  const actualEnd = parseDate(row?.actualEnd);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Completion is recognized only when actual end exists.
  if (actualEnd) {
    if (plannedEnd && actualEnd > plannedEnd) return "Completed | Delayed";
    if (plannedEnd && actualEnd < plannedEnd) return "Completed | Early";
    return "Completed";
  }

  // In progress when actual start exists and completion is not recorded.
  if (actualStart) {
    if (plannedEnd && today > plannedEnd) return "WIP | Delayed";
    if (plannedStart && actualStart < plannedStart) return "WIP | Early";
    return "WIP";
  }

  // Not started.
  if (plannedEnd && today > plannedEnd) return "Yet to Start | Delayed";
  if (plannedStart && today < plannedStart) return "Yet to Start";
  return "Yet to Start";
}

function deriveMilestoneProgress(row, holidays) {
  const status = deriveMilestoneStatus(row);
  if (status.startsWith("Completed")) return 100;

  const plannedStart = parseDate(row?.plannedStart);
  const plannedEnd = parseDate(row?.plannedEnd);
  const actualStart = parseDate(row?.actualStart);
  const actualEnd = parseDate(row?.actualEnd);

  // If user provided manual progress for in-flight items, honor it.
  const manual = parsePercent(row?.donePct);
  if (!actualStart && !actualEnd) return manual;
  if (actualEnd) return 100;
  if (!actualStart) return manual;

  // For WIP without actual end, use planned end as projection.
  let projectedEnd = plannedEnd;
  if (!projectedEnd) {
    const effortDays = Number(row?.plannedDays);
    if (Number.isFinite(effortDays) && effortDays > 0) {
      projectedEnd = new Date(actualStart);
      projectedEnd.setDate(projectedEnd.getDate() + Math.max(0, Math.round(effortDays) - 1));
    }
  }
  if (!projectedEnd) return manual;

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (today < actualStart) return 0;
  if (today > projectedEnd) return Math.max(manual, 95);

  // Excel-style elapsed percentage over projected timeline in working days.
  const total = businessDaysBetween(actualStart, projectedEnd, holidays);
  if (!total) return Math.max(manual, 0);
  const elapsed = businessDaysBetween(actualStart, today, holidays);
  const computed = Math.max(0, Math.min(100, Math.round((elapsed / total) * 100)));
  if (!Number.isFinite(computed)) return manual;
  return Math.max(manual, Math.min(99, computed));
}

function deriveChecklistStatus(row) {
  const plannedEnd = parseDate(row?.plannedEnd);
  const actualStart = parseDate(row?.actualStart);
  const actualEnd = parseDate(row?.actualEnd);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (actualEnd) {
    if (plannedEnd && actualEnd > plannedEnd) return "Completed | Delayed";
    if (plannedEnd && actualEnd < plannedEnd) return "Completed | Early";
    return "Completed";
  }
  if (actualStart) {
    if (plannedEnd && today > plannedEnd) return "WIP | Delayed";
    return "WIP";
  }
  if (plannedEnd && today > plannedEnd) return "Yet to Start | Delayed";
  return "Yet to Start";
}

function deriveGoLiveRevisionMetrics(row) {
  const previous = parseDate(row?.previousDate);
  const revised = parseDate(row?.revisedDate);
  if (!previous || !revised) {
    return { shiftDays: null, impact: "NA", health: "NA" };
  }

  const shiftDays = Math.round((revised - previous) / (1000 * 60 * 60 * 24));
  let impact = "No Change";
  let health = "On Track";
  if (shiftDays > 0) {
    impact = `Pushed by ${shiftDays} day(s)`;
    health = "At Risk";
  } else if (shiftDays < 0) {
    impact = `Pulled in by ${Math.abs(shiftDays)} day(s)`;
    health = "On Track";
  }
  return { shiftDays, impact, health };
}

function deriveAtsPhase(row) {
  const name = String(row?.milestone || row?.activity || "").trim();
  const code = String(row?.sNo || row?.id || "").trim();
  if (!name) return "General";
  const byRule = ATS_PHASE_RULES.find(rule => rule.match.test(name));
  if (byRule) return byRule.phase;
  if (code.startsWith("1") || code.startsWith("2") || code.startsWith("3")) return "Discovery & Design";
  if (code.startsWith("4") || code.startsWith("5") || code.startsWith("6") || code.startsWith("7") || code.startsWith("8") || code.startsWith("9") || code.startsWith("10") || code.startsWith("11")) return "Build & Integration";
  if (code.startsWith("12") || code.startsWith("13") || code.startsWith("14") || code.startsWith("15")) return "Testing & UAT";
  return "Deployment & Go-Live";
}

function deriveOwnerAccountability(ownerName, item) {
  const owner = String(ownerName || "").toLowerCase();
  const title = String(item?.milestone || item?.activity || "").toLowerCase();
  if (owner.includes("client")) return "Business Owner";
  if (owner.includes("zwayam/client") || owner.includes("/")) return "Shared Responsibility";
  if (title.includes("integration") || title.includes("api") || title.includes("smtp") || title.includes("sso")) return "Integration Owner";
  if (title.includes("uat") || title.includes("testing")) return "QA Owner";
  if (owner.includes("zwayam")) return "Implementation Owner";
  return ownerName ? "Workstream Owner" : "Unassigned";
}

function setProjectHeader() {
  const data = getTrackerData();
  const p = data?.project || {};
  if (projectTitle) projectTitle.textContent = `${p.name || "Project"} Tracker`;
  document.title = `${p.name || "Project"} Tracker`;
  if (projectMeta) {
    projectMeta.textContent = `Project Manager: ${p.manager || "NA"} | Client ID: ${activeClient?.id || "NA"}`;
  }
  renderProjectInfoBox();
}

function computeMilestoneMetrics(milestones, holidays) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const computed = milestones.map(item => {
    const status = deriveMilestoneStatus(item);
    const progress = deriveMilestoneProgress(item, holidays);
    return { ...item, __status: status, __progress: progress };
  });

  let completed = 0;
  let wip = 0;
  let notStarted = 0;
  let delayed = 0;
  let overdue = 0;
  let early = 0;
  let donePctTotal = 0;
  let weightedDone = 0;
  let totalWeight = 0;
  let earnedDays = 0;
  let plannedDaysTotal = 0;
  let expectedDaysByNow = 0;

  computed.forEach(item => {
    const status = (item.__status || "").toLowerCase();
    const pct = item.__progress;
    donePctTotal += pct;

    if (status.includes("complete")) completed += 1;
    else if (status.includes("wip") || status.includes("progress")) wip += 1;
    else notStarted += 1;

    const plannedEnd = parseDate(item.plannedEnd);
    const projectedEnd = parseDate(item.actualEnd) || plannedEnd;

    const isOpen = !status.includes("completed");
    if (projectedEnd && isOpen && projectedEnd < today) overdue += 1;

    if (status.includes("delayed")) delayed += 1;
    if (status.includes("early")) early += 1;

    const pStart = parseDate(item.plannedStart);
    const pEnd = parseDate(item.plannedEnd);
    const workDays = businessDaysBetween(pStart, pEnd, holidays);
    const weight = workDays || 1;
    plannedDaysTotal += workDays;
    earnedDays += (workDays * pct) / 100;
    weightedDone += (weight * pct);
    totalWeight += weight;

    if (pStart && pEnd) {
      if (today < pStart) {
        expectedDaysByNow += 0;
      } else if (today > pEnd) {
        expectedDaysByNow += workDays;
      } else {
        expectedDaysByNow += businessDaysBetween(pStart, today, holidays);
      }
    }
  });

  const total = computed.length || 0;
  const completionPct = totalWeight ? Math.round(weightedDone / totalWeight) : (total ? Math.round(donePctTotal / total) : 0);
  const riskScore = total ? ((overdue + delayed) / total) * 100 : 0;
  const scheduleHealth = riskScore > 35 ? "Critical" : riskScore > 15 ? "At Risk" : "On Track";
  const spi = expectedDaysByNow > 0 ? Number((earnedDays / expectedDaysByNow).toFixed(2)) : 1;
  const scheduleVarianceDays = Math.round(earnedDays - expectedDaysByNow);

  return {
    total,
    completed,
    wip,
    notStarted,
    delayed,
    early,
    overdue,
    completionPct,
    scheduleHealth,
    earnedDays: Math.round(earnedDays),
    plannedDaysTotal: Math.round(plannedDaysTotal),
    expectedDaysByNow: Math.round(expectedDaysByNow),
    spi,
    scheduleVarianceDays
  };
}

function isCompletedStatus(status) {
  return String(status || "").toLowerCase().includes("complete");
}

function isWipStatus(status) {
  const val = String(status || "").toLowerCase();
  return val.includes("wip") || val.includes("progress");
}

function getHierarchyLevel(code) {
  const raw = String(code || "").trim();
  if (!raw) return 0;
  const parts = raw.split(".");
  return Math.max(0, parts.length - 1);
}

function formatDate(dateValue) {
  if (!dateValue) return "NA";
  const parsed = parseDate(dateValue);
  if (!parsed) return String(dateValue);
  const day = String(parsed.getDate()).padStart(2, "0");
  const month = String(parsed.getMonth() + 1).padStart(2, "0");
  const year = String(parsed.getFullYear()).slice(-2);
  return `${day}-${month}-${year}`;
}

function getProgressValue(row, doneKey, statusKey) {
  const doneRaw = row?.[doneKey];
  const donePct = parsePercent(doneRaw);
  if (donePct > 0) return Math.round(donePct);

  const status = String(row?.[statusKey] || "").toLowerCase();
  if (status.includes("complete")) return 100;
  if (status.includes("wip") || status.includes("progress")) return 50;
  return 0;
}

function getHealthLabel(row, plannedEndKey, actualEndKey, statusKey) {
  const plannedEnd = parseDate(row?.[plannedEndKey]);
  const actualEnd = parseDate(row?.[actualEndKey]);
  const status = row?.[statusKey];
  const done = isCompletedStatus(status);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (done && plannedEnd && actualEnd && actualEnd > plannedEnd) return "Delayed";
  if (done && plannedEnd && actualEnd && actualEnd <= plannedEnd) return "On Time";
  if (!done && plannedEnd && plannedEnd < today) return "Overdue";
  if (isWipStatus(status) && plannedEnd && plannedEnd >= today) return "On Track";
  return "On Track";
}

function getHealthClass(health) {
  if (health === "On Time" || health === "On Track") return "ok";
  if (health === "Delayed" || health === "Overdue") return "risk";
  return "neutral";
}

function getStatusBasisText(row) {
  const plannedStart = formatDate(row?.plannedStart);
  const plannedEnd = formatDate(row?.plannedEnd);
  const actualStart = row?.actualStart ? formatDate(row?.actualStart) : "Not Set";
  const actualEnd = row?.actualEnd ? formatDate(row?.actualEnd) : "Not Set";
  const derived = deriveMilestoneStatus(row);
  return `Derived from Planned(${plannedStart} to ${plannedEnd}) and Actual/Projected(${actualStart} to ${actualEnd}). Result: ${derived}.`;
}

function getHealthBasisText(row, health) {
  const status = deriveMilestoneStatus(row);
  return `Health is computed from status "${status}" and planned/projected end dates. Result: ${health}.`;
}

function setActiveTab(tab, options = {}) {
  const { resetFilters = true, clearDrilldown = true } = options;
  if (!tab) return;
  const changed = tab !== activeTab;
  if (changed) {
    activeTab = tab;
    if (tabRow) {
      tabRow.querySelectorAll(".tab-btn").forEach(btn => btn.classList.toggle("active", btn.dataset.tab === tab));
    }
  }
  if (resetFilters) {
    if (searchInput) searchInput.value = "";
    if (statusFilter) statusFilter.value = "all";
  }
  if (clearDrilldown) {
    activeDrilldown = null;
    highlightedRowContext = null;
  }
  updateFilterVisibility();
  renderActionState();
  renderTable();
}

function getDrilldownPredicate(tab, key, row) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (tab === "milestones") {
    const status = deriveMilestoneStatus(row).toLowerCase();
    if (key === "completed") return status.includes("completed");
    if (key === "wip") return status.includes("wip");
    if (key === "not_started") return status.includes("yet to start") || status.includes("not started");
    if (key === "overdue") {
      const plannedEnd = parseDate(row?.plannedEnd);
      return !status.includes("completed") && plannedEnd && plannedEnd < today;
    }
    if (key === "delayed") return status.includes("delayed");
    return true;
  }

  if (tab === "checklist" && key === "checklist_readiness") {
    const status = deriveChecklistStatus(row).toLowerCase();
    return !status.includes("completed");
  }

  if (tab === "raid" && key === "risk_pressure") {
    return !String(row?.currentStatus || "").toLowerCase().includes("closed");
  }

  return true;
}

function drilldownFromSummary(key, targetTab) {
  const tab = targetTab || "milestones";
  setActiveTab(tab, { resetFilters: true, clearDrilldown: false });
  activeDrilldown = { key, tab };
  const cfg = tableConfigForTab(tab);
  const firstIndex = (cfg.rows || []).findIndex(row => getDrilldownPredicate(tab, key, row));
  highlightedRowContext = firstIndex >= 0 ? { tab, index: firstIndex } : null;
  renderTable();
  focusHighlightedRow();
  if (trackerPanel) {
    trackerPanel.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function focusHighlightedRow() {
  if (!highlightedRowContext || highlightedRowContext.tab !== activeTab) return;
  const rowEl = tableBody ? tableBody.querySelector(`tr[data-row-index="${highlightedRowContext.index}"]`) : null;
  if (!rowEl) return;
  rowEl.scrollIntoView({ behavior: "smooth", block: "center" });
  if (rowHighlightTimer) window.clearTimeout(rowHighlightTimer);
  rowHighlightTimer = window.setTimeout(() => {
    highlightedRowContext = null;
    renderTable();
    rowHighlightTimer = null;
  }, 1800);
}

function renderSummary() {
  const data = getTrackerData();
  const milestones = data?.milestones || [];
  const holidays = data?.holidays || [];
  const metrics = computeMilestoneMetrics(milestones, holidays);
  const checklist = data?.goLiveChecklist || [];
  const raid = data?.raidLogs || [];
  const completedChecklist = checklist.filter(item => String(item.status || "").toLowerCase().includes("complete")).length;
  const checklistProgress = checklist.length ? Math.round((completedChecklist / checklist.length) * 100) : 0;
  const openRaid = raid.filter(item => !String(item.currentStatus || "").toLowerCase().includes("closed")).length;
  const riskPressure = metrics.overdue + metrics.delayed + openRaid;
  const confidenceScore = Math.max(
    0,
    Math.min(
      100,
      Math.round(
        100
        - (metrics.overdue * 7)
        - (metrics.delayed * 4)
        - (openRaid * 1.5)
        - (Math.max(0, 100 - checklistProgress) * 0.12)
        - (metrics.spi < 1 ? (1 - metrics.spi) * 25 : 0)
      )
    )
  );
  const cards = [
    { key: "total_milestones", tab: "milestones", label: "Total Milestones", value: metrics.total, cls: "total" },
    { key: "delivery_confidence", tab: "milestones", label: "Delivery Confidence", value: `${confidenceScore}%`, cls: confidenceScore >= 75 ? "done" : confidenceScore >= 50 ? "wip" : "delayed" },
    { key: "completion", tab: "milestones", label: "Completion", value: `${metrics.completionPct}%`, cls: "done" },
    { key: "completed", tab: "milestones", label: "Completed", value: metrics.completed, cls: "done" },
    { key: "wip", tab: "milestones", label: "WIP", value: metrics.wip, cls: "wip" },
    { key: "not_started", tab: "milestones", label: "Not Started", value: metrics.notStarted, cls: "not-started" },
    { key: "checklist_readiness", tab: "checklist", label: "Checklist Readiness", value: `${checklistProgress}%`, cls: checklistProgress >= 80 ? "done" : checklistProgress >= 50 ? "wip" : "delayed" },
    { key: "overdue", tab: "milestones", label: "Overdue", value: metrics.overdue, cls: "delayed" },
    { key: "delayed", tab: "milestones", label: "Delayed", value: metrics.delayed, cls: "delayed" },
    { key: "risk_pressure", tab: "raid", label: "Risk Pressure", value: riskPressure, cls: riskPressure <= 6 ? "done" : riskPressure <= 12 ? "wip" : "delayed" },
    { key: "schedule_health", tab: "milestones", label: "Schedule Health", value: metrics.scheduleHealth, cls: metrics.scheduleHealth === "On Track" ? "done" : metrics.scheduleHealth === "At Risk" ? "wip" : "delayed" }
  ];

  summaryGrid.innerHTML = cards
    .map(card => `<article class="summary-card ${card.cls} ${activeDrilldown?.key === card.key ? "active-drilldown" : ""}" data-drill-key="${card.key}" data-drill-tab="${card.tab}" role="button" tabindex="0" title="Open ${card.label} details"><h3>${card.label}</h3><div class="value">${card.value}</div></article>`)
    .join("");

  renderInsights(milestones, metrics);
}

function renderInsights(milestones, metrics) {
  if (!insightGrid) return;
  const data = getTrackerData() || {};
  const checklist = data.goLiveChecklist || [];
  const raid = data.raidLogs || [];
  const revisions = data.goLiveRevisions || [];

  const statusBuckets = { completed: 0, wip: 0, delayed: 0, yet: 0 };
  milestones.forEach(item => {
    const status = deriveMilestoneStatus(item).toLowerCase();
    if (status.includes("complete")) statusBuckets.completed += 1;
    else if (status.includes("wip")) statusBuckets.wip += 1;
    else statusBuckets.yet += 1;
    if (status.includes("delayed")) statusBuckets.delayed += 1;
  });

  const holidays = data.holidays || [];
  const ownerMap = {};
  milestones.forEach(item => {
    const owner = (item.owner || "Unassigned").trim();
    if (!ownerMap[owner]) ownerMap[owner] = { total: 0, progress: 0 };
    ownerMap[owner].total += 1;
    ownerMap[owner].progress += deriveMilestoneProgress(item, holidays);
  });

  const ownerStats = Object.entries(ownerMap)
    .map(([owner, stat]) => ({
      owner,
      total: stat.total,
      avgProgress: stat.total ? Math.round(stat.progress / stat.total) : 0
    }))
    .sort((a, b) => b.total - a.total)
    .slice(0, 6);

  const phaseStatsMap = {};
  milestones.forEach(item => {
    const phase = deriveAtsPhase(item);
    if (!phaseStatsMap[phase]) phaseStatsMap[phase] = { total: 0, progress: 0, delayed: 0 };
    phaseStatsMap[phase].total += 1;
    phaseStatsMap[phase].progress += deriveMilestoneProgress(item, holidays);
    if (deriveMilestoneStatus(item).toLowerCase().includes("delayed")) phaseStatsMap[phase].delayed += 1;
  });
  const phaseStats = Object.entries(phaseStatsMap).map(([phase, stat]) => ({
    phase,
    total: stat.total,
    avgProgress: stat.total ? Math.round(stat.progress / stat.total) : 0,
    delayed: stat.delayed
  })).sort((a, b) => b.total - a.total);

  const openRaid = raid.filter(item => !String(item.currentStatus || "").toLowerCase().includes("closed")).length;
  const completedChecklist = checklist.filter(item => String(item.status || "").toLowerCase().includes("complete")).length;
  const checklistProgress = checklist.length ? Math.round((completedChecklist / checklist.length) * 100) : 0;
  const overdueChecklist = checklist.filter(item => {
    const status = String(item.status || "").toLowerCase();
    if (status.includes("complete")) return false;
    const end = parseDate(item.plannedEnd);
    if (!end) return false;
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    return end < now;
  }).length;

  const delayedDays = milestones.reduce((acc, item) => {
    const planned = parseDate(item.plannedEnd);
    const actual = parseDate(item.actualEnd);
    if (!planned || !actual) return acc;
    const diff = Math.ceil((actual - planned) / (1000 * 60 * 60 * 24));
    return diff > 0 ? acc + diff : acc;
  }, 0);

  const velocity = metrics.completed
    ? Math.round((metrics.completed / Math.max(1, milestones.length)) * 100)
    : 0;

  const forecastRisk = metrics.overdue + overdueChecklist + openRaid;
  const riskBand = forecastRisk > 15 ? "High" : forecastRisk > 6 ? "Medium" : "Low";
  const confidenceScore = Math.max(
    0,
    Math.min(
      100,
      Math.round(
        100
        - (metrics.overdue * 7)
        - (metrics.delayed * 4)
        - (openRaid * 1.5)
        - (Math.max(0, 100 - checklistProgress) * 0.12)
        - (metrics.spi < 1 ? (1 - metrics.spi) * 25 : 0)
      )
    )
  );
  const confidenceBand = confidenceScore >= 75 ? "High" : confidenceScore >= 50 ? "Medium" : "Low";
  const openLoad = metrics.wip + metrics.notStarted;

  const ownerRisk = milestones.reduce((acc, item) => {
    const owner = item.owner || "Unassigned";
    if (!acc[owner]) acc[owner] = { delayed: 0, total: 0, accountability: deriveOwnerAccountability(owner, item) };
    acc[owner].total += 1;
    if (deriveMilestoneStatus(item).toLowerCase().includes("delayed")) acc[owner].delayed += 1;
    return acc;
  }, {});
  const ownerRiskTop = Object.entries(ownerRisk)
    .map(([owner, val]) => ({ owner, ...val, riskPct: val.total ? Math.round((val.delayed / val.total) * 100) : 0 }))
    .sort((a, b) => b.riskPct - a.riskPct)
    .slice(0, 4);

  const upcoming = milestones
    .map(item => ({ ...item, _plannedEnd: parseDate(item.plannedEnd) }))
    .filter(item => item._plannedEnd && !deriveMilestoneStatus(item).toLowerCase().includes("complete"))
    .sort((a, b) => a._plannedEnd - b._plannedEnd)
    .slice(0, 5);

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const milestoneAlerts = milestones
    .map(item => {
      const status = deriveMilestoneStatus(item);
      const end = parseDate(item.plannedEnd);
      if (!end) return null;
      const isDone = status.toLowerCase().includes("completed");
      if (isDone || end >= today) return null;
      const overdueDays = Math.ceil((today - end) / (1000 * 60 * 60 * 24));
      return { sNo: item.sNo || "-", milestone: item.milestone || "", overdueDays, owner: item.owner || "Unassigned" };
    })
    .filter(Boolean)
    .sort((a, b) => b.overdueDays - a.overdueDays)
    .slice(0, 5);

  const revisionTimeline = revisions
    .map(item => parseDate(item.revisedDate))
    .filter(Boolean)
    .sort((a, b) => b - a);
  let revisionDelta = 0;
  if (revisionTimeline.length >= 2) {
    revisionDelta = Math.round((revisionTimeline[0] - revisionTimeline[1]) / (1000 * 60 * 60 * 24));
  }
  const latestGoLiveRevision = revisionTimeline[0] ? formatDate(revisionTimeline[0]) : "NA";
  const revisionTrendLabel = revisionTimeline.length >= 2
    ? (revisionDelta > 0 ? `+${revisionDelta} day slip` : revisionDelta < 0 ? `${revisionDelta} day pull-in` : "No date change")
    : "Baseline / single revision";

  const total = metrics.total || 1;
  const completedPct = Math.round((statusBuckets.completed / total) * 100);
  const wipPct = Math.round((statusBuckets.wip / total) * 100);
  const delayedPct = Math.round((statusBuckets.delayed / total) * 100);

  insightGrid.innerHTML = `
    <article class="insight-card hero drillable-card" data-insight-tab="milestones" role="button" tabindex="0" title="Open milestones data">
      <h3>Program Command Center</h3>
      <div class="kpi-grid">
        <div class="kpi-item">
          <span>Delivery Confidence</span>
          <strong>${confidenceScore}%</strong>
          <em class="kpi-tone ${confidenceBand === "High" ? "ok" : confidenceBand === "Medium" ? "neutral" : "risk"}">${confidenceBand}</em>
        </div>
        <div class="kpi-item">
          <span>Open Load</span>
          <strong>${openLoad}</strong>
          <em class="kpi-tone neutral">WIP + Not Started</em>
        </div>
        <div class="kpi-item">
          <span>Go-Live Revision</span>
          <strong>${latestGoLiveRevision}</strong>
          <em class="kpi-tone ${revisionDelta > 0 ? "risk" : "ok"}">${revisionTrendLabel}</em>
        </div>
        <div class="kpi-item">
          <span>Forecast Risk</span>
          <strong>${forecastRisk}</strong>
          <em class="kpi-tone ${riskBand === "Low" ? "ok" : riskBand === "Medium" ? "neutral" : "risk"}">${riskBand}</em>
        </div>
      </div>
    </article>

    <article class="insight-card drillable-card" data-insight-tab="milestones" role="button" tabindex="0" title="Open milestones data">
      <h3>Execution Dashboard</h3>
      <div class="insight-row"><span>Milestones Completed</span><div class="insight-track"><span style="width:${completedPct}%"></span></div><strong>${completedPct}%</strong></div>
      <div class="insight-row"><span>Milestones WIP</span><div class="insight-track"><span style="width:${wipPct}%"></span></div><strong>${wipPct}%</strong></div>
      <div class="insight-row"><span>Delayed Milestones</span><div class="insight-track"><span style="width:${delayedPct}%"></span></div><strong>${statusBuckets.delayed}</strong></div>
      <div class="insight-row"><span>Checklist Completion</span><div class="insight-track"><span style="width:${checklistProgress}%"></span></div><strong>${checklistProgress}%</strong></div>
      <div class="insight-row"><span>Open RAID Items</span><strong>${openRaid}</strong></div>
      <div class="insight-row"><span>Go-Live Revisions</span><strong>${revisions.length}</strong></div>
      <div class="insight-row"><span>Earned / Planned Days</span><strong>${metrics.earnedDays} / ${metrics.plannedDaysTotal}</strong></div>
    </article>

    <article class="insight-card drillable-card" data-insight-tab="milestones" role="button" tabindex="0" title="Open owner performance data">
      <h3>Owner Performance</h3>
      <div class="insight-mini">
        ${ownerStats.map(item => `
          <div class="insight-row">
            <span>${escapeHtml(item.owner)} (${item.total})</span>
            <div class="insight-track"><span style="width:${item.avgProgress}%"></span></div>
            <strong>${item.avgProgress}%</strong>
          </div>
        `).join("") || '<p class="empty">No owner data</p>'}
      </div>
    </article>

    <article class="insight-card drillable-card" data-insight-tab="milestones" role="button" tabindex="0" title="Open delivery data">
      <h3>Delivery Intelligence</h3>
      <div class="insight-row"><span>Execution Velocity</span><strong>${velocity}%</strong></div>
      <div class="insight-row"><span>Total Delay Days</span><strong>${delayedDays}</strong></div>
      <div class="insight-row"><span>Overdue Checklist</span><strong>${overdueChecklist}</strong></div>
      <div class="insight-row"><span>Forecast Risk Band</span><span class="health-pill ${riskBand === "Low" ? "ok" : riskBand === "Medium" ? "neutral" : "risk"}">${riskBand}</span></div>
      <div class="insight-row"><span>Risk Pressure</span><div class="insight-track"><span style="width:${Math.min(100, forecastRisk * 5)}%"></span></div><strong>${forecastRisk}</strong></div>
      <div class="insight-row"><span>Expected Days by Now</span><strong>${metrics.expectedDaysByNow}</strong></div>
    </article>

    <article class="insight-card drillable-card" data-insight-tab="milestones" role="button" tabindex="0" title="Open ATS phase data">
      <h3>ATS Phase Breakdown</h3>
      <div class="insight-mini">
        ${phaseStats.map(item => `
          <div class="insight-row">
            <span>${escapeHtml(item.phase)} (${item.total})</span>
            <div class="insight-track"><span style="width:${item.avgProgress}%"></span></div>
            <strong>${item.avgProgress}%</strong>
          </div>
          <div class="insight-row">
            <span class="insight-chip">Delayed: ${item.delayed}</span>
          </div>
        `).join("") || '<p class="empty">No phase data.</p>'}
      </div>
    </article>

    <article class="insight-card drillable-card" data-insight-tab="milestones" role="button" tabindex="0" title="Open owner accountability data">
      <h3>Owner Accountability</h3>
      <div class="insight-mini">
        ${ownerRiskTop.map(item => `
          <div class="insight-row">
            <span>${escapeHtml(item.owner)} - ${escapeHtml(item.accountability)}</span>
            <span class="health-pill ${item.riskPct > 40 ? "risk" : item.riskPct > 20 ? "neutral" : "ok"}">${item.riskPct}% risk</span>
          </div>
        `).join("") || '<p class="empty">No owner risk data.</p>'}
      </div>
    </article>

    <article class="insight-card drillable-card" data-insight-tab="milestones" role="button" tabindex="0" title="Open upcoming milestones">
      <h3>Upcoming Milestones</h3>
      <div class="insight-mini">
        ${upcoming.map(item => `
          <div class="insight-row">
            <span>${escapeHtml(item.sNo || "-")} ${escapeHtml(item.milestone || "")}</span>
            <span class="insight-chip">${escapeHtml(formatDate(item.plannedEnd))}</span>
          </div>
        `).join("") || '<p class="empty">No upcoming milestones.</p>'}
      </div>
    </article>
  `;
}

function tableConfigForTab(tab) {
  const data = getTrackerData() || {};
  if (tab === "checklist") {
    return {
      dataKey: "goLiveChecklist",
      rows: data.goLiveChecklist || [],
      editColumns: ["id", "activity", "dependency", "responsibility", "plannedStart", "plannedEnd", "actualStart", "actualEnd", "status"],
      readColumns: [
        { key: "id", label: "ID", type: "code" },
        { key: "activity", label: "Checklist Breakdown", type: "breakdown", codeKey: "id", subtitleKey: "dependency" },
        { key: "responsibility", label: "Owner", type: "text" },
        { key: "plannedStart", label: "Planned Start", type: "date" },
        { key: "plannedEnd", label: "Planned End", type: "date" },
        { key: "actualStart", label: "Actual Start", type: "date" },
        { key: "actualEnd", label: "Actual End", type: "date" },
        { key: "status", label: "Status", type: "status" },
        { key: "statusProgress", label: "Progress", type: "progress", progressFromStatusKey: "status" },
        { key: "health", label: "Timeline Health", type: "health", plannedEndKey: "plannedEnd", actualEndKey: "actualEnd", statusKey: "status" }
      ]
    };
  }
  if (tab === "revisions") {
    return {
      dataKey: "goLiveRevisions",
      rows: data.goLiveRevisions || [],
      editColumns: ["previousDate", "revisedDate", "reason"],
      readColumns: [
        { key: "previousDate", label: "Previous Date", type: "date" },
        { key: "revisedDate", label: "Revised Date", type: "date" },
        { key: "revisionShift", label: "Shift (Days)", type: "revisionShift" },
        { key: "goLiveImpact", label: "Go-Live Impact", type: "goLiveImpact" },
        { key: "goLiveHealth", label: "Revision Health", type: "goLiveHealth" },
        { key: "reason", label: "Reason", type: "text" }
      ]
    };
  }
  if (tab === "raid") {
    return {
      dataKey: "raidLogs",
      rows: data.raidLogs || [],
      editColumns: ["id", "type", "priority", "currentStatus", "owner", "assignedTo", "plannedCompletionDate", "ragStatus", "__actions"],
      readColumns: [
        { key: "id", label: "ID", type: "code" },
        { key: "type", label: "Risk/Issue/Action", type: "text" },
        { key: "priority", label: "Priority", type: "text" },
        { key: "currentStatus", label: "Current Status", type: "status" },
        { key: "owner", label: "Owner", type: "text" },
        { key: "assignedTo", label: "Assigned To", type: "text" },
        { key: "plannedCompletionDate", label: "Planned Completion", type: "date" },
        { key: "ragStatus", label: "RAG", type: "text" }
      ]
    };
  }
  return {
    dataKey: "milestones",
    rows: data.milestones || [],
    editColumns: (() => {
      const custom = getCustomMilestoneColumns(data);
      return ["sNo", "milestone", "owner", "plannedStart", "plannedEnd", "actualStart", "actualEnd", ...custom.map(col => col.key), "status", "plannedDays", "donePct", "__actions"];
    })(),
    readColumns: (() => {
      const custom = getCustomMilestoneColumns(data);
      const customRead = custom.map(col => ({ key: col.key, label: col.label, type: col.type === "date" ? "date" : "text" }));
      return [
      { key: "sNo", label: "WBS", type: "code" },
      { key: "milestone", label: "Milestone Breakdown", type: "breakdown", codeKey: "sNo", subtitleKey: "plannedDays" },
      { key: "phase", label: "ATS Phase", type: "phase" },
      { key: "owner", label: "Owner", type: "text" },
      { key: "accountability", label: "Owner Role", type: "ownerRole" },
      { key: "plannedStart", label: "Planned Start", type: "date" },
      { key: "plannedEnd", label: "Planned End", type: "date" },
      { key: "actualStart", label: "Actual Start", type: "date" },
      { key: "actualEnd", label: "Actual End", type: "date" },
      ...customRead,
      { key: "status", label: "Status", type: "status" },
      { key: "donePct", label: "Progress", type: "progress" },
      { key: "health", label: "Timeline Health", type: "health", plannedEndKey: "plannedEnd", actualEndKey: "actualEnd", statusKey: "status" }
      ];
    })()
  };
}

function updateStatusFilter(rows) {
  const values = Array.from(new Set(rows.map(row => {
    if (activeTab === "milestones") return (deriveMilestoneStatus(row) || "").trim();
    return (row.status || row.currentStatus || "").trim();
  }).filter(Boolean))).sort();
  const current = statusFilter.value;
  statusFilter.innerHTML = '<option value="all">All Status</option>' + values.map(v => `<option value="${escapeHtml(v)}">${escapeHtml(v)}</option>`).join("");
  statusFilter.value = values.includes(current) ? current : "all";
}

function renderBreakdownCell(row, column) {
  const title = row?.[column.key] || "NA";
  const code = row?.[column.codeKey] || "";
  const level = getHierarchyLevel(code);
  const subtitleRaw = row?.[column.subtitleKey] || "";
  const subtitle = String(subtitleRaw).toLowerCase().includes("delay")
    ? `Planned Effort: ${subtitleRaw}`
    : subtitleRaw
      ? `Dependency/Effort: ${subtitleRaw}`
      : "";
  return `
    <div class="breakdown-cell level-${Math.min(level, 4)}">
      <div class="breakdown-title">${escapeHtml(title)}</div>
      ${subtitle ? `<div class="breakdown-sub">${escapeHtml(subtitle)}</div>` : ""}
    </div>
  `;
}

function normalizeCell(row, column) {
  const value = row?.[column.key];
  if (column.type === "phase") {
    const phase = deriveAtsPhase(row);
    return `<span class="phase-chip">${escapeHtml(phase)}</span>`;
  }
  if (column.type === "ownerRole") {
    const role = deriveOwnerAccountability(row?.owner, row);
    return `<span class="owner-role-chip">${escapeHtml(role)}</span>`;
  }
  if (column.type === "status") {
    const statusValue = activeTab === "milestones"
      ? deriveMilestoneStatus(row)
      : activeTab === "checklist"
        ? deriveChecklistStatus(row)
        : (value || row?.currentStatus);
    const cls = statusClass(statusValue);
    const tooltip = activeTab === "milestones" ? getStatusBasisText(row) : `Status: ${statusValue || "NA"}`;
    return `<span class="pill ${cls}" title="${escapeHtml(tooltip)}">${escapeHtml(statusValue || "NA")}</span>`;
  }
  if (column.type === "date") {
    return escapeHtml(formatDate(value));
  }
  if (column.type === "breakdown") {
    return renderBreakdownCell(row, column);
  }
  if (column.type === "progress") {
    const progress = activeTab === "milestones"
      ? deriveMilestoneProgress(row)
      : activeTab === "checklist"
        ? getProgressValue({ ...row, __derivedStatus: deriveChecklistStatus(row) }, "", "__derivedStatus")
      : column.progressFromStatusKey
      ? getProgressValue(row, "", column.progressFromStatusKey)
      : getProgressValue(row, column.key, "status");
    return `
      <div class="progress-cell">
        <div class="progress-track"><span style="width:${progress}%"></span></div>
        <strong>${progress}%</strong>
      </div>
    `;
  }
  if (column.type === "health") {
    const health = activeTab === "milestones"
      ? getHealthLabel(
        {
          ...row,
          __derivedStatus: deriveMilestoneStatus(row),
          __derivedEnd: row?.actualEnd || row?.plannedEnd
        },
        "plannedEnd",
        "__derivedEnd",
        "__derivedStatus"
      )
      : getHealthLabel(row, column.plannedEndKey, column.actualEndKey, column.statusKey);
    const healthClass = getHealthClass(health);
    const tooltip = activeTab === "milestones" ? getHealthBasisText(row, health) : `Timeline Health: ${health}`;
    return `<span class="health-pill ${healthClass}" title="${escapeHtml(tooltip)}">${health}</span>`;
  }
  if (column.type === "revisionShift") {
    const m = deriveGoLiveRevisionMetrics(row);
    if (m.shiftDays === null) return "NA";
    if (m.shiftDays > 0) return `+${m.shiftDays}`;
    return String(m.shiftDays);
  }
  if (column.type === "goLiveImpact") {
    const m = deriveGoLiveRevisionMetrics(row);
    return escapeHtml(m.impact);
  }
  if (column.type === "goLiveHealth") {
    const m = deriveGoLiveRevisionMetrics(row);
    const cls = m.health === "At Risk" ? "risk" : m.health === "On Track" ? "ok" : "neutral";
    return `<span class="health-pill ${cls}">${escapeHtml(m.health)}</span>`;
  }
  if (column.key === "plannedDays" && String(value).toLowerCase().includes("delay")) {
    return `<span class="pill delayed">${escapeHtml(value)}</span>`;
  }
  return escapeHtml(value || "NA");
}

function inputTypeForColumn(columnKey) {
  const customType = getMilestoneCustomTypeMap().get(columnKey);
  if (customType === "date") return "date";
  if (customType === "number") return "number";
  const dateColumns = new Set([
    "plannedStart",
    "plannedEnd",
    "actualStart",
    "actualEnd",
    "previousDate",
    "revisedDate",
    "plannedCompletionDate",
    "actualCompletionDate",
    "reportedDate"
  ]);
  if (dateColumns.has(columnKey)) return "date";
  return "text";
}

function normalizeEditValue(columnKey, value) {
  if (columnKey === "__actions") return "";
  if (!value) return "";
  if (inputTypeForColumn(columnKey) !== "date") return value;
  const parsed = parseDate(value);
  return parsed ? formatISODate(parsed) : String(value);
}

function applyFilters(rowRecords) {
  const query = (searchInput.value || "").trim().toLowerCase();
  const selectedStatus = statusFilter.value;

  return rowRecords.filter(record => {
    const row = record.row;
    const status = activeTab === "milestones"
      ? deriveMilestoneStatus(row).trim()
      : (row.status || row.currentStatus || "").trim();

    if (activeDrilldown && activeDrilldown.tab === activeTab) {
      if (!getDrilldownPredicate(activeTab, activeDrilldown.key, row)) return false;
    }

    if (selectedStatus !== "all" && status !== selectedStatus) return false;
    if (!query) return true;
    return Object.values(row).some(value => String(value || "").toLowerCase().includes(query));
  });
}

function renderTable() {
  const cfg = tableConfigForTab(activeTab);
  updateStatusFilter(cfg.rows);

  const rowRecords = cfg.rows.map((row, index) => ({ row, index }));
  const filtered = applyFilters(rowRecords);

  const readColumns = cfg.readColumns || [];
  const editColumns = cfg.editColumns || [];
  tableHead.innerHTML = `<tr>${(isEditMode && canEdit ? editColumns : readColumns).map(column => (
    `<th class="${typeof column === "string" ? `col-${column}` : `col-${column.key}`}">${escapeHtml(typeof column === "string" ? titleCase(column) : column.label)}</th>`
  )).join("")}</tr>`;

  if (!filtered.length) {
    tableBody.innerHTML = '<tr><td class="empty" colspan="20">No matching records found.</td></tr>';
    return;
  }

  if (isEditMode && canEdit) {
    tableBody.innerHTML = filtered.map(record => {
      const row = record.row;
      const isHighlighted = highlightedRowContext && highlightedRowContext.tab === activeTab && highlightedRowContext.index === record.index;
      return `<tr data-row-index="${record.index}" class="${isHighlighted ? "drilldown-row-highlight" : ""}">${editColumns.map(column => (
        column === "__actions"
          ? `<td class="col-actions"><div class="raid-row-actions"><button class="raid-action-btn" type="button" data-row-action="add" data-index="${record.index}" aria-label="Add ${activeTab === "raid" ? "RAID" : "Milestone"} row">+</button><button class="raid-action-btn raid-action-btn-remove" type="button" data-row-action="remove" data-index="${record.index}" aria-label="Remove ${activeTab === "raid" ? "RAID" : "Milestone"} row">-</button></div></td>`
          : `<td class="col-${column}"><input class="cell-input" ${activeTab === "milestones" && (column === "status" || column === "donePct") ? "readonly" : ""} type="${inputTypeForColumn(column)}" data-index="${record.index}" data-key="${column}" value="${escapeHtml(activeTab === "milestones" && column === "status" ? deriveMilestoneStatus(row) : activeTab === "milestones" && column === "donePct" ? String(deriveMilestoneProgress(row)) : normalizeEditValue(column, row[column]))}"></td>`
      )).join("")}</tr>`;
    }).join("");
    return;
  }

  tableBody.innerHTML = filtered.map(record => {
    const row = record.row;
    const isHighlighted = highlightedRowContext && highlightedRowContext.tab === activeTab && highlightedRowContext.index === record.index;
    return `<tr data-row-index="${record.index}" class="${isHighlighted ? "drilldown-row-highlight" : ""}">${readColumns.map(column => `<td class="col-${column.key}">${normalizeCell(row, column)}</td>`).join("")}</tr>`;
  }).join("");
}

function updateFilterVisibility() {
  filterRow.style.display = activeTab === "revisions" ? "none" : "grid";
}

function renderActionState() {
  if (!trackerRoleBadge) return;
  if (!canEdit) {
    trackerRoleBadge.textContent = "Read Only";
    trackerRoleBadge.classList.remove("admin");
    if (editTrackerBtn) editTrackerBtn.classList.add("hidden");
    if (saveTrackerBtn) saveTrackerBtn.classList.add("hidden");
    if (cancelTrackerBtn) cancelTrackerBtn.classList.add("hidden");
    if (addGenericRowBtn) addGenericRowBtn.classList.add("hidden");
    if (addRevisionRowBtn) addRevisionRowBtn.classList.add("hidden");
    if (addMilestoneColumnBtn) addMilestoneColumnBtn.classList.add("hidden");
    if (removeMilestoneColumnBtn) removeMilestoneColumnBtn.classList.add("hidden");
    if (editStatePill) {
      editStatePill.textContent = "View Mode";
      editStatePill.classList.remove("dirty");
    }
    updateToolbarContext();
    return;
  }

  trackerRoleBadge.textContent = isEditMode ? "Admin Edit Mode" : "Admin Access";
  trackerRoleBadge.classList.add("admin");
  if (editTrackerBtn) editTrackerBtn.classList.toggle("hidden", isEditMode);
  if (saveTrackerBtn) saveTrackerBtn.classList.toggle("hidden", !isEditMode);
  if (cancelTrackerBtn) cancelTrackerBtn.classList.toggle("hidden", !isEditMode);
  const showGenericAddControl = isEditMode && ["milestones", "checklist", "revisions", "raid"].includes(activeTab);
  if (addGenericRowBtn) addGenericRowBtn.classList.toggle("hidden", !showGenericAddControl);
  const showRevisionAddControl = isEditMode && activeTab === "revisions";
  if (addRevisionRowBtn) addRevisionRowBtn.classList.toggle("hidden", !showRevisionAddControl);
  const showMilestoneColumnControls = isEditMode && activeTab === "milestones";
  if (addMilestoneColumnBtn) addMilestoneColumnBtn.classList.toggle("hidden", !showMilestoneColumnControls);
  if (removeMilestoneColumnBtn) removeMilestoneColumnBtn.classList.toggle("hidden", !showMilestoneColumnControls);
  if (addGenericRowBtn) {
    if (activeTab === "milestones") addGenericRowBtn.textContent = "+ Add Milestone Row";
    else if (activeTab === "checklist") addGenericRowBtn.textContent = "+ Add Checklist Row";
    else if (activeTab === "revisions") addGenericRowBtn.textContent = "+ Add Revision Row";
    else if (activeTab === "raid") addGenericRowBtn.textContent = "+ Add RAID Row";
    else addGenericRowBtn.textContent = "+ Add Row";
  }
  if (editStatePill) {
    editStatePill.textContent = isEditMode ? (hasUnsavedChanges ? "Unsaved Changes" : "Editing") : "Saved";
    editStatePill.classList.toggle("dirty", isEditMode && hasUnsavedChanges);
  }
  updateToolbarContext();
  renderProjectInfoBox();
}

if (tabRow) {
  tabRow.addEventListener("click", event => {
    const button = event.target.closest(".tab-btn");
    if (!button) return;
    const tab = button.dataset.tab;
    if (tab === activeTab) return;
    setActiveTab(tab, { resetFilters: true, clearDrilldown: true });
  });
}

if (searchInput) {
  searchInput.addEventListener("input", () => {
    activeDrilldown = null;
    highlightedRowContext = null;
    renderSummary();
    renderTable();
  });
}
if (statusFilter) {
  statusFilter.addEventListener("change", () => {
    activeDrilldown = null;
    highlightedRowContext = null;
    renderSummary();
    renderTable();
  });
}

if (summaryGrid) {
  summaryGrid.addEventListener("click", event => {
    const card = event.target.closest(".summary-card[data-drill-key]");
    if (!card) return;
    drilldownFromSummary(card.dataset.drillKey, card.dataset.drillTab);
    renderSummary();
  });
  summaryGrid.addEventListener("keydown", event => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const card = event.target.closest(".summary-card[data-drill-key]");
    if (!card) return;
    event.preventDefault();
    drilldownFromSummary(card.dataset.drillKey, card.dataset.drillTab);
    renderSummary();
  });
}

if (insightGrid) {
  insightGrid.addEventListener("click", event => {
    const card = event.target.closest(".drillable-card[data-insight-tab]");
    if (!card) return;
    const tab = card.dataset.insightTab;
    setActiveTab(tab, { resetFilters: false, clearDrilldown: true });
    if (trackerPanel) trackerPanel.scrollIntoView({ behavior: "smooth", block: "start" });
  });
  insightGrid.addEventListener("keydown", event => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const card = event.target.closest(".drillable-card[data-insight-tab]");
    if (!card) return;
    event.preventDefault();
    const tab = card.dataset.insightTab;
    setActiveTab(tab, { resetFilters: false, clearDrilldown: true });
    if (trackerPanel) trackerPanel.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

if (editTrackerBtn) {
  editTrackerBtn.addEventListener("click", () => {
    if (!canEdit || !activeClient) return;
    isEditMode = true;
    hasUnsavedChanges = false;
    editSnapshot = deepClone(activeClient.trackerData);
    renderActionState();
    renderTable();
  });
}

if (cancelTrackerBtn) {
  cancelTrackerBtn.addEventListener("click", () => {
    if (!canEdit || !isEditMode || !activeClient) return;
    if (editSnapshot) activeClient.trackerData = deepClone(editSnapshot);
    isEditMode = false;
    hasUnsavedChanges = false;
    editSnapshot = null;
    setProjectHeader();
    renderSummary();
    renderActionState();
    renderTable();
  });
}

if (saveTrackerBtn) {
  saveTrackerBtn.addEventListener("click", () => {
    if (!canEdit || !isEditMode || !activeClient) return;
    activeClient.trackerData.project.name = activeClient.name;
    saveTrackerData();
    isEditMode = false;
    hasUnsavedChanges = false;
    editSnapshot = null;
    setProjectHeader();
    renderSummary();
    renderActionState();
    renderTable();
  });
}

if (addGenericRowBtn) {
  addGenericRowBtn.addEventListener("click", () => {
    if (!canEdit || !isEditMode || !activeClient) return;
    const trackerData = getTrackerData();
    if (!trackerData) return;

    if (activeTab === "milestones") {
      insertMilestoneRow(trackerData, (trackerData.milestones || []).length - 1);
    } else if (activeTab === "checklist") {
      addChecklistRow(trackerData);
    } else if (activeTab === "revisions") {
      addGoLiveRevisionRow(trackerData);
    } else if (activeTab === "raid") {
      insertRaidRow(trackerData, (trackerData.raidLogs || []).length - 1);
    }
    hasUnsavedChanges = true;
    renderActionState();
    renderSummary();
    renderTable();
  });
}

if (addRevisionRowBtn) {
  addRevisionRowBtn.addEventListener("click", () => {
    if (!canEdit || !isEditMode || !activeClient || activeTab !== "revisions") return;
    const trackerData = getTrackerData();
    if (!trackerData) return;
    addGoLiveRevisionRow(trackerData);
    hasUnsavedChanges = true;
    renderActionState();
    renderTable();
  });
}

if (addMilestoneColumnBtn) {
  addMilestoneColumnBtn.addEventListener("click", () => {
    if (!canEdit || !isEditMode || !activeClient || activeTab !== "milestones") return;
    const data = getTrackerData();
    if (!data) return;
    data.meta = data.meta || {};
    data.meta.customMilestoneColumns = getCustomMilestoneColumns(data);

    const labelRaw = window.prompt("Enter new milestone column name:");
    if (!labelRaw) return;
    const label = labelRaw.trim();
    if (!label) return;

    const key = normalizeColumnKey(label);
    if (!key) {
      window.alert("Invalid column name.");
      return;
    }

    const reserved = new Set(["sno", "milestone", "owner", "planned_start", "planned_end", "actual_start", "actual_end", "status", "planned_days", "done_pct", "phase", "accountability", "health"]);
    const existingKeys = new Set(getCustomMilestoneColumns(data).map(item => item.key));
    if (reserved.has(key) || existingKeys.has(key)) {
      window.alert("Column already exists. Use a different name.");
      return;
    }

    const typeRaw = window.prompt('Enter data type: "text", "date", or "number"', "text");
    const type = String(typeRaw || "text").trim().toLowerCase();
    if (!["text", "date", "number"].includes(type)) {
      window.alert('Invalid type. Use "text", "date", or "number".');
      return;
    }

    data.meta.customMilestoneColumns.push({ key, label, type });
    (data.milestones || []).forEach(row => {
      if (!(key in row)) row[key] = "";
    });
    hasUnsavedChanges = true;
    renderActionState();
    renderTable();
  });
}

if (removeMilestoneColumnBtn) {
  removeMilestoneColumnBtn.addEventListener("click", () => {
    if (!canEdit || !isEditMode || !activeClient || activeTab !== "milestones") return;
    const data = getTrackerData();
    const columns = getCustomMilestoneColumns(data);
    if (!columns.length) {
      window.alert("No custom milestone columns to remove.");
      return;
    }

    const listText = columns.map((col, idx) => `${idx + 1}. ${col.label}`).join("\n");
    const pick = window.prompt(`Select column number to remove:\n${listText}`);
    const index = Number(pick) - 1;
    if (!Number.isInteger(index) || index < 0 || index >= columns.length) return;
    const selected = columns[index];
    const ok = window.confirm(`Remove milestone column "${selected.label}"?`);
    if (!ok) return;

    data.meta.customMilestoneColumns = columns.filter((_, idx) => idx !== index);
    (data.milestones || []).forEach(row => {
      delete row[selected.key];
    });
    hasUnsavedChanges = true;
    renderActionState();
    renderTable();
  });
}

if (resetTableBtn) {
  resetTableBtn.addEventListener("click", () => {
    if (!canEdit) {
      window.alert("Only admin can reset tracker data.");
      return;
    }
    if (!activeClient) return;

    const data = getTrackerData();
    if (!data) return;

    if (activeTab === "milestones") {
      const milestones = data.milestones || [];
      if (!milestones.length) {
        window.alert("No milestone data available.");
        return;
      }

      const target = window.prompt('Enter WBS to reset (example: 6.1) or type "ALL" to reset all milestone actual dates:');
      if (!target) return;
      const normalized = target.trim();
      if (!normalized) return;

      const resetAll = normalized.toUpperCase() === "ALL";
      const matched = resetAll
        ? milestones
        : milestones.filter(item => String(item.sNo || "").trim() === normalized);

      if (!matched.length) {
        window.alert(`No milestone found for "${normalized}".`);
        return;
      }

      const ok = window.confirm(
        resetAll
          ? `Reset Actual Start and Actual End for all milestones (${matched.length} row(s))?`
          : `Reset Actual Start and Actual End for WBS "${normalized}" (${matched.length} row(s))?`
      );
      if (!ok) return;

      matched.forEach(item => {
        item.actualStart = "";
        item.actualEnd = "";
      });

      saveTrackerData();
      hasUnsavedChanges = false;
      renderSummary();
      renderActionState();
      renderTable();
      window.alert("Milestones reset completed.");
      return;
    }

    if (activeTab === "checklist") {
      const checklist = data.goLiveChecklist || [];
      if (!checklist.length) {
        window.alert("No checklist data available.");
        return;
      }
      const ok = window.confirm("Reset Go-Live checklist execution fields (status, actual dates, remarks) for all rows?");
      if (!ok) return;

      checklist.forEach(item => {
        item.status = "Not Started";
        item.actualStart = "";
        item.actualEnd = "";
        item.remarks = "";
      });
      saveTrackerData();
      hasUnsavedChanges = false;
      renderSummary();
      renderActionState();
      renderTable();
      window.alert("Go-Live checklist reset completed.");
      return;
    }

    if (activeTab === "revisions") {
      const revisions = data.goLiveRevisions || [];
      if (!revisions.length) {
        window.alert("No go-live revision data available.");
        return;
      }
      const ok = window.confirm("Reset all Go-Live revision rows?");
      if (!ok) return;

      data.goLiveRevisions = [];
      saveTrackerData();
      hasUnsavedChanges = false;
      renderSummary();
      renderActionState();
      renderTable();
      window.alert("Go-Live revisions reset completed.");
      return;
    }

    if (activeTab === "raid") {
      const logs = data.raidLogs || [];
      if (!logs.length) {
        window.alert("No RAID data available.");
        return;
      }
      const ok = window.confirm("Reset RAID log and keep only one blank row?");
      if (!ok) return;

      data.raidLogs = [createBlankRaidRow("1")];
      saveTrackerData();
      hasUnsavedChanges = false;
      renderSummary();
      renderActionState();
      renderTable();
      window.alert("RAID log reset completed.");
    }
  });
}

if (tableBody) {
  tableBody.addEventListener("click", event => {
    const rowBtn = event.target.closest(".raid-action-btn");
    if (rowBtn && canEdit && isEditMode && activeClient && (activeTab === "raid" || activeTab === "milestones")) {
      const index = Number(rowBtn.dataset.index);
      const trackerData = getTrackerData();
      if (!trackerData) return;
      const action = rowBtn.dataset.rowAction;
      if (activeTab === "raid") {
      if (action === "add") {
        insertRaidRow(trackerData, index);
        hasUnsavedChanges = true;
        renderActionState();
        renderTable();
        return;
      }
        if (action === "remove") {
          const result = removeRaidRow(trackerData, index);
          if (result.reason === "minimum_one_row") {
            window.alert("At least one RAID row is required.");
          }
          if (result.removed) {
            hasUnsavedChanges = true;
            renderActionState();
            renderTable();
          }
          return;
        }
      }
      if (activeTab === "milestones") {
        if (action === "add") {
          insertMilestoneRow(trackerData, index);
          hasUnsavedChanges = true;
          renderActionState();
          renderSummary();
          renderTable();
          return;
        }
        if (action === "remove") {
          const result = removeMilestoneRow(trackerData, index);
          if (result.reason === "minimum_one_row") {
            window.alert("At least one milestone row is required.");
          }
          if (result.removed) {
            hasUnsavedChanges = true;
            renderActionState();
            renderSummary();
            renderTable();
          }
          return;
        }
      }
    }

    const input = event.target.closest('.cell-input[type="date"]');
    if (!input) return;
    if (typeof input.showPicker === "function") {
      try {
        input.showPicker();
      } catch (error) {
        // ignore if browser blocks programmatic picker
      }
    }
  });

  tableBody.addEventListener("input", event => {
    if (!canEdit || !isEditMode || !activeClient) return;
    const input = event.target.closest(".cell-input");
    if (!input) return;

    const index = Number(input.dataset.index);
    const key = input.dataset.key;
    const cfg = tableConfigForTab(activeTab);
    if (!cfg.rows[index]) return;

    cfg.rows[index][key] = input.value;
    hasUnsavedChanges = true;
    renderActionState();
    if (activeTab === "milestones") renderSummary();
  });
}

if (projectInfoBox) {
  projectInfoBox.addEventListener("input", event => {
    if (!canEdit || !isEditMode || !activeClient) return;
    const input = event.target.closest(".project-info-input");
    if (!input) return;
    const field = input.dataset.projectField;
    const data = getTrackerData();
    if (!data?.project || !field) return;

    data.project[field] = input.value || "";

    hasUnsavedChanges = true;
    if (editStatePill) {
      editStatePill.textContent = "Unsaved Changes";
      editStatePill.classList.add("dirty");
    }
  });
}

window.addEventListener("storage", event => {
  if (event.key !== STORAGE_KEY || isEditMode) return;
  clients = loadClients();
  activeClient = clients.find(client => client.id === activeClientId) || null;
  if (!activeClient) {
    renderEmptyTracker("Selected client not found.");
    return;
  }
  ensureClientTracker(activeClient);
  hasUnsavedChanges = false;
  setProjectHeader();
  renderSummary();
  renderActionState();
  renderTable();
});
