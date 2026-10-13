import type { ReactNode } from "react";

interface SectionHeadingProps {
  kicker: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  kicker,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-8 max-w-2xl">
      <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.1em] text-indigo-600 dark:text-indigo-300">
        {kicker}
      </p>
      <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-2 text-slate-600 dark:text-slate-300">{description}</p>
      ) : null}
    </div>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`card p-6 ${className}`}>{children}</div>;
}
