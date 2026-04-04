# Noah Goldberg — Portfolio

A clean, minimal developer portfolio built with React (frontend) and Node.js/Express (backend).

---

## Project Structure

```
portfolio/
├── frontend/          # React + Vite
│   └── src/
│       ├── config.js  # ← EDIT THIS to update all your info
│       ├── App.jsx
│       └── App.css
└── backend/           # Node.js + Express
    └── src/
        └── server.js
```

---

## ✏️ Updating Your Info

**Everything is in one file: `frontend/src/config.js`**

- Change your name, bio, links, skills, projects, education — all in that one file.
- To add a project, add a new object to the `projects` array.
- To add a skill group, add a new object to the `skills` array.

---

## 🚀 Deployment

### Frontend → GitHub Pages

1. In `frontend/vite.config.js`, set `base` to your repo name:
   ```js
   base: '/your-repo-name/'
   ```

2. Install and build:
   ```bash
   cd frontend
   npm install
   npm run build
   ```

3. Deploy the `dist/` folder to GitHub Pages.
   - Easiest way: use the [`gh-pages`](https://www.npmjs.com/package/gh-pages) package:
   ```bash
   npm install --save-dev gh-pages
   ```
   Add to `package.json` scripts:
   ```json
   "deploy": "gh-pages -d dist"
   ```
   Then run `npm run build && npm run deploy`.

4. In your GitHub repo settings → Pages → set source to `gh-pages` branch.

### Backend → Railway

1. Point Railway to the `backend/` folder (or set the root directory in Railway settings).
2. Set start command: `node src/server.js`
3. No environment variables required unless you add a GitHub token for higher API rate limits.
4. Add `GITHUB_TOKEN` as a Railway env var if needed.

---

## 💻 Local Development

```bash
# Terminal 1 — backend
cd backend
npm install
npm run dev

# Terminal 2 — frontend
cd frontend
npm install
npm run dev
```

Frontend runs on http://localhost:5173
Backend runs on http://localhost:3001

---

## What the Backend Does

- `GET /api/github-repos` — proxies the GitHub API to return your public repos live
- `GET /api/health` — health check endpoint

The GitHub repos endpoint means your GitHub projects section can eventually be dynamic
(pulling live from GitHub) rather than hardcoded in config.js.
