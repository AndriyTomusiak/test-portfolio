"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { useIntroDone } from "./PageLoader";

type Props = {
  to: number;
  suffix?: string;
  duration?: number;
};

export function Counter({ to, suffix = "", duration = 1400 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const introDone = useIntroDone();
  const [value, setValue] = useState(0);

  useEffect(() => {
    // In the hero these are already in view under the loader, so the count-up
    // has to wait for the overlay or it finishes unseen.
    if (!inView || !introDone) return;

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      // easeOutExpo so the number settles rather than stopping abruptly
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setValue(Math.round(eased * to));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, introDone, to, duration]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}
