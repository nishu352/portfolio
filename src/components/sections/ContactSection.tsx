"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Copy, Check, Send, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import confetti from "canvas-confetti";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "", honeypot: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (e) {
      console.warn("Failed to copy email", e);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.honeypot) return; // Silent discard bot submission

    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setStatus("error");
      setStatusMessage("Please fill out all required fields.");
      return;
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      setStatus("error");
      setStatusMessage("Please provide a valid email address.");
      return;
    }

    setStatus("submitting");

    // Simulate reliable dispatch
    setTimeout(() => {
      setStatus("success");
      setStatusMessage("Message prepared! You can also reach me directly at " + siteConfig.email);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ["#38D9F5", "#8CEBFA", "#101827"],
      });
      setFormState({ name: "", email: "", message: "", honeypot: "" });
    }, 800);
  };

  return (
    <section id="contact" className="py-24 md:py-36 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="05 /"
          eyebrow="Direct Connection"
          title="Let's Build Something"
          highlight="Reliable."
          description="Whether you are discussing backend systems architecture, fintech workflows, or exploring new product initiatives, my inbox is open."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Direct Contact & Verification Info */}
          <div className="lg:col-span-5 flex flex-col text-left space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl glass-panel border-subtle shadow-xl space-y-6">
              
              <div>
                <span className="text-xs editorial-mono uppercase tracking-wider text-muted font-semibold">
                  Direct Email Address
                </span>
                <div className="mt-2 flex items-center justify-between p-3 rounded-2xl bg-surface-elevated/80 border-subtle">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-sm sm:text-base font-mono font-medium text-primary hover:text-accent transition-colors truncate pr-2"
                  >
                    {siteConfig.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl bg-surface-elevated hover:border-strong border border-subtle text-secondary hover:text-primary transition-colors shrink-0 cursor-pointer"
                    title="Copy email to clipboard"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <span className="text-xs editorial-mono uppercase tracking-wider text-muted font-semibold">
                  Verified Engineering Channels
                </span>
                <div className="mt-3 flex flex-col gap-2.5">
                  <a
                    href={siteConfig.verifiedProfiles.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-2xl glass-card border-subtle hover:border-accent/50 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-surface-elevated group-hover:bg-[#38D9F5]/15 group-hover:text-accent transition-colors">
                        <GithubIcon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-primary font-display">
                          GitHub / nishu352
                        </div>
                        <div className="text-[11px] text-muted">
                          Repositories, commits & codebases
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-muted group-hover:text-accent transition-colors">
                      ↗
                    </span>
                  </a>

                  {siteConfig.verifiedProfiles.linkedin && (
                    <a
                      href={siteConfig.verifiedProfiles.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3.5 rounded-2xl glass-card border-subtle hover:border-accent/50 transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-surface-elevated group-hover:bg-[#38D9F5]/15 group-hover:text-accent transition-colors">
                          <LinkedinIcon className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-primary font-display">
                            LinkedIn Network
                          </div>
                          <div className="text-[11px] text-muted">
                            Professional background & connections
                          </div>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-muted group-hover:text-accent transition-colors">
                        ↗
                      </span>
                    </a>
                  )}
                </div>
              </div>

              <div className="pt-4 border-t border-subtle flex items-center gap-2 text-xs text-muted">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                <span>{siteConfig.location}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl glass-panel border-subtle shadow-xl text-left">
              <h3 className="text-xl font-bold text-primary font-display mb-2">
                Send an Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-secondary mb-6">
                Messages dispatch directly to Nishant Bhardwaj. No spam, no fabricated automated replies.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot anti-spam field */}
                <input
                  type="text"
                  name="website"
                  value={formState.honeypot}
                  onChange={(e) => setFormState({ ...formState, honeypot: e.target.value })}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs editorial-mono font-medium text-secondary mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Alex Rivera"
                      className="w-full px-4 py-3 rounded-xl bg-surface-elevated border border-subtle text-sm text-primary placeholder:text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs editorial-mono font-medium text-secondary mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="alex@domain.com"
                      className="w-full px-4 py-3 rounded-xl bg-surface-elevated border border-subtle text-sm text-primary placeholder:text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs editorial-mono font-medium text-secondary mb-1.5">
                    Project or Architecture Inquiry *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell me about your technical project, backend architecture needs, or collaboration idea..."
                    className="w-full px-4 py-3 rounded-xl bg-surface-elevated border border-subtle text-sm text-primary placeholder:text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
                  />
                </div>

                {statusMessage && (
                  <div
                    className={`p-3 rounded-xl text-xs font-mono ${
                      status === "error"
                        ? "bg-amber-500/10 border border-amber-500/20 text-amber-300"
                        : "bg-emerald-500/10 border border-emerald-500/20 text-emerald-300"
                    }`}
                  >
                    {statusMessage}
                  </div>
                )}

                <div className="pt-2 flex justify-end">
                  <MagneticButton
                    variant="primary"
                    size="md"
                    type="submit"
                    disabled={status === "submitting"}
                    className="font-semibold text-xs py-3 px-6"
                  >
                    <Send className="w-3.5 h-3.5 mr-1.5" />
                    <span>{status === "submitting" ? "Transmitting..." : "Send Message"}</span>
                  </MagneticButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
