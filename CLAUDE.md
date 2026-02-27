# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Install dependencies (legacy-peer-deps required due to Next.js 16 + React 19 peer dep constraints)
npm install --legacy-peer-deps

# Development server
npm run dev

# Production build
npm run build

# Lint
npm run lint
```

# Run tests
npm test

# Run a single test file
npm test -- __tests__/page.test.tsx

## Architecture

This is a single-page Next.js 16 app (App Router) with very minimal structure:

- **`app/page.tsx`** — The entire application UI lives here as a single client component. Handles story generation form, story output display, story history with delete, and Google OAuth sign-in/sign-out.
- **`app/layout.tsx`** — Root layout; wraps everything in `<Providers>`.
- **`app/providers.tsx`** — Client boundary that wraps the app in `SessionProvider` from next-auth/react.
- **`auth.ts`** — Auth.js v5 config at the project root; exports `handlers`, `signIn`, `signOut`, `auth`. Google OAuth only; attaches `token.sub` as `session.user.id`.
- **`app/api/auth/[...nextauth]/route.ts`** — Re-exports the Auth.js handlers.
- **`app/impressum/page.tsx`** — Static legal/about page.

## Backend API

The frontend talks to a separate backend at `NEXT_PUBLIC_API_URL` (default: `http://localhost:8000`). API calls are made directly from the client component (no Next.js API routes proxy):

- `GET /api/stories/` — fetch user's story history
- `POST /api/stories/generate` — generate a new story (body: `destination`, `travel_style`, `duration_days`, `language`, `preferences`)
- `DELETE /api/stories/:id` — delete a story

## Environment

Copy `.env.example` to `.env.local` for local development. Required variables:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_API_URL` | Backend URL |
| `GOOGLE_CLIENT_ID` | Google OAuth |
| `GOOGLE_CLIENT_SECRET` | Google OAuth |
| `AUTH_SECRET` | Auth.js session secret |
| `NEXTAUTH_URL` | This app's public URL |

## Deployment

Push to `main` triggers the GitHub Actions workflow (`.github/workflows/deploy.yml`) which builds a Docker image and deploys to Google Cloud Run. Secrets (`GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `AUTH_SECRET`) are injected from GCP Secret Manager at deploy time — not stored in GitHub secrets directly.

The Dockerfile uses a multi-stage build with Next.js standalone output mode.
