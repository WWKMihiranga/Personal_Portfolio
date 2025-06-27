import { motion } from "framer-motion";
import React from "react";

// Type definitions
interface TimelineItem {
  year: string;
  degree?: string;
  role?: string;
  institution?: string;
  company?: string;
  description: string;
  icon: string;
  status: "current" | "completed";
  skills?: string[];
}

interface TimelineSectionProps {
  items: TimelineItem[];
  title: string;
  icon: string;
  colorClass: {
    bg: string;
    darkBg: string;
    text: string;
    darkText: string;
    border: string;
    darkBorder: string;
  };
  isExperience?: boolean;
  delay?: number;
}

interface TimelineCardProps {
  item: TimelineItem;
  index: number;
  colorClass: {
    bg: string;
    darkBg: string;
    text: string;
    darkText: string;
    border: string;
    darkBorder: string;
  };
  isExperience?: boolean;
}

interface SummaryCardProps {
  count: number | string;
  title: string;
  description: string;
  iconBg: string;
  darkIconBg: string;
  iconText: string;
  darkIconText: string;
}

// Decorative background elements component
const TimelineBackgroundElements: React.FC = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div
      animate={{
        y: [0, -15, 0],
        rotate: [0, 3, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute top-20 right-8 w-20 h-20 border border-[#A9C8DA] dark:border-[#ff0000] rounded-full dark:rounded-none opacity-15 dark:animate-pulse"
    />

    <motion.div
      animate={{
        x: [0, 20, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1,
      }}
      className="absolute bottom-1/4 left-12 w-6 h-6 bg-[#FFBB94] dark:bg-[#00ff00] opacity-20 rounded-full dark:rounded-none"
    />
  </div>
);

// Section header component
const SectionHeader: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
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
        Journey & Growth
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
      My{" "}
      <span className="text-[#6693B2] dark:text-[#00ffff] relative dark:animate-pulse dark:rounded-none">
        Timeline
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
      className="text-lg text-gray-600 dark:text-[#ffffff] max-w-2xl mx-auto dark:animate-pulse"
    >
      A journey through education and professional experiences that shaped my
      development career
    </motion.p>
  </motion.div>
);

// Timeline card component
const TimelineCard: React.FC<TimelineCardProps> = ({
  item,
  index,
  colorClass,
  isExperience = false,
}) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      delay: index * 0.2 + (isExperience ? 0.3 : 0),
      duration: 0.6,
    }}
    viewport={{ once: true, margin: "-50px" }}
    className="relative pl-10 sm:pl-14 md:pl-16 pb-6 sm:pb-8 last:pb-0"
  >
    {/* Timeline dot */}
    <motion.div
      whileHover={{ scale: 1.1 }}
      className={`absolute left-0 top-1 sm:top-2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full dark:rounded-none border-2 sm:border-3 md:border-4 border-white dark:border-black flex items-center justify-center text-white font-bold shadow-md sm:shadow-lg ${
        item.status === "completed"
          ? colorClass.bg + " " + colorClass.darkBg
          : `bg-[${
              item.status === "current" ? colorClass.bg : colorClass.border
            }] dark:bg-[${colorClass.darkBorder}]`
      }`}
    >
      <span className="text-sm sm:text-base md:text-lg">{item.icon}</span>
      {item.status === "current" && (
        <motion.div
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className={`absolute inset-0 rounded-full dark:rounded-none ${colorClass.bg} ${colorClass.darkBg} opacity-30 dark:animate-ping`}
        />
      )}
    </motion.div>

    {/* Card content */}
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className="bg-white dark:bg-black p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl dark:rounded-none shadow-sm border border-[#A9C8DA] dark:border-[#ff00ff] hover:border-[#6693B2] dark:hover:border-[#00ffff] hover:shadow-md sm:hover:shadow-lg transition-all duration-300"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
        <span
          className={`text-xs sm:text-sm font-medium text-[#E57986] dark:text-[#000000] bg-[#F1E8DF] dark:bg-[#00ffff] px-2 py-1 sm:px-3 sm:py-1 rounded-full dark:rounded-none dark:animate-pulse w-fit`}
        >
          {item.year}
        </span>
        {item.status === "current" && (
          <span
            className={`text-xs font-medium px-2 py-1 rounded-full dark:rounded-none dark:text-[#ffffff] dark:bg-transparent dark:border border-[#ffff00] ${
              isExperience
                ? "text-[#F1E8DF] bg-[#E57986]"
                : "text-[#F1E8DF] bg-[#6693B2]"
            } w-fit`}
          >
            Current
          </span>
        )}
      </div>
      <h4 className="text-lg sm:text-xl font-semibold mt-1 sm:mt-2 text-gray-800 dark:text-[#ffff00] dark:animate-pulse">
        {item.degree || item.role}
      </h4>
      <p className="text-sm sm:text-base text-[#A45F7B] dark:text-[#ff00ff] font-medium mb-2 sm:mb-3">
        {item.institution || item.company}
      </p>
      <p className="text-sm sm:text-base text-gray-600 dark:text-[#CFC6BD] leading-relaxed mb-3 sm:mb-4">
        {item.description}
      </p>

      {/* Skills tags - only for experience */}
      {isExperience && item.skills && (
        <div className="flex flex-wrap gap-2">
          {item.skills.map((skill, skillIndex) => (
            <motion.span
              key={skillIndex}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: skillIndex * 0.1, duration: 0.3 }}
              viewport={{ once: true }}
              className="text-[10px] xs:text-xs font-medium text-[#ffffff] dark:text-[#00ffff] bg-[#E57986] dark:bg-[#6C3B3F] px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full dark:rounded-none border border-[#A45F7B] dark:border-[#ff00ff] opacity-80"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      )}
    </motion.div>
  </motion.div>
);

// Timeline section component
const TimelineSection: React.FC<TimelineSectionProps> = ({
  items,
  title,
  icon,
  colorClass,
  isExperience = false,
  delay = 0,
}) => (
  <motion.div
    initial={{ opacity: 0, x: isExperience ? 30 : -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, ease: "easeOut", delay }}
    viewport={{ once: true }}
    className="relative"
  >
    {/* Section title */}
    <div className="flex items-center mb-8">
      <div
        className={`w-12 h-12 ${colorClass.bg} ${colorClass.darkBg} rounded-xl dark:rounded-none flex items-center justify-center mr-4 dark:animate-pulse`}
      >
        <span className="text-white dark:text-[#ff00ff] text-xl font-bold">
          {icon}
        </span>
      </div>
      <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-[#ffff00] dark:animate-shake">
        {title}
      </h3>
    </div>

    <div className="relative">
      {/* Timeline line */}
      <div
        className={`absolute left-6 top-0 h-full w-0.5 bg-gradient-to-b ${
          isExperience
            ? "from-[#E57986] via-[#FFBB94] dark:from-[#ff0000] dark:via-[#A99B8E]"
            : "from-[#6693B2] via-[#A9C8DA] dark:from-[#00ffff] dark:via-[#6C3B3F]"
        } to-transparent dark:to-transparent`}
      ></div>

      {/* Timeline items */}
      {items.map((item, index) => (
        <TimelineCard
          key={index}
          item={item}
          index={index}
          colorClass={colorClass}
          isExperience={isExperience}
        />
      ))}
    </div>
  </motion.div>
);

// Summary card component
const SummaryCard: React.FC<SummaryCardProps> = ({
  count,
  title,
  description,
  iconBg,
  darkIconBg,
  iconText,
  darkIconText,
}) => (
  <div className="p-6 bg-[#F1E8DF] dark:bg-black rounded-2xl dark:rounded-none border border-[#A9C8DA] dark:border-[#ff0000] text-center hover:shadow-lg dark:hover:shadow-[#ff0000] transition-all duration-300 dark:animate-pulse">
    <div
      className={`w-12 h-12 ${iconBg} ${darkIconBg} rounded-full dark:rounded-none flex items-center justify-center mx-auto mb-4 dark:animate-bounce`}
    >
      <span className={`${iconText} ${darkIconText} font-bold text-lg`}>
        {count}
      </span>
    </div>
    <h4 className="font-semibold text-gray-800 dark:text-[#ffffff] mb-2">
      {title}
    </h4>
    <p className="text-sm text-gray-600 dark:text-[#ff00ff]">{description}</p>
  </div>
);

// Main Timeline component
export default function TimeLine() {
  // Education timeline data
  const education: TimelineItem[] = [
    {
      year: "2022 - Present",
      degree: "BSc (Hons) in Computer Science",
      institution: "University of Westminster (at IIT Sri Lanka)",
      description:
        "Pursuing a comprehensive Computer Science degree with a focus on software engineering, web development, and AI. Expected graduation in 2026.",
      icon: "🎓",
      status: "current",
    },
    {
      year: "2011 - 2020",
      degree: "High School Diploma",
      institution: "Richmond College, Galle",
      description:
        "Completed both O/Ls and A/Ls in the Physical Science stream. A/Ls: 3 B's (2021–22). O/Ls: 8 A's and 1 C pass (2017). Built a strong foundation in math, physics, and computer science.",
      icon: "📚",
      status: "completed",
    },
  ];

  // Experience timeline data
  const experience: TimelineItem[] = [
    {
      year: "2024 - 2025",
      role: "Software Engineer",
      company: "Fintelex Pvt Ltd",
      description:
        "Led cross-platform mobile app development using Flutter, React, and Figma. Delivered scalable, responsive solutions with strong UI/UX focus under agile practices.",
      icon: "💼",
      status: "completed",
      skills: ["Flutter", "React", "Figma"],
    },
    {
      year: "2023 - Present",
      role: "Frontend Developer",
      company: "Codez Solutions",
      description:
        "Worked on client-facing web and mobile apps using Next.js, Flutter, and Tailwind CSS. Built responsive UIs and collaborated on scalable product development.",
      icon: "💼",
      status: "current",
      skills: ["Next.js", "Flutter", "Tailwind CSS"],
    },
  ];

  // Color classes for consistent styling
  const educationColors = {
    bg: "bg-[#6693B2]",
    darkBg: "dark:bg-[#ff0000]",
    text: "text-[#6693B2]",
    darkText: "dark:text-[#A99B8E]",
    border: "border-[#A9C8DA]",
    darkBorder: "dark:border-[#ff0000]",
  };

  const experienceColors = {
    bg: "bg-[#E57986]",
    darkBg: "dark:bg-[#ff0000]",
    text: "text-[#E57986]",
    darkText: "dark:text-[#A99B8E]",
    border: "border-[#A9C8DA]",
    darkBorder: "dark:border-[#ff0000]",
  };

  return (
    <div className="relative py-16 px-4 sm:px-6 lg:px-8">
      <TimelineBackgroundElements />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader />

        {/* Timeline section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <TimelineSection
            items={education}
            title="Education"
            icon="🎓"
            colorClass={educationColors}
          />

          <TimelineSection
            items={experience}
            title="Experience"
            icon="💼"
            colorClass={experienceColors}
            isExperience={true}
          />
        </div>

        {/* Timeline Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          <SummaryCard
            count={education.length}
            title="Education Milestones"
            description="Academic achievements and learning"
            iconBg="bg-[#6693B2]"
            darkIconBg="dark:bg-[#ffff00]"
            iconText="text-white"
            darkIconText="dark:text-black"
          />

          <SummaryCard
            count={experience.length}
            title="Work Experience"
            description="Professional growth and projects"
            iconBg="bg-[#E57986]"
            darkIconBg="dark:bg-[#ffff00]"
            iconText="text-white"
            darkIconText="dark:text-black"
          />

          <SummaryCard
            count="∞"
            title="Continuous Growth"
            description="Always learning and evolving"
            iconBg="bg-[#A45F7B]"
            darkIconBg="dark:bg-[#ffff00]"
            iconText="text-white"
            darkIconText="dark:text-black"
          />
        </motion.div>
      </div>
    </div>
  );
}
