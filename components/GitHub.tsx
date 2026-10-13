{/*import portfolio from "@/config/portfolio";
import { FolderGit2, Github } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { Card } from "./ui/SectionHeading";

export default function GitHub() {
  

  return (
    <section
      id="github"
      aria-labelledby="github-heading"
      className="scroll-mt-24 bg-white py-16 sm:py-20 dark:bg-slate-900/40"
    >
      <div className="container-site">
        <div id="github-heading">
          <SectionHeading
            kicker="GitHub"
            title="Code and collaboration"
            description="I use Git and GitHub for version control, collaboration, and deployment workflows."
          />
        </div>
        <Card className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <span
            aria-hidden="true"
            className="grid h-14 w-14 flex-shrink-0 place-items-center rounded-2xl bg-slate-900 text-white dark:bg-white dark:text-slate-900"
          >
            <Github size={26} />
          </span>
          <div className="min-w-0 flex-1">
            <h3 className="text-lg font-bold">Find my work on GitHub</h3>
            {hasGithub ? (
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                Profile:{"kondekeerthi"}
                <a
                  href={portfolio.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-indigo-600 hover:text-indigo-800 dark:text-indigo-300"
                >
                  {portfolio.githubUrl}
                </a>
              </p>
            ) : (
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                GitHub username not configured yet — set{" "}
                <code className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-xs dark:bg-slate-800">
                  githubUrl
                </code>{" "}
                in <code className="font-mono text-xs">config/portfolio.ts</code>{" "}
                to enable the profile button.
              </p>
            )}
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Repository cards will appear here once repository information is
              added — no placeholder statistics are shown.
            </p>
          </div>
          {hasGithub ? (
            <a
              href={portfolio.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex-shrink-0"
            >
              <Github size={17} aria-hidden="true" />
              View GitHub Profile
            </a>
          ) : (
            <span
              role="note"
              className="inline-flex flex-shrink-0 cursor-not-allowed items-center gap-2 rounded-xl border border-dashed border-slate-300 px-5 py-3 text-sm font-bold text-slate-400 dark:border-slate-600 dark:text-slate-500"
            >
              <Github size={17} aria-hidden="true" />
              Profile link coming soon
            </span>
          )}
        </Card>

        <div className="card mt-5 flex items-start gap-3 border-dashed p-6">
          <FolderGit2 size={20} aria-hidden="true" className="mt-0.5 flex-shrink-0 text-slate-400" />
          <p className="text-sm text-slate-500 dark:text-slate-400">
            No repositories linked yet. When repository URLs are available, add
            them to the project entries in{" "}
            <code className="font-mono text-xs">config/portfolio.ts</code> and
            they will surface on the project cards above.
          </p>
        </div>
      </div>
    </section>
  );
}*/}
