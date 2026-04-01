const BASE_FIELDS = [
  { id: "req_title", label: "Requisition Title (Job Title)", mandatory: true },
  { id: "req_desc", label: "Requisition Description (Job Description)", mandatory: true },
  { id: "location", label: "Location", mandatory: true },
  { id: "req_type", label: "Requisition Type", mandatory: true },
  { id: "employment_type", label: "Type of Employment", mandatory: true },
  { id: "expected_start", label: "Expected Start Date", mandatory: true },
  { id: "roles_resp", label: "Roles & Responsibilities", mandatory: true },
  { id: "qualifications", label: "Qualifications", mandatory: true },
  { id: "max_exp", label: "Maximum Years of Experience", mandatory: true },
  { id: "min_exp", label: "Minimum Years of Experience", mandatory: true },
  { id: "tags", label: "Tags", mandatory: false },
  { id: "designation", label: "Designation", mandatory: false },
  { id: "qualification", label: "Qualification", mandatory: false },
  { id: "min_salary", label: "Minimum Salary", mandatory: false },
  { id: "max_salary", label: "Maximum Salary", mandatory: false },
  { id: "reference_no", label: "Reference Number", mandatory: false },
  { id: "open_positions", label: "Open Positions", mandatory: false },
  { id: "mandatory_skills", label: "Mandatory Skills", mandatory: false },
  { id: "desirable_skills", label: "Desirable Skills", mandatory: false },
  { id: "skills_eval", label: "Skills To Be Evaluated On", mandatory: false },
  { id: "hiring_manager", label: "Hiring Manager", mandatory: false },
  { id: "department", label: "Department", mandatory: true },
  { id: "projects", label: "Projects", mandatory: true },
  { id: "req_date", label: "Requisition Date", mandatory: true },
  { id: "band", label: "Band", mandatory: false },
  { id: "billability", label: "Billability", mandatory: false },
  { id: "req_owner", label: "Requisition Owner", mandatory: false },
  { id: "reporting_manager", label: "Reporting Manager", mandatory: false },
  { id: "account_name", label: "Account Name", mandatory: false },
  { id: "project_name", label: "Project Name", mandatory: false },
  { id: "project_type", label: "Project Type", mandatory: false },
  { id: "sow_name", label: "SOW Name", mandatory: false },
  { id: "sow_status", label: "SOW Status", mandatory: false },
  { id: "sow_start", label: "SOW Start Date", mandatory: false },
  { id: "sow_end", label: "SOW End Date", mandatory: false },
  { id: "l1_panel", label: "L1 Panel Name", mandatory: false },
  { id: "l2_panel", label: "L2 Panel Name", mandatory: false },
  { id: "l3_panel", label: "L3 Panel / Client Round", mandatory: false }
];

const REQUISITION_DEFAULT_CANVAS_SPEC = [
  { id: "req_title", label: "Requisition Title (Job Title)", type: "text", required: true, fixed: true },
  { id: "req_desc", label: "Requisition Description (Job Description)", type: "textarea", required: true, fixed: true },
  { id: "location", label: "Location", type: "text", required: true, fixed: true },
  { id: "req_type", label: "Requisition Type", type: "dropdown", options: ["New", "Replacement"], required: true },
  { id: "employment_type", label: "Type of Employment", type: "dropdown", options: ["Permanent", "Contract", "Intern"], required: true },
  { id: "expected_start", label: "Expected Start Date", type: "date", required: true },
  { id: "roles_resp", label: "Roles & Responsibilities", type: "text", required: true },
  { id: "qualifications", label: "Qualifications", type: "text", required: true },
  { id: "max_exp", label: "Maximum Years Of Experience", type: "text", required: true },
  { id: "min_exp", label: "Minimum Years Of Experience", type: "text", required: true },
  { id: "tags", label: "Tags", type: "text", required: false },
  { id: "designation", label: "Designation", type: "text", required: false },
  { id: "qualification", label: "Qualification", type: "text", required: false },
  { id: "min_salary", label: "Minimum Salary", type: "text", required: false },
  { id: "max_salary", label: "Maximum Salary", type: "text", required: false },
  { id: "reference_no", label: "Reference Number", type: "text", required: false },
  { id: "open_positions", label: "Open Positions", type: "text", required: false },
  { id: "mandatory_skills", label: "Mandatory Skills", type: "text", required: false },
  { id: "desirable_skills", label: "Desirable Skills", type: "text", required: false },
  { id: "skills_eval", label: "Skills To Be Evaluated On", type: "text", required: false },
  { id: "hiring_manager", label: "Hiring Manager", type: "text", required: false },
  { id: "department", label: "Department", type: "dropdown", options: [], required: true },
  { id: "projects", label: "Projects", type: "dropdown", options: [], required: true }
];

const PII_BASE_FIELDS = [
  // Personal Details
  { id: "salutation", label: "Salutation", mandatory: false },
  { id: "first_name_govt_id", label: "First Name (As per Government official Id)", mandatory: true },
  { id: "last_name_govt_id", label: "Last Name (As per Government official Id)", mandatory: true },
  { id: "date_of_birth", label: "Date of Birth", mandatory: true },
  { id: "phone_number", label: "Phone Number", mandatory: true },
  { id: "gender", label: "Gender", mandatory: false },
  { id: "blood_group", label: "Blood Group", mandatory: false },
  { id: "alternative_phone_number", label: "Alternative Phone Number", mandatory: false },
  { id: "emergency_contact_number", label: "Emergency Contact Number", mandatory: false },
  { id: "aadhar_number", label: "Aadhar Number", mandatory: false },
  { id: "pan_number", label: "Pan Number", mandatory: false },
  { id: "religion", label: "Religion", mandatory: false },
  { id: "nationality", label: "Nationality", mandatory: false },
  { id: "passport_issue_country", label: "Passport Issue Country", mandatory: false },
  { id: "passport_valid_till", label: "Passport Valid till", mandatory: false },
  { id: "passport_number", label: "Passport Number", mandatory: false },

  // Present Address
  { id: "present_address_line_1", label: "Present Address Line 1", mandatory: false },
  { id: "present_address_line_2", label: "Present Address Line 2", mandatory: false },
  { id: "present_landmark", label: "Present Landmark", mandatory: false },
  { id: "present_city", label: "Present City", mandatory: false },
  { id: "present_state", label: "Present State", mandatory: false },
  { id: "present_country", label: "Present Country", mandatory: false },
  { id: "present_pin_code", label: "Present Pin Code", mandatory: false },

  // Permanent Address
  { id: "same_as_present_address", label: "Is your Permanent address same as Present address?", mandatory: false },
  { id: "permanent_address_line_1", label: "Permanent Address Line 1", mandatory: false },
  { id: "permanent_address_line_2", label: "Permanent Address Line 2", mandatory: false },
  { id: "permanent_landmark", label: "Permanent Landmark", mandatory: false },
  { id: "permanent_city", label: "Permanent City", mandatory: false },
  { id: "permanent_state", label: "Permanent State", mandatory: false },
  { id: "permanent_country", label: "Permanent Country", mandatory: false },
  { id: "permanent_pin_code", label: "Permanent Pin Code", mandatory: false },

  // Bank Details
  { id: "account_holder_name", label: "Account Holder's Name", mandatory: false },
  { id: "bank_name", label: "Bank Name", mandatory: false },
  { id: "bank_branch", label: "Bank Branch", mandatory: false },
  { id: "account_number", label: "Account Number", mandatory: false },
  { id: "ifsc_code", label: "IFSC Code", mandatory: false },

  // Education Details (Array List)
  { id: "education_course_degree", label: "Education: Name of Course / Degree", mandatory: false },
  { id: "education_specialization", label: "Education: Specialization", mandatory: false },
  { id: "education_duration_years", label: "Education: Duration of Course (In years)", mandatory: false },
  { id: "education_institute", label: "Education: Name of the Institute / College", mandatory: false },
  { id: "education_university_name", label: "Education: University Name", mandatory: false },
  { id: "education_institute_address", label: "Education: Address of Institute / College", mandatory: false },
  { id: "education_period_from", label: "Education: Period From", mandatory: false },
  { id: "education_period_to", label: "Education: Period To", mandatory: false },
  { id: "education_percentage_cgpa", label: "Education: Percentage / CGPA", mandatory: false },

  // Work Experience (Array List)
  { id: "work_experience_available", label: "Do you have any prior work experience?", mandatory: false },
  { id: "work_org_name", label: "Work Experience: Name of the Organization", mandatory: false },
  { id: "work_employment_type", label: "Work Experience: Type of Employment", mandatory: false },
  { id: "work_designation", label: "Work Experience: Designation while leaving", mandatory: false },
  { id: "work_joining_date", label: "Work Experience: Joining date", mandatory: false },
  { id: "work_relieving_date", label: "Work Experience: Relieving date", mandatory: false },
  { id: "work_reason_for_leaving", label: "Work Experience: Reason for leaving", mandatory: false },

  // References (Array List)
  { id: "reference_relationship", label: "Reference: Nature of Relationship", mandatory: false },
  { id: "reference_name", label: "Reference: Name", mandatory: false },
  { id: "reference_email", label: "Reference: Email Id", mandatory: false },
  { id: "reference_mobile", label: "Reference: Mobile Number", mandatory: false },
  { id: "reference_company", label: "Reference: Company", mandatory: false },
  { id: "reference_designation", label: "Reference: Designation", mandatory: false }
];

const APPLY_BASE_FIELDS = [
  { id: "upload_resume", label: "Upload Resume", mandatory: true },
  { id: "first_name", label: "First Name", mandatory: true },
  { id: "middle_name", label: "Middle Name", mandatory: false },
  { id: "last_name", label: "Last Name", mandatory: true },
  { id: "email", label: "Email", mandatory: true },
  { id: "phone_number", label: "Phone Number", mandatory: true },
  { id: "current_location", label: "Current Location", mandatory: true },
  { id: "preferred_location", label: "Preferred Location", mandatory: true },
  { id: "notice_period", label: "Notice Period", mandatory: true },
  { id: "gender", label: "Gender", mandatory: true },
  { id: "highest_qualification", label: "Highest Qualification", mandatory: true },
  { id: "total_experience_years", label: "Total Experience (in years)", mandatory: true }
];

const OFFER_BASE_FIELDS = [
  { id: "first_name", label: "First Name", mandatory: true },
  { id: "last_name", label: "Last Name", mandatory: true },
  { id: "cibil_score", label: "CIBIL Score", mandatory: false },
  { id: "job_code", label: "Job Code", mandatory: true },
  { id: "job_title", label: "Job Title", mandatory: true },
  { id: "job_grade", label: "Job Grade", mandatory: true },
  { id: "designation", label: "Designation", mandatory: false },
  { id: "department", label: "Department", mandatory: true },
  { id: "job_band", label: "Job Band", mandatory: true },
  { id: "fixed_pay", label: "Fixed Pay", mandatory: true },
  { id: "joining_country", label: "Joining Country", mandatory: true },
  { id: "joining_location", label: "Joining Location", mandatory: true },
  { id: "notice_period_days", label: "Notice Period (days)", mandatory: true },
  { id: "variable_pay", label: "Variable Pay", mandatory: true },
  { id: "joining_bonus", label: "Joining Bonus", mandatory: true },
  { id: "offer_type", label: "Offer Type", mandatory: true },
  { id: "remarks", label: "Remarks", mandatory: false }
];

const APPLY_DEFAULT_CANVAS_SPEC = [
  { id: "upload_resume", label: "Upload Resume", type: "file", required: true },
  { id: "first_name", label: "First Name", type: "text", required: true, typeLabel: "Auto Parsed" },
  { id: "middle_name", label: "Middle Name", type: "text", required: false, typeLabel: "Auto Parsed" },
  { id: "last_name", label: "Last Name", type: "text", required: true, typeLabel: "Auto Parsed" },
  { id: "email", label: "Email", type: "email", required: true, typeLabel: "Auto Parsed" },
  { id: "phone_number", label: "Phone Number", type: "tel", required: true, typeLabel: "Auto Parsed" },
  { id: "current_location", label: "Current Location", type: "text", required: true, typeLabel: "Google Maps Search" },
  { id: "preferred_location", label: "Preferred Location", type: "text", required: true },
  {
    id: "notice_period",
    label: "Notice Period",
    type: "dropdown",
    options: ["Immediate", "< 15 Days", "15 - 30 Days", "30 - 60 Days", "60 - 90 Days", "> 90 Days"],
    required: true
  },
  {
    id: "gender",
    label: "Gender",
    type: "dropdown",
    options: ["Male", "Female", "Others", "Don't prefer to disclose"],
    required: true
  },
  { id: "highest_qualification", label: "Highest Qualification", type: "text", required: true },
  { id: "total_experience_years", label: "Total Experience (in years)", type: "text", required: true }
];

const OFFER_DEFAULT_CANVAS_SPEC = [
  { id: "first_name", label: "First Name", type: "text", required: true },
  { id: "last_name", label: "Last Name", type: "text", required: true },
  { id: "cibil_score", label: "CIBIL Score", type: "number", required: false },
  { id: "job_code", label: "Job Code", type: "dropdown", options: ["SE1-IND-BLR"], required: true },
  { id: "job_title", label: "Job Title", type: "dropdown", options: ["Assistant Manager"], required: true },
  { id: "job_grade", label: "Job Grade", type: "dropdown", options: ["C2"], required: true },
  { id: "designation", label: "Designation", type: "dropdown", options: ["Designation 1", "Designation 2"], required: false },
  { id: "department", label: "Department", type: "text", required: true },
  { id: "job_band", label: "Job Band", type: "text", required: true },
  { id: "fixed_pay", label: "Fixed Pay", type: "number", required: true },
  { id: "joining_country", label: "Joining Country", type: "dropdown", options: ["India"], required: true },
  { id: "joining_location", label: "Joining Location", type: "text", required: true },
  { id: "notice_period_days", label: "Notice Period (days)", type: "number", required: true },
  { id: "variable_pay", label: "Variable Pay", type: "number", required: true },
  { id: "joining_bonus", label: "Joining Bonus", type: "dropdown", options: ["No", "Yes"], required: true },
  { id: "offer_type", label: "Offer Type", type: "dropdown", options: ["Appointment Letter", "Offer Letter"], required: true },
  { id: "remarks", label: "Remarks", type: "textarea", required: false }
];
const OFFER_SECTION_ORDER = ["candidate_details", "position_details", "offer_details"];
const OFFER_SECTION_LABELS = {
  candidate_details: "Candidate Details",
  position_details: "Position Details",
  offer_details: "Offer Details"
};
const OFFER_FIELD_SECTION_MAP = {
  first_name: "candidate_details",
  last_name: "candidate_details",
  cibil_score: "candidate_details",
  job_code: "position_details",
  job_title: "position_details",
  job_grade: "position_details",
  designation: "position_details",
  department: "position_details",
  job_band: "position_details",
  joining_country: "position_details",
  joining_location: "position_details",
  notice_period_days: "position_details",
  fixed_pay: "offer_details",
  variable_pay: "offer_details",
  joining_bonus: "offer_details",
  offer_type: "offer_details",
  remarks: "offer_details"
};

const CLIENT_PAGES = [
  { key: "requisition", label: "Requisition Form" },
  { key: "pii", label: "PII Form" },
  { key: "apply", label: "Apply Form" },
  { key: "offer", label: "Offer Form" },
  { key: "document_collection", label: "Document Collection" },
  { key: "fitment", label: "Fitment & Offer" },
  { key: "it_item", label: "IT Item" },
  { key: "data_migration", label: "Data Migration" },
  { key: "ta_checklist", label: "TA Checklist" }
];
const WORKFLOW_PAGE_KEY = "workflow";
const CLIENT_USER_ACCESS_PAGES = ["requisition", "pii", "apply", "document_collection", "fitment", "workflow", "it_item", "data_migration"];

const TA_CHECKLIST_TEMPLATE = [
  { sNo: "1", requirement: "Requisition Fields", description: "List of fields required to create a requisition are to be defined as per the template." },
  { sNo: "2", requirement: "Requisition Approval Matrix", description: "Parameters and levels of requisition approvals to be shared as per template." },
  { sNo: "3", requirement: "Department Structure", description: "Current organization structure to be shared, including geography-based departments if applicable." },
  { sNo: "4", requirement: "Apply Experience", description: "Apply experience details captured via application process." },
  { sNo: "5", requirement: "Interview Feedback Forms", description: "Evaluation forms to be defined as per sample feedback template." },
  { sNo: "6", requirement: "Fitment & Offer Fields", description: "All fields needed to create fitment and generate offer letter to be defined as per sample template." },
  { sNo: "7", requirement: "Fitment Calculator", description: "Share fitment/salary calculator used to compute offered CTC with component breakdown." },
  { sNo: "8", requirement: "Offer Letter Templates", description: "Share current offer templates and highlight all clauses involved in offer letters." },
  { sNo: "9", requirement: "Fitment & Offer Letter Approval Matrix", description: "Approval parameters for fitment and offer to be shared as per template." },
  { sNo: "10", requirement: "Document Collection", description: "Define required recruitment documents and mandatory stage of collection." },
  { sNo: "11", requirement: "Personal Information Form", description: "Candidate information to be captured separately from apply experience." },
  { sNo: "12", requirement: "Candidate Survey", description: "Survey parameters conducted during recruitment process to be defined." },
  { sNo: "13", requirement: "Reports", description: "Reports to be made available in TA." },
  { sNo: "14", requirement: "Recruitment Workflow", description: "Recruitment process and workflow to be defined as per template." },
  { sNo: "15", requirement: "Duplicity Check", description: "By default, duplicity check based on candidate email; call out additional parameters if needed." },
  { sNo: "16", requirement: "Simultaneous Applies and Cool Off", description: "Define job-apply limits and cool-off period for candidates." },
  { sNo: "17", requirement: "Emails", description: "Emails triggered to candidates and internal users are defined as per template." }
];
const DEFAULT_PII_SECTIONS = [
  "Personal Details",
  "Present Address",
  "Permanent Address",
  "Bank Details",
  "Education Details",
  "Work Experience",
  "References"
];
const MAIN_SUB_DEPARTMENT_KEY = "__main__";
const MAIN_GEO_KEY = "__main_geo__";
const PII_DEFAULT_GEO_KEY = "__pii_default_geo__";
const APPLY_DEFAULT_GEO_KEY = "__apply_default_geo__";
const APPLY_SOURCE_OPTIONS = ["Career Site", "Recruiter Upload", "Employee Referral", "IJP"];
const CLIENT_PRODUCT_OPTIONS = ["Standard", "Premium"];
const CHAT_FAQ_LIBRARY = [
  {
    id: "faq_add_client",
    question: "How do I add a new client?",
    keywords: ["add client", "new client", "create client", "client setup"],
    answer: "Go to Clients -> Add Client, enter client details, set integrations, and click Save Client."
  },
  {
    id: "faq_manage_users",
    question: "How do I create manager or client users?",
    keywords: ["manager user", "client users", "add user", "section access"],
    answer: "Use Manager User for manager accounts. Use Client Users inside a client workspace to create users and assign section access."
  },
  {
    id: "faq_requisition_canvas",
    question: "How do I configure requisition fields?",
    keywords: ["requisition fields", "form canvas", "drag fields", "submit canvas"],
    answer: "Open Requisition Form, select Geo/Department workspace, add/import fields, drag to canvas, reorder, and click Submit Canvas."
  },
  {
    id: "faq_pii_apply_filters",
    question: "How do PII and Apply filters work?",
    keywords: ["pii", "apply", "geo filter", "source filter", "apply source"],
    answer: "PII uses Geo and Section controls. Apply uses Geo and Source filters. Select the context first, then maintain fields on canvas."
  },
  {
    id: "faq_document_collection",
    question: "How do I add document collection items with remarks?",
    keywords: ["document collection", "pre offer", "post offer", "remark"],
    answer: "In Document Collection, choose Geo, enter document name and optional remark in Pre-Offer or Post-Offer, then click Add."
  },
  {
    id: "faq_sow",
    question: "How do I upload and manage SoW?",
    keywords: ["sow", "statement of work", "upload sow", "version history"],
    answer: "Upload SoW in Add Client or Admin SoW popup. Admin can update section/remark, submit changes, and review version history."
  },
  {
    id: "faq_workflow",
    question: "How do I use the workflow builder?",
    keywords: ["workflow", "node", "connect", "export svg", "export png"],
    answer: "Go to Workflow tab, add nodes (Start/Step/Decision/End), connect them, then export as SVG or PNG if needed."
  },
  {
    id: "faq_exports",
    question: "How do I export setup data?",
    keywords: ["export", "download", "xlsx", "sql", "csv download"],
    answer: "Use CSV Download for Requisition/PII/Apply/Offer workbook exports. Use SQL Generator to create SQL from configured fields."
  },
  {
    id: "faq_audit",
    question: "Where can I check history of changes?",
    keywords: ["audit", "history", "changes", "log"],
    answer: "Open Audit Log from the client workspace header. Filter by event type and actor to trace configuration and chat updates."
  },
  {
    id: "faq_permissions",
    question: "Why are some buttons disabled?",
    keywords: ["disabled", "permission", "read only", "access"],
    answer: "Buttons are disabled when your role lacks access or when required context (like active Geo/Department) is not selected."
  }
];

const integrationOptions = ["Upstream", "Assessment", "E-Sign", "BGV", "Downstream"];
const STORAGE_KEY = "zwayam_form_builder_clients_v1";
const USERS_STORAGE_KEY = "zwayam_form_builder_users_v1";
const SYNC_CHANNEL_KEY = "zwayam_form_builder_sync_v1";
const SESSION_KEY = "zwayam_form_builder_session_v1";
const SCHEMA_VERSION_KEY = "zwayam_form_builder_schema_version_v1";
const API_TOKEN_KEY = "zwayam_form_builder_api_token_v1";
const API_USER_KEY = "zwayam_form_builder_api_user_v1";
const DEFAULT_API_BASE_URL = "http://127.0.0.1:4000/api";
const API_BASE_URL = String(window.ZWAYAM_API_BASE || window.ZWAYAM_API_BASE_URL || DEFAULT_API_BASE_URL).replace(/\/+$/, "");
const API_SYNC_DEBOUNCE_MS = 350;
const CURRENT_DATA_SCHEMA_VERSION = 1;
const AUTH = {
  admin: { email: "abhijit.ghosh@zwayam.com", password: "AIGrocks@28", role: "admin" }
};

let clients = [];
let activeClientId = null;
let pendingDropFieldId = null;
let currentRole = null;
let currentUserEmail = "";
let activeClientPage = "requisition";
let activeAdminPage = "requisition";
let activeFitmentView = "offer";
let memoryClientsSnapshot = [];
let lastSyncedSignature = "";
let syncPollTimer = null;
let managedUsers = [];
let apiAuthToken = "";
let apiCurrentUser = null;
let apiSyncTimer = null;
let apiSyncInFlight = false;
let apiSyncQueued = false;
let apiPullInFlight = false;
const syncChannel = typeof BroadcastChannel !== "undefined" ? new BroadcastChannel(SYNC_CHANNEL_KEY) : null;

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function normalizeClientProduct(value) {
  const selected = String(value || "").trim();
  return CLIENT_PRODUCT_OPTIONS.includes(selected) ? selected : "Standard";
}

function normalizeApiRole(value) {
  const normalized = String(value || "").trim().toLowerCase();
  if (normalized === "admin" || normalized === "manager" || normalized === "client") return normalized;
  return null;
}

function normalizeApiProduct(value) {
  return String(value || "").trim().toUpperCase() === "PREMIUM" ? "PREMIUM" : "STANDARD";
}

function denormalizeApiProduct(value) {
  return String(value || "").trim().toUpperCase() === "PREMIUM" ? "Premium" : "Standard";
}

function parseStoredJson(raw) {
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch (error) {
    return null;
  }
}

function hasApiSession() {
  return Boolean(apiAuthToken);
}

function setApiSession(token, user) {
  apiAuthToken = String(token || "");
  apiCurrentUser = user && typeof user === "object" ? { ...user } : null;

  try {
    if (apiAuthToken) {
      localStorage.setItem(API_TOKEN_KEY, apiAuthToken);
    } else {
      localStorage.removeItem(API_TOKEN_KEY);
    }

    if (apiCurrentUser) {
      localStorage.setItem(API_USER_KEY, JSON.stringify(apiCurrentUser));
    } else {
      localStorage.removeItem(API_USER_KEY);
    }
  } catch (error) {
    // ignore storage failures
  }
}

function clearApiSession() {
  apiAuthToken = "";
  apiCurrentUser = null;
  apiSyncInFlight = false;
  apiSyncQueued = false;
  apiPullInFlight = false;
  if (apiSyncTimer) {
    window.clearTimeout(apiSyncTimer);
    apiSyncTimer = null;
  }
  try {
    localStorage.removeItem(API_TOKEN_KEY);
    localStorage.removeItem(API_USER_KEY);
  } catch (error) {
    // ignore storage failures
  }
}

function hydrateApiSessionFromStorage() {
  try {
    apiAuthToken = String(localStorage.getItem(API_TOKEN_KEY) || "");
    const storedUser = parseStoredJson(localStorage.getItem(API_USER_KEY));
    apiCurrentUser = storedUser && typeof storedUser === "object" ? storedUser : null;
  } catch (error) {
    apiAuthToken = "";
    apiCurrentUser = null;
  }
}

async function apiRequest(path, options = {}) {
  const method = String(options.method || "GET").toUpperCase();
  const requiresAuth = options.auth !== false;
  const body = options.body;

  const headers = {};
  if (body !== undefined) headers["Content-Type"] = "application/json";
  if (requiresAuth && apiAuthToken) headers.Authorization = `Bearer ${apiAuthToken}`;

  let response;
  try {
    response = await fetch(`${API_BASE_URL}${path}`, {
      method,
      headers,
      body: body !== undefined ? JSON.stringify(body) : undefined
    });
  } catch (error) {
    return { ok: false, reason: "network_error", error };
  }

  let payload = null;
  if (response.status !== 204) {
    try {
      payload = await response.json();
    } catch (error) {
      payload = null;
    }
  }

  if (!response.ok) {
    if (requiresAuth && response.status === 401) clearApiSession();
    return { ok: false, reason: "http_error", status: response.status, payload };
  }

  return { ok: true, status: response.status, payload };
}

function mapApiClientToLocalRecord(apiClient) {
  const config = apiClient && apiClient.config && typeof apiClient.config === "object" && !Array.isArray(apiClient.config)
    ? apiClient.config
    : {};
  const snapshot = config.snapshot && typeof config.snapshot === "object" && !Array.isArray(config.snapshot)
    ? config.snapshot
    : {};

  const fallbackId = apiClient && apiClient.id ? `api_${apiClient.id}` : `c_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
  const loginEmail = String(snapshot.loginEmail || config.loginEmail || "").trim().toLowerCase();
  const loginPassword = String(snapshot.loginPassword || config.loginPassword || "");
  const clientUsers = Array.isArray(snapshot.clientUsers)
    ? snapshot.clientUsers
    : (Array.isArray(config.clientUsers) ? config.clientUsers : []);

  return {
    ...snapshot,
    id: String(snapshot.id || fallbackId),
    backendId: String((apiClient && apiClient.id) || snapshot.backendId || ""),
    name: String(snapshot.name || (apiClient && apiClient.name) || "Client"),
    ownerUserId: String(snapshot.ownerUserId || (apiClient && apiClient.owner && apiClient.owner.email) || AUTH.admin.email).trim().toLowerCase(),
    product: normalizeClientProduct(snapshot.product || denormalizeApiProduct(apiClient && apiClient.product)),
    accessDisabled: typeof snapshot.accessDisabled === "boolean" ? snapshot.accessDisabled : Boolean(apiClient && apiClient.accessDisabled),
    loginEmail,
    loginPassword,
    forcePasswordReset: typeof snapshot.forcePasswordReset === "boolean"
      ? snapshot.forcePasswordReset
      : Boolean(config.forcePasswordReset),
    clientUsers: Array.isArray(clientUsers) ? clientUsers : []
  };
}

function buildApiClientPayload(client) {
  const snapshot = serializeClients([client])[0] || {};
  return {
    name: String(client && client.name ? client.name : "").trim() || "Client",
    product: normalizeApiProduct(client && client.product),
    accessDisabled: Boolean(client && client.accessDisabled),
    config: {
      snapshot: {
        ...snapshot,
        backendId: String((client && client.backendId) || snapshot.backendId || "")
      },
      loginEmail: String(snapshot.loginEmail || "").trim().toLowerCase(),
      loginPassword: String(snapshot.loginPassword || ""),
      forcePasswordReset: Boolean(snapshot.forcePasswordReset),
      clientUsers: Array.isArray(snapshot.clientUsers) ? snapshot.clientUsers : []
    }
  };
}

function applyClientsState(nextClients, options = {}) {
  clients = Array.isArray(nextClients) ? nextClients : [];
  memoryClientsSnapshot = serializeClients(clients);
  lastSyncedSignature = JSON.stringify(memoryClientsSnapshot);

  if (options.persistLocal === false) return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(memoryClientsSnapshot));
    localStorage.setItem(SCHEMA_VERSION_KEY, String(CURRENT_DATA_SCHEMA_VERSION));
  } catch (error) {
    // ignore storage failures
  }
}

async function pullClientsFromApi() {
  if (!hasApiSession() || apiPullInFlight) {
    return { ok: false, reason: "not_ready" };
  }

  apiPullInFlight = true;
  try {
    const response = await apiRequest("/clients");
    if (!response.ok) return response;

    const remoteClients = Array.isArray(response.payload) ? response.payload : [];
    const mapped = remoteClients.map(mapApiClientToLocalRecord);
    const nextClients = deserializeClients(mapped);
    const nextSignature = getClientsSignature(nextClients);
    const changed = nextSignature !== lastSyncedSignature;

    if (changed) {
      applyClientsState(nextClients);
      migrateLegacySowDocumentsToBinaryStore();
    }

    return { ok: true, changed, clients: nextClients };
  } finally {
    apiPullInFlight = false;
  }
}

function queueClientsApiSync(delayMs = API_SYNC_DEBOUNCE_MS) {
  if (!hasApiSession()) return;
  if (apiSyncTimer) window.clearTimeout(apiSyncTimer);
  apiSyncTimer = window.setTimeout(() => {
    apiSyncTimer = null;
    void pushClientsToApi();
  }, Math.max(0, Number(delayMs) || API_SYNC_DEBOUNCE_MS));
}

async function pushClientsToApi() {
  if (!hasApiSession()) return;
  if (apiSyncInFlight) {
    apiSyncQueued = true;
    return;
  }

  apiSyncInFlight = true;
  try {
    const remoteResponse = await apiRequest("/clients");
    if (!remoteResponse.ok) return;

    const remoteClients = Array.isArray(remoteResponse.payload) ? remoteResponse.payload : [];
    const byBackendId = new Map();
    const byLocalId = new Map();
    const byLoginEmail = new Map();

    remoteClients.forEach(remote => {
      byBackendId.set(String(remote.id || ""), remote);
      const mapped = mapApiClientToLocalRecord(remote);
      if (mapped.id) byLocalId.set(String(mapped.id), remote);
      const loginEmail = String(mapped.loginEmail || "").toLowerCase();
      if (loginEmail) byLoginEmail.set(loginEmail, remote);
    });

    const serialized = serializeClients(clients);
    for (let index = 0; index < clients.length; index += 1) {
      const localClient = clients[index];
      const snapshot = serialized[index] || {};
      const backendId = String(localClient.backendId || snapshot.backendId || "");
      const localId = String(localClient.id || snapshot.id || "");
      const loginEmail = String(snapshot.loginEmail || localClient.loginEmail || "").toLowerCase();

      let remote = null;
      if (backendId && byBackendId.has(backendId)) remote = byBackendId.get(backendId);
      if (!remote && localId && byLocalId.has(localId)) remote = byLocalId.get(localId);
      if (!remote && loginEmail && byLoginEmail.has(loginEmail)) remote = byLoginEmail.get(loginEmail);

      const payload = buildApiClientPayload(localClient);
      if (remote) {
        const updated = await apiRequest(`/clients/${remote.id}`, { method: "PATCH", body: payload });
        if (updated.ok && updated.payload && updated.payload.id) {
          localClient.backendId = String(updated.payload.id);
        }
        continue;
      }

      if (currentRole === "client") continue;
      const created = await apiRequest("/clients", { method: "POST", body: payload });
      if (created.ok && created.payload && created.payload.id) {
        localClient.backendId = String(created.payload.id);
      }
    }

    applyClientsState(clients);
  } catch (error) {
    console.warn("Unable to sync clients to backend API.", error);
  } finally {
    apiSyncInFlight = false;
    if (apiSyncQueued) {
      apiSyncQueued = false;
      queueClientsApiSync(0);
    }
  }
}

async function authenticateWithApi(email, password) {
  const response = await apiRequest("/login", {
    method: "POST",
    auth: false,
    body: { email, password }
  });

  if (!response.ok) {
    if (response.reason === "network_error") return { ok: false, reason: "api_unreachable" };
    if (response.status === 401) return { ok: false, reason: "invalid_credentials" };
    return { ok: false, reason: "api_error" };
  }

  const token = response.payload && response.payload.token ? String(response.payload.token) : "";
  const user = response.payload && response.payload.user && typeof response.payload.user === "object"
    ? response.payload.user
    : null;
  const role = normalizeApiRole(user && user.role);

  if (!token || !user || !role) {
    return { ok: false, reason: "api_error" };
  }

  setApiSession(token, user);
  const pullResult = await pullClientsFromApi();

  const backendClientId = user.clientId ? String(user.clientId) : null;
  let clientId = null;
  if (backendClientId) {
    const matched = clients.find(
      client => String(client.backendId || "") === backendClientId || String(client.id || "") === backendClientId
    );
    clientId = matched ? matched.id : null;
  }

  return {
    ok: true,
    auth: {
      role,
      clientId,
      backendClientId,
      userEmail: String(user.email || email || "").trim().toLowerCase(),
      reason: user.requiresPasswordReset ? "reset_required" : null
    },
    clientsPulled: Boolean(pullResult.ok)
  };
}

const loginRoot = document.getElementById("loginRoot");
const appRoot = document.getElementById("appRoot");
const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");
const loginBtn = document.getElementById("loginBtn");
const loginError = document.getElementById("loginError");
const logoutBtn = document.getElementById("logoutBtn");
const roleBadge = document.getElementById("roleBadge");
const loginPanel = document.querySelector(".login-panel");
const loginAvatar = document.querySelector(".login-avatar.photo-avatar");
let pandaBlinkTimer = null;

const clientList = document.getElementById("clientList");
const clientCount = document.getElementById("clientCount");
const openClientModalBtn = document.getElementById("openClientModalBtn");
const closeClientModalBtn = document.getElementById("closeClientModalBtn");
const clientModal = document.getElementById("clientModal");
const clientModalTitle = document.getElementById("clientModalTitle");
const clientModalName = document.getElementById("clientModalName");
const clientUserEmail = document.getElementById("clientUserEmail");
const clientUserPassword = document.getElementById("clientUserPassword");
const clientProduct = document.getElementById("clientProduct");
const clientSowInput = document.getElementById("clientSowInput");
const clientSowMeta = document.getElementById("clientSowMeta");
const integrationCount = document.getElementById("integrationCount");
const integrationRows = document.getElementById("integrationRows");
const saveClientBtn = document.getElementById("saveClientBtn");
const openAddUserModalBtn = document.getElementById("openAddUserModalBtn");
const addUserModal = document.getElementById("addUserModal");
const closeAddUserModalBtn = document.getElementById("closeAddUserModalBtn");
const newUserName = document.getElementById("newUserName");
const newUserEmail = document.getElementById("newUserEmail");
const newUserPassword = document.getElementById("newUserPassword");
const newUserPasswordToggle = document.getElementById("newUserPasswordToggle");
const openManagerUserFormBtn = document.getElementById("openManagerUserFormBtn");
const cancelManagerUserFormBtn = document.getElementById("cancelManagerUserFormBtn");
const managerUserFormModal = document.getElementById("managerUserFormModal");
const closeManagerUserFormModalBtn = document.getElementById("closeManagerUserFormModalBtn");
const saveUserBtn = document.getElementById("saveUserBtn");
const managedUserCount = document.getElementById("managedUserCount");
const managedUserListEmpty = document.getElementById("managedUserListEmpty");
const managedUserListWrap = document.getElementById("managedUserListWrap");
const managedUserListBody = document.getElementById("managedUserListBody");
const firstLoginResetModal = document.getElementById("firstLoginResetModal");
const firstLoginUserId = document.getElementById("firstLoginUserId");
const firstLoginNewPassword = document.getElementById("firstLoginNewPassword");
const firstLoginConfirmPassword = document.getElementById("firstLoginConfirmPassword");
const firstLoginResetSubmitBtn = document.getElementById("firstLoginResetSubmitBtn");
const firstLoginResetCancelBtn = document.getElementById("firstLoginResetCancelBtn");

const workspacePlaceholder = document.getElementById("workspacePlaceholder");
const workspaceContent = document.getElementById("workspaceContent");
const activeClientTitle = document.getElementById("activeClientTitle");
const adminSowManageBtn = document.getElementById("adminSowManageBtn");
const adminSowModal = document.getElementById("adminSowModal");
const closeAdminSowModalBtn = document.getElementById("closeAdminSowModalBtn");
const adminSowPanelMeta = document.getElementById("adminSowPanelMeta");
const adminSowDownloadBtn = document.getElementById("adminSowDownloadBtn");
const adminSowUploadBtn = document.getElementById("adminSowUploadBtn");
const adminSowSubmitBtn = document.getElementById("adminSowSubmitBtn");
const adminSowRemoveBtn = document.getElementById("adminSowRemoveBtn");
const adminSowFileInput = document.getElementById("adminSowFileInput");
const adminSowSectionSelect = document.getElementById("adminSowSectionSelect");
const adminSowRemarkInput = document.getElementById("adminSowRemarkInput");
const adminSowHistoryDetails = document.getElementById("adminSowHistoryDetails");
const adminSowHistoryCount = document.getElementById("adminSowHistoryCount");
const adminSowHistoryList = document.getElementById("adminSowHistoryList");
const adminSowHistorySort = document.getElementById("adminSowHistorySort");
const clientPageTabs = document.getElementById("clientPageTabs");
const fitmentOfferSwitcher = document.getElementById("fitmentOfferSwitcher");
const projectTrackerLink = document.getElementById("projectTrackerLink");
const openClientUsersBtn = document.getElementById("openClientUsersBtn");
const mainLayout = document.querySelector(".main-layout");
const requisitionDeptSwitcher = document.getElementById("requisitionDeptSwitcher");
const requisitionCreateToggleBtn = document.getElementById("requisitionCreateToggleBtn");
const requisitionCreateBlock = document.getElementById("requisitionCreateBlock");
const requisitionWorkspaceToggleBtn = document.getElementById("requisitionWorkspaceToggleBtn");
const requisitionWorkspaceBlock = document.getElementById("requisitionWorkspaceBlock");
const requisitionDeptNameInput = document.getElementById("requisitionDeptNameInput");
const requisitionHasSubDeptCheck = document.getElementById("requisitionHasSubDeptCheck");
const requisitionSubDeptRow = document.getElementById("requisitionSubDeptRow");
const requisitionSubDeptInput = document.getElementById("requisitionSubDeptInput");
const requisitionAddDeptBtn = document.getElementById("requisitionAddDeptBtn");
const requisitionDeptSelect = document.getElementById("requisitionDeptSelect");
const requisitionDeptRow = document.getElementById("requisitionDeptRow");
const requisitionQuickAddDeptBtn = document.getElementById("requisitionQuickAddDeptBtn");
const requisitionSubDeptSelect = document.getElementById("requisitionSubDeptSelect");
const requisitionSubDeptSelectRow = document.getElementById("requisitionSubDeptSelectRow");
const requisitionSubDeptCount = document.getElementById("requisitionSubDeptCount");
const requisitionShowSubDeptManageBtn = document.getElementById("requisitionShowSubDeptManageBtn");
const requisitionSubDeptManageRow = document.getElementById("requisitionSubDeptManageRow");
const requisitionNewSubDeptInput = document.getElementById("requisitionNewSubDeptInput");
const requisitionAddSubDeptBtn = document.getElementById("requisitionAddSubDeptBtn");
const requisitionRemoveSubDeptBtn = document.getElementById("requisitionRemoveSubDeptBtn");
const requisitionGeoSelect = document.getElementById("requisitionGeoSelect");
const requisitionGeoCount = document.getElementById("requisitionGeoCount");
const requisitionShowGeoManageBtn = document.getElementById("requisitionShowGeoManageBtn");
const requisitionGeoManageRow = document.getElementById("requisitionGeoManageRow");
const requisitionNewGeoInput = document.getElementById("requisitionNewGeoInput");
const requisitionAddGeoBtn = document.getElementById("requisitionAddGeoBtn");
const requisitionGeoManageRowCreate = document.getElementById("requisitionGeoManageRowCreate");
const requisitionNewGeoInputCreate = document.getElementById("requisitionNewGeoInputCreate");
const requisitionAddGeoBtnCreate = document.getElementById("requisitionAddGeoBtnCreate");
const requisitionRemoveGeoBtn = document.getElementById("requisitionRemoveGeoBtn");
const requisitionRemoveDeptBtn = document.getElementById("requisitionRemoveDeptBtn");
const requisitionDeptCount = document.getElementById("requisitionDeptCount");
const requisitionDeptHint = document.getElementById("requisitionDeptHint");
const piiSectionManager = document.getElementById("piiSectionManager");
const piiSectionSelect = document.getElementById("piiSectionSelect");
const piiAddSectionToCanvasBtn = document.getElementById("piiAddSectionToCanvasBtn");
const piiRemoveSectionFromCanvasBtn = document.getElementById("piiRemoveSectionFromCanvasBtn");
const piiSectionCount = document.getElementById("piiSectionCount");
const piiSectionHint = document.getElementById("piiSectionHint");
const applyGeoFilterBar = document.getElementById("applyGeoFilterBar");
const applyGeoFilterSelect = document.getElementById("applyGeoFilterSelect");
const applyGeoAddBtn = document.getElementById("applyGeoAddBtn");
const applySourceFilterBar = document.getElementById("applySourceFilterBar");
const applySourceFilterSelect = document.getElementById("applySourceFilterSelect");
const piiGeoFilterBar = document.getElementById("piiGeoFilterBar");
const piiGeoFilterSelect = document.getElementById("piiGeoFilterSelect");
const piiGeoAddBtn = document.getElementById("piiGeoAddBtn");
const sqlPanel = document.querySelector(".sql-panel");
const csvDownloadPanel = document.getElementById("csvDownloadPanel");
const taChecklistPanel = document.getElementById("taChecklistPanel");
const taChecklistBody = document.getElementById("taChecklistBody");
const taChecklistCount = document.getElementById("taChecklistCount");
const documentCollectionPanel = document.getElementById("documentCollectionPanel");
const documentCollectionGeoBar = document.getElementById("documentCollectionGeoBar");
const documentCollectionGeoSelect = document.getElementById("documentCollectionGeoSelect");
const documentCollectionAddGeoBtn = document.getElementById("documentCollectionAddGeoBtn");
const preOfferDocInput = document.getElementById("preOfferDocInput");
const preOfferDocRemarkInput = document.getElementById("preOfferDocRemarkInput");
const addPreOfferDocBtn = document.getElementById("addPreOfferDocBtn");
const preOfferDocList = document.getElementById("preOfferDocList");
const postOfferDocInput = document.getElementById("postOfferDocInput");
const postOfferDocRemarkInput = document.getElementById("postOfferDocRemarkInput");
const addPostOfferDocBtn = document.getElementById("addPostOfferDocBtn");
const postOfferDocList = document.getElementById("postOfferDocList");
const fitmentPanel = document.getElementById("fitmentPanel");
const fitmentFileInput = document.getElementById("fitmentFileInput");
const uploadFitmentBtn = document.getElementById("uploadFitmentBtn");
const clearFitmentBtn = document.getElementById("clearFitmentBtn");
const downloadFitmentBtn = document.getElementById("downloadFitmentBtn");
const fitmentMeta = document.getElementById("fitmentMeta");
const fitmentReplicaWrap = document.getElementById("fitmentReplicaWrap");
const fitmentFormulaBar = document.getElementById("fitmentFormulaBar");
const fitmentOfferViewButtons = Array.from(document.querySelectorAll(".fitment-offer-view-btn"));
const workflowPanel = document.getElementById("workflowPanel");
const workflowCanvas = document.getElementById("workflowCanvas");
const workflowNodeType = document.getElementById("workflowNodeType");
const workflowNodeLabel = document.getElementById("workflowNodeLabel");
const workflowAddNodeBtn = document.getElementById("workflowAddNodeBtn");
const workflowLoadExampleBtn = document.getElementById("workflowLoadExampleBtn");
const workflowConnectBtn = document.getElementById("workflowConnectBtn");
const workflowDeleteNodeBtn = document.getElementById("workflowDeleteNodeBtn");
const workflowClearBtn = document.getElementById("workflowClearBtn");
const workflowImportSvgBtn = document.getElementById("workflowImportSvgBtn");
const workflowExportSvgBtn = document.getElementById("workflowExportSvgBtn");
const workflowExportPngBtn = document.getElementById("workflowExportPngBtn");
const workflowImportSvgInput = document.getElementById("workflowImportSvgInput");
const workflowHint = document.getElementById("workflowHint");
const requisitionApprovalPanel = document.getElementById("requisitionApprovalPanel");
const addReqApprovalRowBtn = document.getElementById("addReqApprovalRowBtn");
const requisitionApprovalBody = document.getElementById("requisitionApprovalBody");
const offerApprovalPanel = document.getElementById("offerApprovalPanel");
const offerApprovalDeptSelect = document.getElementById("offerApprovalDeptSelect");
const offerApprovalDeptHint = document.getElementById("offerApprovalDeptHint");
const addOfferApprovalRowBtn = document.getElementById("addOfferApprovalRowBtn");
const offerApprovalBody = document.getElementById("offerApprovalBody");
const dependencyRulePanel = document.getElementById("dependencyRulePanel");
const addDependencyRuleBtn = document.getElementById("addDependencyRuleBtn");
const dependencyRuleBody = document.getElementById("dependencyRuleBody");
const itItemPanel = document.getElementById("itItemPanel");
const dataMigrationPanel = document.getElementById("dataMigrationPanel");
const ssoMetadataInput = document.getElementById("ssoMetadataInput");
const ssoMetadataUploadBtn = document.getElementById("ssoMetadataUploadBtn");
const ssoMetadataName = document.getElementById("ssoMetadataName");
const ssoMetadataMeta = document.getElementById("ssoMetadataMeta");
const ssoCertificateInput = document.getElementById("ssoCertificateInput");
const ssoCertificateUploadBtn = document.getElementById("ssoCertificateUploadBtn");
const ssoCertificateName = document.getElementById("ssoCertificateName");
const ssoCertificateMeta = document.getElementById("ssoCertificateMeta");
const calendarClientId = document.getElementById("calendarClientId");
const calendarTenantId = document.getElementById("calendarTenantId");
const calendarSubmitBtn = document.getElementById("calendarSubmitBtn");
const ssoSubmitBtn = document.getElementById("ssoSubmitBtn");
const akamaiSubDomain = document.getElementById("akamaiSubDomain");
const akamaiTxtRecord = document.getElementById("akamaiTxtRecord");
const akamaiCnameRecord = document.getElementById("akamaiCnameRecord");
const akamaiSubmitBtn = document.getElementById("akamaiSubmitBtn");
const dataMigrationSource = document.getElementById("dataMigrationSource");
const dataMigrationCutoverDate = document.getElementById("dataMigrationCutoverDate");
const dataMigrationNotes = document.getElementById("dataMigrationNotes");
const dataMigrationTemplateInput = document.getElementById("dataMigrationTemplateInput");
const dataMigrationTemplateUploadBtn = document.getElementById("dataMigrationTemplateUploadBtn");
const dataMigrationTemplateMeta = document.getElementById("dataMigrationTemplateMeta");
const dataMigrationSubmitBtn = document.getElementById("dataMigrationSubmitBtn");

const palette = document.getElementById("palette");
const canvas = document.getElementById("canvas");
const paletteCount = document.getElementById("paletteCount");
const canvasCount = document.getElementById("canvasCount");
const canvasDeptLabel = document.getElementById("canvasDeptLabel");
const availablePanelTitle = document.querySelector(".available-panel .panel-head h2");

const openAddFieldBtn = document.getElementById("openAddFieldBtn");
const addFieldModal = document.getElementById("addFieldModal");
const closeAddFieldModalBtn = document.getElementById("closeAddFieldModalBtn");
const customFieldLabel = document.getElementById("customFieldLabel");
const customFieldId = document.getElementById("customFieldId");
const customFieldMandatory = document.getElementById("customFieldMandatory");
const customFieldOfferSectionLabel = document.getElementById("customFieldOfferSectionLabel");
const customFieldOfferSection = document.getElementById("customFieldOfferSection");
const addFieldBtn = document.getElementById("addFieldBtn");
const importFieldsBtn = document.getElementById("importFieldsBtn");
const importFieldsInput = document.getElementById("importFieldsInput");

const typeModal = document.getElementById("typeModal");
const closeTypeModalBtn = document.getElementById("closeTypeModalBtn");
const fieldTypeSelect = document.getElementById("fieldTypeSelect");
const fieldDropdownGroup = document.getElementById("fieldDropdownGroup");
const fieldDropdownOptions = document.getElementById("fieldDropdownOptions");
const dependentFieldGroup = document.getElementById("dependentFieldGroup");
const parentFieldLabel = document.getElementById("parentFieldLabel");
const parentFieldTypeSelect = document.getElementById("parentFieldTypeSelect");
const parentDropdownGroup = document.getElementById("parentDropdownGroup");
const parentDropdownOptions = document.getElementById("parentDropdownOptions");
const dependentFieldLabel = document.getElementById("dependentFieldLabel");
const dependentFieldTypeSelect = document.getElementById("dependentFieldTypeSelect");
const dependentDropdownGroup = document.getElementById("dependentDropdownGroup");
const dependentDropdownOptions = document.getElementById("dependentDropdownOptions");
const confirmTypeBtn = document.getElementById("confirmTypeBtn");
const openAuditLogBtn = document.getElementById("openAuditLogBtn");
const auditModal = document.getElementById("auditModal");
const closeAuditModalBtn = document.getElementById("closeAuditModalBtn");
const auditLogList = document.getElementById("auditLogList");
const auditTypeFilter = document.getElementById("auditTypeFilter");
const auditActorFilter = document.getElementById("auditActorFilter");
const clientDetailModal = document.getElementById("clientDetailModal");
const closeClientDetailModalBtn = document.getElementById("closeClientDetailModalBtn");
const clientDetailContent = document.getElementById("clientDetailContent");
const deleteClientAuthModal = document.getElementById("deleteClientAuthModal");
const closeDeleteClientAuthModalBtn = document.getElementById("closeDeleteClientAuthModalBtn");
const deleteClientAuthInput = document.getElementById("deleteClientAuthInput");
const confirmDeleteClientBtn = document.getElementById("confirmDeleteClientBtn");
const deleteUserAuthModal = document.getElementById("deleteUserAuthModal");
const closeDeleteUserAuthModalBtn = document.getElementById("closeDeleteUserAuthModalBtn");
const deleteUserAuthInput = document.getElementById("deleteUserAuthInput");
const confirmDeleteUserBtn = document.getElementById("confirmDeleteUserBtn");
const newDeptCopyModal = document.getElementById("newDeptCopyModal");
const closeNewDeptCopyModalBtn = document.getElementById("closeNewDeptCopyModalBtn");
const newDeptCopyFromSelect = document.getElementById("newDeptCopyFromSelect");
const newDeptCopyFieldsCheck = document.getElementById("newDeptCopyFieldsCheck");
const newDeptCopyApprovalCheck = document.getElementById("newDeptCopyApprovalCheck");
const confirmNewDeptCreateBtn = document.getElementById("confirmNewDeptCreateBtn");
const geoCloneModal = document.getElementById("geoCloneModal");
const closeGeoCloneModalBtn = document.getElementById("closeGeoCloneModalBtn");
const geoCloneTargetName = document.getElementById("geoCloneTargetName");
const geoCloneSourceSelect = document.getElementById("geoCloneSourceSelect");
const confirmGeoCloneBtn = document.getElementById("confirmGeoCloneBtn");
const skipGeoCloneBtn = document.getElementById("skipGeoCloneBtn");
const clientUsersModal = document.getElementById("clientUsersModal");
const closeClientUsersModalBtn = document.getElementById("closeClientUsersModalBtn");
const openClientUserFormBtn = document.getElementById("openClientUserFormBtn");
const clientUserFormWrap = document.getElementById("clientUserFormWrap");
const cancelClientUserFormBtn = document.getElementById("cancelClientUserFormBtn");
const clientSubUserName = document.getElementById("clientSubUserName");
const clientSubUserEmail = document.getElementById("clientSubUserEmail");
const clientSubUserPassword = document.getElementById("clientSubUserPassword");
const clientSubUserPasswordToggle = document.getElementById("clientSubUserPasswordToggle");
const clientSubUserAccessGrid = document.getElementById("clientSubUserAccessGrid");
const saveClientUserBtn = document.getElementById("saveClientUserBtn");
const clientUsersCount = document.getElementById("clientUsersCount");
const clientUsersListEmpty = document.getElementById("clientUsersListEmpty");
const clientUsersListWrap = document.getElementById("clientUsersListWrap");
const clientUsersListBody = document.getElementById("clientUsersListBody");
const clientUserAccessModal = document.getElementById("clientUserAccessModal");
const closeClientUserAccessModalBtn = document.getElementById("closeClientUserAccessModalBtn");
const clientUserAccessTarget = document.getElementById("clientUserAccessTarget");
const clientUserAccessEditGrid = document.getElementById("clientUserAccessEditGrid");
const saveClientUserAccessBtn = document.getElementById("saveClientUserAccessBtn");

const openPreviewTopBtn = document.getElementById("openPreviewTopBtn");
const previewModal = document.getElementById("previewModal");
const closePreviewModalBtn = document.getElementById("closePreviewModalBtn");
const previewRequisitionFilterBar = document.getElementById("previewRequisitionFilterBar");
const previewDeptSelect = document.getElementById("previewDeptSelect");
const previewSubDeptSelect = document.getElementById("previewSubDeptSelect");
const previewGeoSelect = document.getElementById("previewGeoSelect");
const previewContextHint = document.getElementById("previewContextHint");
const previewForm = document.getElementById("previewForm");
const previewFormEmpty = document.getElementById("previewFormEmpty");
const generateSqlBtn = document.getElementById("generateSqlBtn");
const sqlCanvas = document.getElementById("sqlCanvas");
const submitCanvasBtn = document.getElementById("submitCanvasBtn");
const downloadRequisitionWorkbookBtn = document.getElementById("downloadRequisitionWorkbookBtn");
const downloadPiiWorkbookBtn = document.getElementById("downloadPiiWorkbookBtn");
const downloadApplyWorkbookBtn = document.getElementById("downloadApplyWorkbookBtn");
const downloadOfferWorkbookBtn = document.getElementById("downloadOfferWorkbookBtn");
const chatPanelTitle = document.getElementById("chatPanelTitle");
const chatCount = document.getElementById("chatCount");
const chatList = document.getElementById("chatList");
const chatMessageInput = document.getElementById("chatMessageInput");
const sendChatBtn = document.getElementById("sendChatBtn");
const chatLauncherBtn = document.getElementById("chatLauncherBtn");
const chatUnreadCount = document.getElementById("chatUnreadCount");
const chatPopup = document.getElementById("chatPopup");
const closeChatPopupBtn = document.getElementById("closeChatPopupBtn");
const chatAttachBtn = document.getElementById("chatAttachBtn");
const chatFaqBtn = document.getElementById("chatFaqBtn");
const chatFileInput = document.getElementById("chatFileInput");
const chatAttachmentMeta = document.getElementById("chatAttachmentMeta");

let isChatPopupOpen = false;
let pendingDeleteClientId = null;
let pendingDeleteManagedUserId = null;
let pendingDeleteClientSubUser = null;
let pendingEditClientSubUserId = null;
let pendingChatAttachment = null;
let pendingNewDepartmentName = "";
let pendingNewDepartmentSubDepartments = [];
let pendingNewGeoName = "";
let pendingDropRemovedFromPalette = false;
let pendingFirstLoginClientId = null;
let editingClientId = null;
let pendingClientSowDocument = null;
let selectedWorkflowNodeId = null;
let workflowConnectFromNodeId = null;
let sowBinaryDbPromise = null;
let adminSowBinaryCheckToken = 0;

const CHAT_MAX_FILE_BYTES = 1024 * 1024 * 1.5; // 1.5 MB for localStorage safety
const SOW_MAX_FILE_BYTES = 1024 * 1024 * 1.5; // 1.5 MB to keep storage stable
const SOW_BINARY_DB_NAME = "zwayam_form_builder_sow_v1";
const SOW_BINARY_DB_VERSION = 1;
const SOW_BINARY_STORE = "client_sow_binary";

function cloneBaseFields(list) {
  return list.map(field => ({ ...field, isCustom: false }));
}

function createPageState(baseFields) {
  const fieldCatalog = cloneBaseFields(baseFields);
  return {
    fieldCatalog,
    availableIds: new Set(fieldCatalog.map(field => field.id)),
    canvasFields: [],
    canvasSectionOrder: [],
    dependencyRules: [],
    submittedCanvasFields: [],
    submittedAt: null,
    auditLogs: []
  };
}

function ensureDefaultRequisitionCanvas(pageState) {
  if (!pageState) return;
  if (Array.isArray(pageState.canvasFields) && pageState.canvasFields.length) return;
  const catalog = Array.isArray(pageState.fieldCatalog) ? pageState.fieldCatalog : [];
  const byId = new Map(catalog.map(field => [field.id, field]));
  const defaults = [];

  REQUISITION_DEFAULT_CANVAS_SPEC.forEach(spec => {
    const base = byId.get(spec.id) || catalog.find(field => String(field.label || "").toLowerCase() === String(spec.label || "").toLowerCase());
    if (!base) return;
    defaults.push({
      ...base,
      label: spec.label || base.label,
      type: spec.type || "text",
      options: Array.isArray(spec.options) ? [...spec.options] : [],
      fixed: Boolean(spec.fixed),
      validation: {
        required: Boolean(spec.required),
        minLength: null,
        maxLength: null,
        minNumber: null,
        maxNumber: null,
        pattern: null,
        errorMessage: null
      }
    });
  });

  if (!defaults.length) return;
  pageState.canvasFields = defaults;
  pageState.availableIds = new Set(
    Array.from(pageState.availableIds || []).filter(id => !defaults.some(field => field.id === id))
  );
  pageState.submittedCanvasFields = JSON.parse(JSON.stringify(defaults));
}

function ensureDefaultApplyCanvas(pageState) {
  if (!pageState) return;
  if (Array.isArray(pageState.canvasFields) && pageState.canvasFields.length) return;
  const catalog = Array.isArray(pageState.fieldCatalog) ? pageState.fieldCatalog : [];
  const byId = new Map(catalog.map(field => [field.id, field]));
  const defaults = [];

  APPLY_DEFAULT_CANVAS_SPEC.forEach(spec => {
    const base = byId.get(spec.id) || catalog.find(field => String(field.label || "").toLowerCase() === String(spec.label || "").toLowerCase());
    if (!base) return;
    defaults.push({
      ...base,
      label: spec.label || base.label,
      type: spec.type || "text",
      typeLabel: spec.typeLabel || undefined,
      options: Array.isArray(spec.options) ? [...spec.options] : [],
      validation: {
        required: Boolean(spec.required),
        minLength: null,
        maxLength: null,
        minNumber: null,
        maxNumber: null,
        pattern: null,
        errorMessage: null
      }
    });
  });

  if (!defaults.length) return;
  pageState.canvasFields = defaults;
  pageState.availableIds = new Set(
    Array.from(pageState.availableIds || []).filter(id => !defaults.some(field => field.id === id))
  );
  pageState.submittedCanvasFields = JSON.parse(JSON.stringify(defaults));
}

function ensureDefaultOfferCanvas(pageState) {
  if (!pageState) return;
  if (Array.isArray(pageState.canvasFields) && pageState.canvasFields.length) return;
  const catalog = Array.isArray(pageState.fieldCatalog) ? pageState.fieldCatalog : [];
  const byId = new Map(catalog.map(field => [field.id, field]));
  const defaults = [];

  OFFER_DEFAULT_CANVAS_SPEC.forEach(spec => {
    const base = byId.get(spec.id) || catalog.find(field => String(field.label || "").toLowerCase() === String(spec.label || "").toLowerCase());
    if (!base) return;
    defaults.push({
      ...base,
      label: spec.label || base.label,
      type: spec.type || "text",
      options: Array.isArray(spec.options) ? [...spec.options] : [],
      sectionId: OFFER_FIELD_SECTION_MAP[spec.id] || "offer_details",
      sectionLabel: OFFER_SECTION_LABELS[OFFER_FIELD_SECTION_MAP[spec.id] || "offer_details"] || "Offer Details",
      validation: {
        required: Boolean(spec.required),
        minLength: null,
        maxLength: null,
        minNumber: null,
        maxNumber: null,
        pattern: null,
        errorMessage: null
      }
    });
  });

  if (!defaults.length) return;
  pageState.canvasFields = defaults;
  pageState.availableIds = new Set(
    Array.from(pageState.availableIds || []).filter(id => !defaults.some(field => field.id === id))
  );
  pageState.submittedCanvasFields = JSON.parse(JSON.stringify(defaults));
}

function applyOfferSectionMetadata(pageState) {
  if (!pageState || !Array.isArray(pageState.canvasFields)) return;
  const attachSection = field => {
    if (!field) return field;
    const sectionId = OFFER_FIELD_SECTION_MAP[field.id] || field.sectionId || "offer_details";
    field.sectionId = sectionId;
    field.sectionLabel = OFFER_SECTION_LABELS[sectionId] || "Offer Details";
    return field;
  };
  pageState.canvasFields.forEach(attachSection);
  if (Array.isArray(pageState.submittedCanvasFields)) {
    pageState.submittedCanvasFields.forEach(attachSection);
  }
}

function getOfferFieldSectionMeta(field) {
  const sectionId = OFFER_FIELD_SECTION_MAP[field?.id] || field?.sectionId || "offer_details";
  return {
    sectionId,
    sectionLabel: OFFER_SECTION_LABELS[sectionId] || "Offer Details"
  };
}

function createDefaultTaChecklist() {
  return TA_CHECKLIST_TEMPLATE.map(item => ({
    ...item,
    status: "Pending",
    moduleDiscussionDate: "",
    expectedClosureDate: "",
    zwayamRemarks: ""
  }));
}

function createDefaultDepartmentStructure() {
  return {
    departments: [],
    geos: []
  };
}

function getRequisitionDepartmentStateKey(departmentId, subDepartmentName = MAIN_SUB_DEPARTMENT_KEY, geoName = MAIN_GEO_KEY) {
  const base = String(departmentId || "").trim();
  if (!base) return "";
  const sub = String(subDepartmentName || MAIN_SUB_DEPARTMENT_KEY).trim();
  const geo = String(geoName || MAIN_GEO_KEY).trim();
  let key = base;
  if (sub && sub !== MAIN_SUB_DEPARTMENT_KEY) {
    key += `::sub::${sub.toLowerCase()}`;
  }
  if (geo && geo !== MAIN_GEO_KEY) {
    key += `::geo::${geo.toLowerCase()}`;
  }
  return key;
}

function getRequisitionGeoScopeKey(departmentId, subDepartmentName = MAIN_SUB_DEPARTMENT_KEY) {
  return getRequisitionDepartmentStateKey(departmentId, subDepartmentName, MAIN_GEO_KEY);
}

function getDepartmentById(client, departmentId) {
  if (!client || !departmentId) return null;
  const departments = Array.isArray(client.departmentStructure?.departments) ? client.departmentStructure.departments : [];
  return departments.find(item => item.id === departmentId) || null;
}

function getSubDepartmentLabel(department, selectedKey) {
  if (!department) return MAIN_SUB_DEPARTMENT_KEY;
  const normalized = String(selectedKey || MAIN_SUB_DEPARTMENT_KEY).trim();
  if (!normalized || normalized === MAIN_SUB_DEPARTMENT_KEY) return MAIN_SUB_DEPARTMENT_KEY;
  const match = (department.subDepartments || []).find(item => item.toLowerCase() === normalized.toLowerCase());
  return match || MAIN_SUB_DEPARTMENT_KEY;
}

function getGeoLabel(department, selectedKey) {
  if (!department) return MAIN_GEO_KEY;
  const normalized = String(selectedKey || MAIN_GEO_KEY).trim();
  if (!normalized || normalized === MAIN_GEO_KEY) return MAIN_GEO_KEY;
  const match = (department.geos || []).find(item => item.toLowerCase() === normalized.toLowerCase());
  return match || MAIN_GEO_KEY;
}

function getActiveWorkspaceGeo(client) {
  if (!client) return MAIN_GEO_KEY;
  const globalGeos = Array.isArray(client.departmentStructure?.geos) ? client.departmentStructure.geos : [];
  if (!globalGeos.length) return MAIN_GEO_KEY;
  const selected = String(client.activeWorkspaceGeo || "").trim();
  const match = globalGeos.find(geo => geo.toLowerCase() === selected.toLowerCase());
  return match || globalGeos[0];
}

function getDepartmentsForWorkspaceGeo(client, geoName) {
  if (!client) return [];
  const departments = Array.isArray(client.departmentStructure?.departments) ? client.departmentStructure.departments : [];
  const targetGeo = String(geoName || "").trim();
  if (!targetGeo || targetGeo === MAIN_GEO_KEY) return departments;
  return departments.filter(dept => (dept.geos || []).some(geo => String(geo || "").toLowerCase() === targetGeo.toLowerCase()));
}

function createDefaultDocumentCollection() {
  return {
    activeGeo: "",
    byGeo: {}
  };
}

function normalizeDocumentCollectionItem(item) {
  if (typeof item === "string") {
    const name = item.trim();
    return name ? { name, remark: "" } : null;
  }
  if (!item || typeof item !== "object") return null;
  const name = String(item.name || "").trim();
  if (!name) return null;
  const remark = String(item.remark || "").trim();
  return { name, remark };
}

function sanitizeDocumentList(list) {
  if (!Array.isArray(list)) return [];
  const normalized = [];
  const seen = new Set();
  list.forEach(item => {
    const doc = normalizeDocumentCollectionItem(item);
    if (!doc) return;
    const key = doc.name.toLowerCase();
    if (seen.has(key)) return;
    seen.add(key);
    normalized.push(doc);
  });
  return normalized;
}

function getDocumentCollectionActiveGeo(client) {
  const geos = Array.isArray(client?.departmentStructure?.geos) ? client.departmentStructure.geos : [];
  const selected = String(client?.documentCollection?.activeGeo || "").trim();
  if (selected && geos.some(geo => String(geo || "").toLowerCase() === selected.toLowerCase())) {
    return geos.find(geo => String(geo || "").toLowerCase() === selected.toLowerCase()) || selected;
  }
  return geos[0] || "";
}

function ensureDocumentCollectionGeoBucket(client, geoName) {
  if (!client || !geoName) return { preOffer: [], postOffer: [] };
  if (!client.documentCollection || typeof client.documentCollection !== "object") {
    client.documentCollection = createDefaultDocumentCollection();
  }
  if (!client.documentCollection.byGeo || typeof client.documentCollection.byGeo !== "object") {
    client.documentCollection.byGeo = {};
  }
  if (!client.documentCollection.byGeo[geoName]) {
    client.documentCollection.byGeo[geoName] = { preOffer: [], postOffer: [] };
  }
  const bucket = client.documentCollection.byGeo[geoName];
  bucket.preOffer = sanitizeDocumentList(bucket.preOffer);
  bucket.postOffer = sanitizeDocumentList(bucket.postOffer);
  return bucket;
}

function getPiiActiveGeo(client) {
  const geos = Array.isArray(client?.departmentStructure?.geos) ? client.departmentStructure.geos : [];
  const selected = String(client?.piiGeoFilter || "").trim();
  if (selected && geos.some(geo => String(geo || "").toLowerCase() === selected.toLowerCase())) {
    return geos.find(geo => String(geo || "").toLowerCase() === selected.toLowerCase()) || selected;
  }
  return geos[0] || "";
}

function ensurePiiGeoStates(client) {
  if (!client) return;
  ensureClientPages(client);
  ensureDepartmentStructure(client);
  if (!client.piiGeoStates || typeof client.piiGeoStates !== "object") {
    client.piiGeoStates = {};
  }

  const geos = Array.isArray(client.departmentStructure?.geos) ? client.departmentStructure.geos : [];
  const legacyPiiState = normalizePageState(client.pages?.pii, PII_BASE_FIELDS);

  if (geos.length) {
    const seededDefault = client.piiGeoStates[PII_DEFAULT_GEO_KEY]
      ? normalizePageState(client.piiGeoStates[PII_DEFAULT_GEO_KEY], PII_BASE_FIELDS)
      : null;
    const hasGeoState = geos.some(geo => client.piiGeoStates[geo]);
    if (!hasGeoState) {
      client.piiGeoStates[geos[0]] = normalizePageState(deepCopy(seededDefault || legacyPiiState), PII_BASE_FIELDS);
    }

    geos.forEach(geo => {
      if (!client.piiGeoStates[geo]) {
        client.piiGeoStates[geo] = createPageState(PII_BASE_FIELDS);
      } else {
        client.piiGeoStates[geo] = normalizePageState(client.piiGeoStates[geo], PII_BASE_FIELDS);
      }
    });

    Object.keys(client.piiGeoStates).forEach(key => {
      if (!geos.includes(key)) delete client.piiGeoStates[key];
    });
    client.piiGeoFilter = getPiiActiveGeo(client);
    return;
  }

  const fallbackSeed = (() => {
    if (client.piiGeoStates[PII_DEFAULT_GEO_KEY]) return client.piiGeoStates[PII_DEFAULT_GEO_KEY];
    const firstKey = Object.keys(client.piiGeoStates)[0];
    if (firstKey && client.piiGeoStates[firstKey]) return client.piiGeoStates[firstKey];
    return legacyPiiState;
  })();
  client.piiGeoStates = {
    [PII_DEFAULT_GEO_KEY]: normalizePageState(deepCopy(fallbackSeed), PII_BASE_FIELDS)
  };
  client.piiGeoFilter = "";
}

function getPiiGeoPageState(client, geoName = null) {
  if (!client) return null;
  ensurePiiGeoStates(client);
  const geos = Array.isArray(client.departmentStructure?.geos) ? client.departmentStructure.geos : [];
  if (geos.length) {
    const selected = geoName && geos.some(geo => geo.toLowerCase() === String(geoName).toLowerCase())
      ? geos.find(geo => geo.toLowerCase() === String(geoName).toLowerCase())
      : getPiiActiveGeo(client);
    client.piiGeoFilter = selected || "";
    if (!client.piiGeoStates[selected]) client.piiGeoStates[selected] = createPageState(PII_BASE_FIELDS);
    return client.piiGeoStates[selected];
  }
  if (!client.piiGeoStates[PII_DEFAULT_GEO_KEY]) {
    client.piiGeoStates[PII_DEFAULT_GEO_KEY] = createPageState(PII_BASE_FIELDS);
  }
  return client.piiGeoStates[PII_DEFAULT_GEO_KEY];
}

function syncDepartmentGeosFromGlobal(client) {
  if (!client) return;
  if (!client.departmentStructure || typeof client.departmentStructure !== "object") return;
  const globalGeos = Array.isArray(client.departmentStructure?.geos)
    ? client.departmentStructure.geos
    : [];
  const globalSet = new Set(globalGeos.map(item => String(item || "").trim().toLowerCase()).filter(Boolean));
  (client.departmentStructure?.departments || []).forEach(dept => {
    if (!Array.isArray(dept.geos)) dept.geos = [];
    dept.geos = dept.geos.filter(geo => globalSet.has(String(geo || "").trim().toLowerCase()));
    if (!dept.geos.length && globalGeos.length) {
      dept.geos = [globalGeos[0]];
    }
  });
}

function createDefaultFitmentData() {
  return {
    mode: "sheet",
    sheetName: "",
    fileName: "",
    fileType: "",
    fileDataUrl: "",
    uploadedAt: "",
    rowCount: 0,
    colCount: 0,
    cells: {},
    headers: [],
    rows: []
  };
}

function createDefaultPiiSections() {
  return {
    sections: DEFAULT_PII_SECTIONS.map((name, idx) => ({
      id: `pii_s_${idx + 1}`,
      name
    })),
    activeSectionId: "pii_s_1"
  };
}

function createDefaultWorkflowData() {
  return {
    nodes: [
      { id: "wf_n1", type: "start", label: "Start", x: 80, y: 120 },
      { id: "wf_n2", type: "step", label: "Sourcing", x: 340, y: 120 },
      { id: "wf_n3", type: "end", label: "Offer Closed", x: 600, y: 120 }
    ],
    edges: [
      { id: "wf_e1", from: "wf_n1", to: "wf_n2" },
      { id: "wf_e2", from: "wf_n2", to: "wf_n3" }
    ],
    nextNodeId: 4,
    nextEdgeId: 3
  };
}

function createDefaultRequisitionApprovalMatrix() {
  return [
    {
      id: `ra_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
      level: "L1",
      approver: "",
      condition: "",
      delegateTo: ""
    }
  ];
}

function createDefaultOfferApprovalMatrix() {
  return [
    {
      id: `oa_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
      level: "L1",
      approver: "",
      condition: "",
      delegateTo: ""
    }
  ];
}

function ensureWorkflowData(client) {
  if (!client) return;
  if (!client.workflowData || typeof client.workflowData !== "object") {
    client.workflowData = createDefaultWorkflowData();
  }
  if (!Array.isArray(client.workflowData.nodes)) client.workflowData.nodes = [];
  if (!Array.isArray(client.workflowData.edges)) client.workflowData.edges = [];
  client.workflowData.nextNodeId = Number(client.workflowData.nextNodeId || 1);
  client.workflowData.nextEdgeId = Number(client.workflowData.nextEdgeId || 1);

  client.workflowData.nodes = client.workflowData.nodes
    .map((node, idx) => ({
      id: String(node?.id || `wf_n${idx + 1}`),
      type: ["start", "step", "decision", "end"].includes(node?.type) ? node.type : "step",
      label: String(node?.label || "Step"),
      x: Number.isFinite(Number(node?.x)) ? Number(node.x) : 80 + (idx * 40),
      y: Number.isFinite(Number(node?.y)) ? Number(node.y) : 120 + (idx * 20)
    }));

  const nodeIdSet = new Set(client.workflowData.nodes.map(node => node.id));
  client.workflowData.edges = client.workflowData.edges
    .map((edge, idx) => ({
      id: String(edge?.id || `wf_e${idx + 1}`),
      from: String(edge?.from || ""),
      to: String(edge?.to || "")
    }))
    .filter(edge => edge.from && edge.to && edge.from !== edge.to && nodeIdSet.has(edge.from) && nodeIdSet.has(edge.to));
}

function createDefaultItItemData() {
  return {
    calendar: {
      clientId: "",
      tenantId: "",
      submittedAt: ""
    },
    sso: {
      metadataFileName: "",
      metadataUploadedAt: "",
      certificateFileName: "",
      certificateUploadedAt: "",
      submittedAt: ""
    },
    akamai: {
      subDomain: "",
      txtRecord: "",
      cnameRecord: "",
      submittedAt: ""
    }
  };
}

function createDefaultDataMigrationData() {
  return {
    source: "",
    cutoverDate: "",
    notes: "",
    templateFileName: "",
    templateUploadedAt: "",
    submittedAt: ""
  };
}

function ensureItItemData(client) {
  if (!client) return;
  if (!client.itItemData || typeof client.itItemData !== "object") {
    client.itItemData = createDefaultItItemData();
  }
  if (!client.itItemData.calendar || typeof client.itItemData.calendar !== "object") {
    client.itItemData.calendar = createDefaultItItemData().calendar;
  }
  if (!client.itItemData.sso || typeof client.itItemData.sso !== "object") {
    client.itItemData.sso = createDefaultItItemData().sso;
  }
  if (!client.itItemData.akamai || typeof client.itItemData.akamai !== "object") {
    client.itItemData.akamai = createDefaultItItemData().akamai;
  }
}

function ensureDataMigrationData(client) {
  if (!client) return;
  if (!client.dataMigrationData || typeof client.dataMigrationData !== "object") {
    client.dataMigrationData = createDefaultDataMigrationData();
  }
  client.dataMigrationData.source = String(client.dataMigrationData.source || "");
  client.dataMigrationData.cutoverDate = String(client.dataMigrationData.cutoverDate || "");
  client.dataMigrationData.notes = String(client.dataMigrationData.notes || "");
  client.dataMigrationData.templateFileName = String(client.dataMigrationData.templateFileName || "");
  client.dataMigrationData.templateUploadedAt = String(client.dataMigrationData.templateUploadedAt || "");
  client.dataMigrationData.submittedAt = String(client.dataMigrationData.submittedAt || "");
}

function ensureClientUsers(client) {
  if (!client) return;
  if (!Array.isArray(client.clientUsers)) client.clientUsers = [];
  client.clientUsers = client.clientUsers
    .map(user => ({
      id: String(user?.id || `cu_${Date.now()}_${Math.floor(Math.random() * 1000)}`),
      name: String(user?.name || "").trim(),
      email: String(user?.email || "").trim().toLowerCase(),
      password: String(user?.password || "").trim(),
      accessPages: Array.isArray(user?.accessPages)
        ? user.accessPages.filter(page => CLIENT_USER_ACCESS_PAGES.includes(page))
        : [...CLIENT_USER_ACCESS_PAGES],
      accessDisabled: Boolean(user?.accessDisabled),
      createdAt: String(user?.createdAt || new Date().toISOString())
    }))
    .filter(user => user.name && user.email && user.password);
}

function serializePageState(state, fallbackBaseFields = BASE_FIELDS) {
  const normalized = normalizePageState(state, fallbackBaseFields);
  return {
    ...normalized,
    availableIds: Array.from(normalized.availableIds || [])
  };
}

function normalizePageState(page, fallbackBaseFields) {
  const fallback = createPageState(fallbackBaseFields);
  const fieldCatalog = Array.isArray(page?.fieldCatalog) && page.fieldCatalog.length
    ? page.fieldCatalog.map(field => ({ ...field }))
    : fallback.fieldCatalog;
  const availableSeed = Array.isArray(page?.availableIds)
    ? page.availableIds
    : page?.availableIds instanceof Set
      ? Array.from(page.availableIds)
      : fieldCatalog.map(field => field.id);
  const canvasFields = Array.isArray(page?.canvasFields) ? page.canvasFields : [];
  const canvasSectionOrder = Array.isArray(page?.canvasSectionOrder) ? page.canvasSectionOrder.map(String) : [];
  const dependencyRules = Array.isArray(page?.dependencyRules)
    ? page.dependencyRules
      .map(rule => ({
        id: String(rule?.id || `dr_${Date.now()}_${Math.floor(Math.random() * 1000)}`),
        sourceFieldId: String(rule?.sourceFieldId || ""),
        operator: ["equals", "not_equals", "contains", "not_contains"].includes(String(rule?.operator || ""))
          ? String(rule.operator)
          : "equals",
        value: String(rule?.value || ""),
        targetFieldId: String(rule?.targetFieldId || ""),
        action: ["show", "hide", "require", "optional"].includes(String(rule?.action || ""))
          ? String(rule.action)
          : "show"
      }))
      .filter(rule => rule.sourceFieldId || rule.targetFieldId || rule.value)
    : [];
  const submittedCanvasFields = Array.isArray(page?.submittedCanvasFields) ? page.submittedCanvasFields : [];

  // Ensure newly introduced base fields appear for existing saved clients.
  const catalogById = new Set(fieldCatalog.map(field => field.id));
  const canvasIds = new Set(canvasFields.map(field => field?.id).filter(Boolean));
  const submittedIds = new Set(submittedCanvasFields.map(field => field?.id).filter(Boolean));
  fallback.fieldCatalog.forEach(baseField => {
    if (catalogById.has(baseField.id)) return;
    fieldCatalog.push({ ...baseField });
    catalogById.add(baseField.id);
    if (!canvasIds.has(baseField.id) && !submittedIds.has(baseField.id)) {
      availableSeed.push(baseField.id);
    }
  });

  return {
    fieldCatalog,
    availableIds: new Set(availableSeed),
    canvasFields,
    canvasSectionOrder,
    dependencyRules,
    submittedCanvasFields,
    submittedAt: page?.submittedAt || null,
    auditLogs: Array.isArray(page?.auditLogs) ? page.auditLogs : []
  };
}

function getBaseFieldsByPage(pageKey) {
  if (pageKey === "pii") return PII_BASE_FIELDS;
  if (pageKey === "apply") return APPLY_BASE_FIELDS;
  if (pageKey === "offer") return OFFER_BASE_FIELDS;
  return BASE_FIELDS;
}

function ensureClientPages(client) {
  if (!client) return;
  if (!client.pages || typeof client.pages !== "object") client.pages = {};

  const legacyRequisitionPage = {
    fieldCatalog: client.fieldCatalog,
    availableIds: client.availableIds,
    canvasFields: client.canvasFields,
    submittedCanvasFields: client.submittedCanvasFields,
    submittedAt: client.submittedAt,
    auditLogs: client.auditLogs
  };

  CLIENT_PAGES.forEach(page => {
    const source = client.pages[page.key] || (page.key === "requisition" ? legacyRequisitionPage : null);
    client.pages[page.key] = normalizePageState(source, getBaseFieldsByPage(page.key));
    if (page.key === "requisition") {
      ensureDefaultRequisitionCanvas(client.pages[page.key]);
    }
    if (page.key === "apply") {
      ensureDefaultApplyCanvas(client.pages[page.key]);
    }
    if (page.key === "offer") {
      ensureDefaultOfferCanvas(client.pages[page.key]);
      applyOfferSectionMetadata(client.pages[page.key]);
    }
  });
}

function getActivePageKey() {
  if (isClientRole()) return activeClientPage;
  if (canManageClients()) return activeAdminPage;
  return "requisition";
}

function getWorkingFormPageKey() {
  const activePage = getActivePageKey();
  if (activePage === "fitment" && activeFitmentView === "offer") return "offer";
  return activePage;
}

function getActiveApplySourceKey(client) {
  const selected = String(client?.applySourceFilter || "").trim();
  return APPLY_SOURCE_OPTIONS.includes(selected) ? selected : "Career Site";
}

function getApplyActiveGeo(client) {
  const geos = Array.isArray(client?.departmentStructure?.geos) ? client.departmentStructure.geos : [];
  const selected = String(client?.applyGeoFilter || "").trim();
  if (selected && geos.some(geo => String(geo || "").toLowerCase() === selected.toLowerCase())) {
    return geos.find(geo => String(geo || "").toLowerCase() === selected.toLowerCase()) || selected;
  }
  return geos[0] || "";
}

function createApplySourceStateMap(seedBySource = null, fallbackState = null) {
  const fallback = normalizePageState(fallbackState || createPageState(APPLY_BASE_FIELDS), APPLY_BASE_FIELDS);
  ensureDefaultApplyCanvas(fallback);
  const bySource = {};
  APPLY_SOURCE_OPTIONS.forEach(source => {
    const raw = seedBySource && typeof seedBySource === "object" && seedBySource[source]
      ? seedBySource[source]
      : fallback;
    const sourceState = raw && typeof raw === "object"
      ? {
        ...raw,
        availableIds: raw.availableIds instanceof Set ? Array.from(raw.availableIds) : raw.availableIds
      }
      : raw;
    const normalized = normalizePageState(deepCopy(sourceState), APPLY_BASE_FIELDS);
    ensureDefaultApplyCanvas(normalized);
    bySource[source] = normalized;
  });
  return bySource;
}

function getApplyGeoSourceBucket(client, geoName = null, skipEnsure = false) {
  if (!client) return null;
  if (!skipEnsure) ensureApplySourceStates(client);
  const geos = Array.isArray(client.departmentStructure?.geos) ? client.departmentStructure.geos : [];
  if (geos.length) {
    const selectedGeo = geoName && geos.some(geo => geo.toLowerCase() === String(geoName).toLowerCase())
      ? geos.find(geo => geo.toLowerCase() === String(geoName).toLowerCase())
      : getApplyActiveGeo(client);
    client.applyGeoFilter = selectedGeo || "";
    if (!client.applyGeoSourceStates[selectedGeo] || typeof client.applyGeoSourceStates[selectedGeo] !== "object") {
      client.applyGeoSourceStates[selectedGeo] = createApplySourceStateMap();
    }
    return client.applyGeoSourceStates[selectedGeo];
  }
  if (!client.applyGeoSourceStates[APPLY_DEFAULT_GEO_KEY] || typeof client.applyGeoSourceStates[APPLY_DEFAULT_GEO_KEY] !== "object") {
    client.applyGeoSourceStates[APPLY_DEFAULT_GEO_KEY] = createApplySourceStateMap();
  }
  return client.applyGeoSourceStates[APPLY_DEFAULT_GEO_KEY];
}

function ensureApplySourceStates(client) {
  if (!client) return;
  ensureClientPages(client);
  ensureDepartmentStructure(client);
  if (!client.applySourceStates || typeof client.applySourceStates !== "object") client.applySourceStates = {};
  if (!client.applyGeoSourceStates || typeof client.applyGeoSourceStates !== "object") client.applyGeoSourceStates = {};
  const legacyApplyState = normalizePageState(client.pages?.apply, APPLY_BASE_FIELDS);
  ensureDefaultApplyCanvas(legacyApplyState);

  const legacySourceStates = createApplySourceStateMap(client.applySourceStates, legacyApplyState);
  const geos = Array.isArray(client.departmentStructure?.geos) ? client.departmentStructure.geos : [];

  if (geos.length) {
    const seededDefault = client.applyGeoSourceStates[APPLY_DEFAULT_GEO_KEY]
      && typeof client.applyGeoSourceStates[APPLY_DEFAULT_GEO_KEY] === "object"
      ? client.applyGeoSourceStates[APPLY_DEFAULT_GEO_KEY]
      : null;

    const hasGeoState = geos.some(geo => client.applyGeoSourceStates[geo] && typeof client.applyGeoSourceStates[geo] === "object");
    if (!hasGeoState) {
      client.applyGeoSourceStates[geos[0]] = createApplySourceStateMap(
        seededDefault || client.applySourceStates || legacySourceStates,
        legacyApplyState
      );
    }

    geos.forEach(geo => {
      if (!client.applyGeoSourceStates[geo] || typeof client.applyGeoSourceStates[geo] !== "object") {
        client.applyGeoSourceStates[geo] = createApplySourceStateMap(legacySourceStates, legacyApplyState);
      } else {
        const bucket = client.applyGeoSourceStates[geo];
        APPLY_SOURCE_OPTIONS.forEach(source => {
          const state = bucket[source] || legacySourceStates[source];
          bucket[source] = normalizePageState(state, APPLY_BASE_FIELDS);
          ensureDefaultApplyCanvas(bucket[source]);
        });
        Object.keys(bucket).forEach(source => {
          if (!APPLY_SOURCE_OPTIONS.includes(source)) delete bucket[source];
        });
      }
    });

    Object.keys(client.applyGeoSourceStates).forEach(geoKey => {
      if (!geos.includes(geoKey)) delete client.applyGeoSourceStates[geoKey];
    });
    client.applyGeoFilter = getApplyActiveGeo(client);
  } else {
    const fallbackBucket = (() => {
      if (client.applyGeoSourceStates[APPLY_DEFAULT_GEO_KEY] && typeof client.applyGeoSourceStates[APPLY_DEFAULT_GEO_KEY] === "object") {
        return client.applyGeoSourceStates[APPLY_DEFAULT_GEO_KEY];
      }
      const firstGeoKey = Object.keys(client.applyGeoSourceStates)[0];
      if (firstGeoKey && client.applyGeoSourceStates[firstGeoKey]) return client.applyGeoSourceStates[firstGeoKey];
      return client.applySourceStates || legacySourceStates;
    })();
    client.applyGeoSourceStates = {
      [APPLY_DEFAULT_GEO_KEY]: createApplySourceStateMap(fallbackBucket, legacyApplyState)
    };
    client.applyGeoFilter = "";
  }

  client.applySourceFilter = getActiveApplySourceKey(client);
  const activeBucket = getApplyGeoSourceBucket(client, null, true);
  client.applySourceStates = createApplySourceStateMap(activeBucket, legacyApplyState);
  client.applySourceStatesVersion = 4;

  syncApplySourceAvailability(client);
}

function getApplySourcePageState(client, sourceKey = null, geoName = null) {
  if (!client) return null;
  const bucket = getApplyGeoSourceBucket(client, geoName);
  const key = sourceKey && APPLY_SOURCE_OPTIONS.includes(sourceKey) ? sourceKey : getActiveApplySourceKey(client);
  client.applySourceFilter = key;
  if (!bucket[key]) bucket[key] = createPageState(APPLY_BASE_FIELDS);
  ensureDefaultApplyCanvas(bucket[key]);
  return bucket[key] || null;
}

function syncApplySourceAvailability(client) {
  if (!client || !client.applyGeoSourceStates || typeof client.applyGeoSourceStates !== "object") return;
  Object.values(client.applyGeoSourceStates).forEach(bucket => {
    if (!bucket || typeof bucket !== "object") return;
    APPLY_SOURCE_OPTIONS.forEach(source => {
      const state = bucket[source];
      if (!state || !Array.isArray(state.fieldCatalog) || !Array.isArray(state.canvasFields)) return;
      const usedIds = new Set(state.canvasFields.map(field => field?.id).filter(Boolean));
      const catalogIds = state.fieldCatalog.map(field => field.id).filter(Boolean);
      state.availableIds = new Set(catalogIds.filter(id => !usedIds.has(id)));
    });
  });

  const geos = Array.isArray(client.departmentStructure?.geos) ? client.departmentStructure.geos : [];
  const activeGeo = geos.length ? getApplyActiveGeo(client) : "";
  const activeBucket = geos.length
    ? client.applyGeoSourceStates[activeGeo]
    : client.applyGeoSourceStates[APPLY_DEFAULT_GEO_KEY];
  if (activeBucket && typeof activeBucket === "object") {
    client.applySourceStates = createApplySourceStateMap(activeBucket);
  }
}

function getPageState(client, pageKey = getWorkingFormPageKey()) {
  if (!client) return null;
  ensureClientPages(client);
  if (pageKey === "pii") {
    return getPiiGeoPageState(client);
  }
  if (pageKey === "apply") {
    return getApplySourcePageState(client);
  }
  if (arguments.length === 1 && getWorkingFormPageKey() === "requisition") {
    return getActiveRequisitionDepartmentPageState(client);
  }
  return client.pages[pageKey] || null;
}

function getPageLabel(pageKey) {
  if (pageKey === WORKFLOW_PAGE_KEY) return "Workflow";
  const match = CLIENT_PAGES.find(page => page.key === pageKey);
  return match ? match.label : "Requisition Form";
}

function ensureTaChecklist(client) {
  if (!client) return;
  if (!Array.isArray(client.taChecklist) || !client.taChecklist.length) {
    client.taChecklist = createDefaultTaChecklist();
    return;
  }
  const normalized = client.taChecklist.map((item, index) => {
    const base = TA_CHECKLIST_TEMPLATE[index] || {};
    return {
      sNo: String(item?.sNo || index + 1),
      requirement: item?.requirement || base.requirement || "",
      description: item?.description || base.description || "",
      status: item?.status || "Pending",
      moduleDiscussionDate: item?.moduleDiscussionDate || "",
      expectedClosureDate: item?.expectedClosureDate || "",
      zwayamRemarks: item?.zwayamRemarks || ""
    };
  });

  if (normalized.length < TA_CHECKLIST_TEMPLATE.length) {
    TA_CHECKLIST_TEMPLATE.slice(normalized.length).forEach(item => {
      normalized.push({
        ...item,
        status: "Pending",
        moduleDiscussionDate: "",
        expectedClosureDate: "",
        zwayamRemarks: ""
      });
    });
  }

  client.taChecklist = normalized;
  reindexTaChecklist(client);
}

function ensureDocumentCollection(client) {
  if (!client) return;
  ensureDepartmentStructure(client);
  if (!client.documentCollection || typeof client.documentCollection !== "object") {
    client.documentCollection = createDefaultDocumentCollection();
  }
  if (!client.documentCollection.byGeo || typeof client.documentCollection.byGeo !== "object") {
    client.documentCollection.byGeo = {};
  }

  const geos = Array.isArray(client.departmentStructure?.geos) ? client.departmentStructure.geos : [];
  const legacyPre = sanitizeDocumentList(client.documentCollection.preOffer);
  const legacyPost = sanitizeDocumentList(client.documentCollection.postOffer);
  if (legacyPre.length || legacyPost.length) {
    const fallbackGeo = geos[0] || "Default";
    if (!client.documentCollection.byGeo[fallbackGeo]) {
      client.documentCollection.byGeo[fallbackGeo] = { preOffer: [], postOffer: [] };
    }
    if (!client.documentCollection.byGeo[fallbackGeo].preOffer.length) {
      client.documentCollection.byGeo[fallbackGeo].preOffer = [...legacyPre];
    }
    if (!client.documentCollection.byGeo[fallbackGeo].postOffer.length) {
      client.documentCollection.byGeo[fallbackGeo].postOffer = [...legacyPost];
    }
  }
  delete client.documentCollection.preOffer;
  delete client.documentCollection.postOffer;

  Object.keys(client.documentCollection.byGeo).forEach(geo => {
    const bucket = client.documentCollection.byGeo[geo];
    client.documentCollection.byGeo[geo] = {
      preOffer: sanitizeDocumentList(bucket?.preOffer),
      postOffer: sanitizeDocumentList(bucket?.postOffer)
    };
  });

  client.documentCollection.activeGeo = getDocumentCollectionActiveGeo(client);
  const activeGeo = client.documentCollection.activeGeo;
  if (activeGeo) ensureDocumentCollectionGeoBucket(client, activeGeo);
}

function ensureFitmentData(client) {
  if (!client) return;
  if (!client.fitmentData || typeof client.fitmentData !== "object") {
    client.fitmentData = createDefaultFitmentData();
  }
  client.fitmentData.mode = client.fitmentData.mode || "sheet";
  client.fitmentData.sheetName = String(client.fitmentData.sheetName || "");
  if (!Array.isArray(client.fitmentData.headers)) client.fitmentData.headers = [];
  if (!Array.isArray(client.fitmentData.rows)) client.fitmentData.rows = [];
  client.fitmentData.rowCount = Number(client.fitmentData.rowCount || 0);
  client.fitmentData.colCount = Number(client.fitmentData.colCount || 0);
  if (!client.fitmentData.cells || typeof client.fitmentData.cells !== "object") client.fitmentData.cells = {};
  // Backward compatibility: migrate legacy header/rows-only shape into cell grid.
  if (!client.fitmentData.rowCount && !client.fitmentData.colCount && (client.fitmentData.headers.length || client.fitmentData.rows.length)) {
    const migrated = buildFitmentFromCsv({
      headers: client.fitmentData.headers,
      rows: client.fitmentData.rows
    });
    client.fitmentData.sheetName = client.fitmentData.sheetName || migrated.sheetName;
    client.fitmentData.rowCount = migrated.rowCount;
    client.fitmentData.colCount = migrated.colCount;
    client.fitmentData.cells = migrated.cells;
  }
  client.fitmentData.fileName = String(client.fitmentData.fileName || "");
  client.fitmentData.fileType = String(client.fitmentData.fileType || "");
  client.fitmentData.fileDataUrl = String(client.fitmentData.fileDataUrl || "");
  client.fitmentData.uploadedAt = String(client.fitmentData.uploadedAt || "");
}

function ensurePiiSections(client) {
  if (!client) return;
  if (!client.piiSections || typeof client.piiSections !== "object") {
    client.piiSections = createDefaultPiiSections();
  }
  if (!Array.isArray(client.piiSections.sections) || !client.piiSections.sections.length) {
    client.piiSections.sections = createDefaultPiiSections().sections;
  }
  client.piiSections.sections = client.piiSections.sections.map((section, idx) => ({
    id: String(section?.id || `pii_s_${idx + 1}`),
    name: String(section?.name || `Section ${idx + 1}`).trim() || `Section ${idx + 1}`
  }));
  const validIds = new Set(client.piiSections.sections.map(section => section.id));
  if (!client.piiSections.activeSectionId || !validIds.has(client.piiSections.activeSectionId)) {
    client.piiSections.activeSectionId = client.piiSections.sections[0] ? client.piiSections.sections[0].id : null;
  }
}

function ensureDepartmentStructure(client) {
  if (!client) return;
  if (!client.departmentStructure || typeof client.departmentStructure !== "object") {
    client.departmentStructure = createDefaultDepartmentStructure();
  }
  if (!Array.isArray(client.departmentStructure.geos)) {
    client.departmentStructure.geos = [];
  }
  client.departmentStructure.geos = client.departmentStructure.geos
    .map(item => String(item || "").trim())
    .filter(Boolean)
    .filter((item, idx, arr) => arr.findIndex(v => v.toLowerCase() === item.toLowerCase()) === idx);
  if (!Array.isArray(client.departmentStructure.departments)) {
    client.departmentStructure.departments = [];
  }
  client.departmentStructure.departments = client.departmentStructure.departments.map((dept, idx) => ({
    id: dept?.id || `d_${Date.now()}_${idx}`,
    name: dept?.name || `Department ${idx + 1}`,
    subDepartments: Array.isArray(dept?.subDepartments)
      ? dept.subDepartments.map(item => String(item || "").trim()).filter(Boolean)
      : String(dept?.subDepartments || "")
        .split(",")
        .map(item => item.trim())
        .filter(Boolean),
    geos: Array.isArray(dept?.geos)
      ? dept.geos.map(item => String(item || "").trim()).filter(Boolean)
      : String(dept?.geos || "")
        .split(",")
        .map(item => item.trim())
        .filter(Boolean)
  }));
  syncDepartmentGeosFromGlobal(client);
}

function ensureRequisitionDepartmentStates(client) {
  if (!client) return;
  ensureClientPages(client);
  ensureDepartmentStructure(client);
  client.activeWorkspaceGeo = getActiveWorkspaceGeo(client);
  if (!client.requisitionDepartmentStates || typeof client.requisitionDepartmentStates !== "object") {
    client.requisitionDepartmentStates = {};
  }
  if (!client.activeRequisitionSubDepartmentByDepartmentId || typeof client.activeRequisitionSubDepartmentByDepartmentId !== "object") {
    client.activeRequisitionSubDepartmentByDepartmentId = {};
  }
  if (!client.activeRequisitionGeoByDepartmentSubKey || typeof client.activeRequisitionGeoByDepartmentSubKey !== "object") {
    client.activeRequisitionGeoByDepartmentSubKey = {};
  }

  const departments = Array.isArray(client.departmentStructure?.departments) ? client.departmentStructure.departments : [];
  const scopedDepartments = getDepartmentsForWorkspaceGeo(client, client.activeWorkspaceGeo);
  const stateKeys = Object.keys(client.requisitionDepartmentStates || {});
  const hasDepartmentState = stateKeys.length > 0;
  const legacyRequisition = client.pages?.requisition ? normalizePageState(client.pages.requisition, BASE_FIELDS) : createPageState(BASE_FIELDS);
  ensureDefaultRequisitionCanvas(legacyRequisition);

  if (departments.length && !hasDepartmentState) {
    const firstDept = departments[0];
    client.requisitionDepartmentStates[firstDept.id] = normalizePageState(legacyRequisition, BASE_FIELDS);
    ensureDefaultRequisitionCanvas(client.requisitionDepartmentStates[firstDept.id]);
  }

  departments.forEach(dept => {
    const selectedSub = getSubDepartmentLabel(dept, client.activeRequisitionSubDepartmentByDepartmentId[dept.id]);
    client.activeRequisitionSubDepartmentByDepartmentId[dept.id] = selectedSub;
    const subOptions = [MAIN_SUB_DEPARTMENT_KEY, ...(dept.subDepartments || [])];
    subOptions.forEach(subDept => {
      const scopeKey = getRequisitionGeoScopeKey(dept.id, subDept);
      const selectedGeo = getGeoLabel(dept, client.activeRequisitionGeoByDepartmentSubKey[scopeKey]);
      client.activeRequisitionGeoByDepartmentSubKey[scopeKey] = selectedGeo;

      const stateKeyMainGeo = getRequisitionDepartmentStateKey(dept.id, subDept, MAIN_GEO_KEY);
      if (!client.requisitionDepartmentStates[stateKeyMainGeo]) {
        client.requisitionDepartmentStates[stateKeyMainGeo] = createPageState(BASE_FIELDS);
        ensureDefaultRequisitionCanvas(client.requisitionDepartmentStates[stateKeyMainGeo]);
      } else {
        client.requisitionDepartmentStates[stateKeyMainGeo] = normalizePageState(client.requisitionDepartmentStates[stateKeyMainGeo], BASE_FIELDS);
        ensureDefaultRequisitionCanvas(client.requisitionDepartmentStates[stateKeyMainGeo]);
      }

      (dept.geos || []).forEach(geo => {
        const geoKey = getRequisitionDepartmentStateKey(dept.id, subDept, geo);
        if (!client.requisitionDepartmentStates[geoKey]) {
          client.requisitionDepartmentStates[geoKey] = createPageState(BASE_FIELDS);
          ensureDefaultRequisitionCanvas(client.requisitionDepartmentStates[geoKey]);
        } else {
          client.requisitionDepartmentStates[geoKey] = normalizePageState(client.requisitionDepartmentStates[geoKey], BASE_FIELDS);
          ensureDefaultRequisitionCanvas(client.requisitionDepartmentStates[geoKey]);
        }
      });
    });
  });

  const validStateKeys = new Set();
  const validGeoScopeKeys = new Set();
  const validIds = new Set(departments.map(item => item.id));
  departments.forEach(dept => {
    const subOptions = [MAIN_SUB_DEPARTMENT_KEY, ...(dept.subDepartments || [])];
    subOptions.forEach(subDept => {
      validGeoScopeKeys.add(getRequisitionGeoScopeKey(dept.id, subDept));
      validStateKeys.add(getRequisitionDepartmentStateKey(dept.id, subDept, MAIN_GEO_KEY));
      (dept.geos || []).forEach(geo => {
        validStateKeys.add(getRequisitionDepartmentStateKey(dept.id, subDept, geo));
      });
    });
  });

  Object.keys(client.requisitionDepartmentStates).forEach(stateKey => {
    if (validStateKeys.has(stateKey)) return;
    delete client.requisitionDepartmentStates[stateKey];
  });

  Object.keys(client.activeRequisitionSubDepartmentByDepartmentId).forEach(deptId => {
    if (!validIds.has(deptId)) delete client.activeRequisitionSubDepartmentByDepartmentId[deptId];
  });
  Object.keys(client.activeRequisitionGeoByDepartmentSubKey).forEach(scopeKey => {
    if (!validGeoScopeKeys.has(scopeKey)) delete client.activeRequisitionGeoByDepartmentSubKey[scopeKey];
  });

  if (
    !client.activeRequisitionDepartmentId
    || !validIds.has(client.activeRequisitionDepartmentId)
    || !scopedDepartments.some(item => item.id === client.activeRequisitionDepartmentId)
  ) {
    client.activeRequisitionDepartmentId = scopedDepartments[0] ? scopedDepartments[0].id : (departments[0] ? departments[0].id : null);
  }
  if (client.activeRequisitionDepartmentId) {
    const activeDept = getDepartmentById(client, client.activeRequisitionDepartmentId);
    const activeSub = getSubDepartmentLabel(
      activeDept,
      client.activeRequisitionSubDepartmentByDepartmentId[client.activeRequisitionDepartmentId]
    );
    client.activeRequisitionSubDepartmentByDepartmentId[client.activeRequisitionDepartmentId] = activeSub;
    const activeScopeKey = getRequisitionGeoScopeKey(client.activeRequisitionDepartmentId, activeSub);
    client.activeRequisitionGeoByDepartmentSubKey[activeScopeKey] = getGeoLabel(
      activeDept,
      client.activeRequisitionGeoByDepartmentSubKey[activeScopeKey]
    );
  }
}

function ensureRequisitionApprovalByDepartment(client) {
  if (!client) return;
  ensureDepartmentStructure(client);
  ensureRequisitionDepartmentStates(client);
  if (!client.requisitionApprovalByDepartment || typeof client.requisitionApprovalByDepartment !== "object") {
    client.requisitionApprovalByDepartment = {};
  }

  const departments = Array.isArray(client.departmentStructure?.departments) ? client.departmentStructure.departments : [];
  const legacyRows = Array.isArray(client.requisitionApprovalMatrix) ? client.requisitionApprovalMatrix : [];
  const hasExistingDeptMap = Object.keys(client.requisitionApprovalByDepartment).length > 0;

  if (!hasExistingDeptMap && legacyRows.length) {
    departments.forEach((dept, deptIndex) => {
      const byName = legacyRows.filter(row => String(row?.department || "").trim().toLowerCase() === String(dept.name || "").trim().toLowerCase());
      const generic = legacyRows.filter(row => !String(row?.department || "").trim());
      const seed = byName.length ? byName : (deptIndex === 0 ? (generic.length ? generic : legacyRows) : []);
      if (seed.length) {
        client.requisitionApprovalByDepartment[dept.id] = seed.map((row, idx) => ({
          id: row?.id || `ra_${Date.now()}_${dept.id}_${idx}`,
          level: row?.level || "",
          approver: row?.approver || "",
          condition: row?.condition || "",
          delegateTo: row?.delegateTo || ""
        }));
      }
    });
  }

  departments.forEach(dept => {
    const rows = Array.isArray(client.requisitionApprovalByDepartment[dept.id]) ? client.requisitionApprovalByDepartment[dept.id] : [];
    client.requisitionApprovalByDepartment[dept.id] = rows.length
      ? rows.map((row, idx) => ({
        id: row?.id || `ra_${Date.now()}_${dept.id}_${idx}`,
        level: row?.level || "",
        approver: row?.approver || "",
        condition: row?.condition || "",
        delegateTo: row?.delegateTo || ""
      }))
      : createDefaultRequisitionApprovalMatrix();
  });

  const validIds = new Set(departments.map(item => item.id));
  Object.keys(client.requisitionApprovalByDepartment).forEach(deptId => {
    if (!validIds.has(deptId)) delete client.requisitionApprovalByDepartment[deptId];
  });
}

function getActiveRequisitionApprovalRows(client) {
  if (!client) return [];
  ensureRequisitionApprovalByDepartment(client);
  const deptId = getActiveRequisitionDepartmentId(client);
  if (!deptId) return [];
  return client.requisitionApprovalByDepartment[deptId] || [];
}

function ensureOfferApprovalByDepartment(client) {
  if (!client) return;
  ensureDepartmentStructure(client);
  if (!client.offerApprovalByDepartment || typeof client.offerApprovalByDepartment !== "object") {
    client.offerApprovalByDepartment = {};
  }

  const departments = Array.isArray(client.departmentStructure?.departments) ? client.departmentStructure.departments : [];
  const legacyRows = Array.isArray(client.offerApprovalMatrix) ? client.offerApprovalMatrix : [];
  const hasExistingDeptMap = Object.keys(client.offerApprovalByDepartment).length > 0;

  if (!hasExistingDeptMap && legacyRows.length) {
    departments.forEach((dept, deptIndex) => {
      const byName = legacyRows.filter(row => String(row?.department || "").trim().toLowerCase() === String(dept.name || "").trim().toLowerCase());
      const generic = legacyRows.filter(row => !String(row?.department || "").trim());
      const seed = byName.length ? byName : (deptIndex === 0 ? (generic.length ? generic : legacyRows) : []);
      if (seed.length) {
        client.offerApprovalByDepartment[dept.id] = seed.map((row, idx) => ({
          id: row?.id || `oa_${Date.now()}_${dept.id}_${idx}`,
          level: row?.level || "",
          approver: row?.approver || "",
          condition: row?.condition || "",
          delegateTo: row?.delegateTo || ""
        }));
      }
    });
  }

  departments.forEach(dept => {
    const rows = Array.isArray(client.offerApprovalByDepartment[dept.id]) ? client.offerApprovalByDepartment[dept.id] : [];
    client.offerApprovalByDepartment[dept.id] = rows.length
      ? rows.map((row, idx) => ({
        id: row?.id || `oa_${Date.now()}_${dept.id}_${idx}`,
        level: row?.level || "",
        approver: row?.approver || "",
        condition: row?.condition || "",
        delegateTo: row?.delegateTo || ""
      }))
      : createDefaultOfferApprovalMatrix();
  });

  const validIds = new Set(departments.map(item => item.id));
  Object.keys(client.offerApprovalByDepartment).forEach(deptId => {
    if (!validIds.has(deptId)) delete client.offerApprovalByDepartment[deptId];
  });

  if (
    !client.activeOfferApprovalDepartmentId
    || !validIds.has(client.activeOfferApprovalDepartmentId)
  ) {
    client.activeOfferApprovalDepartmentId = departments[0] ? departments[0].id : null;
  }
}

function getActiveOfferApprovalDepartmentId(client) {
  if (!client) return null;
  ensureOfferApprovalByDepartment(client);
  return client.activeOfferApprovalDepartmentId || null;
}

function getActiveOfferApprovalRows(client) {
  if (!client) return [];
  ensureOfferApprovalByDepartment(client);
  const deptId = getActiveOfferApprovalDepartmentId(client);
  if (!deptId) return [];
  return client.offerApprovalByDepartment[deptId] || [];
}

function getActiveRequisitionDepartmentId(client) {
  if (!client) return null;
  ensureRequisitionDepartmentStates(client);
  return client.activeRequisitionDepartmentId || null;
}

function getActiveRequisitionSubDepartmentName(client) {
  if (!client) return MAIN_SUB_DEPARTMENT_KEY;
  ensureRequisitionDepartmentStates(client);
  const deptId = getActiveRequisitionDepartmentId(client);
  if (!deptId) return MAIN_SUB_DEPARTMENT_KEY;
  const dept = getDepartmentById(client, deptId);
  return getSubDepartmentLabel(dept, client.activeRequisitionSubDepartmentByDepartmentId?.[deptId]);
}

function getActiveRequisitionGeoName(client) {
  if (!client) return MAIN_GEO_KEY;
  ensureRequisitionDepartmentStates(client);
  const deptId = getActiveRequisitionDepartmentId(client);
  if (!deptId) return MAIN_GEO_KEY;
  const dept = getDepartmentById(client, deptId);
  const subDept = getActiveRequisitionSubDepartmentName(client);
  const scopeKey = getRequisitionGeoScopeKey(deptId, subDept);
  return getGeoLabel(dept, client.activeRequisitionGeoByDepartmentSubKey?.[scopeKey]);
}

function getActiveRequisitionContextLabel(client) {
  if (!client) return "";
  const deptId = getActiveRequisitionDepartmentId(client);
  if (!deptId) return "";
  const dept = getDepartmentById(client, deptId);
  const deptName = dept?.name || "";
  const subDept = getActiveRequisitionSubDepartmentName(client);
  const geo = getActiveRequisitionGeoName(client);
  if (!deptName) return "";
  const parts = [`Department: ${deptName}`];
  if (subDept && subDept !== MAIN_SUB_DEPARTMENT_KEY) parts.push(`Sub Department: ${subDept}`);
  if (geo && geo !== MAIN_GEO_KEY) parts.push(`Geo: ${geo}`);
  return parts.join(" | ");
}

function getActiveApplyContextLabel(client) {
  if (!client) return "";
  ensureApplySourceStates(client);
  const geo = getApplyActiveGeo(client);
  const source = getActiveApplySourceKey(client);
  const parts = [];
  if (geo) parts.push(`Geo: ${geo}`);
  if (source) parts.push(`Source: ${source}`);
  return parts.join(" | ");
}

function ensureRequisitionDepartmentPageState(client, departmentId, subDepartmentName = MAIN_SUB_DEPARTMENT_KEY, geoName = MAIN_GEO_KEY) {
  if (!client || !departmentId) return null;
  ensureRequisitionDepartmentStates(client);
  const key = getRequisitionDepartmentStateKey(departmentId, subDepartmentName, geoName);
  if (!key) return null;
  if (!client.requisitionDepartmentStates[key]) {
    client.requisitionDepartmentStates[key] = createPageState(BASE_FIELDS);
    ensureDefaultRequisitionCanvas(client.requisitionDepartmentStates[key]);
  }
  return client.requisitionDepartmentStates[key];
}

function getRequisitionDepartmentPageState(client, departmentId, subDepartmentName = MAIN_SUB_DEPARTMENT_KEY, geoName = MAIN_GEO_KEY) {
  return ensureRequisitionDepartmentPageState(client, departmentId, subDepartmentName, geoName);
}

function getActiveRequisitionDepartmentPageState(client) {
  if (!client) return null;
  const departmentId = getActiveRequisitionDepartmentId(client);
  if (!departmentId) return null;
  return getRequisitionDepartmentPageState(
    client,
    departmentId,
    getActiveRequisitionSubDepartmentName(client),
    getActiveRequisitionGeoName(client)
  );
}

function ensureRequisitionApprovalMatrix(client) {
  // Backward-compatible alias: matrix is now maintained per department.
  ensureRequisitionApprovalByDepartment(client);
}

function reindexTaChecklist(client) {
  if (!client || !Array.isArray(client.taChecklist)) return;
  client.taChecklist.forEach((row, idx) => {
    row.sNo = String(idx + 1);
  });
}

function createBlankTaChecklistRow(nextIndex) {
  return {
    sNo: String(nextIndex),
    requirement: "",
    description: "",
    status: "Pending",
    moduleDiscussionDate: "",
    expectedClosureDate: "",
    zwayamRemarks: ""
  };
}

function createClientState(name, integrations, loginEmail, loginPassword, ownerUserId = AUTH.admin.email, sowDocument = null, product = "Standard") {
  const requisitionPage = createPageState(BASE_FIELDS);
  ensureDefaultRequisitionCanvas(requisitionPage);
  const piiPage = createPageState(PII_BASE_FIELDS);
  const applyPage = createPageState(APPLY_BASE_FIELDS);
  ensureDefaultApplyCanvas(applyPage);
  const normalizedSow = normalizeClientSowDocument(sowDocument);
  const client = {
    id: `c_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
    name,
    ownerUserId: String(ownerUserId || AUTH.admin.email).trim().toLowerCase(),
    loginEmail,
    loginPassword: loginPassword || "",
    product: normalizeClientProduct(product),
    sowDocument: normalizedSow,
    sowVersionHistory: normalizedSow ? [createSowHistoryEntryFromDocument(normalizedSow)] : [],
    forcePasswordReset: true,
    clientUsers: [],
    integrations,
    pages: {
      requisition: requisitionPage,
      pii: piiPage,
      apply: applyPage
    },
    // Kept for backward compatibility with older persisted schema.
    fieldCatalog: requisitionPage.fieldCatalog,
    availableIds: requisitionPage.availableIds,
    canvasFields: requisitionPage.canvasFields,
    submittedCanvasFields: requisitionPage.submittedCanvasFields,
    submittedAt: requisitionPage.submittedAt,
    accessDisabled: false,
    auditLogs: requisitionPage.auditLogs,
    auditLogsGlobal: [],
    taChecklist: createDefaultTaChecklist(),
    documentCollection: createDefaultDocumentCollection(),
    fitmentData: createDefaultFitmentData(),
    piiSections: createDefaultPiiSections(),
    piiGeoStates: {},
    piiGeoFilter: "",
    workflowData: createDefaultWorkflowData(),
    itItemData: createDefaultItItemData(),
    dataMigrationData: createDefaultDataMigrationData(),
    applyGeoFilter: "",
    applyGeoSourceStates: {},
    applySourceFilter: "Career Site",
    applySourceStates: {},
    applySourceStatesVersion: 4,
    departmentStructure: createDefaultDepartmentStructure(),
    requisitionDepartmentStates: {},
    activeRequisitionDepartmentId: null,
    activeRequisitionSubDepartmentByDepartmentId: {},
    activeRequisitionGeoByDepartmentSubKey: {},
    requisitionApprovalByDepartment: {},
    requisitionApprovalMatrix: createDefaultRequisitionApprovalMatrix(),
    activeOfferApprovalDepartmentId: null,
    offerApprovalByDepartment: {},
    offerApprovalMatrix: createDefaultOfferApprovalMatrix(),
    chatMessages: [],
    chatLastRead: { admin: null, client: null },
    trackerData: null,
    expanded: false
  };
  return client;
}

function serializeClients(list) {
  return list.map(client => ({
    ...client,
    availableIds: client.availableIds ? Array.from(client.availableIds) : [],
    requisitionDepartmentStates: Object.fromEntries(
      Object.entries(client.requisitionDepartmentStates || {}).map(([deptId, state]) => [deptId, serializePageState(state, BASE_FIELDS)])
    ),
    piiGeoStates: Object.fromEntries(
      Object.entries(client.piiGeoStates || {}).map(([geoKey, state]) => [geoKey, serializePageState(state, PII_BASE_FIELDS)])
    ),
    applyGeoSourceStates: Object.fromEntries(
      Object.entries(client.applyGeoSourceStates || {}).map(([geoKey, bucket]) => [
        geoKey,
        Object.fromEntries(
          APPLY_SOURCE_OPTIONS.map(source => [
            source,
            serializePageState(bucket && typeof bucket === "object" ? bucket[source] : null, APPLY_BASE_FIELDS)
          ])
        )
      ])
    ),
    requisitionApprovalByDepartment: Object.fromEntries(
      Object.entries(client.requisitionApprovalByDepartment || {}).map(([deptId, rows]) => [deptId, Array.isArray(rows) ? rows.map(row => ({ ...row })) : []])
    ),
    offerApprovalByDepartment: Object.fromEntries(
      Object.entries(client.offerApprovalByDepartment || {}).map(([deptId, rows]) => [deptId, Array.isArray(rows) ? rows.map(row => ({ ...row })) : []])
    ),
    applySourceStates: Object.fromEntries(
      Object.entries(client.applySourceStates || {}).map(([sourceKey, state]) => [sourceKey, serializePageState(state, APPLY_BASE_FIELDS)])
    ),
    activeRequisitionSubDepartmentByDepartmentId: client.activeRequisitionSubDepartmentByDepartmentId && typeof client.activeRequisitionSubDepartmentByDepartmentId === "object"
      ? { ...client.activeRequisitionSubDepartmentByDepartmentId }
      : {},
    activeRequisitionGeoByDepartmentSubKey: client.activeRequisitionGeoByDepartmentSubKey && typeof client.activeRequisitionGeoByDepartmentSubKey === "object"
      ? { ...client.activeRequisitionGeoByDepartmentSubKey }
      : {},
    activeOfferApprovalDepartmentId: client.activeOfferApprovalDepartmentId || null,
    applyGeoFilter: String(client.applyGeoFilter || ""),
    piiGeoFilter: String(client.piiGeoFilter || ""),
    pages: Object.fromEntries(CLIENT_PAGES.map(page => {
      const state = getPageState(client, page.key) || createPageState(getBaseFieldsByPage(page.key));
      return [page.key, {
        ...state,
        availableIds: Array.from(state.availableIds || [])
      }];
    }))
  }));
}

function getClientsSignature(list) {
  return JSON.stringify(serializeClients(list));
}

function deserializeClients(raw) {
  if (!Array.isArray(raw)) return [];
  return raw.map(client => ({
    ...client,
    ownerUserId: String(client.ownerUserId || AUTH.admin.email).trim().toLowerCase(),
    loginEmail: (client.loginEmail || client.clientEmail || client.userEmail || "").toLowerCase(),
    loginPassword: client.loginPassword || client.clientPassword || client.userPassword || "",
    product: normalizeClientProduct(client.product || client.clientProduct),
    sowDocument: normalizeClientSowDocument(client.sowDocument),
    sowVersionHistory: normalizeClientSowHistory(client.sowVersionHistory),
    forcePasswordReset: typeof client.forcePasswordReset === "boolean"
      ? client.forcePasswordReset
      : !(client.loginPassword || client.clientPassword || client.userPassword || "").trim(),
    clientUsers: Array.isArray(client.clientUsers) ? client.clientUsers : [],
    accessDisabled: Boolean(client.accessDisabled),
    chatMessages: Array.isArray(client.chatMessages) ? client.chatMessages : [],
    taChecklist: Array.isArray(client.taChecklist) ? client.taChecklist : createDefaultTaChecklist(),
    documentCollection: client.documentCollection && typeof client.documentCollection === "object"
      ? client.documentCollection
      : createDefaultDocumentCollection(),
    fitmentData: client.fitmentData && typeof client.fitmentData === "object"
      ? client.fitmentData
      : createDefaultFitmentData(),
    piiSections: client.piiSections && typeof client.piiSections === "object"
      ? client.piiSections
      : createDefaultPiiSections(),
    piiGeoStates: client.piiGeoStates && typeof client.piiGeoStates === "object"
      ? client.piiGeoStates
      : {},
    piiGeoFilter: String(client.piiGeoFilter || ""),
    workflowData: client.workflowData && typeof client.workflowData === "object"
      ? client.workflowData
      : createDefaultWorkflowData(),
    itItemData: client.itItemData && typeof client.itItemData === "object"
      ? client.itItemData
      : createDefaultItItemData(),
    dataMigrationData: client.dataMigrationData && typeof client.dataMigrationData === "object"
      ? client.dataMigrationData
      : createDefaultDataMigrationData(),
    applyGeoFilter: String(client.applyGeoFilter || ""),
    applyGeoSourceStates: client.applyGeoSourceStates && typeof client.applyGeoSourceStates === "object"
      ? client.applyGeoSourceStates
      : {},
    applySourceFilter: ["Career Site", "Recruiter Upload", "Employee Referral", "IJP"].includes(String(client.applySourceFilter || "").trim())
      ? String(client.applySourceFilter || "").trim()
      : "Career Site",
    applySourceStates: client.applySourceStates && typeof client.applySourceStates === "object"
      ? client.applySourceStates
      : {},
    applySourceStatesVersion: Number(client.applySourceStatesVersion || 0),
    departmentStructure: client.departmentStructure && typeof client.departmentStructure === "object"
      ? client.departmentStructure
      : createDefaultDepartmentStructure(),
    requisitionDepartmentStates: client.requisitionDepartmentStates && typeof client.requisitionDepartmentStates === "object"
      ? client.requisitionDepartmentStates
      : {},
    activeRequisitionDepartmentId: client.activeRequisitionDepartmentId || null,
    activeRequisitionSubDepartmentByDepartmentId: client.activeRequisitionSubDepartmentByDepartmentId && typeof client.activeRequisitionSubDepartmentByDepartmentId === "object"
      ? client.activeRequisitionSubDepartmentByDepartmentId
      : {},
    activeRequisitionGeoByDepartmentSubKey: client.activeRequisitionGeoByDepartmentSubKey && typeof client.activeRequisitionGeoByDepartmentSubKey === "object"
      ? client.activeRequisitionGeoByDepartmentSubKey
      : {},
    requisitionApprovalByDepartment: client.requisitionApprovalByDepartment && typeof client.requisitionApprovalByDepartment === "object"
      ? client.requisitionApprovalByDepartment
      : {},
    requisitionApprovalMatrix: Array.isArray(client.requisitionApprovalMatrix)
      ? client.requisitionApprovalMatrix
      : createDefaultRequisitionApprovalMatrix(),
    offerApprovalByDepartment: client.offerApprovalByDepartment && typeof client.offerApprovalByDepartment === "object"
      ? client.offerApprovalByDepartment
      : {},
    activeOfferApprovalDepartmentId: client.activeOfferApprovalDepartmentId || null,
    offerApprovalMatrix: Array.isArray(client.offerApprovalMatrix)
      ? client.offerApprovalMatrix
      : createDefaultOfferApprovalMatrix(),
    auditLogsGlobal: Array.isArray(client.auditLogsGlobal) ? client.auditLogsGlobal : [],
    chatLastRead: client.chatLastRead && typeof client.chatLastRead === "object"
      ? { admin: client.chatLastRead.admin || null, client: client.chatLastRead.client || null }
      : { admin: null, client: null },
    availableIds: new Set(client.availableIds || [])
  })).map(client => {
    client.sowVersionHistory = normalizeClientSowHistory(client.sowVersionHistory);
    if (!client.sowVersionHistory.length) {
      const sow = normalizeClientSowDocument(client.sowDocument);
      if (sow) client.sowVersionHistory = [createSowHistoryEntryFromDocument(sow)];
    }
    ensureClientPages(client);
    ensureTaChecklist(client);
    ensureDocumentCollection(client);
    ensureFitmentData(client);
    ensurePiiGeoStates(client);
    ensurePiiSections(client);
    ensureWorkflowData(client);
    ensureItItemData(client);
    ensureDataMigrationData(client);
    ensureApplySourceStates(client);
    ensureClientUsers(client);
    ensureDepartmentStructure(client);
    ensureRequisitionDepartmentStates(client);
    ensureRequisitionApprovalByDepartment(client);
    ensureOfferApprovalByDepartment(client);
    const requisition = getPageState(client, "requisition");
    client.fieldCatalog = requisition.fieldCatalog;
    client.availableIds = requisition.availableIds;
    client.canvasFields = requisition.canvasFields;
    client.submittedCanvasFields = requisition.submittedCanvasFields;
    client.submittedAt = requisition.submittedAt;
    client.auditLogs = requisition.auditLogs;
    return client;
  });
}

function saveClients() {
  memoryClientsSnapshot = serializeClients(clients);
  lastSyncedSignature = JSON.stringify(memoryClientsSnapshot);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(memoryClientsSnapshot));
    localStorage.setItem(SCHEMA_VERSION_KEY, String(CURRENT_DATA_SCHEMA_VERSION));
  } catch (error) {
    // ignore storage failures
  }
  queueClientsApiSync();
  if (syncChannel) {
    try {
      syncChannel.postMessage({ type: "clients_updated", timestamp: Date.now() });
    } catch (error) {
      // ignore channel failures
    }
  }
}

function normalizeManagedUsers(list) {
  if (!Array.isArray(list)) return [];
  return list
    .map(user => ({
      id: String(user?.id || `u_${Date.now()}_${Math.floor(Math.random() * 1000)}`),
      name: String(user?.name || "").trim(),
      email: String(user?.email || "").trim().toLowerCase(),
      password: String(user?.password || "").trim(),
      createdAt: String(user?.createdAt || new Date().toISOString()),
      accessDisabled: Boolean(user?.accessDisabled)
    }))
    .filter(user => user.name && user.email && user.password && user.email !== AUTH.admin.email);
}

function loadManagedUsers() {
  try {
    const raw = localStorage.getItem(USERS_STORAGE_KEY);
    if (!raw) return [];
    return normalizeManagedUsers(JSON.parse(raw));
  } catch (error) {
    return [];
  }
}

function saveManagedUsers() {
  try {
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(normalizeManagedUsers(managedUsers)));
    localStorage.setItem(SCHEMA_VERSION_KEY, String(CURRENT_DATA_SCHEMA_VERSION));
  } catch (error) {
    // ignore storage failures
  }
  if (syncChannel) {
    try {
      syncChannel.postMessage({ type: "users_updated", timestamp: Date.now() });
    } catch (error) {
      // ignore channel failures
    }
  }
}

function getStoredSchemaVersion() {
  try {
    const raw = localStorage.getItem(SCHEMA_VERSION_KEY);
    const parsed = Number(raw);
    return Number.isFinite(parsed) ? parsed : 0;
  } catch (error) {
    return 0;
  }
}

function setStoredSchemaVersion(version = CURRENT_DATA_SCHEMA_VERSION) {
  try {
    localStorage.setItem(SCHEMA_VERSION_KEY, String(Number(version) || CURRENT_DATA_SCHEMA_VERSION));
  } catch (error) {
    // ignore storage failures
  }
}

function migrateStoredDataIfNeeded() {
  const storedVersion = getStoredSchemaVersion();
  if (storedVersion >= CURRENT_DATA_SCHEMA_VERSION) return;

  // Deserialize + re-serialize to apply all current normalizers/migrations.
  const migratedClients = loadClients();
  const migratedUsers = loadManagedUsers();
  clients = migratedClients || [];
  managedUsers = migratedUsers || [];
  saveClients();
  saveManagedUsers();
  setStoredSchemaVersion(CURRENT_DATA_SCHEMA_VERSION);
}

function persistSession() {
  if (!currentRole) return;
  const active = getActiveClient();
  try {
    localStorage.setItem(SESSION_KEY, JSON.stringify({
      role: currentRole,
      loginEmail: currentUserEmail || (currentRole === "admin" ? AUTH.admin.email : (active?.loginEmail || "")),
      clientId: activeClientId || null,
      loginAt: Date.now()
    }));
  } catch (error) {
    // ignore storage failures
  }
}

function loadClients() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return deserializeClients(memoryClientsSnapshot);
    return deserializeClients(JSON.parse(raw));
  } catch (error) {
    return deserializeClients(memoryClientsSnapshot);
  }
}

function loadClientsForAuth() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return deserializeClients(JSON.parse(raw));
  } catch (error) {
    return null;
  }
}

function isAdmin() {
  return currentRole === "admin";
}

function isManager() {
  return currentRole === "manager";
}

function isClientRole() {
  return currentRole === "client";
}

function canManageClients() {
  return isAdmin() || isManager();
}

function isOwnedByCurrentUser(client) {
  if (!client) return false;
  if (isAdmin()) return true;
  if (!isManager()) return false;
  return String(client.ownerUserId || "").toLowerCase() === String(currentUserEmail || "").toLowerCase();
}

function canManageClientRecord(client) {
  if (!client) return false;
  return isAdmin() || isOwnedByCurrentUser(client);
}

function canManageClientUsers(client) {
  if (!client) return false;
  if (isAdmin() || isOwnedByCurrentUser(client)) return true;
  if (!isClientRole()) return false;
  return String(client.loginEmail || "").toLowerCase() === String(currentUserEmail || "").toLowerCase();
}

function getVisibleClientsForCurrentRole() {
  if (isClientRole()) {
    return clients.filter(client => client.id === activeClientId);
  }
  if (isManager()) {
    return clients.filter(client => isOwnedByCurrentUser(client));
  }
  return clients;
}

function canEditWorkspace() {
  return isClientRole() || canManageClients();
}

function addAuditLog(client, action, fieldName, options = {}) {
  if (!client) return;
  const pageKey = options.pageKey || getActivePageKey();
  const page = getPageState(client, pageKey);
  const actorRole = options.actorRole || currentRole || "system";
  const actorName = options.actorName || (actorRole === "admin" ? "Admin" : actorRole === "client" ? "Client" : "System");
  const eventType = options.eventType || "field";
  const entry = {
    timestamp: new Date().toLocaleString(),
    timestampIso: new Date().toISOString(),
    action,
    fieldName,
    eventType,
    actorRole,
    actorName,
    page: pageKey
  };

  if (page) {
    page.auditLogs = Array.isArray(page.auditLogs) ? page.auditLogs : [];
    page.auditLogs.unshift(entry);
  }
  client.auditLogsGlobal = Array.isArray(client.auditLogsGlobal) ? client.auditLogsGlobal : [];
  client.auditLogsGlobal.unshift(entry);
}

function getActiveClient() {
  const active = clients.find(client => client.id === activeClientId) || null;
  if (!active) return null;
  if (isManager() && !isOwnedByCurrentUser(active)) return null;
  return active;
}

function getCurrentClientSubUser(client) {
  if (!isClientRole() || !client) return null;
  const normalizedEmail = String(currentUserEmail || "").toLowerCase();
  if (!normalizedEmail) return null;
  if (normalizedEmail === String(client.loginEmail || "").toLowerCase()) return null;
  ensureClientUsers(client);
  return (client.clientUsers || []).find(user => user.email === normalizedEmail) || null;
}

function getClientAllowedPages(client) {
  if (!isClientRole()) return CLIENT_PAGES.map(page => page.key).concat([WORKFLOW_PAGE_KEY]);
  const subUser = getCurrentClientSubUser(client);
  if (!subUser) return CLIENT_PAGES.map(page => page.key).concat([WORKFLOW_PAGE_KEY]);
  const allowed = Array.isArray(subUser.accessPages) ? subUser.accessPages : [];
  return allowed.length ? [...allowed] : ["requisition"];
}

function canAccessClientPage(pageKey, client = getActiveClient()) {
  if (!isClientRole()) return true;
  const allowed = getClientAllowedPages(client);
  if (pageKey === WORKFLOW_PAGE_KEY) return allowed.includes("workflow");
  return allowed.includes(pageKey);
}

function getVisibleCanvasFields(client) {
  const page = getPageState(client);
  if (!page) return [];
  return canEditWorkspace() ? (page.canvasFields || []) : (page.submittedCanvasFields || []);
}

function getPiiSectionById(client, sectionId) {
  ensurePiiSections(client);
  return (client.piiSections.sections || []).find(section => section.id === sectionId) || null;
}

function getActivePiiSection(client) {
  ensurePiiSections(client);
  return getPiiSectionById(client, client.piiSections.activeSectionId);
}

function applyRoleUI() {
  document.body.classList.remove("role-admin", "role-manager", "role-client");
  if (currentRole) document.body.classList.add(`role-${currentRole}`);
  if (roleBadge) roleBadge.textContent = currentRole ? currentRole.toUpperCase() : "Role";
}

function setRootVisibility(showApp) {
  const showWorkspace = Boolean(showApp);
  if (loginRoot) {
    loginRoot.classList.toggle("hidden", showWorkspace);
    loginRoot.style.display = showWorkspace ? "none" : "grid";
  }
  if (appRoot) {
    appRoot.classList.toggle("hidden", !showWorkspace);
    appRoot.style.display = showWorkspace ? "" : "none";
  }
}

function refreshClientsFromStorage() {
  const loadedClients = loadClients();
  const nextSignature = getClientsSignature(loadedClients || []);
  if (nextSignature === lastSyncedSignature) return false;

  clients = loadedClients || [];
  memoryClientsSnapshot = serializeClients(clients);
  lastSyncedSignature = nextSignature;
  migrateLegacySowDocumentsToBinaryStore();

  const visibleClients = getVisibleClientsForCurrentRole();
  if (activeClientId && !visibleClients.some(client => client.id === activeClientId)) {
    activeClientId = visibleClients[0] ? visibleClients[0].id : null;
  }
  renderAll();
  enforceClientAccess();
  enforceManagerAccess();
  return true;
}

async function refreshClientsFromApi() {
  const response = await pullClientsFromApi();
  if (!response.ok || !response.changed) return false;

  const visibleClients = getVisibleClientsForCurrentRole();
  if (activeClientId && !visibleClients.some(client => client.id === activeClientId)) {
    activeClientId = visibleClients[0] ? visibleClients[0].id : null;
  }
  renderAll();
  enforceClientAccess();
  enforceManagerAccess();
  return true;
}

function startSyncPolling() {
  if (syncPollTimer) return;
  syncPollTimer = window.setInterval(() => {
    if (!currentRole) return;
    if (hasApiSession()) {
      void refreshClientsFromApi();
      return;
    }
    refreshClientsFromStorage();
  }, hasApiSession() ? 3000 : 1000);
}

function stopSyncPolling() {
  if (!syncPollTimer) return;
  window.clearInterval(syncPollTimer);
  syncPollTimer = null;
}

function login(role, options = {}) {
  currentRole = role;
  currentUserEmail = String(options.userEmail || (role === "admin" ? AUTH.admin.email : "")).toLowerCase();
  if (role === "client" && options.clientId) {
    activeClientId = options.clientId;
  }
  activeClientPage = "requisition";
  activeAdminPage = "requisition";
  activeFitmentView = "offer";
  isChatPopupOpen = false;
  if (chatPopup) chatPopup.classList.add("hidden");
  if (canManageClients() && !activeClientId) {
    const visible = getVisibleClientsForCurrentRole();
    activeClientId = visible[0] ? visible[0].id : null;
  }
  if (canManageClients()) {
    const visible = getVisibleClientsForCurrentRole();
    if (!visible.some(client => client.id === activeClientId)) {
      activeClientId = visible[0] ? visible[0].id : null;
    }
  }
  persistSession();
  setRootVisibility(true);
  applyRoleUI();
  startSyncPolling();
  renderAll();
}

function logout() {
  currentRole = null;
  currentUserEmail = "";
  activeClientPage = "requisition";
  activeAdminPage = "requisition";
  activeFitmentView = "offer";
  isChatPopupOpen = false;
  if (chatPopup) chatPopup.classList.add("hidden");
  try {
    localStorage.removeItem(SESSION_KEY);
  } catch (error) {
    // ignore storage failures
  }
  clearApiSession();
  stopSyncPolling();
  setRootVisibility(false);
  if (loginPassword) loginPassword.value = "";
  if (loginError) loginError.classList.add("hidden");
  applyRoleUI();
}

function setPandaEyesClosed(active) {
  if (!loginAvatar) return;
  loginAvatar.classList.toggle("eyes-closed", Boolean(active));
  if (loginPanel) loginPanel.classList.toggle("password-active", Boolean(active));
}

function blinkPandaEyes() {
  if (!loginAvatar) return;
  if (loginAvatar.classList.contains("eyes-closed")) return;
  loginAvatar.classList.remove("is-blinking");
  window.requestAnimationFrame(() => {
    loginAvatar.classList.add("is-blinking");
  });
  if (pandaBlinkTimer) window.clearTimeout(pandaBlinkTimer);
  pandaBlinkTimer = window.setTimeout(() => {
    loginAvatar.classList.remove("is-blinking");
  }, 320);
}

function authenticateFromLocalStorage(email, password) {
  const normalized = (email || "").trim().toLowerCase();
  const normalizedPassword = (password || "").trim();
  if (normalized === AUTH.admin.email) {
    if (normalizedPassword !== AUTH.admin.password) {
      return { role: null, clientId: null, reason: "wrong_password" };
    }
    return { role: AUTH.admin.role, clientId: null, userEmail: AUTH.admin.email, reason: null };
  }

  const normalizedUsers = normalizeManagedUsers(managedUsers);
  const matchedUser = normalizedUsers.find(user => user.email === normalized);
  if (matchedUser) {
    if (matchedUser.accessDisabled) {
      return { role: null, clientId: null, reason: "user_disabled" };
    }
    if (matchedUser.password !== normalizedPassword) {
      return { role: null, clientId: null, reason: "wrong_password" };
    }
    return { role: "manager", clientId: null, userEmail: matchedUser.email, reason: null };
  }

  // Client authentication must use persisted client records.
  const loadedClients = loadClientsForAuth();
  if (loadedClients === null) {
    return { role: null, clientId: null, reason: "storage_unavailable" };
  }
  clients = loadedClients;
  memoryClientsSnapshot = serializeClients(clients);
  lastSyncedSignature = getClientsSignature(clients);

  if (!loadedClients.length) {
    return { role: null, clientId: null, reason: managedUsers.length ? "no_user" : "no_client_data" };
  }

  const matchedClient = loadedClients.find(client => (client.loginEmail || "").toLowerCase() === normalized);
  const matchedClientSubUser = loadedClients
    .map(client => {
      ensureClientUsers(client);
      const sub = (client.clientUsers || []).find(user => user.email === normalized);
      return sub ? { client, sub } : null;
    })
    .find(Boolean);

  if (!matchedClient && !matchedClientSubUser) {
    return { role: null, clientId: null, reason: "no_user" };
  }

  if (matchedClientSubUser && !matchedClient) {
    if (matchedClientSubUser.client.accessDisabled) {
      return { role: null, clientId: null, reason: "disabled" };
    }
    if (matchedClientSubUser.sub.accessDisabled) {
      return { role: null, clientId: null, reason: "subuser_disabled" };
    }
    if ((matchedClientSubUser.sub.password || "").trim() !== normalizedPassword) {
      return { role: null, clientId: null, reason: "wrong_password" };
    }
    return {
      role: "client",
      clientId: matchedClientSubUser.client.id || null,
      userEmail: matchedClientSubUser.sub.email || "",
      reason: matchedClientSubUser.client.id ? null : "invalid"
    };
  }

  if (matchedClient.accessDisabled) {
    return { role: null, clientId: null, reason: "disabled" };
  }

  if (matchedClient.forcePasswordReset) {
    return { role: "client", clientId: matchedClient.id || null, userEmail: matchedClient.loginEmail || "", reason: matchedClient.id ? "reset_required" : "invalid" };
  }

  if ((matchedClient.loginPassword || "").trim() !== normalizedPassword) {
    return { role: null, clientId: null, reason: "wrong_password" };
  }

  return { role: "client", clientId: matchedClient.id || null, userEmail: matchedClient.loginEmail || "", reason: matchedClient.id ? null : "invalid" };
}

async function authenticate(email, password) {
  const normalized = (email || "").trim().toLowerCase();
  const normalizedPassword = (password || "").trim();
  if (!normalized || !normalizedPassword) {
    return { role: null, clientId: null, reason: "invalid" };
  }

  let apiHadServerError = false;
  const apiAuth = await authenticateWithApi(normalized, normalizedPassword);
  if (apiAuth.ok && apiAuth.auth) {
    const auth = { ...apiAuth.auth };
    if (auth.role === "client" && !auth.clientId && auth.backendClientId) {
      const fallbackMatch = clients.find(client => String(client.backendId || "") === String(auth.backendClientId));
      auth.clientId = fallbackMatch ? fallbackMatch.id : null;
    }
    if (auth.role !== "client" || auth.clientId) {
      return auth;
    }
  } else if (apiAuth.reason === "api_error") {
    apiHadServerError = true;
  }

  const localAuth = authenticateFromLocalStorage(normalized, normalizedPassword);
  if (!localAuth.role && apiHadServerError) {
    return { ...localAuth, reason: "api_error" };
  }
  if (!localAuth.role && apiAuth.reason === "api_unreachable" && localAuth.reason === "no_client_data") {
    return { ...localAuth, reason: "api_unavailable" };
  }
  return localAuth;
}

function enforceClientAccess() {
  if (!isClientRole()) return true;
  const active = getActiveClient();
  if (!active || active.accessDisabled) {
    window.alert("Your client access has been disabled by admin.");
    logout();
    return false;
  }
  if (active.forcePasswordReset) {
    if (String(active.loginEmail || "").toLowerCase() === String(currentUserEmail || "").toLowerCase()) {
      window.alert("Your password was reset by admin. Please login again and set a new password.");
      logout();
      return false;
    }
  }
  const subUser = getCurrentClientSubUser(active);
  if (subUser && subUser.accessDisabled) {
    window.alert("Your user access has been disabled.");
    logout();
    return false;
  }
  return true;
}

function enforceManagerAccess() {
  if (!isManager()) return true;
  const matchedUser = normalizeManagedUsers(managedUsers).find(user => user.email === String(currentUserEmail || "").toLowerCase());
  if (!matchedUser || matchedUser.accessDisabled) {
    window.alert("Your user access has been disabled by admin.");
    logout();
    return false;
  }
  return true;
}

function updateWorkspaceVisibility() {
  const hasActive = Boolean(getActiveClient());
  if (workspaceContent) workspaceContent.classList.toggle("hidden", !hasActive);
  if (workspacePlaceholder) workspacePlaceholder.classList.toggle("hidden", hasActive);
  if (!hasActive) {
    if (clientPageTabs) clientPageTabs.classList.add("hidden");
    if (adminSowManageBtn) adminSowManageBtn.classList.add("hidden");
    closeAdminSowModal();
  }
}

function getRequisitionSubmittedLabel(client) {
  if (!client) return "Not Submitted";
  ensureRequisitionDepartmentStates(client);
  const departments = client.departmentStructure?.departments || [];
  if (!departments.length) {
    const fallback = getPageState(client, "requisition");
    return fallback?.submittedAt || "Not Submitted";
  }
  const submittedValues = [];
  departments.forEach(dept => {
    const subOptions = [MAIN_SUB_DEPARTMENT_KEY, ...(dept.subDepartments || [])];
    subOptions.forEach(subDept => {
      const mainGeoSubmitted = getRequisitionDepartmentPageState(client, dept.id, subDept, MAIN_GEO_KEY)?.submittedAt || "";
      if (mainGeoSubmitted) submittedValues.push(mainGeoSubmitted);
      (dept.geos || []).forEach(geo => {
        const geoSubmitted = getRequisitionDepartmentPageState(client, dept.id, subDept, geo)?.submittedAt || "";
        if (geoSubmitted) submittedValues.push(geoSubmitted);
      });
    });
  });
  return submittedValues.length ? submittedValues[submittedValues.length - 1] : "Not Submitted";
}

function renderRequisitionDepartmentSwitcher() {
  const active = getActiveClient();
  if (!requisitionDeptSwitcher || !requisitionDeptSelect || !requisitionSubDeptSelect || !requisitionGeoSelect || !requisitionDeptHint || !requisitionDeptNameInput || !requisitionAddDeptBtn || !requisitionRemoveDeptBtn) return;
  const isRequisitionPage = getActivePageKey() === "requisition";
  requisitionDeptSwitcher.classList.toggle("hidden", !isRequisitionPage);
  if (!isRequisitionPage || !active) return;

  ensureRequisitionDepartmentStates(active);
  active.activeWorkspaceGeo = getActiveWorkspaceGeo(active);
  const globalGeos = Array.isArray(active.departmentStructure?.geos) ? active.departmentStructure.geos : [];
  const hasGlobalGeos = globalGeos.length > 0;
  const departments = getDepartmentsForWorkspaceGeo(active, active.activeWorkspaceGeo);
  if (requisitionDeptRow) requisitionDeptRow.classList.toggle("hidden", !hasGlobalGeos);
  if (requisitionSubDeptSelectRow) requisitionSubDeptSelectRow.classList.toggle("hidden", !hasGlobalGeos);
  if (requisitionSubDeptManageRow) requisitionSubDeptManageRow.classList.add("hidden");
  if (requisitionGeoManageRow && !hasGlobalGeos) requisitionGeoManageRow.classList.add("hidden");
  if (requisitionGeoManageRowCreate) requisitionGeoManageRowCreate.classList.add("hidden");
  requisitionDeptSelect.innerHTML = "";
  if (requisitionDeptCount) requisitionDeptCount.textContent = String(departments.length);
  const canEdit = canEditWorkspace();
  requisitionDeptNameInput.disabled = !canEdit;
  if (requisitionHasSubDeptCheck) requisitionHasSubDeptCheck.disabled = !canEdit;
  if (requisitionSubDeptInput) requisitionSubDeptInput.disabled = !canEdit;
  if (requisitionNewSubDeptInput) requisitionNewSubDeptInput.disabled = !canEdit;
  if (requisitionAddSubDeptBtn) requisitionAddSubDeptBtn.disabled = !canEdit;
  if (requisitionShowSubDeptManageBtn) requisitionShowSubDeptManageBtn.disabled = !canEdit || !hasGlobalGeos;
  if (requisitionNewGeoInput) requisitionNewGeoInput.disabled = !canEdit;
  if (requisitionAddGeoBtn) requisitionAddGeoBtn.disabled = !canEdit;
  if (requisitionNewGeoInputCreate) requisitionNewGeoInputCreate.disabled = !canEdit;
  if (requisitionAddGeoBtnCreate) requisitionAddGeoBtnCreate.disabled = !canEdit;
  if (requisitionShowGeoManageBtn) requisitionShowGeoManageBtn.disabled = !canEdit;
  if (requisitionQuickAddDeptBtn) requisitionQuickAddDeptBtn.disabled = !canEdit || !hasGlobalGeos;
  requisitionAddDeptBtn.disabled = !canEdit || !hasGlobalGeos;
  requisitionRemoveDeptBtn.disabled = !canEdit;
  requisitionGeoSelect.innerHTML = "";
  if (!hasGlobalGeos) {
    const geoMainOption = document.createElement("option");
    geoMainOption.value = MAIN_GEO_KEY;
    geoMainOption.textContent = "No Geos";
    requisitionGeoSelect.appendChild(geoMainOption);
  } else {
    globalGeos.forEach(geo => {
      const option = document.createElement("option");
      option.value = geo;
      option.textContent = geo;
      if (geo.toLowerCase() === String(active.activeWorkspaceGeo || "").toLowerCase()) option.selected = true;
      requisitionGeoSelect.appendChild(option);
    });
  }
  requisitionGeoSelect.disabled = !hasGlobalGeos;
  toggleSubDepartmentInputVisibility();
  if (!hasGlobalGeos) {
    requisitionDeptSelect.disabled = true;
    requisitionSubDeptSelect.innerHTML = '<option value="__main__">Main Department</option>';
    requisitionSubDeptSelect.disabled = true;
    if (requisitionSubDeptCount) requisitionSubDeptCount.textContent = "0";
    if (requisitionGeoCount) requisitionGeoCount.textContent = "0";
    if (requisitionShowSubDeptManageBtn) requisitionShowSubDeptManageBtn.disabled = true;
    if (requisitionRemoveSubDeptBtn) requisitionRemoveSubDeptBtn.disabled = true;
    if (requisitionRemoveGeoBtn) requisitionRemoveGeoBtn.disabled = true;
    requisitionRemoveDeptBtn.disabled = true;
    requisitionDeptHint.textContent = "Add at least one Geo, then create your first department.";
    return;
  }

  if (!departments.length) {
    requisitionDeptSelect.disabled = true;
    requisitionSubDeptSelect.innerHTML = '<option value="__main__">Main Department</option>';
    requisitionSubDeptSelect.disabled = true;
    if (requisitionSubDeptCount) requisitionSubDeptCount.textContent = "0";
    if (requisitionGeoCount) requisitionGeoCount.textContent = String(globalGeos.length);
    if (requisitionShowSubDeptManageBtn) requisitionShowSubDeptManageBtn.disabled = true;
    if (requisitionRemoveSubDeptBtn) requisitionRemoveSubDeptBtn.disabled = true;
    if (requisitionRemoveGeoBtn) requisitionRemoveGeoBtn.disabled = !canEdit || !hasGlobalGeos;
    requisitionRemoveDeptBtn.disabled = true;
    requisitionDeptHint.textContent = `No departments configured for ${active.activeWorkspaceGeo}.`;
    return;
  }

  const selectedId = departments.some(item => item.id === getActiveRequisitionDepartmentId(active))
    ? getActiveRequisitionDepartmentId(active)
    : departments[0].id;
  active.activeRequisitionDepartmentId = selectedId;
  departments.forEach(dept => {
    const option = document.createElement("option");
    option.value = dept.id;
    option.textContent = dept.name;
    if (dept.id === selectedId) option.selected = true;
    requisitionDeptSelect.appendChild(option);
  });
  requisitionDeptSelect.disabled = false;
  requisitionRemoveDeptBtn.disabled = !canEdit;
  const selectedDepartment = departments.find(item => item.id === selectedId) || departments[0];
  requisitionSubDeptSelect.innerHTML = "";
  const mainOption = document.createElement("option");
  mainOption.value = MAIN_SUB_DEPARTMENT_KEY;
  mainOption.textContent = "Main Department";
  requisitionSubDeptSelect.appendChild(mainOption);
  (selectedDepartment.subDepartments || []).forEach(subDept => {
    const option = document.createElement("option");
    option.value = subDept;
    option.textContent = subDept;
    requisitionSubDeptSelect.appendChild(option);
  });
  if (requisitionSubDeptCount) {
    requisitionSubDeptCount.textContent = String((selectedDepartment.subDepartments || []).length);
  }
  const selectedSub = getSubDepartmentLabel(
    selectedDepartment,
    active.activeRequisitionSubDepartmentByDepartmentId?.[selectedDepartment.id]
  );
  if (!active.activeRequisitionSubDepartmentByDepartmentId || typeof active.activeRequisitionSubDepartmentByDepartmentId !== "object") {
    active.activeRequisitionSubDepartmentByDepartmentId = {};
  }
  active.activeRequisitionSubDepartmentByDepartmentId[selectedDepartment.id] = selectedSub;
  requisitionSubDeptSelect.value = selectedSub;
  requisitionSubDeptSelect.disabled = !(selectedDepartment.subDepartments || []).length;
  if (requisitionShowSubDeptManageBtn) requisitionShowSubDeptManageBtn.disabled = !canEdit;
  const geoScopeKey = getRequisitionGeoScopeKey(selectedDepartment.id, selectedSub);
  const selectedGeo = getGeoLabel(selectedDepartment, active.activeWorkspaceGeo);
  if (!active.activeRequisitionGeoByDepartmentSubKey || typeof active.activeRequisitionGeoByDepartmentSubKey !== "object") {
    active.activeRequisitionGeoByDepartmentSubKey = {};
  }
  active.activeRequisitionGeoByDepartmentSubKey[geoScopeKey] = selectedGeo;
  if (requisitionGeoCount) requisitionGeoCount.textContent = String((selectedDepartment.geos || []).length);
  if (requisitionRemoveSubDeptBtn) {
    requisitionRemoveSubDeptBtn.disabled = !canEdit || selectedSub === MAIN_SUB_DEPARTMENT_KEY;
  }
  if (requisitionRemoveGeoBtn) {
    requisitionRemoveGeoBtn.disabled = !canEdit || !selectedGeo || selectedGeo === MAIN_GEO_KEY;
  }
  const labelParts = [selectedGeo, selectedDepartment.name];
  if (selectedSub !== MAIN_SUB_DEPARTMENT_KEY) labelParts.push(selectedSub);
  requisitionDeptHint.textContent = `Active: ${labelParts.join(" -> ")}.`;
}

function renderPiiSectionManager() {
  const active = getActiveClient();
  if (!piiSectionManager || !piiSectionSelect || !piiSectionHint) return;
  const isPiiPage = getActivePageKey() === "pii";
  piiSectionManager.classList.toggle("hidden", !isPiiPage);
  piiSectionHint.classList.toggle("hidden", !isPiiPage);
  if (!isPiiPage || !active) return;

  ensurePiiSections(active);
  ensurePiiGeoStates(active);
  const activeGeo = getPiiActiveGeo(active);
  const sections = active.piiSections.sections || [];
  const canEdit = canEditWorkspace();
  const piiPage = getPageState(active, "pii");
  piiSectionSelect.innerHTML = "";
  if (piiSectionCount) piiSectionCount.textContent = String(sections.length);
  piiSectionSelect.disabled = !canEdit;
  if (piiAddSectionToCanvasBtn) piiAddSectionToCanvasBtn.disabled = !canEdit || !sections.length;
  if (piiRemoveSectionFromCanvasBtn) piiRemoveSectionFromCanvasBtn.disabled = !canEdit || !sections.length;

  if (!sections.length) {
    piiSectionHint.textContent = activeGeo
      ? `Geo: ${activeGeo}. No sections yet. Add your first PII section.`
      : "No sections yet. Add your first PII section.";
  }

  if (canEdit) {
    const addOption = document.createElement("option");
    addOption.value = "__add_new_section__";
    addOption.textContent = "+ Add New Section";
    piiSectionSelect.appendChild(addOption);
  }

  sections.forEach(section => {
    const option = document.createElement("option");
    option.value = section.id;
    option.textContent = section.name;
    if (section.id === active.piiSections.activeSectionId) option.selected = true;
    piiSectionSelect.appendChild(option);
  });
  if (canEdit && !active.piiSections.activeSectionId && sections[0]) {
    active.piiSections.activeSectionId = sections[0].id;
  }
  const selected = getActivePiiSection(active);
  const canvasSections = Array.isArray(piiPage?.canvasSectionOrder) ? piiPage.canvasSectionOrder.length : 0;
  piiSectionHint.textContent = selected
    ? `${activeGeo ? `Geo: ${activeGeo} | ` : ""}Active section: ${selected.name}. Sections in canvas: ${canvasSections}.`
    : `${activeGeo ? `Geo: ${activeGeo} | ` : ""}Select a section from dropdown.`;
}

function renderApplySourceFilter() {
  if (!applySourceFilterBar || !applySourceFilterSelect) return;
  const active = getActiveClient();
  const isApplyPage = getActivePageKey() === "apply";
  applySourceFilterBar.classList.toggle("hidden", !isApplyPage);
  if (!isApplyPage || !active) return;
  ensureApplySourceStates(active);
  const value = getActiveApplySourceKey(active);
  applySourceFilterSelect.value = value;
  applySourceFilterSelect.disabled = !canEditWorkspace();
}

function renderApplyGeoFilter() {
  if (!applyGeoFilterBar || !applyGeoFilterSelect) return;
  const active = getActiveClient();
  const isApplyPage = getActivePageKey() === "apply";
  applyGeoFilterBar.classList.toggle("hidden", !isApplyPage);
  if (!isApplyPage || !active) return;

  ensureDepartmentStructure(active);
  ensureApplySourceStates(active);
  const geos = Array.isArray(active.departmentStructure?.geos) ? active.departmentStructure.geos : [];
  const activeGeo = getApplyActiveGeo(active);
  active.applyGeoFilter = activeGeo;

  applyGeoFilterSelect.innerHTML = "";
  if (!geos.length) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = "No Geo Added";
    applyGeoFilterSelect.appendChild(option);
    applyGeoFilterSelect.disabled = true;
  } else {
    geos.forEach(geo => {
      const option = document.createElement("option");
      option.value = geo;
      option.textContent = geo;
      if (String(geo || "").toLowerCase() === String(activeGeo || "").toLowerCase()) option.selected = true;
      applyGeoFilterSelect.appendChild(option);
    });
    applyGeoFilterSelect.disabled = false;
  }

  if (applyGeoAddBtn) applyGeoAddBtn.disabled = !canEditWorkspace();
}

function renderPiiGeoFilter() {
  if (!piiGeoFilterBar || !piiGeoFilterSelect) return;
  const active = getActiveClient();
  const isPiiPage = getActivePageKey() === "pii";
  piiGeoFilterBar.classList.toggle("hidden", !isPiiPage);
  if (!isPiiPage || !active) return;

  ensureDepartmentStructure(active);
  ensurePiiGeoStates(active);
  const geos = Array.isArray(active.departmentStructure?.geos) ? active.departmentStructure.geos : [];
  const activeGeo = getPiiActiveGeo(active);
  active.piiGeoFilter = activeGeo;

  piiGeoFilterSelect.innerHTML = "";
  if (!geos.length) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = "No Geo Added";
    piiGeoFilterSelect.appendChild(option);
    piiGeoFilterSelect.disabled = true;
  } else {
    geos.forEach(geo => {
      const option = document.createElement("option");
      option.value = geo;
      option.textContent = geo;
      if (String(geo || "").toLowerCase() === String(activeGeo || "").toLowerCase()) option.selected = true;
      piiGeoFilterSelect.appendChild(option);
    });
    piiGeoFilterSelect.disabled = false;
  }

  if (piiGeoAddBtn) piiGeoAddBtn.disabled = !canEditWorkspace();
}

function addPiiSectionForActiveClient(nameInput = "") {
  const active = getActiveClient();
  if (!canEditWorkspace() || !active) return false;
  ensurePiiSections(active);
  const name = String(nameInput || "").trim();
  if (!name) {
    return false;
  }
  const exists = (active.piiSections.sections || []).some(section => section.name.toLowerCase() === name.toLowerCase());
  if (exists) {
    window.alert("Section already exists.");
    return false;
  }
  const section = { id: `pii_s_${Date.now()}_${Math.floor(Math.random() * 1000)}`, name };
  active.piiSections.sections.push(section);
  active.piiSections.activeSectionId = section.id;
  addAuditLog(active, "PII Section Added", name, {
    eventType: "field",
    actorRole: "client",
    actorName: active.name || "Client",
    pageKey: "pii"
  });
  saveClients();
  renderWorkspace();
  return true;
}

function addSelectedPiiSectionToCanvas() {
  if (!canEditWorkspace()) return;
  const active = getActiveClient();
  if (!active) return;
  ensurePiiSections(active);
  const piiPage = getPageState(active, "pii");
  if (!piiPage) return;
  const sectionId = piiSectionSelect ? piiSectionSelect.value : "";
  if (!sectionId || sectionId === "__add_new_section__") {
    window.alert("Select a valid section first.");
    return;
  }
  const section = getPiiSectionById(active, sectionId);
  if (!section) return;
  if (!Array.isArray(piiPage.canvasSectionOrder)) piiPage.canvasSectionOrder = [];
  if (!piiPage.canvasSectionOrder.includes(sectionId)) {
    piiPage.canvasSectionOrder.push(sectionId);
    addAuditLog(active, "PII Section Added To Canvas", section.name, {
      eventType: "field",
      actorRole: "client",
      actorName: active.name || "Client",
      pageKey: "pii"
    });
    saveClients();
  }
  renderWorkspace();
}

function removeSelectedPiiSectionFromCanvas() {
  if (!canEditWorkspace()) return;
  const active = getActiveClient();
  if (!active) return;
  ensurePiiSections(active);
  const piiPage = getPageState(active, "pii");
  if (!piiPage) return;
  const sectionId = piiSectionSelect ? piiSectionSelect.value : "";
  if (!sectionId || sectionId === "__add_new_section__") {
    window.alert("Select a valid section first.");
    return;
  }
  if (!Array.isArray(piiPage.canvasSectionOrder)) piiPage.canvasSectionOrder = [];
  if (!piiPage.canvasSectionOrder.includes(sectionId)) {
    window.alert("Selected section is not in canvas.");
    return;
  }
  const section = getPiiSectionById(active, sectionId);
  piiPage.canvasSectionOrder = piiPage.canvasSectionOrder.filter(id => id !== sectionId);
  addAuditLog(active, "PII Section Removed From Canvas", section?.name || sectionId, {
    eventType: "field",
    actorRole: "client",
    actorName: active.name || "Client",
    pageKey: "pii"
  });
  saveClients();
  renderWorkspace();
}

function removePiiSectionForActiveClient() {
  if (!canEditWorkspace()) return;
  const active = getActiveClient();
  if (!active) return;
  ensurePiiSections(active);
  const sectionId = piiSectionSelect ? piiSectionSelect.value : "";
  if (!sectionId) return;
  const index = active.piiSections.sections.findIndex(section => section.id === sectionId);
  if (index === -1) return;
  const section = active.piiSections.sections[index];
  const ok = window.confirm(`Delete PII section "${section.name}"? Fields in this section will become unsectioned.`);
  if (!ok) return;
  active.piiSections.sections.splice(index, 1);
  ensurePiiGeoStates(active);
  Object.values(active.piiGeoStates || {}).forEach(state => {
    if (!state || !Array.isArray(state.canvasFields)) return;
    state.canvasFields.forEach(field => {
      if (field.sectionId === sectionId) {
        delete field.sectionId;
        delete field.sectionLabel;
      }
    });
    if (Array.isArray(state.canvasSectionOrder)) {
      state.canvasSectionOrder = state.canvasSectionOrder.filter(id => id !== sectionId);
    }
  });
  const next = active.piiSections.sections[0];
  active.piiSections.activeSectionId = next ? next.id : null;
  addAuditLog(active, "PII Section Removed", section.name, {
    eventType: "field",
    actorRole: "client",
    actorName: active.name || "Client",
    pageKey: "pii"
  });
  saveClients();
  renderWorkspace();
}

function deepCopy(value) {
  return JSON.parse(JSON.stringify(value));
}

function copyRequisitionFieldsBetweenDepartments(sourceDepartmentId, targetDepartmentId, options = {}) {
  if (!canEditWorkspace()) return;
  const active = getActiveClient();
  if (!active || !sourceDepartmentId || !targetDepartmentId) return;
  if (sourceDepartmentId === targetDepartmentId) {
    window.alert("Choose a different source department.");
    return;
  }
  const sourceState = getRequisitionDepartmentPageState(active, sourceDepartmentId);
  const targetState = getRequisitionDepartmentPageState(active, targetDepartmentId);
  if (!sourceState || !targetState) return;
  const sourceName = (active.departmentStructure?.departments || []).find(item => item.id === sourceDepartmentId)?.name || "Source";
  const targetName = (active.departmentStructure?.departments || []).find(item => item.id === targetDepartmentId)?.name || "Target";
  if (!options.skipConfirm) {
    const ok = window.confirm(`Copy requisition fields from "${sourceName}" to "${targetName}"?`);
    if (!ok) return;
  }

  targetState.fieldCatalog = deepCopy(sourceState.fieldCatalog || []);
  targetState.availableIds = new Set(Array.from(sourceState.availableIds || []));
  targetState.canvasFields = deepCopy(sourceState.canvasFields || []);
  targetState.dependencyRules = deepCopy(sourceState.dependencyRules || []);
  targetState.submittedCanvasFields = [];
  targetState.submittedAt = null;
  addAuditLog(active, "Requisition Fields Copied", `${sourceName} -> ${targetName}`, {
    eventType: "department",
    actorRole: "client",
    actorName: active.name || "Client",
    pageKey: "requisition"
  });
  saveClients();
  clearSQL();
  renderWorkspace();
}

function copyRequisitionApprovalBetweenDepartments(sourceDepartmentId, targetDepartmentId, options = {}) {
  if (!canEditWorkspace()) return;
  const active = getActiveClient();
  if (!active || !sourceDepartmentId || !targetDepartmentId) return;
  if (sourceDepartmentId === targetDepartmentId) {
    window.alert("Choose a different source department.");
    return;
  }
  ensureRequisitionApprovalByDepartment(active);
  const sourceRows = Array.isArray(active.requisitionApprovalByDepartment[sourceDepartmentId])
    ? active.requisitionApprovalByDepartment[sourceDepartmentId]
    : [];
  const sourceName = (active.departmentStructure?.departments || []).find(item => item.id === sourceDepartmentId)?.name || "Source";
  const targetName = (active.departmentStructure?.departments || []).find(item => item.id === targetDepartmentId)?.name || "Target";
  if (!options.skipConfirm) {
    const ok = window.confirm(`Copy approval matrix from "${sourceName}" to "${targetName}"?`);
    if (!ok) return;
  }

  active.requisitionApprovalByDepartment[targetDepartmentId] = sourceRows.length
    ? deepCopy(sourceRows).map((row, idx) => ({
      id: row?.id || `ra_${Date.now()}_${targetDepartmentId}_${idx}`,
      level: row?.level || "",
      approver: row?.approver || "",
      condition: row?.condition || "",
      delegateTo: row?.delegateTo || ""
    }))
    : createDefaultRequisitionApprovalMatrix();

  addAuditLog(active, "Requisition Approval Copied", `${sourceName} -> ${targetName}`, {
    eventType: "department",
    actorRole: "client",
    actorName: active.name || "Client",
    pageKey: "requisition"
  });
  saveClients();
  renderWorkspace();
}

function copyOfferApprovalBetweenDepartments(sourceDepartmentId, targetDepartmentId, options = {}) {
  if (!canEditWorkspace()) return;
  const active = getActiveClient();
  if (!active || !sourceDepartmentId || !targetDepartmentId) return;
  if (sourceDepartmentId === targetDepartmentId) {
    window.alert("Choose a different source department.");
    return;
  }
  ensureOfferApprovalByDepartment(active);
  const sourceRows = Array.isArray(active.offerApprovalByDepartment[sourceDepartmentId])
    ? active.offerApprovalByDepartment[sourceDepartmentId]
    : [];
  const sourceName = (active.departmentStructure?.departments || []).find(item => item.id === sourceDepartmentId)?.name || "Source";
  const targetName = (active.departmentStructure?.departments || []).find(item => item.id === targetDepartmentId)?.name || "Target";
  if (!options.skipConfirm) {
    const ok = window.confirm(`Copy offer approval matrix from "${sourceName}" to "${targetName}"?`);
    if (!ok) return;
  }

  active.offerApprovalByDepartment[targetDepartmentId] = sourceRows.length
    ? deepCopy(sourceRows).map((row, idx) => ({
      id: row?.id || `oa_${Date.now()}_${targetDepartmentId}_${idx}`,
      level: row?.level || "",
      approver: row?.approver || "",
      condition: row?.condition || "",
      delegateTo: row?.delegateTo || ""
    }))
    : createDefaultOfferApprovalMatrix();

  addAuditLog(active, "Offer Approval Copied", `${sourceName} -> ${targetName}`, {
    eventType: "department",
    actorRole: "client",
    actorName: active.name || "Client",
    pageKey: "offer"
  });
  saveClients();
  renderWorkspace();
}

function renderClientList() {
  if (!clientList) return;
  clientList.innerHTML = "";

  const visibleClients = getVisibleClientsForCurrentRole();

  if (!visibleClients.length) {
    const msg = document.createElement("p");
    msg.className = "empty-state";
    msg.textContent = "No clients added yet.";
    clientList.appendChild(msg);
  }

  visibleClients.forEach(client => {
    if (typeof client.expanded !== "boolean") client.expanded = false;
    const card = document.createElement("div");
    card.className = `client-item ${client.id === activeClientId ? "active" : ""}`;

    const requisitionPage = getPageState(client, "requisition");
    const piiPage = getPageState(client, "pii");
    const applyPage = getPageState(client, "apply");
    const submittedLabel = getRequisitionSubmittedLabel(client);
    const accessClass = client.accessDisabled ? "is-disabled" : "is-enabled";
    const accessLabel = client.accessDisabled ? "Disabled" : "Enabled";
    const clientInitial = String(client.name || "C").trim().charAt(0).toUpperCase() || "C";
    const integrations = Array.isArray(client.integrations) ? client.integrations : [];
    const integrationPreview = integrations.slice(0, 3).map(item => {
      const type = escapeHtml(item?.type || "Integration");
      const vendor = escapeHtml(item?.vendor || "NA");
      return `<span class="integration-chip"><strong>${type}</strong> <em>${vendor}</em></span>`;
    }).join("");
    const integrationMoreCount = Math.max(0, integrations.length - 3);
    const safeClientName = escapeHtml(client.name || "Client");
    const safeLoginEmail = escapeHtml(client.loginEmail || "NA");

    const canManage = canManageClientRecord(client);
    const managerOrAdminKebabMenu = canManage ? `
      <div class="client-kebab-wrap">
        <button class="client-kebab-btn" type="button" data-action="kebab-toggle" aria-label="Client options" title="More options">⋮</button>
        <div class="client-kebab-menu hidden" data-role="kebab-menu">
          <button type="button" data-menu-action="edit">Edit Client</button>
          ${isAdmin() ? '<button type="button" data-menu-action="reset-password">Reset Password</button>' : ""}
          ${isAdmin() ? `<button type="button" data-menu-action="toggle-access">${client.accessDisabled ? "Enable Access" : "Disable Access"}</button>` : ""}
          ${isAdmin() ? '<button type="button" data-menu-action="remove" class="danger">Remove Client</button>' : ""}
        </div>
      </div>
    ` : "";

    card.innerHTML = `
      <div class="client-item-head">
        <div class="client-title-wrap client-title-wrap-modern">
          <div class="client-name-row">
            <span class="client-avatar">${clientInitial}</span>
            <div class="client-name-stack">
              <strong>${safeClientName}</strong>
            </div>
            <span class="client-status-badge ${accessClass}">
              <span class="client-status-dot ${accessClass}"></span>
              ${accessLabel}
            </span>
          </div>
        </div>
        <div class="client-item-actions">
          ${managerOrAdminKebabMenu}
          <button class="client-open-btn" type="button" data-action="open">Open</button>
          <button class="client-drill-btn ${client.expanded ? "open" : ""}" type="button" aria-label="Toggle client details" title="Toggle details">▾</button>
        </div>
      </div>
      <div class="client-card-details ${client.expanded ? "expanded" : "collapsed"}">
        <div class="client-overview-grid">
          <div class="client-overview-item">
            <span>Client User ID</span>
            <strong>${safeLoginEmail}</strong>
          </div>
          <div class="client-overview-item">
            <span>Access</span>
            <strong>${accessLabel}</strong>
          </div>
          <div class="client-overview-item">
            <span>Integrations</span>
            <strong>${integrations.length}</strong>
          </div>
        </div>
        <div class="client-submission-grid">
          <div class="client-submission-card">
            <span>Requisition</span>
            <strong>${escapeHtml(submittedLabel)}</strong>
          </div>
          <div class="client-submission-card">
            <span>PII</span>
            <strong>${escapeHtml(piiPage?.submittedAt || "Not Submitted")}</strong>
          </div>
          <div class="client-submission-card">
            <span>Apply</span>
            <strong>${escapeHtml(applyPage?.submittedAt || "Not Submitted")}</strong>
          </div>
        </div>
        <div class="client-integration-preview">
          ${integrationPreview || '<span class="integration-chip integration-empty">No integrations</span>'}
          ${integrationMoreCount ? `<span class="integration-chip integration-more">+${integrationMoreCount} more</span>` : ""}
        </div>
        <div class="client-detail-actions">
          <button class="client-toggle-btn" type="button" data-action="view">View</button>
          ${isAdmin() ? '<button class="client-toggle-btn" type="button" data-action="reset-client-password">Reset Password</button>' : ""}
          ${isAdmin() ? `<button class="client-toggle-btn" type="button" data-access-toggle="1">${client.accessDisabled ? "Enable Access" : "Disable Access"}</button>` : ""}
          ${isAdmin() ? '<button class="remove-field-btn" type="button">Remove</button>' : ""}
        </div>
      </div>
    `;

    const drillBtn = card.querySelector(".client-drill-btn");
    const openBtn = card.querySelector('[data-action="open"]');
    const kebabToggleBtn = card.querySelector('[data-action="kebab-toggle"]');
    const kebabMenu = card.querySelector('[data-role="kebab-menu"]');
    const viewBtn = card.querySelector('[data-action="view"]');
    const resetPasswordBtn = card.querySelector('[data-action="reset-client-password"]');
    const accessBtn = card.querySelector('[data-access-toggle="1"]');
    const removeBtn = card.querySelector(".remove-field-btn");

    if (drillBtn) {
      drillBtn.addEventListener("click", () => {
        client.expanded = !client.expanded;
        renderClientList();
      });
    }

    if (openBtn) {
      openBtn.addEventListener("click", () => {
        activeClientId = client.id;
        persistSession();
        renderAll();
      });
    }

    if (kebabToggleBtn && kebabMenu && canManage) {
      kebabToggleBtn.addEventListener("click", event => {
        event.stopPropagation();
        const isHidden = kebabMenu.classList.contains("hidden");
        document.querySelectorAll(".client-kebab-menu").forEach(menu => menu.classList.add("hidden"));
        kebabMenu.classList.toggle("hidden", !isHidden);
      });
    }

    if (kebabMenu && canManage) {
      kebabMenu.addEventListener("click", event => {
        const actionBtn = event.target.closest("[data-menu-action]");
        if (!actionBtn) return;
        const action = actionBtn.dataset.menuAction;
        kebabMenu.classList.add("hidden");

        if (action === "edit") {
          openEditClientModal(client);
          return;
        }

        if (action === "reset-password") {
          if (!isAdmin()) return;
          const ok = window.confirm(`Reset password for "${client.name}"? Client will be asked to set a new password on next login.`);
          if (!ok) return;
          client.loginPassword = "";
          client.forcePasswordReset = true;
          addAuditLog(client, "Client Password Reset By Admin", client.loginEmail || client.name || "Client", {
            eventType: "field",
            actorRole: "admin",
            actorName: "Admin",
            pageKey: "requisition"
          });
          saveClients();
          renderClientList();
          return;
        }

        if (action === "toggle-access") {
          if (!isAdmin()) return;
          client.accessDisabled = !client.accessDisabled;
          addAuditLog(client, "Client Access Updated", client.accessDisabled ? "Access Disabled" : "Access Enabled", {
            eventType: "field",
            actorRole: "admin",
            actorName: "Admin",
            pageKey: "requisition"
          });
          saveClients();
          renderClientList();
          return;
        }

        if (action === "remove") {
          if (!isAdmin()) return;
          const ok = window.confirm(`Remove client "${client.name}"?`);
          if (!ok) return;
          openDeleteClientAuthModal(client.id);
        }
      });
    }

    if (viewBtn) {
      viewBtn.addEventListener("click", () => {
        openClientDetailModal(client);
      });
    }

    if (resetPasswordBtn && isAdmin()) {
      resetPasswordBtn.addEventListener("click", () => {
        const ok = window.confirm(`Reset password for "${client.name}"? Client will be asked to set a new password on next login.`);
        if (!ok) return;
        client.loginPassword = "";
        client.forcePasswordReset = true;
        addAuditLog(client, "Client Password Reset By Admin", client.loginEmail || client.name || "Client", {
          eventType: "field",
          actorRole: "admin",
          actorName: "Admin",
          pageKey: "requisition"
        });
        saveClients();
        renderClientList();
      });
    }

    if (accessBtn && isAdmin()) {
      accessBtn.addEventListener("click", () => {
        client.accessDisabled = !client.accessDisabled;
        addAuditLog(client, "Client Access Updated", client.accessDisabled ? "Access Disabled" : "Access Enabled", {
          eventType: "field",
          actorRole: "admin",
          actorName: "Admin",
          pageKey: "requisition"
        });
        saveClients();
        renderClientList();
      });
    }

    if (removeBtn && isAdmin()) {
      removeBtn.addEventListener("click", () => {
        const ok = window.confirm(`Remove client "${client.name}"?`);
        if (!ok) return;
        openDeleteClientAuthModal(client.id);
      });
    }

    clientList.appendChild(card);
  });

  if (clientCount) clientCount.textContent = String(visibleClients.length);
}

function normalizeFieldId(rawId, label, fieldCatalog) {
  const seed = (rawId || label || "custom_field")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");

  let id = seed || "custom_field";
  let suffix = 1;
  while (fieldCatalog.some(field => field.id === id)) {
    id = `${seed || "custom_field"}_${suffix++}`;
  }
  return id;
}

function createBlankDependencyRule(seedFields = []) {
  const source = seedFields[0]?.id || "";
  const fallbackTarget = seedFields.find(field => field.id && field.id !== source)?.id || "";
  return {
    id: `dr_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
    sourceFieldId: source,
    operator: "equals",
    value: "",
    targetFieldId: fallbackTarget,
    action: "show"
  };
}

function getDependencyRuleFieldOptions(pageState) {
  if (!pageState || !Array.isArray(pageState.canvasFields)) return [];
  return pageState.canvasFields
    .map(field => ({ id: String(field?.id || "").trim(), label: String(field?.label || "").trim() }))
    .filter(field => field.id);
}

function buildDependencyFieldOptionsHtml(fields, selectedId, placeholderText = "Select field") {
  const selected = String(selectedId || "").trim();
  const hasSelected = selected && fields.some(field => field.id === selected);
  const options = [`<option value="">${escapeHtml(placeholderText)}</option>`];
  fields.forEach(field => {
    options.push(`<option value="${escapeHtml(field.id)}" ${field.id === selected ? "selected" : ""}>${escapeHtml(field.label || field.id)}</option>`);
  });
  if (selected && !hasSelected) {
    options.push(`<option value="${escapeHtml(selected)}" selected>[Missing] ${escapeHtml(selected)}</option>`);
  }
  return options.join("");
}

function addDependencyRuleForActivePage() {
  if (!canEditWorkspace()) return;
  const active = getActiveClient();
  const pageState = getPageState(active);
  if (!active || !pageState) return;
  if (!Array.isArray(pageState.dependencyRules)) pageState.dependencyRules = [];
  const fields = getDependencyRuleFieldOptions(pageState);
  pageState.dependencyRules.push(createBlankDependencyRule(fields));
  saveClients();
  renderDependencyRuleBuilder();
  renderPreviewForm();
}

function updateDependencyRuleForActivePage(ruleId, key, value) {
  if (!canEditWorkspace()) return;
  const active = getActiveClient();
  const pageState = getPageState(active);
  if (!active || !pageState || !Array.isArray(pageState.dependencyRules)) return;
  const target = pageState.dependencyRules.find(rule => rule.id === ruleId);
  if (!target) return;
  if (!["sourceFieldId", "operator", "value", "targetFieldId", "action"].includes(key)) return;
  target[key] = String(value || "");
  saveClients();
  renderPreviewForm();
}

function removeDependencyRuleForActivePage(ruleId) {
  if (!canEditWorkspace()) return;
  const active = getActiveClient();
  const pageState = getPageState(active);
  if (!active || !pageState || !Array.isArray(pageState.dependencyRules)) return;
  pageState.dependencyRules = pageState.dependencyRules.filter(rule => rule.id !== ruleId);
  saveClients();
  renderDependencyRuleBuilder();
  renderPreviewForm();
}

function renderDependencyRuleBuilder() {
  if (!dependencyRulePanel || !dependencyRuleBody || !addDependencyRuleBtn) return;
  const active = getActiveClient();
  const pageState = getPageState(active);
  const showPanel = Boolean(active && pageState && canEditWorkspace());
  dependencyRulePanel.classList.toggle("hidden", !showPanel);
  if (!showPanel) return;

  if (!Array.isArray(pageState.dependencyRules)) pageState.dependencyRules = [];
  const canEdit = canEditWorkspace();
  const fields = getDependencyRuleFieldOptions(pageState);
  addDependencyRuleBtn.disabled = !canEdit || fields.length < 2;
  dependencyRuleBody.innerHTML = "";

  if (!pageState.dependencyRules.length) {
    dependencyRuleBody.innerHTML = '<tr><td colspan="6" class="empty-state">No dependency rules added.</td></tr>';
    return;
  }

  pageState.dependencyRules.forEach(rule => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>
        <select data-dep-rule-id="${escapeHtml(rule.id)}" data-dep-key="sourceFieldId" ${canEdit ? "" : "disabled"}>
          ${buildDependencyFieldOptionsHtml(fields, rule.sourceFieldId, "Select source")}
        </select>
      </td>
      <td>
        <select data-dep-rule-id="${escapeHtml(rule.id)}" data-dep-key="operator" ${canEdit ? "" : "disabled"}>
          <option value="equals" ${rule.operator === "equals" ? "selected" : ""}>Equals</option>
          <option value="not_equals" ${rule.operator === "not_equals" ? "selected" : ""}>Not Equals</option>
          <option value="contains" ${rule.operator === "contains" ? "selected" : ""}>Contains</option>
          <option value="not_contains" ${rule.operator === "not_contains" ? "selected" : ""}>Not Contains</option>
        </select>
      </td>
      <td>
        <input data-dep-rule-id="${escapeHtml(rule.id)}" data-dep-key="value" type="text" value="${escapeHtml(rule.value || "")}" placeholder="Condition value" ${canEdit ? "" : "disabled"}>
      </td>
      <td>
        <select data-dep-rule-id="${escapeHtml(rule.id)}" data-dep-key="targetFieldId" ${canEdit ? "" : "disabled"}>
          ${buildDependencyFieldOptionsHtml(fields, rule.targetFieldId, "Select target")}
        </select>
      </td>
      <td>
        <select data-dep-rule-id="${escapeHtml(rule.id)}" data-dep-key="action" ${canEdit ? "" : "disabled"}>
          <option value="show" ${rule.action === "show" ? "selected" : ""}>Show</option>
          <option value="hide" ${rule.action === "hide" ? "selected" : ""}>Hide</option>
          <option value="require" ${rule.action === "require" ? "selected" : ""}>Require</option>
          <option value="optional" ${rule.action === "optional" ? "selected" : ""}>Optional</option>
        </select>
      </td>
      <td>
        ${canEdit
    ? `<button class="ta-action-btn ta-action-btn-remove" type="button" data-dep-action="remove" data-dep-rule-id="${escapeHtml(rule.id)}">-</button>`
    : '<span class="ta-readonly-tag">Read only</span>'}
      </td>
    `;
    dependencyRuleBody.appendChild(tr);
  });
}

function normalizeDependencyValue(value) {
  return String(value ?? "").trim().toLowerCase();
}

function evaluateDependencyRule(rule, sourceValue) {
  const op = String(rule?.operator || "equals");
  const left = normalizeDependencyValue(sourceValue);
  const right = normalizeDependencyValue(rule?.value || "");
  if (op === "equals") return left === right;
  if (op === "not_equals") return left !== right;
  if (op === "contains") return right ? left.includes(right) : false;
  if (op === "not_contains") return right ? !left.includes(right) : true;
  return false;
}

function applyPreviewDependencyRules(pageState, fieldUiMap) {
  if (!pageState || !(fieldUiMap instanceof Map) || !fieldUiMap.size) return;
  const rules = Array.isArray(pageState.dependencyRules) ? pageState.dependencyRules : [];
  const stateByField = new Map();

  fieldUiMap.forEach((ui, fieldId) => {
    stateByField.set(fieldId, {
      visible: true,
      required: Boolean(ui.baseRequired)
    });
  });

  rules.forEach(rule => {
    const sourceId = String(rule?.sourceFieldId || "").trim();
    const targetId = String(rule?.targetFieldId || "").trim();
    const action = String(rule?.action || "").trim();
    if (!sourceId || !targetId || !action) return;
    const source = fieldUiMap.get(sourceId);
    const targetState = stateByField.get(targetId);
    if (!source || !targetState) return;
    const match = evaluateDependencyRule(rule, source.input?.value || "");

    if (action === "show") {
      targetState.visible = match;
    } else if (action === "hide") {
      targetState.visible = !match;
    } else if (action === "require") {
      if (match) targetState.required = true;
    } else if (action === "optional") {
      if (match) targetState.required = false;
    }
  });

  fieldUiMap.forEach((ui, fieldId) => {
    const next = stateByField.get(fieldId) || { visible: true, required: Boolean(ui.baseRequired) };
    ui.group.classList.toggle("hidden", !next.visible);
    ui.input.required = Boolean(next.required && next.visible);
  });
}

function sanitizeFieldIdSeed(rawId, labelSeed = "custom_field") {
  const seed = (rawId || labelSeed || "custom_field")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
  return seed || "custom_field";
}

function normalizeImportHeader(header) {
  return String(header || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
}

function getImportValue(row, aliases = []) {
  if (!row || typeof row !== "object") return "";
  for (const alias of aliases) {
    const key = normalizeImportHeader(alias);
    const val = row[key];
    if (val !== undefined && val !== null && String(val).trim() !== "") return String(val).trim();
  }
  return "";
}

function parseBooleanLike(value, fallback = false) {
  const text = String(value || "").trim().toLowerCase();
  if (!text) return fallback;
  if (["1", "y", "yes", "true", "required", "mandatory"].includes(text)) return true;
  if (["0", "n", "no", "false", "optional"].includes(text)) return false;
  return fallback;
}

function normalizeImportedFieldType(rawType = "") {
  const value = String(rawType || "").trim().toLowerCase().replace(/[^a-z0-9]+/g, "_");
  if (!value) return "text";
  if (["dropdown", "select", "picklist"].includes(value)) return "dropdown";
  if (["textarea", "long_text", "multiline", "multi_line"].includes(value)) return "textarea";
  if (["number", "numeric", "int", "integer", "float", "decimal"].includes(value)) return "number";
  if (["email", "mail"].includes(value)) return "email";
  if (["tel", "phone", "mobile", "contact"].includes(value)) return "tel";
  if (["url", "link", "website"].includes(value)) return "url";
  if (["file", "upload", "attachment"].includes(value)) return "file";
  if (["date", "dob"].includes(value)) return "date";
  if (["time"].includes(value)) return "time";
  if (["datetime", "datetime_local", "date_time"].includes(value)) return "datetime-local";
  return normalizeFieldType(value);
}

function parseImportedOptions(rawOptions = "") {
  const text = String(rawOptions || "").trim();
  if (!text) return [];
  return text
    .split(/[;,|]/)
    .map(item => item.trim())
    .filter(Boolean);
}

async function parseImportedFieldRows(file) {
  const fileName = String(file?.name || "").toLowerCase();
  const isCsv = (file.type && file.type.includes("csv")) || fileName.endsWith(".csv");
  let headerRow = [];
  let rows = [];

  if (isCsv) {
    const parsed = parseCsvText(await file.text());
    headerRow = parsed.headers || [];
    rows = parsed.rows || [];
  } else {
    if (typeof XLSX === "undefined") throw new Error("xlsx_lib_missing");
    const buffer = await file.arrayBuffer();
    const workbook = XLSX.read(buffer, { type: "array" });
    const firstSheet = workbook.SheetNames && workbook.SheetNames.length ? workbook.SheetNames[0] : null;
    if (!firstSheet) return [];
    const sheet = workbook.Sheets[firstSheet];
    const matrix = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: "" });
    if (!Array.isArray(matrix) || !matrix.length) return [];
    headerRow = matrix[0] || [];
    rows = matrix.slice(1);
  }

  const normalizedHeaders = (headerRow || []).map(normalizeImportHeader);
  return (rows || [])
    .map(row => {
      const obj = {};
      normalizedHeaders.forEach((header, index) => {
        if (!header) return;
        obj[header] = String((row || [])[index] ?? "").trim();
      });
      return obj;
    })
    .filter(row => Object.values(row).some(Boolean));
}

function resolvePiiImportSection(active, pageState, rawSectionName = "") {
  ensurePiiSections(active);
  const source = String(rawSectionName || "").trim();
  if (!source) {
    const activeSection = getActivePiiSection(active);
    return activeSection ? { id: activeSection.id, name: activeSection.name } : null;
  }

  const sections = Array.isArray(active.piiSections?.sections) ? active.piiSections.sections : [];
  const normalized = source.toLowerCase();
  const existing = sections.find(section =>
    String(section.id || "").toLowerCase() === normalized || String(section.name || "").toLowerCase() === normalized
  );
  if (existing) return { id: existing.id, name: existing.name };

  const newSection = {
    id: `pii_s_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
    name: source
  };
  active.piiSections.sections.push(newSection);
  if (!active.piiSections.activeSectionId) active.piiSections.activeSectionId = newSection.id;
  if (!Array.isArray(pageState.canvasSectionOrder)) pageState.canvasSectionOrder = [];
  if (!pageState.canvasSectionOrder.includes(newSection.id)) pageState.canvasSectionOrder.push(newSection.id);
  return { id: newSection.id, name: newSection.name };
}

function resolveOfferImportSection(rawSection = "") {
  const source = String(rawSection || "").trim();
  if (!source) return { id: "offer_details", name: OFFER_SECTION_LABELS.offer_details };
  const normalized = source.toLowerCase();
  if (OFFER_SECTION_LABELS[source]) {
    return { id: source, name: OFFER_SECTION_LABELS[source] };
  }
  const byLabel = Object.entries(OFFER_SECTION_LABELS).find(([, label]) => String(label || "").toLowerCase() === normalized);
  if (byLabel) return { id: byLabel[0], name: byLabel[1] };
  if (normalized.includes("candidate")) return { id: "candidate_details", name: OFFER_SECTION_LABELS.candidate_details };
  if (normalized.includes("position")) return { id: "position_details", name: OFFER_SECTION_LABELS.position_details };
  return { id: "offer_details", name: OFFER_SECTION_LABELS.offer_details };
}

async function importFieldsForActivePage(file) {
  if (!canEditWorkspace()) return;
  const active = getActiveClient();
  const pageState = getPageState(active);
  if (!active || !pageState || !file) return;

  const importedRows = await parseImportedFieldRows(file);
  if (!importedRows.length) {
    window.alert("No import rows found in selected file.");
    return;
  }

  const workingPageKey = getWorkingFormPageKey();
  const pageKey = getActivePageKey();
  const skipped = [];
  let imported = 0;
  let importedToCanvas = 0;

  importedRows.forEach((row, rowIndex) => {
    const label = getImportValue(row, ["field_label", "label", "field_name", "name", "title"]);
    if (!label) {
      skipped.push(`Row ${rowIndex + 2}: missing label`);
      return;
    }

    const rawId = getImportValue(row, ["field_id", "id", "field_key", "key"]);
    const rawType = getImportValue(row, ["field_type", "type", "data_type", "datatype"]);
    const rawRequired = getImportValue(row, ["required", "mandatory", "is_mandatory"]);
    const rawOptions = getImportValue(row, ["options", "field_options", "dropdown_options", "values"]);
    const rawAddToCanvas = getImportValue(row, ["add_to_canvas", "in_canvas", "canvas", "add_to_form"]);
    const rawSection = getImportValue(row, ["section", "section_name", "offer_section", "pii_section"]);

    const idSeed = sanitizeFieldIdSeed(rawId, label);
    if (rawId && pageState.fieldCatalog.some(field => field.id === idSeed)) {
      skipped.push(`Row ${rowIndex + 2}: duplicate id "${idSeed}"`);
      return;
    }

    const id = normalizeFieldId(rawId, label, pageState.fieldCatalog);
    const type = normalizeImportedFieldType(rawType);
    const options = type === "dropdown" ? parseImportedOptions(rawOptions) : [];
    const required = parseBooleanLike(rawRequired, false);
    const addToCanvas = parseBooleanLike(rawAddToCanvas, true);

    const newField = {
      id,
      label,
      mandatory: required,
      isCustom: true
    };

    if (workingPageKey === "offer") {
      const section = resolveOfferImportSection(rawSection);
      newField.sectionId = section.id;
      newField.sectionLabel = section.name;
    }

    pageState.fieldCatalog.push(newField);
    pageState.availableIds.add(id);

    if (addToCanvas) {
      const canvasField = {
        ...newField,
        type,
        options,
        validation: {
          required,
          minLength: null,
          maxLength: null,
          minNumber: null,
          maxNumber: null,
          pattern: null,
          errorMessage: null
        }
      };

      if (pageKey === "pii") {
        const piiSection = resolvePiiImportSection(active, pageState, rawSection);
        if (piiSection) {
          canvasField.sectionId = piiSection.id;
          canvasField.sectionLabel = piiSection.name;
          if (!Array.isArray(pageState.canvasSectionOrder)) pageState.canvasSectionOrder = [];
          if (!pageState.canvasSectionOrder.includes(piiSection.id)) {
            pageState.canvasSectionOrder.push(piiSection.id);
          }
        }
      }

      if (workingPageKey === "offer") {
        const meta = getOfferFieldSectionMeta(canvasField);
        canvasField.sectionId = meta.sectionId;
        canvasField.sectionLabel = meta.sectionLabel;
      }

      pageState.canvasFields.push(canvasField);
      pageState.availableIds.delete(id);
      importedToCanvas += 1;
    }

    imported += 1;
  });

  if (!imported) {
    window.alert(`No fields imported.\n${skipped.slice(0, 5).join("\n") || "Please check input file format."}`);
    return;
  }

  if (workingPageKey === "apply") {
    ensureApplySourceStates(active);
    syncApplySourceAvailability(active);
  }
  if (workingPageKey === "offer") {
    applyOfferSectionMetadata(pageState);
  }

  autoSaveCanvasSubmission(active, pageState);
  addAuditLog(active, "Fields Imported", `${imported} imported | ${importedToCanvas} added to canvas`, {
    eventType: "field",
    actorRole: currentRole || "client",
    actorName: active.name || "Client",
    pageKey: getActivePageKey()
  });
  saveClients();
  clearSQL();
  renderWorkspace();
  renderPreviewForm();

  const skipSummary = skipped.length ? `\nSkipped: ${skipped.length}` : "";
  window.alert(`Imported ${imported} field(s). Added to canvas: ${importedToCanvas}.${skipSummary}`);
}

function renderPalette() {
  const active = getActiveClient();
  const pageState = getPageState(active);
  if (!active || !palette) return;

  palette.innerHTML = "";
  if (!pageState) return;
  const available = pageState.fieldCatalog.filter(field => pageState.availableIds.has(field.id));

  if (!available.length) {
    const msg = document.createElement("p");
    msg.className = "empty-state";
    msg.textContent = "No available fields for this client.";
    palette.appendChild(msg);
  }

  available.forEach(field => {
    const item = document.createElement("div");
    item.className = "field-item";
    item.draggable = true;
    item.dataset.id = field.id;

    item.innerHTML = `
      <div class="field-item-head">
        <div class="field-title-wrap">
          <div class="field-title">${field.label}</div>
          <div class="field-title-sub">${field.id}</div>
        </div>
        ${field.isCustom ? '<button class="remove-field-btn" type="button">Remove</button>' : ""}
      </div>
      <div class="field-meta">
        <span class="badge ${field.mandatory ? "required" : "optional"}">${field.mandatory ? "Mandatory" : "Optional"}</span>
        <span class="badge type">${field.isCustom ? "Custom" : "Base"}</span>
      </div>
    `;

    item.addEventListener("dragstart", event => {
      event.dataTransfer.effectAllowed = "copy";
      event.dataTransfer.setData("id", field.id);
    });

    const removeBtn = item.querySelector(".remove-field-btn");
    if (removeBtn) {
      removeBtn.addEventListener("click", event => {
        event.stopPropagation();
        addAuditLog(active, "Field Removed From Palette", field.label, {
          eventType: "field",
          actorRole: currentRole || "client",
          actorName: active.name || "Client",
          pageKey: getActivePageKey()
        });
        pageState.fieldCatalog = pageState.fieldCatalog.filter(f => f.id !== field.id);
        pageState.availableIds.delete(field.id);
        if (Array.isArray(pageState.dependencyRules)) {
          pageState.dependencyRules = pageState.dependencyRules.filter(rule => rule.sourceFieldId !== field.id && rule.targetFieldId !== field.id);
        }
        saveClients();
        renderWorkspace();
      });
    }

    palette.appendChild(item);
  });

  if (paletteCount) paletteCount.textContent = String(available.length);
}

function renderCanvas() {
  const active = getActiveClient();
  const pageState = getPageState(active);
  if (!active || !canvas) return;
  if (!pageState) return;

  canvas.innerHTML = "";
  const visibleFields = getVisibleCanvasFields(active);
  const isPiiPage = getActivePageKey() === "pii";
  const isOfferPage = getWorkingFormPageKey() === "offer";

  if (!visibleFields.length) {
    const msg = document.createElement("p");
    msg.className = "empty-state";
    msg.textContent = isAdmin()
      ? "No submitted canvas available for this client yet."
      : "Drop fields here to start building.";
    canvas.appendChild(msg);
  }

  const renderFieldCard = (field, index) => {
    const wrapper = document.createElement("div");
    wrapper.className = "canvas-field";
    wrapper.draggable = canEditWorkspace() && !isPiiPage;
    wrapper.dataset.id = field.id;

    wrapper.innerHTML = `
      <div class="canvas-field-header">
        <div class="canvas-title-wrap">
          <strong>${field.label}</strong>
          <span class="canvas-field-id">${field.id || ""}</span>
        </div>
        <div class="canvas-header-badges">
          <span class="badge type">${field.typeLabel || field.type}</span>
          ${field.validation?.required ? '<span class="badge required">Required</span>' : '<span class="badge optional">Optional</span>'}
        </div>
      </div>
    `;

    wrapper.appendChild(renderCanvasInput(field));

    if (canEditWorkspace()) {
      const actions = document.createElement("div");
      actions.className = "field-actions";

      const del = document.createElement("button");
      del.className = "btn btn-ghost";
      del.type = "button";
      del.textContent = "Delete";
      del.dataset.canvasDeleteIndex = String(index);
      del.draggable = false;
      del.addEventListener("mousedown", event => event.stopPropagation());
      del.addEventListener("touchstart", event => event.stopPropagation(), { passive: true });

      actions.appendChild(del);
      wrapper.appendChild(actions);

      if (!isPiiPage) {
        wrapper.addEventListener("dragstart", event => {
          if (event.target && event.target.closest && event.target.closest("button")) {
            event.preventDefault();
            return;
          }
          event.dataTransfer.setData("moveId", field.id);
          wrapper.classList.add("dragging");
        });

        wrapper.addEventListener("dragend", () => {
          wrapper.classList.remove("dragging");
          syncCounts();
          renderPreviewForm();
          clearSQL();
        });

        wrapper.addEventListener("dragover", event => {
          event.preventDefault();
          const dragging = canvas.querySelector(".canvas-field.dragging");
          if (dragging && dragging !== wrapper && wrapper.parentElement) {
            wrapper.parentElement.insertBefore(dragging, wrapper);
          }
        });
      }
    }

    return wrapper;
  };

  if (isPiiPage) {
    ensurePiiSections(active);
    const sectionMap = new Map((active.piiSections.sections || []).map(section => [section.id, section]));
    const sectionOrder = Array.isArray(pageState.canvasSectionOrder) ? pageState.canvasSectionOrder : [];
    const renderedSectionIds = [];

    sectionOrder.forEach(sectionId => {
      if (!sectionMap.has(sectionId)) return;
      renderedSectionIds.push(sectionId);
      const block = document.createElement("details");
      block.className = "pii-section-block";
      const title = document.createElement("summary");
      title.className = "pii-section-title pii-section-toggle";
      title.textContent = sectionMap.get(sectionId).name;
      block.appendChild(title);
      const body = document.createElement("div");
      body.className = "pii-section-body";

      const scoped = visibleFields
        .map((field, index) => ({ field, index }))
        .filter(item => item.field.sectionId === sectionId);
      if (!scoped.length) {
        const msg = document.createElement("p");
        msg.className = "empty-state";
        msg.textContent = "No fields in this section yet.";
        body.appendChild(msg);
      } else {
        scoped.forEach(item => body.appendChild(renderFieldCard(item.field, item.index)));
      }
      block.appendChild(body);
      canvas.appendChild(block);
    });

    const unsectioned = visibleFields
      .map((field, index) => ({ field, index }))
      .filter(item => !item.field.sectionId || !renderedSectionIds.includes(item.field.sectionId));
    if (unsectioned.length) {
      const block = document.createElement("details");
      block.className = "pii-section-block";
      const title = document.createElement("summary");
      title.className = "pii-section-title pii-section-toggle";
      title.textContent = "Unsectioned Fields";
      block.appendChild(title);
      const body = document.createElement("div");
      body.className = "pii-section-body";
      unsectioned.forEach(item => body.appendChild(renderFieldCard(item.field, item.index)));
      block.appendChild(body);
      canvas.appendChild(block);
    }
  } else if (isOfferPage) {
    const scopedRows = visibleFields.map((field, index) => {
      const meta = getOfferFieldSectionMeta(field);
      return { field: { ...field, ...meta }, index };
    });

    OFFER_SECTION_ORDER.forEach(sectionId => {
      const block = document.createElement("details");
      block.className = "pii-section-block";
      const title = document.createElement("summary");
      title.className = "pii-section-title pii-section-toggle";
      title.textContent = OFFER_SECTION_LABELS[sectionId] || "Offer Details";
      block.appendChild(title);
      const body = document.createElement("div");
      body.className = "pii-section-body";

      const sectionFields = scopedRows.filter(item => item.field.sectionId === sectionId);
      if (!sectionFields.length) {
        const msg = document.createElement("p");
        msg.className = "empty-state";
        msg.textContent = "No fields in this section yet.";
        body.appendChild(msg);
      } else {
        sectionFields.forEach(item => body.appendChild(renderFieldCard(item.field, item.index)));
      }
      block.appendChild(body);
      canvas.appendChild(block);
    });

    const unsectioned = scopedRows.filter(item => !OFFER_SECTION_ORDER.includes(item.field.sectionId));
    if (unsectioned.length) {
      const block = document.createElement("details");
      block.className = "pii-section-block";
      const title = document.createElement("summary");
      title.className = "pii-section-title pii-section-toggle";
      title.textContent = "Additional Fields";
      block.appendChild(title);
      const body = document.createElement("div");
      body.className = "pii-section-body";
      unsectioned.forEach(item => body.appendChild(renderFieldCard(item.field, item.index)));
      block.appendChild(body);
      canvas.appendChild(block);
    }
  } else {
    visibleFields.forEach((field, index) => {
      canvas.appendChild(renderFieldCard(field, index));
    });
  }

  if (canvasCount) canvasCount.textContent = String(visibleFields.length);
}

function removeCanvasFieldByIndex(index) {
  if (!canEditWorkspace()) return;
  const active = getActiveClient();
  const pageState = getPageState(active);
  if (!active || !pageState || !Array.isArray(pageState.canvasFields)) return;
  const idx = Number(index);
  if (!Number.isInteger(idx) || idx < 0 || idx >= pageState.canvasFields.length) return;
  const target = pageState.canvasFields[idx];
  pageState.canvasFields.splice(idx, 1);
  if (target && target.id) {
    const existsInCatalog = Array.isArray(pageState.fieldCatalog) && pageState.fieldCatalog.some(field => field.id === target.id);
    if (!existsInCatalog && Array.isArray(pageState.fieldCatalog)) {
      pageState.fieldCatalog.push({
        id: target.id,
        label: target.label || target.id,
        mandatory: Boolean(target.mandatory),
        isCustom: Boolean(target.isCustom)
      });
    }
    pageState.availableIds.add(target.id);
    if (Array.isArray(pageState.dependencyRules)) {
      pageState.dependencyRules = pageState.dependencyRules.filter(rule => rule.sourceFieldId !== target.id && rule.targetFieldId !== target.id);
    }
  }
  if (getWorkingFormPageKey() === "apply") {
    ensureApplySourceStates(active);
    syncApplySourceAvailability(active);
  }
  addAuditLog(active, "Removed", target?.label || "Field");
  autoSaveCanvasSubmission(active, pageState);
  saveClients();
  clearSQL();
  renderWorkspace();
}

function commitCanvasOrderFromDom() {
  const active = getActiveClient();
  const pageState = getPageState(active);
  if (!active || !canvas) return;
  if (!pageState) return;

  const orderedIds = Array.from(canvas.querySelectorAll(".canvas-field")).map(el => el.dataset.id);
  pageState.canvasFields = orderedIds
    .map(id => pageState.canvasFields.find(item => item.id === id))
    .filter(Boolean);
}

function normalizeFieldType(type) {
  const value = String(type || "text").toLowerCase();
  if (value === "phone") return "tel";
  if (value === "datetime") return "datetime-local";
  return value;
}

function inferFieldTypeForDrop(field) {
  const seed = `${field?.label || ""} ${field?.id || ""}`.toLowerCase();
  if (!seed.trim()) return "text";
  if (/(date|dob|start|end|valid till|expiry|period from|period to|joining|relieving)/.test(seed)) return "date";
  if (/(email|mail id)/.test(seed)) return "email";
  if (/(phone|mobile|contact)/.test(seed)) return "tel";
  if (/(url|link|website|portfolio|linkedin)/.test(seed)) return "url";
  if (/(number|count|qty|positions|salary|ctc|exp|years)/.test(seed)) return "number";
  if (/(description|remarks|responsibilities|address|cover letter)/.test(seed)) return "textarea";
  if (/(upload|resume|document|attachment|file)/.test(seed)) return "file";
  return "text";
}

function renderCanvasInput(field) {
  let input;
  const type = normalizeFieldType(field.type);
  if (type === "textarea") {
    input = document.createElement("textarea");
  } else if (type === "dropdown") {
    input = document.createElement("select");
    (field.options || []).forEach(option => {
      const el = document.createElement("option");
      el.textContent = option;
      input.appendChild(el);
    });
  } else {
    input = document.createElement("input");
    input.type = type || "text";
  }

  input.disabled = true;
  return input;
}

function syncPreviewRequisitionSelectors(client) {
  if (!previewRequisitionFilterBar || !previewDeptSelect || !previewSubDeptSelect || !previewGeoSelect) return null;
  const isRequisition = getWorkingFormPageKey() === "requisition";
  previewRequisitionFilterBar.classList.toggle("hidden", !isRequisition);
  if (!isRequisition || !client) return null;

  ensureRequisitionDepartmentStates(client);
  const departments = Array.isArray(client.departmentStructure?.departments) ? client.departmentStructure.departments : [];
  previewDeptSelect.innerHTML = "";
  if (!departments.length) {
    previewSubDeptSelect.innerHTML = "";
    previewGeoSelect.innerHTML = "";
    previewSubDeptSelect.disabled = true;
    previewGeoSelect.disabled = true;
    return null;
  }

  const activeDeptId = getActiveRequisitionDepartmentId(client);
  const currentDeptValue = String(previewDeptSelect.dataset.selected || previewDeptSelect.value || "").trim();
  const selectedDeptId = departments.some(dept => dept.id === currentDeptValue)
    ? currentDeptValue
    : (departments.some(dept => dept.id === activeDeptId) ? activeDeptId : departments[0].id);

  departments.forEach(dept => {
    const option = document.createElement("option");
    option.value = dept.id;
    option.textContent = dept.name;
    if (dept.id === selectedDeptId) option.selected = true;
    previewDeptSelect.appendChild(option);
  });
  previewDeptSelect.dataset.selected = selectedDeptId;

  const selectedDept = departments.find(dept => dept.id === selectedDeptId) || departments[0];
  const subOptions = [MAIN_SUB_DEPARTMENT_KEY, ...(selectedDept.subDepartments || [])];
  const currentSubValue = String(previewSubDeptSelect.dataset.selected || previewSubDeptSelect.value || "").trim();
  const selectedSub = subOptions.includes(currentSubValue) ? currentSubValue : MAIN_SUB_DEPARTMENT_KEY;
  previewSubDeptSelect.innerHTML = "";
  subOptions.forEach(sub => {
    const option = document.createElement("option");
    option.value = sub;
    option.textContent = sub === MAIN_SUB_DEPARTMENT_KEY ? "Main Department" : sub;
    if (sub === selectedSub) option.selected = true;
    previewSubDeptSelect.appendChild(option);
  });
  previewSubDeptSelect.dataset.selected = selectedSub;
  previewSubDeptSelect.disabled = subOptions.length <= 1;
  const geoOptions = [MAIN_GEO_KEY, ...(selectedDept.geos || [])];
  const currentGeoValue = String(previewGeoSelect.dataset.selected || previewGeoSelect.value || "").trim();
  const selectedGeo = geoOptions.includes(currentGeoValue) ? currentGeoValue : MAIN_GEO_KEY;
  previewGeoSelect.innerHTML = "";
  geoOptions.forEach(geo => {
    const option = document.createElement("option");
    option.value = geo;
    option.textContent = geo === MAIN_GEO_KEY ? "All Geos" : geo;
    if (geo === selectedGeo) option.selected = true;
    previewGeoSelect.appendChild(option);
  });
  previewGeoSelect.dataset.selected = selectedGeo;
  previewGeoSelect.disabled = geoOptions.length <= 1;

  return { departmentId: selectedDeptId, subDepartment: selectedSub, geo: selectedGeo };
}

function renderPreviewForm() {
  const active = getActiveClient();
  if (!previewForm || !active) {
    if (previewContextHint) {
      previewContextHint.textContent = "";
      previewContextHint.classList.add("hidden");
    }
    return;
  }

  previewForm.innerHTML = "";
  const currentPageKey = getWorkingFormPageKey();
  if (previewContextHint) {
    const applyContext = currentPageKey === "apply" ? getActiveApplyContextLabel(active) : "";
    previewContextHint.textContent = applyContext;
    previewContextHint.classList.toggle("hidden", !applyContext);
  }
  const previewGroups = [];
  const fieldUiMap = new Map();
  let previewDependencyState = null;

  if (currentPageKey === "requisition") {
    const selected = syncPreviewRequisitionSelectors(active);
    if (selected && selected.departmentId) {
      const dept = getDepartmentById(active, selected.departmentId);
      const selectedState = getRequisitionDepartmentPageState(active, selected.departmentId, selected.subDepartment, selected.geo);
      previewDependencyState = selectedState || null;
      const selectedFields = canEditWorkspace()
        ? (selectedState?.canvasFields || [])
        : (selectedState?.submittedCanvasFields || []);
      if (selectedFields.length) {
        const parts = [`Department: ${dept?.name || selected.departmentId}`];
        if (selected.subDepartment !== MAIN_SUB_DEPARTMENT_KEY) parts.push(`Sub Department: ${selected.subDepartment}`);
        if (selected.geo !== MAIN_GEO_KEY) parts.push(`Geo: ${selected.geo}`);
        const title = parts.join(" | ");
        previewGroups.push({ title, fields: selectedFields });
      }
    }
  } else {
    if (previewRequisitionFilterBar) previewRequisitionFilterBar.classList.add("hidden");
    previewDependencyState = getPageState(active, currentPageKey);
    const visibleFields = getVisibleCanvasFields(active);
    if (visibleFields.length) {
      if (currentPageKey === "offer") {
        OFFER_SECTION_ORDER.forEach(sectionId => {
          const sectionFields = visibleFields.filter(field => getOfferFieldSectionMeta(field).sectionId === sectionId);
          if (!sectionFields.length) return;
          previewGroups.push({
            title: OFFER_SECTION_LABELS[sectionId] || "Offer Details",
            fields: sectionFields
          });
        });
        const unsectioned = visibleFields.filter(field => !OFFER_SECTION_ORDER.includes(getOfferFieldSectionMeta(field).sectionId));
        if (unsectioned.length) {
          previewGroups.push({ title: "Additional Fields", fields: unsectioned });
        }
      } else {
        previewGroups.push({ title: "", fields: visibleFields });
      }
    }
  }

  if (!previewGroups.length) {
    previewForm.oninput = null;
    previewForm.onchange = null;
    previewForm.onreset = null;
    if (previewFormEmpty) previewForm.appendChild(previewFormEmpty);
    return;
  }

  previewGroups.forEach(groupDef => {
    if (groupDef.title) {
      const heading = document.createElement("div");
      heading.className = "preview-section-title";
      heading.textContent = groupDef.title;
      previewForm.appendChild(heading);
    }

    (groupDef.fields || []).forEach(field => {
      const type = normalizeFieldType(field.type);
      const group = document.createElement("div");
      group.className = `form-group ${type === "textarea" ? "full" : ""}`;
      if (field.id) group.dataset.previewFieldId = field.id;

      const label = document.createElement("label");
      label.textContent = field.label;

      const input = document.createElement(type === "textarea" ? "textarea" : type === "dropdown" ? "select" : "input");
      if (type === "dropdown") {
        const first = document.createElement("option");
        first.value = "";
        first.textContent = "Select";
        input.appendChild(first);
        (field.options || []).forEach(option => {
          const opt = document.createElement("option");
          opt.value = option;
          opt.textContent = option;
          input.appendChild(opt);
        });
      } else if (type !== "textarea") {
        input.type = type;
      }

      group.appendChild(label);
      group.appendChild(input);
      previewForm.appendChild(group);

      if (field.id) {
        fieldUiMap.set(field.id, {
          group,
          input,
          baseRequired: Boolean(field.validation?.required)
        });
      }
    });
  });

  const actions = document.createElement("div");
  actions.className = "form-actions";
  actions.innerHTML = '<button class="btn btn-ghost" type="reset">Reset</button><button class="btn btn-primary" type="submit">Submit</button>';
  previewForm.appendChild(actions);

  const rules = Array.isArray(previewDependencyState?.dependencyRules) ? previewDependencyState.dependencyRules : [];
  if (rules.length && fieldUiMap.size) {
    const applyRules = () => applyPreviewDependencyRules(previewDependencyState, fieldUiMap);
    previewForm.oninput = applyRules;
    previewForm.onchange = applyRules;
    previewForm.onreset = () => window.setTimeout(applyRules, 0);
    applyRules();
  } else {
    previewForm.oninput = null;
    previewForm.onchange = null;
    previewForm.onreset = null;
  }
}

function renderTaChecklist() {
  const active = getActiveClient();
  if (!taChecklistBody) return;
  taChecklistBody.innerHTML = "";
  if (!active) {
    if (taChecklistCount) taChecklistCount.textContent = "0";
    return;
  }
  ensureTaChecklist(active);
  const rows = active.taChecklist || [];
  if (taChecklistCount) taChecklistCount.textContent = String(rows.length);
  const canEdit = canManageClients();

  rows.forEach((row, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${escapeHtml(row.sNo)}</td>
      <td><strong>${escapeHtml(row.requirement)}</strong></td>
      <td>${escapeHtml(row.description)}</td>
      <td>
        <select data-ta-key="status" data-ta-index="${index}" ${canEdit ? "" : "disabled"}>
          ${["Pending", "In Progress", "Completed", "Blocked"].map(opt => `<option value="${opt}" ${row.status === opt ? "selected" : ""}>${opt}</option>`).join("")}
        </select>
      </td>
      <td><input data-ta-key="moduleDiscussionDate" data-ta-index="${index}" type="date" value="${escapeHtml(row.moduleDiscussionDate || "")}" ${canEdit ? "" : "disabled"}></td>
      <td><input data-ta-key="expectedClosureDate" data-ta-index="${index}" type="date" value="${escapeHtml(row.expectedClosureDate || "")}" ${canEdit ? "" : "disabled"}></td>
      <td><input data-ta-key="zwayamRemarks" data-ta-index="${index}" type="text" value="${escapeHtml(row.zwayamRemarks || "")}" placeholder="Add remarks" ${canEdit ? "" : "disabled"}></td>
      <td>
        ${canEdit
    ? `<div class="ta-row-actions">
              <button class="ta-action-btn" type="button" data-ta-action="add" data-ta-index="${index}" aria-label="Add TA checklist row">+</button>
              <button class="ta-action-btn ta-action-btn-remove" type="button" data-ta-action="remove" data-ta-index="${index}" aria-label="Remove TA checklist row">-</button>
            </div>`
    : '<span class="ta-readonly-tag">Read only</span>'}
      </td>
    `;
    taChecklistBody.appendChild(tr);
  });
}

function renderDocumentCollection() {
  const active = getActiveClient();
  if (!preOfferDocList || !postOfferDocList) return;
  preOfferDocList.innerHTML = "";
  postOfferDocList.innerHTML = "";
  if (!active) return;
  ensureDocumentCollection(active);
  const canEdit = canEditWorkspace();
  const geos = Array.isArray(active.departmentStructure?.geos) ? active.departmentStructure.geos : [];
  const activeGeo = getDocumentCollectionActiveGeo(active);
  active.documentCollection.activeGeo = activeGeo;
  const activeBucket = activeGeo ? ensureDocumentCollectionGeoBucket(active, activeGeo) : { preOffer: [], postOffer: [] };

  if (documentCollectionGeoBar) documentCollectionGeoBar.classList.toggle("hidden", false);
  if (documentCollectionGeoSelect) {
    documentCollectionGeoSelect.innerHTML = "";
    if (!geos.length) {
      const option = document.createElement("option");
      option.value = "";
      option.textContent = "No Geo Added";
      documentCollectionGeoSelect.appendChild(option);
      documentCollectionGeoSelect.disabled = true;
    } else {
      geos.forEach(geo => {
        const option = document.createElement("option");
        option.value = geo;
        option.textContent = geo;
        if (geo.toLowerCase() === String(activeGeo || "").toLowerCase()) option.selected = true;
        documentCollectionGeoSelect.appendChild(option);
      });
      documentCollectionGeoSelect.disabled = false;
    }
  }
  if (documentCollectionAddGeoBtn) documentCollectionAddGeoBtn.disabled = !canEdit;

  const disableStageInputs = !canEdit || !activeGeo;
  if (preOfferDocInput) preOfferDocInput.disabled = disableStageInputs;
  if (preOfferDocRemarkInput) preOfferDocRemarkInput.disabled = disableStageInputs;
  if (addPreOfferDocBtn) addPreOfferDocBtn.disabled = disableStageInputs;
  if (postOfferDocInput) postOfferDocInput.disabled = disableStageInputs;
  if (postOfferDocRemarkInput) postOfferDocRemarkInput.disabled = disableStageInputs;
  if (addPostOfferDocBtn) addPostOfferDocBtn.disabled = disableStageInputs;

  const renderStage = (container, docs, stageKey) => {
    if (!docs.length) {
      const empty = document.createElement("p");
      empty.className = "empty-state";
      empty.textContent = "No documents added yet.";
      container.appendChild(empty);
      return;
    }
    docs.forEach((doc, index) => {
      const docName = String(doc?.name || "").trim();
      if (!docName) return;
      const docRemark = String(doc?.remark || "").trim();
      const row = document.createElement("div");
      row.className = "document-item";
      row.innerHTML = `
        <div class="document-item-content">
          <span class="document-item-name">${escapeHtml(docName)}</span>
          ${docRemark ? `<span class="document-item-remark">${escapeHtml(docRemark)}</span>` : ""}
        </div>
        ${canEdit ? `<button class="remove-field-btn" type="button" data-doc-stage="${stageKey}" data-doc-index="${index}">Remove</button>` : '<span class="ta-readonly-tag">Read only</span>'}
      `;
      container.appendChild(row);
    });
  };

  renderStage(preOfferDocList, activeBucket.preOffer, "pre");
  renderStage(postOfferDocList, activeBucket.postOffer, "post");
}

function renderItItemPanel() {
  const active = getActiveClient();
  if (!active) return;
  ensureItItemData(active);

  if (calendarClientId) calendarClientId.value = active.itItemData.calendar.clientId || "";
  if (calendarTenantId) calendarTenantId.value = active.itItemData.calendar.tenantId || "";
  if (akamaiSubDomain) akamaiSubDomain.value = active.itItemData.akamai.subDomain || "";
  if (akamaiTxtRecord) akamaiTxtRecord.value = active.itItemData.akamai.txtRecord || "";
  if (akamaiCnameRecord) akamaiCnameRecord.value = active.itItemData.akamai.cnameRecord || "";

  if (ssoMetadataName) {
    ssoMetadataName.textContent = active.itItemData.sso.metadataFileName || "Metadata (.xml)";
  }
  if (ssoMetadataMeta) {
    ssoMetadataMeta.textContent = active.itItemData.sso.metadataUploadedAt
      ? `Uploaded at ${active.itItemData.sso.metadataUploadedAt}`
      : "No file uploaded";
  }
  if (ssoCertificateName) {
    ssoCertificateName.textContent = active.itItemData.sso.certificateFileName || "Signing Certificate (.cer)";
  }
  if (ssoCertificateMeta) {
    ssoCertificateMeta.textContent = active.itItemData.sso.certificateUploadedAt
      ? `Uploaded at ${active.itItemData.sso.certificateUploadedAt}`
      : "No file uploaded";
  }
}

function renderDataMigrationPanel() {
  const active = getActiveClient();
  if (!active) return;
  ensureDataMigrationData(active);
  if (dataMigrationSource) dataMigrationSource.value = active.dataMigrationData.source || "";
  if (dataMigrationCutoverDate) dataMigrationCutoverDate.value = active.dataMigrationData.cutoverDate || "";
  if (dataMigrationNotes) dataMigrationNotes.value = active.dataMigrationData.notes || "";
  if (dataMigrationTemplateMeta) {
    dataMigrationTemplateMeta.textContent = active.dataMigrationData.templateUploadedAt
      ? `${active.dataMigrationData.templateFileName || "Template"} uploaded at ${active.dataMigrationData.templateUploadedAt}`
      : "No template uploaded";
  }
}

function parseCsvLine(line) {
  const values = [];
  let current = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i += 1) {
    const ch = line[i];
    if (ch === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (ch === "," && !inQuotes) {
      values.push(current.trim());
      current = "";
    } else {
      current += ch;
    }
  }
  values.push(current.trim());
  return values;
}

function parseCsvText(text) {
  const lines = String(text || "").split(/\r?\n/).map(line => line.trimEnd()).filter(line => line.length > 0);
  if (!lines.length) return { headers: [], rows: [] };
  const headers = parseCsvLine(lines[0]);
  const rows = lines.slice(1).map(line => parseCsvLine(line));
  return { headers, rows };
}

function columnIndexToLabel(index) {
  let value = Number(index) + 1;
  let label = "";
  while (value > 0) {
    const rem = (value - 1) % 26;
    label = String.fromCharCode(65 + rem) + label;
    value = Math.floor((value - 1) / 26);
  }
  return label;
}

function normalizeCellAddress(addr) {
  return String(addr || "").replace(/\$/g, "").toUpperCase();
}

function flattenValues(values) {
  const out = [];
  const walk = item => {
    if (Array.isArray(item)) {
      item.forEach(walk);
      return;
    }
    out.push(item);
  };
  walk(values);
  return out;
}

function toNumber(value) {
  if (typeof value === "number") return Number.isFinite(value) ? value : 0;
  const parsed = Number(String(value || "").replace(/,/g, "").trim());
  return Number.isFinite(parsed) ? parsed : 0;
}

function buildFitmentFromCsv(parsed) {
  const headers = Array.isArray(parsed?.headers) ? parsed.headers : [];
  const rows = Array.isArray(parsed?.rows) ? parsed.rows : [];
  const colCount = headers.length || Math.max(0, ...rows.map(row => (Array.isArray(row) ? row.length : 0)));
  const rowCount = rows.length + (headers.length ? 1 : 0);
  const cells = {};
  if (headers.length) {
    headers.forEach((header, col) => {
      const addr = `${columnIndexToLabel(col)}1`;
      cells[addr] = { input: String(header || ""), formula: "", value: String(header || "") };
    });
  }
  rows.forEach((row, rowIndex) => {
    for (let col = 0; col < colCount; col += 1) {
      const addr = `${columnIndexToLabel(col)}${rowIndex + 2}`;
      const input = String((Array.isArray(row) ? row[col] : "") || "");
      cells[addr] = { input, formula: "", value: input };
    }
  });
  return {
    mode: "sheet",
    sheetName: "Sheet1",
    rowCount,
    colCount,
    cells
  };
}

function looksLikeFormulaRhs(rhs) {
  const value = String(rhs || "").trim();
  if (!value) return false;
  if (value.startsWith("'")) return false;
  if (/^[+-]?\d+(?:\.\d+)?$/.test(value)) return false;
  if (/^(TRUE|FALSE)$/i.test(value)) return false;
  return /[A-Z]{1,3}\d+|[A-Z_]+\s*\(|[+\-*/^&]|[<>]=?|=/.test(value);
}

function getWorksheetFormulaMap(worksheet) {
  const formulaMap = {};
  if (typeof XLSX === "undefined" || !XLSX.utils || typeof XLSX.utils.sheet_to_formulae !== "function") {
    return formulaMap;
  }
  let entries = [];
  try {
    entries = XLSX.utils.sheet_to_formulae(worksheet, { xlfn: true }) || [];
  } catch (error) {
    entries = [];
  }
  entries.forEach(item => {
    const text = String(item || "");
    const splitAt = text.indexOf("=");
    if (splitAt <= 0) return;
    const address = normalizeCellAddress(text.slice(0, splitAt));
    const rhs = text.slice(splitAt + 1).trim();
    if (!address || !looksLikeFormulaRhs(rhs)) return;
    formulaMap[address] = `=${rhs}`;
  });
  return formulaMap;
}

function buildFitmentFromWorksheet(worksheet, sheetName) {
  const ref = worksheet && worksheet["!ref"] ? worksheet["!ref"] : "A1:A1";
  const range = XLSX.utils.decode_range(ref);
  const rowCount = Math.max(0, range.e.r - range.s.r + 1);
  const colCount = Math.max(0, range.e.c - range.s.c + 1);
  const cells = {};
  const formulaMap = getWorksheetFormulaMap(worksheet);

  for (let r = range.s.r; r <= range.e.r; r += 1) {
    for (let c = range.s.c; c <= range.e.c; c += 1) {
      const address = XLSX.utils.encode_cell({ r, c });
      const cell = worksheet[address];
      if (!cell) continue;
      const rawFormula = typeof cell.f === "string" ? cell.f.trim() : "";
      const formula = rawFormula ? `=${rawFormula}` : (formulaMap[address] || "");
      const input = formula ? "" : String(cell.v ?? "");
      const value = formula ? (cell.v ?? "") : input;
      cells[address] = { input, formula, value };
    }
  }

  // Ensure formulas discovered by sheet_to_formulae are retained even if raw cell lacks `f`.
  Object.keys(formulaMap).forEach(address => {
    if (!cells[address]) {
      cells[address] = { input: "", formula: formulaMap[address], value: "" };
    } else if (!cells[address].formula) {
      cells[address].formula = formulaMap[address];
    }
  });

  return {
    mode: "sheet",
    sheetName: sheetName || "Sheet1",
    rowCount,
    colCount,
    cells
  };
}

function compileFormulaExpression(formula) {
  let expr = String(formula || "").trim();
  if (expr.startsWith("=")) expr = expr.slice(1);
  expr = expr.replace(/;/g, ",");
  expr = expr.replace(/\^/g, "**");
  expr = expr.replace(/&/g, "+");
  expr = expr.replace(/<>/g, "!=");
  expr = expr.replace(/\bTRUE\b/gi, "true").replace(/\bFALSE\b/gi, "false");
  expr = expr.replace(/(\d+(?:\.\d+)?)%/g, "($1/100)");
  expr = expr.replace(/(\$?[A-Z]+\$?\d+):(\$?[A-Z]+\$?\d+)/g, (_, a, b) => `__range("${normalizeCellAddress(a)}:${normalizeCellAddress(b)}")`);
  expr = expr.replace(/(^|[^A-Z0-9_"])(\$?[A-Z]+\$?\d+)/g, (m, p1, ref) => `${p1}__cell("${normalizeCellAddress(ref)}")`);
  expr = expr.replace(/\bIFERROR\s*\(/gi, "__fn.IFERROR(");
  expr = expr.replace(/\bIF\s*\(/gi, "__fn.IF(");
  expr = expr.replace(/\bAND\s*\(/gi, "__fn.AND(");
  expr = expr.replace(/\bOR\s*\(/gi, "__fn.OR(");
  expr = expr.replace(/\bNOT\s*\(/gi, "__fn.NOT(");
  expr = expr.replace(/\bSUM\s*\(/gi, "__fn.SUM(");
  expr = expr.replace(/\bMIN\s*\(/gi, "__fn.MIN(");
  expr = expr.replace(/\bMAX\s*\(/gi, "__fn.MAX(");
  expr = expr.replace(/\bAVERAGE\s*\(/gi, "__fn.AVERAGE(");
  expr = expr.replace(/\bCOUNT\s*\(/gi, "__fn.COUNT(");
  expr = expr.replace(/\bCOUNTIF\s*\(/gi, "__fn.COUNTIF(");
  expr = expr.replace(/\bSUMIF\s*\(/gi, "__fn.SUMIF(");
  expr = expr.replace(/\bVLOOKUP\s*\(/gi, "__fn.VLOOKUP(");
  expr = expr.replace(/\bIFS\s*\(/gi, "__fn.IFS(");
  expr = expr.replace(/\bROUND\s*\(/gi, "__fn.ROUND(");
  expr = expr.replace(/\bABS\s*\(/gi, "__fn.ABS(");
  expr = expr.replace(/([^<>=!])=([^=])/g, "$1==$2");
  return expr;
}

function normalizeCriterion(criterion, value) {
  const source = String(criterion ?? "").trim();
  if (!source) return toNumber(value) === 0;
  if (/^(>=|<=|<>|>|<|=)/.test(source)) {
    const op = source.match(/^(>=|<=|<>|>|<|=)/)[1];
    const raw = source.slice(op.length).trim();
    const cmpValue = Number.isFinite(Number(raw)) ? Number(raw) : raw.replace(/^"|"$/g, "");
    if (typeof cmpValue === "number") {
      const left = toNumber(value);
      if (op === ">=") return left >= cmpValue;
      if (op === "<=") return left <= cmpValue;
      if (op === ">") return left > cmpValue;
      if (op === "<") return left < cmpValue;
      if (op === "<>") return left !== cmpValue;
      return left === cmpValue;
    }
    const leftText = String(value ?? "");
    if (op === "<>") return leftText !== String(cmpValue);
    return leftText === String(cmpValue);
  }
  const numeric = Number(source);
  if (Number.isFinite(numeric)) return toNumber(value) === numeric;
  return String(value ?? "") === source.replace(/^"|"$/g, "");
}

function createFitmentFormulaFns() {
  const equalsExcel = (left, right) => {
    const a = String(left ?? "").trim();
    const b = String(right ?? "").trim();
    const na = Number(a.replace(/,/g, ""));
    const nb = Number(b.replace(/,/g, ""));
    if (Number.isFinite(na) && Number.isFinite(nb)) return na === nb;
    return a.toLowerCase() === b.toLowerCase();
  };
  return {
    IF: (cond, v1, v2) => (cond ? v1 : v2),
    IFERROR: (value, fallback) => (value === null || value === undefined || Number.isNaN(value) ? fallback : value),
    AND: (...args) => args.every(Boolean),
    OR: (...args) => args.some(Boolean),
    NOT: value => !value,
    SUM: (...args) => flattenValues(args).reduce((sum, value) => sum + toNumber(value), 0),
    AVERAGE: (...args) => {
      const values = flattenValues(args).map(toNumber).filter(value => Number.isFinite(value));
      if (!values.length) return 0;
      return values.reduce((sum, value) => sum + value, 0) / values.length;
    },
    COUNT: (...args) => flattenValues(args).filter(value => {
      if (value === null || value === undefined || value === "") return false;
      return Number.isFinite(Number(String(value).replace(/,/g, "").trim()));
    }).length,
    COUNTIF: (rangeValues, criterion) => {
      const values = flattenValues(rangeValues);
      return values.filter(value => normalizeCriterion(criterion, value)).length;
    },
    SUMIF: (rangeValues, criterion, sumRangeValues) => {
      const range = flattenValues(rangeValues);
      const sumRange = flattenValues(sumRangeValues || rangeValues);
      let sum = 0;
      range.forEach((value, index) => {
        if (normalizeCriterion(criterion, value)) {
          sum += toNumber(sumRange[index]);
        }
      });
      return sum;
    },
    VLOOKUP: (lookupValue, tableRange, colIndex, rangeLookup = true) => {
      const matrix = Array.isArray(tableRange) && Array.isArray(tableRange.__matrix) ? tableRange.__matrix : null;
      const col = Math.max(1, Math.trunc(toNumber(colIndex)));
      if (!matrix || !matrix.length) return "#N/A";
      const useApprox = !(rangeLookup === false || toNumber(rangeLookup) === 0 || String(rangeLookup).toUpperCase() === "FALSE");

      if (!useApprox) {
        const row = matrix.find(item => equalsExcel(item[0], lookupValue));
        if (!row) return "#N/A";
        return row[col - 1] ?? "#N/A";
      }

      // Approximate match: return last row with first-column value <= lookup value.
      const lookupNum = toNumber(lookupValue);
      const numericLookup = Number.isFinite(lookupNum);
      let candidate = null;
      matrix.forEach(row => {
        const key = row[0];
        if (numericLookup) {
          const keyNum = toNumber(key);
          if (Number.isFinite(keyNum) && keyNum <= lookupNum) candidate = row;
        } else if (String(key ?? "").toLowerCase() <= String(lookupValue ?? "").toLowerCase()) {
          candidate = row;
        }
      });
      if (!candidate) return "#N/A";
      return candidate[col - 1] ?? "#N/A";
    },
    IFS: (...args) => {
      for (let i = 0; i < args.length; i += 2) {
        if (Boolean(args[i])) return args[i + 1];
      }
      return "";
    },
    MIN: (...args) => {
      const values = flattenValues(args).map(toNumber);
      return values.length ? Math.min(...values) : 0;
    },
    MAX: (...args) => {
      const values = flattenValues(args).map(toNumber);
      return values.length ? Math.max(...values) : 0;
    },
    ROUND: (num, digits = 0) => {
      const factor = 10 ** toNumber(digits);
      return Math.round(toNumber(num) * factor) / factor;
    },
    ABS: value => Math.abs(toNumber(value))
  };
}

function getFitmentCellRawValue(fitmentData, address) {
  const normalized = normalizeCellAddress(address);
  const cell = fitmentData.cells[normalized];
  if (!cell) return "";
  if (cell.formula) return cell.value ?? "";
  return cell.input ?? "";
}

function coerceFormulaScalar(value) {
  if (typeof value === "number" || typeof value === "boolean") return value;
  const text = String(value ?? "").trim();
  if (!text) return 0;
  const numeric = Number(text.replace(/,/g, ""));
  if (Number.isFinite(numeric)) return numeric;
  return value;
}

function evaluateFitmentFormula(fitmentData, address, stack = new Set()) {
  const normalized = normalizeCellAddress(address);
  const cell = fitmentData.cells[normalized];
  if (!cell || !cell.formula) return getFitmentCellRawValue(fitmentData, normalized);
  if (stack.has(normalized)) return "#CYCLE";
  stack.add(normalized);

  const __cell = ref => coerceFormulaScalar(evaluateFitmentFormula(fitmentData, ref, new Set(stack)));
  const __range = refRange => {
    const [startRef, endRef] = String(refRange || "").split(":");
    const start = XLSX.utils.decode_cell(normalizeCellAddress(startRef || "A1"));
    const end = XLSX.utils.decode_cell(normalizeCellAddress(endRef || startRef || "A1"));
    const values = [];
    const matrix = [];
    for (let r = Math.min(start.r, end.r); r <= Math.max(start.r, end.r); r += 1) {
      const rowValues = [];
      for (let c = Math.min(start.c, end.c); c <= Math.max(start.c, end.c); c += 1) {
        const addr = XLSX.utils.encode_cell({ r, c });
        const scalar = coerceFormulaScalar(evaluateFitmentFormula(fitmentData, addr, new Set(stack)));
        values.push(scalar);
        rowValues.push(scalar);
      }
      matrix.push(rowValues);
    }
    values.__matrix = matrix;
    values.__rows = matrix.length;
    values.__cols = matrix[0] ? matrix[0].length : 0;
    return values;
  };
  const __fn = createFitmentFormulaFns();

  try {
    const compiled = compileFormulaExpression(cell.formula);
    const result = new Function("__cell", "__range", "__fn", `return (${compiled});`)(__cell, __range, __fn);
    cell.value = result ?? "";
    return result;
  } catch (error) {
    cell.value = "#ERR";
    return "#ERR";
  }
}

function recalculateFitmentSheet(fitmentData) {
  if (!fitmentData || !fitmentData.cells) return;
  Object.keys(fitmentData.cells).forEach(address => {
    const cell = fitmentData.cells[address];
    if (!cell) return;
    if (!cell.formula) {
      cell.value = cell.input ?? "";
      return;
    }
    evaluateFitmentFormula(fitmentData, address);
  });
}

async function parseSpreadsheetFile(file) {
  const fileName = String(file?.name || "").toLowerCase();
  const isCsv = (file.type && file.type.includes("csv")) || fileName.endsWith(".csv");
  if (isCsv) {
    const text = await file.text();
    return buildFitmentFromCsv(parseCsvText(text));
  }

  const isExcel = fileName.endsWith(".xlsx") || fileName.endsWith(".xls");
  if (!isExcel) {
    throw new Error("unsupported_file");
  }

  if (typeof XLSX === "undefined") {
    throw new Error("xlsx_lib_missing");
  }

  const buffer = await file.arrayBuffer();
  const workbook = XLSX.read(buffer, { type: "array" });
  const firstSheetName = workbook.SheetNames && workbook.SheetNames.length ? workbook.SheetNames[0] : null;
  if (!firstSheetName) return buildFitmentFromCsv({ headers: [], rows: [] });
  const worksheet = workbook.Sheets[firstSheetName];
  const fitmentSheet = buildFitmentFromWorksheet(worksheet, firstSheetName);
  recalculateFitmentSheet(fitmentSheet);
  return fitmentSheet;
}

function setFitmentFormulaBar(client, address = "") {
  if (!fitmentFormulaBar) return;
  const active = client || getActiveClient();
  if (!active) {
    fitmentFormulaBar.textContent = "Select a cell to view formula/value.";
    return;
  }
  ensureFitmentData(active);
  const addr = normalizeCellAddress(address);
  if (!addr) {
    fitmentFormulaBar.textContent = "Select a cell to view formula/value.";
    return;
  }
  const cell = active.fitmentData.cells[addr];
  if (!cell) {
    fitmentFormulaBar.textContent = `${addr}: (empty cell)`;
    return;
  }
  const formulaText = cell.formula ? cell.formula : "(no formula)";
  const valueText = cell.formula ? String(cell.value ?? "") : String(cell.input ?? "");
  fitmentFormulaBar.textContent = `${addr} | Formula: ${formulaText} | Value: ${valueText}`;
}

function serializeFitmentToCsv(fitmentData) {
  const rows = [];
  const rowCount = Number(fitmentData?.rowCount || 0);
  const colCount = Number(fitmentData?.colCount || 0);
  for (let r = 1; r <= rowCount; r += 1) {
    const row = [];
    for (let c = 0; c < colCount; c += 1) {
      const addr = `${columnIndexToLabel(c)}${r}`;
      const cell = fitmentData?.cells?.[addr];
      const raw = cell ? (cell.formula ? cell.value : cell.input) : "";
      const text = String(raw ?? "");
      const escaped = `"${text.replace(/"/g, "\"\"")}"`;
      row.push(escaped);
    }
    rows.push(row.join(","));
  }
  return rows.join("\n");
}

function dataUrlToBlob(dataUrl) {
  const parts = String(dataUrl || "").split(",");
  if (parts.length < 2) return null;
  const header = parts[0];
  const body = parts.slice(1).join(",");
  const mimeMatch = header.match(/data:(.*?);base64/i);
  const mime = mimeMatch ? mimeMatch[1] : "application/octet-stream";
  try {
    const binary = atob(body);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
    return new Blob([bytes], { type: mime });
  } catch (error) {
    return null;
  }
}

function renderFitmentPanel() {
  const active = getActiveClient();
  if (!fitmentReplicaWrap) return;
  fitmentReplicaWrap.innerHTML = "";
  if (fitmentMeta) fitmentMeta.textContent = "";
  setFitmentFormulaBar(active, "");
  if (!active) return;
  ensureFitmentData(active);
  const canEdit = canEditWorkspace();
  if (fitmentFileInput) fitmentFileInput.disabled = !canEdit;
  if (uploadFitmentBtn) uploadFitmentBtn.disabled = !canEdit;
  if (clearFitmentBtn) clearFitmentBtn.disabled = !canEdit || !active.fitmentData.rowCount;
  if (downloadFitmentBtn) {
    const adminCanDownload = isAdmin() && (Boolean(active.fitmentData.fileDataUrl) || (active.fitmentData.rowCount > 0 && active.fitmentData.colCount > 0));
    downloadFitmentBtn.disabled = !adminCanDownload;
    downloadFitmentBtn.classList.toggle("hidden", !isAdmin());
  }

  if (fitmentMeta) {
    if (active.fitmentData.fileName) {
      fitmentMeta.textContent = `Uploaded: ${active.fitmentData.fileName}${active.fitmentData.uploadedAt ? ` | ${active.fitmentData.uploadedAt}` : ""}`;
    } else {
      fitmentMeta.textContent = "No salary calculator uploaded yet.";
    }
  }

  if (!active.fitmentData.rowCount || !active.fitmentData.colCount) {
    fitmentReplicaWrap.innerHTML = '<p class="empty-state">Upload CSV/Excel salary calculator to replicate and compute here.</p>';
    return;
  }

  recalculateFitmentSheet(active.fitmentData);

  const table = document.createElement("table");
  table.className = "fitment-replica-table";
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  const corner = document.createElement("th");
  corner.textContent = "#";
  headerRow.appendChild(corner);
  for (let col = 0; col < active.fitmentData.colCount; col += 1) {
    const th = document.createElement("th");
    th.textContent = columnIndexToLabel(col);
    headerRow.appendChild(th);
  }
  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  for (let rowIndex = 0; rowIndex < active.fitmentData.rowCount; rowIndex += 1) {
    const tr = document.createElement("tr");
    const rowHead = document.createElement("th");
    rowHead.className = "fitment-row-head";
    rowHead.textContent = String(rowIndex + 1);
    tr.appendChild(rowHead);
    for (let colIndex = 0; colIndex < active.fitmentData.colCount; colIndex += 1) {
      const addr = `${columnIndexToLabel(colIndex)}${rowIndex + 1}`;
      const cell = active.fitmentData.cells[addr] || { input: "", formula: "", value: "" };
      const td = document.createElement("td");
      const input = document.createElement("input");
      input.type = "text";
      input.value = cell.formula ? String(cell.value ?? "") : String(cell.input ?? "");
      input.title = cell.formula ? `Formula: ${cell.formula}` : "Editable input cell";
      input.disabled = !canEdit;
      input.dataset.fitmentAddr = addr;
      if (cell.formula) input.classList.add("fitment-formula-cell");
      td.appendChild(input);
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
  table.appendChild(tbody);
  fitmentReplicaWrap.appendChild(table);
}

function getWorkflowNodeCenter(node) {
  return {
    x: Number(node.x || 0) + 92,
    y: Number(node.y || 0) + 30
  };
}

function getWorkflowExportName(active, ext) {
  const safe = String(active?.name || "workflow")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "") || "workflow";
  return `${safe}_recruitment_workflow.${ext}`;
}

function isSafariBrowser() {
  const ua = navigator.userAgent || "";
  const vendor = navigator.vendor || "";
  return /Safari/i.test(ua) && /Apple/i.test(vendor) && !/CriOS|Chrome|Edg|OPR|FxiOS/i.test(ua);
}

function downloadBlob(blob, fileName) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  link.rel = "noopener";
  link.target = "_blank";
  document.body.appendChild(link);
  try {
    link.click();
  } catch (error) {
    // Fallback for browsers that block synthetic download clicks.
    window.open(url, "_blank", "noopener");
  }
  link.remove();
  // Safari can fail if URL is revoked immediately.
  window.setTimeout(() => URL.revokeObjectURL(url), 2500);
}

function buildWorkflowExportSvgString(data, width, height) {
  const escape = text => String(text || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

  const colors = {
    start: { fill: "#c8f0d8", stroke: "#86cfab" },
    step: { fill: "#f4f8ff", stroke: "#a8c1ff" },
    decision: { fill: "#ffefc0", stroke: "#e9cc84" },
    end: { fill: "#ffd7df", stroke: "#f0a6b4" }
  };

  const nodeById = new Map((data?.nodes || []).map(node => [node.id, node]));
  const edgeLines = (data?.edges || []).map(edge => {
    const from = nodeById.get(edge.from);
    const to = nodeById.get(edge.to);
    if (!from || !to) return "";
    const a = getWorkflowNodeCenter(from);
    const b = getWorkflowNodeCenter(to);
    return `<line data-edge-id="${escape(edge.id)}" data-from="${escape(edge.from)}" data-to="${escape(edge.to)}" x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}" stroke="#5d7fd8" stroke-width="2.2" marker-end="url(#wfArrow)"/>`;
  }).join("");

  const nodeBoxes = (data?.nodes || []).map(node => {
    const palette = colors[node.type] || colors.step;
    return [
      `<rect data-node-id="${escape(node.id)}" data-node-type="${escape(node.type || "step")}" data-node-label="${escape(node.label || "Step")}" x="${node.x}" y="${node.y}" width="184" height="60" rx="14" ry="14" fill="${palette.fill}" stroke="${palette.stroke}" stroke-width="1.2"/>`,
      `<text data-node-id="${escape(node.id)}" x="${Number(node.x) + 12}" y="${Number(node.y) + 24}" fill="#173a87" font-size="13" font-weight="700">${escape(node.label || "Step")}</text>`,
      `<text data-node-id="${escape(node.id)}" x="${Number(node.x) + 12}" y="${Number(node.y) + 44}" fill="#2f4f9d" font-size="11">${escape(node.type || "step")}</text>`
    ].join("");
  }).join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <marker id="wfArrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#5d7fd8"/>
    </marker>
  </defs>
  <rect x="0" y="0" width="${width}" height="${height}" fill="#eef4ff"/>
  ${edgeLines}
  ${nodeBoxes}
</svg>`;
}

function exportWorkflowSvg() {
  const active = getActiveClient();
  if (!active) return;
  ensureWorkflowData(active);
  const width = Math.max(900, workflowCanvas ? workflowCanvas.clientWidth : 1200);
  const height = Math.max(560, workflowCanvas ? workflowCanvas.clientHeight : 700);
  const svgText = buildWorkflowExportSvgString(active.workflowData, width, height);
  const fileName = getWorkflowExportName(active, "svg");

  // Safari has inconsistent blob download behavior for SVG; use data URL flow.
  if (isSafariBrowser()) {
    const href = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgText)}`;
    const link = document.createElement("a");
    link.href = href;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    link.remove();
    return;
  }

  downloadBlob(new Blob([svgText], { type: "image/svg+xml;charset=utf-8" }), fileName);
}

function exportWorkflowPng() {
  const active = getActiveClient();
  if (!active) return;
  ensureWorkflowData(active);
  const width = Math.max(900, workflowCanvas ? workflowCanvas.clientWidth : 1200);
  const height = Math.max(560, workflowCanvas ? workflowCanvas.clientHeight : 700);
  const svgText = buildWorkflowExportSvgString(active.workflowData, width, height);
  const svgBlob = new Blob([svgText], { type: "image/svg+xml;charset=utf-8" });
  const svgUrl = URL.createObjectURL(svgBlob);
  const img = new Image();
  img.onload = () => {
    const canvasEl = document.createElement("canvas");
    canvasEl.width = width;
    canvasEl.height = height;
    const ctx = canvasEl.getContext("2d");
    if (ctx) {
      ctx.fillStyle = "#eef4ff";
      ctx.fillRect(0, 0, width, height);
      ctx.drawImage(img, 0, 0);
      canvasEl.toBlob(blob => {
        if (blob) downloadBlob(blob, getWorkflowExportName(active, "png"));
      }, "image/png");
    }
    URL.revokeObjectURL(svgUrl);
  };
  img.onerror = () => {
    URL.revokeObjectURL(svgUrl);
    window.alert("Unable to export PNG. Please try SVG export.");
  };
  img.src = svgUrl;
}

function parseWorkflowFromSvgText(svgText) {
  const parser = new DOMParser();
  const xml = parser.parseFromString(String(svgText || ""), "image/svg+xml");
  const parseError = xml.querySelector("parsererror");
  if (parseError) throw new Error("invalid_svg");

  const validTypes = new Set(["start", "step", "decision", "end"]);
  const rects = Array.from(xml.querySelectorAll("rect[data-node-id], rect"));
  const nodes = [];
  const byId = new Map();

  rects.forEach((rect, idx) => {
    const width = Number(rect.getAttribute("width") || 0);
    const height = Number(rect.getAttribute("height") || 0);
    if (width < 120 || height < 40) return; // skip background rects
    const id = String(rect.getAttribute("data-node-id") || `wf_n${idx + 1}`);
    const x = Number(rect.getAttribute("x") || 0);
    const y = Number(rect.getAttribute("y") || 0);
    const typeSeed = String(rect.getAttribute("data-node-type") || "step").toLowerCase();
    const type = validTypes.has(typeSeed) ? typeSeed : "step";
    const labelAttr = String(rect.getAttribute("data-node-label") || "").trim();
    const labelFromText = Array.from(xml.querySelectorAll("text"))
      .filter(el => String(el.getAttribute("data-node-id") || "") === id)
      .map(el => (el.textContent || "").trim())
      .find(Boolean) || "";
    const label = labelAttr || labelFromText || `Step ${idx + 1}`;
    const node = { id, type, label, x: Math.round(x), y: Math.round(y) };
    nodes.push(node);
    byId.set(id, node);
  });

  if (!nodes.length) throw new Error("no_nodes");

  let edges = [];
  const lines = Array.from(xml.querySelectorAll("line"));
  const withDataAttrs = lines.some(line => line.hasAttribute("data-from") && line.hasAttribute("data-to"));
  if (withDataAttrs) {
    edges = lines
      .map((line, idx) => ({
        id: String(line.getAttribute("data-edge-id") || `wf_e${idx + 1}`),
        from: String(line.getAttribute("data-from") || ""),
        to: String(line.getAttribute("data-to") || "")
      }))
      .filter(edge => edge.from && edge.to && byId.has(edge.from) && byId.has(edge.to) && edge.from !== edge.to);
  } else {
    const centerMap = nodes.map(node => ({ node, c: getWorkflowNodeCenter(node) }));
    edges = lines.map((line, idx) => {
      const x1 = Number(line.getAttribute("x1") || 0);
      const y1 = Number(line.getAttribute("y1") || 0);
      const x2 = Number(line.getAttribute("x2") || 0);
      const y2 = Number(line.getAttribute("y2") || 0);
      const nearest = (x, y) => centerMap
        .map(item => ({ id: item.node.id, d: Math.hypot(item.c.x - x, item.c.y - y) }))
        .sort((a, b) => a.d - b.d)[0];
      const fromNear = nearest(x1, y1);
      const toNear = nearest(x2, y2);
      if (!fromNear || !toNear || fromNear.id === toNear.id) return null;
      return { id: `wf_e${idx + 1}`, from: fromNear.id, to: toNear.id };
    }).filter(Boolean);
  }

  // De-duplicate edges.
  const dedupe = new Set();
  edges = edges.filter(edge => {
    const key = `${edge.from}__${edge.to}`;
    if (dedupe.has(key)) return false;
    dedupe.add(key);
    return true;
  });

  return {
    nodes,
    edges,
    nextNodeId: nodes.length + 1,
    nextEdgeId: edges.length + 1
  };
}

async function importWorkflowSvgFile(file) {
  if (!canEditWorkspace()) return;
  const active = getActiveClient();
  if (!active || !file) return;
  const fileName = String(file.name || "").toLowerCase();
  const isSvg = file.type.includes("svg") || fileName.endsWith(".svg");
  if (!isSvg) {
    window.alert("Please select an SVG file.");
    return;
  }
  const text = await file.text();
  const parsed = parseWorkflowFromSvgText(text);
  active.workflowData = parsed;
  selectedWorkflowNodeId = null;
  workflowConnectFromNodeId = null;
  addAuditLog(active, "Workflow Imported", file.name || "SVG", {
    eventType: "field",
    actorRole: currentRole || "client",
    actorName: active.name || "Client",
    pageKey: WORKFLOW_PAGE_KEY
  });
  saveClients();
  renderWorkflowBuilder();
}

function triggerWorkflowSvgImport() {
  if (!canEditWorkspace()) return;
  if (!workflowImportSvgInput) return;
  workflowImportSvgInput.value = "";
  workflowImportSvgInput.click();
}

function drawWorkflowEdges(svg, workflowData, options = {}) {
  const onEdgeClick = typeof options.onEdgeClick === "function" ? options.onEdgeClick : null;
  if (!svg || !workflowData) return;
  svg.innerHTML = "";

  const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
  const marker = document.createElementNS("http://www.w3.org/2000/svg", "marker");
  marker.setAttribute("id", "wfArrow");
  marker.setAttribute("viewBox", "0 0 10 10");
  marker.setAttribute("refX", "9");
  marker.setAttribute("refY", "5");
  marker.setAttribute("markerWidth", "8");
  marker.setAttribute("markerHeight", "8");
  marker.setAttribute("orient", "auto-start-reverse");
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", "M 0 0 L 10 5 L 0 10 z");
  path.setAttribute("fill", "#5d7fd8");
  marker.appendChild(path);
  defs.appendChild(marker);
  svg.appendChild(defs);

  const nodeById = new Map(workflowData.nodes.map(node => [node.id, node]));
  workflowData.edges.forEach(edge => {
    const from = nodeById.get(edge.from);
    const to = nodeById.get(edge.to);
    if (!from || !to) return;
    const a = getWorkflowNodeCenter(from);
    const b = getWorkflowNodeCenter(to);
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", String(a.x));
    line.setAttribute("y1", String(a.y));
    line.setAttribute("x2", String(b.x));
    line.setAttribute("y2", String(b.y));
    line.setAttribute("class", "workflow-edge");
    line.setAttribute("marker-end", "url(#wfArrow)");
    if (onEdgeClick) {
      line.addEventListener("click", event => {
        event.stopPropagation();
        onEdgeClick(edge);
      });
    }
    svg.appendChild(line);
  });
}

function renderWorkflowBuilder() {
  const active = getActiveClient();
  if (!workflowPanel || !workflowCanvas) return;
  workflowCanvas.innerHTML = "";
  if (!active) return;
  ensureWorkflowData(active);
  const data = active.workflowData;
  const canEdit = canEditWorkspace();
  workflowPanel.classList.toggle("readonly", !canEdit);
  if (workflowAddNodeBtn) workflowAddNodeBtn.disabled = !canEdit;
  if (workflowLoadExampleBtn) workflowLoadExampleBtn.disabled = !canEdit;
  if (workflowConnectBtn) {
    workflowConnectBtn.disabled = !canEdit;
    workflowConnectBtn.textContent = workflowConnectFromNodeId ? "Connecting..." : "Connect";
  }
  if (workflowDeleteNodeBtn) workflowDeleteNodeBtn.disabled = !canEdit;
  if (workflowClearBtn) workflowClearBtn.disabled = !canEdit;
  if (workflowImportSvgBtn) workflowImportSvgBtn.disabled = !canEdit;
  if (workflowExportSvgBtn) workflowExportSvgBtn.disabled = !data.nodes.length;
  if (workflowExportPngBtn) workflowExportPngBtn.disabled = !data.nodes.length;
  if (workflowNodeType) workflowNodeType.disabled = !canEdit;
  if (workflowNodeLabel) workflowNodeLabel.disabled = !canEdit;
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("class", "workflow-edges-layer");
  workflowCanvas.appendChild(svg);
  drawWorkflowEdges(svg, data, {
    onEdgeClick: edge => {
      if (!canEdit) return;
      const ok = window.confirm("Delete this connection?");
      if (!ok) return;
      data.edges = data.edges.filter(item => item.id !== edge.id);
      addAuditLog(active, "Workflow Edge Removed", `${edge.from} -> ${edge.to}`, {
        eventType: "field",
        actorRole: currentRole || "client",
        actorName: active.name || "Client",
        pageKey: WORKFLOW_PAGE_KEY
      });
      saveClients();
      renderWorkflowBuilder();
    }
  });

  const maxX = Math.max(60, workflowCanvas.clientWidth - 200);
  const maxY = Math.max(60, workflowCanvas.clientHeight - 76);

  data.nodes.forEach(node => {
    const card = document.createElement("div");
    card.className = `workflow-node ${node.type}${selectedWorkflowNodeId === node.id ? " selected" : ""}${canEdit ? "" : " readonly"}`;
    card.dataset.workflowNodeId = node.id;
    card.style.left = `${Math.max(10, Math.min(maxX, Number(node.x || 0)))}px`;
    card.style.top = `${Math.max(10, Math.min(maxY, Number(node.y || 0)))}px`;
    card.innerHTML = `<strong>${escapeHtml(node.label || "Step")}</strong><small>${escapeHtml(node.type || "step")}</small>`;

    card.addEventListener("click", event => {
      event.stopPropagation();
      if (workflowConnectFromNodeId && workflowConnectFromNodeId !== node.id && canEdit) {
        const exists = data.edges.some(edge => edge.from === workflowConnectFromNodeId && edge.to === node.id);
        if (!exists) {
          data.edges.push({
            id: `wf_e${data.nextEdgeId++}`,
            from: workflowConnectFromNodeId,
            to: node.id
          });
          addAuditLog(active, "Workflow Connected", `${workflowConnectFromNodeId} -> ${node.id}`, {
            eventType: "field",
            actorRole: currentRole || "client",
            actorName: active.name || "Client",
            pageKey: WORKFLOW_PAGE_KEY
          });
          saveClients();
        }
        workflowConnectFromNodeId = null;
        selectedWorkflowNodeId = node.id;
        renderWorkflowBuilder();
        return;
      }
      selectedWorkflowNodeId = node.id;
      renderWorkflowBuilder();
    });

    card.addEventListener("dblclick", event => {
      if (!canEdit) return;
      event.preventDefault();
      event.stopPropagation();
      const nextLabel = window.prompt("Rename workflow step", node.label || "");
      if (nextLabel === null) return;
      const clean = String(nextLabel).trim();
      if (!clean) return;
      node.label = clean;
      addAuditLog(active, "Workflow Node Renamed", clean, {
        eventType: "field",
        actorRole: currentRole || "client",
        actorName: active.name || "Client",
        pageKey: WORKFLOW_PAGE_KEY
      });
      saveClients();
      renderWorkflowBuilder();
    });

    if (canEdit) {
      card.addEventListener("mousedown", event => {
        if (event.button !== 0) return;
        event.preventDefault();
        const startX = event.clientX;
        const startY = event.clientY;
        const baseX = Number(node.x || 0);
        const baseY = Number(node.y || 0);

        const onMove = moveEvent => {
          const nextX = Math.max(10, Math.min(maxX, baseX + (moveEvent.clientX - startX)));
          const nextY = Math.max(10, Math.min(maxY, baseY + (moveEvent.clientY - startY)));
          node.x = Math.round(nextX);
          node.y = Math.round(nextY);
          card.style.left = `${node.x}px`;
          card.style.top = `${node.y}px`;
          drawWorkflowEdges(svg, data, {
            onEdgeClick: edge => {
              const ok = window.confirm("Delete this connection?");
              if (!ok) return;
              data.edges = data.edges.filter(item => item.id !== edge.id);
              addAuditLog(active, "Workflow Edge Removed", `${edge.from} -> ${edge.to}`, {
                eventType: "field",
                actorRole: currentRole || "client",
                actorName: active.name || "Client",
                pageKey: WORKFLOW_PAGE_KEY
              });
              saveClients();
              renderWorkflowBuilder();
            }
          });
        };

        const onUp = () => {
          window.removeEventListener("mousemove", onMove);
          window.removeEventListener("mouseup", onUp);
          addAuditLog(active, "Workflow Node Moved", node.label || node.id, {
            eventType: "field",
            actorRole: currentRole || "client",
            actorName: active.name || "Client",
            pageKey: WORKFLOW_PAGE_KEY
          });
          saveClients();
        };

        window.addEventListener("mousemove", onMove);
        window.addEventListener("mouseup", onUp);
      });
    }

    workflowCanvas.appendChild(card);
  });

  if (workflowHint) {
    if (!canEdit) {
      workflowHint.textContent = "Read-only for admin. Open as client to edit workflow.";
    } else if (workflowConnectFromNodeId) {
      workflowHint.textContent = "Connect mode active: click target node to create link.";
    } else if (selectedWorkflowNodeId) {
      workflowHint.textContent = "Node selected. Drag to move or click Connect.";
    } else {
      workflowHint.textContent = "Tip: select a node, click Connect, then click another node.";
    }
  }
}

function addWorkflowNode() {
  if (!canEditWorkspace()) return;
  const active = getActiveClient();
  if (!active) return;
  ensureWorkflowData(active);
  const data = active.workflowData;
  const type = String(workflowNodeType ? workflowNodeType.value : "step");
  const count = data.nodes.length + 1;
  const label = String(workflowNodeLabel ? workflowNodeLabel.value.trim() : "") || `${type[0].toUpperCase()}${type.slice(1)} ${count}`;
  const x = 60 + ((count - 1) % 4) * 220;
  const y = 70 + Math.floor((count - 1) / 4) * 110;
  const node = {
    id: `wf_n${data.nextNodeId++}`,
    type: ["start", "step", "decision", "end"].includes(type) ? type : "step",
    label,
    x,
    y
  };
  data.nodes.push(node);
  selectedWorkflowNodeId = node.id;
  workflowConnectFromNodeId = null;
  if (workflowNodeLabel) workflowNodeLabel.value = "";
  addAuditLog(active, "Workflow Node Added", node.label, {
    eventType: "field",
    actorRole: currentRole || "client",
    actorName: active.name || "Client",
    pageKey: WORKFLOW_PAGE_KEY
  });
  saveClients();
  renderWorkflowBuilder();
}

function loadExampleWorkflow() {
  if (!canEditWorkspace()) return;
  const active = getActiveClient();
  if (!active) return;
  const ok = window.confirm("Load sample recruitment workflow? This will replace the current workflow.");
  if (!ok) return;

  active.workflowData = {
    nodes: [
      { id: "wf_n1", type: "start", label: "Requisition Raised", x: 40, y: 70 },
      { id: "wf_n2", type: "step", label: "Requisition Approval", x: 280, y: 70 },
      { id: "wf_n3", type: "step", label: "Sourcing", x: 520, y: 70 },
      { id: "wf_n4", type: "step", label: "Screening", x: 760, y: 70 },
      { id: "wf_n5", type: "decision", label: "Shortlisted?", x: 760, y: 220 },
      { id: "wf_n6", type: "step", label: "Interview Round 1", x: 520, y: 220 },
      { id: "wf_n7", type: "decision", label: "Round 1 Cleared?", x: 280, y: 220 },
      { id: "wf_n8", type: "step", label: "Interview Round 2", x: 280, y: 360 },
      { id: "wf_n9", type: "decision", label: "Final Selection?", x: 520, y: 360 },
      { id: "wf_n10", type: "step", label: "Fitment & Offer Approval", x: 760, y: 360 },
      { id: "wf_n11", type: "step", label: "Offer Release", x: 760, y: 500 },
      { id: "wf_n12", type: "step", label: "Pre-Joining Docs", x: 520, y: 500 },
      { id: "wf_n13", type: "end", label: "Joined", x: 280, y: 500 },
      { id: "wf_n14", type: "end", label: "Rejected / Closed", x: 40, y: 360 }
    ],
    edges: [
      { id: "wf_e1", from: "wf_n1", to: "wf_n2" },
      { id: "wf_e2", from: "wf_n2", to: "wf_n3" },
      { id: "wf_e3", from: "wf_n3", to: "wf_n4" },
      { id: "wf_e4", from: "wf_n4", to: "wf_n5" },
      { id: "wf_e5", from: "wf_n5", to: "wf_n6" },
      { id: "wf_e6", from: "wf_n5", to: "wf_n14" },
      { id: "wf_e7", from: "wf_n6", to: "wf_n7" },
      { id: "wf_e8", from: "wf_n7", to: "wf_n8" },
      { id: "wf_e9", from: "wf_n7", to: "wf_n14" },
      { id: "wf_e10", from: "wf_n8", to: "wf_n9" },
      { id: "wf_e11", from: "wf_n9", to: "wf_n10" },
      { id: "wf_e12", from: "wf_n9", to: "wf_n14" },
      { id: "wf_e13", from: "wf_n10", to: "wf_n11" },
      { id: "wf_e14", from: "wf_n11", to: "wf_n12" },
      { id: "wf_e15", from: "wf_n12", to: "wf_n13" }
    ],
    nextNodeId: 15,
    nextEdgeId: 16
  };

  selectedWorkflowNodeId = null;
  workflowConnectFromNodeId = null;
  addAuditLog(active, "Workflow Example Loaded", "ATS sample workflow", {
    eventType: "field",
    actorRole: currentRole || "client",
    actorName: active.name || "Client",
    pageKey: WORKFLOW_PAGE_KEY
  });
  saveClients();
  renderWorkflowBuilder();
}

function toggleWorkflowConnectMode() {
  if (!canEditWorkspace()) return;
  if (!selectedWorkflowNodeId) {
    window.alert("Select a node first.");
    return;
  }
  workflowConnectFromNodeId = workflowConnectFromNodeId ? null : selectedWorkflowNodeId;
  renderWorkflowBuilder();
}

function deleteSelectedWorkflowNode() {
  if (!canEditWorkspace()) return;
  const active = getActiveClient();
  if (!active || !selectedWorkflowNodeId) return;
  ensureWorkflowData(active);
  const data = active.workflowData;
  const target = data.nodes.find(node => node.id === selectedWorkflowNodeId);
  if (!target) return;
  const ok = window.confirm(`Delete workflow node "${target.label}"?`);
  if (!ok) return;
  data.nodes = data.nodes.filter(node => node.id !== selectedWorkflowNodeId);
  data.edges = data.edges.filter(edge => edge.from !== selectedWorkflowNodeId && edge.to !== selectedWorkflowNodeId);
  addAuditLog(active, "Workflow Node Removed", target.label, {
    eventType: "field",
    actorRole: currentRole || "client",
    actorName: active.name || "Client",
    pageKey: WORKFLOW_PAGE_KEY
  });
  selectedWorkflowNodeId = null;
  workflowConnectFromNodeId = null;
  saveClients();
  renderWorkflowBuilder();
}

function clearWorkflow() {
  if (!canEditWorkspace()) return;
  const active = getActiveClient();
  if (!active) return;
  const ok = window.confirm("Clear complete workflow?");
  if (!ok) return;
  active.workflowData = {
    nodes: [],
    edges: [],
    nextNodeId: 1,
    nextEdgeId: 1
  };
  selectedWorkflowNodeId = null;
  workflowConnectFromNodeId = null;
  addAuditLog(active, "Workflow Cleared", "All nodes removed", {
    eventType: "field",
    actorRole: currentRole || "client",
    actorName: active.name || "Client",
    pageKey: WORKFLOW_PAGE_KEY
  });
  saveClients();
  renderWorkflowBuilder();
}

function createBlankRequisitionApprovalRow(levelLabel) {
  return {
    id: `ra_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
    level: levelLabel || "",
    approver: "",
    condition: "",
    delegateTo: ""
  };
}

function renderRequisitionApprovalMatrix() {
  const active = getActiveClient();
  if (!requisitionApprovalBody) return;
  requisitionApprovalBody.innerHTML = "";
  if (!active) return;
  const rows = getActiveRequisitionApprovalRows(active);
  const activeDeptId = getActiveRequisitionDepartmentId(active);
  const activeDeptName = (active.departmentStructure?.departments || []).find(item => item.id === activeDeptId)?.name || "Department";
  const canEdit = canEditWorkspace();
  if (addReqApprovalRowBtn) addReqApprovalRowBtn.disabled = !canEdit;

  if (!rows.length) {
    requisitionApprovalBody.innerHTML = '<tr><td colspan="5" class="empty-state">No rows added yet.</td></tr>';
    return;
  }

  rows.forEach((row, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><input data-req-approval-key="level" data-req-approval-index="${index}" type="text" value="${escapeHtml(row.level || "")}" placeholder="L1 / L2" ${canEdit ? "" : "disabled"}></td>
      <td><input data-req-approval-key="approver" data-req-approval-index="${index}" type="text" value="${escapeHtml(row.approver || "")}" placeholder="Approver name/role" ${canEdit ? "" : "disabled"}></td>
      <td><input data-req-approval-key="condition" data-req-approval-index="${index}" type="text" value="${escapeHtml(row.condition || "")}" placeholder="Condition (if any)" ${canEdit ? "" : "disabled"}></td>
      <td><input data-req-approval-key="delegateTo" data-req-approval-index="${index}" type="text" value="${escapeHtml(row.delegateTo || "")}" placeholder="Delegate approver" ${canEdit ? "" : "disabled"}></td>
      <td>
        ${canEdit
    ? `<div class="ta-row-actions">
             <button class="ta-action-btn" type="button" data-req-approval-action="add" data-req-approval-index="${index}" aria-label="Add requisition approval row">+</button>
             <button class="ta-action-btn ta-action-btn-remove" type="button" data-req-approval-action="remove" data-req-approval-index="${index}" aria-label="Remove requisition approval row">-</button>
           </div>`
    : '<span class="ta-readonly-tag">Read only</span>'}
      </td>
    `;
    requisitionApprovalBody.appendChild(tr);
  });

  if (requisitionDeptHint) {
    requisitionDeptHint.textContent = `Managing requisition form for: ${activeDeptName}`;
  }
}

function createBlankOfferApprovalRow(levelLabel) {
  return {
    id: `oa_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
    level: levelLabel || "",
    approver: "",
    condition: "",
    delegateTo: ""
  };
}

function renderOfferApprovalMatrix() {
  const active = getActiveClient();
  if (!offerApprovalBody || !offerApprovalDeptSelect) return;
  offerApprovalBody.innerHTML = "";
  offerApprovalDeptSelect.innerHTML = "";
  if (!active) return;

  ensureOfferApprovalByDepartment(active);
  const departments = Array.isArray(active.departmentStructure?.departments) ? active.departmentStructure.departments : [];
  const canEdit = canEditWorkspace();
  if (addOfferApprovalRowBtn) addOfferApprovalRowBtn.disabled = !canEdit || !departments.length;
  offerApprovalDeptSelect.disabled = !canEdit || !departments.length;

  if (!departments.length) {
    offerApprovalBody.innerHTML = '<tr><td colspan="5" class="empty-state">Add a department to configure offer approvals.</td></tr>';
    if (offerApprovalDeptHint) offerApprovalDeptHint.textContent = "No departments available.";
    return;
  }

  const activeDeptId = getActiveOfferApprovalDepartmentId(active);
  departments.forEach(dept => {
    const option = document.createElement("option");
    option.value = dept.id;
    const geoSuffix = Array.isArray(dept.geos) && dept.geos.length ? ` (${dept.geos.join(", ")})` : "";
    option.textContent = `${dept.name}${geoSuffix}`;
    if (dept.id === activeDeptId) option.selected = true;
    offerApprovalDeptSelect.appendChild(option);
  });
  offerApprovalDeptSelect.value = activeDeptId || departments[0].id;

  const rows = getActiveOfferApprovalRows(active);
  const activeDeptName = departments.find(item => item.id === activeDeptId)?.name || "Department";
  if (!rows.length) {
    offerApprovalBody.innerHTML = '<tr><td colspan="5" class="empty-state">No rows added yet.</td></tr>';
    if (offerApprovalDeptHint) offerApprovalDeptHint.textContent = `Managing offer approvals for: ${activeDeptName}`;
    return;
  }

  rows.forEach((row, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><input data-offer-approval-key="level" data-offer-approval-index="${index}" type="text" value="${escapeHtml(row.level || "")}" placeholder="L1 / L2" ${canEdit ? "" : "disabled"}></td>
      <td><input data-offer-approval-key="approver" data-offer-approval-index="${index}" type="text" value="${escapeHtml(row.approver || "")}" placeholder="Approver name/role" ${canEdit ? "" : "disabled"}></td>
      <td><input data-offer-approval-key="condition" data-offer-approval-index="${index}" type="text" value="${escapeHtml(row.condition || "")}" placeholder="Condition (if any)" ${canEdit ? "" : "disabled"}></td>
      <td><input data-offer-approval-key="delegateTo" data-offer-approval-index="${index}" type="text" value="${escapeHtml(row.delegateTo || "")}" placeholder="Delegate approver" ${canEdit ? "" : "disabled"}></td>
      <td>
        ${canEdit
    ? `<div class="ta-row-actions">
             <button class="ta-action-btn" type="button" data-offer-approval-action="add" data-offer-approval-index="${index}" aria-label="Add offer approval row">+</button>
             <button class="ta-action-btn ta-action-btn-remove" type="button" data-offer-approval-action="remove" data-offer-approval-index="${index}" aria-label="Remove offer approval row">-</button>
           </div>`
    : '<span class="ta-readonly-tag">Read only</span>'}
      </td>
    `;
    offerApprovalBody.appendChild(tr);
  });

  if (offerApprovalDeptHint) {
    offerApprovalDeptHint.textContent = `Managing offer approvals for: ${activeDeptName}`;
  }
}

function parseSubDepartmentsInput(rawValue = "") {
  const seen = new Set();
  return String(rawValue || "")
    .split(",")
    .map(item => item.trim())
    .filter(Boolean)
    .filter(item => {
      const key = item.toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
}

function toggleSubDepartmentInputVisibility(forceVisible = null) {
  const visible = forceVisible !== null
    ? Boolean(forceVisible)
    : Boolean(requisitionHasSubDeptCheck && requisitionHasSubDeptCheck.checked);
  if (requisitionSubDeptRow) {
    requisitionSubDeptRow.classList.toggle("hidden", !visible);
  }
  if (!visible && requisitionSubDeptInput) {
    requisitionSubDeptInput.value = "";
  }
}

function createDepartmentForActiveClient(nameInput = "", subDepartmentInput = "", geoName = "") {
  if (!canEditWorkspace()) return;
  const active = getActiveClient();
  if (!active) return;
  ensureDepartmentStructure(active);

  const name = String(nameInput || "").trim();
  const subDepartments = parseSubDepartmentsInput(subDepartmentInput);
  const selectedGeo = String(geoName || getActiveWorkspaceGeo(active)).trim();
  if (!name) {
    window.alert("Please enter a department name.");
    return;
  }
  if (!selectedGeo || selectedGeo === MAIN_GEO_KEY) {
    window.alert("Please select a Geo before adding department.");
    return null;
  }

  const duplicate = active.departmentStructure.departments.some(item => {
    const sameName = (item.name || "").toLowerCase() === name.toLowerCase();
    const sameGeo = (item.geos || []).some(geo => String(geo || "").toLowerCase() === selectedGeo.toLowerCase());
    return sameName && sameGeo;
  });
  if (duplicate) {
    window.alert(`Department already exists in ${selectedGeo}.`);
    return null;
  }

  const newDepartment = {
    id: `d_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
    name,
    subDepartments,
    geos: [selectedGeo]
  };

  active.departmentStructure.departments.push(newDepartment);
  ensureRequisitionDepartmentStates(active);
  active.activeRequisitionDepartmentId = newDepartment.id;
  active.activeWorkspaceGeo = selectedGeo;
  if (!active.activeRequisitionSubDepartmentByDepartmentId || typeof active.activeRequisitionSubDepartmentByDepartmentId !== "object") {
    active.activeRequisitionSubDepartmentByDepartmentId = {};
  }
  active.activeRequisitionSubDepartmentByDepartmentId[newDepartment.id] = MAIN_SUB_DEPARTMENT_KEY;
  active.requisitionDepartmentStates[newDepartment.id] = createPageState(BASE_FIELDS);
  ensureDefaultRequisitionCanvas(active.requisitionDepartmentStates[newDepartment.id]);
  (newDepartment.subDepartments || []).forEach(subDept => {
    const subKey = getRequisitionDepartmentStateKey(newDepartment.id, subDept);
    active.requisitionDepartmentStates[subKey] = createPageState(BASE_FIELDS);
    ensureDefaultRequisitionCanvas(active.requisitionDepartmentStates[subKey]);
  });
  ensureRequisitionApprovalByDepartment(active);
  active.requisitionApprovalByDepartment[newDepartment.id] = createDefaultRequisitionApprovalMatrix();
  ensureOfferApprovalByDepartment(active);
  active.offerApprovalByDepartment[newDepartment.id] = createDefaultOfferApprovalMatrix();
  active.activeOfferApprovalDepartmentId = newDepartment.id;
  return newDepartment;
}

function openNewDepartmentCopyModal(newDepartmentName, subDepartments = [], geoName = "") {
  const active = getActiveClient();
  if (!active || !newDeptCopyModal || !newDeptCopyFromSelect) return false;
  ensureDepartmentStructure(active);
  const departments = getDepartmentsForWorkspaceGeo(active, geoName || getActiveWorkspaceGeo(active));
  if (!departments.length) return false;

  pendingNewDepartmentName = String(newDepartmentName || "").trim();
  pendingNewDepartmentSubDepartments = Array.isArray(subDepartments) ? subDepartments : [];
  newDeptCopyFromSelect.innerHTML = "";
  departments.forEach(dept => {
    const option = document.createElement("option");
    option.value = dept.id;
    option.textContent = dept.name;
    newDeptCopyFromSelect.appendChild(option);
  });
  if (newDeptCopyFieldsCheck) newDeptCopyFieldsCheck.checked = true;
  if (newDeptCopyApprovalCheck) newDeptCopyApprovalCheck.checked = true;
  newDeptCopyModal.style.display = "block";
  return true;
}

function closeNewDepartmentCopyModal() {
  pendingNewDepartmentName = "";
  pendingNewDepartmentSubDepartments = [];
  if (newDeptCopyModal) newDeptCopyModal.style.display = "none";
}

function addDepartmentForActiveClient(nameInput = "", subDepartmentInput = "", includeSubDepartments = false) {
  if (!canEditWorkspace()) return;
  const active = getActiveClient();
  if (!active) return;
  ensureDepartmentStructure(active);

  const name = String(nameInput || "").trim();
  const subDepartments = includeSubDepartments ? parseSubDepartmentsInput(subDepartmentInput) : [];
  const workspaceGeo = getActiveWorkspaceGeo(active);
  const availableGeos = Array.isArray(active.departmentStructure?.geos) ? active.departmentStructure.geos : [];
  if (!availableGeos.length) {
    window.alert("Please add at least one Geo before creating a department.");
    return;
  }
  if (!name) {
    window.alert("Please enter a department name.");
    return;
  }
  if (includeSubDepartments && !subDepartments.length) {
    window.alert("Please enter at least one sub department name.");
    return;
  }

  const hasExistingDepartment = getDepartmentsForWorkspaceGeo(active, workspaceGeo).length > 0;
  if (hasExistingDepartment) {
    const opened = openNewDepartmentCopyModal(name, subDepartments, workspaceGeo);
    if (opened) return;
  }

  const created = createDepartmentForActiveClient(name, subDepartments.join(", "), workspaceGeo);
  if (!created) return;
  const subDeptLabel = created.subDepartments?.length ? ` | Sub Departments: ${created.subDepartments.join(", ")}` : "";
  addAuditLog(active, "Department Added", `${created.name}${subDeptLabel}`, {
    eventType: "department",
    actorRole: "client",
    actorName: active.name || "Client",
    pageKey: "requisition"
  });
  if (requisitionDeptNameInput) requisitionDeptNameInput.value = "";
  if (requisitionHasSubDeptCheck) requisitionHasSubDeptCheck.checked = false;
  if (requisitionSubDeptInput) requisitionSubDeptInput.value = "";
  toggleSubDepartmentInputVisibility(false);
  saveClients();
  renderWorkspace();
}

function confirmCreateDepartmentWithCopy() {
  if (!canEditWorkspace()) return;
  const active = getActiveClient();
  if (!active) return;

  const name = String(pendingNewDepartmentName || "").trim();
  if (!name) return;
  const workspaceGeo = getActiveWorkspaceGeo(active);
  const sourceId = (newDeptCopyFromSelect ? newDeptCopyFromSelect.value : "").trim();
  const copyFields = Boolean(newDeptCopyFieldsCheck && newDeptCopyFieldsCheck.checked);
  const copyApproval = Boolean(newDeptCopyApprovalCheck && newDeptCopyApprovalCheck.checked);

  const created = createDepartmentForActiveClient(name, (pendingNewDepartmentSubDepartments || []).join(", "), workspaceGeo);
  if (!created) {
    closeNewDepartmentCopyModal();
    return;
  }

  const subDeptLabel = created.subDepartments?.length ? ` | Sub Departments: ${created.subDepartments.join(", ")}` : "";
  addAuditLog(active, "Department Added", `${created.name}${subDeptLabel}`, {
    eventType: "department",
    actorRole: "client",
    actorName: active.name || "Client",
    pageKey: "requisition"
  });

  if (sourceId && copyFields) {
    copyRequisitionFieldsBetweenDepartments(sourceId, created.id, { skipConfirm: true });
  }
  if (sourceId && copyApproval) {
    copyRequisitionApprovalBetweenDepartments(sourceId, created.id, { skipConfirm: true });
    copyOfferApprovalBetweenDepartments(sourceId, created.id, { skipConfirm: true });
  }

  if (requisitionDeptNameInput) requisitionDeptNameInput.value = "";
  if (requisitionHasSubDeptCheck) requisitionHasSubDeptCheck.checked = false;
  if (requisitionSubDeptInput) requisitionSubDeptInput.value = "";
  toggleSubDepartmentInputVisibility(false);
  closeNewDepartmentCopyModal();
  saveClients();
  renderWorkspace();
}

function removeDepartmentForActiveClient(departmentId) {
  if (!canEditWorkspace()) return;
  const active = getActiveClient();
  if (!active || !departmentId) return;
  ensureDepartmentStructure(active);

  const departments = active.departmentStructure.departments;
  const index = departments.findIndex(item => item.id === departmentId);
  if (index === -1) return;
  const target = departments[index];
  const ok = window.confirm(`Delete department "${target.name}"?`);
  if (!ok) return;

  departments.splice(index, 1);
  ensureRequisitionDepartmentStates(active);
  ensureRequisitionApprovalByDepartment(active);
  ensureOfferApprovalByDepartment(active);
  if (active.requisitionDepartmentStates) {
    Object.keys(active.requisitionDepartmentStates).forEach(key => {
      if (key === departmentId || key.startsWith(`${departmentId}::sub::`) || key.startsWith(`${departmentId}::geo::`)) {
        delete active.requisitionDepartmentStates[key];
      }
    });
  }
  if (active.requisitionApprovalByDepartment && active.requisitionApprovalByDepartment[departmentId]) {
    delete active.requisitionApprovalByDepartment[departmentId];
  }
  if (active.offerApprovalByDepartment && active.offerApprovalByDepartment[departmentId]) {
    delete active.offerApprovalByDepartment[departmentId];
  }
  if (active.activeRequisitionSubDepartmentByDepartmentId && active.activeRequisitionSubDepartmentByDepartmentId[departmentId]) {
    delete active.activeRequisitionSubDepartmentByDepartmentId[departmentId];
  }
  if (active.activeRequisitionGeoByDepartmentSubKey && typeof active.activeRequisitionGeoByDepartmentSubKey === "object") {
    Object.keys(active.activeRequisitionGeoByDepartmentSubKey).forEach(scopeKey => {
      if (scopeKey === departmentId || scopeKey.startsWith(`${departmentId}::sub::`)) {
        delete active.activeRequisitionGeoByDepartmentSubKey[scopeKey];
      }
    });
  }
  if (active.activeRequisitionDepartmentId === departmentId) {
    active.activeRequisitionDepartmentId = departments[0] ? departments[0].id : null;
  }
  if (active.activeOfferApprovalDepartmentId === departmentId) {
    active.activeOfferApprovalDepartmentId = departments[0] ? departments[0].id : null;
  }
  addAuditLog(active, "Department Removed", target.name || "Department", {
    eventType: "department",
    actorRole: "client",
    actorName: active.name || "Client",
    pageKey: "requisition"
  });
  saveClients();
  renderWorkspace();
}

function addSubDepartmentForActiveClient(subDepartmentNameInput = "") {
  if (!canEditWorkspace()) return;
  const active = getActiveClient();
  if (!active) return;
  const departmentId = getActiveRequisitionDepartmentId(active);
  if (!departmentId) {
    window.alert("Please select a department first.");
    return;
  }
  const department = getDepartmentById(active, departmentId);
  if (!department) return;

  const subDepartmentName = String(subDepartmentNameInput || "").trim();
  if (!subDepartmentName) {
    window.alert("Please enter a sub department name.");
    return;
  }
  const exists = (department.subDepartments || []).some(item => item.toLowerCase() === subDepartmentName.toLowerCase());
  if (exists) {
    window.alert("Sub department already exists.");
    return;
  }

  if (!Array.isArray(department.subDepartments)) department.subDepartments = [];
  department.subDepartments.push(subDepartmentName);
  ensureRequisitionDepartmentStates(active);
  if (!active.activeRequisitionSubDepartmentByDepartmentId || typeof active.activeRequisitionSubDepartmentByDepartmentId !== "object") {
    active.activeRequisitionSubDepartmentByDepartmentId = {};
  }
  active.activeRequisitionSubDepartmentByDepartmentId[departmentId] = subDepartmentName;
  if (!active.activeRequisitionGeoByDepartmentSubKey || typeof active.activeRequisitionGeoByDepartmentSubKey !== "object") {
    active.activeRequisitionGeoByDepartmentSubKey = {};
  }
  const scopeKey = getRequisitionGeoScopeKey(departmentId, subDepartmentName);
  active.activeRequisitionGeoByDepartmentSubKey[scopeKey] = MAIN_GEO_KEY;
  ensureRequisitionDepartmentPageState(active, departmentId, subDepartmentName, MAIN_GEO_KEY);
  addAuditLog(active, "Sub Department Added", `${department.name} -> ${subDepartmentName}`, {
    eventType: "department",
    actorRole: currentRole || "client",
    actorName: active.name || "Client",
    pageKey: "requisition"
  });
  if (requisitionNewSubDeptInput) requisitionNewSubDeptInput.value = "";
  saveClients();
  clearSQL();
  renderWorkspace();
}

function removeSubDepartmentForActiveClient(subDepartmentNameInput = "") {
  if (!canEditWorkspace()) return;
  const active = getActiveClient();
  if (!active) return;
  const departmentId = getActiveRequisitionDepartmentId(active);
  if (!departmentId) {
    window.alert("Please select a department first.");
    return;
  }
  const department = getDepartmentById(active, departmentId);
  if (!department) return;

  const selected = String(subDepartmentNameInput || "").trim();
  if (!selected || selected === MAIN_SUB_DEPARTMENT_KEY) {
    window.alert("Please select a sub department to remove.");
    return;
  }
  const index = (department.subDepartments || []).findIndex(item => item.toLowerCase() === selected.toLowerCase());
  if (index === -1) {
    window.alert("Selected sub department was not found.");
    return;
  }
  const targetName = department.subDepartments[index];
  const ok = window.confirm(`Delete sub department "${targetName}" from "${department.name}"?`);
  if (!ok) return;

  department.subDepartments.splice(index, 1);
  const stateKey = getRequisitionDepartmentStateKey(departmentId, targetName);
  if (active.requisitionDepartmentStates && active.requisitionDepartmentStates[stateKey]) {
    delete active.requisitionDepartmentStates[stateKey];
  }
  if (active.requisitionDepartmentStates) {
    Object.keys(active.requisitionDepartmentStates).forEach(key => {
      if (key.startsWith(`${stateKey}::geo::`)) delete active.requisitionDepartmentStates[key];
    });
  }
  if (!active.activeRequisitionSubDepartmentByDepartmentId || typeof active.activeRequisitionSubDepartmentByDepartmentId !== "object") {
    active.activeRequisitionSubDepartmentByDepartmentId = {};
  }
  active.activeRequisitionSubDepartmentByDepartmentId[departmentId] = MAIN_SUB_DEPARTMENT_KEY;
  if (!active.activeRequisitionGeoByDepartmentSubKey || typeof active.activeRequisitionGeoByDepartmentSubKey !== "object") {
    active.activeRequisitionGeoByDepartmentSubKey = {};
  }
  const removedScopeKey = getRequisitionGeoScopeKey(departmentId, targetName);
  if (active.activeRequisitionGeoByDepartmentSubKey[removedScopeKey]) {
    delete active.activeRequisitionGeoByDepartmentSubKey[removedScopeKey];
  }
  addAuditLog(active, "Sub Department Removed", `${department.name} -> ${targetName}`, {
    eventType: "department",
    actorRole: currentRole || "client",
    actorName: active.name || "Client",
    pageKey: "requisition"
  });
  saveClients();
  clearSQL();
  renderWorkspace();
}

function getDepartmentStateSnapshotForGeo(client, departmentId, subDepartmentName, sourceGeo = MAIN_GEO_KEY) {
  if (!client || !departmentId) {
    const fallback = createPageState(BASE_FIELDS);
    ensureDefaultRequisitionCanvas(fallback);
    return fallback;
  }
  const candidates = [];
  if (sourceGeo && sourceGeo !== MAIN_GEO_KEY) {
    candidates.push(getRequisitionDepartmentStateKey(departmentId, subDepartmentName, sourceGeo));
  }
  candidates.push(getRequisitionDepartmentStateKey(departmentId, subDepartmentName, MAIN_GEO_KEY));
  const prefix = getRequisitionDepartmentStateKey(departmentId, subDepartmentName, "").replace(/::$/, "");
  Object.keys(client.requisitionDepartmentStates || {}).forEach(key => {
    if (key.startsWith(prefix) && !candidates.includes(key)) candidates.push(key);
  });

  const match = candidates.find(key => client.requisitionDepartmentStates && client.requisitionDepartmentStates[key]);
  if (match) return normalizePageState(deepCopy(client.requisitionDepartmentStates[match]), BASE_FIELDS);
  const fallback = createPageState(BASE_FIELDS);
  ensureDefaultRequisitionCanvas(fallback);
  return fallback;
}

function cloneDepartmentsFromGeo(client, sourceGeoName, targetGeoName) {
  if (!client || !sourceGeoName || !targetGeoName) return 0;
  ensureDepartmentStructure(client);
  ensureRequisitionDepartmentStates(client);
  ensureRequisitionApprovalByDepartment(client);
  ensureOfferApprovalByDepartment(client);

  const sourceGeo = String(sourceGeoName || "").trim();
  const targetGeo = String(targetGeoName || "").trim();
  const sourceDepartments = getDepartmentsForWorkspaceGeo(client, sourceGeo);
  if (!sourceDepartments.length) return 0;

  const targetNameSet = new Set(
    getDepartmentsForWorkspaceGeo(client, targetGeo).map(item => String(item.name || "").toLowerCase())
  );
  let clonedCount = 0;
  sourceDepartments.forEach(sourceDept => {
    const originalName = String(sourceDept.name || "").trim() || "Department";
    let nextName = originalName;
    let suffix = 1;
    while (targetNameSet.has(nextName.toLowerCase())) {
      nextName = `${originalName} (${suffix++})`;
    }
    targetNameSet.add(nextName.toLowerCase());

    const clonedDept = {
      id: `d_${Date.now()}_${Math.floor(Math.random() * 1000)}_${clonedCount + 1}`,
      name: nextName,
      subDepartments: Array.isArray(sourceDept.subDepartments) ? [...sourceDept.subDepartments] : [],
      geos: [targetGeo]
    };
    client.departmentStructure.departments.push(clonedDept);
    client.requisitionApprovalByDepartment[clonedDept.id] = deepCopy(
      client.requisitionApprovalByDepartment[sourceDept.id] || createDefaultRequisitionApprovalMatrix()
    );
    client.offerApprovalByDepartment[clonedDept.id] = deepCopy(
      client.offerApprovalByDepartment[sourceDept.id] || createDefaultOfferApprovalMatrix()
    );
    if (!client.activeRequisitionSubDepartmentByDepartmentId || typeof client.activeRequisitionSubDepartmentByDepartmentId !== "object") {
      client.activeRequisitionSubDepartmentByDepartmentId = {};
    }
    client.activeRequisitionSubDepartmentByDepartmentId[clonedDept.id] = MAIN_SUB_DEPARTMENT_KEY;

    const subOptions = [MAIN_SUB_DEPARTMENT_KEY, ...(clonedDept.subDepartments || [])];
    subOptions.forEach(subDept => {
      const sourceState = getDepartmentStateSnapshotForGeo(client, sourceDept.id, subDept, sourceGeo);
      const targetMainKey = getRequisitionDepartmentStateKey(clonedDept.id, subDept, MAIN_GEO_KEY);
      const targetGeoKey = getRequisitionDepartmentStateKey(clonedDept.id, subDept, targetGeo);
      client.requisitionDepartmentStates[targetMainKey] = normalizePageState(deepCopy(sourceState), BASE_FIELDS);
      client.requisitionDepartmentStates[targetGeoKey] = normalizePageState(deepCopy(sourceState), BASE_FIELDS);
      ensureDefaultRequisitionCanvas(client.requisitionDepartmentStates[targetMainKey]);
      ensureDefaultRequisitionCanvas(client.requisitionDepartmentStates[targetGeoKey]);
      if (!client.activeRequisitionGeoByDepartmentSubKey || typeof client.activeRequisitionGeoByDepartmentSubKey !== "object") {
        client.activeRequisitionGeoByDepartmentSubKey = {};
      }
      client.activeRequisitionGeoByDepartmentSubKey[getRequisitionGeoScopeKey(clonedDept.id, subDept)] = targetGeo;
    });

    clonedCount += 1;
  });

  if (clonedCount > 0) {
    const scoped = getDepartmentsForWorkspaceGeo(client, targetGeo);
    client.activeWorkspaceGeo = targetGeo;
    client.activeRequisitionDepartmentId = scoped[0] ? scoped[0].id : null;
    client.activeOfferApprovalDepartmentId = scoped[0] ? scoped[0].id : null;
  }
  return clonedCount;
}

function openGeoCloneModal(newGeoName, sourceGeos = []) {
  if (!geoCloneModal || !geoCloneSourceSelect) return false;
  pendingNewGeoName = String(newGeoName || "").trim();
  geoCloneSourceSelect.innerHTML = "";
  sourceGeos.forEach(geo => {
    const option = document.createElement("option");
    option.value = geo;
    option.textContent = geo;
    geoCloneSourceSelect.appendChild(option);
  });
  if (geoCloneTargetName) geoCloneTargetName.textContent = pendingNewGeoName;
  geoCloneModal.style.display = "block";
  return true;
}

function closeGeoCloneModal() {
  pendingNewGeoName = "";
  if (geoCloneModal) geoCloneModal.style.display = "none";
}

function finalizeAddGeoForActiveClient(geoNameInput = "", sourceGeoName = "") {
  if (!canEditWorkspace()) return;
  const active = getActiveClient();
  if (!active) return;
  ensureDepartmentStructure(active);

  const geoName = String(geoNameInput || "").trim();
  if (!geoName) return;
  const exists = (active.departmentStructure.geos || []).some(item => item.toLowerCase() === geoName.toLowerCase());
  if (exists) {
    window.alert("Geo already exists.");
    return;
  }
  if (!Array.isArray(active.departmentStructure.geos)) active.departmentStructure.geos = [];
  active.departmentStructure.geos.push(geoName);
  syncDepartmentGeosFromGlobal(active);
  ensurePiiGeoStates(active);
  ensureApplySourceStates(active);
  ensureRequisitionDepartmentStates(active);
  active.activeWorkspaceGeo = geoName;

  const sourceGeo = String(sourceGeoName || "").trim();
  if (sourceGeo) {
    const clonedCount = cloneDepartmentsFromGeo(active, sourceGeo, geoName);
    if (clonedCount > 0) {
      addAuditLog(active, "Geo Department Clone", `${sourceGeo} -> ${geoName} (${clonedCount} departments)`, {
        eventType: "department",
        actorRole: currentRole || "client",
        actorName: active.name || "Client",
        pageKey: "requisition"
      });
    }
  }

  const scoped = getDepartmentsForWorkspaceGeo(active, geoName);
  active.activeRequisitionDepartmentId = scoped[0] ? scoped[0].id : null;
  if (scoped[0]) {
    active.activeOfferApprovalDepartmentId = scoped[0].id;
  }
  addAuditLog(active, "Geo Added", geoName, {
    eventType: "department",
    actorRole: currentRole || "client",
    actorName: active.name || "Client",
    pageKey: "requisition"
  });
  if (requisitionNewGeoInput) requisitionNewGeoInput.value = "";
  if (requisitionNewGeoInputCreate) requisitionNewGeoInputCreate.value = "";
  saveClients();
  clearSQL();
  renderWorkspace();
}

function confirmAddGeoWithClone() {
  const sourceGeo = String(geoCloneSourceSelect ? geoCloneSourceSelect.value : "").trim();
  const geoName = String(pendingNewGeoName || "").trim();
  if (!geoName) return;
  closeGeoCloneModal();
  finalizeAddGeoForActiveClient(geoName, sourceGeo);
}

function skipAddGeoClone() {
  const geoName = String(pendingNewGeoName || "").trim();
  if (!geoName) return;
  closeGeoCloneModal();
  finalizeAddGeoForActiveClient(geoName, "");
}

function addGeoForActiveClient(geoNameInput = "") {
  if (!canEditWorkspace()) return;
  const active = getActiveClient();
  if (!active) return;
  ensureDepartmentStructure(active);

  const geoName = String(geoNameInput || "").trim();
  if (!geoName) {
    window.alert("Please enter a geo name.");
    return;
  }
  const exists = (active.departmentStructure.geos || []).some(item => item.toLowerCase() === geoName.toLowerCase());
  if (exists) {
    window.alert("Geo already exists.");
    return;
  }
  const existingGeos = Array.isArray(active.departmentStructure.geos) ? [...active.departmentStructure.geos] : [];
  if (existingGeos.length) {
    const opened = openGeoCloneModal(geoName, existingGeos);
    if (opened) return;
  }
  finalizeAddGeoForActiveClient(geoName, "");
}

function removeGeoForActiveClient(geoNameInput = "") {
  if (!canEditWorkspace()) return;
  const active = getActiveClient();
  if (!active) return;
  ensureDepartmentStructure(active);

  const selected = String(geoNameInput || "").trim();
  if (!selected || selected === MAIN_GEO_KEY) {
    window.alert("Please select a geo to remove.");
    return;
  }
  const index = (active.departmentStructure.geos || []).findIndex(item => item.toLowerCase() === selected.toLowerCase());
  if (index === -1) {
    window.alert("Selected geo was not found.");
    return;
  }
  const targetName = active.departmentStructure.geos[index];
  const ok = window.confirm(`Delete geo "${targetName}"?`);
  if (!ok) return;

  active.departmentStructure.geos.splice(index, 1);
  syncDepartmentGeosFromGlobal(active);
  ensurePiiGeoStates(active);
  ensureApplySourceStates(active);
  const removedDepartmentIds = new Set(
    (active.departmentStructure.departments || [])
      .filter(dept => !(dept.geos || []).some(geo => String(geo || "").toLowerCase() !== targetName.toLowerCase()))
      .map(dept => dept.id)
  );
  active.departmentStructure.departments = (active.departmentStructure.departments || [])
    .filter(dept => !removedDepartmentIds.has(dept.id));
  const departments = Array.isArray(active.departmentStructure?.departments) ? active.departmentStructure.departments : [];
  if (active.requisitionApprovalByDepartment && typeof active.requisitionApprovalByDepartment === "object") {
    Object.keys(active.requisitionApprovalByDepartment).forEach(deptId => {
      if (removedDepartmentIds.has(deptId)) delete active.requisitionApprovalByDepartment[deptId];
    });
  }
  if (active.offerApprovalByDepartment && typeof active.offerApprovalByDepartment === "object") {
    Object.keys(active.offerApprovalByDepartment).forEach(deptId => {
      if (removedDepartmentIds.has(deptId)) delete active.offerApprovalByDepartment[deptId];
    });
  }
  if (active.activeRequisitionSubDepartmentByDepartmentId && typeof active.activeRequisitionSubDepartmentByDepartmentId === "object") {
    Object.keys(active.activeRequisitionSubDepartmentByDepartmentId).forEach(deptId => {
      if (removedDepartmentIds.has(deptId)) delete active.activeRequisitionSubDepartmentByDepartmentId[deptId];
    });
  }
  if (active.requisitionDepartmentStates) {
    Object.keys(active.requisitionDepartmentStates).forEach(key => {
      if (String(key || "").toLowerCase().includes(`::geo::${targetName.toLowerCase()}`)) {
        delete active.requisitionDepartmentStates[key];
        return;
      }
      const rootDeptId = String(key || "").split("::")[0];
      if (removedDepartmentIds.has(rootDeptId)) {
        delete active.requisitionDepartmentStates[key];
      }
    });
  }
  if (!active.activeRequisitionGeoByDepartmentSubKey || typeof active.activeRequisitionGeoByDepartmentSubKey !== "object") {
    active.activeRequisitionGeoByDepartmentSubKey = {};
  }
  Object.keys(active.activeRequisitionGeoByDepartmentSubKey).forEach(scopeKey => {
    const selectedGeo = active.activeRequisitionGeoByDepartmentSubKey[scopeKey];
    if (String(selectedGeo || "").toLowerCase() === targetName.toLowerCase()) {
      const deptId = String(scopeKey || "").split("::")[0];
      const dept = getDepartmentById(active, deptId);
      const fallbackGeo = (dept && Array.isArray(dept.geos) && dept.geos[0]) ? dept.geos[0] : MAIN_GEO_KEY;
      active.activeRequisitionGeoByDepartmentSubKey[scopeKey] = fallbackGeo;
    }
  });
  active.activeWorkspaceGeo = getActiveWorkspaceGeo(active);
  const scoped = getDepartmentsForWorkspaceGeo(active, active.activeWorkspaceGeo);
  if (!scoped.some(item => item.id === active.activeRequisitionDepartmentId)) {
    active.activeRequisitionDepartmentId = scoped[0] ? scoped[0].id : null;
  }
  if (!departments.some(item => item.id === active.activeOfferApprovalDepartmentId)) {
    active.activeOfferApprovalDepartmentId = departments[0] ? departments[0].id : null;
  }

  addAuditLog(active, "Geo Removed", targetName, {
    eventType: "department",
    actorRole: currentRole || "client",
    actorName: active.name || "Client",
    pageKey: "requisition"
  });
  saveClients();
  clearSQL();
  renderWorkspace();
}

function addRequisitionApprovalRow(afterIndex = null) {
  if (!canEditWorkspace()) return;
  const active = getActiveClient();
  if (!active) return;
  ensureRequisitionApprovalByDepartment(active);
  const activeDeptId = getActiveRequisitionDepartmentId(active);
  if (!activeDeptId) return;
  const rows = Array.isArray(active.requisitionApprovalByDepartment[activeDeptId]) ? active.requisitionApprovalByDepartment[activeDeptId] : [];
  const nextLevel = `L${rows.length + 1}`;
  const newRow = createBlankRequisitionApprovalRow(nextLevel);

  if (!Array.isArray(active.requisitionApprovalByDepartment[activeDeptId])) active.requisitionApprovalByDepartment[activeDeptId] = [];
  const index = Number(afterIndex);
  if (Number.isInteger(index) && index >= 0 && index < active.requisitionApprovalByDepartment[activeDeptId].length) {
    active.requisitionApprovalByDepartment[activeDeptId].splice(index + 1, 0, newRow);
  } else {
    active.requisitionApprovalByDepartment[activeDeptId].push(newRow);
  }

  const activeDeptName = (active.departmentStructure?.departments || []).find(item => item.id === activeDeptId)?.name || "Department";
  addAuditLog(active, "Requisition Approval Row Added", `${activeDeptName} - ${newRow.level}`, {
    eventType: "field",
    actorRole: "client",
    actorName: active.name || "Client",
    pageKey: "requisition"
  });
  saveClients();
  renderRequisitionApprovalMatrix();
}

function removeRequisitionApprovalRow(rowIndex) {
  if (!canEditWorkspace()) return;
  const active = getActiveClient();
  if (!active) return;
  ensureRequisitionApprovalByDepartment(active);
  const activeDeptId = getActiveRequisitionDepartmentId(active);
  if (!activeDeptId || !Array.isArray(active.requisitionApprovalByDepartment[activeDeptId])) return;
  const index = Number(rowIndex);
  if (!Number.isInteger(index) || index < 0 || index >= active.requisitionApprovalByDepartment[activeDeptId].length) return;
  if (active.requisitionApprovalByDepartment[activeDeptId].length <= 1) {
    window.alert("At least one approval row is required.");
    return;
  }

  const target = active.requisitionApprovalByDepartment[activeDeptId][index];
  const ok = window.confirm(`Delete requisition approval row ${target.level || index + 1}?`);
  if (!ok) return;
  active.requisitionApprovalByDepartment[activeDeptId].splice(index, 1);
  const activeDeptName = (active.departmentStructure?.departments || []).find(item => item.id === activeDeptId)?.name || "Department";
  addAuditLog(active, "Requisition Approval Row Removed", `${activeDeptName} - ${target.level || index + 1}`, {
    eventType: "field",
    actorRole: "client",
    actorName: active.name || "Client",
    pageKey: "requisition"
  });
  saveClients();
  renderRequisitionApprovalMatrix();
}

function updateRequisitionApprovalRowField(rowIndex, key, value) {
  if (!canEditWorkspace()) return;
  const active = getActiveClient();
  if (!active) return;
  ensureRequisitionApprovalByDepartment(active);
  const activeDeptId = getActiveRequisitionDepartmentId(active);
  if (!activeDeptId || !Array.isArray(active.requisitionApprovalByDepartment[activeDeptId])) return;
  const index = Number(rowIndex);
  if (!Number.isInteger(index) || index < 0 || index >= active.requisitionApprovalByDepartment[activeDeptId].length) return;
  if (!["level", "approver", "condition", "delegateTo"].includes(key)) return;

  active.requisitionApprovalByDepartment[activeDeptId][index][key] = String(value || "");
  const activeDeptName = (active.departmentStructure?.departments || []).find(item => item.id === activeDeptId)?.name || "Department";
  addAuditLog(active, "Requisition Approval Updated", `${activeDeptName} - ${active.requisitionApprovalByDepartment[activeDeptId][index].level || index + 1} - ${key}`, {
    eventType: "field",
    actorRole: "client",
    actorName: active.name || "Client",
    pageKey: "requisition"
  });
  saveClients();
}

function addOfferApprovalRow(afterIndex = null) {
  if (!canEditWorkspace()) return;
  const active = getActiveClient();
  if (!active) return;
  ensureOfferApprovalByDepartment(active);
  const activeDeptId = getActiveOfferApprovalDepartmentId(active);
  if (!activeDeptId) return;
  const rows = Array.isArray(active.offerApprovalByDepartment[activeDeptId]) ? active.offerApprovalByDepartment[activeDeptId] : [];
  const nextLevel = `L${rows.length + 1}`;
  const newRow = createBlankOfferApprovalRow(nextLevel);

  if (!Array.isArray(active.offerApprovalByDepartment[activeDeptId])) active.offerApprovalByDepartment[activeDeptId] = [];
  const index = Number(afterIndex);
  if (Number.isInteger(index) && index >= 0 && index < active.offerApprovalByDepartment[activeDeptId].length) {
    active.offerApprovalByDepartment[activeDeptId].splice(index + 1, 0, newRow);
  } else {
    active.offerApprovalByDepartment[activeDeptId].push(newRow);
  }

  const activeDeptName = (active.departmentStructure?.departments || []).find(item => item.id === activeDeptId)?.name || "Department";
  addAuditLog(active, "Offer Approval Row Added", `${activeDeptName} - ${newRow.level}`, {
    eventType: "field",
    actorRole: "client",
    actorName: active.name || "Client",
    pageKey: "offer"
  });
  saveClients();
  renderOfferApprovalMatrix();
}

function removeOfferApprovalRow(rowIndex) {
  if (!canEditWorkspace()) return;
  const active = getActiveClient();
  if (!active) return;
  ensureOfferApprovalByDepartment(active);
  const activeDeptId = getActiveOfferApprovalDepartmentId(active);
  if (!activeDeptId || !Array.isArray(active.offerApprovalByDepartment[activeDeptId])) return;
  const index = Number(rowIndex);
  if (!Number.isInteger(index) || index < 0 || index >= active.offerApprovalByDepartment[activeDeptId].length) return;
  if (active.offerApprovalByDepartment[activeDeptId].length <= 1) {
    window.alert("At least one approval row is required.");
    return;
  }

  const target = active.offerApprovalByDepartment[activeDeptId][index];
  const ok = window.confirm(`Delete offer approval row ${target.level || index + 1}?`);
  if (!ok) return;
  active.offerApprovalByDepartment[activeDeptId].splice(index, 1);
  const activeDeptName = (active.departmentStructure?.departments || []).find(item => item.id === activeDeptId)?.name || "Department";
  addAuditLog(active, "Offer Approval Row Removed", `${activeDeptName} - ${target.level || index + 1}`, {
    eventType: "field",
    actorRole: "client",
    actorName: active.name || "Client",
    pageKey: "offer"
  });
  saveClients();
  renderOfferApprovalMatrix();
}

function updateOfferApprovalRowField(rowIndex, key, value) {
  if (!canEditWorkspace()) return;
  const active = getActiveClient();
  if (!active) return;
  ensureOfferApprovalByDepartment(active);
  const activeDeptId = getActiveOfferApprovalDepartmentId(active);
  if (!activeDeptId || !Array.isArray(active.offerApprovalByDepartment[activeDeptId])) return;
  const index = Number(rowIndex);
  if (!Number.isInteger(index) || index < 0 || index >= active.offerApprovalByDepartment[activeDeptId].length) return;
  if (!["level", "approver", "condition", "delegateTo"].includes(key)) return;

  active.offerApprovalByDepartment[activeDeptId][index][key] = String(value || "");
  const activeDeptName = (active.departmentStructure?.departments || []).find(item => item.id === activeDeptId)?.name || "Department";
  addAuditLog(active, "Offer Approval Updated", `${activeDeptName} - ${active.offerApprovalByDepartment[activeDeptId][index].level || index + 1} - ${key}`, {
    eventType: "field",
    actorRole: "client",
    actorName: active.name || "Client",
    pageKey: "offer"
  });
  saveClients();
}

function formatChatTimestamp(isoValue) {
  const date = new Date(isoValue);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleString();
}

function formatFileSize(bytes) {
  const value = Number(bytes || 0);
  if (!value) return "0 B";
  if (value < 1024) return `${value} B`;
  if (value < 1024 * 1024) return `${(value / 1024).toFixed(1)} KB`;
  return `${(value / (1024 * 1024)).toFixed(2)} MB`;
}

function canUseSowBinaryStore() {
  return typeof window !== "undefined" && typeof window.indexedDB !== "undefined";
}

function openSowBinaryDb() {
  if (!canUseSowBinaryStore()) return Promise.resolve(null);
  if (sowBinaryDbPromise) return sowBinaryDbPromise;
  sowBinaryDbPromise = new Promise(resolve => {
    let request;
    try {
      request = window.indexedDB.open(SOW_BINARY_DB_NAME, SOW_BINARY_DB_VERSION);
    } catch (error) {
      resolve(null);
      return;
    }
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(SOW_BINARY_STORE)) {
        db.createObjectStore(SOW_BINARY_STORE, { keyPath: "clientId" });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => resolve(null);
    request.onblocked = () => resolve(null);
  });
  return sowBinaryDbPromise;
}

async function putSowBinaryForClient(clientId, sowDoc) {
  const id = String(clientId || "").trim();
  const doc = normalizeClientSowDocument(sowDoc);
  const dataUrl = doc ? String(doc.dataUrl || "").trim() : "";
  if (!id || !doc || !dataUrl) return false;
  const db = await openSowBinaryDb();
  if (!db) return false;
  return new Promise(resolve => {
    let settled = false;
    const done = value => {
      if (settled) return;
      settled = true;
      resolve(value);
    };
    let tx;
    try {
      tx = db.transaction(SOW_BINARY_STORE, "readwrite");
      const store = tx.objectStore(SOW_BINARY_STORE);
      const req = store.put({
        clientId: id,
        dataUrl,
        name: doc.name,
        type: doc.type,
        size: doc.size,
        uploadedAt: doc.uploadedAt,
        updatedAt: Date.now()
      });
      req.onsuccess = () => done(true);
      req.onerror = () => done(false);
      tx.onabort = () => done(false);
      tx.onerror = () => done(false);
    } catch (error) {
      done(false);
    }
  });
}

async function getSowBinaryForClient(clientId) {
  const id = String(clientId || "").trim();
  if (!id) return null;
  const db = await openSowBinaryDb();
  if (!db) return null;
  return new Promise(resolve => {
    let settled = false;
    const done = value => {
      if (settled) return;
      settled = true;
      resolve(value);
    };
    let tx;
    try {
      tx = db.transaction(SOW_BINARY_STORE, "readonly");
      const store = tx.objectStore(SOW_BINARY_STORE);
      const req = store.get(id);
      req.onsuccess = () => done(req.result || null);
      req.onerror = () => done(null);
      tx.onabort = () => done(null);
      tx.onerror = () => done(null);
    } catch (error) {
      done(null);
    }
  });
}

async function hasSowBinaryForClient(clientId) {
  const record = await getSowBinaryForClient(clientId);
  return Boolean(record && String(record.dataUrl || "").trim());
}

async function deleteSowBinaryForClient(clientId) {
  const id = String(clientId || "").trim();
  if (!id) return false;
  const db = await openSowBinaryDb();
  if (!db) return false;
  return new Promise(resolve => {
    let settled = false;
    const done = value => {
      if (settled) return;
      settled = true;
      resolve(value);
    };
    let tx;
    try {
      tx = db.transaction(SOW_BINARY_STORE, "readwrite");
      const store = tx.objectStore(SOW_BINARY_STORE);
      const req = store.delete(id);
      req.onsuccess = () => done(true);
      req.onerror = () => done(false);
      tx.onabort = () => done(false);
      tx.onerror = () => done(false);
    } catch (error) {
      done(false);
    }
  });
}

function stripSowDocumentBinary(sowDoc) {
  const normalized = normalizeClientSowDocument(sowDoc);
  if (!normalized) return null;
  return {
    ...normalized,
    dataUrl: ""
  };
}

async function persistSowDocumentForClient(clientId, sowDoc) {
  const normalized = normalizeClientSowDocument(sowDoc);
  if (!normalized) {
    await deleteSowBinaryForClient(clientId);
    return null;
  }
  const hasInlineData = Boolean(String(normalized.dataUrl || "").trim());
  if (hasInlineData) {
    if (!canUseSowBinaryStore()) return normalized;
    const stored = await putSowBinaryForClient(clientId, normalized);
    if (!stored) return normalized;
  }
  return hasInlineData ? stripSowDocumentBinary(normalized) : normalized;
}

async function resolveSowDataUrlForClient(client) {
  const active = client && typeof client === "object" ? client : null;
  if (!active) return "";
  const sow = normalizeClientSowDocument(active.sowDocument);
  if (!sow) return "";
  if (sow.dataUrl) return sow.dataUrl;
  const stored = await getSowBinaryForClient(active.id);
  return stored && typeof stored.dataUrl === "string" ? String(stored.dataUrl).trim() : "";
}

async function migrateLegacySowDocumentsToBinaryStore() {
  if (!canUseSowBinaryStore()) return;
  if (!Array.isArray(clients) || !clients.length) return;
  let changed = false;
  for (let index = 0; index < clients.length; index += 1) {
    const client = clients[index];
    const sow = normalizeClientSowDocument(client && client.sowDocument);
    if (!client || !sow || !sow.dataUrl) continue;
    const stored = await putSowBinaryForClient(client.id, sow);
    if (!stored) continue;
    client.sowDocument = stripSowDocumentBinary(sow);
    changed = true;
  }
  if (changed) {
    saveClients();
    renderAdminSowPanel();
  }
}

function normalizeClientSowHistoryEntry(value) {
  if (!value || typeof value !== "object") return null;
  const name = String(value.name || "").trim();
  if (!name) return null;
  const size = Number(value.size || 0);
  return {
    name,
    size: Number.isFinite(size) && size > 0 ? size : 0,
    type: String(value.type || "").trim(),
    uploadedAt: String(value.uploadedAt || "").trim(),
    section: String(value.section || "").trim(),
    remark: String(value.remark || "").trim()
  };
}

function normalizeClientSowHistory(list) {
  if (!Array.isArray(list)) return [];
  return list.map(item => normalizeClientSowHistoryEntry(item)).filter(Boolean);
}

function createSowHistoryEntryFromDocument(sowDoc) {
  const sow = normalizeClientSowDocument(sowDoc);
  if (!sow) return null;
  return normalizeClientSowHistoryEntry({
    name: sow.name,
    size: sow.size,
    type: sow.type,
    uploadedAt: sow.uploadedAt,
    section: sow.section,
    remark: sow.remark
  });
}

function addSowHistoryEntry(client, sowDoc) {
  if (!client) return;
  client.sowVersionHistory = normalizeClientSowHistory(client.sowVersionHistory);
  const entry = createSowHistoryEntryFromDocument(sowDoc);
  if (!entry) return;
  client.sowVersionHistory.unshift(entry);
}

function renderAdminSowHistory(client) {
  if (!adminSowHistoryList || !adminSowHistoryCount) return;
  const active = client && typeof client === "object" ? client : null;
  const history = active ? normalizeClientSowHistory(active.sowVersionHistory) : [];
  adminSowHistoryCount.textContent = String(history.length);
  if (adminSowHistorySort) adminSowHistorySort.disabled = history.length <= 1;
  if (!history.length && adminSowHistoryDetails) adminSowHistoryDetails.open = false;
  if (!history.length) {
    adminSowHistoryList.innerHTML = '<p class="empty-state">No SoW versions yet.</p>';
    return;
  }
  const order = adminSowHistorySort ? String(adminSowHistorySort.value || "newest") : "newest";
  const items = history.map((entry, index) => ({
    entry,
    versionNumber: history.length - index
  }));
  const ordered = order === "oldest"
    ? [...items].sort((a, b) => a.versionNumber - b.versionNumber)
    : [...items].sort((a, b) => b.versionNumber - a.versionNumber);
  adminSowHistoryList.innerHTML = ordered.map(item => {
    const entry = item.entry;
    const version = `v${item.versionNumber}`;
    const uploadedText = entry.uploadedAt ? escapeHtml(entry.uploadedAt) : "NA";
    const sectionText = entry.section ? escapeHtml(getPageLabel(entry.section)) : "NA";
    const sizeText = entry.size ? escapeHtml(formatFileSize(entry.size)) : "0 B";
    const remarkText = entry.remark ? escapeHtml(entry.remark) : "NA";
    return `
      <details class="sow-history-item">
        <summary class="sow-history-item-summary">
          <span class="sow-history-item-title">${version} | ${escapeHtml(entry.name)}</span>
          <span class="sow-history-item-date">${uploadedText}</span>
        </summary>
        <div class="sow-history-item-body">
          <p class="sow-history-meta"><strong>Section:</strong> ${sectionText}</p>
          <p class="sow-history-meta"><strong>Remark:</strong> ${remarkText}</p>
          <p class="sow-history-meta"><strong>Size:</strong> ${sizeText}</p>
        </div>
      </details>
    `;
  }).join("");
}

function normalizeClientSowDocument(value) {
  if (!value || typeof value !== "object") return null;
  const name = String(value.name || "").trim();
  if (!name) return null;
  const size = Number(value.size || 0);
  const dataUrl = String(value.dataUrl || "").trim();
  return {
    name,
    size: Number.isFinite(size) && size > 0 ? size : 0,
    type: String(value.type || "").trim(),
    uploadedAt: String(value.uploadedAt || "").trim(),
    section: String(value.section || "").trim(),
    remark: String(value.remark || "").trim(),
    dataUrl: dataUrl || ""
  };
}

async function createClientSowDocumentFromFile(file, options = {}) {
  if (!file) return null;
  if (Number(file.size || 0) > SOW_MAX_FILE_BYTES) {
    window.alert(`SoW file is too large. Maximum allowed is ${formatFileSize(SOW_MAX_FILE_BYTES)}.`);
    return null;
  }
  let dataUrl = "";
  try {
    const encoded = await readFileAsDataUrl(file);
    dataUrl = typeof encoded === "string" ? encoded : "";
  } catch (error) {
    window.alert("Unable to read SoW file. Please try again.");
    return null;
  }
  const section = String(options.section || "").trim();
  const remark = String(options.remark || "").trim();
  return normalizeClientSowDocument({
    name: file.name || "SoW",
    size: Number(file.size || 0),
    type: file.type || "",
    uploadedAt: new Date().toLocaleString(),
    section,
    remark,
    dataUrl
  });
}

function renderClientSowMeta() {
  if (!clientSowMeta) return;
  const sow = normalizeClientSowDocument(pendingClientSowDocument);
  if (!sow) {
    clientSowMeta.textContent = "No SoW uploaded.";
    return;
  }
  const bits = [sow.name];
  if (sow.size) bits.push(formatFileSize(sow.size));
  if (sow.uploadedAt) bits.push(`uploaded ${sow.uploadedAt}`);
  if (sow.section) bits.push(getPageLabel(sow.section));
  if (sow.remark) bits.push(`remark: ${sow.remark}`);
  clientSowMeta.textContent = `SoW: ${bits.join(" | ")}`;
}

function normalizeChatFaqText(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

function buildChatFaqListMessage() {
  const lines = ["FAQ Library (type question, /faq 1, /faq 2, etc.):"];
  CHAT_FAQ_LIBRARY.forEach((item, index) => {
    lines.push(`${index + 1}. ${item.question}`);
  });
  lines.push("Tip: You can also ask naturally, for example: how do I upload SoW?");
  return lines.join("\n");
}

function matchChatFaqQuestion(messageText) {
  const normalized = normalizeChatFaqText(messageText);
  if (!normalized) return null;
  const numberMatch = normalized.match(/^\/?faq\s*(\d+)$/);
  if (numberMatch) {
    const idx = Number(numberMatch[1]) - 1;
    return Number.isInteger(idx) && idx >= 0 && idx < CHAT_FAQ_LIBRARY.length ? CHAT_FAQ_LIBRARY[idx] : null;
  }

  let best = null;
  let bestScore = 0;
  CHAT_FAQ_LIBRARY.forEach(item => {
    let score = 0;
    const questionText = normalizeChatFaqText(item.question);
    if (normalized === questionText) score += 12;
    if (normalized.includes(questionText)) score += 8;
    (item.keywords || []).forEach(keyword => {
      const keyText = normalizeChatFaqText(keyword);
      if (!keyText) return;
      if (normalized.includes(keyText)) score += 3;
    });
    if (score > bestScore) {
      bestScore = score;
      best = item;
    }
  });
  return bestScore > 0 ? best : null;
}

function getChatFaqResponse(messageText) {
  const normalized = normalizeChatFaqText(messageText);
  if (!normalized) return null;
  const faqListAliases = new Set(["faq", "/faq", "help", "/help", "faq list", "show faq", "show faqs", "help menu"]);
  if (faqListAliases.has(normalized)) return buildChatFaqListMessage();

  const faqItem = matchChatFaqQuestion(normalized);
  if (faqItem) {
    return `${faqItem.question}\n${faqItem.answer}\nNeed more topics? Type /faq`;
  }

  return null;
}

function pushChatBotMessage(client, text) {
  if (!client) return;
  const value = String(text || "").trim();
  if (!value) return;
  if (!Array.isArray(client.chatMessages)) client.chatMessages = [];
  client.chatMessages.push({
    id: `m_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
    text: value,
    senderRole: "system",
    senderName: "FAQ Bot",
    createdAt: new Date().toISOString(),
    attachment: null
  });
}

function sendChatFaqLibraryMessage() {
  const active = getActiveClient();
  if (!active) return;
  pushChatBotMessage(active, buildChatFaqListMessage());
  saveClients();
  if (isChatPopupOpen) markChatRead(active);
  renderChatPanel();
}

function clearPendingChatAttachment() {
  pendingChatAttachment = null;
  if (chatFileInput) chatFileInput.value = "";
  if (chatAttachmentMeta) {
    chatAttachmentMeta.textContent = "";
    chatAttachmentMeta.classList.add("hidden");
  }
}

function renderPendingChatAttachment() {
  if (!chatAttachmentMeta) return;
  if (!pendingChatAttachment) {
    chatAttachmentMeta.textContent = "";
    chatAttachmentMeta.classList.add("hidden");
    return;
  }
  chatAttachmentMeta.classList.remove("hidden");
  chatAttachmentMeta.innerHTML = `
    <span>Attached: ${escapeHtml(pendingChatAttachment.name)} (${formatFileSize(pendingChatAttachment.size)})</span>
    <button id="clearChatAttachmentBtn" class="btn btn-ghost" type="button">Remove</button>
  `;
  const clearBtn = document.getElementById("clearChatAttachmentBtn");
  if (clearBtn) clearBtn.onclick = () => clearPendingChatAttachment();
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error("file_read_error"));
    reader.readAsDataURL(file);
  });
}

async function handleChatFileSelected() {
  const file = chatFileInput && chatFileInput.files ? chatFileInput.files[0] : null;
  if (!file) return;
  if (file.size > CHAT_MAX_FILE_BYTES) {
    window.alert(`File is too large. Maximum allowed is ${formatFileSize(CHAT_MAX_FILE_BYTES)}.`);
    clearPendingChatAttachment();
    return;
  }
  pendingChatAttachment = {
    name: file.name || "attachment",
    type: file.type || "application/octet-stream",
    size: file.size || 0,
    file
  };
  renderPendingChatAttachment();
}

function getUnreadChatCount(client) {
  if (!client || !currentRole) return 0;
  const messages = Array.isArray(client.chatMessages) ? client.chatMessages : [];
  const markerValue = client.chatLastRead && client.chatLastRead[currentRole]
    ? new Date(client.chatLastRead[currentRole]).getTime()
    : 0;
  return messages.filter(message => {
    if (!message || message.senderRole === currentRole || message.senderRole === "system") return false;
    const created = new Date(message.createdAt || 0).getTime();
    return Number.isFinite(created) && created > markerValue;
  }).length;
}

function markChatRead(client) {
  if (!client || !currentRole) return;
  const unread = getUnreadChatCount(client);
  if (unread <= 0) return;
  client.chatLastRead = client.chatLastRead && typeof client.chatLastRead === "object"
    ? client.chatLastRead
    : { admin: null, client: null };
  client.chatLastRead[currentRole] = new Date().toISOString();
  saveClients();
}

function setChatPopupOpen(open) {
  isChatPopupOpen = Boolean(open);
  if (chatPopup) chatPopup.classList.toggle("hidden", !isChatPopupOpen);
  if (chatLauncherBtn) chatLauncherBtn.classList.toggle("active", isChatPopupOpen);
  const active = getActiveClient();
  if (isChatPopupOpen && active) markChatRead(active);
  renderChatPanel();
  if (isChatPopupOpen && chatMessageInput) chatMessageInput.focus();
}

function renderChatPanel() {
  const active = getActiveClient();
  if (!chatList) return;

  if (!active) {
    chatList.innerHTML = '<p class="empty-state">Open a client workspace to view chat.</p>';
    if (chatPanelTitle) chatPanelTitle.textContent = "Client Communication";
    if (chatCount) chatCount.textContent = "0";
    if (chatMessageInput) chatMessageInput.disabled = true;
    if (sendChatBtn) sendChatBtn.disabled = true;
    if (chatAttachBtn) chatAttachBtn.disabled = true;
    if (chatFaqBtn) chatFaqBtn.disabled = true;
    if (chatLauncherBtn) chatLauncherBtn.disabled = true;
    if (chatUnreadCount) {
      chatUnreadCount.textContent = "0";
      chatUnreadCount.classList.add("hidden");
    }
    isChatPopupOpen = false;
    if (chatPopup) chatPopup.classList.add("hidden");
    return;
  }

  const messages = Array.isArray(active.chatMessages) ? active.chatMessages : [];
  const displayName = isAdmin() ? "Admin" : (active.name || "Client");
  if (chatPanelTitle) chatPanelTitle.textContent = `${active.name} Communication`;
  if (chatCount) chatCount.textContent = String(messages.length);
  if (chatMessageInput) {
    chatMessageInput.disabled = false;
    chatMessageInput.placeholder = `Message as ${displayName} (type /faq for help)`;
  }
  if (sendChatBtn) sendChatBtn.disabled = false;
  if (chatAttachBtn) chatAttachBtn.disabled = false;
  if (chatFaqBtn) chatFaqBtn.disabled = false;
  if (chatLauncherBtn) chatLauncherBtn.disabled = false;

  const unread = getUnreadChatCount(active);
  if (chatUnreadCount) {
    chatUnreadCount.textContent = String(unread);
    chatUnreadCount.classList.toggle("hidden", unread <= 0 || isChatPopupOpen);
  }
  if (isChatPopupOpen) markChatRead(active);

  chatList.innerHTML = "";
  if (!messages.length) {
    chatList.innerHTML = '<p class="empty-state">No messages yet. Start the conversation or type /faq for help.</p>';
    return;
  }

  messages.forEach(message => {
    const item = document.createElement("article");
    const isBot = message.senderRole === "system";
    const mine = !isBot && message.senderRole === currentRole;
    const attachment = message.attachment || null;
    const attachmentMarkup = attachment
      ? `
      <a class="chat-attachment" href="${escapeHtml(attachment.dataUrl || "#")}" download="${escapeHtml(attachment.name || "attachment")}">
        <span class="chat-attachment-name">${escapeHtml(attachment.name || "attachment")}</span>
        <span class="chat-attachment-size">${formatFileSize(attachment.size || 0)}</span>
      </a>
      `
      : "";
    const senderLabel = mine
      ? "You"
      : (isBot ? "FAQ Bot" : (message.senderName || (message.senderRole === "admin" ? "Admin" : "Client")));
    item.className = `chat-item ${mine ? "mine" : "other"}${isBot ? " bot" : ""}`;
    item.innerHTML = `
      <div class="chat-meta">
        <strong>${escapeHtml(senderLabel)}</strong>
        <span>${formatChatTimestamp(message.createdAt)}</span>
      </div>
      ${message.text ? `<p>${escapeHtml(message.text || "")}</p>` : ""}
      ${attachmentMarkup}
    `;
    chatList.appendChild(item);
  });

  chatList.scrollTop = chatList.scrollHeight;
}

async function sendChatMessage() {
  const active = getActiveClient();
  if (!active || !chatMessageInput) return;
  const text = (chatMessageInput.value || "").trim();
  const hasAttachment = Boolean(pendingChatAttachment);
  if (!text && !hasAttachment) return;

  if (!Array.isArray(active.chatMessages)) active.chatMessages = [];
  let attachmentPayload = null;
  if (hasAttachment && pendingChatAttachment) {
    try {
      const dataUrl = await readFileAsDataUrl(pendingChatAttachment.file);
      attachmentPayload = {
        name: pendingChatAttachment.name,
        type: pendingChatAttachment.type,
        size: pendingChatAttachment.size,
        dataUrl
      };
    } catch (error) {
      window.alert("Unable to attach file. Please try again.");
      return;
    }
  }

  active.chatMessages.push({
    id: `m_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
    text,
    senderRole: currentRole,
    senderName: isAdmin() ? "Admin" : (active.name || active.loginEmail || "Client"),
    createdAt: new Date().toISOString(),
    attachment: attachmentPayload
  });
  const faqReply = attachmentPayload ? null : getChatFaqResponse(text);
  if (faqReply) pushChatBotMessage(active, faqReply);

  const chatAuditLabelParts = [];
  if (text) chatAuditLabelParts.push(text.length > 48 ? `${text.slice(0, 48)}...` : text);
  if (attachmentPayload) chatAuditLabelParts.push(`Attachment: ${attachmentPayload.name}`);
  addAuditLog(active, "Chat Message Sent", chatAuditLabelParts.join(" | ") || "Chat message", {
    eventType: "chat",
    actorRole: currentRole || "system",
    actorName: isAdmin() ? "Admin" : (active.name || "Client"),
    pageKey: getActivePageKey()
  });

  chatMessageInput.value = "";
  clearPendingChatAttachment();
  saveClients();
  if (isChatPopupOpen) markChatRead(active);
  renderChatPanel();
}

function generateSQL() {
  if (!isAdmin()) return;
  const active = getActiveClient();
  if (!active || !sqlCanvas) return;

  const companyIdInput = window.prompt("Enter company_id for SQL generation:", "17331");
  if (companyIdInput === null) return;
  const departmentIdInput = window.prompt("Enter department_id for SQL generation:", "82014451");
  if (departmentIdInput === null) return;
  const companyId = String(companyIdInput || "").trim();
  const departmentId = String(departmentIdInput || "").trim();
  if (!/^\d+$/.test(companyId) || !/^\d+$/.test(departmentId)) {
    window.alert("Please enter valid numeric company_id and department_id.");
    return;
  }
  const sqlIdPrefix = `${companyId}${departmentId}`;

  const visibleFields = getVisibleCanvasFields(active);

  const fieldTypeMap = {
    text: "T",
    textarea: "TA",
    number: "N",
    email: "E",
    date: "D",
    time: "TM",
    "datetime-local": "DT",
    tel: "PH",
    url: "URL",
    file: "F",
    dropdown: "DD"
  };
  let sql = "";

  visibleFields.forEach((field, index) => {
    const normalizedType = normalizeFieldType(field.type);
    const fieldType = fieldTypeMap[normalizedType] || "T";
    const options = normalizedType === "dropdown" && field.options.length ? `'${field.options.join(",")}'` : "NULL";
    const mandatory = field.validation?.required ? "Y" : "N";

    const sqlId = `${sqlIdPrefix}${index + 1}`;
    sql += `INSERT INTO c3_requisition_fields\n(id,company_id,department_id,requisition_level,requisitionSubLevel,field_name,field_type,field_options,is_mandatory,field_order,status,is_visible_by_default,modified_by_user_id,is_csv_field,modified_date,fixed_field_name,isEditable,sorting_type,dependent_field_options,dependent_fields,lastUpdatedTime)\nVALUES\n(${sqlId},${companyId},${departmentId},'0',NULL,'${field.label}','${fieldType}',${options},'${mandatory}',${index + 1},1,'Y',NULL,0,NOW(),NULL,1,NULL,NULL,NULL,NOW());\n\n`;
  });

  sqlCanvas.value = sql;
}

function clearSQL() {
  if (sqlCanvas) sqlCanvas.value = "";
}

function getSafeFileNameSeed(value, fallback = "client") {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "") || fallback;
}

function exportRequisitionWorkbook() {
  if (!canManageClients()) return;
  const active = getActiveClient();
  if (!active) return;
  if (typeof XLSX === "undefined") {
    window.alert("Spreadsheet library is not loaded.");
    return;
  }

  ensureDepartmentStructure(active);
  ensureRequisitionDepartmentStates(active);
  const departments = Array.isArray(active.departmentStructure?.departments) ? active.departmentStructure.departments : [];
  if (!departments.length) {
    window.alert("No departments available to export.");
    return;
  }

  const departmentRows = [];
  const fieldRowsByDepartment = new Map();

  departments.forEach(dept => {
    const subOptions = [MAIN_SUB_DEPARTMENT_KEY, ...(dept.subDepartments || [])];
    const geoOptions = [MAIN_GEO_KEY, ...(dept.geos || [])];
    subOptions.forEach(subDept => {
      geoOptions.forEach(geo => {
        const state = getRequisitionDepartmentPageState(active, dept.id, subDept, geo);
        const fields = Array.isArray(state?.canvasFields) && state.canvasFields.length
          ? state.canvasFields
          : (Array.isArray(state?.submittedCanvasFields) ? state.submittedCanvasFields : []);
        const subLabel = subDept === MAIN_SUB_DEPARTMENT_KEY ? "Main Department" : subDept;
        const geoLabel = geo === MAIN_GEO_KEY ? "All Geos" : geo;
        const comboLabel = `${dept.name} | ${subLabel} | ${geoLabel}`;

        departmentRows.push({
          department_id: dept.id,
          department_name: dept.name,
          sub_department: subLabel,
          geo: geoLabel,
          combination: comboLabel,
          fields_count: fields.length
        });

        if (!fieldRowsByDepartment.has(dept.id)) fieldRowsByDepartment.set(dept.id, []);
        const deptRows = fieldRowsByDepartment.get(dept.id);
        fields.forEach((field, index) => {
          deptRows.push({
            department_id: dept.id,
            department_name: dept.name,
            sub_department: subLabel,
            geo: geoLabel,
            combination: comboLabel,
            field_order: index + 1,
            field_id: field.id || "",
            field_label: field.label || "",
            field_type: field.type || "text",
            is_mandatory: field.validation?.required ? "Y" : "N",
            options: Array.isArray(field.options) && field.options.length ? field.options.join(", ") : "",
            fixed: field.fixed ? "Y" : "N"
          });
        });
      });
    });
  });

  const workbook = XLSX.utils.book_new();
  const deptSheet = XLSX.utils.json_to_sheet(departmentRows.length ? departmentRows : [{
    department_id: "",
    department_name: "",
    sub_department: "",
    geo: "",
    combination: "",
    fields_count: 0
  }]);
  XLSX.utils.book_append_sheet(workbook, deptSheet, "Departments");

  const usedSheetNames = new Set(["Departments"]);
  const toSafeSheetName = raw => {
    let safe = String(raw || "")
      .replace(/[\\/*?:[\]]/g, "_")
      .trim();
    if (!safe) safe = "Department";
    if (safe.length > 31) safe = safe.slice(0, 31);
    let candidate = safe;
    let idx = 2;
    while (usedSheetNames.has(candidate)) {
      const suffix = `_${idx++}`;
      const maxBaseLength = 31 - suffix.length;
      candidate = `${safe.slice(0, maxBaseLength)}${suffix}`;
    }
    usedSheetNames.add(candidate);
    return candidate;
  };

  departments.forEach(dept => {
    const deptRows = fieldRowsByDepartment.get(dept.id) || [];
    const rows = deptRows.length ? deptRows : [{
      department_id: dept.id,
      department_name: dept.name,
      sub_department: "",
      geo: "",
      combination: "",
      field_order: "",
      field_id: "",
      field_label: "",
      field_type: "",
      is_mandatory: "",
      options: "",
      fixed: ""
    }];
    const sheet = XLSX.utils.json_to_sheet(rows);
    const sheetName = toSafeSheetName(`${dept.name}_Fields`);
    XLSX.utils.book_append_sheet(workbook, sheet, sheetName);
  });

  const fileName = `${getSafeFileNameSeed(active.name, "client")}_requisition_export.xlsx`;
  XLSX.writeFile(workbook, fileName);
}

function createFieldRowsForExport(fields = [], context = {}) {
  return (fields || []).map((field, index) => ({
    field_order: index + 1,
    field_id: field.id || "",
    field_label: field.label || "",
    field_type: field.type || "text",
    is_mandatory: field.validation?.required ? "Y" : "N",
    options: Array.isArray(field.options) && field.options.length ? field.options.join(", ") : "",
    fixed: field.fixed ? "Y" : "N",
    ...context
  }));
}

function getExportCanvasFields(pageState) {
  if (!pageState) return [];
  if (Array.isArray(pageState.canvasFields) && pageState.canvasFields.length) return pageState.canvasFields;
  if (Array.isArray(pageState.submittedCanvasFields) && pageState.submittedCanvasFields.length) return pageState.submittedCanvasFields;
  return [];
}

function toUniqueSheetNameFactory(seedNames = []) {
  const used = new Set(seedNames);
  return raw => {
    let safe = String(raw || "")
      .replace(/[\\/*?:[\]]/g, "_")
      .trim();
    if (!safe) safe = "Sheet";
    if (safe.length > 31) safe = safe.slice(0, 31);
    let candidate = safe;
    let idx = 2;
    while (used.has(candidate)) {
      const suffix = `_${idx++}`;
      const maxBaseLength = 31 - suffix.length;
      candidate = `${safe.slice(0, maxBaseLength)}${suffix}`;
    }
    used.add(candidate);
    return candidate;
  };
}

function exportPiiWorkbook() {
  if (!canManageClients()) return;
  const active = getActiveClient();
  if (!active) return;
  if (typeof XLSX === "undefined") {
    window.alert("Spreadsheet library is not loaded.");
    return;
  }

  ensurePiiSections(active);
  const piiPage = getPageState(active, "pii");
  const fields = getExportCanvasFields(piiPage);
  const sections = Array.isArray(active.piiSections?.sections) ? active.piiSections.sections : [];
  const bySection = new Map(sections.map(section => [section.id, []]));
  const unsectioned = [];

  fields.forEach(field => {
    const sectionId = String(field?.sectionId || "").trim();
    if (sectionId && bySection.has(sectionId)) bySection.get(sectionId).push(field);
    else unsectioned.push(field);
  });

  const workbook = XLSX.utils.book_new();
  const sectionBlocks = sections.map(section => ({
    id: section.id,
    name: section.name,
    fields: bySection.get(section.id) || []
  }));
  if (unsectioned.length) {
    sectionBlocks.push({
      id: "__unsectioned__",
      name: "Unsectioned Fields",
      fields: unsectioned
    });
  }

  const header = ["Section", "Field Order", "Field ID", "Field Label", "Field Type", "Is Mandatory", "Options", "Fixed"];
  const rows = [];
  const boldRowIndexes = [];

  sectionBlocks.forEach(block => {
    boldRowIndexes.push(rows.length);
    rows.push([block.name, "", "", "", "", "", "", ""]);
    rows.push(header);
    if (block.fields.length) {
      block.fields.forEach((field, index) => {
        rows.push([
          block.name,
          index + 1,
          field.id || "",
          field.label || "",
          field.type || "text",
          field.validation?.required ? "Y" : "N",
          Array.isArray(field.options) && field.options.length ? field.options.join(", ") : "",
          field.fixed ? "Y" : "N"
        ]);
      });
    } else {
      rows.push([block.name, "", "", "No fields", "", "", "", ""]);
    }
    rows.push([]);
  });

  const sheet = XLSX.utils.aoa_to_sheet(rows.length ? rows : [header]);

  // Style section title rows as bold (works in compatible spreadsheet viewers).
  boldRowIndexes.forEach(rowIdx => {
    for (let colIdx = 0; colIdx < header.length; colIdx += 1) {
      const cellRef = XLSX.utils.encode_cell({ r: rowIdx, c: colIdx });
      if (!sheet[cellRef]) continue;
      sheet[cellRef].s = { font: { bold: true } };
    }
  });

  XLSX.utils.book_append_sheet(workbook, sheet, "PII_Fields");

  const fileName = `${getSafeFileNameSeed(active.name, "client")}_pii_export.xlsx`;
  XLSX.writeFile(workbook, fileName);
}

function exportApplyWorkbook() {
  if (!canManageClients()) return;
  const active = getActiveClient();
  if (!active) return;
  if (typeof XLSX === "undefined") {
    window.alert("Spreadsheet library is not loaded.");
    return;
  }

  ensureApplySourceStates(active);
  ensureDepartmentStructure(active);
  const geos = Array.isArray(active.departmentStructure?.geos) ? active.departmentStructure.geos : [];
  const workbook = XLSX.utils.book_new();
  if (geos.length) {
    const summaryRows = [];
    geos.forEach(geo => {
      APPLY_SOURCE_OPTIONS.forEach(source => {
        const state = getApplySourcePageState(active, source, geo);
        summaryRows.push({
          geo,
          source,
          fields_count: getExportCanvasFields(state).length
        });
      });
    });
    XLSX.utils.book_append_sheet(workbook, XLSX.utils.json_to_sheet(summaryRows), "Apply_Geo_Sources");

    const uniqueSheetName = toUniqueSheetNameFactory(["Apply_Geo_Sources"]);
    geos.forEach(geo => {
      APPLY_SOURCE_OPTIONS.forEach(source => {
        const state = getApplySourcePageState(active, source, geo);
        const rows = createFieldRowsForExport(getExportCanvasFields(state), { geo, source });
        XLSX.utils.book_append_sheet(
          workbook,
          XLSX.utils.json_to_sheet(rows.length ? rows : [{
            field_order: "",
            field_id: "",
            field_label: "",
            field_type: "",
            is_mandatory: "",
            options: "",
            fixed: "",
            geo,
            source
          }]),
          uniqueSheetName(`${geo}_${source}`)
        );
      });
    });
  } else {
    const sourceRows = APPLY_SOURCE_OPTIONS.map(source => {
      const state = getApplySourcePageState(active, source);
      return {
        source,
        fields_count: getExportCanvasFields(state).length
      };
    });
    XLSX.utils.book_append_sheet(workbook, XLSX.utils.json_to_sheet(sourceRows), "Apply_Sources");

    const uniqueSheetName = toUniqueSheetNameFactory(["Apply_Sources"]);
    APPLY_SOURCE_OPTIONS.forEach(source => {
      const state = getApplySourcePageState(active, source);
      const rows = createFieldRowsForExport(getExportCanvasFields(state), { source });
      XLSX.utils.book_append_sheet(
        workbook,
        XLSX.utils.json_to_sheet(rows.length ? rows : [{
          field_order: "",
          field_id: "",
          field_label: "",
          field_type: "",
          is_mandatory: "",
          options: "",
          fixed: "",
          source
        }]),
        uniqueSheetName(source)
      );
    });
  }

  const fileName = `${getSafeFileNameSeed(active.name, "client")}_apply_export.xlsx`;
  XLSX.writeFile(workbook, fileName);
}

function exportOfferWorkbook() {
  if (!canManageClients()) return;
  const active = getActiveClient();
  if (!active) return;
  if (typeof XLSX === "undefined") {
    window.alert("Spreadsheet library is not loaded.");
    return;
  }

  const offerPage = getPageState(active, "offer");
  const fields = getExportCanvasFields(offerPage).map(field => {
    const meta = getOfferFieldSectionMeta(field);
    return { ...field, sectionId: meta.sectionId, sectionLabel: meta.sectionLabel };
  });
  const sectionRows = OFFER_SECTION_ORDER.map(sectionId => ({
    section_id: sectionId,
    section_name: OFFER_SECTION_LABELS[sectionId] || "Offer Details",
    fields_count: fields.filter(field => field.sectionId === sectionId).length
  }));
  const unsectioned = fields.filter(field => !OFFER_SECTION_ORDER.includes(field.sectionId));
  if (unsectioned.length) {
    sectionRows.push({ section_id: "additional_fields", section_name: "Additional Fields", fields_count: unsectioned.length });
  }

  const workbook = XLSX.utils.book_new();
  const sectionBlocks = OFFER_SECTION_ORDER.map(sectionId => ({
    id: sectionId,
    name: OFFER_SECTION_LABELS[sectionId] || "Offer Details",
    fields: fields.filter(field => field.sectionId === sectionId)
  }));
  if (unsectioned.length) {
    sectionBlocks.push({
      id: "additional_fields",
      name: "Additional Fields",
      fields: unsectioned
    });
  }

  const header = ["Section", "Field Order", "Field ID", "Field Label", "Field Type", "Is Mandatory", "Options", "Fixed"];
  const rows = [];
  const boldRowIndexes = [];

  sectionBlocks.forEach(block => {
    boldRowIndexes.push(rows.length);
    rows.push([block.name, "", "", "", "", "", "", ""]);
    rows.push(header);
    if (block.fields.length) {
      block.fields.forEach((field, index) => {
        rows.push([
          block.name,
          index + 1,
          field.id || "",
          field.label || "",
          field.type || "text",
          field.validation?.required ? "Y" : "N",
          Array.isArray(field.options) && field.options.length ? field.options.join(", ") : "",
          field.fixed ? "Y" : "N"
        ]);
      });
    } else {
      rows.push([block.name, "", "", "No fields", "", "", "", ""]);
    }
    rows.push([]);
  });

  const sheet = XLSX.utils.aoa_to_sheet(rows.length ? rows : [header]);
  boldRowIndexes.forEach(rowIdx => {
    for (let colIdx = 0; colIdx < header.length; colIdx += 1) {
      const cellRef = XLSX.utils.encode_cell({ r: rowIdx, c: colIdx });
      if (!sheet[cellRef]) continue;
      sheet[cellRef].s = { font: { bold: true } };
    }
  });

  XLSX.utils.book_append_sheet(workbook, sheet, "Offer_Fields");

  const fileName = `${getSafeFileNameSeed(active.name, "client")}_offer_export.xlsx`;
  XLSX.writeFile(workbook, fileName);
}

function syncCounts() {
  const active = getActiveClient();
  const pageState = getPageState(active);
  if (!active) return;
  if (!pageState) return;
  const visibleFields = getVisibleCanvasFields(active);
  if (paletteCount) paletteCount.textContent = String(pageState.availableIds.size);
  if (canvasCount) canvasCount.textContent = String(visibleFields.length);
  const canvasEmptyState = canvas ? canvas.querySelector(".empty-state") : null;
  if (canvasEmptyState) canvasEmptyState.style.display = visibleFields.length ? "none" : "block";
}

function renderClientPageTabs() {
  if (!clientPageTabs) return;
  if (!isClientRole() && !canManageClients()) {
    clientPageTabs.classList.add("hidden");
    return;
  }

  const active = getActiveClient();
  clientPageTabs.classList.remove("hidden");
  const buttons = Array.from(clientPageTabs.querySelectorAll(".client-page-tab"));
  const activePage = getActivePageKey();
  const allowedPages = isClientRole() ? getClientAllowedPages(active) : null;
  const visiblePageKeys = [];

  buttons.forEach(button => {
    const key = button.dataset.page;
    const visible = !isClientRole() || allowedPages.includes(key);
    button.classList.toggle("hidden", !visible);
    if (visible) visiblePageKeys.push(key);
  });

  if (isClientRole() && visiblePageKeys.length) {
    const current = activeClientPage;
    if (!visiblePageKeys.includes(current)) {
      activeClientPage = visiblePageKeys[0];
    }
  }

  buttons.forEach(button => {
    const key = button.dataset.page;
    button.classList.toggle("active", key === (isClientRole() ? activeClientPage : activePage));
  });
}

function renderFitmentOfferSwitcher() {
  if (!fitmentOfferSwitcher) return;
  const isFitmentPage = getActivePageKey() === "fitment";
  fitmentOfferSwitcher.classList.toggle("hidden", !isFitmentPage);
  if (!isFitmentPage) return;
  fitmentOfferViewButtons.forEach(btn => {
    const mode = btn.dataset.fitmentView;
    btn.classList.toggle("active", mode === activeFitmentView);
  });
}

function renderAdminSowPanel() {
  const active = getActiveClient();
  const canView = Boolean(active) && isAdmin();
  const checkToken = ++adminSowBinaryCheckToken;
  if (adminSowManageBtn) adminSowManageBtn.classList.toggle("hidden", !canView);
  if (!adminSowPanelMeta || !adminSowDownloadBtn || !adminSowUploadBtn || !adminSowRemoveBtn) return;
  renderAdminSowHistory(canView ? active : null);
  if (!canView) {
    adminSowPanelMeta.textContent = "No SoW uploaded.";
    adminSowDownloadBtn.disabled = true;
    adminSowRemoveBtn.disabled = true;
    adminSowUploadBtn.disabled = true;
    if (adminSowSubmitBtn) adminSowSubmitBtn.disabled = true;
    if (adminSowSectionSelect) {
      adminSowSectionSelect.value = "";
      adminSowSectionSelect.disabled = true;
    }
    if (adminSowRemarkInput) {
      adminSowRemarkInput.value = "";
      adminSowRemarkInput.disabled = true;
    }
    if (adminSowModal && adminSowModal.style.display === "block") closeAdminSowModal();
    return;
  }

  const sow = normalizeClientSowDocument(active.sowDocument);
  if (!sow) {
    adminSowPanelMeta.textContent = "No SoW uploaded.";
    adminSowDownloadBtn.disabled = true;
    adminSowRemoveBtn.disabled = true;
    adminSowUploadBtn.disabled = !isAdmin();
    if (adminSowSubmitBtn) adminSowSubmitBtn.disabled = true;
    if (adminSowSectionSelect) {
      adminSowSectionSelect.value = "";
      adminSowSectionSelect.disabled = false;
    }
    if (adminSowRemarkInput) {
      adminSowRemarkInput.value = "";
      adminSowRemarkInput.disabled = false;
    }
    return;
  }

  const details = [sow.name];
  if (sow.size) details.push(formatFileSize(sow.size));
  if (sow.uploadedAt) details.push(`uploaded ${sow.uploadedAt}`);
  if (sow.section) details.push(getPageLabel(sow.section));
  if (sow.remark) details.push(`remark: ${sow.remark}`);
  adminSowPanelMeta.textContent = `SoW: ${details.join(" | ")}`;
  if (adminSowSectionSelect) {
    const section = String(sow.section || "").trim();
    const hasOption = Array.from(adminSowSectionSelect.options).some(option => option.value === section);
    adminSowSectionSelect.value = hasOption ? section : "";
    adminSowSectionSelect.disabled = false;
  }
  if (adminSowRemarkInput) {
    adminSowRemarkInput.value = sow.remark || "";
    adminSowRemarkInput.disabled = false;
  }
  const inlineBinary = Boolean(sow.dataUrl);
  adminSowDownloadBtn.disabled = !inlineBinary;
  adminSowRemoveBtn.disabled = false;
  adminSowUploadBtn.disabled = false;
  if (adminSowSubmitBtn) adminSowSubmitBtn.disabled = false;
  if (inlineBinary) return;
  hasSowBinaryForClient(active.id).then(hasBinary => {
    if (checkToken !== adminSowBinaryCheckToken) return;
    const latest = getActiveClient();
    if (!latest || latest.id !== active.id || !isAdmin()) return;
    adminSowDownloadBtn.disabled = !hasBinary;
    const refreshed = [sow.name];
    if (sow.size) refreshed.push(formatFileSize(sow.size));
    if (sow.uploadedAt) refreshed.push(`uploaded ${sow.uploadedAt}`);
    if (sow.section) refreshed.push(getPageLabel(sow.section));
    if (sow.remark) refreshed.push(`remark: ${sow.remark}`);
    if (!hasBinary) refreshed.push("re-upload required to enable view/download");
    adminSowPanelMeta.textContent = `SoW: ${refreshed.join(" | ")}`;
  });
}

function openAdminSowModal() {
  if (!isAdmin() || !adminSowModal) return;
  const active = getActiveClient();
  if (!active) return;
  if (adminSowHistoryDetails) adminSowHistoryDetails.open = false;
  renderAdminSowPanel();
  adminSowModal.style.display = "block";
}

function closeAdminSowModal() {
  if (adminSowModal) adminSowModal.style.display = "none";
  if (adminSowHistoryDetails) adminSowHistoryDetails.open = false;
  if (adminSowFileInput) adminSowFileInput.value = "";
}

function downloadSowDataUrl(dataUrl, fileName) {
  const value = String(dataUrl || "").trim();
  if (!value) return false;
  const a = document.createElement("a");
  a.href = value;
  a.download = fileName || "sow_document";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  return true;
}

async function downloadActiveClientSow() {
  if (!isAdmin()) return;
  const active = getActiveClient();
  if (!active) return;
  const dataUrl = await resolveSowDataUrlForClient(active);
  const sow = normalizeClientSowDocument(active.sowDocument);
  if (!sow || !dataUrl) {
    window.alert("SoW file is not available to download. Please upload/re-upload the document.");
    return;
  }
  downloadSowDataUrl(dataUrl, sow.name || "sow_document");
}

async function handleAdminSowUpload() {
  if (!isAdmin()) return;
  const active = getActiveClient();
  if (!active) return;
  const file = adminSowFileInput && adminSowFileInput.files ? adminSowFileInput.files[0] : null;
  if (!file) return;
  const section = adminSowSectionSelect ? String(adminSowSectionSelect.value || "").trim() : "";
  const remark = adminSowRemarkInput ? String(adminSowRemarkInput.value || "").trim() : "";
  const sowDoc = await createClientSowDocumentFromFile(file, { section, remark });
  if (!sowDoc) {
    if (adminSowFileInput) adminSowFileInput.value = "";
    renderAdminSowPanel();
    return;
  }
  const storedSow = await persistSowDocumentForClient(active.id, sowDoc);
  if (!storedSow) {
    if (adminSowFileInput) adminSowFileInput.value = "";
    renderAdminSowPanel();
    return;
  }
  active.sowDocument = storedSow;
  addSowHistoryEntry(active, storedSow);
  addAuditLog(active, "SoW Updated", sowDoc.name || "SoW Document", {
    eventType: "field",
    actorRole: "admin",
    actorName: "Admin",
    pageKey: getActivePageKey()
  });
  saveClients();
  if (editingClientId && active.id === editingClientId) {
    pendingClientSowDocument = normalizeClientSowDocument(storedSow);
    renderClientSowMeta();
  }
  if (adminSowFileInput) adminSowFileInput.value = "";
  renderWorkspace();
}

async function submitAdminSowDetails() {
  if (!isAdmin()) return;
  const active = getActiveClient();
  if (!active) return;
  const sow = normalizeClientSowDocument(active.sowDocument);
  if (!sow) {
    window.alert("Upload SoW first, then submit section and remark.");
    return;
  }

  const section = adminSowSectionSelect ? String(adminSowSectionSelect.value || "").trim() : "";
  const remark = adminSowRemarkInput ? String(adminSowRemarkInput.value || "").trim() : "";
  const updatedSow = normalizeClientSowDocument({
    ...sow,
    section,
    remark,
    dataUrl: sow.dataUrl
  });
  if (!updatedSow) return;

  const unchanged = String(sow.section || "") === section && String(sow.remark || "") === remark;
  if (unchanged) {
    renderAdminSowPanel();
    return;
  }

  active.sowDocument = updatedSow;
  active.sowVersionHistory = normalizeClientSowHistory(active.sowVersionHistory);
  if (active.sowVersionHistory.length) {
    const latest = active.sowVersionHistory[0];
    if (latest && latest.name === sow.name && latest.uploadedAt === sow.uploadedAt) {
      const patched = normalizeClientSowHistoryEntry({
        ...latest,
        section: updatedSow.section,
        remark: updatedSow.remark
      });
      if (patched) active.sowVersionHistory[0] = patched;
    }
  }

  const dataUrl = await resolveSowDataUrlForClient(active);
  if (dataUrl) {
    await putSowBinaryForClient(active.id, {
      ...updatedSow,
      dataUrl
    });
  }

  const descriptor = [
    updatedSow.name,
    updatedSow.section ? getPageLabel(updatedSow.section) : "",
    updatedSow.remark ? updatedSow.remark : ""
  ].filter(Boolean).join(" | ");
  addAuditLog(active, "SoW Metadata Updated", descriptor || "SoW Metadata", {
    eventType: "field",
    actorRole: "admin",
    actorName: "Admin",
    pageKey: getActivePageKey()
  });
  saveClients();
  renderAdminSowPanel();
}

async function removeActiveClientSow() {
  if (!isAdmin()) return;
  const active = getActiveClient();
  if (!active) return;
  const sow = normalizeClientSowDocument(active.sowDocument);
  if (!sow) return;
  const ok = window.confirm(`Remove SoW "${sow.name}"?`);
  if (!ok) return;
  active.sowDocument = null;
  addAuditLog(active, "SoW Removed", sow.name || "SoW Document", {
    eventType: "field",
    actorRole: "admin",
    actorName: "Admin",
    pageKey: getActivePageKey()
  });
  await deleteSowBinaryForClient(active.id);
  saveClients();
  if (editingClientId && active.id === editingClientId) {
    pendingClientSowDocument = null;
    renderClientSowMeta();
  }
  if (adminSowFileInput) adminSowFileInput.value = "";
  renderWorkspace();
}

function renderWorkspace() {
  const active = getActiveClient();
  updateWorkspaceVisibility();
  if (!active) return;
  if (!enforceClientAccess()) return;
  if (!enforceManagerAccess()) return;
  if (isClientRole() && !canAccessClientPage(getActivePageKey(), active)) {
    const allowed = getClientAllowedPages(active);
    if (allowed.length) {
      activeClientPage = allowed[0];
    }
  }
  persistSession();

  const pageLabel = getPageLabel(getActivePageKey());
  const isRequisitionPage = getActivePageKey() === "requisition";
  const isApplyPage = getActivePageKey() === "apply";
  const isOfferPage = getWorkingFormPageKey() === "offer";
  const isPiiPage = getActivePageKey() === "pii";
  const isDocumentCollectionPage = getActivePageKey() === "document_collection";
  const isFitmentPage = getActivePageKey() === "fitment";
  const isFitmentOfferBuilder = isFitmentPage && activeFitmentView === "offer";
  const isFitmentCalculator = isFitmentPage && activeFitmentView === "calculator";
  const isWorkflowPage = getActivePageKey() === WORKFLOW_PAGE_KEY;
  const isItItemPage = getActivePageKey() === "it_item";
  const isDataMigrationPage = getActivePageKey() === "data_migration";
  const isTaChecklistPage = getActivePageKey() === "ta_checklist";
  const hasDepartments = Array.isArray(active.departmentStructure?.departments) && active.departmentStructure.departments.length > 0;
  if (canvasDeptLabel) {
    if (isRequisitionPage) {
      const contextLabel = getActiveRequisitionContextLabel(active);
      canvasDeptLabel.textContent = contextLabel || "";
      canvasDeptLabel.classList.toggle("hidden", !contextLabel);
    } else if (isApplyPage) {
      const contextLabel = getActiveApplyContextLabel(active);
      canvasDeptLabel.textContent = contextLabel || "";
      canvasDeptLabel.classList.toggle("hidden", !contextLabel);
    } else {
      canvasDeptLabel.textContent = "";
      canvasDeptLabel.classList.add("hidden");
    }
  }
  if (availablePanelTitle) {
    if (isPiiPage) {
      availablePanelTitle.textContent = "PII Fields";
    } else if (isApplyPage) {
      availablePanelTitle.textContent = "Apply Fields";
    } else if (getWorkingFormPageKey() === "offer") {
      availablePanelTitle.textContent = "Offer Fields";
    } else {
      availablePanelTitle.textContent = "Requisition Fields";
    }
  }
  if (activeClientTitle) {
    const fitmentLabel = isFitmentPage
      ? (isFitmentOfferBuilder ? "Fitment & Offer - Offer Form" : "Fitment & Offer - Fitment Calculator")
      : pageLabel;
    activeClientTitle.textContent = `${active.name} Workspace - ${fitmentLabel}`;
  }
  if (projectTrackerLink) {
    projectTrackerLink.href = `ProjectTracker.html?clientId=${encodeURIComponent(active.id)}`;
  }
  if (openClientUsersBtn) {
    openClientUsersBtn.classList.toggle("hidden", !canManageClientUsers(active));
  }
  renderAdminSowPanel();
  if (mainLayout) mainLayout.classList.toggle("hidden", isTaChecklistPage || isDocumentCollectionPage || isFitmentCalculator || isWorkflowPage || isItItemPage || isDataMigrationPage || (isRequisitionPage && !hasDepartments));
  if (requisitionApprovalPanel) requisitionApprovalPanel.classList.toggle("hidden", !isRequisitionPage);
  if (offerApprovalPanel) offerApprovalPanel.classList.toggle("hidden", !isOfferPage);
  if (documentCollectionPanel) documentCollectionPanel.classList.toggle("hidden", !isDocumentCollectionPage);
  if (fitmentPanel) fitmentPanel.classList.toggle("hidden", !isFitmentCalculator);
  if (workflowPanel) workflowPanel.classList.toggle("hidden", !isWorkflowPage);
  if (itItemPanel) itItemPanel.classList.toggle("hidden", !isItItemPage);
  if (dataMigrationPanel) dataMigrationPanel.classList.toggle("hidden", !isDataMigrationPage);
  if (taChecklistPanel) taChecklistPanel.classList.toggle("hidden", !isTaChecklistPage);
  if (sqlPanel) sqlPanel.classList.toggle("hidden", isTaChecklistPage || isDocumentCollectionPage || isFitmentCalculator || isWorkflowPage || isItItemPage || isDataMigrationPage || isClientRole() || (isRequisitionPage && !hasDepartments));
  if (csvDownloadPanel) csvDownloadPanel.classList.toggle("hidden", isTaChecklistPage || isDocumentCollectionPage || isFitmentCalculator || isWorkflowPage || isItItemPage || isDataMigrationPage || isClientRole() || (isRequisitionPage && !hasDepartments));
  if (openPreviewTopBtn) openPreviewTopBtn.classList.toggle("hidden", isTaChecklistPage || isDocumentCollectionPage || isFitmentCalculator || isWorkflowPage || isItItemPage || isDataMigrationPage || (isRequisitionPage && !hasDepartments));
  if (submitCanvasBtn) submitCanvasBtn.classList.toggle("hidden", isTaChecklistPage || isDocumentCollectionPage || isFitmentCalculator || isWorkflowPage || isItItemPage || isDataMigrationPage || (isRequisitionPage && !hasDepartments));
  renderRequisitionDepartmentSwitcher();
  renderPiiGeoFilter();
  renderPiiSectionManager();
  renderApplyGeoFilter();
  renderApplySourceFilter();
  renderClientPageTabs();
  renderFitmentOfferSwitcher();
  if (isTaChecklistPage) {
    renderTaChecklist();
  } else if (isDocumentCollectionPage) {
    renderDocumentCollection();
  } else if (isFitmentCalculator) {
    renderFitmentPanel();
  } else if (isWorkflowPage) {
    renderWorkflowBuilder();
  } else if (isItItemPage) {
    renderItItemPanel();
  } else if (isDataMigrationPage) {
    renderDataMigrationPanel();
  } else {
    renderPalette();
    renderCanvas();
    renderDependencyRuleBuilder();
    renderPreviewForm();
    renderRequisitionApprovalMatrix();
    renderOfferApprovalMatrix();
  }
  renderChatPanel();
  syncCounts();
}

function renderAll() {
  renderClientList();
  renderWorkspace();
  renderChatPanel();
}

document.addEventListener("click", event => {
  const clickedMenu = event.target.closest(".client-kebab-wrap");
  if (clickedMenu) return;
  document.querySelectorAll(".client-kebab-menu").forEach(menu => menu.classList.add("hidden"));
});

function renderIntegrationRows(count, existingIntegrations = []) {
  if (!integrationRows) return;
  integrationRows.innerHTML = "";
  const rows = Math.max(1, Math.min(10, count));

  for (let i = 0; i < rows; i += 1) {
    const row = document.createElement("div");
    row.className = "integration-row";

    const opts = integrationOptions.map(opt => `<option value="${opt}">${opt}</option>`).join("");
    row.innerHTML = `
      <div class="integration-row-title">Integration ${i + 1}</div>
      <select data-role="type">${opts}</select>
      <input data-role="vendor" type="text" placeholder="Vendor name">
    `;
    const seeded = Array.isArray(existingIntegrations) ? existingIntegrations[i] : null;
    const typeEl = row.querySelector('[data-role="type"]');
    const vendorEl = row.querySelector('[data-role="vendor"]');
    if (typeEl && seeded && seeded.type) typeEl.value = String(seeded.type);
    if (vendorEl && seeded && seeded.vendor) vendorEl.value = String(seeded.vendor);
    integrationRows.appendChild(row);
  }
}

function getIntegrationRowsSnapshot() {
  if (!integrationRows) return [];
  return Array.from(integrationRows.querySelectorAll(".integration-row")).map(row => ({
    type: row.querySelector('[data-role="type"]')?.value || integrationOptions[0],
    vendor: row.querySelector('[data-role="vendor"]')?.value || ""
  }));
}

function openClientModal() {
  if (!canManageClients()) return;
  if (!clientModal) return;
  editingClientId = null;
  pendingClientSowDocument = null;
  clientModal.style.display = "block";
  if (clientModalTitle) clientModalTitle.textContent = "Add Client";
  if (saveClientBtn) saveClientBtn.textContent = "Save Client";
  if (clientModalName) clientModalName.value = "";
  if (clientUserEmail) clientUserEmail.value = "";
  if (clientUserPassword) clientUserPassword.value = "";
  if (clientProduct) clientProduct.value = "Standard";
  if (clientSowInput) clientSowInput.value = "";
  renderClientSowMeta();
  if (integrationCount) integrationCount.value = "1";
  renderIntegrationRows(1);
}

function openEditClientModal(client) {
  if (!canManageClientRecord(client) || !clientModal) return;
  editingClientId = client.id;
  pendingClientSowDocument = normalizeClientSowDocument(client.sowDocument);
  clientModal.style.display = "block";
  if (clientModalTitle) clientModalTitle.textContent = "Edit Client";
  if (saveClientBtn) saveClientBtn.textContent = "Update Client";
  if (clientModalName) clientModalName.value = client.name || "";
  if (clientUserEmail) clientUserEmail.value = client.loginEmail || "";
  if (clientUserPassword) clientUserPassword.value = "";
  if (clientProduct) clientProduct.value = normalizeClientProduct(client.product);
  if (clientSowInput) clientSowInput.value = "";
  renderClientSowMeta();
  const integrations = Array.isArray(client.integrations) && client.integrations.length ? client.integrations : [{ type: integrationOptions[0], vendor: "" }];
  if (integrationCount) integrationCount.value = String(Math.max(1, Math.min(10, integrations.length)));
  renderIntegrationRows(integrations.length, integrations);
}

function closeClientModal() {
  if (clientModal) clientModal.style.display = "none";
  editingClientId = null;
  pendingClientSowDocument = null;
  if (clientProduct) clientProduct.value = "Standard";
  if (clientSowInput) clientSowInput.value = "";
  renderClientSowMeta();
  if (clientModalTitle) clientModalTitle.textContent = "Add Client";
  if (saveClientBtn) saveClientBtn.textContent = "Save Client";
}

function openAddUserModal() {
  if (!isAdmin() || !addUserModal) return;
  resetManagerUserForm();
  closeManagerUserFormModal();
  renderManagedUsersList();
  addUserModal.style.display = "block";
}

function closeAddUserModal() {
  if (addUserModal) addUserModal.style.display = "none";
  closeManagerUserFormModal();
  resetManagerUserForm();
}

function openManagerUserFormModal() {
  if (!isAdmin() || !managerUserFormModal) return;
  resetManagerUserForm();
  managerUserFormModal.style.display = "block";
  if (newUserName) newUserName.focus();
}

function closeManagerUserFormModal() {
  if (managerUserFormModal) managerUserFormModal.style.display = "none";
}

function resetManagerUserForm() {
  if (newUserName) newUserName.value = "";
  if (newUserEmail) newUserEmail.value = "";
  if (newUserPassword) newUserPassword.value = "";
  if (newUserPasswordToggle) newUserPasswordToggle.checked = false;
  if (newUserPassword) newUserPassword.type = "password";
}

function renderManagedUsersList() {
  if (!managedUserListBody || !managedUserListEmpty || !managedUserListWrap) return;
  const users = normalizeManagedUsers(managedUsers);
  managedUsers = users;
  managedUserListBody.innerHTML = "";

  if (managedUserCount) managedUserCount.textContent = String(users.length);
  managedUserListEmpty.classList.toggle("hidden", users.length > 0);
  managedUserListWrap.classList.toggle("hidden", users.length === 0);

  users.forEach(user => {
    const tr = document.createElement("tr");
    const createdDate = user.createdAt ? new Date(user.createdAt).toLocaleString() : "-";
    const userInitial = String(user.name || "U").trim().charAt(0).toUpperCase() || "U";
    const statusClass = user.accessDisabled ? "is-disabled" : "is-enabled";
    tr.innerHTML = `
      <td>
        <div class="managed-user-id-cell">
          <span class="managed-user-avatar">${escapeHtml(userInitial)}</span>
          <div class="managed-user-meta">
            <strong>${escapeHtml(user.name)}</strong>
            <small>${escapeHtml(user.email)}</small>
          </div>
        </div>
      </td>
      <td>
        <code class="managed-user-email">${escapeHtml(user.email)}</code>
      </td>
      <td>
        <span class="managed-user-date">${escapeHtml(createdDate)}</span>
      </td>
      <td>
        <span class="managed-user-status ${statusClass}">
          ${user.accessDisabled ? "Disabled" : "Enabled"}
        </span>
      </td>
      <td>
        <div class="managed-user-actions-wrap">
          <button class="btn btn-ghost managed-user-action-btn" type="button" data-user-action="toggle" data-user-id="${escapeHtml(user.id)}">
            ${user.accessDisabled ? "Enable" : "Disable"}
          </button>
          <button class="remove-field-btn managed-user-action-btn managed-user-delete-btn" type="button" data-user-action="delete" data-user-id="${escapeHtml(user.id)}">Delete</button>
        </div>
      </td>
    `;
    managedUserListBody.appendChild(tr);
  });
}

function toggleManagedUserAccess(userId) {
  if (!isAdmin()) return;
  const idx = managedUsers.findIndex(user => user.id === userId);
  if (idx === -1) return;
  managedUsers[idx].accessDisabled = !managedUsers[idx].accessDisabled;
  saveManagedUsers();
  renderManagedUsersList();
}

function deleteManagedUser(userId) {
  if (!isAdmin()) return;
  const idx = managedUsers.findIndex(user => user.id === userId);
  if (idx === -1) return;
  const user = managedUsers[idx];
  const hasOwnedClients = clients.some(client => String(client.ownerUserId || "").toLowerCase() === String(user.email || "").toLowerCase());
  if (hasOwnedClients) {
    window.alert("Cannot delete this user because they still own clients. Reassign or remove those clients first.");
    return;
  }
  openDeleteManagedUserAuthModal(user.id);
}

function openDeleteManagedUserAuthModal(userId) {
  pendingDeleteManagedUserId = userId || null;
  if (deleteUserAuthInput) deleteUserAuthInput.value = "";
  if (deleteUserAuthModal) deleteUserAuthModal.style.display = "block";
  if (deleteUserAuthInput) deleteUserAuthInput.focus();
}

function closeDeleteManagedUserAuthModal() {
  pendingDeleteManagedUserId = null;
  if (deleteUserAuthInput) deleteUserAuthInput.value = "";
  if (deleteUserAuthModal) deleteUserAuthModal.style.display = "none";
}

function confirmManagedUserRemovalWithAuth() {
  if (!isAdmin()) return;
  if (!pendingDeleteManagedUserId) return;
  const entered = (deleteUserAuthInput ? deleteUserAuthInput.value : "").trim();
  if (entered !== AUTH.admin.password) {
    window.alert("Incorrect admin password. User was not removed.");
    return;
  }

  const idx = managedUsers.findIndex(user => user.id === pendingDeleteManagedUserId);
  if (idx === -1) {
    closeDeleteManagedUserAuthModal();
    return;
  }

  managedUsers.splice(idx, 1);
  closeDeleteManagedUserAuthModal();
  saveManagedUsers();
  renderManagedUsersList();
}

function saveManagedUserFromModal() {
  if (!isAdmin()) return;
  const name = String(newUserName ? newUserName.value : "").trim();
  const email = String(newUserEmail ? newUserEmail.value : "").trim().toLowerCase();
  const password = String(newUserPassword ? newUserPassword.value : "").trim();

  if (!name || !email || !password) {
    window.alert("User name, email, and password are required.");
    return;
  }
  if (email === AUTH.admin.email) {
    window.alert("This email is reserved for admin.");
    return;
  }
  const emailInUsers = managedUsers.some(user => String(user.email || "").toLowerCase() === email);
  if (emailInUsers) {
    window.alert("User email already exists.");
    return;
  }
  const emailInClients = clients.some(client => String(client.loginEmail || "").toLowerCase() === email);
  if (emailInClients) {
    window.alert("This email is already used as a client login ID.");
    return;
  }

  managedUsers.push({
    id: `u_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
    name,
    email,
    password,
    createdAt: new Date().toISOString(),
    accessDisabled: false
  });
  saveManagedUsers();
  resetManagerUserForm();
  closeManagerUserFormModal();
  renderManagedUsersList();
}

function isLoginEmailInUse(email, options = {}) {
  const normalized = String(email || "").trim().toLowerCase();
  if (!normalized) return false;
  if (normalized === AUTH.admin.email) return true;
  if (normalizeManagedUsers(managedUsers).some(user => user.email === normalized)) return true;
  for (const client of clients) {
    if (!client) continue;
    if ((client.loginEmail || "").toLowerCase() === normalized) {
      if (!options.ignoreClientId || options.ignoreClientId !== client.id) return true;
    }
    ensureClientUsers(client);
    const matchedSub = (client.clientUsers || []).find(user => user.email === normalized);
    if (!matchedSub) continue;
    if (options.ignoreClientId === client.id && options.ignoreSubUserId && options.ignoreSubUserId === matchedSub.id) {
      continue;
    }
    return true;
  }
  return false;
}

function openClientUsersModal() {
  const active = getActiveClient();
  if (!active || !canManageClientUsers(active) || !clientUsersModal) return;
  ensureClientUsers(active);
  openClientUserFormInline();
  renderClientUsersList(active);
  clientUsersModal.style.display = "block";
}

function closeClientUsersModal() {
  if (clientUsersModal) clientUsersModal.style.display = "none";
  closeClientUserFormInline();
}

function openClientUserFormInline() {
  const active = getActiveClient();
  if (!active || !canManageClientUsers(active)) return;
  if (clientUserFormWrap) clientUserFormWrap.classList.remove("hidden");
  if (openClientUserFormBtn) openClientUserFormBtn.classList.add("hidden");
  resetClientUserForm();
  if (clientSubUserName) clientSubUserName.focus();
}

function closeClientUserFormInline() {
  if (clientUserFormWrap && openClientUserFormBtn) clientUserFormWrap.classList.add("hidden");
  if (openClientUserFormBtn) openClientUserFormBtn.classList.remove("hidden");
  resetClientUserForm();
}

function resetClientUserForm() {
  if (clientSubUserName) clientSubUserName.value = "";
  if (clientSubUserEmail) clientSubUserEmail.value = "";
  if (clientSubUserPassword) clientSubUserPassword.value = "";
  if (clientSubUserPasswordToggle) clientSubUserPasswordToggle.checked = false;
  if (clientSubUserPassword) clientSubUserPassword.type = "password";
  if (clientSubUserAccessGrid) {
    clientSubUserAccessGrid.querySelectorAll('input[type="checkbox"]').forEach(input => {
      input.checked = true;
    });
  }
}

function getClientSubUserAccessSelection() {
  if (!clientSubUserAccessGrid) return [...CLIENT_USER_ACCESS_PAGES];
  return Array.from(clientSubUserAccessGrid.querySelectorAll('input[type="checkbox"]'))
    .filter(input => input.checked)
    .map(input => input.value)
    .filter(page => CLIENT_USER_ACCESS_PAGES.includes(page));
}

function renderClientUsersList(active = getActiveClient()) {
  if (!clientUsersListBody || !clientUsersListEmpty || !clientUsersListWrap || !active) return;
  ensureClientUsers(active);
  const users = active.clientUsers || [];
  clientUsersListBody.innerHTML = "";
  if (clientUsersCount) clientUsersCount.textContent = String(users.length);
  clientUsersListEmpty.classList.toggle("hidden", users.length > 0);
  clientUsersListWrap.classList.toggle("hidden", users.length === 0);

  users.forEach(user => {
    const tr = document.createElement("tr");
    const createdDate = user.createdAt ? new Date(user.createdAt).toLocaleString() : "-";
    const userInitial = String(user.name || "U").trim().charAt(0).toUpperCase() || "U";
    const statusClass = user.accessDisabled ? "is-disabled" : "is-enabled";
    const accessLabel = (Array.isArray(user.accessPages) ? user.accessPages : [])
      .map(key => {
        const tab = CLIENT_PAGES.find(page => page.key === key);
        return tab ? tab.label : key;
      })
      .join(", ");
    tr.innerHTML = `
      <td>
        <div class="managed-user-id-cell">
          <span class="managed-user-avatar">${escapeHtml(userInitial)}</span>
          <div class="managed-user-meta">
            <strong>${escapeHtml(user.name)}</strong>
            <small>${escapeHtml(user.email)}</small>
          </div>
        </div>
      </td>
      <td><code class="managed-user-email">${escapeHtml(user.email)}</code></td>
      <td><span class="managed-user-access">${escapeHtml(accessLabel || "No access")}</span></td>
      <td><span class="managed-user-date">${escapeHtml(createdDate)}</span></td>
      <td><span class="managed-user-status ${statusClass}">${user.accessDisabled ? "Disabled" : "Enabled"}</span></td>
      <td>
        <div class="managed-user-actions-wrap">
          <button class="btn btn-ghost managed-user-action-btn" type="button" data-client-user-action="edit-access" data-client-user-id="${escapeHtml(user.id)}">
            Edit Access
          </button>
          <button class="btn btn-ghost managed-user-action-btn" type="button" data-client-user-action="toggle" data-client-user-id="${escapeHtml(user.id)}">
            ${user.accessDisabled ? "Enable" : "Disable"}
          </button>
          <button class="remove-field-btn managed-user-action-btn managed-user-delete-btn" type="button" data-client-user-action="delete" data-client-user-id="${escapeHtml(user.id)}">Delete</button>
        </div>
      </td>
    `;
    clientUsersListBody.appendChild(tr);
  });
}

function addClientSubUser() {
  const active = getActiveClient();
  if (!active || !canManageClientUsers(active)) return;
  ensureClientUsers(active);
  const name = String(clientSubUserName ? clientSubUserName.value : "").trim();
  const email = String(clientSubUserEmail ? clientSubUserEmail.value : "").trim().toLowerCase();
  const password = String(clientSubUserPassword ? clientSubUserPassword.value : "").trim();
  const accessPages = getClientSubUserAccessSelection();

  if (!name || !email || !password) {
    window.alert("User name, email, and password are required.");
    return;
  }
  if (accessPages.length === 0) {
    window.alert("Select at least one section access.");
    return;
  }
  if (isLoginEmailInUse(email)) {
    window.alert("This login email is already used.");
    return;
  }

  active.clientUsers.push({
    id: `cu_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
    name,
    email,
    password,
    accessPages,
    accessDisabled: false,
    createdAt: new Date().toISOString()
  });
  addAuditLog(active, "Client Sub User Added", `${name} (${email})`, {
    eventType: "field",
    actorRole: currentRole || "client",
    actorName: currentUserEmail || "Client",
    pageKey: "requisition"
  });
  saveClients();
  resetClientUserForm();
  renderClientUsersList(active);
}

function updateClientSubUserAction(userId, action) {
  const active = getActiveClient();
  if (!active || !canManageClientUsers(active)) return;
  ensureClientUsers(active);
  const idx = (active.clientUsers || []).findIndex(user => user.id === userId);
  if (idx === -1) return;
  if (action === "edit-access") {
    openClientUserAccessModal(active.clientUsers[idx]);
    return;
  }
  if (action === "toggle") {
    active.clientUsers[idx].accessDisabled = !active.clientUsers[idx].accessDisabled;
    saveClients();
    renderClientUsersList(active);
    return;
  }
  if (action === "delete") {
    const ok = window.confirm(`Delete user "${active.clientUsers[idx].email}"?`);
    if (!ok) return;
    active.clientUsers.splice(idx, 1);
    saveClients();
    renderClientUsersList(active);
  }
}

function openClientUserAccessModal(subUser) {
  const active = getActiveClient();
  if (!active || !subUser || !canManageClientUsers(active) || !clientUserAccessModal) return;
  pendingEditClientSubUserId = subUser.id;
  if (clientUserAccessTarget) {
    clientUserAccessTarget.textContent = `User: ${subUser.name} (${subUser.email})`;
  }
  const selected = new Set(Array.isArray(subUser.accessPages) ? subUser.accessPages : []);
  if (clientUserAccessEditGrid) {
    clientUserAccessEditGrid.querySelectorAll('input[type="checkbox"]').forEach(input => {
      input.checked = selected.has(input.value);
    });
  }
  clientUserAccessModal.style.display = "block";
}

function closeClientUserAccessModal() {
  pendingEditClientSubUserId = null;
  if (clientUserAccessModal) clientUserAccessModal.style.display = "none";
}

function saveClientUserAccess() {
  const active = getActiveClient();
  if (!active || !canManageClientUsers(active)) return;
  ensureClientUsers(active);
  if (!pendingEditClientSubUserId) return;
  const idx = (active.clientUsers || []).findIndex(user => user.id === pendingEditClientSubUserId);
  if (idx === -1) {
    closeClientUserAccessModal();
    return;
  }
  const selected = Array.from((clientUserAccessEditGrid || document).querySelectorAll('#clientUserAccessEditGrid input[type="checkbox"]'))
    .filter(input => input.checked)
    .map(input => input.value)
    .filter(page => CLIENT_USER_ACCESS_PAGES.includes(page));
  if (!selected.length) {
    window.alert("Select at least one section access.");
    return;
  }
  active.clientUsers[idx].accessPages = selected;
  addAuditLog(active, "Client Sub User Access Updated", `${active.clientUsers[idx].email} -> ${selected.join(", ")}`, {
    eventType: "field",
    actorRole: currentRole || "client",
    actorName: currentUserEmail || "Client",
    pageKey: "requisition"
  });
  saveClients();
  closeClientUserAccessModal();
  renderClientUsersList(active);
  renderWorkspace();
}

function openFirstLoginResetModal(clientId) {
  if (!firstLoginResetModal) return;
  const client = clients.find(item => item.id === clientId);
  if (!client) return;
  pendingFirstLoginClientId = client.id;
  if (firstLoginUserId) firstLoginUserId.value = client.loginEmail || "";
  if (firstLoginNewPassword) firstLoginNewPassword.value = "";
  if (firstLoginConfirmPassword) firstLoginConfirmPassword.value = "";
  firstLoginResetModal.style.display = "block";
}

function closeFirstLoginResetModal() {
  pendingFirstLoginClientId = null;
  if (firstLoginResetModal) firstLoginResetModal.style.display = "none";
}

function submitFirstLoginPasswordReset() {
  const clientId = pendingFirstLoginClientId;
  if (!clientId) return;
  const client = clients.find(item => item.id === clientId);
  if (!client) return;
  if (client.accessDisabled) {
    window.alert("This client access is disabled by admin.");
    closeFirstLoginResetModal();
    return;
  }

  const newPassword = firstLoginNewPassword ? firstLoginNewPassword.value.trim() : "";
  const confirmPassword = firstLoginConfirmPassword ? firstLoginConfirmPassword.value.trim() : "";
  if (!newPassword || !confirmPassword) {
    window.alert("Please enter and confirm the new password.");
    return;
  }
  if (newPassword.length < 6) {
    window.alert("Password should be at least 6 characters.");
    return;
  }
  if (newPassword !== confirmPassword) {
    window.alert("Password and confirm password do not match.");
    return;
  }

  client.loginPassword = newPassword;
  client.forcePasswordReset = false;
  addAuditLog(client, "Client Password Reset", client.loginEmail || client.name || "Client", {
    eventType: "field",
    actorRole: "client",
    actorName: client.name || "Client",
    pageKey: "requisition"
  });
  saveClients();
  closeFirstLoginResetModal();
  if (loginError) loginError.classList.add("hidden");
  if (loginPassword) loginPassword.value = "";
  if (loginEmail) loginEmail.value = client.loginEmail || "";
  activeClientId = client.id;
  login("client", { userEmail: client.loginEmail || "" });
}

function openTypeModal(fieldId) {
  if (!canEditWorkspace()) return;
  const active = getActiveClient();
  const pageState = getPageState(active);
  if (!active || !pageState) return;
  const base = pageState.fieldCatalog.find(field => field.id === fieldId);

  pendingDropFieldId = fieldId;
  pendingDropRemovedFromPalette = false;
  if (pageState.availableIds.has(fieldId)) {
    pageState.availableIds.delete(fieldId);
    pendingDropRemovedFromPalette = true;
    renderPalette();
    syncCounts();
  }
  if (fieldTypeSelect) fieldTypeSelect.value = inferFieldTypeForDrop(base);
  if (fieldDropdownOptions) fieldDropdownOptions.value = "";
  updateTypeModalFields();
  if (typeModal) typeModal.style.display = "block";
}

function closeTypeModal(options = {}) {
  const shouldRestore = options.restorePending !== false;
  const active = getActiveClient();
  const pageState = getPageState(active);
  if (shouldRestore && pendingDropRemovedFromPalette && pendingDropFieldId && pageState) {
    pageState.availableIds.add(pendingDropFieldId);
    renderPalette();
    syncCounts();
  }
  pendingDropFieldId = null;
  pendingDropRemovedFromPalette = false;
  if (typeModal) typeModal.style.display = "none";
  if (fieldDropdownOptions) fieldDropdownOptions.value = "";
  if (parentFieldLabel) parentFieldLabel.value = "";
  if (parentFieldTypeSelect) parentFieldTypeSelect.value = "text";
  if (parentDropdownOptions) parentDropdownOptions.value = "";
  if (dependentFieldLabel) dependentFieldLabel.value = "";
  if (dependentFieldTypeSelect) dependentFieldTypeSelect.value = "text";
  if (dependentDropdownOptions) dependentDropdownOptions.value = "";
}

function updateTypeModalFields() {
  if (!fieldTypeSelect || !fieldDropdownOptions) return;
  const isDropdown = fieldTypeSelect.value === "dropdown";
  const isDependent = fieldTypeSelect.value === "dependent";
  fieldDropdownOptions.disabled = !isDropdown;
  if (fieldDropdownGroup) fieldDropdownGroup.classList.toggle("hidden", !isDropdown);
  if (!isDropdown) fieldDropdownOptions.value = "";

  if (dependentFieldGroup) {
    dependentFieldGroup.classList.toggle("hidden", !isDependent);
  }

  if (parentFieldLabel) {
    parentFieldLabel.disabled = !isDependent;
    parentFieldLabel.readOnly = !isDependent;
    if (isDependent) {
      window.requestAnimationFrame(() => parentFieldLabel.focus());
    } else {
      parentFieldLabel.value = "";
    }
  }

  if (parentFieldTypeSelect) {
    parentFieldTypeSelect.disabled = !isDependent;
    if (!isDependent) parentFieldTypeSelect.value = "text";
  }

  if (parentFieldTypeSelect && parentDropdownOptions) {
    const parentIsDropdown = parentFieldTypeSelect.value === "dropdown";
    parentDropdownOptions.disabled = !parentIsDropdown || !isDependent;
    if (parentDropdownGroup) parentDropdownGroup.classList.toggle("hidden", !(isDependent && parentIsDropdown));
    if (!parentIsDropdown) parentDropdownOptions.value = "";
  }

  if (dependentFieldLabel) {
    dependentFieldLabel.disabled = !isDependent;
    dependentFieldLabel.readOnly = !isDependent;
    if (!isDependent) dependentFieldLabel.value = "";
  }

  if (dependentFieldTypeSelect) {
    dependentFieldTypeSelect.disabled = !isDependent;
    if (!isDependent) dependentFieldTypeSelect.value = "text";
  }

  if (dependentFieldTypeSelect && dependentDropdownOptions) {
    const childIsDropdown = dependentFieldTypeSelect.value === "dropdown";
    dependentDropdownOptions.disabled = !childIsDropdown || !isDependent;
    if (dependentDropdownGroup) dependentDropdownGroup.classList.toggle("hidden", !(isDependent && childIsDropdown));
    if (!childIsDropdown) dependentDropdownOptions.value = "";
  }
}

function openAddFieldModal() {
  if (!canEditWorkspace()) return;
  const isOfferPage = getWorkingFormPageKey() === "offer";
  if (customFieldOfferSectionLabel) customFieldOfferSectionLabel.classList.toggle("hidden", !isOfferPage);
  if (customFieldOfferSection) {
    customFieldOfferSection.classList.toggle("hidden", !isOfferPage);
    if (!isOfferPage) customFieldOfferSection.value = "offer_details";
  }
  if (addFieldModal) addFieldModal.style.display = "block";
}

function closeAddFieldModal() {
  if (addFieldModal) addFieldModal.style.display = "none";
  if (customFieldLabel) customFieldLabel.value = "";
  if (customFieldId) customFieldId.value = "";
  if (customFieldMandatory) customFieldMandatory.checked = false;
  if (customFieldOfferSectionLabel) customFieldOfferSectionLabel.classList.add("hidden");
  if (customFieldOfferSection) {
    customFieldOfferSection.classList.add("hidden");
    customFieldOfferSection.value = "offer_details";
  }
}

function openPreviewModal() {
  renderPreviewForm();
  if (previewModal) previewModal.style.display = "block";
}

function closePreviewModal() {
  if (previewModal) previewModal.style.display = "none";
}

function openAuditModal() {
  if (auditTypeFilter) auditTypeFilter.value = "all";
  if (auditActorFilter) auditActorFilter.value = "all";
  renderAuditLogs();
  if (auditModal) auditModal.style.display = "block";
}

function closeAuditModal() {
  if (auditModal) auditModal.style.display = "none";
}

function openClientDetailModal(client) {
  if (!clientDetailModal || !clientDetailContent || !client) return;
  clientDetailContent.innerHTML = "";
  const requisitionSubmitted = getRequisitionSubmittedLabel(client);
  const piiPage = getPageState(client, "pii");
  const applyPage = getPageState(client, "apply");

  if (isAdmin()) {
    const userId = document.createElement("div");
    userId.className = "integration-item";
    userId.innerHTML = `<strong>User ID</strong> - ${client.loginEmail || "NA"}`;
    clientDetailContent.appendChild(userId);
  }

  const status = document.createElement("div");
  status.className = "integration-item";
  status.innerHTML = `<strong>Access</strong> - ${client.accessDisabled ? "Disabled" : "Enabled"}`;
  clientDetailContent.appendChild(status);

  const product = document.createElement("div");
  product.className = "integration-item";
  product.innerHTML = `<strong>Product</strong> - ${escapeHtml(normalizeClientProduct(client.product))}`;
  clientDetailContent.appendChild(product);

  const sow = normalizeClientSowDocument(client.sowDocument);
  let sowInfo = "Not Uploaded";
  if (sow) {
    const parts = [`${escapeHtml(sow.name)}${sow.size ? ` (${escapeHtml(formatFileSize(sow.size))})` : ""}`];
    if (sow.section) parts.push(escapeHtml(getPageLabel(sow.section)));
    if (sow.remark) parts.push(`remark: ${escapeHtml(sow.remark)}`);
    sowInfo = parts.join(" | ");
  }
  const sowItem = document.createElement("div");
  sowItem.className = "integration-item";
  sowItem.innerHTML = `<strong>SoW</strong> - ${sowInfo}`;
  clientDetailContent.appendChild(sowItem);

  const submitted = document.createElement("div");
  submitted.className = "integration-item";
  submitted.innerHTML = `<strong>Requisition Submitted</strong> - ${requisitionSubmitted}`;
  clientDetailContent.appendChild(submitted);

  const piiSubmitted = document.createElement("div");
  piiSubmitted.className = "integration-item";
  piiSubmitted.innerHTML = `<strong>PII Submitted</strong> - ${piiPage?.submittedAt || "Not Submitted"}`;
  clientDetailContent.appendChild(piiSubmitted);

  const applySubmitted = document.createElement("div");
  applySubmitted.className = "integration-item";
  applySubmitted.innerHTML = `<strong>Apply Submitted</strong> - ${applyPage?.submittedAt || "Not Submitted"}`;
  clientDetailContent.appendChild(applySubmitted);

  if (!client.integrations || !client.integrations.length) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "No integrations configured.";
    clientDetailContent.appendChild(empty);
  } else {
    client.integrations.forEach(item => {
      const row = document.createElement("div");
      row.className = "integration-item";
      row.innerHTML = `<strong>${item.type}</strong> - ${item.vendor || "NA"}`;
      clientDetailContent.appendChild(row);
    });
  }

  clientDetailModal.style.display = "block";
}

function closeClientDetailModal() {
  if (clientDetailModal) clientDetailModal.style.display = "none";
}

function openDeleteClientAuthModal(clientId) {
  pendingDeleteClientId = clientId || null;
  if (deleteClientAuthInput) deleteClientAuthInput.value = "";
  if (deleteClientAuthModal) deleteClientAuthModal.style.display = "block";
  if (deleteClientAuthInput) deleteClientAuthInput.focus();
}

function closeDeleteClientAuthModal() {
  pendingDeleteClientId = null;
  if (deleteClientAuthInput) deleteClientAuthInput.value = "";
  if (deleteClientAuthModal) deleteClientAuthModal.style.display = "none";
}

function confirmClientRemovalWithAuth() {
  if (!isAdmin()) return;
  if (!pendingDeleteClientId) return;
  const entered = (deleteClientAuthInput ? deleteClientAuthInput.value : "").trim();
  if (entered !== AUTH.admin.password) {
    window.alert("Incorrect admin password. Client was not removed.");
    return;
  }

  const index = clients.findIndex(item => item.id === pendingDeleteClientId);
  if (index === -1) {
    closeDeleteClientAuthModal();
    return;
  }

  const removedId = clients[index].id;
  clients.splice(index, 1);
  deleteSowBinaryForClient(removedId);
  if (activeClientId === removedId) {
    activeClientId = clients[0] ? clients[0].id : null;
  }
  closeDeleteClientAuthModal();
  saveClients();
  renderAll();
}

function renderAuditLogs() {
  const active = getActiveClient();
  if (!auditLogList || !active) return;

  auditLogList.innerHTML = "";
  const typeFilter = auditTypeFilter ? auditTypeFilter.value : "all";
  const actorFilter = auditActorFilter ? auditActorFilter.value : "all";

  const fallbackPage = getPageState(active);
  const logs = Array.isArray(active.auditLogsGlobal) && active.auditLogsGlobal.length
    ? active.auditLogsGlobal
    : (fallbackPage && Array.isArray(fallbackPage.auditLogs) ? fallbackPage.auditLogs : []);

  const filteredLogs = logs.filter(log => {
    const eventType = String(log.eventType || "field").toLowerCase();
    const actorRole = String(log.actorRole || "system").toLowerCase();
    if (typeFilter !== "all" && eventType !== typeFilter) return false;
    if (actorFilter !== "all" && actorRole !== actorFilter) return false;
    return true;
  });

  if (!filteredLogs.length) {
    const msg = document.createElement("p");
    msg.className = "empty-state";
    msg.textContent = "No audit events found for selected filters.";
    auditLogList.appendChild(msg);
    return;
  }

  filteredLogs.forEach(log => {
    const item = document.createElement("div");
    item.className = "audit-log-item";
    const actor = log.actorRole ? String(log.actorRole).toUpperCase() : "SYSTEM";
    const eventType = log.eventType ? String(log.eventType).toUpperCase() : "FIELD";
    const page = log.page ? ` | ${String(log.page).toUpperCase()}` : "";
    item.textContent = `${log.timestamp || ""} | ${actor} | ${eventType}${page} | ${log.action}: ${log.fieldName}`;
    auditLogList.appendChild(item);
  });
}

function autoSaveCanvasSubmission(active, pageState) {
  if (!active || !pageState) return;
  pageState.submittedCanvasFields = JSON.parse(JSON.stringify(pageState.canvasFields));
  pageState.submittedAt = new Date().toLocaleString();
}

function applyDropFieldWithType() {
  if (!canEditWorkspace()) return;
  const active = getActiveClient();
  const pageState = getPageState(active);
  if (!active || !pendingDropFieldId) return;
  if (!pageState) return;

  const base = pageState.fieldCatalog.find(field => field.id === pendingDropFieldId);
  if (!base) return;

  const type = normalizeFieldType(fieldTypeSelect ? fieldTypeSelect.value : "text");
  const options = type === "dropdown"
    ? (fieldDropdownOptions ? fieldDropdownOptions.value.split(",").map(v => v.trim()).filter(Boolean) : [])
    : [];

  if (type === "dropdown" && options.length === 0) {
    window.alert("Dropdown options are required when data type is Dropdown.");
    return;
  }

  let childConfig = null;
  let parentConfig = null;
  if (type === "dependent") {
    const parentLabel = parentFieldLabel ? parentFieldLabel.value.trim() : "";
    const parentType = normalizeFieldType(parentFieldTypeSelect ? parentFieldTypeSelect.value : "text");
    const parentOptions = parentType === "dropdown"
      ? (parentDropdownOptions ? parentDropdownOptions.value.split(",").map(v => v.trim()).filter(Boolean) : [])
      : [];

    if (!parentLabel) {
      window.alert("Parent field name is required.");
      return;
    }

    if (parentType === "dropdown" && parentOptions.length === 0) {
      window.alert("Parent dropdown options are required.");
      return;
    }

    const childLabel = dependentFieldLabel ? dependentFieldLabel.value.trim() : "";
    const childType = normalizeFieldType(dependentFieldTypeSelect ? dependentFieldTypeSelect.value : "text");
    const childOptions = childType === "dropdown"
      ? (dependentDropdownOptions ? dependentDropdownOptions.value.split(",").map(v => v.trim()).filter(Boolean) : [])
      : [];

    if (!childLabel) {
      window.alert("Dependent field name is required.");
      return;
    }

    if (childType === "dropdown" && childOptions.length === 0) {
      window.alert("Dependent dropdown options are required.");
      return;
    }

    parentConfig = { parentLabel, parentType, parentOptions };
    childConfig = { childLabel, childType, childOptions };
  }

  const parentField = {
    ...base,
    label: type === "dependent" && parentConfig ? parentConfig.parentLabel : base.label,
    type: type === "dependent" && parentConfig ? parentConfig.parentType : type,
    typeLabel: type === "dependent" && parentConfig ? `dependent (${parentConfig.parentType})` : undefined,
    options: type === "dependent" && parentConfig ? parentConfig.parentOptions : options,
    validation: {
      required: (type === "dropdown" || type === "dependent") ? true : Boolean(base.mandatory),
      minLength: null,
      maxLength: null,
      minNumber: null,
      maxNumber: null,
      pattern: null,
      errorMessage: null
    }
  };
  if (getActivePageKey() === "pii") {
    ensurePiiSections(active);
    const section = getActivePiiSection(active);
    if (!section) {
      window.alert("Please create and select a PII section first.");
      return;
    }
    parentField.sectionId = section.id;
    parentField.sectionLabel = section.name;
  }
  if (getWorkingFormPageKey() === "offer") {
    const meta = getOfferFieldSectionMeta(parentField);
    parentField.sectionId = meta.sectionId;
    parentField.sectionLabel = meta.sectionLabel;
  }

  pageState.canvasFields.push(parentField);

  pageState.availableIds.delete(base.id);
  pendingDropRemovedFromPalette = false;
  addAuditLog(active, "Added", parentField.label);

  if (type === "dependent" && childConfig) {
    const childId = normalizeFieldId("", childConfig.childLabel, pageState.fieldCatalog);
    const childField = {
      id: childId,
      label: childConfig.childLabel,
      mandatory: false,
      isCustom: true
    };

    pageState.fieldCatalog.push(childField);
    pageState.availableIds.delete(childId);
    const childCanvasField = {
      ...childField,
      type: childConfig.childType,
      typeLabel: `child (${childConfig.childType})`,
      options: childConfig.childOptions,
      dependentOn: base.id,
      validation: {
        required: childConfig.childType === "dropdown",
        minLength: null,
        maxLength: null,
        minNumber: null,
        maxNumber: null,
        pattern: null,
        errorMessage: null
      }
    };
    if (getActivePageKey() === "pii" && parentField.sectionId) {
      childCanvasField.sectionId = parentField.sectionId;
      childCanvasField.sectionLabel = parentField.sectionLabel;
    } else if (getWorkingFormPageKey() === "offer") {
      const meta = getOfferFieldSectionMeta(childCanvasField);
      childCanvasField.sectionId = meta.sectionId;
      childCanvasField.sectionLabel = meta.sectionLabel;
    }
    pageState.canvasFields.push(childCanvasField);
    addAuditLog(active, "Added", `${childConfig.childLabel} (Dependent)`);
  }

  if (getWorkingFormPageKey() === "apply") {
    ensureApplySourceStates(active);
    syncApplySourceAvailability(active);
  }

  autoSaveCanvasSubmission(active, pageState);
  saveClients();
  clearSQL();
  closeTypeModal({ restorePending: false });
  renderWorkspace();
  renderPreviewForm();
}

if (openClientModalBtn) openClientModalBtn.addEventListener("click", openClientModal);
if (closeClientModalBtn) closeClientModalBtn.addEventListener("click", closeClientModal);
if (clientSowInput) {
  clientSowInput.addEventListener("change", async () => {
    const file = clientSowInput.files && clientSowInput.files[0] ? clientSowInput.files[0] : null;
    pendingClientSowDocument = file ? await createClientSowDocumentFromFile(file) : null;
    if (!pendingClientSowDocument && clientSowInput) clientSowInput.value = "";
    renderClientSowMeta();
  });
}
if (adminSowManageBtn) adminSowManageBtn.addEventListener("click", openAdminSowModal);
if (closeAdminSowModalBtn) closeAdminSowModalBtn.addEventListener("click", closeAdminSowModal);
if (adminSowUploadBtn) {
  adminSowUploadBtn.addEventListener("click", () => {
    if (!isAdmin() || !adminSowFileInput) return;
    adminSowFileInput.value = "";
    adminSowFileInput.click();
  });
}
if (adminSowFileInput) adminSowFileInput.addEventListener("change", handleAdminSowUpload);
if (adminSowDownloadBtn) adminSowDownloadBtn.addEventListener("click", downloadActiveClientSow);
if (adminSowSubmitBtn) adminSowSubmitBtn.addEventListener("click", submitAdminSowDetails);
if (adminSowRemoveBtn) adminSowRemoveBtn.addEventListener("click", removeActiveClientSow);
if (adminSowHistorySort) {
  adminSowHistorySort.addEventListener("change", () => {
    const active = getActiveClient();
    renderAdminSowHistory(active);
  });
}
if (openClientUsersBtn) openClientUsersBtn.addEventListener("click", openClientUsersModal);
if (closeClientUsersModalBtn) closeClientUsersModalBtn.addEventListener("click", closeClientUsersModal);
if (openClientUserFormBtn) openClientUserFormBtn.addEventListener("click", openClientUserFormInline);
if (cancelClientUserFormBtn) cancelClientUserFormBtn.addEventListener("click", closeClientUserFormInline);
if (saveClientUserBtn) saveClientUserBtn.addEventListener("click", addClientSubUser);
if (closeClientUserAccessModalBtn) closeClientUserAccessModalBtn.addEventListener("click", closeClientUserAccessModal);
if (saveClientUserAccessBtn) saveClientUserAccessBtn.addEventListener("click", saveClientUserAccess);
if (clientSubUserPasswordToggle) {
  clientSubUserPasswordToggle.addEventListener("change", () => {
    if (!clientSubUserPassword) return;
    clientSubUserPassword.type = clientSubUserPasswordToggle.checked ? "text" : "password";
  });
}
if (clientSubUserPassword) {
  clientSubUserPassword.addEventListener("keydown", event => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    addClientSubUser();
  });
}
if (clientUsersListBody) {
  clientUsersListBody.addEventListener("click", event => {
    const btn = event.target.closest("[data-client-user-action]");
    if (!btn) return;
    const action = btn.dataset.clientUserAction;
    const userId = btn.dataset.clientUserId;
    if (!action || !userId) return;
    updateClientSubUserAction(userId, action);
  });
}
if (openAddUserModalBtn) openAddUserModalBtn.addEventListener("click", openAddUserModal);
if (closeAddUserModalBtn) closeAddUserModalBtn.addEventListener("click", closeAddUserModal);
if (openManagerUserFormBtn) {
  openManagerUserFormBtn.addEventListener("click", () => {
    openManagerUserFormModal();
  });
}
if (cancelManagerUserFormBtn) {
  cancelManagerUserFormBtn.addEventListener("click", () => {
    closeManagerUserFormModal();
    resetManagerUserForm();
  });
}
if (closeManagerUserFormModalBtn) closeManagerUserFormModalBtn.addEventListener("click", closeManagerUserFormModal);
if (saveUserBtn) saveUserBtn.addEventListener("click", saveManagedUserFromModal);
if (newUserPasswordToggle) {
  newUserPasswordToggle.addEventListener("change", () => {
    if (!newUserPassword) return;
    newUserPassword.type = newUserPasswordToggle.checked ? "text" : "password";
  });
}
if (newUserPassword) {
  newUserPassword.addEventListener("keydown", event => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    saveManagedUserFromModal();
  });
}
if (managedUserListBody) {
  managedUserListBody.addEventListener("click", event => {
    const btn = event.target.closest("[data-user-action]");
    if (!btn || !isAdmin()) return;
    const action = btn.dataset.userAction;
    const userId = btn.dataset.userId;
    if (!userId) return;
    if (action === "toggle") {
      toggleManagedUserAccess(userId);
      return;
    }
    if (action === "delete") {
      deleteManagedUser(userId);
    }
  });
}
if (integrationCount) {
  integrationCount.addEventListener("input", () => {
    const snapshot = getIntegrationRowsSnapshot();
    renderIntegrationRows(parseInt(integrationCount.value, 10) || 1, snapshot);
  });
}
if (piiSectionSelect) {
  piiSectionSelect.addEventListener("change", () => {
    if (!canEditWorkspace()) return;
    const active = getActiveClient();
    if (!active) return;
    ensurePiiSections(active);
    const nextValue = piiSectionSelect.value || "";
    if (nextValue === "__add_new_section__") {
      const name = window.prompt("Enter new PII section name");
      if (!name || !String(name).trim()) {
        renderPiiSectionManager();
        return;
      }
      const added = addPiiSectionForActiveClient(String(name).trim());
      if (!added) renderPiiSectionManager();
      return;
    }
    active.piiSections.activeSectionId = nextValue || null;
    saveClients();
    renderPiiSectionManager();
  });
}
if (piiGeoFilterSelect) {
  piiGeoFilterSelect.addEventListener("change", () => {
    const active = getActiveClient();
    if (!active) return;
    ensureDepartmentStructure(active);
    ensurePiiGeoStates(active);
    const selectedGeo = String(piiGeoFilterSelect.value || "").trim();
    const geos = Array.isArray(active.departmentStructure?.geos) ? active.departmentStructure.geos : [];
    if (!selectedGeo || !geos.some(geo => String(geo || "").toLowerCase() === selectedGeo.toLowerCase())) return;
    active.piiGeoFilter = selectedGeo;
    if (canEditWorkspace()) {
      addAuditLog(active, "PII Geo Switched", selectedGeo, {
        eventType: "field",
        actorRole: currentRole || "client",
        actorName: active.name || "Client",
        pageKey: "pii"
      });
      saveClients();
    }
    clearSQL();
    renderWorkspace();
  });
}
if (piiGeoAddBtn) piiGeoAddBtn.addEventListener("click", addGeoFromPii);
if (applyGeoFilterSelect) {
  applyGeoFilterSelect.addEventListener("change", () => {
    const active = getActiveClient();
    if (!active) return;
    ensureDepartmentStructure(active);
    ensureApplySourceStates(active);
    const selectedGeo = String(applyGeoFilterSelect.value || "").trim();
    const geos = Array.isArray(active.departmentStructure?.geos) ? active.departmentStructure.geos : [];
    if (!selectedGeo || !geos.some(geo => String(geo || "").toLowerCase() === selectedGeo.toLowerCase())) return;
    active.applyGeoFilter = selectedGeo;
    if (canEditWorkspace()) {
      addAuditLog(active, "Apply Geo Switched", selectedGeo, {
        eventType: "field",
        actorRole: currentRole || "client",
        actorName: active.name || "Client",
        pageKey: "apply"
      });
      saveClients();
    }
    clearSQL();
    renderWorkspace();
  });
}
if (applyGeoAddBtn) applyGeoAddBtn.addEventListener("click", addGeoFromApply);
if (piiAddSectionToCanvasBtn) piiAddSectionToCanvasBtn.addEventListener("click", addSelectedPiiSectionToCanvas);
if (piiRemoveSectionFromCanvasBtn) piiRemoveSectionFromCanvasBtn.addEventListener("click", removeSelectedPiiSectionFromCanvas);
if (firstLoginResetSubmitBtn) firstLoginResetSubmitBtn.addEventListener("click", submitFirstLoginPasswordReset);
if (firstLoginResetCancelBtn) firstLoginResetCancelBtn.addEventListener("click", closeFirstLoginResetModal);
if (firstLoginConfirmPassword) {
  firstLoginConfirmPassword.addEventListener("keydown", event => {
    if (event.key === "Enter") submitFirstLoginPasswordReset();
  });
}
if (saveClientBtn) {
  saveClientBtn.addEventListener("click", async () => {
    if (!canManageClients()) return;
    const name = clientModalName ? clientModalName.value.trim() : "";
    const loginEmailValue = clientUserEmail ? clientUserEmail.value.trim().toLowerCase() : "";
    const loginPasswordValue = clientUserPassword ? clientUserPassword.value.trim() : "";
    const productValue = normalizeClientProduct(clientProduct ? clientProduct.value : "Standard");
    if (!name || !loginEmailValue) {
      window.alert("Client name and login user ID are required.");
      return;
    }

    const editingClient = editingClientId ? clients.find(item => item.id === editingClientId) : null;
    if (editingClient && !canManageClientRecord(editingClient)) {
      window.alert("You do not have permission to edit this client.");
      return;
    }

    if (isLoginEmailInUse(loginEmailValue, { ignoreClientId: editingClient ? editingClient.id : null })) {
      window.alert("Client login email is already used.");
      return;
    }

    const integrations = Array.from(integrationRows.querySelectorAll(".integration-row")).map(row => ({
      type: row.querySelector('[data-role="type"]').value,
      vendor: row.querySelector('[data-role="vendor"]').value.trim() || "NA"
    }));
    const selectedSowFile = clientSowInput && clientSowInput.files ? clientSowInput.files[0] : null;
    const sowDocument = selectedSowFile
      ? await createClientSowDocumentFromFile(selectedSowFile)
      : normalizeClientSowDocument(pendingClientSowDocument);
    if (selectedSowFile && !sowDocument) return;

    if (editingClient) {
      const resolvedSow = selectedSowFile
        ? await persistSowDocumentForClient(editingClient.id, sowDocument)
        : sowDocument;
      if (selectedSowFile && !resolvedSow) return;
      const oldIdentity = `${editingClient.name || ""} (${editingClient.loginEmail || ""})`;
      editingClient.name = name;
      editingClient.loginEmail = loginEmailValue;
      editingClient.product = productValue;
      editingClient.integrations = integrations;
      editingClient.sowDocument = resolvedSow;
      if (selectedSowFile && resolvedSow) addSowHistoryEntry(editingClient, resolvedSow);
      if (loginPasswordValue) {
        editingClient.loginPassword = loginPasswordValue;
        editingClient.forcePasswordReset = false;
      }
      addAuditLog(editingClient, "Client Updated", `${oldIdentity} -> ${name} (${loginEmailValue})`, {
        eventType: "field",
        actorRole: "admin",
        actorName: "Admin",
        pageKey: "requisition"
      });
      activeClientId = editingClient.id;
    } else {
      const client = createClientState(
        name,
        integrations,
        loginEmailValue,
        loginPasswordValue,
        isManager() ? currentUserEmail : AUTH.admin.email,
        null,
        productValue
      );
      const resolvedSow = selectedSowFile
        ? await persistSowDocumentForClient(client.id, sowDocument)
        : sowDocument;
      if (selectedSowFile && !resolvedSow) return;
      client.sowDocument = resolvedSow;
      if (selectedSowFile && resolvedSow) addSowHistoryEntry(client, resolvedSow);
      clients.push(client);
      addAuditLog(client, "Client Added", `${name} (${loginEmailValue})`, {
        eventType: "field",
        actorRole: "admin",
        actorName: "Admin",
        pageKey: "requisition"
      });
      activeClientId = client.id;
    }
    persistSession();
    saveClients();
    closeClientModal();
    renderAll();
  });
}

if (openAddFieldBtn) {
  openAddFieldBtn.addEventListener("click", openAddFieldModal);
}

if (importFieldsBtn && importFieldsInput) {
  importFieldsBtn.addEventListener("click", () => {
    if (!canEditWorkspace()) return;
    importFieldsInput.value = "";
    importFieldsInput.click();
  });
  importFieldsInput.addEventListener("change", async () => {
    const file = importFieldsInput.files && importFieldsInput.files[0] ? importFieldsInput.files[0] : null;
    if (!file) return;
    try {
      await importFieldsForActivePage(file);
    } catch (error) {
      if (String(error?.message || "") === "xlsx_lib_missing") {
        window.alert("Excel parser is unavailable. Please import CSV or load XLSX library.");
      } else {
        window.alert("Unable to import fields. Please verify file format.");
      }
    } finally {
      importFieldsInput.value = "";
    }
  });
}

if (closeAddFieldModalBtn) closeAddFieldModalBtn.addEventListener("click", closeAddFieldModal);

if (addFieldBtn) {
  addFieldBtn.addEventListener("click", () => {
    const active = getActiveClient();
    const pageState = getPageState(active);
    if (!active) return;
    if (!pageState) return;

    const label = customFieldLabel ? customFieldLabel.value.trim() : "";
    if (!label) return;

    const id = normalizeFieldId(customFieldId ? customFieldId.value.trim() : "", label, pageState.fieldCatalog);
    const newField = {
      id,
      label,
      mandatory: Boolean(customFieldMandatory && customFieldMandatory.checked),
      isCustom: true
    };
    if (getWorkingFormPageKey() === "offer") {
      const selectedSection = customFieldOfferSection ? String(customFieldOfferSection.value || "").trim() : "";
      if (selectedSection && OFFER_SECTION_LABELS[selectedSection]) {
        newField.sectionId = selectedSection;
        newField.sectionLabel = OFFER_SECTION_LABELS[selectedSection];
      }
      const meta = getOfferFieldSectionMeta(newField);
      newField.sectionId = meta.sectionId;
      newField.sectionLabel = meta.sectionLabel;
    }

    pageState.fieldCatalog.push(newField);
    pageState.availableIds.add(id);
    if (getWorkingFormPageKey() === "apply") {
      ensureApplySourceStates(active);
      syncApplySourceAvailability(active);
    }
    addAuditLog(active, "Field Added To Palette", newField.label, {
      eventType: "field",
      actorRole: currentRole || "client",
      actorName: active.name || "Client",
      pageKey: getActivePageKey()
    });

    saveClients();
    closeAddFieldModal();
    renderWorkspace();
  });
}

if (canvas) {
  canvas.addEventListener("click", event => {
    const deleteBtn = event.target.closest("[data-canvas-delete-index]");
    if (!deleteBtn) return;
    event.preventDefault();
    event.stopPropagation();
    removeCanvasFieldByIndex(deleteBtn.dataset.canvasDeleteIndex);
  });

  canvas.addEventListener("dragover", event => {
    if (!canEditWorkspace()) return;
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
  });

  canvas.addEventListener("drop", event => {
    if (!canEditWorkspace()) return;
    event.preventDefault();
    const active = getActiveClient();
    const pageState = getPageState(active);
    if (!active) return;
    if (!pageState) return;

    const dropFieldId = event.dataTransfer.getData("id");
    const moveId = event.dataTransfer.getData("moveId");

    if (dropFieldId && pageState.availableIds.has(dropFieldId)) {
      openTypeModal(dropFieldId);
      return;
    }

    if (moveId) {
      commitCanvasOrderFromDom();
      saveClients();
      clearSQL();
      renderWorkspace();
    }
  });
}

if (addDependencyRuleBtn) {
  addDependencyRuleBtn.addEventListener("click", addDependencyRuleForActivePage);
}

if (dependencyRuleBody) {
  dependencyRuleBody.addEventListener("click", event => {
    const removeBtn = event.target.closest("[data-dep-action='remove']");
    if (!removeBtn) return;
    const ruleId = String(removeBtn.getAttribute("data-dep-rule-id") || "").trim();
    if (!ruleId) return;
    removeDependencyRuleForActivePage(ruleId);
  });

  dependencyRuleBody.addEventListener("change", event => {
    const control = event.target.closest("[data-dep-key]");
    if (!control) return;
    const ruleId = String(control.getAttribute("data-dep-rule-id") || "").trim();
    const key = String(control.getAttribute("data-dep-key") || "").trim();
    if (!ruleId || !key) return;
    updateDependencyRuleForActivePage(ruleId, key, control.value);
  });

  dependencyRuleBody.addEventListener("input", event => {
    const control = event.target.closest("[data-dep-key='value']");
    if (!control) return;
    const ruleId = String(control.getAttribute("data-dep-rule-id") || "").trim();
    if (!ruleId) return;
    updateDependencyRuleForActivePage(ruleId, "value", control.value);
  });
}

if (submitCanvasBtn) {
  submitCanvasBtn.addEventListener("click", () => {
    if (!canEditWorkspace()) return;
    const active = getActiveClient();
    const pageState = getPageState(active);
    if (!active) return;
    if (!pageState) return;
    pageState.submittedCanvasFields = JSON.parse(JSON.stringify(pageState.canvasFields));
    pageState.submittedAt = new Date().toLocaleString();
    addAuditLog(active, "Submitted", `${pageState.canvasFields.length} field(s)`, { eventType: "submission" });
    saveClients();
    window.alert(`${getPageLabel(getWorkingFormPageKey())} submitted.`);
    renderAll();
  });
}

if (closeTypeModalBtn) closeTypeModalBtn.addEventListener("click", closeTypeModal);
if (confirmTypeBtn) confirmTypeBtn.addEventListener("click", applyDropFieldWithType);
if (fieldTypeSelect) fieldTypeSelect.addEventListener("change", updateTypeModalFields);
if (parentFieldTypeSelect) parentFieldTypeSelect.addEventListener("change", updateTypeModalFields);
if (dependentFieldTypeSelect) dependentFieldTypeSelect.addEventListener("change", updateTypeModalFields);
if (openAuditLogBtn) openAuditLogBtn.addEventListener("click", openAuditModal);
if (closeAuditModalBtn) closeAuditModalBtn.addEventListener("click", closeAuditModal);
if (auditTypeFilter) auditTypeFilter.addEventListener("change", renderAuditLogs);
if (auditActorFilter) auditActorFilter.addEventListener("change", renderAuditLogs);
if (closeClientDetailModalBtn) closeClientDetailModalBtn.addEventListener("click", closeClientDetailModal);
if (closeDeleteClientAuthModalBtn) closeDeleteClientAuthModalBtn.addEventListener("click", closeDeleteClientAuthModal);
if (confirmDeleteClientBtn) confirmDeleteClientBtn.addEventListener("click", confirmClientRemovalWithAuth);
if (closeDeleteUserAuthModalBtn) closeDeleteUserAuthModalBtn.addEventListener("click", closeDeleteManagedUserAuthModal);
if (confirmDeleteUserBtn) confirmDeleteUserBtn.addEventListener("click", confirmManagedUserRemovalWithAuth);
if (deleteClientAuthInput) {
  deleteClientAuthInput.addEventListener("keydown", event => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    confirmClientRemovalWithAuth();
  });
}
if (deleteUserAuthInput) {
  deleteUserAuthInput.addEventListener("keydown", event => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    confirmManagedUserRemovalWithAuth();
  });
}
if (openPreviewTopBtn) openPreviewTopBtn.addEventListener("click", openPreviewModal);
if (closePreviewModalBtn) closePreviewModalBtn.addEventListener("click", closePreviewModal);
if (generateSqlBtn) generateSqlBtn.addEventListener("click", generateSQL);
if (downloadRequisitionWorkbookBtn) downloadRequisitionWorkbookBtn.addEventListener("click", exportRequisitionWorkbook);
if (downloadPiiWorkbookBtn) downloadPiiWorkbookBtn.addEventListener("click", exportPiiWorkbook);
if (downloadApplyWorkbookBtn) downloadApplyWorkbookBtn.addEventListener("click", exportApplyWorkbook);
if (downloadOfferWorkbookBtn) downloadOfferWorkbookBtn.addEventListener("click", exportOfferWorkbook);
if (previewForm) previewForm.addEventListener("submit", event => event.preventDefault());
if (previewDeptSelect) {
  previewDeptSelect.addEventListener("change", () => {
    previewDeptSelect.dataset.selected = previewDeptSelect.value || "";
    if (previewSubDeptSelect) previewSubDeptSelect.dataset.selected = MAIN_SUB_DEPARTMENT_KEY;
    if (previewGeoSelect) previewGeoSelect.dataset.selected = MAIN_GEO_KEY;
    renderPreviewForm();
  });
}
if (previewSubDeptSelect) {
  previewSubDeptSelect.addEventListener("change", () => {
    previewSubDeptSelect.dataset.selected = previewSubDeptSelect.value || MAIN_SUB_DEPARTMENT_KEY;
    if (previewGeoSelect) previewGeoSelect.dataset.selected = MAIN_GEO_KEY;
    renderPreviewForm();
  });
}
if (previewGeoSelect) {
  previewGeoSelect.addEventListener("change", () => {
    previewGeoSelect.dataset.selected = previewGeoSelect.value || MAIN_GEO_KEY;
    renderPreviewForm();
  });
}
if (logoutBtn) logoutBtn.addEventListener("click", logout);
if (sendChatBtn) sendChatBtn.addEventListener("click", sendChatMessage);
if (chatMessageInput) {
  chatMessageInput.addEventListener("keydown", event => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    sendChatMessage();
  });
}
if (chatAttachBtn) {
  chatAttachBtn.addEventListener("click", () => {
    if (!chatFileInput) return;
    chatFileInput.click();
  });
}
if (chatFaqBtn) {
  chatFaqBtn.addEventListener("click", () => {
    sendChatFaqLibraryMessage();
  });
}
if (chatFileInput) {
  chatFileInput.addEventListener("change", () => {
    handleChatFileSelected();
  });
}
if (workflowAddNodeBtn) workflowAddNodeBtn.addEventListener("click", addWorkflowNode);
if (workflowLoadExampleBtn) workflowLoadExampleBtn.addEventListener("click", loadExampleWorkflow);
if (workflowConnectBtn) workflowConnectBtn.addEventListener("click", toggleWorkflowConnectMode);
if (workflowDeleteNodeBtn) workflowDeleteNodeBtn.addEventListener("click", deleteSelectedWorkflowNode);
if (workflowClearBtn) workflowClearBtn.addEventListener("click", clearWorkflow);
if (workflowImportSvgBtn) workflowImportSvgBtn.addEventListener("click", triggerWorkflowSvgImport);
if (workflowExportSvgBtn) workflowExportSvgBtn.addEventListener("click", exportWorkflowSvg);
if (workflowExportPngBtn) workflowExportPngBtn.addEventListener("click", exportWorkflowPng);
if (workflowImportSvgInput) {
  workflowImportSvgInput.addEventListener("change", async () => {
    const file = workflowImportSvgInput.files && workflowImportSvgInput.files[0];
    if (!file) return;
    try {
      await importWorkflowSvgFile(file);
    } catch (error) {
      window.alert("Unable to import SVG. Please use a valid workflow SVG export file.");
    } finally {
      workflowImportSvgInput.value = "";
    }
  });
}
if (workflowNodeLabel) {
  workflowNodeLabel.addEventListener("keydown", event => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    addWorkflowNode();
  });
}
if (workflowCanvas) {
  workflowCanvas.addEventListener("click", () => {
    if (!selectedWorkflowNodeId && !workflowConnectFromNodeId) return;
    selectedWorkflowNodeId = null;
    workflowConnectFromNodeId = null;
    renderWorkflowBuilder();
  });
}
if (chatLauncherBtn) {
  chatLauncherBtn.addEventListener("click", () => {
    if (!getActiveClient()) return;
    setChatPopupOpen(!isChatPopupOpen);
  });
}
if (closeChatPopupBtn) {
  closeChatPopupBtn.addEventListener("click", () => {
    setChatPopupOpen(false);
  });
}

if (clientPageTabs) {
  clientPageTabs.addEventListener("click", event => {
    const tab = event.target.closest(".client-page-tab");
    if (!tab || (!isClientRole() && !canManageClients())) return;
    const nextPage = tab.dataset.page;
    const currentPage = getActivePageKey();
    if (!nextPage || nextPage === currentPage) return;
    if (isClientRole() && !canAccessClientPage(nextPage)) {
      window.alert("You do not have access to this section.");
      return;
    }
    if (isClientRole()) activeClientPage = nextPage;
    if (canManageClients()) activeAdminPage = nextPage;
    if (nextPage === "fitment" && !["offer", "calculator"].includes(activeFitmentView)) {
      activeFitmentView = "offer";
    }
    clearSQL();
    renderWorkspace();
  });
}

if (fitmentOfferSwitcher) {
  fitmentOfferSwitcher.addEventListener("click", event => {
    const btn = event.target.closest("[data-fitment-view]");
    if (!btn) return;
    const mode = btn.dataset.fitmentView;
    if (!mode || mode === activeFitmentView) return;
    if (mode !== "offer" && mode !== "calculator") return;
    activeFitmentView = mode;
    clearSQL();
    renderWorkspace();
  });
}

if (taChecklistBody) {
  taChecklistBody.addEventListener("click", event => {
    if (!canManageClients()) return;
    const btn = event.target.closest("[data-ta-action]");
    if (!btn) return;
    const active = getActiveClient();
    if (!active) return;
    ensureTaChecklist(active);
    const index = Number(btn.dataset.taIndex);
    const action = btn.dataset.taAction;
    if (!Number.isInteger(index) || index < 0 || index >= active.taChecklist.length) return;

    if (action === "add") {
      const newRow = createBlankTaChecklistRow(active.taChecklist.length + 1);
      active.taChecklist.splice(index + 1, 0, newRow);
      reindexTaChecklist(active);
      addAuditLog(active, "TA Checklist Row Added", `Inserted row below S.No ${index + 1}`, {
        eventType: "field",
        actorRole: currentRole || "admin",
        actorName: isAdmin() ? "Admin" : "Manager",
        pageKey: "ta_checklist"
      });
      saveClients();
      renderTaChecklist();
      return;
    }

    if (action === "remove") {
      if (active.taChecklist.length <= 1) {
        window.alert("At least one TA checklist row is required.");
        return;
      }
      const target = active.taChecklist[index];
      const ok = window.confirm(`Delete TA checklist row ${target?.sNo || index + 1}?`);
      if (!ok) return;
      active.taChecklist.splice(index, 1);
      reindexTaChecklist(active);
      addAuditLog(active, "TA Checklist Row Removed", `Removed row ${target?.sNo || index + 1}`, {
        eventType: "field",
        actorRole: currentRole || "admin",
        actorName: isAdmin() ? "Admin" : "Manager",
        pageKey: "ta_checklist"
      });
      saveClients();
      renderTaChecklist();
    }
  });

  taChecklistBody.addEventListener("change", event => {
    if (!canManageClients()) return;
    const input = event.target.closest("[data-ta-key]");
    if (!input) return;
    const active = getActiveClient();
    if (!active) return;
    ensureTaChecklist(active);
    const index = Number(input.dataset.taIndex);
    const key = input.dataset.taKey;
    if (!Number.isInteger(index) || index < 0 || index >= active.taChecklist.length) return;
    active.taChecklist[index][key] = input.value;
    addAuditLog(active, "TA Checklist Updated", `${active.taChecklist[index].requirement} (${key})`, {
      eventType: "field",
      actorRole: currentRole || "admin",
      actorName: isAdmin() ? "Admin" : "Manager",
      pageKey: "ta_checklist"
    });
    saveClients();
    renderTaChecklist();
  });
}

function addDocumentForStage(stageKey) {
  if (!canEditWorkspace()) return;
  const active = getActiveClient();
  if (!active) return;
  ensureDocumentCollection(active);
  const activeGeo = getDocumentCollectionActiveGeo(active);
  if (!activeGeo) {
    window.alert("Please add a Geo first.");
    return;
  }
  active.documentCollection.activeGeo = activeGeo;
  const bucket = ensureDocumentCollectionGeoBucket(active, activeGeo);
  const isPre = stageKey === "pre";
  const input = isPre ? preOfferDocInput : postOfferDocInput;
  const remarkInput = isPre ? preOfferDocRemarkInput : postOfferDocRemarkInput;
  const value = String(input ? input.value : "").trim();
  const remark = String(remarkInput ? remarkInput.value : "").trim();
  if (!value) return;
  const list = isPre ? bucket.preOffer : bucket.postOffer;
  if (list.some(item => String(item?.name || "").toLowerCase() === value.toLowerCase())) {
    window.alert("Document already exists in this stage.");
    return;
  }
  list.push({ name: value, remark });
  addAuditLog(active, "Document Added", `${activeGeo} | ${isPre ? "Pre-Offer" : "Post-Offer"} - ${value}`, {
    eventType: "field",
    actorRole: "client",
    actorName: active.name || "Client",
    pageKey: "document_collection"
  });
  if (input) input.value = "";
  if (remarkInput) remarkInput.value = "";
  saveClients();
  renderDocumentCollection();
}

function removeDocumentForStage(stageKey, index) {
  if (!canEditWorkspace()) return;
  const active = getActiveClient();
  if (!active) return;
  ensureDocumentCollection(active);
  const activeGeo = getDocumentCollectionActiveGeo(active);
  if (!activeGeo) return;
  active.documentCollection.activeGeo = activeGeo;
  const bucket = ensureDocumentCollectionGeoBucket(active, activeGeo);
  const isPre = stageKey === "pre";
  const list = isPre ? bucket.preOffer : bucket.postOffer;
  const idx = Number(index);
  if (!Number.isInteger(idx) || idx < 0 || idx >= list.length) return;
  const removed = list[idx];
  const removedName = String(removed?.name || removed || "").trim();
  list.splice(idx, 1);
  addAuditLog(active, "Document Removed", `${activeGeo} | ${isPre ? "Pre-Offer" : "Post-Offer"} - ${removedName}`, {
    eventType: "field",
    actorRole: "client",
    actorName: active.name || "Client",
    pageKey: "document_collection"
  });
  saveClients();
  renderDocumentCollection();
}

function addGeoFromPii() {
  if (!canEditWorkspace()) return;
  const seed = "";
  const value = window.prompt("Enter Geo name for PII form:", seed);
  if (value === null) return;
  const geoName = String(value || "").trim();
  if (!geoName) return;
  addGeoForActiveClient(geoName);
}

function addGeoFromApply() {
  if (!canEditWorkspace()) return;
  const seed = "";
  const value = window.prompt("Enter Geo name for Apply form:", seed);
  if (value === null) return;
  const geoName = String(value || "").trim();
  if (!geoName) return;
  addGeoForActiveClient(geoName);
}

function addGeoFromDocumentCollection() {
  if (!canEditWorkspace()) return;
  const seed = "";
  const value = window.prompt("Enter Geo name for document checklist:", seed);
  if (value === null) return;
  const geoName = String(value || "").trim();
  if (!geoName) return;
  addGeoForActiveClient(geoName);
}

if (documentCollectionGeoSelect) {
  documentCollectionGeoSelect.addEventListener("change", () => {
    const active = getActiveClient();
    if (!active) return;
    ensureDocumentCollection(active);
    const selectedGeo = String(documentCollectionGeoSelect.value || "").trim();
    const geos = Array.isArray(active.departmentStructure?.geos) ? active.departmentStructure.geos : [];
    if (!selectedGeo || !geos.some(geo => geo.toLowerCase() === selectedGeo.toLowerCase())) return;
    active.documentCollection.activeGeo = selectedGeo;
    ensureDocumentCollectionGeoBucket(active, selectedGeo);
    if (canEditWorkspace()) {
      addAuditLog(active, "Document Geo Switched", selectedGeo, {
        eventType: "field",
        actorRole: currentRole || "client",
        actorName: active.name || "Client",
        pageKey: "document_collection"
      });
      saveClients();
    }
    renderDocumentCollection();
  });
}

if (documentCollectionAddGeoBtn) {
  documentCollectionAddGeoBtn.addEventListener("click", addGeoFromDocumentCollection);
}

if (itItemPanel) {
  // Control IT item collapsibles explicitly to avoid browser quirks where multiple
  // details can toggle together in complex grid layouts.
  itItemPanel.addEventListener("click", event => {
    const summary = event.target.closest(".it-item-summary");
    if (!summary) return;
    event.preventDefault();
    const details = summary.closest("details");
    if (!details) return;
    const willOpen = !details.hasAttribute("open");
    if (willOpen) details.setAttribute("open", "");
    else details.removeAttribute("open");
  });
}

function updateSsoUploadCard(file, titleEl, metaEl, fallbackTitle) {
  if (!file) return "";
  const uploadedAt = new Date().toLocaleString();
  if (titleEl) titleEl.textContent = file.name || fallbackTitle;
  if (metaEl) {
    metaEl.textContent = `Uploaded at ${uploadedAt}`;
  }
  return uploadedAt;
}

if (ssoMetadataUploadBtn && ssoMetadataInput) {
  ssoMetadataUploadBtn.addEventListener("click", () => ssoMetadataInput.click());
  ssoMetadataInput.addEventListener("change", () => {
    const file = ssoMetadataInput.files && ssoMetadataInput.files[0] ? ssoMetadataInput.files[0] : null;
    const uploadedAt = updateSsoUploadCard(file, ssoMetadataName, ssoMetadataMeta, "Metadata (.xml)");
    const active = getActiveClient();
    if (!active || !file || !uploadedAt) return;
    ensureItItemData(active);
    active.itItemData.sso.metadataFileName = file.name || "";
    active.itItemData.sso.metadataUploadedAt = uploadedAt;
    saveClients();
  });
}

if (ssoCertificateUploadBtn && ssoCertificateInput) {
  ssoCertificateUploadBtn.addEventListener("click", () => ssoCertificateInput.click());
  ssoCertificateInput.addEventListener("change", () => {
    const file = ssoCertificateInput.files && ssoCertificateInput.files[0] ? ssoCertificateInput.files[0] : null;
    const uploadedAt = updateSsoUploadCard(file, ssoCertificateName, ssoCertificateMeta, "Signing Certificate (.cer)");
    const active = getActiveClient();
    if (!active || !file || !uploadedAt) return;
    ensureItItemData(active);
    active.itItemData.sso.certificateFileName = file.name || "";
    active.itItemData.sso.certificateUploadedAt = uploadedAt;
    saveClients();
  });
}

if (calendarSubmitBtn) {
  calendarSubmitBtn.addEventListener("click", () => {
    const active = getActiveClient();
    if (!active) return;
    ensureItItemData(active);
    active.itItemData.calendar.clientId = String(calendarClientId ? calendarClientId.value : "").trim();
    active.itItemData.calendar.tenantId = String(calendarTenantId ? calendarTenantId.value : "").trim();
    active.itItemData.calendar.submittedAt = new Date().toISOString();
    addAuditLog(active, "IT Item Submitted", "Calendar Integration", {
      eventType: "field",
      actorRole: currentRole || "client",
      actorName: active.name || "Client",
      pageKey: "it_item"
    });
    saveClients();
    window.alert("Calendar Integration submitted.");
  });
}

if (ssoSubmitBtn) {
  ssoSubmitBtn.addEventListener("click", () => {
    const active = getActiveClient();
    if (!active) return;
    ensureItItemData(active);
    active.itItemData.sso.submittedAt = new Date().toISOString();
    addAuditLog(active, "IT Item Submitted", "Single Sign On (SSO)", {
      eventType: "field",
      actorRole: currentRole || "client",
      actorName: active.name || "Client",
      pageKey: "it_item"
    });
    saveClients();
    window.alert("Single Sign On (SSO) submitted.");
  });
}

if (akamaiSubmitBtn) {
  akamaiSubmitBtn.addEventListener("click", () => {
    const active = getActiveClient();
    if (!active) return;
    ensureItItemData(active);
    active.itItemData.akamai.subDomain = String(akamaiSubDomain ? akamaiSubDomain.value : "").trim();
    active.itItemData.akamai.txtRecord = String(akamaiTxtRecord ? akamaiTxtRecord.value : "").trim();
    active.itItemData.akamai.cnameRecord = String(akamaiCnameRecord ? akamaiCnameRecord.value : "").trim();
    active.itItemData.akamai.submittedAt = new Date().toISOString();
    addAuditLog(active, "IT Item Submitted", "Akamai CDN", {
      eventType: "field",
      actorRole: currentRole || "client",
      actorName: active.name || "Client",
      pageKey: "it_item"
    });
    saveClients();
    window.alert("Akamai CDN submitted.");
  });
}

if (dataMigrationSubmitBtn) {
  dataMigrationSubmitBtn.addEventListener("click", () => {
    const active = getActiveClient();
    if (!active) return;
    ensureDataMigrationData(active);
    active.dataMigrationData.source = String(dataMigrationSource ? dataMigrationSource.value : "").trim();
    active.dataMigrationData.cutoverDate = String(dataMigrationCutoverDate ? dataMigrationCutoverDate.value : "").trim();
    active.dataMigrationData.notes = String(dataMigrationNotes ? dataMigrationNotes.value : "").trim();
    active.dataMigrationData.submittedAt = new Date().toISOString();
    addAuditLog(active, "Data Migration Submitted", active.dataMigrationData.source || "Data Migration", {
      eventType: "field",
      actorRole: currentRole || "client",
      actorName: active.name || "Client",
      pageKey: "data_migration"
    });
    saveClients();
    window.alert("Data Migration submitted.");
  });
}

if (dataMigrationTemplateUploadBtn && dataMigrationTemplateInput) {
  dataMigrationTemplateUploadBtn.addEventListener("click", () => dataMigrationTemplateInput.click());
  dataMigrationTemplateInput.addEventListener("change", () => {
    const file = dataMigrationTemplateInput.files && dataMigrationTemplateInput.files[0]
      ? dataMigrationTemplateInput.files[0]
      : null;
    const active = getActiveClient();
    if (!active || !file) return;
    ensureDataMigrationData(active);
    const uploadedAt = new Date().toLocaleString();
    active.dataMigrationData.templateFileName = String(file.name || "").trim();
    active.dataMigrationData.templateUploadedAt = uploadedAt;
    if (dataMigrationTemplateMeta) {
      dataMigrationTemplateMeta.textContent = `${active.dataMigrationData.templateFileName || "Template"} uploaded at ${uploadedAt}`;
    }
    saveClients();
  });
}

if (addPreOfferDocBtn) {
  addPreOfferDocBtn.addEventListener("click", () => addDocumentForStage("pre"));
}

if (preOfferDocInput) {
  preOfferDocInput.addEventListener("keydown", event => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    addDocumentForStage("pre");
  });
}

if (preOfferDocRemarkInput) {
  preOfferDocRemarkInput.addEventListener("keydown", event => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    addDocumentForStage("pre");
  });
}

if (addPostOfferDocBtn) {
  addPostOfferDocBtn.addEventListener("click", () => addDocumentForStage("post"));
}

if (postOfferDocInput) {
  postOfferDocInput.addEventListener("keydown", event => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    addDocumentForStage("post");
  });
}

if (postOfferDocRemarkInput) {
  postOfferDocRemarkInput.addEventListener("keydown", event => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    addDocumentForStage("post");
  });
}

if (preOfferDocList) {
  preOfferDocList.addEventListener("click", event => {
    const btn = event.target.closest("[data-doc-stage][data-doc-index]");
    if (!btn) return;
    removeDocumentForStage(btn.dataset.docStage, btn.dataset.docIndex);
  });
}

if (postOfferDocList) {
  postOfferDocList.addEventListener("click", event => {
    const btn = event.target.closest("[data-doc-stage][data-doc-index]");
    if (!btn) return;
    removeDocumentForStage(btn.dataset.docStage, btn.dataset.docIndex);
  });
}

async function uploadFitmentCalculator() {
  if (!canEditWorkspace()) return;
  const active = getActiveClient();
  if (!active || !fitmentFileInput) return;
  ensureFitmentData(active);
  const file = fitmentFileInput.files ? fitmentFileInput.files[0] : null;
  if (!file) {
    window.alert("Please select a CSV or Excel file.");
    return;
  }
  try {
    const fileDataUrl = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result || ""));
      reader.onerror = () => reject(new Error("file_read_failed"));
      reader.readAsDataURL(file);
    });
    const parsed = await parseSpreadsheetFile(file);
    if (!parsed.rowCount || !parsed.colCount) {
      window.alert("Uploaded file is empty.");
      return;
    }
    active.fitmentData.fileName = file.name || "salary_calculator.csv";
    active.fitmentData.fileType = file.type || "";
    active.fitmentData.fileDataUrl = fileDataUrl;
    active.fitmentData.uploadedAt = new Date().toLocaleString();
    active.fitmentData.mode = parsed.mode || "sheet";
    active.fitmentData.sheetName = parsed.sheetName || "Sheet1";
    active.fitmentData.rowCount = Number(parsed.rowCount || 0);
    active.fitmentData.colCount = Number(parsed.colCount || 0);
    active.fitmentData.cells = parsed.cells && typeof parsed.cells === "object" ? parsed.cells : {};
    active.fitmentData.headers = [];
    active.fitmentData.rows = [];
    addAuditLog(active, "Fitment Uploaded", active.fitmentData.fileName, {
      eventType: "field",
      actorRole: "client",
      actorName: active.name || "Client",
      pageKey: "fitment"
    });
    saveClients();
    renderFitmentPanel();
  } catch (error) {
    if (error && error.message === "file_read_failed") {
      window.alert("Unable to read the selected file.");
      return;
    }
    if (error && error.message === "unsupported_file") {
      window.alert("Please upload salary calculator in .csv, .xlsx, or .xls format.");
      return;
    }
    if (error && error.message === "xlsx_lib_missing") {
      window.alert("Excel parser is unavailable right now. Please upload CSV, or refresh and try again.");
      return;
    }
    window.alert("Unable to read the uploaded file.");
  }
}

if (uploadFitmentBtn) {
  uploadFitmentBtn.addEventListener("click", uploadFitmentCalculator);
}

function clearFitmentData() {
  if (!canEditWorkspace()) return;
  const active = getActiveClient();
  if (!active) return;
  ensureFitmentData(active);
  if (!active.fitmentData.rowCount && !active.fitmentData.colCount) {
    window.alert("No fitment data available to clear.");
    return;
  }
  const ok = window.confirm("Clear uploaded fitment calculator data?");
  if (!ok) return;
  active.fitmentData = createDefaultFitmentData();
  if (fitmentFileInput) fitmentFileInput.value = "";
  addAuditLog(active, "Fitment Cleared", "Fitment data removed", {
    eventType: "field",
    actorRole: "client",
    actorName: active.name || "Client",
    pageKey: "fitment"
  });
  saveClients();
  renderFitmentPanel();
}

function downloadFitmentSourceFile() {
  if (!isAdmin()) return;
  const active = getActiveClient();
  if (!active) return;
  ensureFitmentData(active);
  const hasSourceFile = Boolean(active.fitmentData.fileDataUrl);
  const hasGridData = active.fitmentData.rowCount > 0 && active.fitmentData.colCount > 0;
  if (!hasSourceFile && !hasGridData) {
    window.alert("No fitment file/data available to download.");
    return;
  }

  let blob = null;
  let fileName = active.fitmentData.fileName || "fitment_upload.csv";
  if (hasSourceFile) {
    blob = dataUrlToBlob(active.fitmentData.fileDataUrl);
    if (!blob) {
      try {
        window.open(active.fitmentData.fileDataUrl, "_blank");
        return;
      } catch (error) {
        // Continue to CSV fallback.
      }
    }
  }

  if (!blob) {
    const csv = serializeFitmentToCsv(active.fitmentData);
    blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const baseName = String(active.fitmentData.fileName || "fitment_upload").replace(/\.[a-z0-9]+$/i, "");
    fileName = `${baseName}_replica.csv`;
  }

  const objectUrl = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = objectUrl;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.setTimeout(() => URL.revokeObjectURL(objectUrl), 1500);
}

if (clearFitmentBtn) {
  clearFitmentBtn.addEventListener("click", clearFitmentData);
}

if (downloadFitmentBtn) {
  downloadFitmentBtn.addEventListener("click", downloadFitmentSourceFile);
}

if (fitmentReplicaWrap) {
  fitmentReplicaWrap.addEventListener("focusin", event => {
    const input = event.target.closest("[data-fitment-addr]");
    if (!input) return;
    const active = getActiveClient();
    setFitmentFormulaBar(active, input.dataset.fitmentAddr || "");
  });

  fitmentReplicaWrap.addEventListener("input", event => {
    const input = event.target.closest("[data-fitment-addr]");
    if (!input) return;
    const addr = normalizeCellAddress(input.dataset.fitmentAddr);
    if (!fitmentFormulaBar || !addr) return;
    const live = String(input.value || "").trim();
    if (live.startsWith("=")) {
      fitmentFormulaBar.textContent = `${addr} | Formula: ${live} | Value: (recalculates on change)`;
    }
  });

  fitmentReplicaWrap.addEventListener("change", event => {
    if (!canEditWorkspace()) return;
    const active = getActiveClient();
    if (!active) return;
    ensureFitmentData(active);
    const input = event.target.closest("[data-fitment-addr]");
    if (!input) return;
    const address = normalizeCellAddress(input.dataset.fitmentAddr);
    if (!address) return;
    if (!active.fitmentData.cells[address]) active.fitmentData.cells[address] = { input: "", formula: "", value: "" };
    const current = active.fitmentData.cells[address];
    const typedValue = String(input.value ?? "").trim();
    if (typedValue.startsWith("=")) {
      current.formula = typedValue;
      current.input = "";
      current.value = "";
    } else {
      current.input = typedValue;
      current.formula = "";
      current.value = typedValue;
    }
    recalculateFitmentSheet(active.fitmentData);
    addAuditLog(active, "Fitment Updated", `Cell ${address}`, {
      eventType: "field",
      actorRole: "client",
      actorName: active.name || "Client",
      pageKey: "fitment"
    });
    saveClients();
    setFitmentFormulaBar(active, address);
    renderFitmentPanel();
  });
}

if (requisitionAddDeptBtn) {
  requisitionAddDeptBtn.addEventListener("click", () => {
    addDepartmentForActiveClient(
      requisitionDeptNameInput ? requisitionDeptNameInput.value : "",
      requisitionSubDeptInput ? requisitionSubDeptInput.value : "",
      Boolean(requisitionHasSubDeptCheck && requisitionHasSubDeptCheck.checked)
    );
  });
}

if (requisitionDeptNameInput) {
  requisitionDeptNameInput.addEventListener("keydown", event => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    addDepartmentForActiveClient(
      requisitionDeptNameInput.value,
      requisitionSubDeptInput ? requisitionSubDeptInput.value : "",
      Boolean(requisitionHasSubDeptCheck && requisitionHasSubDeptCheck.checked)
    );
  });
}

if (requisitionSubDeptInput) {
  requisitionSubDeptInput.addEventListener("keydown", event => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    addDepartmentForActiveClient(
      requisitionDeptNameInput ? requisitionDeptNameInput.value : "",
      requisitionSubDeptInput.value,
      Boolean(requisitionHasSubDeptCheck && requisitionHasSubDeptCheck.checked)
    );
  });
}

if (requisitionHasSubDeptCheck) {
  requisitionHasSubDeptCheck.addEventListener("change", () => {
    toggleSubDepartmentInputVisibility();
    if (requisitionHasSubDeptCheck.checked && requisitionSubDeptInput) {
      requisitionSubDeptInput.focus();
    }
  });
}

if (requisitionCreateToggleBtn && requisitionCreateBlock) {
  requisitionCreateToggleBtn.addEventListener("click", () => {
    const nextHidden = !requisitionCreateBlock.classList.contains("hidden");
    requisitionCreateBlock.classList.toggle("hidden", nextHidden);
    requisitionCreateToggleBtn.textContent = nextHidden ? "Expand" : "Collapse";
    requisitionCreateToggleBtn.setAttribute("aria-expanded", String(!nextHidden));
  });
}

if (requisitionWorkspaceToggleBtn && requisitionWorkspaceBlock) {
  requisitionWorkspaceToggleBtn.addEventListener("click", () => {
    const nextHidden = !requisitionWorkspaceBlock.classList.contains("hidden");
    requisitionWorkspaceBlock.classList.toggle("hidden", nextHidden);
    requisitionWorkspaceToggleBtn.textContent = nextHidden ? "Expand" : "Collapse";
    requisitionWorkspaceToggleBtn.setAttribute("aria-expanded", String(!nextHidden));
  });
}

if (requisitionQuickAddDeptBtn) {
  requisitionQuickAddDeptBtn.addEventListener("click", () => {
    if (!canEditWorkspace()) return;
    const active = getActiveClient();
    if (!active) return;
    ensureDepartmentStructure(active);
    const globalGeos = Array.isArray(active.departmentStructure?.geos) ? active.departmentStructure.geos : [];
    if (!globalGeos.length) {
      window.alert("Please add at least one Geo before creating a department.");
      return;
    }
    if (requisitionCreateBlock) {
      requisitionCreateBlock.classList.remove("hidden");
    }
    if (requisitionCreateToggleBtn) {
      requisitionCreateToggleBtn.textContent = "Collapse";
      requisitionCreateToggleBtn.setAttribute("aria-expanded", "true");
    }
    if (requisitionDeptNameInput) requisitionDeptNameInput.focus();
  });
}

if (addReqApprovalRowBtn) {
  addReqApprovalRowBtn.addEventListener("click", () => {
    addRequisitionApprovalRow();
  });
}

if (addOfferApprovalRowBtn) {
  addOfferApprovalRowBtn.addEventListener("click", () => {
    addOfferApprovalRow();
  });
}

if (offerApprovalDeptSelect) {
  offerApprovalDeptSelect.addEventListener("change", () => {
    if (!canEditWorkspace()) {
      renderOfferApprovalMatrix();
      return;
    }
    const active = getActiveClient();
    if (!active) return;
    ensureOfferApprovalByDepartment(active);
    const selectedId = String(offerApprovalDeptSelect.value || "").trim();
    const departments = Array.isArray(active.departmentStructure?.departments) ? active.departmentStructure.departments : [];
    if (!departments.some(item => item.id === selectedId)) return;
    active.activeOfferApprovalDepartmentId = selectedId;
    const selectedName = departments.find(item => item.id === selectedId)?.name || selectedId;
    addAuditLog(active, "Offer Approval Department Switched", selectedName, {
      eventType: "department",
      actorRole: currentRole || "client",
      actorName: active.name || "Client",
      pageKey: "offer"
    });
    saveClients();
    renderOfferApprovalMatrix();
  });
}

if (requisitionDeptSelect) {
  requisitionDeptSelect.addEventListener("change", () => {
    const active = getActiveClient();
    if (!active) return;
    const selectedId = (requisitionDeptSelect.value || "").trim();
    if (!selectedId) return;
    ensureRequisitionDepartmentStates(active);
    active.activeRequisitionDepartmentId = selectedId;
    const selectedDept = getDepartmentById(active, selectedId);
    if (!active.activeRequisitionSubDepartmentByDepartmentId || typeof active.activeRequisitionSubDepartmentByDepartmentId !== "object") {
      active.activeRequisitionSubDepartmentByDepartmentId = {};
    }
    const finalSub = getSubDepartmentLabel(
      selectedDept,
      active.activeRequisitionSubDepartmentByDepartmentId[selectedId]
    );
    active.activeRequisitionSubDepartmentByDepartmentId[selectedId] = finalSub;
    if (!active.activeRequisitionGeoByDepartmentSubKey || typeof active.activeRequisitionGeoByDepartmentSubKey !== "object") {
      active.activeRequisitionGeoByDepartmentSubKey = {};
    }
    const scopeKey = getRequisitionGeoScopeKey(selectedId, finalSub);
    active.activeRequisitionGeoByDepartmentSubKey[scopeKey] = getGeoLabel(
      selectedDept,
      active.activeRequisitionGeoByDepartmentSubKey[scopeKey]
    );
    const selectedName = selectedDept?.name || selectedId;
    addAuditLog(active, "Department Switched", selectedName, {
      eventType: "department",
      actorRole: currentRole || "client",
      actorName: active.name || "Client",
      pageKey: "requisition"
    });
    saveClients();
    clearSQL();
    renderWorkspace();
  });
}

if (requisitionSubDeptSelect) {
  requisitionSubDeptSelect.addEventListener("change", () => {
    const active = getActiveClient();
    if (!active) return;
    const selectedDeptId = getActiveRequisitionDepartmentId(active);
    if (!selectedDeptId) return;
    const selectedSub = (requisitionSubDeptSelect.value || MAIN_SUB_DEPARTMENT_KEY).trim() || MAIN_SUB_DEPARTMENT_KEY;
    ensureRequisitionDepartmentStates(active);
    if (!active.activeRequisitionSubDepartmentByDepartmentId || typeof active.activeRequisitionSubDepartmentByDepartmentId !== "object") {
      active.activeRequisitionSubDepartmentByDepartmentId = {};
    }
    const dept = getDepartmentById(active, selectedDeptId);
    const finalSub = getSubDepartmentLabel(dept, selectedSub);
    active.activeRequisitionSubDepartmentByDepartmentId[selectedDeptId] = finalSub;
    if (!active.activeRequisitionGeoByDepartmentSubKey || typeof active.activeRequisitionGeoByDepartmentSubKey !== "object") {
      active.activeRequisitionGeoByDepartmentSubKey = {};
    }
    const scopeKey = getRequisitionGeoScopeKey(selectedDeptId, finalSub);
    active.activeRequisitionGeoByDepartmentSubKey[scopeKey] = getGeoLabel(
      dept,
      active.activeRequisitionGeoByDepartmentSubKey[scopeKey]
    );
    saveClients();
    clearSQL();
    renderWorkspace();
  });
}

if (requisitionGeoSelect) {
  requisitionGeoSelect.addEventListener("change", () => {
    const active = getActiveClient();
    if (!active) return;
    const selectedGeo = (requisitionGeoSelect.value || MAIN_GEO_KEY).trim() || MAIN_GEO_KEY;
    const availableGeos = Array.isArray(active.departmentStructure?.geos) ? active.departmentStructure.geos : [];
    if (!availableGeos.some(geo => geo.toLowerCase() === selectedGeo.toLowerCase())) return;
    active.activeWorkspaceGeo = selectedGeo;
    const scopedDepartments = getDepartmentsForWorkspaceGeo(active, selectedGeo);
    if (!scopedDepartments.some(item => item.id === active.activeRequisitionDepartmentId)) {
      active.activeRequisitionDepartmentId = scopedDepartments[0] ? scopedDepartments[0].id : null;
    }
    const selectedDeptId = getActiveRequisitionDepartmentId(active);
    if (selectedDeptId) {
      const selectedSub = getActiveRequisitionSubDepartmentName(active);
      if (!active.activeRequisitionGeoByDepartmentSubKey || typeof active.activeRequisitionGeoByDepartmentSubKey !== "object") {
        active.activeRequisitionGeoByDepartmentSubKey = {};
      }
      const scopeKey = getRequisitionGeoScopeKey(selectedDeptId, selectedSub);
      active.activeRequisitionGeoByDepartmentSubKey[scopeKey] = selectedGeo;
    }
    addAuditLog(active, "Geo Switched", selectedGeo, {
      eventType: "department",
      actorRole: currentRole || "client",
      actorName: active.name || "Client",
      pageKey: "requisition"
    });
    saveClients();
    clearSQL();
    renderWorkspace();
  });
}

if (requisitionShowGeoManageBtn) {
  requisitionShowGeoManageBtn.addEventListener("click", () => {
    if (!canEditWorkspace()) return;
    if (requisitionCreateBlock) requisitionCreateBlock.classList.remove("hidden");
    if (requisitionCreateToggleBtn) {
      requisitionCreateToggleBtn.textContent = "Collapse";
      requisitionCreateToggleBtn.setAttribute("aria-expanded", "true");
    }
    if (requisitionGeoManageRowCreate) requisitionGeoManageRowCreate.classList.remove("hidden");
    if (requisitionNewGeoInputCreate) {
      requisitionNewGeoInputCreate.focus();
    } else if (requisitionGeoManageRow) {
      requisitionGeoManageRow.classList.remove("hidden");
      if (requisitionNewGeoInput) requisitionNewGeoInput.focus();
    }
  });
}

if (requisitionShowSubDeptManageBtn) {
  requisitionShowSubDeptManageBtn.addEventListener("click", () => {
    if (!canEditWorkspace()) return;
    const active = getActiveClient();
    if (!active || !getActiveRequisitionDepartmentId(active)) {
      window.alert("Please select a department first.");
      return;
    }
    if (requisitionCreateBlock) {
      requisitionCreateBlock.classList.remove("hidden");
    }
    if (requisitionCreateToggleBtn) {
      requisitionCreateToggleBtn.textContent = "Collapse";
      requisitionCreateToggleBtn.setAttribute("aria-expanded", "true");
    }
    if (requisitionSubDeptManageRow) requisitionSubDeptManageRow.classList.remove("hidden");
    if (requisitionNewSubDeptInput) requisitionNewSubDeptInput.focus();
  });
}

if (requisitionAddSubDeptBtn) {
  requisitionAddSubDeptBtn.addEventListener("click", () => {
    addSubDepartmentForActiveClient(requisitionNewSubDeptInput ? requisitionNewSubDeptInput.value : "");
  });
}

if (requisitionNewSubDeptInput) {
  requisitionNewSubDeptInput.addEventListener("keydown", event => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    addSubDepartmentForActiveClient(requisitionNewSubDeptInput.value);
  });
}

if (requisitionRemoveSubDeptBtn) {
  requisitionRemoveSubDeptBtn.addEventListener("click", () => {
    removeSubDepartmentForActiveClient(requisitionSubDeptSelect ? requisitionSubDeptSelect.value : "");
  });
}

if (requisitionAddGeoBtn) {
  requisitionAddGeoBtn.addEventListener("click", () => {
    addGeoForActiveClient(requisitionNewGeoInput ? requisitionNewGeoInput.value : "");
  });
}

if (requisitionAddGeoBtnCreate) {
  requisitionAddGeoBtnCreate.addEventListener("click", () => {
    addGeoForActiveClient(requisitionNewGeoInputCreate ? requisitionNewGeoInputCreate.value : "");
  });
}

if (requisitionNewGeoInput) {
  requisitionNewGeoInput.addEventListener("keydown", event => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    addGeoForActiveClient(requisitionNewGeoInput.value);
  });
}

if (requisitionNewGeoInputCreate) {
  requisitionNewGeoInputCreate.addEventListener("keydown", event => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    addGeoForActiveClient(requisitionNewGeoInputCreate.value);
  });
}

if (requisitionRemoveGeoBtn) {
  requisitionRemoveGeoBtn.addEventListener("click", () => {
    removeGeoForActiveClient(requisitionGeoSelect ? requisitionGeoSelect.value : "");
  });
}

if (requisitionRemoveDeptBtn) {
  requisitionRemoveDeptBtn.addEventListener("click", () => {
    const active = getActiveClient();
    if (!active) return;
    const selectedId = getActiveRequisitionDepartmentId(active);
    if (!selectedId) {
      window.alert("No department selected.");
      return;
    }
    removeDepartmentForActiveClient(selectedId);
  });
}

if (applySourceFilterSelect) {
  applySourceFilterSelect.addEventListener("change", () => {
    if (!canEditWorkspace()) {
      renderApplyGeoFilter();
      renderApplySourceFilter();
      return;
    }
    const active = getActiveClient();
    if (!active) return;
    const next = String(applySourceFilterSelect.value || "").trim();
    if (!APPLY_SOURCE_OPTIONS.includes(next)) return;
    ensureApplySourceStates(active);
    active.applySourceFilter = next;
    addAuditLog(active, "Apply Source Selected", next, {
      eventType: "field",
      actorRole: currentRole || "client",
      actorName: active.name || "Client",
      pageKey: "apply"
    });
    saveClients();
    clearSQL();
    renderWorkspace();
  });
}

if (closeNewDeptCopyModalBtn) closeNewDeptCopyModalBtn.addEventListener("click", closeNewDepartmentCopyModal);
if (confirmNewDeptCreateBtn) confirmNewDeptCreateBtn.addEventListener("click", confirmCreateDepartmentWithCopy);
if (closeGeoCloneModalBtn) closeGeoCloneModalBtn.addEventListener("click", closeGeoCloneModal);
if (confirmGeoCloneBtn) confirmGeoCloneBtn.addEventListener("click", confirmAddGeoWithClone);
if (skipGeoCloneBtn) skipGeoCloneBtn.addEventListener("click", skipAddGeoClone);

if (requisitionApprovalBody) {
  requisitionApprovalBody.addEventListener("click", event => {
    const actionBtn = event.target.closest("[data-req-approval-action]");
    if (!actionBtn) return;
    const action = actionBtn.dataset.reqApprovalAction;
    const index = Number(actionBtn.dataset.reqApprovalIndex);
    if (!Number.isInteger(index)) return;
    if (action === "add") {
      addRequisitionApprovalRow(index);
      return;
    }
    if (action === "remove") {
      removeRequisitionApprovalRow(index);
    }
  });

  requisitionApprovalBody.addEventListener("change", event => {
    const input = event.target.closest("[data-req-approval-key]");
    if (!input) return;
    const key = input.dataset.reqApprovalKey;
    const rowIndex = input.dataset.reqApprovalIndex;
    updateRequisitionApprovalRowField(rowIndex, key, input.value);
  });
}

if (offerApprovalBody) {
  offerApprovalBody.addEventListener("click", event => {
    const actionBtn = event.target.closest("[data-offer-approval-action]");
    if (!actionBtn) return;
    const action = actionBtn.dataset.offerApprovalAction;
    const index = Number(actionBtn.dataset.offerApprovalIndex);
    if (!Number.isInteger(index)) return;
    if (action === "add") {
      addOfferApprovalRow(index);
      return;
    }
    if (action === "remove") {
      removeOfferApprovalRow(index);
    }
  });

  offerApprovalBody.addEventListener("change", event => {
    const input = event.target.closest("[data-offer-approval-key]");
    if (!input) return;
    const key = input.dataset.offerApprovalKey;
    const rowIndex = input.dataset.offerApprovalIndex;
    updateOfferApprovalRowField(rowIndex, key, input.value);
  });
}

if (loginBtn) {
  loginBtn.addEventListener("click", async () => {
    if (loginBtn.disabled) return;
    loginBtn.disabled = true;
    try {
      const auth = await authenticate(loginEmail ? loginEmail.value : "", loginPassword ? loginPassword.value : "");
      if (!auth.role || (auth.role === "client" && !auth.clientId)) {
        if (loginError) {
          if (auth.reason === "disabled") {
            loginError.textContent = "This client access is disabled by admin.";
          } else if (auth.reason === "subuser_disabled") {
            loginError.textContent = "This user access is disabled.";
          } else if (auth.reason === "user_disabled") {
            loginError.textContent = "This user access is disabled by admin.";
          } else if (auth.reason === "no_client_data") {
            loginError.textContent = "No client accounts found in this browser storage.";
          } else if (auth.reason === "no_user") {
            loginError.textContent = "User ID not found.";
          } else if (auth.reason === "wrong_password") {
            loginError.textContent = "Incorrect password.";
          } else if (auth.reason === "reset_required") {
            loginError.textContent = "First login requires password reset.";
          } else if (auth.reason === "storage_unavailable") {
            loginError.textContent = "Unable to read client accounts from storage.";
          } else if (auth.reason === "api_unavailable") {
            loginError.textContent = "Backend API is not reachable, and no local client data was found.";
          } else if (auth.reason === "api_error") {
            loginError.textContent = "Backend API login failed. Please try again.";
          } else {
            loginError.textContent = "Invalid email or password.";
          }
          loginError.classList.remove("hidden");
        }
        return;
      }
      if (auth.role === "client" && auth.reason === "reset_required") {
        openFirstLoginResetModal(auth.clientId);
        return;
      }
      if (loginError) loginError.classList.add("hidden");
      if (auth.role === "client") activeClientId = auth.clientId;
      login(auth.role, { userEmail: auth.userEmail || "", clientId: auth.clientId || null });
    } finally {
      loginBtn.disabled = false;
    }
  });
}

if (loginPassword) {
  loginPassword.addEventListener("focus", () => {
    setPandaEyesClosed(true);
  });
  loginPassword.addEventListener("keydown", event => {
    if (event.key === "Enter" && loginBtn) loginBtn.click();
  });
  loginPassword.addEventListener("blur", () => {
    setPandaEyesClosed(false);
  });
}

if (loginEmail) {
  loginEmail.addEventListener("input", () => {
    blinkPandaEyes();
  });
}

window.addEventListener("click", event => {
  if (event.target === clientModal) closeClientModal();
  if (event.target === clientUsersModal) closeClientUsersModal();
  if (event.target === clientUserAccessModal) closeClientUserAccessModal();
  if (event.target === addUserModal) closeAddUserModal();
  if (event.target === managerUserFormModal) closeManagerUserFormModal();
  if (event.target === adminSowModal) closeAdminSowModal();
  if (event.target === typeModal) closeTypeModal();
  if (event.target === auditModal) closeAuditModal();
  if (event.target === clientDetailModal) closeClientDetailModal();
  if (event.target === deleteClientAuthModal) closeDeleteClientAuthModal();
  if (event.target === deleteUserAuthModal) closeDeleteManagedUserAuthModal();
  if (event.target === newDeptCopyModal) closeNewDepartmentCopyModal();
  if (event.target === geoCloneModal) closeGeoCloneModal();
  if (event.target === firstLoginResetModal) closeFirstLoginResetModal();
  if (event.target === addFieldModal) closeAddFieldModal();
  if (event.target === previewModal) closePreviewModal();
  if (isChatPopupOpen && chatPopup && chatLauncherBtn) {
    const insidePopup = chatPopup.contains(event.target);
    const clickedLauncher = chatLauncherBtn.contains(event.target);
    if (!insidePopup && !clickedLauncher) setChatPopupOpen(false);
  }
});

window.addEventListener("storage", event => {
  if (event.key === STORAGE_KEY) {
    if (hasApiSession()) {
      void refreshClientsFromApi();
      return;
    }
    refreshClientsFromStorage();
    return;
  }
  if (event.key === USERS_STORAGE_KEY) {
    managedUsers = loadManagedUsers();
    enforceManagerAccess();
    if (isAdmin() && addUserModal && addUserModal.style.display === "block") {
      renderManagedUsersList();
    }
  }
});

if (syncChannel) {
  syncChannel.addEventListener("message", event => {
    if (!event || !event.data || event.data.type !== "clients_updated") return;
    if (hasApiSession()) {
      void refreshClientsFromApi();
      return;
    }
    refreshClientsFromStorage();
  });
}

if (syncChannel) {
  syncChannel.addEventListener("message", event => {
    if (!event || !event.data || event.data.type !== "users_updated") return;
    managedUsers = loadManagedUsers();
    enforceManagerAccess();
    if (isAdmin() && addUserModal && addUserModal.style.display === "block") {
      renderManagedUsersList();
    }
  });
}

window.addEventListener("beforeunload", () => {
  stopSyncPolling();
  if (syncChannel) syncChannel.close();
});

document.addEventListener("DOMContentLoaded", async () => {
  hydrateApiSessionFromStorage();
  if (!hasApiSession()) {
    migrateStoredDataIfNeeded();
  }
  managedUsers = loadManagedUsers();
  const loadedClients = loadClients();
  clients = loadedClients || [];
  memoryClientsSnapshot = serializeClients(clients);
  lastSyncedSignature = getClientsSignature(clients);
  if (hasApiSession()) {
    await pullClientsFromApi();
  }
  migrateLegacySowDocumentsToBinaryStore();
  activeClientId = clients[0] ? clients[0].id : null;
  applyRoleUI();
  setRootVisibility(false);
  renderAll();
  renderIntegrationRows(1);
  updateTypeModalFields();
  clearSQL();
});
