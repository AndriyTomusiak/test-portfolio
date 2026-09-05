"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { TechOrbit } from "@/components/ui/TechOrbit";
import { skillCategories, techOrbit } from "@/data/skills";

export function TechStack() {
  return (
    <section id="skills" className="relative border-y border-border bg-bg-elevated py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          watermark="SKILLS"
          title="Tech Stack"
          subtitle="What I build with"
        />

        <div className="grid items-center gap-16 lg:grid-cols-2">
          <RevealGroup className="order-2 space-y-10 lg:order-1" stagger={0.12}>
            {skillCategories.map(({ title, items }) => (
              <RevealItem key={title}>
                <h3 className="mb-5 flex items-center gap-3 font-display text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                  {title}
                  <span className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
                </h3>

                <div className="space-y-4">
                  {items.map(({ name, level }) => (
                    <div key={name}>
                      <div className="mb-1.5 flex items-baseline justify-between">
                        <span className="text-sm text-text">{name}</span>
                        <span className="text-xs text-text-subtle">{level}%</span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-surface">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-gold-dim via-gold to-gold-bright"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${level}%` }}
                          viewport={{ once: true, margin: "-40px" }}
                          transition={{
                            duration: 1,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <div className="order-1 lg:order-2">
            <TechOrbit items={techOrbit} />
          </div>
        </div>
      </div>
    </section>
  );
}
