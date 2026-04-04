import express from "express";
import cors from "cors";
import pkg from "pg";
const { Pool } = pkg;

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// ── Database ──────────────────────────────────────────────────────────────────
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL?.includes("railway.internal") ? false : { rejectUnauthorized: false },
  options: "-c search_path=portfolio",
});

pool.on("error", (err) => console.error("Unexpected pool error:", err.message));

async function initDb() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS visits (
      id SERIAL PRIMARY KEY,
      count INTEGER NOT NULL DEFAULT 0
    );
    INSERT INTO visits (id, count)
    SELECT 1, 0 WHERE NOT EXISTS (SELECT 1 FROM visits WHERE id = 1);
  `);
}

initDb().catch((err) => console.error("DB init failed:", err.message));

// ── Visitor Counter ───────────────────────────────────────────────────────────
// POST /api/visit  — increment and return the new total
app.post("/api/visit", async (_req, res) => {
  try {
    const result = await pool.query(
      "UPDATE visits SET count = count + 1 WHERE id = 1 RETURNING count"
    );
    res.json({ count: result.rows[0].count });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to record visit" });
  }
});

// GET /api/visits  — return the current total without incrementing
app.get("/api/visits", async (_req, res) => {
  try {
    const result = await pool.query("SELECT count FROM visits WHERE id = 1");
    res.json({ count: result.rows[0]?.count ?? 0 });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch visit count" });
  }
});

// ── GitHub Repos Proxy ────────────────────────────────────────────────────────
// Fetches public GitHub repos and returns them as JSON.
// The frontend calls GET /api/github-repos to get live repo data
// instead of relying solely on hardcoded values in config.js.
app.get("/api/github-repos", async (_req, res) => {
  try {
    const username = "goldno";
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=10`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          // Authorization: `token ${process.env.GITHUB_TOKEN}`,
        },
      }
    );

    if (!response.ok) {
      return res.status(response.status).json({ error: "GitHub API error" });
    }

    const repos = await response.json();

    const simplified = repos.map((r) => ({
      name: r.name,
      description: r.description,
      url: r.html_url,
      stars: r.stargazers_count,
      language: r.language,
      updatedAt: r.updated_at,
    }));

    res.json(simplified);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch GitHub repos" });
  }
});

// ── Health Check ──────────────────────────────────────────────────────────────
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
