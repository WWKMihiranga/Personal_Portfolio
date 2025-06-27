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
    image: "/p1.png",
    tech: ["Next.js", "Three.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/WWKMihiranga/Personal_Portfolio",
    demo: "https://portfolio-demo.com",
    featured: true,
    date: "2024",
    status: "completed",
  },
  {
    id: "2",
    slug: "ai-resume-analyzer",
    title: "AI-Powered Resume Analyzer",
    description:
      "An intelligent resume analyzer built with Python, Streamlit, and Google Gemini API. It extracts and analyzes resume content, offering skill recommendations, job-matching insights, and improvement tips.",
    image: "/p3.png",
    tech: ["Python", "Streamlit", "Google Gemini API"],
    github: "https://github.com/WWKMihiranga/Resume_Analyzer",
    demo: "",
    featured: false,
    date: "2024",
    status: "completed",
  },
  {
    id: "3",
    slug: "movie-recommender",
    title: "Movie Recommendation System",
    description:
      "A personalized movie recommendation system using Python, Streamlit, and TMDB API. Suggests top 10 similar movies with posters based on user preferences.",
    image: "/p2.png",
    tech: ["Python", "Streamlit", "TMDB API"],
    github: "https://github.com/WWKMihiranga/Movie_Recommendation_System",
    demo: "",
    featured: false,
    date: "2024",
    status: "completed",
  },
  {
    id: "4",
    slug: "orderly-eats",
    title: "Orderly Eats 🍽️",
    description:
      "A modern restaurant ordering system built with Next.js, MySQL, and Prisma. Includes admin dashboard, menu control, real-time order tracking, and secure authentication.",
    image: "/p5.png",
    tech: ["Next.js", "MySQL", "Prisma"],
    github: "https://github.com/WWKMihiranga/Orderly-Eats",
    demo: "",
    featured: true,
    date: "2024",
    status: "completed",
  },
  {
    id: "5",
    slug: "online-banking-system",
    title: "Online Banking System (Java)",
    description:
      "A GUI-based banking system with secure login, real-time transactions, role-based access (Admin & Customer), built using Java, JDBC, and MySQL.",
    image: "/p4.png",
    tech: ["Java", "JDBC", "MySQL"],
    github: "https://github.com/WWKMihiranga/Online_Banking_System",
    demo: "",
    featured: true,
    date: "2023",
    status: "completed",
  },
  {
    id: "6",
    slug: "shopping-management",
    title: "Shopping Management System",
    description:
      "A desktop-based inventory and discount management system built with Java and Swing. Helps shopkeepers track products and customers shop efficiently.",
    image: "/p6.png",
    tech: ["Java", "Swing"],
    github:
      "https://github.com/WWKMihiranga/Shopping_Management_System_with_GUI",
    demo: "",
    featured: true,
    date: "2023",
    status: "completed",
  },
  {
    id: "7",
    slug: "theatre-ticket-booking",
    title: "Theatre Ticket Booking System",
    description:
      "A Java-based ticket reservation app with a GUI for booking, real-time seat availability, and custom seat sorting algorithms for better user experience.",
    image: "/p7.png",
    tech: ["Java", "Swing", "File Handling"],
    github: "https://github.com/WWKMihiranga/Theatre_Ticket_Reservation_System",
    demo: "",
    featured: false,
    date: "2023",
    status: "completed",
  },
  {
    id: "8",
    slug: "university-credits-system",
    title: "University Credits Calculation System",
    description:
      "A Python-based system for tracking university student credits, determining pass/fail status, and recording academic outcomes using dictionaries and logic flows.",
    image: "/p9.png",
    tech: ["Python"],
    github:
      "https://github.com/WWKMihiranga/University_Credits_Calculation_System",
    demo: "",
    featured: false,
    date: "2023",
    status: "completed",
  },
  {
    id: "9",
    slug: "music-themed-site",
    title: "Responsive Music-Themed Website",
    description:
      "A collaborative HTML, CSS, and JS project with dynamic feedback, purchase page, and intuitive UI. Led UI/UX and functional integration.",
    image: "/p8.png",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/WWKMihiranga/Musical_Website",
    demo: "",
    featured: false,
    date: "2022",
    status: "completed",
  },
];
