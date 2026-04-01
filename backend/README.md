# Backend API Scaffold

This backend provides starter APIs for:
- `POST /api/login`
- `GET/POST/PATCH/DELETE /api/clients`
- `GET/POST/PATCH/DELETE /api/users`

Stack:
- Node.js + Express
- Prisma ORM
- PostgreSQL
- JWT auth + role checks

## 1. Setup

```bash
cd backend
npm install
cp .env.example .env
```

Update `.env` values, especially:
- `DATABASE_URL`
- `JWT_SECRET`
- `ADMIN_EMAIL`
- `ADMIN_PASSWORD`

## 2. Initialize DB

```bash
npx prisma generate
npx prisma migrate dev --name init
npm run db:seed
```

## 3. Run API

```bash
npm run dev
```

API base URL: `http://localhost:4000/api`

## 4. Auth Flow

1. `POST /api/login` with:
```json
{
  "email": "admin@example.com",
  "password": "ChangeMe123!"
}
```
2. Use `Authorization: Bearer <token>` for protected endpoints.

## Notes

- Frontend `Script.js` is now API-first for login and client sync, with localStorage fallback.
- `POST /api/login` supports:
  - DB users (`User` table: ADMIN/MANAGER/CLIENT roles)
  - Client credentials from `Client.config` (`loginEmail/loginPassword` and `clientUsers`)
- `GET /api/clients` and `PATCH /api/clients/:id` support `CLIENT` role for own client config only.
