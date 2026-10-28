# IntellMeet Frontend

A starter React + Vite frontend for Member 1's IntellMeet responsibilities: authentication screens, dashboard, profile, meeting management, history, notifications, and reusable UI.

## Requirements
- Node.js LTS
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed in the terminal (usually http://localhost:5173).

## Production build
```bash
npm run build
npm run preview
```

## Deploy
Import this repository into Vercel. Build command: `npm run build`; output directory: `dist`.

## Important
This is a frontend demonstration using mock data and browser state. It does not provide secure real authentication, real video conferencing, persistent database storage, or AI summaries. Integrate with the team's backend/API before claiming those features work.

## Main structure
- `src/pages/` — screens
- `src/components/` — reusable interface pieces
- `src/data/mockData.js` — sample meeting and notification data
- `src/services/api.js` — API integration placeholder
- `src/styles/` — global styling
