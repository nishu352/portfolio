export interface SkillItem {
  name: string;
  category: "backend" | "data-infra" | "frontend" | "tools-delivery";
  description: string;
  tag?: string;
  primary?: boolean;
}

export interface SkillGroup {
  id: "backend" | "data-infra" | "frontend" | "tools-delivery";
  title: string;
  eyebrow: string;
  description: string;
  skills: SkillItem[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: "backend",
    title: "Backend Architecture & APIs",
    eyebrow: "Core Specialty",
    description: "Designing deterministic, high-throughput microservices and APIs with strict schema validation and resilient error handling.",
    skills: [
      { name: "Node.js", category: "backend", description: "Event-driven runtime for high-concurrency network services.", tag: "Runtime", primary: true },
      { name: "Fastify", category: "backend", description: "High-throughput JSON APIs with schema-based serialization and low overhead.", tag: "Framework", primary: true },
      { name: "Express", category: "backend", description: "Robust web application framework for modular middleware routing.", tag: "Framework" },
      { name: "TypeScript", category: "backend", description: "Type-safe engineering across domain schemas, APIs, and client contracts.", tag: "Language", primary: true },
      { name: "REST APIs", category: "backend", description: "Standardized, versioned endpoint architectures with comprehensive status semantics.", tag: "Protocol", primary: true },
    ]
  },
  {
    id: "data-infra",
    title: "Data, Queues & Infrastructure",
    eyebrow: "Scale & Reliability",
    description: "Structuring persistent relational stores, in-memory caching layers, and asynchronous worker queues for background compute.",
    skills: [
      { name: "PostgreSQL", category: "data-infra", description: "Relational database with complex queries, indexing strategies, and ACID integrity.", tag: "Database", primary: true },
      { name: "Prisma", category: "data-infra", description: "Type-safe ORM for database migrations, relational modeling, and query synthesis.", tag: "ORM", primary: true },
      { name: "Redis", category: "data-infra", description: "In-memory caching, sub-millisecond lookups, and distributed lock management.", tag: "Cache", primary: true },
      { name: "BullMQ", category: "data-infra", description: "Distributed message queues and scheduled jobs for heavy asynchronous tasks.", tag: "Queues", primary: true },
      { name: "Supabase", category: "data-infra", description: "Hosted PostgreSQL, authentication policies, and realtime subscriptions.", tag: "BaaS" },
      { name: "Docker", category: "data-infra", description: "Containerized application packaging and deterministic development environments.", tag: "Container" },
      { name: "Linux", category: "data-infra", description: "Production server administration, systemd service management, and shell scripting.", tag: "OS" },
      { name: "PM2", category: "data-infra", description: "Production process management, clustering, and zero-downtime reloads.", tag: "Process Mgr" },
    ]
  },
  {
    id: "frontend",
    title: "Modern Frontend & Client Systems",
    eyebrow: "Product Sensibility",
    description: "Crafting fluid, high-performance interfaces that bridge robust backend systems with refined digital product design.",
    skills: [
      { name: "Next.js", category: "frontend", description: "App Router, Server Components, and optimized full-stack web applications.", tag: "Framework", primary: true },
      { name: "React", category: "frontend", description: "Component-driven user interfaces, hooks composition, and concurrent rendering.", tag: "Library", primary: true },
      { name: "JavaScript", category: "frontend", description: "Modern ESNext, asynchronous iteration, and browser API integrations.", tag: "Language" },
      { name: "Tailwind CSS", category: "frontend", description: "Utility-first CSS architecture for custom, ultra-responsive design systems.", tag: "Styling", primary: true },
      { name: "Shadcn UI", category: "frontend", description: "Accessible, customizable primitives built on Radix and Tailwind.", tag: "UI Components" },
      { name: "TanStack Query", category: "frontend", description: "Server state synchronization, intelligent caching, and optimistic mutations.", tag: "Data Fetching" },
      { name: "Zustand", category: "frontend", description: "Minimalist, unopinionated client-side state management without boilerplate.", tag: "State" },
    ]
  },
  {
    id: "tools-delivery",
    title: "Tooling, Testing & Delivery",
    eyebrow: "Engineering Discipline",
    description: "Streamlining release pipelines, API verification, and version control workflows for dependable production deployments.",
    skills: [
      { name: "Git", category: "tools-delivery", description: "Distributed version control, branch management, and clean commit history.", tag: "VCS", primary: true },
      { name: "GitHub", category: "tools-delivery", description: "Collaborative development, pull request reviews, and automated CI/CD actions.", tag: "Platform" },
      { name: "Postman", category: "tools-delivery", description: "API testing, contract verification, collection automation, and documentation.", tag: "API Testing" },
      { name: "Railway", category: "tools-delivery", description: "Container and database deployment platform for rapid service provisioning.", tag: "Cloud" },
      { name: "Vercel", category: "tools-delivery", description: "Edge-first frontend deployments, preview environments, and serverless hosting.", tag: "Cloud", primary: true },
      { name: "AWS", category: "tools-delivery", description: "Cloud compute and storage fundamentals (EC2, S3) for backend hosting.", tag: "Cloud" },
    ]
  }
];
