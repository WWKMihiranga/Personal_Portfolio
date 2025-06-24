import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaChevronDown,
} from "react-icons/fa";
import { ExperienceCardProps } from "@/lib/experience";

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  item,
  index,
  isExpanded,
  onToggle,
  techIcons,
}) => {
  const isEvenIndex = index % 2 === 0;

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`group bg-white dark:bg-black rounded-xl sm:rounded-2xl lg:rounded-3xl dark:rounded-none shadow-md hover:shadow-xl lg:hover:shadow-2xl dark:shadow-red-800 border border-[#A9C8DA] dark:border-[#ff0000] hover:border-[#6693B2] dark:hover:border-[#00ff00] transition-all duration-300 overflow-hidden ${
        isEvenIndex ? "md:mr-4 lg:mr-8" : "md:ml-4 lg:ml-8"
      }`}
    >
      <div className="p-4 sm:p-6 lg:p-8">
        {/* Header section */}
        <div className={`flex flex-col ${isEvenIndex ? "md:items-end" : ""}`}>
          {/* Job type badge */}
          <div
            className={`inline-flex items-center px-2 py-1 sm:px-3 sm:py-1 rounded-full dark:rounded-none text-xs font-medium dark:font-bold mb-2 sm:mb-3 ${
              isEvenIndex ? "md:self-end" : "md:self-start"
            } ${
              item.type === "Full-time"
                ? "bg-[#6693B2] dark:bg-[#00ffff] text-white dark:text-black dark:animate-pulse"
                : item.type === "Contract"
                ? "bg-[#E57986] dark:bg-[#ff0000] text-white dark:text-[#ffffff] dark:animate-bounce"
                : "bg-[#FFBB94] dark:bg-[#ffff00] text-[#A45F7B] dark:text-[#000000] dark:animate-shake"
            }`}
          >
            {item.type}
          </div>

          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 dark:text-white mb-1 sm:mb-2 group-hover:text-[#6693B2] dark:group-hover:text-[#00ff00] transition-colors duration-300 dark:group-hover:animate-pulse">
            {item.role}
          </h3>

          <div
            className={`flex flex-col ${
              isEvenIndex ? "md:items-end" : ""
            } space-y-1 sm:space-y-2`}
          >
            <div className="flex items-center text-[#A45F7B] dark:text-[#ffffff] dark:font-semibold text-sm sm:text-base">
              <FaBriefcase className="mr-1 sm:mr-2 text-xs sm:text-sm" />
              <span className="font-medium">{item.company}</span>
            </div>
            <div className="flex items-center text-gray-600 dark:text-[#ffffff] text-xs sm:text-sm">
              <FaMapMarkerAlt className="mr-1 sm:mr-2 text-xs sm:text-sm" />
              <span>{item.location}</span>
            </div>
            <div className="flex items-center text-gray-500 dark:text-[#ff00ff] text-xs sm:text-sm dark:animate-pulse">
              <FaCalendarAlt className="mr-1 sm:mr-2 text-xs sm:text-sm" />
              <span>{item.period}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <motion.p
          className={`text-sm sm:text-base text-gray-700 dark:text-[#ffffff] mt-4 sm:mt-6 leading-relaxed ${
            isEvenIndex ? "md:text-right" : ""
          } dark:animate-pulse`}
        >
          {item.description}
        </motion.p>

        {/* Tech stack */}
        {item.techStack && (
          <div
            className={`mt-4 sm:mt-6 flex flex-wrap gap-2 sm:gap-3 ${
              isEvenIndex ? "md:justify-end" : ""
            }`}
          >
            {item.techStack.map((tech, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
                viewport={{ once: true, margin: "-20px" }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="flex items-center bg-[#F1E8DF] dark:bg-black px-3 py-1 sm:px-4 sm:py-2 rounded-full dark:rounded-none text-xs sm:text-sm font-medium dark:font-bold text-[#A45F7B] dark:text-[#ff00ff] border border-[#A9C8DA] dark:border-[#00ff00] hover:bg-[#A9C8DA] dark:hover:bg-[#ff0000] hover:text-white dark:hover:text-[#000000] transition-all duration-300 dark:animate-pulse"
              >
                {techIcons[tech] && (
                  <span className="mr-1 sm:mr-2 text-xs sm:text-sm">
                    {techIcons[tech]}
                  </span>
                )}
                {tech}
              </motion.span>
            ))}
          </div>
        )}

        {/* Expandable accomplishments section */}
        {item.accomplishments && (
          <div className="mt-4 sm:mt-6">
            <motion.button
              onClick={onToggle}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center text-sm sm:text-base text-[#6693B2] dark:text-[#00ffff] font-medium hover:text-[#A45F7B] dark:hover:text-[#ff00ff] transition-colors duration-300 ${
                isEvenIndex ? "md:ml-auto" : ""
              } dark:animate-pulse`}
              aria-expanded={isExpanded}
              aria-controls={`accomplishments-${index}`}
            >
              <span className="mr-1 sm:mr-2">
                {isExpanded ? "Hide" : "View"} Key Achievements
              </span>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaChevronDown className="text-xs sm:text-sm" />
              </motion.div>
            </motion.button>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="overflow-hidden"
                  id={`accomplishments-${index}`}
                >
                  <ul
                    className={`mt-2 sm:mt-4 space-y-2 sm:space-y-3 ${
                      isEvenIndex ? "md:text-right" : ""
                    }`}
                  >
                    {item.accomplishments.map((accomplishment, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: isEvenIndex ? 20 : -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.3 }}
                        className={`flex items-start ${
                          isEvenIndex ? "md:flex-row-reverse md:text-right" : ""
                        }dark:animate-puls`}
                      >
                        <span
                          className={`text-[#E57986] dark:text-[#ff0000] font-bold text-lg ${
                            isEvenIndex ? "md:ml-3" : "mr-3"
                          } mt-0.5 dark:animate-ping`}
                        >
                          •
                        </span>
                        <span className="text-gray-700 dark:text-white leading-relaxed">
                          {accomplishment}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Bottom accent line */}
      <div className="h-0.5 sm:h-1 bg-gradient-to-r from-[#6693B2] via-[#E57986] to-[#A45F7B] dark:from-[#ff00ff] dark:via-[#00ff00] dark:to-[#ff0000] opacity-0 group-hover:opacity-100 transition-opacity duration-300 dark:animate-pulse"></div>
    </motion.div>
  );
};

export default ExperienceCard;
