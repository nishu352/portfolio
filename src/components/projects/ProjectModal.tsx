"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectData } from "@/lib/projects-data";
import { X, CheckCircle, Layers, GitBranch } from "lucide-react";

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Frosted Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 modal-backdrop backdrop-blur-xl"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl glass-panel bg-surface border-subtle p-6 sm:p-10 shadow-2xl z-10 text-left text-primary"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close Case Study"
            className="absolute top-6 right-6 p-2 rounded-full border-subtle bg-surface-elevated hover:border-strong text-secondary hover:text-primary transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="mb-8 pr-12">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="editorial-mono text-xs font-semibold uppercase tracking-wider text-accent">
                Technical Case Study
              </span>
              <span className="text-muted">•</span>
              <span className="text-xs text-muted font-mono">
                {project.category}
              </span>
              <span className="text-muted">•</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono glass-pill border-subtle text-secondary">
                {project.status}
              </span>
            </div>

            <h2 id="modal-title" className="text-2xl sm:text-4xl font-extrabold text-primary font-display">
              {project.title}
            </h2>
            <p className="text-base sm:text-lg text-secondary mt-2 font-medium">
              {project.subtitle}
            </p>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 mb-8 pb-6 border-b border-subtle">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-xs font-mono font-medium glass-pill border-subtle text-secondary"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Case Study Content Grid */}
          <div className="space-y-8 text-sm sm:text-base text-secondary leading-relaxed">
            
            {/* 1. Problem & Context */}
            <div>
              <h3 className="text-base sm:text-lg font-bold text-primary mb-2 font-display flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                Problem & Constraints
              </h3>
              <p className="mb-3">{project.caseStudy.problem}</p>
              <div className="p-4 rounded-2xl glass-card border-subtle text-xs sm:text-sm text-secondary">
                <strong className="text-primary">Context:</strong> {project.caseStudy.context}
              </div>
            </div>

            {/* 2. System Architecture */}
            <div>
              <h3 className="text-base sm:text-lg font-bold text-primary mb-3 font-display flex items-center gap-2">
                <Layers className="w-4 h-4 text-accent" />
                Technical Approach & Architecture
              </h3>
              <ul className="space-y-2">
                {project.caseStudy.architecture.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Important Implementation Decisions */}
            <div>
              <h3 className="text-base sm:text-lg font-bold text-primary mb-3 font-display flex items-center gap-2">
                <GitBranch className="w-4 h-4 text-amber-400" />
                Key Engineering Decisions
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.caseStudy.keyDecisions.map((decision, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl glass-card border-subtle"
                  >
                    <div className="text-xs font-mono font-semibold text-primary mb-1">
                      {decision.title}
                    </div>
                    <div className="text-xs text-secondary leading-normal">
                      {decision.detail}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Trade-offs & Outcome */}
            <div className="pt-4 border-t border-subtle grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xs uppercase editorial-mono font-semibold text-muted mb-1">
                  Architectural Trade-Off
                </h4>
                <p className="text-xs text-secondary">
                  {project.caseStudy.tradeoffs}
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase editorial-mono font-semibold text-emerald-400 mb-1">
                  Deliverable & Outcome
                </h4>
                <p className="text-xs text-secondary">
                  {project.caseStudy.outcome}
                </p>
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="mt-8 pt-6 border-t border-subtle flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full text-xs font-semibold bg-surface-elevated border border-subtle text-primary hover:border-strong transition-colors cursor-pointer shadow-sm"
            >
              Close Case Study
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
