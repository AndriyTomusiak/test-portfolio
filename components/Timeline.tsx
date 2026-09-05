"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export type TimelineEntry = {
  id: string;
  /** Small pill above the title, e.g. "Current Role". */
  badge?: string;
  highlight?: boolean;
  period: string;
  title: string;
  subtitle: string;
  children: ReactNode;
};

export function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <div className="relative mx-auto max-w-3xl">
      {/* Rail: grows from top to bottom as the section scrolls into view */}
      <motion.div
        aria-hidden
        className="absolute left-[7px] top-2 w-px origin-top bg-gradient-to-b from-gold via-gold/40 to-transparent sm:left-[9px]"
        style={{ bottom: "0.5rem" }}
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />

      <div className="space-y-8">
        {entries.map((entry, i) => (
          <motion.div
            key={entry.id}
            className="relative pl-10 sm:pl-14"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{
              duration: 0.6,
              delay: i * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span
              aria-hidden
              className={`absolute left-0 top-7 flex size-4 items-center justify-center rounded-full border-2 sm:size-5 ${
                entry.highlight
                  ? "border-gold bg-gold/20"
                  : "border-border bg-bg"
              }`}
            >
              <span
                className={`size-1.5 rounded-full ${
                  entry.highlight ? "bg-gold" : "bg-text-subtle"
                }`}
              />
              {entry.highlight && (
                <span className="absolute inline-flex size-4 animate-ping rounded-full bg-gold/40 sm:size-5" />
              )}
            </span>

            <article
              className={`group rounded-2xl border bg-surface/40 p-6 transition-all duration-300 hover:bg-surface sm:p-7 ${
                entry.highlight
                  ? "border-gold/30"
                  : "border-border hover:border-gold/30"
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                {entry.badge && (
                  <span
                    className={`rounded-full px-3 py-1 text-[11px] font-medium ${
                      entry.highlight
                        ? "border border-gold/30 bg-gold/10 text-gold"
                        : "border border-border bg-bg-elevated text-text-subtle"
                    }`}
                  >
                    {entry.badge}
                  </span>
                )}
                <span className="rounded-full border border-border bg-bg-elevated px-3 py-1 text-[11px] text-text-subtle">
                  {entry.period}
                </span>
              </div>

              <h3 className="mt-4 font-display text-xl font-semibold transition-colors group-hover:text-gold">
                {entry.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-gold/80">
                {entry.subtitle}
              </p>

              <div className="mt-4">{entry.children}</div>
            </article>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
