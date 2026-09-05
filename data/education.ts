export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  current?: boolean;
  detail?: string;
  note?: string;
};

export const education: EducationItem[] = [
  {
    degree: "Bachelor in Computer Science",
    institution: "National University",
    period: "2021 — 2025",
    detail: "GPA: 3.8 / 4.0",
    note: "Coursework in algorithms, database systems, distributed architecture, and software engineering practice.",
  },
  {
    degree: "Full-Stack Web Development",
    institution: "Professional Certification Program",
    period: "2022",
    note: "Intensive program covering modern JavaScript, REST API design, relational databases, and deployment workflows.",
  },
  {
    degree: "Diploma in Software Engineering",
    institution: "Technical Institute",
    period: "2019 — 2021",
    detail: "Graduated with distinction",
    note: "Foundation in object-oriented programming, data structures, and systems design.",
  },
];
