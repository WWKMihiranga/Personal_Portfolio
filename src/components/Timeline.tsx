"use client";
import { motion } from "framer-motion";
import { EXPERIENCE_DATA } from "@/lib/experience";
import {
  FiExternalLink,
  FiMapPin,
  FiCalendar,
  FiAward,
  FiCode,
  FiTrendingUp,
  FiUsers,
  FiTarget,
} from "react-icons/fi";
import { useInView } from "react-intersection-observer";
import DiaryPhoto from "./DiaryPhotoProps";
import { useRef, useState, useLayoutEffect } from "react";

export default function Timeline() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedFilter, setSelectedFilter] = useState("All");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const isEducation = (role: string) =>
    role.includes("BSc") ||
    role.toLowerCase().includes("student") ||
    role.toLowerCase().includes("education");

  const photoRef = useRef<HTMLDivElement>(null);
  const [shouldShowPhoto, setShouldShowPhoto] = useState(true);

  useLayoutEffect(() => {
    const photo = photoRef.current;
    if (photo) {
      const rect = photo.getBoundingClientRect();
      const isOverflowing = rect.right > window.innerWidth || rect.left < 0;
      setShouldShowPhoto(!isOverflowing);
    }
  }, []);

  const experienceCategories = ["All", "Work", "Education", "Projects"];
  const filteredExperience =
    selectedFilter === "All"
      ? EXPERIENCE_DATA
      : EXPERIENCE_DATA.filter((item) => {
          if (selectedFilter === "Education") return isEducation(item.role);
          if (selectedFilter === "Work") return !isEducation(item.role);
          return true;
        });

  const totalExperience = EXPERIENCE_DATA.length;
  const workExperience = EXPERIENCE_DATA.filter(
    (item) => !isEducation(item.role)
  ).length;
  const educationItems = EXPERIENCE_DATA.filter((item) =>
    isEducation(item.role)
  ).length;

  return (
    <div className="relative min-h-screen bg-white dark:bg-[#312E29]">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-16 w-24 h-24 border border-[#A9C8DA] dark:border-[#6C3B3F] rounded-full opacity-20"></div>
        <div className="absolute bottom-16 right-20 w-32 h-8 bg-[#FFBB94] dark:bg-[#A99B8E] opacity-10 rounded-full rotate-12"></div>
        <div className="absolute top-20 right-1/3 w-4 h-4 bg-[#E57986] dark:bg-[#6C3B3F] rounded-full opacity-40"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-[#A9C8DA] dark:border-[#6C3B3F] rounded-full opacity-15"></div>
      </div>

      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            ref={ref}
            className="text-center mb-20"
          >
            {/* Section Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-[#F1E8DF] dark:bg-[#312E29] border border-[#A9C8DA] dark:border-[#6C3B3F] mb-6"
            >
              <div className="w-2 h-2 bg-[#6693B2] dark:bg-[#A99B8E] rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm font-medium text-[#A45F7B] dark:text-[#CFC6BD]">
                Professional Journey
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-[#EEEAE1] mb-4"
            >
              Experience{" "}
              <span className="text-[#6693B2] dark:text-[#A99B8E] relative">
                Timeline
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="absolute bottom-1 left-0 right-0 h-1 bg-[#E57986] dark:bg-[#6C3B3F] origin-left"
                ></motion.div>
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 dark:text-[#CFC6BD] max-w-2xl mx-auto"
            >
              My career path and the valuable experiences I've gained along the
              way
            </motion.p>
          </motion.div>

          {/* Filter Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {experienceCategories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedFilter(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 border-2 ${
                  selectedFilter === category
                    ? "bg-[#6693B2] dark:bg-[#A99B8E] text-white dark:text-[#312E29] border-[#6693B2] dark:border-[#A99B8E] shadow-lg"
                    : "bg-[#F1E8DF] dark:bg-[#312E29] text-[#A45F7B] dark:text-[#CFC6BD] border-[#A9C8DA] dark:border-[#6C3B3F] hover:bg-[#A9C8DA] dark:hover:bg-[#6C3B3F]"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Statistics Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
          >
            <div className="p-6 bg-[#F1E8DF] dark:bg-[#312E29] rounded-2xl border border-[#A9C8DA] dark:border-[#6C3B3F] text-center">
              <div className="w-12 h-12 bg-[#6693B2] dark:bg-[#A99B8E] rounded-full flex items-center justify-center mx-auto mb-4">
                <FiTrendingUp className="w-6 h-6 text-white dark:text-[#312E29]" />
              </div>
              <h4 className="font-semibold text-gray-800 dark:text-[#EEEAE1] mb-2">
                Total Experience
              </h4>
              <p className="text-2xl font-bold text-[#6693B2] dark:text-[#A99B8E]">
                {totalExperience}
              </p>
            </div>

            <div className="p-6 bg-[#F1E8DF] dark:bg-[#312E29] rounded-2xl border border-[#A9C8DA] dark:border-[#6C3B3F] text-center">
              <div className="w-12 h-12 bg-[#E57986] dark:bg-[#6C3B3F] rounded-full flex items-center justify-center mx-auto mb-4">
                <FiUsers className="w-6 h-6 text-white dark:text-[#EEEAE1]" />
              </div>
              <h4 className="font-semibold text-gray-800 dark:text-[#EEEAE1] mb-2">
                Work Experience
              </h4>
              <p className="text-2xl font-bold text-[#E57986] dark:text-[#6C3B3F]">
                {workExperience}
              </p>
            </div>

            <div className="p-6 bg-[#F1E8DF] dark:bg-[#312E29] rounded-2xl border border-[#A9C8DA] dark:border-[#6C3B3F] text-center">
              <div className="w-12 h-12 bg-[#A45F7B] dark:bg-[#A99B8E] rounded-full flex items-center justify-center mx-auto mb-4">
                <FiTarget className="w-6 h-6 text-white dark:text-[#312E29]" />
              </div>
              <h4 className="font-semibold text-gray-800 dark:text-[#EEEAE1] mb-2">
                Education
              </h4>
              <p className="text-2xl font-bold text-[#A45F7B] dark:text-[#A99B8E]">
                {educationItems}
              </p>
            </div>
          </motion.div>

          <div className="relative">
            {/* Timeline line with animated progress */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 transform -translate-x-1/2 overflow-hidden rounded-full bg-[#A9C8DA] dark:bg-[#6C3B3F] opacity-30">
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="w-full rounded-full bg-[#6693B2] dark:bg-[#A99B8E]"
              />
            </div>

            {filteredExperience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className={`relative mb-16 last:mb-0 ${
                  index % 2 === 0
                    ? "md:pr-12 md:text-right md:flex md:justify-end"
                    : "md:pl-12 md:text-left"
                }`}
              >
                {/* Photo Component */}
                {shouldShowPhoto && item.image && (
                  <div ref={photoRef}>
                    <DiaryPhoto
                      image={item.image}
                      alt={item.company}
                      index={index}
                    />
                  </div>
                )}

                {/* Timeline dot with pulse animation */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  className="absolute left-6 md:left-1/2 w-6 h-6 rounded-full border-4 border-white dark:border-[#312E29] transform -translate-x-1/2 z-20 shadow-lg"
                  style={{
                    backgroundColor: isEducation(item.role)
                      ? "#6693B2"
                      : "#E57986",
                  }}
                >
                  {/* Pulse animation */}
                  <motion.div
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 rounded-full opacity-30"
                    style={{
                      backgroundColor: isEducation(item.role)
                        ? "#6693B2"
                        : "#E57986",
                    }}
                  />

                  {/* Inner dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.6 }}
                    className="absolute inset-1 rounded-full bg-white dark:bg-[#312E29]"
                  />
                </motion.div>

                {/* Experience card with enhanced styling */}
                <motion.div
                  whileHover={{
                    scale: 1.02,
                    y: -8,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className={`mt-12 md:mt-0 ml-16 md:ml-0 ${
                    index % 2 === 0 ? "md:max-w-lg" : "md:max-w-lg"
                  }`}
                >
                  <div className="relative bg-white dark:bg-[#312E29] p-8 rounded-3xl shadow-xl border-2 border-[#A9C8DA] dark:border-[#6C3B3F] hover:border-[#6693B2] dark:hover:border-[#A99B8E] transition-all duration-300 hover:shadow-2xl overflow-hidden group">
                    {/* Background gradient effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#F1E8DF] dark:to-[#6C3B3F] opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>

                    {/* Decorative corner accent */}
                    <div
                      className="absolute top-0 right-0 w-20 h-20 transform translate-x-10 -translate-y-10 rotate-45 opacity-20 transition-opacity duration-300 group-hover:opacity-40"
                      style={{
                        backgroundColor: isEducation(item.role)
                          ? "#6693B2"
                          : "#E57986",
                      }}
                    />

                    {/* Date badge */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                      className="absolute top-4 right-4 z-10"
                    >
                      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#F1E8DF] dark:bg-[#6C3B3F] border border-[#A9C8DA] dark:border-[#A99B8E] text-sm font-semibold">
                        <FiCalendar className="w-3 h-3 text-[#6693B2] dark:text-[#A99B8E]" />
                        <span className="text-[#A45F7B] dark:text-[#CFC6BD]">
                          {item.period}
                        </span>
                      </div>
                    </motion.div>

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Role and Company Header */}
                      <div className="flex items-start gap-3 mb-6">
                        <div
                          className={`p-2 rounded-xl ${
                            isEducation(item.role)
                              ? "bg-[#6693B2] dark:bg-[#A99B8E]"
                              : "bg-[#E57986] dark:bg-[#6C3B3F]"
                          }`}
                        >
                          {isEducation(item.role) ? (
                            <FiAward className="w-5 h-5 text-white dark:text-[#312E29]" />
                          ) : (
                            <FiCode className="w-5 h-5 text-white dark:text-[#EEEAE1]" />
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-800 dark:text-[#EEEAE1] group-hover:text-[#6693B2] dark:group-hover:text-[#A99B8E] transition-colors duration-300">
                            {item.role}
                          </h3>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                            <span className="font-semibold text-[#6693B2] dark:text-[#A99B8E]">
                              {item.company}
                            </span>
                            <div className="flex items-center gap-1 text-gray-600 dark:text-[#CFC6BD]">
                              <FiMapPin className="w-4 h-4" />
                              <span className="text-sm">{item.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-base leading-relaxed mb-6 text-gray-600 dark:text-[#CFC6BD]">
                        {item.description}
                      </p>

                      {/* Accomplishments */}
                      {item.accomplishments && (
                        <div className="mb-6">
                          <h4 className="text-lg font-bold mb-4 text-gray-800 dark:text-[#EEEAE1]">
                            Key Achievements
                          </h4>
                          <div className="space-y-3">
                            {item.accomplishments.map((accomplishment, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="flex items-start gap-3"
                              >
                                <div className="flex-shrink-0 w-2 h-2 rounded-full mt-2 bg-[#E57986] dark:bg-[#6C3B3F]" />
                                <span className="text-sm leading-relaxed text-gray-600 dark:text-[#CFC6BD]">
                                  {accomplishment}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Tech stack */}
                      {item.techStack && (
                        <div>
                          <h4 className="text-lg font-bold mb-4 text-gray-800 dark:text-[#EEEAE1]">
                            Technologies
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {item.techStack.map((tech, i) => (
                              <motion.span
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3, delay: i * 0.05 }}
                                className="px-3 py-1 rounded-full text-sm font-medium border-2 transition-all duration-200 bg-[#F1E8DF] dark:bg-[#6C3B3F] border-[#A9C8DA] dark:border-[#A99B8E] text-[#A45F7B] dark:text-[#CFC6BD] hover:bg-[#A9C8DA] dark:hover:bg-[#A99B8E] hover:text-white dark:hover:text-[#312E29]"
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Hover indicator */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-[#6693B2] dark:bg-[#A99B8E] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}

            {/* Timeline end indicator */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute bottom-0 left-6 md:left-1/2 w-4 h-4 rounded-full transform -translate-x-1/2 border-4 border-white dark:border-[#312E29] shadow-lg z-20 bg-gray-800 dark:bg-[#EEEAE1]"
            />
          </div>

          {/* Bottom accent */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-16"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#A9C8DA] dark:border-[#6C3B3F] bg-[#F1E8DF] dark:bg-[#312E29] text-[#6693B2] dark:text-[#A99B8E]">
              <span className="text-sm font-medium">Journey continues...</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <FiTrendingUp className="w-4 h-4" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
