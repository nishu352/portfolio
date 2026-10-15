"use client";

import { siteConfig } from "@/lib/site-config";
import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export function Footer() {
  const currentYear = 2026;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-subtle py-12 md:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between">
          
          {/* Brand & Positioning */}
          <div className="md:col-span-5 text-left">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#38D9F5] to-[#8CEBFA] text-[#080D18] font-bold text-xs flex items-center justify-center">
                NB
              </div>
              <span className="text-base font-bold text-primary font-display">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-xs text-secondary max-w-sm">
              {siteConfig.role} • Architecting resilient backend systems and dependable digital products.
            </p>
          </div>

          {/* Quick Internal Navigation */}
          <div className="md:col-span-4 flex flex-wrap gap-x-5 gap-y-2 text-xs font-mono text-secondary">
            {siteConfig.navigation.map((nav) => (
              <a
                key={nav.href}
                href={nav.href}
                className="hover:text-accent transition-colors"
              >
                {nav.label}
              </a>
            ))}
          </div>

          {/* Socials & Back to Top */}
          <div className="md:col-span-3 flex items-center justify-start md:justify-end gap-3">
            <a
              href={siteConfig.verifiedProfiles.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-full glass-card border-subtle text-secondary hover:text-primary transition-colors cursor-pointer"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            {siteConfig.verifiedProfiles.linkedin && (
              <a
                href={siteConfig.verifiedProfiles.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-full glass-card border-subtle text-secondary hover:text-primary transition-colors cursor-pointer"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            )}

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="flex items-center gap-1.5 px-3 py-2 rounded-full glass-pill border-subtle text-xs font-mono text-secondary hover:text-accent hover:border-accent transition-all cursor-pointer"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Dynamic Legal & Copyright Line */}
        <div className="mt-10 pt-6 border-t border-subtle flex flex-col sm:flex-row items-center justify-between text-[11px] editorial-mono text-muted gap-2">
          <span>
            © {currentYear} {siteConfig.name}. All verified rights reserved.
          </span>
          <span>
            Designed with luxury editorial typography & maximum glassmorphism.
          </span>
        </div>
      </div>
    </footer>
  );
}
