"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

type Props = {
  text: string;
  className?: string;
  /** `mount` animates immediately, `inView` waits until scrolled into view. */
  trigger?: "mount" | "inView";
  /** Seconds between each character. */
  stagger?: number;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
};

const container = (stagger: number, delay: number): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
});

const character: Variants = {
  hidden: { opacity: 0, y: "0.35em", filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * Reveals a headline character by character. Splitting happens per word first so
 * that line wrapping stays on word boundaries — splitting straight into
 * characters lets a browser break a word in half mid-animation.
 */
export function AnimatedText({
  text,
  className,
  trigger = "inView",
  stagger = 0.03,
  delay = 0,
  as = "span",
}: Props) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as];

  if (reduceMotion) {
    const Tag = as;
    return <Tag className={className}>{text}</Tag>;
  }

  const animationProps =
    trigger === "mount"
      ? { animate: "visible" as const }
      : {
          whileInView: "visible" as const,
          viewport: { once: true, margin: "-80px" },
        };

  return (
    <MotionTag
      className={className}
      // The characters are split across elements, so expose the plain string to
      // assistive tech and hide the fragments.
      aria-label={text}
      variants={container(stagger, delay)}
      initial="hidden"
      {...animationProps}
    >
      {text.split(" ").map((word, wordIndex, words) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap">
          {[...word].map((char, charIndex) => (
            <motion.span
              key={charIndex}
              aria-hidden
              className="inline-block"
              variants={character}
            >
              {char}
            </motion.span>
          ))}
          {wordIndex < words.length - 1 && (
            <span aria-hidden className="inline-block">
              &nbsp;
            </span>
          )}
        </span>
      ))}
    </MotionTag>
  );
}
