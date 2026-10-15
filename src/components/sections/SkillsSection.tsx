"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { skillGroups } from "@/lib/skills-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Server, Database, Layout, Wrench, Sparkles } from "lucide-react";

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Disciplines", icon: Sparkles },
    { id: "backend", label: "Backend & APIs", icon: Server },
    { id: "data-infra", label: "Data & Infrastructure", icon: Database },
    { id: "frontend", label: "Frontend & Interfaces", icon: Layout },
    { id: "tools-delivery", label: "Tools & Delivery", icon: Wrench },
  ];

  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="03 /"
          eyebrow="Technical Landscape"
          title="Architecture, Languages &"
          highlight="Tooling Stack."
          description="Technologies and runtime systems utilized across production environments, async pipelines, and user-facing software."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-medium transition-all duration-300 border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-pointer ${
                  isSelected
                    ? "bg-accent text-[#080D18] font-semibold border-accent shadow-lg shadow-cyan-500/20"
                    : "glass-pill border-subtle text-secondary hover:text-primary hover:border-strong"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Architectural Domain Matrix */}
        <div className="space-y-10">
          {(activeCategory === "all"
            ? skillGroups
            : skillGroups.filter((g) => g.id === activeCategory)
          ).map((group) => (
            <motion.div
              key={group.id}
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="p-6 sm:p-8 rounded-3xl glass-panel border-subtle text-left"
            >
              {/* Domain Header */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-5 border-b border-subtle mb-6">
                <div>
                  <div className="text-[11px] editorial-mono text-accent uppercase tracking-wider mb-1 font-semibold">
                    {group.eyebrow}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-primary font-display">
                    {group.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-secondary max-w-lg leading-relaxed">
                  {group.description}
                </p>
              </div>

              {/* Skills In This Domain */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-4 rounded-2xl glass-card border-subtle flex flex-col justify-between hover:border-strong transition-colors"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-bold text-primary font-display flex items-center gap-2">
                          {skill.name}
                          {skill.primary && (
                            <span className="w-1.5 h-1.5 rounded-full bg-accent" title="Core Focus" />
                          )}
                        </span>
                        {skill.tag && (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono glass-pill border-subtle text-muted">
                            {skill.tag}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-secondary leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
