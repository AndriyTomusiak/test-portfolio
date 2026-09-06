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

/** Keys map to the icon components in `components/ui/TechSphere`. */
export type TechIcon =
  | "typescript"
  | "javascript"
  | "angular"
  | "react"
  | "nextjs"
  | "rxjs"
  | "ngrx"
  | "html"
  | "css"
  | "tailwind"
  | "dotnet"
  | "csharp"
  | "nodejs"
  | "express"
  | "swagger"
  | "postgresql"
  | "mongodb"
  | "redis"
  | "docker"
  | "githubactions"
  | "git"
  | "nx"
  | "jest"
  | "figma";

export type TechOrbitItem = {
  name: string;
  icon: TechIcon;
  /** Official brand colour, used to tint the icon on the sphere. */
  color: string;
};

/** Technologies scattered across the rotating sphere in the Tech Stack section. */
export const techOrbit: TechOrbitItem[] = [
  { name: "TypeScript", icon: "typescript", color: "#3178c6" },
  { name: "JavaScript", icon: "javascript", color: "#f7df1e" },
  { name: "Angular", icon: "angular", color: "#dd0031" },
  { name: "React", icon: "react", color: "#61dafb" },
  { name: "Next.js", icon: "nextjs", color: "#ffffff" },
  { name: "RxJS", icon: "rxjs", color: "#b7178c" },
  { name: "NgRx", icon: "ngrx", color: "#ba2bd2" },
  { name: "HTML5", icon: "html", color: "#e34f26" },
  { name: "CSS", icon: "css", color: "#8a5cf6" },
  { name: "Tailwind", icon: "tailwind", color: "#38bdf8" },
  { name: ".NET", icon: "dotnet", color: "#8b6cf0" },
  { name: "C#", icon: "csharp", color: "#a179dc" },
  { name: "Node.js", icon: "nodejs", color: "#5fa04e" },
  { name: "Express", icon: "express", color: "#e5e5e5" },
  { name: "Swagger", icon: "swagger", color: "#85ea2d" },
  { name: "PostgreSQL", icon: "postgresql", color: "#5b7ee8" },
  { name: "MongoDB", icon: "mongodb", color: "#47a248" },
  { name: "Redis", icon: "redis", color: "#ff4438" },
  { name: "Docker", icon: "docker", color: "#2496ed" },
  { name: "GitHub Actions", icon: "githubactions", color: "#2088ff" },
  { name: "Git", icon: "git", color: "#f05033" },
  { name: "Nx", icon: "nx", color: "#7cb8f0" },
  { name: "Jest", icon: "jest", color: "#c21325" },
  { name: "Figma", icon: "figma", color: "#f24e1e" },
];
