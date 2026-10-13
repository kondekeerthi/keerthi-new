import portfolio from "@/config/portfolio";
import { ArrowDown, FileText, Mail } from "lucide-react";

export default function Hero() {


  return (
    <section id="home" aria-labelledby="home-heading" className="relative overflow-hidden py-16 sm:py-24">
      {/* Decorative technology-inspired background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="animate-drift absolute -top-24 left-[8%] h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl dark:bg-indigo-500/15" />
        <div className="animate-drift absolute right-[6%] top-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl [animation-delay:-6s] dark:bg-cyan-400/10" />
        <div
          className="absolute inset-0 opacity-[0.35] dark:opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgb(100 116 139 / 0.18) 1px, transparent 1px), linear-gradient(to bottom, rgb(100 116 139 / 0.18) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            maskImage:
              "radial-gradient(ellipse 80% 70% at 50% 20%, black 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 70% at 50% 20%, black 40%, transparent 100%)",
          }}
        />
      </div>

      <div className="container-site relative grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <span className="eyebrow">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-emerald-500" />
            Open to connect
          </span>
          <h1
            id="home-heading"
            className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl"
          >
            Konde Keerthi
            <span className="mt-2 block bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-xl font-bold text-transparent sm:text-2xl">
              AI Developer | Web Development | Data Analytics | AI-Assisted
              Engineering
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
            {portfolio.intro}
          </p>

          <ul aria-label="Focus areas" className="mt-5 flex flex-wrap gap-2">
            {[
              "AI-Assisted Development",
              "Next.js & TypeScript",
              "SQL & Power BI",
              "Modern Dev Workflows",
            ].map((chip) => (
              <li key={chip} className="tag">
                {chip}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">
              <ArrowDown size={17} aria-hidden="true" />
              Explore My Work
            </a>
            <a href="#contact" className="btn-secondary">
              <Mail size={17} aria-hidden="true" />
              Contact Me
            </a>
            
          </div>
        </div>

        {/* Profile photo placeholder — CSS monogram, never a fake photo */}
        <div className="card animate-float-slow p-8 text-center">
          <div
            role="img"
            aria-label="Profile photo placeholder for Konde Keerthi — add a photo in config/portfolio.ts"
            className="mx-auto grid h-36 w-36 place-items-center rounded-[2rem] border-2 border-dashed border-indigo-300 bg-gradient-to-br from-indigo-50 to-cyan-50 text-4xl font-extrabold text-indigo-600 dark:border-indigo-500/40 dark:from-indigo-500/10 dark:to-cyan-500/10 dark:text-indigo-300"
          >
            KK
          </div>
          <p className="mt-4 font-bold">{portfolio.name}</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {portfolio.role}
          </p>
          <p className="mx-auto mt-3 max-w-xs rounded-xl bg-slate-100 px-3 py-2 text-xs text-slate-500 dark:bg-slate-800 dark:text-slate-400">
            Profile photo placeholder — add your photo at{" "}
            <code className="font-mono">public/images/</code> and set{" "}
            <code className="font-mono">profileImage</code> in{" "}
            <code className="font-mono">config/portfolio.ts</code>.
          </p>
        </div>
      </div>
    </section>
  );
}
