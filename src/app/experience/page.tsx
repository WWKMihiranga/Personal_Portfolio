import Experience from "./components/Experience";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work Experience | Kavindu Mihiranga (Software Engineer)",

  description:
    "Explore the professional experience of Kavindu Mihiranga, including roles as a Software Engineer at Fintelex and Frontend Developer at Codez Solutions. Proficient in Flutter, React, Next.js, and more.",

  keywords: [
    "Work Experience",
    "Software Engineer",
    "Frontend Developer",
    "Kavindu Mihiranga",
    "Fintelex Pvt Ltd",
    "Codez Solutions",
    "Flutter Developer Sri Lanka",
    "Next.js Developer",
    "React Developer",
    "Professional Journey",
    "Tech Portfolio",
    "Mobile App Development",
    "Web Development Experience",
  ],

  openGraph: {
    title: "Professional Experience of Kavindu Mihiranga",
    description:
      "Discover my journey as a Software Engineer at Fintelex and Frontend Developer at Codez Solutions, working with technologies like Flutter, React, and Next.js.",
    url: "https://kavindumihiranga.com/experience",
    images: [
      {
        url: "/Me.jpg",
        width: 1200,
        height: 630,
        alt: "Work Experience of Kavindu Mihiranga",
      },
    ],
  },
  twitter: {
    title: "My Work Experience - Kavindu Mihiranga",
    description:
      "Diving into my roles as a Software Engineer and Frontend Developer, building mobile and web apps with Flutter, React, and Next.js.",
    creator: "@WWKMihiranga",
    images: ["/Me.jpg"],
  },

  alternates: {
    canonical: "/experience",
  },
};

export default function ExperiencePage() {
  return (
    <section className="p-8">
      <Experience />
    </section>
  );
}
