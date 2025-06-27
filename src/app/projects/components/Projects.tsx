"use client";

import { projects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiFilter } from "react-icons/fi";
import BackgroundDecorations from "./BackgroundDecorations";
import ProjectHeader from "./ProjectHeader";
import FilterTabs from "./FilterTabs";
import { Filters } from "./FilterTabs";
import ProjectGrids from "./ProjectGrids";
import ProjectsStats from "./ProjectsStats";
import GitHub from "./GitHub";
import ThreeBackground from "@/components/ThreeBackground";
import { useState } from "react";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState(0);
  return (
    <div className="relative">
      <ThreeBackground />
      <BackgroundDecorations />

      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <ProjectHeader />
          <FilterTabs
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />
          <ProjectGrids activeFilter={activeFilter} />
          <ProjectsStats />
          <GitHub />
        </div>
      </section>
    </div>
  );
}
