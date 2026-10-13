# Konde Keerthi — Personal Portfolio

A modern, responsive single-page portfolio built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, **Lucide React** icons, and **next-themes** for dark/light mode.

## Profile

- **Name:** Konde Keerthi
- **Role:** AI Developer in PCS, Police Department, Chief Office
- **Education:** B.Tech in Electronics and Communication Engineering (ECE)
- **Headline:** AI Developer | Web Development | Data Analytics | AI-Assisted Engineering

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript (strict) |
| UI | React 19 + Tailwind CSS 3 |
| Icons | lucide-react |
| Theming | next-themes (class strategy, persisted) |
| Animation | CSS transitions/keyframes + reduced-motion support |

## Prerequisites

- Node.js 18.18+ or 20+ (verified with Node 24 + npm 11)
- npm (a lockfile will be created on first install)

> Windows PowerShell note: if `npm`/`npx` scripts are blocked by the
> execution policy, run commands through `cmd`, e.g.
> `cmd /c "npm.cmd install"`. Do not change the execution policy.

## Installation

```bash
npm install
```

## Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build and start

```bash
npm run build
npm run start
```

## Folder structure

```text
.
├── app/
│   ├── layout.tsx        # Metadata, theme provider, nav + footer shell
│   ├── page.tsx          # Composes all sections
│   ├── providers.tsx     # next-themes provider (client)
│   ├── globals.css       # Tailwind + design-system helpers
│   └── icon.svg          # Favicon (KK monogram)
├── components/
│   ├── Navbar.tsx        # Sticky nav, active-section highlight, mobile menu
│   ├── Hero.tsx          # Home / hero with CTAs + photo placeholder
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Tools.tsx
│   ├── Projects.tsx
│   ├── Learning.tsx
│   ├── GitHub.tsx
│   ├── Contact.tsx       # Placeholder cards (no fake form backend)
│   ├── Footer.tsx
│   ├── ThemeToggle.tsx
│   └── ui/               # SectionHeading, Card, StatusBadge
├── config/
│   └── portfolio.ts      # Profile, skills, tools, projects, links (EDIT HERE)
├── public/
│   ├── images/           # Add profile.jpg here (see below)
│   └── documents/        # Add resume PDF here (see below)
├── tailwind.config.ts
├── postcss.config.mjs
├── next.config.ts
└── tsconfig.json
```

## How to update personal information

Edit **`config/portfolio.ts`** — every section reads from it, so you only
change one file:

- `name`, `role`, `education`, `headline`, `intro`
- `email`, `githubUsername`, `githubUrl`, `linkedinUrl`
- `resumeUrl`, `profileImage`

Empty strings render graceful placeholders ("coming soon" / "not added"),
never fake links.

## How to add a profile photo

1. Save your photo as `public/images/profile.jpg` (JPG or PNG).
2. Set `profileImage: "/images/profile.jpg"` in `config/portfolio.ts`.
3. The Hero component will render it automatically (graceful monogram
   placeholder is shown until then). Do not commit anyone else's photograph.

## How to add a resume

1. Save your resume as `public/documents/Konde-Keerthi-Resume.pdf`.
2. Set `resumeUrl: "/documents/Konde-Keerthi-Resume.pdf"` in
   `config/portfolio.ts`.
3. The Hero "View Resume" button activates automatically. Until then it shows
   a disabled "Resume — coming soon" state.

## How to configure GitHub and LinkedIn URLs

In `config/portfolio.ts`:

```ts
githubUsername: "your-handle",
githubUrl: "https://github.com/your-handle",
linkedinUrl: "https://www.linkedin.com/in/your-handle",
```

The GitHub section button and Contact cards activate automatically.

## How to add new projects

Append to the `projects` array in `config/portfolio.ts`:

```ts
{
  slug: "my-new-app",
  title: "My New App",
  summary: "One-paragraph summary.",
  bullets: ["What it does", "Who it serves"],
  technologies: ["Next.js", "SQL"],
  status: "Planned", // "Planned" | "In Progress" | "Completed"
  githubUrl: "",     // real URL only
  liveUrl: "",       // real URL only
}
```

Empty `githubUrl`/`liveUrl` render "Repository not added" / "Coming soon"
states — never invent URLs.

## Deploy to Vercel

1. Push the folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) → Add New → Project → import the repo.
3. Framework preset: **Next.js**. Build command: `npm run build`.
4. Deploy — no environment variables are required.

## Deploy to Netlify

1. Push the folder to a GitHub repository.
2. Go to [app.netlify.com](https://app.netlify.com) → Add new site → Import.
3. Build command: `npm run build`, publish directory: `.next` is handled by
   the [Next.js runtime](https://docs.netlify.com/frameworks/next-js/).
   Install the official Next.js runtime if prompted (`@netlify/plugin-nextjs`).
4. Deploy.

## Accessibility & honesty notes

- Semantic landmarks, skip link, labelled nav, visible focus, alt/aria text,
  and `prefers-reduced-motion` support are built in.
- No proficiency percentages, testimonials, statistics, or fake contact
  details are included anywhere.
