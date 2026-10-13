import { projects } from "@/config/portfolio";
import { ExternalLink, FolderGit2, Globe } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { Card } from "./ui/SectionHeading";
import StatusBadge from "./ui/StatusBadge";

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-24 bg-white py-16 sm:py-20 dark:bg-slate-900/40"
    >
      <div className="container-site">
        <div id="projects-heading">
          <SectionHeading
            kicker="Projects"
            title="Selected work"
            description="Each card shows a summary, technologies, and an honest status. Links appear only when a real repository or deployment exists."
          />
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.slug} className="flex flex-col">
              <div className="flex items-start justify-between gap-3">
                <span
                  aria-hidden="true"
                  className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-indigo-600 to-cyan-500 text-white"
                >
                  <FolderGit2 size={20} />
                </span>
                <StatusBadge status={project.status} />
              </div>
              <h3 className="mt-3 text-xl font-bold tracking-tight">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {project.summary}
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-600 dark:text-slate-300">
                {project.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
                {project.technologies.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-2 border-t border-slate-100 pt-4 dark:border-slate-800">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 px-3 py-2 text-xs font-bold text-slate-700 transition hover:border-indigo-500 hover:text-indigo-700 dark:border-slate-600 dark:text-slate-200"
                  >
                    <FolderGit2 size={14} aria-hidden="true" />
                    Repository
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-dashed border-slate-300 px-3 py-2 text-xs font-semibold text-slate-400 dark:border-slate-600 dark:text-slate-500">
                    <FolderGit2 size={14} aria-hidden="true" />
                    Repository not added
                  </span>
                )}
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 px-3 py-2 text-xs font-bold text-slate-700 transition hover:border-indigo-500 hover:text-indigo-700 dark:border-slate-600 dark:text-slate-200"
                  >
                    <Globe size={14} aria-hidden="true" />
                    Live demo
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-dashed border-slate-300 px-3 py-2 text-xs font-semibold text-slate-400 dark:border-slate-600 dark:text-slate-500">
                    <Globe size={14} aria-hidden="true" />
                    Coming soon
                  </span>
                )}
                {project.githubUrl || project.liveUrl ? null : (
                  <a
                    href="#github"
                    className="inline-flex items-center gap-1.5 px-2 py-2 text-xs font-bold text-indigo-600 hover:text-indigo-800 dark:text-indigo-300"
                  >
                    Follow on GitHub
                    <ExternalLink size={13} aria-hidden="true" />
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
        <p className="mt-6 text-sm text-slate-500 dark:text-slate-400">
          To add a project, append an entry to the{" "}
          <code className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-xs dark:bg-slate-800">
            projects
          </code>{" "}
          array in <code className="font-mono text-xs">config/portfolio.ts</code>.
        </p>
      </div>
    </section>
  );
}
