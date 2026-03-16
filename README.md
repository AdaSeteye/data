# Data Science Portfolio

A data science portfolio site built with Next.js and Tailwind. It showcases projects across classification, forecasting, NLP, recommendation, experimentation, and anomaly detection.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Structure

- `src/app/` — Pages (landing, projects, about, contact, project detail).
- `src/components/` — Header, project cards, project detail layout, Recharts visualizations.
- `src/lib/projects.ts` — Loads project content from `content/projects/`.
- `content/projects/` — One JSON per project (sections + chart data).

Edit `content/projects/*.json` to change copy; add or adjust chart data in each file. Add a new project by creating a new JSON and registering it in `src/lib/projects.ts` and `content/projects/index.json`.

## Deploy

The app is static-friendly (Next.js static export or Vercel). To push this repo to GitHub (e.g. `https://github.com/AdaSeteye/data`):

```bash
git init
git add .
git commit -m "Initial commit: data science portfolio"
git remote add origin https://github.com/AdaSeteye/data.git
git branch -M main
git push -u origin main
```

### Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in (GitHub).
2. Click **Add New** → **Project**.
3. Import the **AdaSeteye/data** repo (or paste `https://github.com/AdaSeteye/data`).
4. Leave defaults (Framework: Next.js, Build Command: `npm run build`, Output: Next.js).
5. Click **Deploy**. Vercel will build and give you a live URL (e.g. `data-xxx.vercel.app`).
