// ============================================================
//  PORTFOLIO CONFIG — edit everything here, nothing else needed
// ============================================================

export const config = {

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
  about: `I'm a software developer with experience building enterprise integration systems, 
automation services, and AI-powered tooling. I hold a Master's in Computer Science 
from Rice University with a focus in AI & Machine Learning. I enjoy tackling 
complex data problems and building things that actually work at scale.`,

  // --- Skills (grouped) ---
  skills: [
    {
      category: "ProgrammingLanguages",
      items: ["Java", "JavaScript", "Python", "SQL"],
    },
    {
      category: "Enterprise & Integration",
      items: ["Spring Boot", "Apache Maven", "REST/JSON APIs", "Azure DevOps"],
    },
    {
      category: "Data & Analytics",
      items: ["Power BI", "Excel / Power Query", "Relational Databases"],
    },
    {
      category: "Cloud & Tools",
      items: ["AWS", "Git", "GitHub Copilot", "Claude AI"],
    },
  ],

  // --- Projects ---
  // Add or remove projects here. Featured projects appear first.
  projects: [
    {
      title: "TCG Discord Bot",
      description:
        "A full-featured trading card game bot for Discord. Lets users collect, trade, and battle with cards — backed by a Node.js backend and PostgreSQL database hosted on Railway.",
      tech: ["Node.js", "PostgreSQL", "Discord.js", "Railway"],
      github: "https://github.com/goldno",  // update to specific repo when ready
      live: null,
      featured: true,
    },
    {
      title: "This Portfolio",
      description:
        "A clean, minimal developer portfolio built with React on the frontend and Node.js/Express on the backend. Deployed with the frontend on GitHub Pages and the backend on Railway.",
      tech: ["React", "Node.js", "Express", "GitHub Pages", "Railway"],
      github: "https://github.com/goldno",  // update to specific repo when ready
      live: null,
      featured: true,
    },
  ],

  // --- Education ---
  education: [
    {
      school: "Rice University",
      degree: "Master of Science, Computer Science",
      focus: "Artificial Intelligence & Machine Learning",
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
