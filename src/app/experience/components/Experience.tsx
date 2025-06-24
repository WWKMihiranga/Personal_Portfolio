"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { EXPERIENCE_DATA } from "@/lib/experience";
import { TECH_ICONS } from "./TimelineDot";
import BackgroundDecorations from "./BackgroundDecorations";
import SectionHeader from "./SectionHeader";
import FilterTabs from "./FilterTabs";
import Timeline from "./TimelineDot";
import ExperienceSummaryCard from "./ExperienceSummary";
import ThreeBackground from "@/components/ThreeBackground";
export { EXPERIENCE_DATA, EXPERIENCE_TYPES } from "@/lib/experience";
export { TECH_ICONS } from "./TimelineDot";

export default function Experience() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filteredExperience =
    activeFilter === "All"
      ? EXPERIENCE_DATA
      : EXPERIENCE_DATA.filter((exp) => exp.type === activeFilter);

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <div className="relative">
      <ThreeBackground />
      <BackgroundDecorations />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10"
      >
        <SectionHeader />
        <FilterTabs
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
        <Timeline
          filteredExperience={filteredExperience}
          expandedCard={expandedCard}
          toggleCard={toggleCard}
          techIcons={TECH_ICONS}
        />

        {/* Experience Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ExperienceSummaryCard
              value={EXPERIENCE_DATA.length}
              title="Total Positions"
              description="Professional roles across different companies"
              color="bg-[#6693B2]"
              darkColor="dark:bg-[#A99B8E]"
              delay={0.9}
              direction="x"
              xDirection={-30}
            />

            <ExperienceSummaryCard
              value={
                [
                  ...new Set(
                    EXPERIENCE_DATA.flatMap((exp) => exp.techStack || [])
                  ),
                ].length
              }
              title="Technologies Used"
              description="Different tech stacks mastered"
              color="bg-[#E57986]"
              darkColor="dark:bg-[#6C3B3F]"
              delay={1}
            />

            <ExperienceSummaryCard
              value="2+"
              title="Years Experience"
              description="Continuous professional growth"
              color="bg-[#A45F7B]"
              darkColor="dark:bg-[#A99B8E]"
              delay={1.1}
              direction="x"
              xDirection={30}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
