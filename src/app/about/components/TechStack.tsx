import { FaNodeJs, FaPython, FaJava, FaDocker } from "react-icons/fa";
import { SiFlutter, SiNextdotjs, SiTypescript, SiMysql } from "react-icons/si";
import { motion } from "framer-motion";
import React from "react";

interface TechHighlightCardProps {
  count: string;
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
  delay: number;
  animationType: "x" | "y";
  animationValue: number;
}

interface TechCategoryBadgeProps {
  category: string;
  index: number;
}

interface TechCardProps {
  tech: TechItem;
  index: number;
}

export interface TechItem {
  name: string;
  icon: React.ReactNode;
  category: string;
  description: string;
  color: string;
  bgColor: string;
}

export const techStackData: TechItem[] = [
  {
    name: "Python",
    icon: <FaPython className="w-8 h-8" />,
    category: "Language",
    description: "ML and AI development",
    color: "text-[#6693B2] dark:text-[#ffff00]",
    bgColor: "bg-[#A9C8DA] dark:bg-[#ff0000]",
  },
  {
    name: "Java",
    icon: <FaJava className="w-8 h-8" />,
    category: "Language",
    description: "OOP language",
    color: "text-[#E57986] dark:text-[#ffff00]",
    bgColor: "bg-[#FFBB94] dark:bg-[#ff0000]",
  },
  {
    name: "Flutter",
    icon: <SiFlutter className="w-8 h-8" />,
    category: "Mobile",
    description: "UI toolkit for building apps",
    color: "text-[#6693B2] dark:text-[#ffff00]",
    bgColor: "bg-[#A9C8DA] dark:bg-[#ff0000]",
  },
  {
    name: "Docker",
    icon: <FaDocker className="w-8 h-8" />,
    category: "DevOps",
    description: "Containerization platform",
    color: "text-gray-800 dark:text-[#ffff00]",
    bgColor: "bg-[#F1E8DF] dark:bg-[#ff0000]",
  },
  {
    name: "MySQL",
    icon: <SiMysql className="w-8 h-8" />,
    category: "Database",
    description: "Relational database system",
    color: "text-[#A45F7B] dark:text-[#ffff00]",
    bgColor: "bg-[#E57986] dark:bg-[#ff0000]",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="w-8 h-8" />,
    category: "Framework",
    description: "React framework for production",
    color: "text-gray-800 dark:text-[#ffff00]",
    bgColor: "bg-[#F1E8DF] dark:bg-[#ff0000]",
  },
  // {
  //   name: "React",
  //   icon: <FaReact className="w-8 h-8" />,
  //   category: "Library",
  //   description: "UI component library",
  //   color: "text-[#6693B2] dark:text-[#ffff00]",
  //   bgColor: "bg-[#A9C8DA] dark:bg-[#ff0000]",
  // },
  {
    name: "TypeScript",
    icon: <SiTypescript className="w-8 h-8" />,
    category: "Language",
    description: "Typed JavaScript",
    color: "text-[#A45F7B] dark:text-[#ffff00]",
    bgColor: "bg-[#E57986] dark:bg-[#ff0000]",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="w-8 h-8" />,
    category: "Runtime",
    description: "JavaScript runtime",
    color: "text-[#E57986] dark:text-[#ffff00]",
    bgColor: "bg-[#FFBB94] dark:bg-[#ff0000]",
  },
  // {
  //   name: "Tailwind",
  //   icon: <SiTailwindcss className="w-8 h-8" />,
  //   category: "Styling",
  //   description: "Utility-first CSS",
  //   color: "text-[#6693B2] dark:text-[#ffff00]",
  //   bgColor: "bg-[#A9C8DA] dark:bg-[#ff0000]",
  // },
];

