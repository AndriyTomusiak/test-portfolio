"use client";

import { motion } from "framer-motion";

type Props = { items: string[] };

/**
 * Technologies laid out around two counter-rotating rings.
 * Each label spins backwards at the ring's speed so the text stays upright.
 */
export function TechOrbit({ items }: Props) {
  const inner = items.slice(0, Math.ceil(items.length / 2));
  const outer = items.slice(Math.ceil(items.length / 2));

  const rings = [
    { items: inner, radius: 34, duration: 34, reverse: false },
    { items: outer, radius: 48, duration: 46, reverse: true },
  ];

  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      <div
        aria-hidden
        className="absolute inset-[18%] rounded-full bg-gold/10 blur-3xl"
      />

      {[30, 44, 58].map((inset) => (
        <div
          key={inset}
          aria-hidden
          className="absolute rounded-full border border-border"
          style={{
            inset: `${50 - inset}%`,
          }}
        />
      ))}

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex size-24 items-center justify-center rounded-full border border-gold/30 bg-surface text-center">
          <span className="font-display text-xs font-semibold uppercase tracking-widest text-gradient-gold">
            Tech
            <br />
            Stack
          </span>
        </div>
      </div>

      {rings.map(({ items: ringItems, radius, duration, reverse }, ringIdx) => (
        <motion.div
          key={ringIdx}
          className="absolute inset-0"
          animate={{ rotate: reverse ? -360 : 360 }}
          transition={{ duration, repeat: Infinity, ease: "linear" }}
        >
          {ringItems.map((tech, i) => {
            const angle = (i / ringItems.length) * 2 * Math.PI;
            // Fixed precision keeps the SSR and client strings byte-identical,
            // which raw trig output does not guarantee.
            const x = (50 + radius * Math.cos(angle)).toFixed(4);
            const y = (50 + radius * Math.sin(angle)).toFixed(4);

            return (
              <motion.div
                key={tech}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${x}%`, top: `${y}%` }}
                animate={{ rotate: reverse ? 360 : -360 }}
                transition={{ duration, repeat: Infinity, ease: "linear" }}
              >
                <span className="whitespace-nowrap rounded-full border border-border bg-bg-elevated px-3 py-1.5 text-xs font-medium text-text-muted transition-colors hover:border-gold hover:text-gold">
                  {tech}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      ))}
    </div>
  );
}
