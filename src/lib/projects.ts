// export type Project = {
//   slug: string
//   title: string
//   description: string
//   image: string
//   tech: string[]
//   url: string
// }

// export const projects: Project[] = [
//   {
//     slug: 'nextjs-portfolio',
//     title: 'Next.js + Three.js Portfolio',
//     description: 'A modern, interactive portfolio with 3D visuals and hybrid rendering.',
//     image: '/projects.jpg',
//     tech: ['Next.js', 'Three.js', 'Tailwind CSS'],
//     url: 'https://myportfolio.vercel.app',
//   },
//   {
//     slug: 'blog-platform',
//     title: 'Personal Blog Platform',
//     description: 'Blog with markdown support, dynamic routing and SSR.',
//     image: '/projects.jpg',
//     tech: ['Next.js', 'TypeScript', 'MDX'],
//     url: 'https://blog.me',
//   }
// ]

export type Project = {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  url?: string;
  github?: string;
  demo?: string;
  featured?: boolean;
  date?: string;
  status?: "completed" | "in-progress" | "planning";
};

export const projects: Project[] = [
  {
    id: "1",
    slug: "nextjs-portfolio",
    title: "Interactive Portfolio Website",
    description:
      "A modern, responsive portfolio website built with Next.js, Three.js, and Tailwind CSS. Features smooth animations, 3D elements, and dark mode support.",
    image: "/projects.jpg",
    tech: ["Next.js", "Three.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/WWKMihiranga",
    demo: "https://portfolio-demo.com",
    featured: true,
    date: "2024",
    status: "completed",
  },
  {
    id: "2",
    slug: "blog-platform",
    title: "AI Chat Assistant",
    description:
      "A smart chat assistant built using OpenAI API, Next.js, and Tailwind CSS. Supports natural language understanding, custom personalities, and dark mode.",
    image: "/projects.jpg",
    tech: ["Next.js", "OpenAI API", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/username/ai-chat-assistant",
    demo: "https://ai-chat-demo.com",
    featured: true,
    date: "2024",
    status: "completed",
  },
  {
    id: "3",
    slug: "smart-farming-dashboard",
    title: "Smart Farming Dashboard",
    description:
      "A real-time dashboard for monitoring crop health and weather data. Built with React, Chart.js, and Firebase for live updates and insights.",
    image: "/projects.jpg",
    tech: ["React", "Chart.js", "Firebase", "Tailwind CSS"],
    github: "https://github.com/username/smart-farming-dashboard",
    demo: "https://farming-dashboard.com",
    featured: false,
    date: "2023",
    status: "completed",
  },
];
