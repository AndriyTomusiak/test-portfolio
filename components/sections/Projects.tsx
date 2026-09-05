import { ExternalLink, Star } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          watermark="WORK"
          title="Projects"
          subtitle="Selected work"
        />

        <RevealGroup className="grid gap-6 md:grid-cols-2" stagger={0.09}>
          {projects.map(({ title, summary, tags, featured, links }) => (
            <RevealItem
              key={title}
              className={featured ? "md:col-span-2" : undefined}
            >
              <article className="group relative h-full overflow-hidden rounded-2xl border border-border bg-surface/40 p-7 transition-all duration-300 hover:border-gold/40 hover:bg-surface">
                {/* Gold wash that fades in on hover */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-gold/[0.07] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />

                <div className="relative flex h-full flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-xl font-semibold transition-colors group-hover:text-gold">
                      {title}
                    </h3>

                    {featured && (
                      <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-gold/25 bg-gold/10 px-2.5 py-1 text-[11px] font-medium text-gold">
                        <Star size={11} className="fill-gold" />
                        Featured
                      </span>
                    )}
                  </div>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-text-muted">
                    {summary}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-border bg-bg-elevated px-2.5 py-1 text-xs text-text-subtle transition-colors group-hover:border-gold/20 group-hover:text-text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {(links?.github || links?.live) && (
                    <div className="mt-6 flex gap-3 border-t border-border pt-5">
                      {links.github && (
                        <a
                          href={links.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-gold"
                        >
                          <FaGithub size={15} />
                          Source
                        </a>
                      )}
                      {links.live && (
                        <a
                          href={links.live}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-gold"
                        >
                          <ExternalLink size={15} />
                          Live
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
