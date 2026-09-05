export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  points: string[];
  stack: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Full-Stack Engineer",
    company: "TechNova Vision",
    period: "Mar 2025 — Present",
    current: true,
    points: [
      "Built SportManager, a multi-tenant platform for sports organizations, covering scheduling, attendance tracking, inventory, and competition reporting.",
      "Designed the .NET 9 API with EF Core and PostgreSQL, including a tenant-scoped data layer and JWT auth with role-based policies across four user roles.",
      "Structured the frontend as an Nx monorepo with two Angular 20 apps sharing a typed data-access layer, using signals for state instead of a store library.",
      "Migrated the entire domain from GUID to integer primary keys across 24 frontend modules and 6 backend entities, coordinating schema migrations with zero type drift.",
    ],
    stack: ["Angular", ".NET 9", "PostgreSQL", "Nx", "TypeScript"],
  },
  {
    role: "Full-Stack Developer",
    company: "Freelance / Contract",
    period: "Jun 2023 — Mar 2025",
    points: [
      "Delivered production web applications for clients in sports management, e-commerce, and internal tooling.",
      "Owned features end to end: database design, REST API implementation, frontend architecture, and deployment.",
      "Reduced query latency on a reporting dashboard by restructuring aggregations and adding targeted indexes.",
    ],
    stack: ["React", "Node.js", "PostgreSQL", "Docker"],
  },
  {
    role: "Frontend Developer",
    company: "Early Career",
    period: "2021 — Jun 2023",
    points: [
      "Built responsive interfaces from design specs, focusing on component reuse and accessible markup.",
      "Integrated third-party APIs and handled authentication flows in single-page applications.",
      "Worked within an existing team codebase, learning review conventions and incremental refactoring.",
    ],
    stack: ["JavaScript", "React", "SCSS", "Git"],
  },
];
