import { motion } from "framer-motion";
import React from "react";

export default function ProjectHeader() {
  return (
    <div>
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
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
            Featured Work
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
          className="text-lg text-gray-600 dark:text-[#ffffff] max-w-2xl mx-auto dark:animate-pulse"
        >
          A collection of my work showcasing modern web development with
          cutting-edge technologies
        </motion.p>
      </motion.div>
    </div>
  );
}
