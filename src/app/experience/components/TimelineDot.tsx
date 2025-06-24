import React, { JSX } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import ExperienceCard from "./TimelineCard";
import { ExperienceItem } from "@/lib/experience";
import { IconType } from "react-icons/lib";
import {
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiThreedotjs,
} from "react-icons/si";

export const TECH_ICONS = {
  TypeScript: <SiTypescript className="w-4 h-4" />,
  React: <SiReact className="w-4 h-4" />,
  "Node.js": <SiNodedotjs className="w-4 h-4" />,
  Python: <SiPython className="w-4 h-4" />,
  "Three.js": <SiThreedotjs className="w-4 h-4" />,
};

interface TimelineProps {
  filteredExperience: ExperienceItem[];
  expandedCard: number | null;
  toggleCard: (index: number) => void;
  techIcons: Record<string, JSX.Element>;
}

const Timeline: React.FC<TimelineProps> = ({
  filteredExperience,
  expandedCard,
  toggleCard,
  techIcons,
}) => (
  <div className="relative">
    {/* Timeline line */}
    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#6693B2] via-[#A9C8DA] to-[#E57986] dark:from-[#ff00ff] dark:via-[#00ff00] dark:to-[#ff0000] transform -translate-x-1/2 opacity-30 dark:animate-pulse"></div>

    <AnimatePresence mode="wait">
      <motion.div
        key={filteredExperience.map((exp) => exp.role).join("-")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {filteredExperience.map((item, index) => {
          const isEvenIndex = index % 2 === 0;

          return (
            <motion.div
              key={`${item.role}-${index}`}
              initial={{ opacity: 0, x: isEvenIndex ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative mb-16 ${
                isEvenIndex ? "md:pr-8 md:text-right" : "md:pl-8"
              } ml-12 md:ml-0`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute top-8 ${
                  isEvenIndex ? "md:right-0" : "md:left-0"
                } 
              -left-8 md:left-1/2 w-8 h-8 bg-[#6693B2] dark:bg-[#ff0000] 
              rounded-full dark:rounded-none border-4 border-white dark:border-[#00ffff] 
              shadow-lg transform -translate-x-1/2 md:translate-x-1/2 
              flex items-center justify-center transition-transform duration-300 
              group-hover:scale-110 dark:group-hover:animate-shake`}
              >
                <FaBriefcase className="text-white dark:text-white text-sm" />
              </div>

              <ExperienceCard
                item={item}
                index={index}
                isExpanded={expandedCard === index}
                onToggle={() => toggleCard(index)}
                techIcons={techIcons}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </AnimatePresence>
  </div>
);

export default Timeline;
