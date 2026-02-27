# Wanderlust Frontend

Next.js frontend for the Wanderlust AI Travel Story Generator.

## Tech Stack

- **Next.js 16** with TypeScript
- **Tailwind CSS** for styling
- **Auth.js v5** with Google OAuth
- **Docker** for production containerization
- **Google Cloud Run** for deployment

## Features

- AI-powered travel story generation
- 7 travel styles: Foodie, Adventure, Cultural, Luxury, Backpacker, Family, Romantic
- Multi-language support: English, Deutsch, Français
- Google OAuth authentication
- Personal story history with delete functionality
- Responsive design

## Local Development

### Prerequisites
- Node.js 20+
- Backend running at `http://localhost:8000`

### Setup

1. Clone the repository
2. Install dependencies:
```bash
npm install --legacy-peer-deps
```

3. Copy `.env.example` to `.env.local` and fill in your values:
```bash
cp .env.example .env.local
```

4. Start the development server:
```bash
npm run dev
```

5. Open `http://localhost:3000`

## Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_API_URL` | Backend API URL |
| `GOOGLE_CLIENT_ID` | Google OAuth client ID |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret |
| `AUTH_SECRET` | Random secret for Auth.js |
| `NEXTAUTH_URL` | Public URL of this app |

## CI/CD Pipeline

Every push to `main` triggers:
1. Docker build with production optimizations
2. Push to Google Artifact Registry
3. Automatic deployment to Cloud Run

## Production

- **App:** https://wanderlust-frontend-wot5c6gzla-ew.a.run.app
