"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { projects } from "@/data/projects";
import { experience } from "@/data/experience";
import { skillCategories } from "@/data/skills";

/** Milliseconds for the counter to travel from 0 to 100. */
const COUNT_DURATION = 1100;
/** Pause on a full bar before the overlay leaves. */
const HOLD_AFTER_FULL = 250;

const STATUS_LINES = [
  "loading profile.json",
  `compiling skills[${skillCategories.length}]`,
  `indexing projects[${projects.length}]`,
  `resolving experience[${experience.length}]`,
  "ready",
];

// Defaults to true so anything rendered outside the provider animates normally
// rather than waiting forever for an intro that never runs.
const IntroContext = createContext(true);

/** True once the loading overlay is gone and entrance animations may run. */
export function useIntroDone() {
  return useContext(IntroContext);
}

export function PageLoader({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();
  // Skipping straight to done keeps the hero from waiting on an overlay that
  // reduced-motion users never see.
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (reduceMotion) {
      setDone(true);
      return;
    }

    const start = performance.now();
    let frame = 0;
    let timeout: ReturnType<typeof setTimeout> | undefined;

    const tick = (now: number) => {
      const value = Math.min(
        100,
        Math.round(((now - start) / COUNT_DURATION) * 100),
      );
      setProgress(value);

      if (value < 100) {
        frame = requestAnimationFrame(tick);
      } else {
        timeout = setTimeout(() => setDone(true), HOLD_AFTER_FULL);
      }
    };

    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(timeout);
    };
  }, [reduceMotion]);

  // Hold the page still while the overlay covers it, otherwise a restored
  // scroll position can jump around behind the curtain.
  useEffect(() => {
    if (done) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [done]);

  const status =
    STATUS_LINES[
      Math.min(
        STATUS_LINES.length - 1,
        Math.floor((progress / 100) * STATUS_LINES.length),
      )
    ];

  return (
    <IntroContext.Provider value={done}>
      <AnimatePresence>
        {!done && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.4, ease: "easeInOut" } }}
          >
            <div className="w-72 sm:w-80">
              <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-text-subtle">
                {status}
              </p>

              <div className="h-[3px] w-full overflow-hidden rounded-full bg-border">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-gold-dim via-gold to-gold-bright"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <p className="mt-4 font-display text-4xl font-bold tabular-nums text-gradient-gold">
                {progress}%
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {children}
    </IntroContext.Provider>
  );
}
