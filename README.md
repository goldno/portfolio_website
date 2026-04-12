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

## What the Backend Does

- `GET /api/github-repos` — proxies the GitHub API to return public repos live
- `GET /api/health` — health check endpoint

The GitHub repos endpoint keeps the projects section dynamic, pulling live data from GitHub rather than relying solely on hardcoded values in `config.js`.
