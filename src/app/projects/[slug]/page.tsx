"use client";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiExternalLink,
  FiGithub,
  FiArrowLeft,
  FiCalendar,
  FiCode,
  FiEye,
} from "react-icons/fi";
import { use } from "react";
import ThreeBackground from "@/components/ThreeBackground";
import { FaArrowRight } from "react-icons/fa";

// Constants
const COLORS = {
  light: {
    primary: "#6693B2",
    secondary: "#A45F7B",
    background: "#F1E8DF",
    border: "#A9C8DA",
    text: "#312E29",
    lightText: "#CFC6BD",
    darkText: "#312E29",
  },
  dark: {
    primary: "#A99B8E",
    secondary: "#CFC6BD",
    background: "#312E29",
    border: "#6C3B3F",
    text: "#EEEAE1",
    lightText: "#CFC6BD",
    darkText: "#312E29",
  },
};

const ANIMATION = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6 },
  },
  slideUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

interface ActionButtonProps {
  href?: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  colorClass: string;
  disabled?: boolean;
}

type Params = {
  slug: string;
};

type PageProps = {
  params: Promise<Params>;
};

// Reusable Components
const DecorativeBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-20 left-8 w-24 h-24 border border-[#A9C8DA] dark:border-[#ff0000] rounded-full dark:rounded-none opacity-10 dark:animate-pulse"></div>
    <div className="absolute bottom-32 right-12 w-32 h-8 bg-[#FFBB94] dark:bg-[#00ff00] opacity-5 rounded-full dark:rounded-none rotate-12 dark:animate-bounce"></div>
    <div className="absolute top-1/3 right-16 w-4 h-4 bg-[#E57986] dark:bg-[#ffff00] rounded-full dark:rounded-none opacity-20 dark:animate-spin"></div>
    <div className="absolute bottom-1/4 left-1/4 w-16 h-16 border border-[#6693B2] dark:border-[#00ffff] rounded-full dark:rounded-none opacity-8 dark:animate-shake"></div>
  </div>
);

const BackButton = () => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    className="mb-8"
  >
    <Link href="/projects" aria-label="Back to projects">
      <motion.div
        whileHover={{ x: -3, transition: { duration: 0.2 } }}
        className="group inline-flex items-center text-gray-700 dark:text-[#00ff00] hover:text-[#A45F7B] dark:hover:text-[#ff0000] transition-colors duration-300 cursor-pointer"
      >
        <FiArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
        <span className="font-medium">Back to Projects</span>
      </motion.div>
    </Link>
  </motion.div>
);

const TechStackItem = ({ tech, index }: { tech: string; index: number }) => (
  <motion.div
    key={tech}
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay: index * 0.1, duration: 0.4 }}
    viewport={{ once: true }}
    whileHover={{
      scale: 1.05,
      y: -2,
      transition: { duration: 0.2 },
    }}
    className="group"
  >
    <div className="bg-white dark:bg-[#000000] border border-[#A9C8DA] dark:border-[#ff00ff] rounded-2xl dark:rounded-none px-4 py-3 text-center hover:border-[#A45F7B] dark:hover:border-[#00ffff] transition-all duration-300 shadow-sm hover:shadow-md dark:animate-pulse">
      <span className="text-sm font-semibold text-gray-700 dark:text-[#ffffff] group-hover:text-[#A45F7B] dark:group-hover:text-[#00ff00] transition-colors duration-300">
        {tech}
      </span>
    </div>
  </motion.div>
);

