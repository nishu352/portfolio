export interface SiteConfig {
  name: string;
  role: string;
  tagline: string;
  bio: string[];
  email: string;
  location: string;
  verifiedProfiles: {
    github: string;
    linkedin?: string;
    twitter?: string;
  };
  resumePath: string;
  metadata: {
    title: string;
    description: string;
    keywords: string[];
    siteUrl: string;
  };
  navigation: {
    label: string;
    href: string;
  }[];
}

export const siteConfig: SiteConfig = {
  name: "Nishant Bhardwaj",
  role: "Backend Engineer & Product Builder",
  tagline: "I build useful digital products, thoughtful backend systems, and experiences that turn ideas into working software.",
  bio: [
    "I am an engineer focused on architecting resilient backend systems and translating complex product logic into dependable digital experiences.",
    "My work spans high-throughput API engines, policy validation systems, asynchronous worker queues, and end-to-end web tools. Whether designing multi-tenant financial engines or real-time document manipulation pipelines, I prioritize system integrity, clean abstractions, and tangible user value over decorative complexity.",
    "Currently building core platforms, serviceability algorithms, and policy infrastructure at Finolink Business Consulting Pvt. Ltd."
  ],
  email: "bhardwajnishant966@gmail.com",
  location: "Noida / Delhi NCR, India",
  verifiedProfiles: {
    github: "https://github.com/nishu352",
    linkedin: "https://linkedin.com/in/nishant-bhardwaj", // Note: Configurable destination for verified profile
  },
  resumePath: "/resume/Nishant_Bhardwaj_Resume.pdf",
  metadata: {
    title: "Nishant Bhardwaj | Backend Engineer & Product Builder",
    description: "Personal portfolio of Nishant Bhardwaj. Backend engineer and product builder crafting dependable backend architectures, high-performance APIs, and high-utility digital platforms.",
    keywords: [
      "Nishant Bhardwaj",
      "Backend Engineer",
      "Product Builder",
      "Node.js",
      "Fastify",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "BullMQ",
      "Next.js",
      "Distributed Systems",
      "Fintech Engineering"
    ],
    siteUrl: "https://nishantbhardwaj.dev",
  },
  navigation: [
    { label: "About", href: "#about" },
    { label: "Selected Work", href: "#work" },
    { label: "Architecture & Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
};
