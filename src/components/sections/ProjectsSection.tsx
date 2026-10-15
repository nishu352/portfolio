"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { projectsData, ProjectData } from "@/lib/projects-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectModal } from "@/components/projects/ProjectModal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { BookOpen, CheckCircle2 } from "lucide-react";

export function ProjectsSection() {
  const [activeModalProject, setActiveModalProject] = useState<ProjectData | null>(null);

  return (
    <section id="work" className="py-24 md:py-36 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="02 /"
          eyebrow="Portfolio & Systems"
          title="Selected Work &"
          highlight="Engineered Platforms."
          description="A curated overview of systems architecture, financial policy engines, and browser-first utility platforms built with verified technologies."
        />

        {/* Project Editorial Showcase Stream */}
        <div className="space-y-20 md:space-y-32">
          {projectsData.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Visual Canvas Column */}
                <div
                  className={`lg:col-span-7 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="relative group rounded-3xl p-3 glass-panel border-subtle shadow-2xl overflow-hidden aspect-[16/10]">
                    {/* Inner image container */}
                    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-surface border border-subtle flex items-center justify-center p-6 sm:p-10">
                      
                      {project.id === "omnitools" ? (
                        <Image
                          src={project.image}
                          alt={`${project.title} - UI Design and Dashboard`}
                          fill
                          sizes="(max-width: 768px) 100vw, 650px"
                          className="object-cover object-top scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                      ) : project.id === "devschool-pro" ? (
                        <div className="relative w-full h-full flex flex-col items-center justify-center bg-surface-elevated/40 p-8 text-center">
                          <Image
                            src={project.image}
                            alt={`${project.title} Logo`}
                            width={180}
                            height={80}
                            style={{ width: "auto", height: "auto" }}
                            className="object-contain mb-4 drop-shadow-xl"
                          />
                          <div className="text-xs editorial-mono text-emerald-400 mt-2">
                            Interactive Code Runner • Monaco Editor Engine
                          </div>
                        </div>
                      ) : (
                        <div className="relative w-full h-full flex flex-col items-center justify-center bg-surface-elevated/40 p-8 text-center">
                          <div className="relative w-48 h-24 mb-4">
                            <Image
                              src={project.image}
                              alt={`${project.title} Brand Logo`}
                              fill
                              className="object-contain"
                            />
                          </div>
                          <div className="text-xs editorial-mono text-muted">
                            {project.category}
                          </div>
                        </div>
                      )}

                      {/* Specular Glaze */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-white/5 pointer-events-none" />

                      {/* Floating Status Pill */}
                      <div className="absolute top-4 left-4 z-20">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-medium glass-pill bg-surface-elevated/90 border-subtle text-primary">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Editorial Details Column */}
                <div
                  className={`lg:col-span-5 flex flex-col text-left ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  {/* Oversized Index Number */}
                  <div className="text-4xl sm:text-5xl font-black font-display text-muted/30 mb-2 select-none">
                    0{idx + 1}
                  </div>

                  {/* Category & Role */}
                  <div className="text-xs font-mono font-medium text-accent uppercase tracking-wider mb-2">
                    {project.role}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-primary font-display mb-3">
                    {project.title}
                  </h3>

                  <p className="text-sm sm:text-base text-secondary leading-relaxed mb-6">
                    {project.overview}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2.5 mb-8">
                    {project.features.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-secondary">
                        <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {project.stack.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono glass-pill border-subtle text-secondary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action: Open Case Study */}
                  <div className="flex items-center gap-3">
                    <MagneticButton
                      variant="primary"
                      size="sm"
                      onClick={() => setActiveModalProject(project)}
                      className="text-xs font-semibold"
                    >
                      <BookOpen className="w-3.5 h-3.5 mr-1.5" />
                      <span>Read Technical Case Study</span>
                    </MagneticButton>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
