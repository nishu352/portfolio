"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { experienceData } from "@/lib/experience-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MapPin, CheckCircle2, Info } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="04 /"
          eyebrow="Career Timeline"
          title="Verified Professional"
          highlight="Experience."
          description="Documented engineering history and active responsibilities, strictly referenced from verified records."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Editorial Photo of Office Environment */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="relative rounded-3xl overflow-hidden glass-panel border-subtle shadow-2xl aspect-[3/4]">
              <Image
                src="/images/nishant-office.jpg"
                alt="Nishant Bhardwaj in engineering office setting"
                fill
                sizes="(max-width: 768px) 100vw, 360px"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl glass-panel bg-surface-elevated/90 border-subtle">
                <div className="text-xs font-semibold text-primary font-display">
                  Finolink Office Context
                </div>
                <div className="text-[11px] editorial-mono text-secondary">
                  Sector 6, Noida • Since July 2023
                </div>
              </div>
            </div>

            {/* Verification Note */}
            <div className="p-4 rounded-2xl glass-card border-subtle flex items-start gap-2.5">
              <Info className="w-4 h-4 text-muted mt-0.5 shrink-0" />
              <p className="text-[11px] text-muted leading-normal">
                Employment details strictly cross-referenced against candidate registration records at Finolink Business Consulting Pvt. Ltd.
              </p>
            </div>
          </div>

          {/* Right Column: Timeline Card */}
          <div className="lg:col-span-8 flex flex-col text-left">
            {experienceData.map((exp) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative p-6 sm:p-8 rounded-3xl glass-panel border-subtle shadow-xl"
              >
                {/* Header Meta */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#38D9F5]/15 text-accent border border-accent/25">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {exp.period}
                  </span>

                  <span className="flex items-center gap-1.5 text-xs text-muted font-mono">
                    <MapPin className="w-3.5 h-3.5 text-accent" />
                    {exp.location}
                  </span>
                </div>

                {/* Company & Role */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-primary font-display mb-1">
                  {exp.company}
                </h3>
                <div className="text-sm sm:text-base font-semibold text-accent font-display mb-4">
                  {exp.role}
                </div>

                <p className="text-sm sm:text-base text-secondary leading-relaxed mb-6 font-normal">
                  {exp.summary}
                </p>

                {/* Key Responsibilities */}
                <div className="space-y-3 mb-8">
                  <div className="text-xs editorial-mono uppercase tracking-wider text-muted font-semibold">
                    Core Engineering Contributions
                  </div>
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-secondary">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="pt-6 border-t border-subtle flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono glass-pill border-subtle text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
