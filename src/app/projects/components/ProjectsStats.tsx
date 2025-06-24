import { projects } from "@/lib/projects";
import { motion } from "framer-motion";
import React from "react";
import { Filters } from "./FilterTabs";
import { FiGithub } from "react-icons/fi";

export default function ProjectsStats() {
  return (
    <div>
      {/* Projects Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
      >
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="p-6 bg-[#F1E8DF] dark:bg-black rounded-2xl dark:rounded-none border border-[#A9C8DA] dark:border-[#ff0000] text-center dark:shadow-red-700 dark:animate-pulse"
        >
          <div className="w-12 h-12 bg-[#6693B2] dark:bg-[#00ff00] rounded-full dark:rounded-none flex items-center justify-center mx-auto mb-4 dark:animate-spin-slow">
            <span className="text-white dark:text-black font-bold dark:font-extrabold text-lg">
              {projects.length}
            </span>
          </div>
          <h3 className="font-semibold text-gray-800 dark:text-white mb-2 dark:animate-bounce">
            Total Projects
          </h3>
          <p className="text-sm text-gray-600 dark:text-[#ff00ff] dark:font-medium">
            Completed and deployed
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="p-6 bg-[#F1E8DF] dark:bg-black rounded-2xl dark:rounded-none border border-[#A9C8DA] dark:border-[#ffff00] text-center dark:animate-shake"
        >
          <div className="w-12 h-12 bg-[#E57986] dark:bg-[#ff0000] rounded-full dark:rounded-none flex items-center justify-center mx-auto mb-4 dark:animate-pulse">
            <span className="text-white dark:text-white font-bold dark:font-extrabold text-lg">
              {Filters - 1}
            </span>
          </div>
          <h3 className="font-semibold text-gray-800 dark:text-white mb-2 dark:animate-bounce">
            Technologies
          </h3>
          <p className="text-sm text-gray-600 dark:text-[#00ffff] dark:font-medium">
            Modern tech stack
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="p-6 bg-[#F1E8DF] dark:bg-black rounded-2xl dark:rounded-none border border-[#A9C8DA] dark:border-[#ff00ff] text-center dark:animate-pulse"
        >
          <div className="w-12 h-12 bg-[#A45F7B] dark:bg-[#00ffff] rounded-full dark:rounded-none flex items-center justify-center mx-auto mb-4 dark:animate-puls">
            <FiGithub className="text-white dark:text-[#312E29] w-6 h-6" />
          </div>
          <h3 className="font-semibold text-gray-800 dark:text-white mb-2 dark:animate-bounce">
            Open Source
          </h3>
          <p className="text-sm text-gray-600 dark:text-[#00ff00] dark:font-medium">
            Available on GitHub
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
