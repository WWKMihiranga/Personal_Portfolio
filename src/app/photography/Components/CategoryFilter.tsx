import React from "react";
import { motion } from "framer-motion";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      viewport={{ once: true }}
      className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-2 sm:px-0"
    >
      {categories.map((category, index) => (
        <motion.button
          key={category}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1, duration: 0.4 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onSelectCategory(category)}
          className={`group relative flex items-center px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 rounded-xl sm:rounded-2xl dark:rounded-none border transition-all duration-300 font-medium text-sm sm:text-base ${
            selectedCategory === category
              ? "bg-[#6693B2] dark:bg-[#ff0000] text-white dark:text-black border-[#6693B2] dark:border-[#ffffff] shadow-lg dark:shadow-white dark:animate-bounce"
              : "bg-white dark:bg-black text-gray-700 dark:text-[#ffffff] border-[#A9C8DA] dark:border-[#ff00ff] hover:border-[#6693B2] dark:hover:border-[#00ff00] hover:bg-[#F1E8DF] dark:hover:bg-[#ff0000] shadow-md hover:shadow-lg dark:hover:shadow-red-700"
          }`}
          aria-label={`Filter by ${category}`}
          aria-pressed={selectedCategory === category}
        >
          {selectedCategory === category && (
            <motion.div
              layoutId="selectedCategory"
              className="absolute inset-0 bg-[#6693B2] dark:bg-[#00ff00] rounded-2xl dark:rounded-none"
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
              }}
            />
          )}
          <div className="relative z-10 flex items-center cursor-pointer">
            <span
              className={`mr-1 sm:mr-2 transition-transform duration-300 ${
                selectedCategory === category
                  ? "scale-110 dark:animate-spin-slow"
                  : "group-hover:scale-105 dark:group-hover:animate-ping"
              }`}
            ></span>

            {category}
          </div>
          {/* {category} */}
          <div
            className={`absolute bottom-0.5 sm:bottom-1 left-1/2 transform -translate-x-1/2 w-3 sm:w-4 h-0.5 bg-[#6693B2] dark:bg-[#ff00ff] rounded-full dark:rounded-none transition-opacity duration-300 ${
              selectedCategory === category
                ? "opacity-0"
                : "opacity-0 group-hover:opacity-100"
            }`}
          ></div>
        </motion.button>
      ))}
    </motion.div>
  );
}
