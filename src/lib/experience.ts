import { JSX } from "react";

export const EXPERIENCE_TYPES = ["All", "Full-time", "Contract"] as const;

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  type: "Full-time" | "Contract" | "Internship";
  description: string;
  techStack: string[];
  accomplishments: string[];
  image: string;
}

export interface ExperienceCardProps {
  item: ExperienceItem;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
  techIcons: Record<string, JSX.Element>;
}

export interface ExperienceSummaryCardProps {
  value: string | number;
  title: string;
  description: string;
  color: string;
  darkColor: string;
  delay: number;
  direction?: "x" | "y";
  xDirection?: number;
}

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: "Software Engineer",
    company: "Fintelex Pvt Ltd",
    location: "Remote",
    period: "June 2024 - June 2025",
    type: "Full-time",
    description:
      "Led the development of a cross-platform mobile application and contributed to frontend systems using Flutter and React. Collaborated closely with designers and participated in agile product cycles.",
    techStack: [
      "Flutter",
      "React",
      "Figma",
      "Adobe Photoshop",
      "Adobe Illustrator",
    ],
    accomplishments: [
      "Spearheaded the design and development of a mobile app from concept to deployment under senior supervision",
      "Built high-performance Flutter components with responsive UI and smooth animations",
      "Implemented reusable React components to ensure frontend consistency and reduce development time",
      "Collaborated with designers in Figma to refine user flows and improve accessibility",
      "Maintained clean, testable code and participated in code reviews and agile sprint planning",
    ],
    image: "/fintelex.jpg",
  },
  {
    role: "Frontend Developer",
    company: "Codez Solutions",
    location: "Aluthwala, Sri Lanka",
    period: "2023 - 2024",
    type: "Contract",
    description:
      "Worked on web and mobile applications for clients in diverse industries. Focused on responsive design, component-based development, and cross-platform mobile solutions.",
    techStack: ["Next.js", "Tailwind CSS", "Flutter", "MongoDB", "Firebase"],
    accomplishments: [
      "Developed responsive marketing and tourism websites using Next.js and Tailwind CSS",
      "Built and styled landing pages and corporate sites optimized for SEO and speed",
      "Contributed to cross-platform Flutter applications with pixel-perfect UI and Firebase integration",
      "Collaborated with designers and clients to translate UI/UX prototypes into functional code",
      "Helped maintain and scale projects using GitHub Actions and cloud platforms like DigitalOcean",
    ],
    image: "/codez.jpg",
  },
];
