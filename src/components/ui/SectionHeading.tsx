"use client";

import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  number?: string;
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  number,
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl",
        className
      )}
    >
      <div className={cn("flex items-center gap-3 mb-4", align === "center" && "justify-center")}>
        {number && (
          <span className="editorial-mono text-xs font-semibold tracking-wider text-accent uppercase">
            {number}
          </span>
        )}
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium tracking-widest uppercase border-subtle glass-pill text-secondary">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          {eyebrow}
        </span>
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary leading-[1.1] font-display">
        {title}{" "}
        {highlight && (
          <span className="text-editorial-gradient">
            {highlight}
          </span>
        )}
      </h2>

      {description && (
        <p className="mt-5 text-base sm:text-lg text-secondary leading-relaxed font-normal">
          {description}
        </p>
      )}
    </div>
  );
}
