"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

export function Hero3DCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || shouldReduceMotion) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    // Subtle 3D geometric nodes
    const nodeCount = 28;
    const nodes: Array<{
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      radius: number;
    }> = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 200 + 50,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
      });
    }

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render connected lines
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        a.x += a.vx;
        a.y += a.vy;

        // Bounce at boundaries
        if (a.x < 0 || a.x > width) a.vx *= -1;
        if (a.y < 0 || a.y > height) a.vy *= -1;

        // Mouse attraction
        const dx = mouseX - a.x;
        const dy = mouseY - a.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          a.x += (dx / dist) * 0.2;
          a.y += (dy / dist) * 0.2;
        }

        // Draw connections
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const distBetween = Math.hypot(a.x - b.x, a.y - b.y);
          if (distBetween < 110) {
            const alpha = (1 - distBetween / 110) * 0.14;
            ctx.strokeStyle = `rgba(56, 217, 245, ${alpha})`;
            ctx.lineWidth = 0.75;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }

        // Draw point
        ctx.fillStyle = "rgba(140, 235, 250, 0.45)";
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-40 [data-theme=light]:opacity-25"
      aria-hidden="true"
    />
  );
}
