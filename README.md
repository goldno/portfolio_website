# Noah Goldberg — Portfolio

A clean, minimal developer portfolio built with React (frontend) and Node.js/Express (backend).

---

## Project Structure

```
portfolio/
├── frontend/          # React + Vite
│   └── src/
│       ├── config.js  # ← Edit this to update all portfolio info
│       ├── App.jsx
│       └── App.css
└── backend/           # Node.js + Express
    └── src/
        └── server.js
```

---

## Updating Info

**Everything is in one file: `frontend/src/config.js`**

- Change the name, bio, links, skills, projects, and education — all in that one file.
- To add a project, add a new object to the `projects` array and its repo name to `pinnedRepos`.
- To add a skill group, add a new object to the `skills` array.

---

## Deployment

### Frontend → GitHub Pages

1. In `frontend/vite.config.js`, set `base` to the repo name:
   ```js
   base: '/repo-name/'
   ```

2. From the `frontend/` directory:
   ```bash
   npm install
   npm run deploy
   ```

3. In the GitHub repo settings → Pages → set source to the `gh-pages` branch.

### Backend → Railway

1. Point Railway to the `backend/` folder via the root directory setting.
2. Set start command: `node src/server.js`
3. No environment variables required unless adding a GitHub token for higher API rate limits.
4. Add `GITHUB_TOKEN` as a Railway env var if needed.

---

## Local Development

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

- `GET /api/github-repos` — proxies the GitHub API to return public repos live
- `GET /api/health` — health check endpoint

The GitHub repos endpoint keeps the projects section dynamic, pulling live data from GitHub rather than relying solely on hardcoded values in `config.js`.
