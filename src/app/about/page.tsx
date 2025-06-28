import PageWrapper from "@/components/PageWrapper";
import About from "./components/About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "About Kavindu Mihiranga | Full-Stack Developer (Next.js, Flutter, AI)",

  description:
    "Meet Kavindu Mihiranga, a Computer Science undergraduate from Sri Lanka with expertise in Next.js, Flutter, AI/ML, and UI/UX design. Discover my skills, projects, and professional experience.",

  keywords: [
    "Software Engineer Sri Lanka",
    "Frontend Developer",
    "Flutter Developer",
    "Next.js Developer",
    "AI/ML enthusiast",
    "Computer Science undergraduate",
    "Kavindu Mihiranga",
    "Fintelex",
    "Codez Solutions",
    "University of Westminster",
    "IIT Sri Lanka",
    "React developer",
    "UI/UX Design",
  ],

  openGraph: {
    title: "About Kavindu Mihiranga | Full-Stack Developer & AI Enthusiast",
    description:
      "Computer Science undergrad with hands-on experience at Fintelex and Codez Solutions. Specializing in Next.js, Flutter, and AI-driven applications. Let's connect and build something amazing.",
    url: "https://kavindumihiranga.com/about",
    images: [
      {
        url: "/Me.jpg",
        width: 1200,
        height: 630,
        alt: "Kavindu Mihiranga - Software Engineer",
      },
    ],
  },
  twitter: {
    title: "About Kavindu Mihiranga | Full-Stack Developer (Next.js, Flutter)",
    description:
      "CS undergrad from Sri Lanka with a passion for AI/ML and experience at Fintelex & Codez Solutions. Check out my skills and projects.",
    creator: "@WWKMihiranga",
    images: ["/Me.jpg"],
  },

  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <PageWrapper>
      <section className="p-8">
        <About />
      </section>
    </PageWrapper>
  );
}
