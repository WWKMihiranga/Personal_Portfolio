import Hero from "@/components/Hero";
import About from "@/components/About";
import ContactSection from "@/components/ContactForm";
import ProjectCarousel from "@/components/ProjectCarousal";
import { projects } from "@/lib/projects";
import Experience from "./experience/components/Experience";
// import ThemeProvider from "@/components/ThemeProvider";
import TechStack from "@/components/TechStack";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Kavindu Mihiranga | Full-Stack Developer | Next.js, Python & AI Portfolio",

  description:
    "Welcome to the portfolio of Kavindu Mihiranga, a Full-Stack Developer from Sri Lanka specializing in Next.js, Python (AI/ML), and Flutter. Explore my projects, experience, and creative work.",

  keywords: [
    "Kavindu Mihiranga",
    "Full-Stack Developer",
    "Software Engineer Sri Lanka",
    "Next.js Developer",
    "Python AI Developer",
    "Flutter Developer",
    "Portfolio",
    "Web Developer Galle",
    "Three.js",
    "React Developer",
    "Freelance Developer Sri Lanka",
    "AI projects",
    "Mobile App Development",
  ],

  openGraph: {
    title: "Kavindu Mihiranga | Full-Stack Developer & AI Enthusiast",
    description:
      "Building intelligent digital experiences with Next.js, Python, and Flutter. Explore my portfolio of projects, from AI-powered tools to modern web applications.",
    url: "https://kavindumihiranga.com",
    images: [
      {
        url: "/Me.jpg",
        width: 1200,
        height: 630,
        alt: "The portfolio of Kavindu Mihiranga, Full-Stack Developer",
      },
    ],
  },
  twitter: {
    title: "Kavindu Mihiranga - Full-Stack Developer (Next.js, Python/AI)",
    description:
      "Welcome to my portfolio. I build modern, intelligent web and mobile applications. Check out my projects and experience.",
    creator: "@WWKMihiranga",
    images: ["/Me.jpg"],
  },

  alternates: {
    canonical: "/",
  },
};

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
