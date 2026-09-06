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
    role: "Senior Full Stack / AI Engineer",
    company: "Vakal",
    period: "Jun 2023 — Jul 2026",
    current: true,
    points: [
      "Built full-stack web applications using React, Next.js, TypeScript, .NET, Python, and Azure across enterprise and SaaS product lines.",
      "Developed AI-powered applications using Azure OpenAI, OpenAI APIs, RAG pipelines, and AI agents — covering intelligent assistants, document processing, and business automation.",
      "Integrated Microsoft 365, SharePoint, and Microsoft Graph API into enterprise applications, enabling seamless access to organisational data and workflows.",
      "Designed and developed REST APIs and cloud services with secure authentication using Microsoft Entra ID.",
      "Worked across application architecture, development, deployment, and performance optimisation throughout the full delivery lifecycle.",
    ],
    stack: ["React", "Next.js", "TypeScript", ".NET", "Python", "Azure", "Azure OpenAI", "Microsoft Graph"],
  },
  {
    role: "Full Stack Microsoft Developer",
    company: "Cogito Corp",
    period: "Sep 2020 — Nov 2022",
    points: [
      "Developed enterprise applications using C#, .NET, React, TypeScript, SQL Server, and Azure across internal tools and client-facing platforms.",
      "Built REST APIs and integrations with Microsoft 365, SharePoint, and Microsoft Graph API to surface organisational data in custom applications.",
      "Implemented authentication and role-based access using Azure Active Directory, enforcing fine-grained permissions at the API layer.",
      "Developed responsive frontend applications and scalable backend services, participating in architecture decisions, testing, deployment, and ongoing application support.",
    ],
    stack: ["C#", ".NET", "React", "TypeScript", "SQL Server", "Azure", "Microsoft Graph", "Azure AD"],
  },
  {
    role: "Full Stack Developer",
    company: "Onit Digital, Inc.",
    period: "Apr 2015 — Jul 2019",
    points: [
      "Developed web applications using JavaScript, React, Node.js, PHP, HTML, and CSS for clients across multiple industries.",
      "Built REST APIs, database-driven applications, and third-party integrations, owning features from backend logic through to deployed frontend.",
      "Developed responsive and reusable frontend components, maintaining consistency across screen sizes and browsers.",
      "Collaborated with designers and clients to deliver new features, diagnose production issues, and ship reliable web solutions.",
    ],
    stack: ["JavaScript", "React", "Node.js", "PHP", "HTML", "CSS", "MySQL"],
  },
];
