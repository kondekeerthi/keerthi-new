import portfolio from "@/config/portfolio";
import { Briefcase, GraduationCap, HeartHandshake, Workflow } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { Card } from "./ui/SectionHeading";

const facts = [
  {
    icon: Briefcase,
    title: "Current role",
    text: "AI Developer in PCS,DGP Office.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    text: "B.Tech in Electronics and Communication Engineering (ECE).",
  },
  {
    icon: Workflow,
    title: "Technical interests",
    text: "Web applications, AI-assisted development, data analytics, and modern software engineering workflows.",
  },
  {
    icon: HeartHandshake,
    title: "Working style",
    text: "Practical, maintainable solutions built with clear communication and steady iteration.",
  },
];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-24 py-16 sm:py-20">
      <div className="container-site">
        <div id="about-heading">
          <SectionHeading
            kicker="About"
            title="Developer focused on practical, modern software"
            description="A concise summary of my background and the areas I work in."
          />
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {facts.map((fact) => (
            <Card key={fact.title}>
              <div className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl border border-indigo-100 bg-indigo-50 text-indigo-600 dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-300"
                >
                  <fact.icon size={20} />
                </span>
                <div>
                  <h3 className="font-bold">{fact.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {fact.text}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <p className="mt-6 max-w-3xl leading-relaxed text-slate-600 dark:text-slate-300">
          {portfolio.intro} I enjoy learning through building — creating web
          interfaces, working with data, and refining command-line and DevOps
          workflows along the way.
        </p>
      </div>
    </section>
  );
}