const ActionButton = ({
  href,
  icon: Icon,
  label,
  colorClass,
  disabled = false,
}: ActionButtonProps) => (
  <a
    href={disabled ? undefined : href}
    target={disabled ? undefined : "_blank"}
    rel={disabled ? undefined : "noopener noreferrer"}
    className={`block ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    aria-label={label}
    aria-disabled={disabled}
  >
    <motion.div
      whileHover={
        !disabled
          ? {
              y: -3,
              scale: 1.02,
              transition: { duration: 0.2, ease: "easeOut" },
            }
          : {}
      }
      whileTap={!disabled ? { scale: 0.98 } : {}}
      className={`group w-full ${colorClass} text-white dark:text-[#000000] px-6 py-4 rounded-2xl dark:rounded-none font-semibold shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
        disabled ? "pointer-events-none" : ""
      }`}
    >
      <div className="flex items-center justify-center">
        <Icon className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
        {label}
        {!disabled && (
          <FiExternalLink className="w-4 h-4 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
        )}
      </div>
    </motion.div>
  </a>
);

export default function ProjectDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) return notFound();

  return (
    <div className="relative min-h-screen bg-white dark:bg-[#000000]">
      <ThreeBackground />
      <DecorativeBackground />

      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-5xl mx-auto">
          <BackButton />

          {/* Project Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-12 text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 rounded-full dark:rounded-none bg-[#F1E8DF] dark:bg-black border border-[#A9C8DA] dark:border-[#ff0000] dark:animate-shake mb-6"
            >
              <div className="w-2 h-2 bg-[#6693B2] dark:bg-[#00ff00] rounded-full dark:rounded-none dark:animate-ping mr-2"></div>
              <span className="text-sm font-medium text-[#A45F7B] dark:text-[#ff00ff]">
                Featured Project
              </span>
            </motion.div>

            {/* Project Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-[#ffff00] mb-6 leading-tight"
            >
              {project.title}
            </motion.h1>

            {/* Project Meta Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-wrap gap-6 mb-8 justify-center"
            >
              {project.date && (
                <div className="flex items-center text-gray-600 dark:text-[#ffffff]">
                  <FiCalendar className="w-4 h-4 mr-2 text-[#6693B2] dark:text-[#00ffff]" />
                  <span className="text-sm font-medium">{project.date}</span>
                </div>
              )}
              <div className="flex items-center text-gray-600 dark:text-[#ffffff]">
                <FiCode className="w-4 h-4 mr-2 text-[#6693B2] dark:text-[#00ffff]" />
                <span className="text-sm font-medium">
                  {project.tech.length} Technologies
                </span>
              </div>
              {project.status && (
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 dark:bg-[#ff0000] rounded-full dark:rounded-none mr-2"></div>
                  <span className="text-sm font-medium text-gray-600 dark:text-[#ffffff]">
                    {project.status}
                  </span>
                </div>
              )}
            </motion.div>

            {/* Project Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-600 dark:text-[#ffffff] leading-relaxed max-w-3xl mx-auto"
            >
              {project.description}
            </motion.p>
          </motion.div>

          {/* Project Image */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="mb-16"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-[#6693B2] dark:bg-[#000000] rounded-3xl dark:rounded-none opacity-20 group-hover:opacity-30 transition-opacity duration-300 dark:animate-pulse"></div>
              <div className="relative overflow-hidden rounded-3xl dark:rounded-none border border-[#A9C8DA] dark:border-[#ff00ff] shadow-2xl group-hover:shadow-3xl transition-shadow duration-300">
                <Image
                  src={project.image}
                  alt={`Screenshot of ${project.title} project`}
                  width={1200}
                  height={600}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent dark:from-[#ff00ff]/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </motion.div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 gap-8 mb-16">
            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#F1E8DF] dark:bg-black rounded-3xl dark:rounded-none border border-[#A9C8DA] dark:border-[#ff0000] p-8 dark:animate-pulse">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-[#6693B2] dark:bg-[#ff00ff] rounded-2xl dark:rounded-none flex items-center justify-center mr-4">
                    <FiCode className="w-5 h-5 text-white dark:text-black" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-[#ffff00]">
                    Tech Stack
                  </h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                  {project.tech.map((tech, index) => (
                    <div
                      key={tech}
                      className="group relative"
                      style={{
                        animationDelay: `${index * 100}ms`,
                      }}
                    >
                      <TechStackItem
                        tech={tech}
                        index={index}
                        // className="transform transition-all duration-200 hover:scale-105 hover:-translate-y-1"
                      />

                      {/* Subtle glow effect on hover */}
                      <div className="absolute inset-0 rounded-lg dark:rounded-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-blue-400/20 to-purple-400/20 dark:from-[#00ff00]/10 dark:to-[#ff00ff]/10 blur-sm -z-10" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Additional Project Details with Action Buttons */}
            {project.description && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-0"
              >
                <div className="bg-[#F1E8DF] dark:bg-black rounded-3xl dark:rounded-none border border-[#A9C8DA] dark:border-[#ff00ff] py-12 px-10 dark:animate-pulse">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-[#ffff00] mb-6">
                    Project Details
                  </h3>
                  <div className="prose prose-lg max-w-none text-gray-600 dark:text-[#ffffff] mb-8">
                    <p>{project.description}</p>
                  </div>

                  {/* Action Buttons Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    {/* Live Project Button */}
                    <div>
                      {/* <h4 className="text-lg font-semibold text-gray-800 dark:text-[#EEEAE1] mb-4 text-center">
                        View Project
                      </h4> */}
                      <ActionButton
                        href={project.url}
                        icon={FiEye}
                        label="View Live Project"
                        colorClass="bg-[#6693B2] dark:bg-[#ff00ff]"
                        disabled={!project.url}
                      />
                    </div>

                    {/* GitHub Button */}
                    {project.github && (
                      <div>
                        {/* <h4 className="text-lg font-semibold text-gray-800 dark:text-[#EEEAE1] mb-4 text-center">
                          Source Code
                        </h4> */}
                        <ActionButton
                          href={project.github}
                          icon={FiGithub}
                          label="View on GitHub"
                          colorClass="bg-gray-800 dark:bg-[#ff0000]"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* More Projects CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-[#F1E8DF] dark:bg-[#000000] rounded-3xl dark:rounded-none border border-[#A9C8DA] dark:border-[#ff00ff] p-12 relative overflow-hidden dark:animate-pulse">
              {/* Decorative Bubbles */}
              <div className="absolute top-6 right-6 w-4 h-4 bg-[#E57986] dark:bg-[#00ffff] rounded-full dark:rounded-none opacity-40 dark:animate-bounce"></div>
              <div className="absolute bottom-6 left-6 w-6 h-6 border border-[#A9C8DA] dark:border-[#00ff00] rounded-full dark:rounded-none opacity-30 dark:animate-shake"></div>

              <h3 className="text-2xl font-bold text-gray-800 dark:text-[#ffff00] mb-4">
                Explore More Projects
              </h3>
              <p className="text-gray-600 dark:text-[#ffffff] mb-8 max-w-2xl mx-auto">
                Discover other projects in my portfolio showcasing different
                technologies and approaches
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-[#6693B2] dark:bg-[#ff0000] text-white dark:text-[#000000] font-semibold rounded-2xl dark:rounded-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden dark:animate-bounce"
                aria-label="Contact me"
              >
                <Link href="/projects">
                  <span className="relative z-10 flex items-center">
                    View All Projects
                    <FaArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 dark:animate-ping" />
                  </span>
                  <div className="absolute inset-0 bg-[#A45F7B] dark:bg-[#00ff00] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
