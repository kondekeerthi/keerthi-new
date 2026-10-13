/**
 * Central portfolio configuration.
 *
 * Replace placeholder values (empty strings) with real details when available.
 * Components read from this file so updates only need to happen here.
 *
 * NOTE: Leave a field as "" when the real value is unknown — components
 * render a graceful "not added yet" placeholder instead of a fake link.
 */

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export type ProjectStatus = "In Progress" | "Planned" | "Completed";

export interface Project {
  slug: string;
  title: string;
  summary: string;
  bullets: string[];
  technologies: string[];
  status: ProjectStatus;
  /** Leave empty until a real repository URL exists. */
  githubUrl: string;
  /** Leave empty until a real deployment URL exists. */
  liveUrl: string;
}

export interface Tool {
  name: string;
  description: string;
  /** Official website URL (stable, well-known URLs only). */
  websiteUrl: string;
  category: string;
}

const portfolio = {
  name: "Konde Keerthi",
  role: "AI Developer in PCS, Police Department, Chief Office",
  education: "B.Tech in Electronics and Communication Engineering (ECE)",
  headline:
    "AI Developer | Web Development | Data Analytics | AI-Assisted Engineering",
  intro:
    "I work on AI-assisted software development, web applications, and data analytics. My focus is building practical, maintainable solutions with Next.js and TypeScript, exploring data with SQL and Power BI, and using modern AI coding tools and DevOps workflows to ship reliable software.",

  // ---- Placeholders: fill in when available ----
 
  profileImage: "", // e.g. "/images/profile.jpg"
  email: "kkeerthireddy1999@gmail.com", // e.g. "you@example.com"
  githubUsername: "kondekeerthi", // e.g. "kondekeerthi"
  
} as const;

export default portfolio;

export const skillCategories: SkillCategory[] = [
  {
    title: "Web Development",
    description: "Building responsive, accessible web interfaces.",
    skills: ["HTML", "CSS", "Next.js"],
  },
  {
    title: "Data and Analytics",
    description: "Querying data and presenting insights.",
    skills: ["SQL", "Power BI"],
  },
  {
    title: "AI-Assisted Development",
    description: "Modern AI coding tools and terminal-driven workflows.",
    skills: ["OpenCode", "Cline", "CLI-based AI coding tools"],
  },
  {
    title: "Development and Deployment",
    description: "Version control, hosting, and delivery workflows.",
    skills: [
      "Git",
      "GitHub",
      "Vercel",
      "Netlify",
      "DevOps tools and modern development workflows",
    ],
  },
];

export const tools: Tool[] = [
  {
    name: "OpenCode",
    description:
      "Terminal-based AI coding assistant used to plan, write, and refactor code.",
    websiteUrl: "https://opencode.ai",
    category: "AI-Assisted Development",
  },
  {
    name: "Cline",
    description:
      "AI coding assistant that works inside the editor for guided software tasks.",
    websiteUrl: "https://cline.bot",
    category: "AI-Assisted Development",
  },
  {
    name: "CLI-based AI coding tools",
    description:
      "Command-line driven AI workflows for scaffolding, editing, and reviewing code.",
    websiteUrl: "",
    category: "AI-Assisted Development",
  },
  {
    name: "Next.js",
    description:
      "React framework for building full-stack web applications.",
    websiteUrl: "https://nextjs.org",
    category: "Web Development",
  },
  {
    name: "SQL",
    description: "Query language for working with structured data.",
    websiteUrl: "",
    category: "Data and Analytics",
  },
  {
    name: "Power BI",
    description: "Business intelligence tool for dashboards and reports.",
    websiteUrl: "https://powerbi.microsoft.com",
    category: "Data and Analytics",
  },
  {
    name: "Git",
    description: "Distributed version control for tracking code changes.",
    websiteUrl: "https://git-scm.com",
    category: "Development and Deployment",
  },
  {
    name: "GitHub",
    description: "Hosting for Git repositories with collaboration features.",
    websiteUrl: "https://github.com",
    category: "Development and Deployment",
  },
  {
    name: "Vercel",
    description: "Deployment platform for frontend and full-stack apps.",
    websiteUrl: "https://vercel.com",
    category: "Development and Deployment",
  },
  {
    name: "Netlify",
    description: "Deployment platform for modern web projects.",
    websiteUrl: "https://www.netlify.com",
    category: "Development and Deployment",
  },
];



export const learningAreas: { title: string; description: string }[] = [
  {
    title: "Next.js and TypeScript development",
    description:
      "Building type-safe, component-driven web applications with the App Router.",
  },
  {
    title: "SQL and data analytics",
    description:
      "Querying structured data and communicating findings with reports and dashboards.",
  },
  {
    title: "AI-assisted coding workflows",
    description:
      "Using CLI-based AI tools to plan, implement, and review changes efficiently.",
  },
  {
    title: "Git and GitHub collaboration",
    description:
      "Branching, pull requests, and reviews for team-based development.",
  },
  {
    title: "Deployment with Vercel and Netlify",
    description:
      "Shipping and previewing web applications on modern hosting platforms.",
  },
  {
    title: "DevOps fundamentals and command-line workflows",
    description:
      "Builds, environments, and repeatable delivery practices from the terminal.",
  },
];

export const navItems: { id: string; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "tools", label: "Tools" },
  { id: "learning", label: "Learning" },
  { id: "github", label: "GitHub" },
  { id: "contact", label: "Contact" },
];
