"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";
import { HeroPortrait } from "./HeroPortrait";
import { Hero3DCanvas } from "./Hero3DCanvas";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ArrowRight, Download, Terminal } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
    >
      {/* Dynamic 3D Geometric Vector Field */}
      <Hero3DCanvas />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Identity & Storytelling */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col text-left"
          >
            {/* Verification Kicker Tag */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium border-subtle glass-pill text-secondary shadow-sm">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span>Backend Architecture & Platform Systems</span>
              </span>
            </div>

            {/* Oversized Editorial Name & Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-primary font-display leading-[1.04] mb-4">
              Nishant <br />
              <span className="text-editorial-gradient">
                Bhardwaj
              </span>
            </h1>

            {/* Sub-Headline / Role Description */}
            <div className="flex items-center gap-3 text-base sm:text-xl font-medium text-accent mb-6">
              <Terminal className="w-5 h-5 text-accent" />
              <span className="tracking-tight font-display">{siteConfig.role}</span>
            </div>

            {/* Core Brand Message */}
            <p className="text-base sm:text-lg md:text-xl text-secondary leading-relaxed max-w-2xl font-normal mb-8">
              &ldquo;{siteConfig.tagline}&rdquo;
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <MagneticButton
                variant="primary"
                size="lg"
                href="#work"
                className="group font-semibold text-sm"
              >
                <span>Explore Selected Work</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </MagneticButton>

              <MagneticButton
                variant="glass"
                size="lg"
                href={siteConfig.resumePath}
                download="Nishant_Bhardwaj_Resume.pdf"
                className="font-medium text-sm"
              >
                <Download className="w-4 h-4 mr-1 text-accent" />
                <span>Download Resume</span>
              </MagneticButton>
            </div>

            {/* Technical Signature Strip / Metadata */}
            <div className="pt-6 border-t border-subtle flex flex-wrap items-center gap-x-6 gap-y-3 text-xs editorial-mono text-muted">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38D9F5]" />
                Fastify • Node.js
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-300" />
                PostgreSQL • Prisma
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8CEBFA]" />
                Redis • BullMQ
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                Next.js • TypeScript
              </span>
            </div>
          </motion.div>

          {/* Right Column: Layered 3D Dimensional Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center items-center"
          >
            <HeroPortrait />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
