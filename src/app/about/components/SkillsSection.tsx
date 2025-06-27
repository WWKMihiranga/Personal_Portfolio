import { motion } from "framer-motion";
import React from "react";
import {
  FaCode,
  FaDatabase,
  FaFigma,
  FaGitAlt,
  FaMobileAlt,
  FaServer,
} from "react-icons/fa";

// Type definitions
interface Skill {
  name: string;
  icon: React.ReactNode;
  level: number;
  category: string;
}

interface Stat {
  value: string;
  label: string;
  color: string;
}

interface SkillCardProps {
  skill: Skill;
  index: number;
}

interface StatsCardProps {
  stat: Stat;
}

// Constants for reusable values
const SKILLS_DATA: Skill[] = [
  {
    name: "Frontend Development",
    icon: <FaCode className="w-6 h-6" />,
    level: 90,
    category: "Development",
  },
  {
    name: "Backend Development",
    icon: <FaServer className="w-6 h-6" />,
    level: 75,
    category: "Development",
  },
  {
    name: "UI/UX Design",
    icon: <FaFigma className="w-6 h-6" />,
    level: 80,
    category: "Design",
  },
  {
    name: "Mobile Development",
    icon: <FaMobileAlt className="w-6 h-6" />,
    level: 70,
    category: "Development",
  },
  {
    name: "Database Management",
    icon: <FaDatabase className="w-6 h-6" />,
    level: 85,
    category: "Backend",
  },
  {
    name: "Version Control",
    icon: <FaGitAlt className="w-6 h-6" />,
    level: 90,
    category: "Tools",
  },
];

const STATS_DATA: Stat[] = [
  {
    value: "6+",
    label: "Core Skills",
    color: "text-[#6693B2] dark:text-[#00ffff]",
  },
  {
    value: "80%",
    label: "Avg Proficiency",
    color: "text-[#E57986] dark:text-[#00ffff]",
  },
  {
    value: "3+",
    label: "Years Experience",
    color: "text-[#A45F7B] dark:text-[#00ffff]",
  },
];

const BackgroundElements = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-10 right-20 w-20 h-20 border-2 border-[#A9C8DA] dark:border-[#ff0000] rounded-full dark:rounded-none opacity-30 dark:animate-pulse"></div>
    <div className="absolute bottom-20 left-10 w-16 h-16 bg-[#FFBB94] dark:bg-[#00ff00] opacity-20 rounded-lg dark:rounded-none rotate-45 dark:animate-bounce"></div>
  </div>
);

const SectionHeader = () => (
  <div className="text-center mb-16">
    {/* Badge */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="inline-flex items-center px-4 py-2 rounded-full dark:rounded-none bg-[#F1E8DF] dark:bg-black border border-[#A9C8DA] dark:border-[#ff0000] dark:animate-shake mb-6"
    >
      <FaCode className="w-4 h-4 text-[#6693B2] dark:text-[#00ff00] dark:rounded-none dark:animate-ping mr-2" />
      <span className="text-sm font-medium text-[#A45F7B] dark:text-[#ff00ff]">
        Technical Expertise
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
        Skills
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
      A comprehensive overview of my technical capabilities and proficiency
      levels
    </motion.p>
  </div>
);

const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  const proficiencyLevel =
    skill.level >= 85
      ? "Expert"
      : skill.level >= 75
      ? "Advanced"
      : "Intermediate";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative"
    >
      <div className="bg-white dark:bg-black p-8 rounded-3xl dark:rounded-none border border-[#A9C8DA] dark:border-[#ff0000] hover:border-[#6693B2] dark:hover:border-[#00ff00] transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden dark:animate-shake">
        <div className="absolute top-0 right-0 w-20 h-20 bg-[#F1E8DF] dark:bg-[#6C3B3F] rounded-full dark:rounded-none opacity-50 transform translate-x-8 -translate-y-8" />

        <div className="relative z-10">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-[#A9C8DA] dark:bg-[#00ff00] rounded-2xl dark:rounded-none flex items-center justify-center text-[#6693B2] dark:text-[#ff00ff] group-hover:scale-110 transition-transform duration-300 dark:animate-pulse">
                {skill.icon}
              </div>
            </div>
            <div className="text-right">
              <span className="text-2xl font-bold text-[#6693B2] dark:text-[#00ffff]">
                {skill.level}%
              </span>
              <div className="text-xs text-gray-500 dark:text-[#CFC6BD] font-medium uppercase tracking-wider">
                {skill.category}
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 dark:text-[#ffffff] mb-4 leading-tight dark:animate-pulse">
            {skill.name}
          </h3>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-[#CFC6BD]">
                Proficiency
              </span>
              <span className="text-[#A45F7B] dark:text-[#ff00ff] font-medium">
                {proficiencyLevel}
              </span>
            </div>

            <div className="w-full bg-[#F1E8DF] dark:bg-[#111111] rounded-full dark:rounded-none h-3 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{
                  delay: index * 0.1 + 0.5,
                  duration: 1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="h-full bg-[#6693B2] dark:bg-[#00ff00] rounded-full dark:rounded-none relative"
              >
                <div className="absolute inset-0 bg-white dark:bg-[#ff00ff] opacity-30 rounded-full dark:rounded-none dark:animate-pulse" />
              </motion.div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 right-4 w-2 h-2 bg-[#E57986] dark:bg-[#ff00ff] rounded-full dark:rounded-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </motion.div>
  );
};

const StatsCard: React.FC<StatsCardProps> = ({ stat }) => (
  <div className="text-center p-6 bg-[#F1E8DF] dark:bg-black rounded-2xl dark:rounded-none border border-[#A9C8DA] dark:border-[#ff00ff] min-w-[140px] dark:animate-pulse">
    <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
    <div className="text-sm text-gray-600 dark:text-[#ffffff] font-medium">
      {stat.label}
    </div>
  </div>
);

const SkillsGrid = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {SKILLS_DATA.map((skill, index) => (
      <SkillCard key={index} skill={skill} index={index} />
    ))}
  </div>
);

const SkillsSection: React.FC = () => {
  return (
    <div className="relative">
      <BackgroundElements />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mb-32 relative z-10"
      >
        <SectionHeader />
        <SkillsGrid />
        {/* <SummaryStats /> */}
      </motion.div>
    </div>
  );
};

export default SkillsSection;
