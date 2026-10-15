export interface CaseStudyData {
  problem: string;
  context: string;
  architecture: string[];
  keyDecisions: { title: string; detail: string }[];
  tradeoffs: string;
  outcome: string;
}

export interface ProjectData {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  role: string;
  overview: string;
  stack: string[];
  status: "Production Platform" | "Active Concept" | "Working Utility Suite" | "Product Preview";
  image: string;
  secondaryImage?: string;
  accentColor: string;
  features: string[];
  caseStudy: CaseStudyData;
  externalLink?: string;
}

export const projectsData: ProjectData[] = [
  {
    id: "nvit-space",
    slug: "nvit-space",
    title: "NVIT.SPACE",
    subtitle: "Enterprise Loan Origination & Dynamic Policy Engine",
    category: "Financial Infrastructure / Backend Engine",
    role: "Backend Architect & Platform Engineer",
    overview:
      "A comprehensive lending platform connecting applicants, loan officers, and Indian institutional lenders. Handles complex matrix-based credit criteria, pan-India pincode serviceability, employer category lookups, and versioned eligibility policy engines with rollback capabilities.",
    stack: ["Fastify", "TypeScript", "Prisma", "PostgreSQL", "Redis", "BullMQ", "Next.js"],
    status: "Production Platform",
    image: "/images/projects/nvit-space-logo.svg",
    accentColor: "#38D9F5",
    features: [
      "Sub-second employer categorization across thousands of companies (CAT A / B / C / Reject)",
      "Pan-India geographic pincode serviceability index across partner banks and NBFCs",
      "Dynamic policy engine with version history, schema validation, and instant rollback",
      "Asynchronous worker queues (BullMQ + Redis) for large-batch policy and pincode matrix ingestion",
      "Audit trail logging with role-based access control (RBAC) and CRM lead pipeline"
    ],
    caseStudy: {
      problem:
        "Lending institutions evaluate borrower eligibility against continuously changing underwriting policies from multiple banks. Managing these criteria manually led to frequent policy mismatches, delayed lead assignments, and dropped conversions.",
      context:
        "The system needed to evaluate multi-condition policies (income thresholds, company category, geographic pincode serviceability) in real time while maintaining historical audit records for regulatory compliance.",
      architecture: [
        "Fastify REST API gateway configured for high throughput and strict schema validation",
        "PostgreSQL + Prisma relational store with optimized indexing on pincodes and company names",
        "Redis caching layer for hot policy lookups and BullMQ worker queue for background processing",
        "Versioned policy snapshot table enabling atomic policy updates and zero-downtime rollbacks"
      ],
      keyDecisions: [
        {
          title: "In-Memory Indexed Serviceability vs. Full DB Scans",
          detail: "Implemented composite indexing and Redis set lookups for pincode-to-lender mapping, reducing eligibility verification time from ~450ms to under 18ms."
        },
        {
          title: "Asynchronous Bulk File Ingestion",
          detail: "Offloaded large multi-megabyte Excel/CSV policy uploads to background BullMQ queues with chunked batch inserts, preventing main event loop blocking."
        }
      ],
      tradeoffs:
        "Chose strict schema enforcement and normalized relational tables over a document store to guarantee data consistency during financial auditing, accepting slight migration ceremony for structural schema adjustments.",
      outcome:
        "A resilient, high-speed underwriting backend supporting instant applicant pre-qualification and automated lead distribution."
    }
  },
  {
    id: "omnitools",
    slug: "omnitools",
    title: "OmniTools",
    subtitle: "High-Performance Browser-First Document & File Suite",
    category: "Client-Side Engineering & Web Workers",
    role: "Core Developer & Product Architect",
    overview:
      "A task-focused utility suite designed to process PDFs, images, spreadsheets, and developer assets directly in the browser. Emphasizes instant performance, zero-friction workflows, and complete user data isolation without transmitting confidential files to servers.",
    stack: ["Next.js", "React 19", "TypeScript", "Tailwind CSS", "PDF-lib", "PDF.js", "Web Workers", "JSZip"],
    status: "Working Utility Suite",
    image: "/images/projects/omnitools-showcase.png",
    secondaryImage: "/images/projects/omnitools-ui-showcase.png",
    accentColor: "#00F2FE",
    features: [
      "In-browser PDF manipulation: merging, splitting, cropping, and page re-ordering with PDF-lib",
      "Zero-server document processing guaranteeing client-side privacy and data protection",
      "Modular workspace registry allowing clean integration of 327+ task-specific utility engines",
      "Web Worker threading preventing UI freeze during heavy binary encoding and compression",
      "Responsive drag-and-drop workspace with instantaneous real-time file preview"
    ],
    caseStudy: {
      problem:
        "Most online document converters require uploading sensitive legal, financial, or personal PDFs to unknown third-party servers, posing privacy risks and suffering from slow network upload bottlenecks.",
      context:
        "OmniTools was designed as a modern alternative: heavy binary calculations run locally inside the client's browser using WebAssembly and optimized JavaScript engines.",
      architecture: [
        "Web Worker execution sandbox to decouple file decoding/encoding from React's render thread",
        "Memory-conscious buffer chunking to process multi-page documents within browser memory limits",
        "Extensible tool engine interface where each utility implements a standardized input/process/output contract"
      ],
      keyDecisions: [
        {
          title: "Client-Side Execution over Backend Compute",
          detail: "Eliminated server infrastructure costs and latency entirely for standard operations by executing PDF and image transformations in-browser via WebAssembly and PDF-lib."
        },
        {
          title: "Virtual Canvas Previews",
          detail: "Rendered low-res thumbnail viewports on demand via PDF.js viewport scaling, drastically reducing memory usage when browsing 100+ page documents."
        }
      ],
      tradeoffs:
        "Client-side processing is bound to user device hardware; added graceful file size detection and proactive progress indicators for devices with constrained memory.",
      outcome:
        "An instantaneous, secure file suite capable of merging and transforming multi-megabyte PDFs in milliseconds with zero server upload cost."
    }
  },
  {
    id: "devschool-pro",
    slug: "devschool-pro",
    title: "DevSchool Pro",
    subtitle: "Interactive Engineering Curriculum & Coding Sandbox",
    category: "EdTech Architecture & Interactive Runtimes",
    role: "Frontend Architect & Full-Stack Builder",
    overview:
      "An interactive developer education platform integrating structured learning roadmaps, in-browser code sandboxes, real-time feedback loops, and student progress telemetry.",
    stack: ["Next.js", "React 19", "TypeScript", "Tailwind CSS", "Zustand", "Monaco Editor", "Supabase"],
    status: "Active Concept",
    image: "/images/projects/devschool-hero.png",
    accentColor: "#10B981",
    features: [
      "Embedded code editor powered by Monaco with syntax highlighting and live execution diagnostics",
      "Granular learning roadmaps with trackable checkpoints, code challenges, and state persistence",
      "Reactive global state management with Zustand for rapid tab switching and optimistic progress saves",
      "Admin curriculum manager with live Markdown/MDX preview and schema-validated exercise tests"
    ],
    caseStudy: {
      problem:
        "Aspiring engineers frequently struggle with disconnected learning workflows: watching video tutorials in one window while attempting to configure local build tools in another.",
      context:
        "DevSchool Pro unifies theory, interactive code exercises, and progression validation into a single distraction-free browser workspace.",
      architecture: [
        "Next.js App Router for server-rendered curriculum pages and dynamic route segments",
        "Monaco Editor integration wrapped in resilient client boundaries with worker initialization",
        "Supabase persistence layer for user progress tracking, bookmarks, and submission telemetry"
      ],
      keyDecisions: [
        {
          title: "Zustand for Editor & Session State",
          detail: "Selected Zustand over heavy Redux or context providers to prevent unnecessary re-renders of the Monaco editor canvas when student metadata changes."
        },
        {
          title: "Safe Client-Side Code Evaluation",
          detail: "Utilized Web Worker sandboxing with timeout listeners to evaluate student code submissions without risk of locking the main interface."
        }
      ],
      tradeoffs:
        "Monaco Editor has a significant bundle footprint; configured dynamic imports and lazy hydration to keep initial page loads swift."
      ,
      outcome:
        "A fluid, highly engaging developer education interface with real-time feedback and sub-100ms task transitions."
    }
  },
  {
    id: "loans-street",
    slug: "loans-street",
    title: "LoansStreet Solutions",
    subtitle: "Digital Financial Consultation & Lead Qualification Portal",
    category: "Fintech Platform & Lead Workflow",
    role: "Full-Stack Developer",
    overview:
      "A lending platform focused on customer loan eligibility assessment, instant amortization calculations, and verified applicant onboarding for personal, business, and mortgage financing.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "REST APIs"],
    status: "Product Preview",
    image: "/images/projects/loans-streets-logo.svg",
    accentColor: "#3B82F6",
    features: [
      "Dynamic EMI calculator with configurable loan amount, tenure, and interest rate sliders",
      "Multi-step eligibility assessment funnel collecting verified employment and financial metrics",
      "Secure OTP verification flow ensuring genuine lead acquisition and phone validation",
      "Clear administrative dashboard handoff for loan matching and executive callbacks"
    ],
    caseStudy: {
      problem:
        "Traditional loan consultation processes involve confusing jargon, delayed estimations, and manual phone inquiries that frustrate prospective borrowers.",
      context:
        "The project required an approachable, transparent consumer interface with clear mathematical projections and immediate visual clarity on EMI obligations.",
      architecture: [
        "Lightweight Next.js frontend with tailored mathematical formula engines for loan calculations",
        "Glassmorphic design system tailored for high trust, clear typography, and mobile responsiveness",
        "Structured validation pipelines for lead forms with immediate user feedback"
      ],
      keyDecisions: [
        {
          title: "Real-Time EMI Formula Optimization",
          detail: "Implemented standard banking reducing-balance amortization formulas with reactive hooks for instant 60fps slider adjustments."
        },
        {
          title: "Editorial Trust-First Layout",
          detail: "Replaced cluttered rate tables with high-contrast, magazine-inspired cards emphasizing key figures and transparent eligibility criteria."
        }
      ],
      tradeoffs:
        "Focused initially on top 3 personal and commercial loan products to streamline user conversion rather than overwhelming users with a 50-item loan matrix.",
      outcome:
        "A refined, high-conversion lending preview that eliminates friction in initial loan discovery and qualification."
    }
  }
];
