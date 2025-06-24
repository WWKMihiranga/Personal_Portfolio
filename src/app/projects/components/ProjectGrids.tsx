import { projects } from "@/lib/projects";
import { motion } from "framer-motion";
import React from "react";
import ProjectCard from "./ProjectCard";
import { useFilters } from "./FilterTabs";
import { techFilters } from "./FilterTabs";

interface ProjectGridsProps {
  activeFilter: number;
}

export default function ProjectGrids({ activeFilter }: ProjectGridsProps) {
  // Get the filter name from the active index
  const activeFilterName = techFilters[activeFilter].name;

  // Filter projects based on the active filter
  const filteredProjects =
    activeFilterName === "All"
      ? projects
      : projects.filter((project) => project.tech.includes(activeFilterName));

  return (
    <div>
      {/* Projects Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16"
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              delay: index * 0.1,
              duration: 0.6,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
