export interface ExperienceItem {
  company: string;
  location: string;
  period: string;
  startDate: string;
  endDate: string;
  titleNote: string;
  role: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    company: "Finolink Business Consulting Pvt. Ltd.",
    location: "Noida, Uttar Pradesh, India",
    period: "July 2023 — Present",
    startDate: "19 July 2023",
    endDate: "Present",
    titleNote: "Role designated in engineering/backend domain; confirmed by candidate verification",
    role: "Backend Engineer & Platform Developer",
    summary:
      "Core contributor to backend financial infrastructure, banking policy evaluation engines, and partner integration platforms. Focused on high-availability API development, data models, and workflow automations.",
    responsibilities: [
      "Engineered backend REST endpoints and database schemas for institutional loan origination and applicant workflows",
      "Designed dynamic policy verification algorithms mapping borrower profiles against partner bank guidelines",
      "Implemented pan-India pincode lookup systems and employer category classifications with sub-second response times",
      "Managed asynchronous background tasks and file processing pipelines for policy matrices and lead records",
      "Collaborated on internal administrative tools and client-facing interfaces to ensure end-to-end data integrity"
    ],
    technologies: ["Node.js", "TypeScript", "Fastify", "PostgreSQL", "Prisma", "Redis", "BullMQ", "Next.js"]
  }
];
