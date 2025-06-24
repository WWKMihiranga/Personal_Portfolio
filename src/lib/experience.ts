import { JSX } from "react";

export const EXPERIENCE_TYPES = ['All', 'Full-time', 'Contract', 'Internship'] as const;

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'Full-time' | 'Contract' | 'Internship';
  description: string;
  techStack: string[];
  accomplishments: string[];
  image: string
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
  direction?: 'x' | 'y';
  xDirection?: number;
}

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: 'Frontend Developer',
    company: 'Tech Company',
    location: 'Remote',
    period: '2024 - Present',
    type: 'Full-time',
    description: 'Developed modern web applications using React and TypeScript, focusing on user experience and performance optimization.',
    techStack: ['React', 'TypeScript', 'Node.js'],
    accomplishments: [
      'Improved application performance by 40% through code optimization',
      'Led the migration to TypeScript across 5 major projects',
      'Mentored junior developers in modern React patterns'
    ],
    image: '/projects.jpg',
  },
  {
    role: 'Full Stack Developer',
    company: 'Startup Inc',
    location: 'San Francisco, CA',
    period: '2023 - 2024',
    type: 'Contract',
    description: 'Built scalable web applications from concept to deployment, working with modern technologies and agile methodologies.',
    techStack: ['Python', 'React', 'Three.js'],
    accomplishments: [
      'Designed and implemented RESTful APIs serving 10k+ users',
      'Created interactive 3D visualizations using Three.js',
      'Reduced deployment time by 60% through CI/CD automation'
    ],
    image: '/projects.jpg',
  }
];