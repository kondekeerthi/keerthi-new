import { learningAreas } from "@/config/portfolio";
import { GraduationCap } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { Card } from "./ui/SectionHeading";

export default function Learning() {
  return (
    <section id="learning" aria-labelledby="learning-heading" className="scroll-mt-24 py-16 sm:py-20">
      <div className="container-site">
        <div id="learning-heading">
          <SectionHeading
            kicker="Learning"
            title="Learning and growth"
            description="Technical areas I am actively exploring — presented as interests and development areas, not certifications."
          />
        </div>
        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {learningAreas.map((area, index) => (
            <li key={area.title}>
              <Card className="h-full">
                <span
                  aria-hidden="true"
                  className="grid h-11 w-11 place-items-center rounded-xl border border-cyan-200 bg-cyan-50 text-cyan-700 dark:border-cyan-500/30 dark:bg-cyan-500/10 dark:text-cyan-300"
                >
                  <GraduationCap size={20} />
                </span>
                <p className="mt-3 font-mono text-xs text-slate-400 dark:text-slate-500">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-1 font-bold">{area.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {area.description}
                </p>
              </Card>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
