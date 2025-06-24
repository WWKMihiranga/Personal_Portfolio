"use client";

import React, { JSX } from "react";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiExternalLink,
  FiArrowRight,
  FiCalendar,
  FiStar,
} from "react-icons/fi";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiThreedotjs,
  SiReact,
  SiNodedotjs,
  SiPython,
} from "react-icons/si";
import Link from "next/link";

// Sample project type - replace with your actual Project type
type Project = {
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

type Props = {
  project: Project;
};

// Enhanced tech icons with consistent colors
const techIcons: Record<string, JSX.Element> = {
  TypeScript: (
    <SiTypescript className="w-4 h-4 text-[#6693B2] dark:text-[#00ffff]" />
  ),
  "Next.js": (
    <SiNextdotjs className="w-4 h-4 text-[#6693B2] dark:text-[#00ffff]" />
  ),
  "Tailwind CSS": (
    <SiTailwindcss className="w-4 h-4 text-[#6693B2] dark:text-[#00ffff]" />
  ),
  "Three.js": (
    <SiThreedotjs className="w-4 h-4 text-[#6693B2] dark:text-[#00ffff]" />
  ),
  React: <SiReact className="w-4 h-4 text-[#6693B2] dark:text-[#00ffff]" />,
  "Node.js": (
    <SiNodedotjs className="w-4 h-4 text-[#6693B2] dark:text-[#00ffff]" />
  ),
  Python: <SiPython className="w-4 h-4 text-[#6693B2] dark:text-[#00ffff]" />,
};

// Sample project data for demonstration
const sampleProject: Project = {
  id: "1",
  slug: "portfolio-website",
  title: "Interactive Portfolio Website",
  description:
    "A modern, responsive portfolio website built with Next.js, Three.js, and Tailwind CSS. Features smooth animations, 3D elements, and dark mode support.",
  image:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  tech: ["Next.js", "Three.js", "TypeScript", "Tailwind CSS"],
  github: "https://github.com/username/portfolio",
  demo: "https://portfolio-demo.com",
  featured: true,
  date: "2024",
  status: "completed",
};

export default function ProjectCard({ project = sampleProject }: Props) {
  const handleLinkClick = (e: React.MouseEvent, url: string) => {
    e.stopPropagation();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleCardClick = () => {
    // Replace with your actual navigation logic
    console.log(`Navigate to /projects/${project.slug}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      whileHover={{
        y: -12,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className="group h-full flex flex-col cursor-pointer"
    >
      <div className="relative bg-white dark:bg-black rounded-3xl dark:rounded-none overflow-hidden shadow-lg dark:shadow-red-800 hover:shadow-2xl dark:hover:shadow-white transition-all duration-300 border border-[#A9C8DA] dark:border-red-700 hover:border-[#6693B2] dark:hover:border-white h-full flex flex-col animate-none dark:animate-pulse">
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 left-4 z-20">
            {/*Apply this to lets talk button */}
            <div className="flex items-center px-3 py-1.5 bg-[#E57986] dark:bg-red-700 rounded-full dark:rounded-none text-white dark:text-white text-xs font-bold shadow-lg dark:shadow-red-500 animate-none dark:animate-pulse">
              <FiStar className="w-3 h-3 mr-1" />
              Featured
            </div>
          </div>
        )}

        {/* Status Badge */}
        {project.status && (
          <div className="absolute top-4 right-4 z-20">
            <div
              className={`px-3 py-1.5 rounded-full dark:rounded-none text-xs font-bold shadow-lg dark:shadow-white dark:animate-shake ${
                project.status === "completed"
                  ? "bg-[#6693B2] dark:bg-[#00ff00] text-white dark:text-black"
                  : project.status === "in-progress"
                  ? "bg-[#FFBB94] dark:bg-yellow-500 text-gray-800 dark:text-black"
                  : "bg-[#F1E8DF] dark:bg-red-900 text-[#A45F7B] dark:text-white"
              }`}
            >
              {project.status.replace("-", " ").toUpperCase()}
            </div>
          </div>
        )}

        {/* Project Image with Enhanced Overlay */}
        <div
          className="relative h-45 sm:h-48 md:h-50 w-full overflow-hidden dark:animate-pulse"
          onClick={handleCardClick}
        >
          <Link
            href={`/projects/${project.slug}`}
            className="block relative z-10"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 sm:group-hover:scale-110 dark:grayscale"
              loading="lazy"
            />

            {/* Enhanced gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300 dark:bg-gradient-to-t dark:from-red-900/80 dark:via-black dark:to-transparent" />

            {/* Tech Stack Pills */}
            <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-2 sm:left-3 md:left-4 right-2 sm:right-3 md:right-4">
              <div className="flex flex-wrap gap-2">
                {project.tech.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="flex items-center gap-1.5 bg-white/95 dark:bg-black/90 backdrop-blur-sm px-3 py-1.5 rounded-full dark:rounded-none text-xs font-bold text-gray-800 dark:text-[#ff0000] shadow-lg border border-white/20 dark:border-red-800"
                  >
                    {techIcons[tech] && <span>{techIcons[tech]}</span>}
                    {tech}
                  </span>
                ))}
                {project.tech.length > 4 && (
                  <span className="flex items-center bg-white/95 dark:bg-black/90 backdrop-blur-sm px-3 py-1.5 rounded-full dark:rounded-none text-xs font-bold text-gray-600 dark:text-white shadow-lg border border-white/20 dark:border-[#ff00ff]">
                    +{project.tech.length - 4} more
                  </span>
                )}
              </div>
            </div>

            {/* Decorative corner element */}
            <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
              <div className="w-full h-full bg-[#6693B2] dark:bg-[#ff0000] rounded-full dark:rounded-none transform translate-x-10 -translate-y-10 dark:animate-ping"></div>
            </div>
          </Link>
        </div>

        {/* Project Content */}
        <div
          className="flex-1 p-4 sm:p-6 md:p-8 flex flex-col"
          onClick={handleCardClick}
        >
          <div className="flex-1">
            {/* Project metadata */}
            {project.date && (
              <div className="flex items-center text-sm text-[#A45F7B] dark:text-[#ff00ff] mb-3 font-semibold dark:animate-pulse">
                <FiCalendar className="w-4 h-4 mr-2" />
                {project.date}
              </div>
            )}

            <Link
              href={`/projects/${project.slug}`}
              className="block relative z-10"
            >
              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4 group-hover:text-[#6693B2] dark:group-hover:text-[#00ff00] transition-colors duration-300 dark:animate-shake">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-600 dark:text-[#CFC6BD] dark:font-semibold leading-relaxed line-clamp-3 mb-4 sm:mb-6 border-0 dark:border-l-4 dark:border-[#ff0000] dark:pl-2">
                {project.description}
              </p>
            </Link>
          </div>

          {/* Action Footer */}
          <div className="flex items-center justify-between pt-6 border-t border-[#A9C8DA] dark:border-[#6C3B3F]">
            {/* Action Buttons */}
            <div className="flex gap-3">
              {project.github && (
                <button
                  onClick={(e) => handleLinkClick(e, project.github!)}
                  className="flex items-center justify-center w-10 h-10 bg-[#F1E8DF] dark:bg-black text-[#6693B2] dark:text-white rounded-xl dark:rounded-none hover:bg-[#A9C8DA] dark:hover:bg-[#ff0000] hover:text-white dark:hover:text-black transition-all duration-200 shadow-sm hover:shadow-md dark:shadow-red-600 dark:hover:shadow-white"
                  aria-label="View source code"
                >
                  <FiGithub className="w-5 h-5" />
                </button>
              )}

              {project.demo && (
                <button
                  onClick={(e) => handleLinkClick(e, project.demo!)}
                  className="flex items-center justify-center w-10 h-10 bg-[#F1E8DF] dark:bg-black text-[#6693B2] dark:text-white rounded-xl dark:rounded-none hover:bg-[#A9C8DA] dark:hover:bg-[#ff0000] hover:text-white dark:hover:text-black transition-all duration-200 shadow-sm hover:shadow-md dark:shadow-red-600 dark:hover:shadow-white"
                  aria-label="View live demo"
                >
                  <FiExternalLink className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* View Project Link */}
            <Link
              href={`/projects/${project.slug}`}
              className="block relative z-10"
            >
              <div className="flex items-center text-[#6693B2] dark:text-[#00ffff] font-semibold text-sm group-hover:text-[#A45F7B] dark:group-hover:text-[#ff0000] transition-colors duration-300 dark:animate-bounce">
                <span>View Details</span>
                <FiArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 dark:animate-spin-slow" />
              </div>
            </Link>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#6693B2] dark:bg-[#00ff00] rounded-full dark:rounded-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 dark:animate-pulse"></div>

        {/* Hover glow effect */}
        <div className="absolute inset-0 rounded-3xl dark:rounded-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute inset-0 rounded-3xl dark:rounded-none bg-gradient-to-r from-[#6693B2]/5 via-transparent to-[#A45F7B]/5 dark:from-[#ff0000]/10 dark:to-[#ffffff]/10 animate-none dark:animate-shake"></div>
        </div>
      </div>
    </motion.div>
  );
}
