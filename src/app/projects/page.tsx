import PageWrapper from "@/components/PageWrapper";
import Projects from "./components/Projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kavindu Mihiranga's Projects | Next.js, Python/AI, & Java",

  description:
    "Explore a collection of my projects, including an AI Resume Analyzer (Python, Gemini API), a restaurant ordering system (Next.js, Prisma), and Java desktop applications. See my skills in action.",

  keywords: [
    "Project Portfolio",
    "Next.js Projects",
    "Python AI Projects",
    "Java Projects",
    "Full-Stack Developer",
    "Kavindu Mihiranga",
    "AI Resume Analyzer",
    "Orderly Eats",
    "Streamlit",
    "Gemini API",
    "Prisma",
    "MySQL",
    "Three.js portfolio",
    "Software Development Projects",
  ],

  openGraph: {
    title: "Project Showcase | Kavindu Mihiranga",
    description:
      "From an AI-powered resume analyzer to a full-stack restaurant system with Next.js, explore a diverse range of my software development projects.",
    url: "https://kavindumihiranga.com/projects",
    images: [
      {
        url: "/Me.jpg",
        width: 1200,
        height: 630,
        alt: "A showcase of Kavindu Mihiranga's projects",
      },
    ],
  },
  twitter: {
    title: "My Projects - Kavindu Mihiranga (Next.js, Python/AI, Java)",
    description:
      "Check out my portfolio of projects, including an AI Resume Analyzer, a Next.js restaurant system, Java banking apps, and more.",
    creator: "@WWKMihiranga",
    images: ["/Me.jpg"],
  },

  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <PageWrapper>
      <section className="p-8 max-w-7xl mx-auto">
        <Projects />
      </section>
    </PageWrapper>
  );
}