const TechCard: React.FC<TechCardProps> = ({ tech, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30, scale: 0.9 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true, margin: "-50px" }}
    whileHover={{
      y: -12,
      scale: 1.05,
      transition: { duration: 0.3, ease: "easeOut" },
    }}
    className="group h-full"
  >
    <div className="relative bg-white dark:bg-black p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl dark:rounded-none border border-[#A9C8DA] dark:border-[#ff0000] hover:border-[#6693B2] dark:hover:border-[#00ff00] transition-all duration-300 shadow-md hover:shadow-xl text-center overflow-hidden dark:animate-pulse h-full">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#F1E8DF] dark:to-[#6C3B3F] opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Icon container */}
        <div className="mb-4 sm:mb-6 flex-grow-0">
          <div
            className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto ${tech.bgColor} dark:bg-[#00ff00] rounded-lg sm:rounded-xl dark:rounded-none flex items-center justify-center ${tech.color} dark:text-[#000000] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 dark:animate-pulse`}
          >
            {tech.icon}
          </div>
        </div>

        {/* Tech name */}
        <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 dark:text-[#ffffff] mb-2 group-hover:text-[#6693B2] dark:group-hover:text-[#ff00ff] transition-colors duration-300 dark:animate-bounce flex-grow-0">
          {tech.name}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-gray-600 dark:text-[#00ff00] opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0 flex-grow">
          {tech.description}
        </p>
      </div>

      {/* Hover indicator */}
      <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-1/2 transform -translate-x-1/2 w-6 sm:w-8 h-0.5 sm:h-1 bg-[#6693B2] dark:bg-[#ff00ff] rounded-full dark:rounded-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  </motion.div>
);

const TechHighlightCard: React.FC<TechHighlightCardProps> = ({
  count,
  title,
  description,
  bgColor,
  textColor,
  delay,
  animationType,
  animationValue,
}) => (
  <motion.div
    initial={{ opacity: 0, [animationType]: animationValue }}
    whileInView={{ opacity: 1, [animationType]: 0 }}
    transition={{ delay, duration: 0.6 }}
    viewport={{ once: true }}
    className="p-6 bg-[#F1E8DF] dark:bg-black rounded-2xl dark:rounded-none border border-[#A9C8DA] dark:border-[#ff0000] text-center hover:shadow-lg dark:hover:shadow-[#ff0000] transition-all duration-300 dark:animate-pulse"
  >
    <div
      className={`w-12 h-12 ${bgColor} rounded-full dark:rounded-none flex items-center justify-center mx-auto mb-4`}
    >
      <span className={`${textColor} font-bold text-lg`}>{count}</span>
    </div>
    <h4 className="font-semibold text-gray-800 dark:text-[#ffff00] mb-2">
      {title}
    </h4>
    <p className="text-sm text-gray-600 dark:text-[#CFC6BD]">{description}</p>
  </motion.div>
);

const Decorations = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-32 left-16 w-24 h-24 border border-[#A9C8DA] dark:border-[#ff0000] rounded-full dark:rounded-none opacity-20 dark:animate-pulse"></div>
    <div className="absolute bottom-16 right-20 w-32 h-8 bg-[#FFBB94] dark:bg-[#00ff00] opacity-10 rounded-full dark:rounded-none rotate-12 dark:animate-bounce"></div>
    <div className="absolute top-20 right-1/3 w-4 h-4 bg-[#E57986] dark:bg-[#ff00ff] rounded-full dark:rounded-none opacity-40 dark:animate-ping"></div>
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
      <div className="w-2 h-2 bg-[#6693B2] dark:bg-[#00ff00] rounded-full dark:rounded-none dark:animate-ping mr-2"></div>
      <span className="text-sm font-medium text-[#A45F7B] dark:text-[#ff00ff]">
        Technologies & Tools
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
      Tech{" "}
      <span className="text-[#6693B2] dark:text-[#00ffff] relative dark:animate-pulse dark:rounded-none">
        Stack
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
      The modern technologies and frameworks I use to bring ideas to life
    </motion.p>
  </div>
);

const TechStack: React.FC = () => {
  // const [visibleCount, setVisibleCount] = useState(8);
  // const totalTechs = techStackData.length;
  // const categories = [...new Set(techStackData.map((tech) => tech.category))];

  // const handleShowMore = () => {
  //   setVisibleCount((prev) => Math.min(prev + 8, totalTechs));
  // };

  // const handleShowLess = () => {
  //   setVisibleCount(8);
  // };

  // const isInitial = visibleCount <= 8;
  // const isComplete = visibleCount >= totalTechs;

  // const categories = [...new Set(techStackData.map((tech) => tech.category))];

  return (
    <div className="relative">
      <Decorations />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mb-32 relative z-10"
      >
        <SectionHeader />

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-12 sm:mb-16">
          {techStackData.map((tech, index) => (
            // {techStackData.slice(0, visibleCount).map((tech, index) => (
            <TechCard key={tech.name} tech={tech} index={index} />
          ))}
        </div>

        {/* Buttons */}
        {/* <div className="flex justify-center mb-16">
          {!isComplete ? (
            <button
              onClick={handleShowMore}
              className="px-6 py-2 text-sm font-medium text-white bg-[#A45F7B] hover:bg-[#823e5a] rounded-md transition-all"
            >
              See More
            </button>
          ) : !isInitial ? (
            <button
              onClick={handleShowLess}
              className="px-6 py-2 text-sm font-medium text-white bg-[#E57986] hover:bg-[#bb4f5f] rounded-md transition-all"
            >
              Show Less
            </button>
          ) : null}
        </div> */}

        {/* Technology Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Tech stack highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TechHighlightCard
              count="10+"
              title="Core Technologies"
              description="Modern tools for full-stack development"
              bgColor="bg-[#6693B2] dark:bg-[#00ff00]"
              textColor="text-white dark:text-[#000000]"
              delay={0.8}
              animationType="x"
              animationValue={-30}
            />
            <TechHighlightCard
              count="6"
              title="Categories"
              description="Diverse skill set across the stack"
              bgColor="bg-[#E57986] dark:bg-[#00ff00]"
              textColor="text-white dark:text-[#000000]"
              delay={0.9}
              animationType="y"
              animationValue={30}
            />
            <TechHighlightCard
              count="∞"
              title="Always Learning"
              description="Continuously expanding my toolkit"
              bgColor="bg-[#A45F7B] dark:bg-[#00ff00]"
              textColor="text-white dark:text-[#000000]"
              delay={1}
              animationType="x"
              animationValue={30}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TechStack;
