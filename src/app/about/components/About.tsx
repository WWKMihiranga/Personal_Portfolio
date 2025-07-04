"use client";

import PageWrapper from "@/components/PageWrapper";
import HeroSection from "./HeroSection";
import SkillsSection from "./SkillsSection";
import TechStack from "./TechStack";
import TimeLine from "./TimeLine";
import Certification from "./Certification";
import ContactSection from "./ContactSection";
import ThreeBackground from "@/components/ThreeBackground";

export default function About() {
  return (
    <PageWrapper>
      <section className="relative overflow-hidden">
        {/* Main content container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <ThreeBackground />
          <HeroSection />
          <SkillsSection />
          <TechStack />
          <TimeLine />
          <Certification />
          <ContactSection />
        </div>
      </section>
    </PageWrapper>
  );
}
