// ============================================================
//  PORTFOLIO CONFIG — edit this file to update all portfolio info
// ============================================================

export const config = {

  // --- Backend ---
  backendUrl: "http://localhost:3001",

  // --- Personal Info ---
  name: "Noah Goldberg",
  title: "Software Developer",
  tagline: "Backend-focused developer with a passion for integration, automation, and AI.",
  email: "goldno@hotmail.com",
  phone: "551-427-2767",
  location: "Hillsborough, NJ",

  // --- Social Links ---
  github: "https://github.com/goldno",
  linkedin: "https://www.linkedin.com/in/noah-r-goldberg/",

  // --- About Me ---
  about:
    "I'm a software developer with experience building enterprise integration systems, automation services, and using AI-powered tooling. " +
    "I have a Master's in Computer Science from Rice University. " +
    "I enjoy tackling complex data problems and building things that actually work at scale.",

  // --- Skills (grouped) ---
  skills: [
    {
      category: "Programming Languages",
      items: ["Java", "Javascript", "Python", "SQL Server"],
    },
    {
      category: "Backend and Frameworks",
      items: ["Node.js", "REST/JSON APIs"],
    },
    {
      category: "Data & Analytics",
      items: ["Power BI", "Excel / Power Query", "Relational Databases"],
    },
    {
      category: "Cloud & AI Tools",
      items: ["Azure DevOps", "AWS", "Git", "GitHub Copilot", "Claude AI"],
    },
  ],

  // --- Projects ---
  projectsSubtitle: "I enjoy developing systems that enrich my hobbies.",
  // Add or remove projects here. Featured projects appear first.
  // Each repoName must match the exact GitHub repo name and be listed in pinnedRepos above.
  projects: [
    {
      repoName: "TCGDex",
      title: "TCGDex Discord Bot",
      description:
        "Discord Bot that lets users search for Pokémon and other trading cards using multiple open source APIs. Displays card information and current prices. Backed by a Node.js backend and PostgreSQL database hosted on Railway.",
      tech: ["Node.js", "PostgreSQL", "Discord.js", "Railway"],
      live: null,
      featured: true,
    },
    {
      repoName: "tcgdex-website",
      title: "TCGDex Website",
      description:
        "A web app for browsing and tracking Pokémon TCG card prices over time. Features card search, set filtering, sortable columns, and price history charts. Build using the same APIs as the TCGDex Discord Bot. Frontend built with React and Vite, deployed on GitHub Pages. Backend built with Node.js and PostgreSQL, deployed on Railway.",
      tech: ["React", "Vite", "Node.js", "PostgreSQL", "GitHub Pages", "Railway"],
      live: "https://goldno.github.io/tcgdex-website/",
      featured: true,
    },
    {
      repoName: "portfolio_website",
      title: "This Portfolio Website!",
      description:
        "A clean, minimal developer portfolio built with React on the frontend and Node.js/Express on the backend. Deployed the frontend on GitHub Pages and the backend on Railway.",
      tech: ["React", "Node.js", "Express", "GitHub Pages", "Railway"],
      live: null,
      featured: true,
    },
  ],

  // --- Work History ---
  work: [
    {
      title: "Integration Developer / IT Business Analyst",
      company: "Sompo International",
      location: "Morristown, NJ",
      years: "June 2021 – Feb 2026",
      bullets: [
        "Developed and maintained enterprise middleware integration requirements between core insurance systems supporting claims, policy, and transactional data processing.",
        "Owned and maintained the Enterprise Mapping Requirements Document (EMRD), a large Excel-based document defining field-level mappings across insurance policy and claims systems.",
        "Maintained a Java Spring Boot automation service built in Apache Maven that parsed and processed submission data from Excel files, improving intake efficiency and reducing manual effort. Implemented AI-powered fuzzy matching algorithms to normalize and map inconsistent input data, leveraging GitHub Copilot to accelerate development.",
        "Led requirements definition for a treasury funding request automation initiative — translating business workflows into technical requirements for automated claims processing.",
        "Managed a SQL Server database containing field-level mappings between insurance policy and claims systems, enabling accurate data transformation and cross-system integration.",
        "Leveraged Azure DevOps for version control, change tracking, and coordinating deployments of integration services across environments.",
      ],
    },
    {
      title: "Tech Services Intern",
      company: "Sompo International",
      location: "Florham Park, NJ",
      years: "June 2020 – Aug 2020",
      bullets: [
        "Transformed transaction data using Power Query and built reporting dashboards in Power BI.",
        "Learned and applied Apache POI Java libraries to integrate Excel data into Java applications.",
      ],
    },
  ],

  // --- Education ---
  education: [
    {
      school: "Rice University",
      degree: "Master of Science, Computer Science",
      focus: "Software Engineering and AI Powered Tools",
      years: "2023 – 2025",
      gpa: "3.53",
    },
    {
      school: "Susquehanna University",
      degree: "Bachelor of Science, Computer Science",
      focus: "Minor in Mathematics",
      years: "2017 – 2021",
      gpa: "3.4 — Dean's List",
    },
  ],
};
