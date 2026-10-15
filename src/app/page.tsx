import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/hero/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-primary text-primary transition-colors duration-300">
      {/* Background Dot Matrix Texture */}
      <div className="fixed inset-0 bg-dot-matrix opacity-25 pointer-events-none -z-20" />
      
      {/* Ambient Lighting Mesh */}
      <div className="fixed inset-0 bg-ambient-mesh opacity-60 pointer-events-none -z-10" />

      {/* Floating Luxury Glass Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content" className="relative z-10 flex flex-col">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
