import Hero from "@/components/Hero";
import About from "@/components/About";
import ContactSection from "@/components/ContactForm";
import ProjectCarousel from "@/components/ProjectCarousal";
import { projects } from "@/lib/projects";
import Experience from "./experience/components/Experience";
// import ThemeProvider from "@/components/ThemeProvider";
import TechStack from "@/components/TechStack";

export default function HomePage() {
  return (
    <>
      {/* <ThemeProvider> */}
      <Hero />
      {/* <About/> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <section className="p-8">
          <About />
          <TechStack />
          <ProjectCarousel projects={projects} />
          <Experience />
          <ContactSection />
        </section>
      </div>
      {/* </ThemeProvider> */}
    </>
  );
}
