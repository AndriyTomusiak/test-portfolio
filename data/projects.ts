export type CaseStudy = {
  problem: string;
  approach: string[];
  result: string;
};

export type Project = {
  slug: string;
  code: string;
  title: string;
  subtitle: string;
  year: number;
  summary: string;
  tags: string[];
  images: string[];
  featured?: boolean;
  links?: { github?: string; live?: string };
  caseStudy: CaseStudy;
};

export const projects: Project[] = [
  {
    slug: "sport-manager-platform",
    code: "PROJ-01",
    title: "SportManager Platform",
    subtitle: "MULTI-TENANT SPORTS MANAGEMENT PLATFORM",
    year: 2025,
    summary:
      "Multi-tenant platform for sports organizations covering training schedules, attendance, inventory, and competition reports. Two Angular apps share a typed data-access layer in an Nx monorepo, backed by a .NET 9 API with tenant-scoped queries and role-based access across four user roles.",
    tags: ["Angular 20", ".NET 9", "PostgreSQL", "Nx", "EF Core"],
    images: [],
    featured: true,
    links: {
      github: "https://github.com/AndriyTomusiak/sport-manager-frontend",
    },
    caseStudy: {
      problem:
        "Sports organizations relied on spreadsheets and manual processes to track athlete schedules, attendance, and inventory — creating data silos across coaching staff and administrators.",
      approach: [
        "Built two separate Angular 20 apps (platform and back-office) sharing a typed data-access layer inside an Nx monorepo, eliminating code duplication across apps.",
        "Designed a .NET 9 API with tenant-scoped queries so every database operation is automatically filtered to the requesting organization, preventing cross-tenant data leaks.",
        "Implemented four role types (super-admin, org-admin, coach, athlete) with policy-based authorization enforced at the API layer.",
        "Used EF Core with a code-first schema and migration pipeline for repeatable deployments across environments.",
      ],
      result:
        "A unified platform that gives sports organizations real-time visibility into schedules, attendance, inventory, and competition results — replacing manual workflows with a structured multi-tenant system.",
    },
  },
  {
    slug: "sport-manager-api",
    code: "PROJ-02",
    title: "SportManager API",
    subtitle: "CLEAN-ARCHITECTURE .NET 9 BACKEND",
    year: 2025,
    summary:
      "Clean-architecture .NET 9 backend with EF Core and PostgreSQL. Handles JWT authentication, tenant isolation at the query level, and separate platform and back-office endpoint surfaces with policy-based authorization.",
    tags: [".NET 9", "EF Core", "PostgreSQL", "JWT"],
    images: [],
    featured: true,
    links: { github: "https://github.com/AndriyTomusiak/sport-manager-api" },
    caseStudy: {
      problem:
        "The platform needed a backend that could serve two distinct client apps with different permission models while guaranteeing that one tenant's data is never exposed to another.",
      approach: [
        "Structured the solution following clean-architecture layers: Domain, Application, Infrastructure, and API — keeping business logic independent of framework and persistence concerns.",
        "Implemented JWT-based authentication with refresh tokens, scoped per tenant, so each token carries the claims needed to enforce row-level isolation.",
        "Split endpoint surfaces into platform and back-office controllers, each with its own authorization policy set.",
        "Wrote EF Core global query filters to attach tenant predicates automatically, reducing the chance of accidentally leaking data across organization boundaries.",
      ],
      result:
        "A production-ready API that handles multi-tenant isolation, role-based access, and clean separation of concerns — serving as the backbone for the full SportManager platform.",
    },
  },
  {
    slug: "championship-table",
    code: "PROJ-03",
    title: "Championship Table",
    subtitle: "TOURNAMENT TRACKING APPLICATION",
    year: 2024,
    summary:
      "Tournament tracking application with live standings, fixture management, and result entry. Handles group stages and knockout brackets with automatic table recalculation on every result.",
    tags: ["React", "Node.js", "PostgreSQL"],
    images: [],
    links: { github: "https://github.com/AndriyTomusiak/Championship-Table" },
    caseStudy: {
      problem:
        "Running a local tournament required manually updating standings after every match, leading to calculation errors and delays in publishing results to participants.",
      approach: [
        "Designed a React frontend with live-updating standings tables and a fixture grid that reflects the current bracket state.",
        "Built a Node.js REST API that recalculates group-stage standings and knockout progression automatically whenever a result is submitted.",
        "Stored fixtures, results, and teams in PostgreSQL with referential integrity to prevent orphaned records when brackets advance.",
      ],
      result:
        "A self-contained tournament manager that recalculates and publishes standings instantly after each result entry, eliminating manual tabulation errors.",
    },
  },
  {
    slug: "games-api",
    code: "PROJ-04",
    title: "Games API",
    subtitle: "REST SERVICE FOR GAME CATALOGUE DATA",
    year: 2024,
    summary:
      "REST service for game catalogue data with filtering, pagination, and full-text search. Includes an admin surface for content management over a normalised relational schema.",
    tags: [".NET", "SQL", "REST"],
    images: [],
    links: { github: "https://github.com/AndriyTomusiak/gamesAPI" },
    caseStudy: {
      problem:
        "A game distribution frontend needed a reliable API that could search and filter a large catalogue efficiently, with a separate admin interface for content editors.",
      approach: [
        "Implemented full-text search and multi-criteria filtering with query composition, keeping response times predictable as the catalogue grows.",
        "Added cursor-based pagination to avoid expensive OFFSET queries on large result sets.",
        "Created an admin endpoint group with its own authorization layer, separating public catalogue reads from privileged content mutations.",
      ],
      result:
        "A performant catalogue API that supports complex queries, pagination, and content management — ready to back any storefront or mobile client.",
    },
  },
  {
    slug: "games-station",
    code: "PROJ-05",
    title: "Games Station",
    subtitle: "GAME DISTRIBUTION STOREFRONT",
    year: 2024,
    summary:
      "Storefront interface for a game distribution platform with catalogue browsing, cart flow, and responsive layouts that hold up from mobile to wide desktop.",
    tags: ["Angular", "TypeScript", "SCSS"],
    images: [],
    links: { github: "https://github.com/AndriyTomusiak/Games-Station" },
    caseStudy: {
      problem:
        "Users needed an intuitive way to browse a large game catalogue, filter by genre and platform, and manage a cart — across screen sizes from phone to wide monitor.",
      approach: [
        "Built an Angular SPA with a component-driven architecture and SCSS design tokens for consistent spacing and typography across the catalogue and checkout views.",
        "Implemented lazy-loaded feature modules so the initial bundle only includes the landing page; catalogue and cart load on demand.",
        "Created a responsive grid layout that reflows from one column on mobile to four on wide screens without layout shift.",
      ],
      result:
        "A polished storefront that feels fast and consistent on every screen size, with a clear path from catalogue browsing to checkout.",
    },
  },
  {
    slug: "magic-memory-game",
    code: "PROJ-06",
    title: "Magic Memory Game",
    subtitle: "BROWSER-BASED MEMORY CARD GAME",
    year: 2023,
    summary:
      "Browser-based memory card game with animated flip transitions, move counting, and difficulty levels. Built as an exercise in managing game state without an external store.",
    tags: ["React", "CSS Animations"],
    images: [],
    links: {
      github: "https://github.com/AndriyTomusiak/Magic-Memory-Game-npm",
    },
    caseStudy: {
      problem:
        "Classic memory games often have jarring transitions and no feedback on performance. The goal was to build one that feels smooth and gives the player meaningful progress signals.",
      approach: [
        "Managed all game state — shuffled deck, matched pairs, flip lock, move count — inside React with useReducer, avoiding any external state library.",
        "Implemented CSS 3D card-flip animations with a flip-lock mechanism to prevent double-clicks from corrupting the match check.",
        "Added three difficulty levels that change the grid size, automatically recalculating the card deck on selection.",
      ],
      result:
        "A smooth, self-contained memory game that demonstrates clean state management patterns in React without relying on a third-party store.",
    },
  },
];
