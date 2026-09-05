import { Reveal } from "./Reveal";

type Props = {
  /** Large faded word rendered behind the title. */
  watermark: string;
  title: string;
  subtitle?: string;
};

export function SectionHeading({ watermark, title, subtitle }: Props) {
  return (
    <Reveal className="relative mb-16 text-center">
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-6 select-none text-6xl font-bold tracking-tight text-white/[0.03] sm:text-8xl"
      >
        {watermark}
      </span>

      <h2 className="relative font-display text-4xl font-bold tracking-tight sm:text-5xl">
        {title}
      </h2>

      <div className="relative mx-auto mt-5 flex items-center justify-center gap-3">
        <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold/60" />
        <span className="size-1.5 rounded-full bg-gold" />
        <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold/60" />
      </div>

      {subtitle && (
        <p className="relative mt-4 text-sm uppercase tracking-[0.25em] text-text-subtle">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
