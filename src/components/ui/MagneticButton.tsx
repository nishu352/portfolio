"use client";

import React, { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "glass" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  download?: boolean | string;
  target?: string;
  rel?: string;
}

export function MagneticButton({
  children,
  variant = "glass",
  size = "md",
  href,
  className,
  download,
  target,
  rel,
  onClick,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const shouldReduceMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.22;
    const y = (clientY - (top + height / 2)) * 0.22;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles = "relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38D9F5] select-none cursor-pointer";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-6 py-3 text-sm gap-2",
    lg: "px-8 py-4 text-base gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-[#38D9F5] hover:bg-[#8CEBFA] text-[#080D18] font-semibold shadow-lg shadow-[#38D9F5]/25 hover:shadow-xl hover:shadow-[#38D9F5]/35 border border-[#38D9F5]",
    glass:
      "glass-panel text-primary border-subtle hover:border-strong bg-surface-elevated/80 hover:bg-surface-elevated shadow-lg",
    outline:
      "border border-subtle hover:border-accent text-primary hover:text-accent bg-transparent",
    ghost:
      "text-secondary hover:text-primary hover:bg-surface-elevated/50",
  };

  const buttonContent = (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <motion.div
        animate={shouldReduceMotion ? { x: 0, y: 0 } : { x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 350, damping: 20, mass: 0.5 }}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      >
        {children}
      </motion.div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        download={download}
        target={target}
        rel={rel || (target === "_blank" ? "noopener noreferrer" : undefined)}
        className="inline-block no-underline"
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button onClick={onClick} {...props} className="bg-transparent border-0 p-0 cursor-pointer">
      {buttonContent}
    </button>
  );
}
