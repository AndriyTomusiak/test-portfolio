import { Code2, Layers, ShieldCheck, Zap } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { profile } from "@/data/profile";

const traits = [
  {
    icon: Layers,
    title: "Full-Stack Ownership",
    text: "Comfortable from schema migration to rendered component, without handing off at the API boundary.",
  },
  {
    icon: Code2,
    title: "Typed Contracts",
    text: "Shared types between backend and frontend so refactors fail at compile time, not in production.",
  },
  {
    icon: ShieldCheck,
    title: "Role-Based Design",
    text: "Multi-tenant systems with permission models enforced on both the API and the interface.",
  },
  {
    icon: Zap,
    title: "Maintainable Delivery",
    text: "Explicit conventions and small reviewable changes over clever one-off solutions.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          watermark="ABOUT"
          title="About Me"
          subtitle="Who I am"
        />

        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr]">
          <Reveal className="space-y-5">
            {profile.bio.map((paragraph, i) => (
              <p key={i} className="leading-relaxed text-text-muted">
                {paragraph}
              </p>
            ))}

            <div className="flex flex-wrap gap-2 pt-2">
              {["Angular", ".NET", "PostgreSQL", "TypeScript", "React"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-gold/25 bg-gold/5 px-3 py-1 text-xs text-gold"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </Reveal>

          <RevealGroup className="grid gap-4 sm:grid-cols-2">
            {traits.map(({ icon: Icon, title, text }) => (
              <RevealItem
                key={title}
                className="group rounded-2xl border border-border bg-surface/40 p-6 transition-all duration-300 hover:border-gold/40 hover:bg-surface"
              >
                <div className="mb-4 inline-flex rounded-xl border border-gold/20 bg-gold/10 p-2.5 text-gold transition-transform duration-300 group-hover:scale-110">
                  <Icon size={18} />
                </div>
                <h3 className="font-display text-base font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {text}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
