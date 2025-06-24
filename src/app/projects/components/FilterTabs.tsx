import { motion } from "framer-motion";
import React, { useState } from "react";
import { FiFilter } from "react-icons/fi";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
} from "react-icons/si";

// Tech stack filters
export const techFilters = [
  { name: "All", icon: null },
  { name: "Next.js", icon: <SiNextdotjs className="w-4 h-4" /> },
  { name: "React", icon: <SiReact className="w-4 h-4" /> },
  { name: "TypeScript", icon: <SiTypescript className="w-4 h-4" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="w-4 h-4" /> },
  { name: "Three.js", icon: <SiThreedotjs className="w-4 h-4" /> },
];

interface FilterTabsProps {
  activeFilter: number;
  setActiveFilter: (index: number) => void;
}

export const Filters = techFilters.length;

export const useFilters = () => {
  const [activeFilter, setActiveFilter] = useState(0);
  return { activeFilter, setActiveFilter, techFilters };
};

export default function FilterTabs({
  activeFilter,
  setActiveFilter,
}: FilterTabsProps) {
  return (
    <div>
      {/* Tech Filter Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-50px" }}
        className="mb-12 sm:mb-16"
      >
        {/* Filter Header */}
        {/* <div className="flex items-center justify-center mb-6 sm:mb-8">
          <div className="flex items-center px-2 py-1 sm:px-3 sm:py-1 bg-[#F1E8DF] dark:bg-black border border-[#A9C8DA] dark:border-[#ff0000] rounded-full dark:rounded-none animate-none dark:animate-pulse">
            <FiFilter className="w-3 h-3 sm:w-4 sm:h-4 text-[#6693B2] dark:text-[#00ffff] mr-1.5 sm:mr-2" />
            <span className="text-xs sm:text-sm font-medium text-[#A45F7B] dark:text-[#ffffff] dark:font-bold dark:animate-shake">
              Filter by Technology
            </span>
          </div>
        </div> */}

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {techFilters.map((tech, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(index)}
              className={`group relative flex items-center px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 rounded-xl sm:rounded-2xl dark:rounded-none border transition-all duration-300 font-medium text-sm sm:text-base ${
                activeFilter === index
                  ? "bg-[#6693B2] dark:bg-[#ff0000] text-white dark:text-black border-[#6693B2] dark:border-[#ffffff] shadow-lg dark:shadow-white dark:animate-bounce"
                  : "bg-white dark:bg-black text-gray-700 dark:text-[#ffffff] border-[#A9C8DA] dark:border-[#ff00ff] hover:border-[#6693B2] dark:hover:border-[#00ff00] hover:bg-[#F1E8DF] dark:hover:bg-[#ff0000] shadow-md hover:shadow-lg dark:hover:shadow-red-700"
              }`}
            >
              {/* Background effect for active state */}
              {activeFilter === index && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-[#6693B2] dark:bg-[#00ff00] rounded-2xl dark:rounded-none"
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                />
              )}

              {/* Content */}
              <div className="relative z-10 flex items-center cursor-pointer">
                {tech.icon && (
                  <span
                    className={`mr-1 sm:mr-2 transition-transform duration-300 ${
                      activeFilter === index
                        ? "scale-110 dark:animate-spin-slow"
                        : "group-hover:scale-105 dark:group-hover:animate-ping"
                    }`}
                  >
                    {tech.icon}
                  </span>
                )}
                {tech.name}
              </div>

              {/* Hover indicator */}
              <div
                className={`absolute bottom-0.5 sm:bottom-1 left-1/2 transform -translate-x-1/2 w-3 sm:w-4 h-0.5 bg-[#6693B2] dark:bg-[#ff00ff] rounded-full dark:rounded-none transition-opacity duration-300 ${
                  activeFilter === index
                    ? "opacity-0"
                    : "opacity-0 group-hover:opacity-100"
                }`}
              ></div>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
