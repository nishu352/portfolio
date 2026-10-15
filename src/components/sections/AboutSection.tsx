"use client";

import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckCircle2, Terminal, Code2, Server, Workflow } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="01 /"
          eyebrow="Personal Background"
          title="Engineering with"
          highlight="Intent & Integrity."
          description="A perspective grounded in building dependable backend systems, verified data models, and clean digital software."
        />

        {/* Editorial Layout: Photo Story & Engineering Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Authentic Photography Spreads */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="relative rounded-3xl overflow-hidden glass-panel border-subtle shadow-2xl aspect-[4/5] group">
              <Image
                src="/images/nishant-seated-env.png"
                alt="Nishant Bhardwaj at working desk environment"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 420px"
                className="object-cover object-top scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              
              {/* Photo Caption Badge */}
              <div className="absolute bottom-5 left-5 right-5 p-3 rounded-2xl glass-panel bg-surface-elevated/90 border-subtle">
                <div className="text-xs font-semibold text-primary font-display">
                  Nishant Bhardwaj
                </div>
                <div className="text-[11px] editorial-mono text-secondary">
                  Engineering Workspace • FinTech & Systems
                </div>
              </div>
            </div>

            {/* Supplementary Context Card */}
            <div className="p-5 rounded-2xl glass-card border-subtle">
              <div className="flex items-center gap-2 text-xs font-mono text-accent mb-2 uppercase tracking-wider">
                <Terminal className="w-3.5 h-3.5" />
                <span>Operating Stance</span>
              </div>
              <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                &ldquo;Clean code is not decorative art. It is the tangible contract that allows a system to process thousands of transactions reliably when nobody is watching.&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Principles */}
          <div className="lg:col-span-7 flex flex-col text-left">
            <div className="space-y-6 text-base sm:text-lg text-secondary leading-relaxed font-normal">
              <p>
                My approach to software engineering centers around a simple standard: <strong className="text-primary font-semibold">systems should work predictably, fail transparently, and solve genuine problems.</strong>
              </p>

              <p>
                Over the past several years, my work has concentrated on backend architecture, API engineering, and distributed workflows. At <span className="text-primary font-medium underline decoration-accent underline-offset-4">Finolink Business Consulting</span>, I work on institutional loan origination platforms, automated eligibility calculation engines, and matrix-based lender policy systems.
              </p>

              <p>
                Beyond backend infrastructure, I care deeply about end-to-end product coherence. When an API contract matches client expectations with zero friction, users experience software that feels effortless, instantaneous, and dependable.
              </p>
            </div>

            {/* Core Architecture Disciplines */}
            <div className="mt-10 pt-8 border-t border-subtle">
              <h3 className="text-sm editorial-mono uppercase tracking-wider text-muted mb-6 font-semibold">
                Core Engineering Disciplines
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl glass-panel border-subtle flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-[#38D9F5]/15 text-accent mt-0.5">
                    <Server className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-primary font-display">
                      Schema-First APIs
                    </h4>
                    <p className="text-xs text-secondary mt-1 leading-normal">
                      Deterministic request validation with Fastify and TypeScript, eliminating runtime anomalies.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl glass-panel border-subtle flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-cyan-500/15 text-cyan-400 mt-0.5">
                    <Workflow className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-primary font-display">
                      Queues & Async Ingestion
                    </h4>
                    <p className="text-xs text-secondary mt-1 leading-normal">
                      BullMQ + Redis workers to decouple heavy computation from the primary request thread.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl glass-panel border-subtle flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-[#38D9F5]/10 text-accent mt-0.5">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-primary font-display">
                      Client-Side Optimization
                    </h4>
                    <p className="text-xs text-secondary mt-1 leading-normal">
                      Local WebAssembly and worker processing in tools like OmniTools for private, instant execution.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl glass-panel border-subtle flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-sky-500/15 text-sky-400 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-primary font-display">
                      Relational Data Modeling
                    </h4>
                    <p className="text-xs text-secondary mt-1 leading-normal">
                      PostgreSQL indexing and Prisma relations structured for auditability and query velocity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
