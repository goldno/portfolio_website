import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// ── GitHub Repos Proxy ────────────────────────────────────────────────────────
// Fetches your public GitHub repos and returns them as JSON.
// The frontend can call GET /api/github-repos to get live repo data
// instead of hardcoding it in config.js.
app.get("/api/github-repos", async (req, res) => {
  try {
    const username = "goldno"; // <-- change if your username changes
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=10`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          // Optional: add a GitHub token for higher rate limits
          // Authorization: `token ${process.env.GITHUB_TOKEN}`,
        },
      }
    );

    if (!response.ok) {
      return res.status(response.status).json({ error: "GitHub API error" });
    }

    const repos = await response.json();

    // Return only the fields we care about
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
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
