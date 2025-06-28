"use client";

import Image from "next/image";
import Link from "next/link";
import { Project } from "@/lib/projects";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  FiChevronLeft,
  FiChevronRight,
  FiExternalLink,
  FiGithub,
  FiPlay,
  FiPause,
} from "react-icons/fi";
import { useInView } from "react-intersection-observer";

type Props = {
  projects: Project[];
};

export default function ProjectCarousel({ projects }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const controls = useAnimation();
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  // Auto-play functionality
  useEffect(() => {
    let isMounted = true;

    const clearExistingInterval = () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
        autoPlayRef.current = null;
      }
    };

    const startNewInterval = () => {
      if (!isMounted) return;

      clearExistingInterval();

      if (isAutoPlay && inView) {
        autoPlayRef.current = setInterval(() => {
          setCurrentIndex((prev) => {
            if (!isMounted) return prev;
            return prev === projects.length - 1 ? 0 : prev + 1;
          });
        }, 8000);
      }
    };

    startNewInterval();

    return () => {
      isMounted = false;
      clearExistingInterval();
    };
  }, [isAutoPlay, inView, projects.length]);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const goToProject = (index: number) => {
    setCurrentIndex(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
  };

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative transition-colors duration-300">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 border border-[#A9C8DA] dark:border-[#ff0000] rounded-full dark:rounded-none opacity-20 dark:animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-28 h-6 bg-[#FFBB94] dark:bg-[#00ff00] opacity-10 rounded-full dark:rounded-none rotate-12 dark:animate-bounce"></div>
        <div className="absolute top-40 right-1/4 w-3 h-3 bg-[#E57986] dark:bg-[#ffff00] rounded-full dark:rounded-none opacity-40 dark:animate-spin"></div>
        <div className="absolute bottom-20 left-1/3 w-16 h-16 border border-[#6693B2] dark:border-[#00ffff] rounded-full dark:rounded-none opacity-15 dark:animate-shake"></div>
      </div>

      <motion.section
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        className="w-full py-20 px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
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
                Portfolio Showcase
              </span>
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-[#ffff00] mb-4 dark:animate-bounce dark:rounded-none"
            >
              Featured{" "}
              <span className="text-[#6693B2] dark:text-[#00ffff] relative dark:animate-pulse dark:rounded-none">
                Projects
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="absolute bottom-1 left-0 right-0 h-1 bg-[#E57986] dark:bg-[#ff0000] origin-left dark:animate-spin"
                ></motion.div>
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 dark:text-[#ffffff] max-w-2xl mx-auto mb-12 dark:animate-pulse"
            >
              Explore my work and see how I solve problems with code and design
            </motion.p>

            {/* Auto-play Control */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
              className="flex justify-center px-4 sm:px-0"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleAutoPlay}
                className={`
              flex items-center gap-1.5 sm:gap-2 px-4 py-2 sm:px-6 sm:py-3 
              rounded-full dark:rounded-none border transition-all duration-300 
              hover:shadow-lg backdrop-blur-sm text-xs sm:text-sm
              ${
                isAutoPlay
                  ? "bg-[#6693B2] dark:bg-[#ff0000] text-white dark:text-[#000000] border-[#6693B2] dark:border-[#ff0000] dark:animate-pulse"
                  : "bg-transparent dark:bg-transparent text-[#6693B2] dark:text-[#00ff00] border-[#A9C8DA] dark:border-[#00ff00]"
              }
                `}
              >
                {isAutoPlay ? (
                  <FiPause className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                ) : (
                  <FiPlay className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                )}
                <span className="text-sm font-medium">
                  {isAutoPlay ? "Pause" : "Play"} Auto-scroll
                </span>
              </motion.button>
            </motion.div>
          </motion.div>

          <div className="relative group" ref={carouselRef}>
            {/* Navigation Arrows */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.1, x: -2 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevProject}
              className="flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 lg:-translate-x-6 z-20 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 items-center justify-center rounded-full dark:rounded-none shadow-lg lg:shadow-xl transition-all duration-300 border backdrop-blur-sm hover:shadow-xl lg:hover:shadow-2xl group-hover:opacity-100 opacity-70 bg-[#F1E8DF] text-[#6693B2] border-[#A9C8DA] dark:bg-black dark:border-[#00ff00] dark:text-[#ff00ff] dark:animate-spin"
              aria-label="Previous project"
            >
              <FiChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.1, x: 2 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextProject}
              className="flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 lg:translate-x-6 z-20 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 items-center justify-center rounded-full dark:rounded-none shadow-lg lg:shadow-xl transition-all duration-300 border backdrop-blur-sm hover:shadow-xl lg:hover:shadow-2xl group-hover:opacity-100 opacity-70 bg-[#F1E8DF] text-[#6693B2] border-[#A9C8DA] dark:bg-black dark:border-[#00ff00] dark:text-[#ff00ff] dark:animate-spin"
              aria-label="Next project"
            >
              <FiChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
            </motion.button>

            {/* Carousel Container */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true, margin: "-50px" }}
              className="overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl dark:rounded-none dark:border dark:sm:border-2 dark:border-[#ff0000] mx-2 sm:mx-0"
            >
              <motion.div
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                  width: `${projects.length * 100}%`,
                  transform: `translateX(-${
                    currentIndex * (100 / projects.length)
                  }%)`,
                }}
                onMouseEnter={() => setIsAutoPlay(false)}
                onMouseLeave={() => setIsAutoPlay(true)}
              >
                {projects.map((project, index) => (
                  <div
                    key={project.slug}
                    className="w-full px-2 sm:px-4 md:px-6"
                    style={{ flex: `0 0 ${100 / projects.length}%` }}
                  >
                    <ProjectCard
                      project={project}
                      isActive={index === currentIndex}
                    />
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-8 mb-6"
            >
              <div className="w-full h-2 bg-[#F1E8DF] dark:bg-[#ffffff] rounded-full dark:rounded-none overflow-hidden">
                <motion.div
                  className="h-full relative bg-[#6693B2] dark:bg-[#ffff00] rounded-full dark:rounded-none"
                  initial={{ width: 0 }}
                  animate={{
                    width: `${((currentIndex + 1) / projects.length) * 100}%`,
                  }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  <div className="absolute right-0 top-0 w-3 h-full bg-[#E57986] dark:bg-[#ff0000] rounded-full dark:rounded-none"></div>
                </motion.div>
              </div>
            </motion.div>

            {/* Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center space-x-3"
            >
              {projects.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToProject(index)}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`relative w-4 h-4 rounded-full dark:rounded-none transition-all duration-300 border-2 hover:shadow-md ${
                    index === currentIndex
                      ? "bg-[#6693B2] border-[#6693B2] dark:bg-[#ff00ff] dark:border-[#ff00ff] dark:cursor-crosshair dark:animate-pulse dark:hover:animate-pulse"
                      : "bg-transparent border-[#A9C8DA] dark:border-[#00ffff] dark:animate-none"
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                >
                  {index === currentIndex && (
                    <motion.div
                      className="absolute inset-1 rounded-full bg-white dark:bg-[#F1E8DF] dark:rounded-none"
                      layoutId="activeIndicator"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>
              ))}
            </motion.div>

            {/* Project Counter */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mt-6"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full dark:rounded-none bg-[#F1E8DF] dark:bg-[#000000] border border-[#A9C8DA] dark:border-[#ff00ff] dark:animate-pulse">
                <span className="text-sm font-medium text-[#6693B2] dark:text-[#00ffff]">
                  {String(currentIndex + 1).padStart(2, "0")} /{" "}
                  {String(projects.length).padStart(2, "0")}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

type ProjectCardProps = {
  project: Project;
  isActive: boolean;
};

function ProjectCard({ project, isActive }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0.7 }}
      animate={{
        scale: isActive ? 1 : 0.9,
        opacity: isActive ? 1 : 0.7,
        y: isActive ? 0 : 20,
      }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="h-full"
    >
      <div className="rounded-xl sm:rounded-2xl lg:rounded-3xl dark:rounded-none shadow-lg lg:shadow-xl overflow-hidden h-full flex flex-col transition-all duration-500 hover:shadow-xl lg:hover:shadow-2xl border group relative bg-white dark:bg-black border-[#A9C8DA] dark:border-[#ff0000] dark:animate-pulse">
        <Link
          href={`/projects/${project.slug}`}
          className="block relative z-10"
        >
          <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bg-black/60 inset-0 opacity-0 group-hover:opacity-80 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm dark:bg-[#ff0000]/80">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                className="text-white font-medium sm:font-semibold text-base sm:text-lg flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full dark:rounded-none border border-white/80 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                View Details <FiExternalLink className="w-5 h-5" />
              </motion.div>
            </div>
          </div>
        </Link>

        <div className="p-4 sm:p-6 md:p-8 flex-1 flex flex-col relative z-10">
          <div className="flex-1">
            <h3 className="text-xl sm:text-2xl text-center sm:text-left font-bold mb-2 sm:mb-3 text-gray-800 dark:text-[#ffff00] group-hover:text-[#6693B2] dark:group-hover:text-[#00ffff] transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base text-center sm:text-left leading-relaxed mb-4 sm:mb-6 text-gray-600 dark:text-[#ffffff]">
              {project.description}
            </p>
          </div>

          <div className="mt-2 sm:mt-4">
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
              {project.tech.map((t) => (
                <motion.span
                  key={t}
                  whileHover={{ scale: 1.05, y: -1 }}
                  className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-[#F1E8DF] dark:bg-transparent text-[#6693B2] dark:text-[#ffffff] rounded-full dark:rounded-none font-medium border border-[#A9C8DA] dark:border-[#ff0000] transition-all duration-300 hover:shadow-sm"
                >
                  {t}
                </motion.span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-4 sm:pt-6 border-t dark:border-[#00ff00] border-[#A9C8DA]">
              {project.url && (
                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full dark:rounded-none border transition-all duration-300 hover:shadow-sm backdrop-blur-sm dark:bg-[#00ff00]/10 dark:text-[#00ff00] dark:border-[#00ff00] text-xs sm:text-sm"
                  style={{
                    borderColor: "#A9C8DA",
                    color: "#6693B2",
                    backgroundColor: "rgba(169, 200, 218, 0.1)",
                  }}
                >
                  <FiGithub className="w-3 h-3 sm:w-4 sm:h-4" /> Code
                </motion.a>
              )}
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="w-full flex items-center justify-center gap-1 sm:gap-2 px-4 sm:px-6 py-2 rounded-full dark:rounded-none transition-all duration-300 hover:shadow-sm text-sm sm:text-base font-medium bg-[#6693B2] dark:bg-[#00ffff] text-white dark:text-black"
                >
                  View Project{" "}
                  <FiExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Hover indicator */}
        <div className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 w-6 sm:w-8 h-0.5 sm:h-1 bg-[#6693B2] dark:bg-[#ff00ff] rounded-full dark:rounded-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </motion.div>
  );
}
