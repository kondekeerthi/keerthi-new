"use client";

import { ArrowUp } from "lucide-react";
import portfolio from "@/config/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 py-8 dark:border-slate-800">
      <div className="container-site flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm font-bold text-slate-900 dark:text-white">
            {portfolio.name}
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {portfolio.headline} · © {year}
          </p>
        </div>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-bold text-slate-700 transition hover:border-indigo-500 hover:text-indigo-700 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-200"
        >
          <ArrowUp size={14} aria-hidden="true" />
          Back to top
        </button>
      </div>
    </footer>
  );
}
