import React from "react";
import { motion } from "framer-motion";

interface ExperienceSummaryCardProps {
  value: string | number;
  title: string;
  description: string;
  color: string;
  darkColor: string;
  delay: number;
  direction?: "x" | "y";
  xDirection?: number;
}

const ExperienceSummaryCard: React.FC<ExperienceSummaryCardProps> = ({
  value,
  title,
  description,
  color,
  darkColor,
  delay,
  direction = "y",
  xDirection = 0,
}) => (
  <motion.div
    initial={{ opacity: 0, [direction]: xDirection !== 0 ? xDirection : 30 }}
    whileInView={{ opacity: 1, [direction]: 0 }}
    transition={{ delay, duration: 0.6 }}
    viewport={{ once: true }}
    whileHover={{ y: -5, scale: 1.02 }}
    className="p-6 bg-[#F1E8DF] dark:bg-black rounded-2xl dark:rounded-none border border-[#A9C8DA] dark:border-[#ff0000] text-center hover:shadow-lg dark:hover:shadow-[#ff0000] transition-all duration-300 dark:animate-pulse"
  >
    <div
      className={`w-12 h-12 ${color} ${darkColor} rounded-full dark:rounded-none flex items-center justify-center mx-auto mb-4 dark:animate-spin-slow`}
    >
      <span className="text-white dark:text-[#000000] font-bold dark:font-extrabold text-lg">
        {value}
      </span>
    </div>
    <h4 className="font-semibold text-gray-800 dark:text-white mb-2 dark:animate-bounce">
      {title}
    </h4>
    <p className="text-sm text-gray-600 dark:text-[#ff00ff] dark:font-semibold">
      {description}
    </p>
  </motion.div>
);

export default ExperienceSummaryCard;
