import { tools } from "@/config/portfolio";
import { ExternalLink, Wrench } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { Card } from "./ui/SectionHeading";

export default function Tools() {
  return (
    <section id="tools" aria-labelledby="tools-heading" className="scroll-mt-24 py-16 sm:py-20">
      <div className="container-site">
        <div id="tools-heading">
          <SectionHeading
            kicker="Tools"
            title="Tools and platforms"
            description="The tools I use across development, data, and deployment workflows."
          />
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <Card key={tool.name}>
              <div className="flex items-start justify-between gap-3">
                <span
                  aria-hidden="true"
                  className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 bg-slate-100 text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                >
                  <Wrench size={20} />
                </span>
                <span className="tag">{tool.category}</span>
              </div>
              <h3 className="mt-3 text-lg font-bold">{tool.name}</h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {tool.description}
              </p>
              {tool.websiteUrl ? (
                <a
                  href={tool.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-indigo-600 hover:text-indigo-800 dark:text-indigo-300 dark:hover:text-indigo-200"
                  aria-label={`${tool.name} official website (opens in a new tab)`}
                >
                  Official website
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
              ) : null}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
