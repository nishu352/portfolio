"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/site-config";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Download, Menu, X, ArrowUpRight } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ["about", "work", "skills", "experience", "contact"];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pt-4 pointer-events-none">
        <motion.nav
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto flex items-center justify-between gap-4 px-4 sm:px-6 py-2.5 rounded-full transition-all duration-300 w-full max-w-5xl ${
            scrolled
              ? "glass-panel shadow-2xl backdrop-blur-2xl"
              : "glass-pill backdrop-blur-xl"
          }`}
          aria-label="Main Navigation"
        >
          {/* Brand Wordmark & Monogram */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-full pr-2"
          >
            <div className="relative flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-tr from-[#38D9F5] to-[#8CEBFA] text-[#080D18] font-bold text-xs shadow-md shadow-[#38D9F5]/25">
              <span>NB</span>
              <span className="absolute inset-0 rounded-full border border-white/25" />
            </div>
            <div className="hidden sm:flex flex-col text-left">
              <span className="text-sm font-semibold tracking-tight text-primary group-hover:text-accent transition-colors font-display">
                Nishant Bhardwaj
              </span>
              <span className="text-[10px] editorial-mono text-muted uppercase tracking-wider">
                Backend & Platform
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 text-xs font-medium">
            {siteConfig.navigation.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                    isActive
                      ? "text-primary font-semibold"
                      : "text-secondary hover:text-primary hover:bg-[var(--glass-bg-hover)]"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-[var(--border-strong)] -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Actions: Resume & Theme Toggle & Mobile Button */}
          <div className="flex items-center gap-2">
            <MagneticButton
              size="sm"
              variant="primary"
              href={siteConfig.resumePath}
              download="Nishant_Bhardwaj_Resume.pdf"
              className="hidden sm:inline-flex text-xs py-2 px-4 shadow-sm"
            >
              <Download className="w-3.5 h-3.5 mr-1" />
              <span>Resume</span>
            </MagneticButton>

            <ThemeToggle />

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-subtle bg-[var(--glass-bg)] hover:bg-[var(--glass-bg-hover)] text-primary cursor-pointer transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-4 top-20 z-40 p-6 rounded-3xl glass-panel shadow-2xl md:hidden flex flex-col gap-4 backdrop-blur-3xl"
          >
            <div className="flex items-center justify-between pb-3 border-b border-subtle">
              <span className="editorial-mono text-xs uppercase tracking-wider text-muted">
                Menu Navigation
              </span>
              <span className="text-xs text-accent font-mono font-medium">Available for projects</span>
            </div>

            <div className="flex flex-col gap-2">
              {siteConfig.navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold text-primary hover:bg-[var(--glass-bg-hover)] transition-colors"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-muted" />
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-subtle flex flex-col gap-3">
              <a
                href={siteConfig.resumePath}
                download="Nishant_Bhardwaj_Resume.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-[#38D9F5] text-[#080D18] font-semibold text-sm shadow-lg shadow-[#38D9F5]/25 hover:bg-[#8CEBFA] transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="text-center text-xs text-muted py-1"
              >
                {siteConfig.email}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
