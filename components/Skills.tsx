import { skillCategories } from "@/config/portfolio";
import { BadgeCheck } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { Card } from "./ui/SectionHeading";

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="scroll-mt-24 bg-white py-16 sm:py-20 dark:bg-slate-900/40"
    >
      <div className="container-site">
        <div id="skills-heading">
          <SectionHeading
            kicker="Skills"
            title="What I work with"
            description="Organized by area. Only the tools and technologies I actually use are listed — no ratings or percentages."
          />
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {skillCategories.map((category) => (
            <Card key={category.title}>
              <h3 className="text-lg font-bold">{category.title}</h3>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                {category.description}
              </p>
              <ul aria-label={`${category.title} skills`} className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="inline-flex items-center gap-1.5 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1.5 text-sm font-semibold text-indigo-800 dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-200"
                  >
                    <BadgeCheck size={15} aria-hidden="true" className="text-indigo-500 dark:text-indigo-300" />
                    {skill}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
