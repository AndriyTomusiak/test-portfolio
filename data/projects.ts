export type Project = {
  title: string;
  summary: string;
  tags: string[];
  featured?: boolean;
  links?: { github?: string; live?: string };
};

export const projects: Project[] = [
  {
    title: "SportManager Platform",
    summary:
      "Multi-tenant platform for sports organizations covering training schedules, attendance, inventory, and competition reports. Two Angular apps share a typed data-access layer in an Nx monorepo, backed by a .NET 9 API with tenant-scoped queries and role-based access across four user roles.",
    tags: ["Angular 20", ".NET 9", "PostgreSQL", "Nx", "EF Core"],
    featured: true,
    links: {
      github: "https://github.com/AndriyTomusiak/sport-manager-frontend",
    },
  },
  {
    title: "SportManager API",
    summary:
      "Clean-architecture .NET 9 backend with EF Core and PostgreSQL. Handles JWT authentication, tenant isolation at the query level, and separate platform and back-office endpoint surfaces with policy-based authorization.",
    tags: [".NET 9", "EF Core", "PostgreSQL", "JWT"],
    featured: true,
    links: { github: "https://github.com/AndriyTomusiak/sport-manager-api" },
  },
  {
    title: "Championship Table",
    summary:
      "Tournament tracking application with live standings, fixture management, and result entry. Handles group stages and knockout brackets with automatic table recalculation on every result.",
    tags: ["React", "Node.js", "PostgreSQL"],
    links: { github: "https://github.com/AndriyTomusiak/Championship-Table" },
  },
  {
    title: "Games API",
    summary:
      "REST service for game catalogue data with filtering, pagination, and full-text search. Includes an admin surface for content management over a normalised relational schema.",
    tags: [".NET", "SQL", "REST"],
    links: { github: "https://github.com/AndriyTomusiak/gamesAPI" },
  },
  {
    title: "Games Station",
    summary:
      "Storefront interface for a game distribution platform with catalogue browsing, cart flow, and responsive layouts that hold up from mobile to wide desktop.",
    tags: ["Angular", "TypeScript", "SCSS"],
    links: { github: "https://github.com/AndriyTomusiak/Games-Station" },
  },
  {
    title: "Magic Memory Game",
    summary:
      "Browser-based memory card game with animated flip transitions, move counting, and difficulty levels. Built as an exercise in managing game state without an external store.",
    tags: ["React", "CSS Animations"],
    links: {
      github: "https://github.com/AndriyTomusiak/Magic-Memory-Game-npm",
    },
  },
];
