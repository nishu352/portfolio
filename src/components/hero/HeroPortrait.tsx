"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Server, Database } from "lucide-react";

export function HeroPortrait() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const shouldReduceMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    // Controlled tilt angle limit
    setRotate({
      x: -y * 0.035,
      y: x * 0.035,
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[420px] lg:max-w-[480px] aspect-[4/5] mx-auto perspective-[1200px]"
    >
      {/* Ambient Volumetric Backlight */}
      <div className="absolute -inset-6 bg-gradient-to-tr from-[#38D9F5]/15 via-cyan-500/10 to-transparent rounded-[42px] blur-3xl opacity-60 [data-theme=light]:opacity-25 -z-10 pointer-events-none" />

      {/* Main Dimensional 3D Tilt Wrapper */}
      <motion.div
        animate={
          shouldReduceMotion
            ? { rotateX: 0, rotateY: 0 }
            : { rotateX: rotate.x, rotateY: rotate.y }
        }
        transition={{ type: "spring", stiffness: 260, damping: 25, mass: 0.6 }}
        className="relative w-full h-full rounded-[36px] p-2 glass-panel border-subtle shadow-2xl overflow-hidden group"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Specular Inner Glaze & Reflections */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/30 pointer-events-none z-10 rounded-[34px]" />
        <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-45 transform translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 pointer-events-none z-20" />

        {/* Real Portrait Photographic Focal Layer */}
        <div className="relative w-full h-full rounded-[30px] overflow-hidden bg-surface">
          <Image
            src="/images/nishant-hero.png"
            alt="Nishant Bhardwaj - Backend Engineer & Product Builder"
            fill
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 480px"
            priority
            className="object-cover object-top scale-[1.02] group-hover:scale-[1.05] transition-transform duration-700 ease-out"
          />

          {/* Vignette & Contrast Depth Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
        </div>

        {/* Floating Dimensional Glass Badges */}
        {/* Badge 1: Backend Architecture (Top Right) */}
        <motion.div
          animate={
            shouldReduceMotion
              ? { x: 0, y: 0 }
              : { x: rotate.y * 1.5, y: -rotate.x * 1.5 }
          }
          className="absolute top-5 right-5 z-30 px-3.5 py-2 rounded-2xl glass-panel bg-surface-elevated/90 border-subtle shadow-xl flex items-center gap-2"
          style={{ transform: "translateZ(40px)" }}
        >
          <div className="p-1.5 rounded-lg bg-[#38D9F5]/15 text-accent">
            <Server className="w-3.5 h-3.5" />
          </div>
          <div className="text-left">
            <div className="text-[10px] editorial-mono text-muted uppercase tracking-wider">
              Core Specialty
            </div>
            <div className="text-xs font-semibold text-primary">
              Distributed APIs
            </div>
          </div>
        </motion.div>

        {/* Badge 2: Systems Verification (Bottom Left) */}
        <motion.div
          animate={
            shouldReduceMotion
              ? { x: 0, y: 0 }
              : { x: -rotate.y * 1.3, y: rotate.x * 1.3 }
          }
          className="absolute bottom-5 left-5 z-30 px-3.5 py-2 rounded-2xl glass-panel bg-surface-elevated/90 border-subtle shadow-xl flex items-center gap-2"
          style={{ transform: "translateZ(50px)" }}
        >
          <div className="p-1.5 rounded-lg bg-emerald-500/15 text-emerald-400">
            <Database className="w-3.5 h-3.5" />
          </div>
          <div className="text-left">
            <div className="text-[10px] editorial-mono text-muted uppercase tracking-wider">
              Scale & Queues
            </div>
            <div className="text-xs font-semibold text-primary">
              PostgreSQL • Redis
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
