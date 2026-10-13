import type { ProjectStatus } from "@/config/portfolio";

const styles: Record<ProjectStatus, string> = {
  "In Progress":
    "border-amber-300 bg-amber-50 text-amber-800 dark:border-amber-500/40 dark:bg-amber-500/10 dark:text-amber-300",
  Planned:
    "border-slate-300 bg-slate-100 text-slate-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300",
  Completed:
    "border-emerald-300 bg-emerald-50 text-emerald-800 dark:border-emerald-500/40 dark:bg-emerald-500/10 dark:text-emerald-300",
};

export default function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[0.72rem] font-extrabold uppercase tracking-wide ${styles[status]}`}
    >
      <span aria-hidden="true" className="h-2 w-2 rounded-full bg-current" />
      {status}
    </span>
  );
}
