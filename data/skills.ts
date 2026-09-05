export type SkillCategory = {
  title: string;
  items: { name: string; level: number }[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    items: [
      { name: "Angular", level: 95 },
      { name: "React", level: 88 },
      { name: "TypeScript", level: 94 },
      { name: "Next.js", level: 82 },
      { name: "Tailwind CSS", level: 90 },
      { name: "RxJS", level: 85 },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: ".NET / C#", level: 92 },
      { name: "Node.js", level: 80 },
      { name: "EF Core", level: 88 },
      { name: "REST APIs", level: 93 },
    ],
  },
  {
    title: "Data & Infrastructure",
    items: [
      { name: "PostgreSQL", level: 89 },
      { name: "Docker", level: 78 },
      { name: "Nx Monorepo", level: 86 },
      { name: "Git / CI", level: 90 },
    ],
  },
];

/** Flat list used by the orbiting tech ring in the Tech Stack section. */
export const techOrbit = [
  "TypeScript",
  "Angular",
  "React",
  ".NET",
  "C#",
  "PostgreSQL",
  "Next.js",
  "Node.js",
  "Docker",
  "Tailwind",
  "Nx",
  "Git",
];
