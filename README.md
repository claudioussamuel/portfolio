# Portfolio

A personal portfolio built with Next.js (App Router) and TypeScript. No UI libraries, so it is small, fast and easy to customise.

## Edit your content

Everything you see on the site comes from one file: `lib/data.ts`. Change your name, bio, skills, projects, experience and social links there.

Styling lives in `app/globals.css` (colours are CSS variables at the top of the file, with automatic dark mode).

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Go to https://vercel.com/new and import the repository.
3. Keep the defaults (Vercel detects Next.js) and click **Deploy**.

Every push to your main branch redeploys automatically.
