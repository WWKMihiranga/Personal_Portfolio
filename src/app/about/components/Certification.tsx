import React, { JSX } from "react";
import { motion } from "framer-motion";
import {
  FaCertificate,
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaIdBadge,
} from "react-icons/fa";
import {
  SiNodedotjs,
  SiPython,
  SiReact,
  SiThreedotjs,
  SiTypescript,
} from "react-icons/si";

// Types
type Certification = {
  title: string;
  issuer: string;
  description: string;
  date: string;
  credentialId?: string;
  techStack?: string[];
  link?: string;
};

type TechIcon = {
  [key: string]: JSX.Element;
};

// Constants
const CERTIFICATIONS: Certification[] = [
  {
    title: "React Developer Certificate",
    issuer: "Meta",
    description:
      "Comprehensive certification covering React fundamentals, hooks, state management, and modern development practices.",
    date: "2024",
    credentialId: "ABC123",
    techStack: ["React", "TypeScript"],
    link: "https://example.com/cert1",
  },
  {
    title: "Node.js Application Developer",
    issuer: "OpenJS Foundation",
    description:
      "Advanced server-side JavaScript development with Node.js, Express, and database integration.",
    date: "2023",
    credentialId: "DEF456",
    techStack: ["Node.js", "TypeScript"],
    link: "https://example.com/cert2",
  },
  {
    title: "Python Programming",
    issuer: "Python Institute",
    description:
      "Core Python programming concepts, data structures, and object-oriented programming principles.",
    date: "2023",
    credentialId: "GHI789",
    techStack: ["Python"],
    link: "https://example.com/cert3",
  },
];

const TECH_ICONS: TechIcon = {
  TypeScript: (
    <SiTypescript className="w-4 h-4 text-[#6693B2] dark:text-[#ff0000]" />
  ),
  React: <SiReact className="w-4 h-4 text-[#6693B2] dark:text-[#00ff00]" />,
  "Node.js": (
    <SiNodedotjs className="w-4 h-4 text-[#6693B2] dark:text-[#ffff00]" />
  ),
  Python: <SiPython className="w-4 h-4 text-[#6693B2] dark:text-[#ff00ff]" />,
  "Three.js": (
    <SiThreedotjs className="w-4 h-4 text-[#6693B2] dark:text-[#00ffff]" />
  ),
};

// Components
const BackgroundDecorations = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-20 left-12 w-20 h-20 border border-[#A9C8DA] dark:border-[#ff0000] rounded-full dark:rounded-none dark:animate-pulse opacity-15"></div>
    <div className="absolute bottom-32 right-16 w-28 h-6 bg-[#FFBB94] dark:bg-[#00ff00] rounded-full dark:rounded-none dark:animate-bounce opacity-8 rotate-45"></div>
    <div className="absolute top-40 right-1/4 w-3 h-3 bg-[#E57986] dark:bg-[#ffffff] rounded-full dark:rounded-none dark:animate-ping opacity-30"></div>
    <div className="absolute bottom-20 left-1/3 w-16 h-16 border-2 border-[#A9C8DA] dark:border-[#ffff00] rounded-2xl dark:rounded-none dark:animate-shake opacity-10 rotate-12"></div>
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
        Professional Credentials
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
        Certifications
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
      The credentials I've earned to validate my skills and knowledge in modern
      technologies
    </motion.p>
  </div>
);

const CertificationCard = ({
  cert,
  index,
}: {
  cert: Certification;
  index: number;
}) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 30, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ delay: index * 0.15, duration: 0.7, ease: "easeOut" }}
    viewport={{ once: true, margin: "-50px" }}
    whileHover={{
      y: -8,
      transition: { duration: 0.3, ease: "easeOut" },
    }}
    className="group"
  >
    <div className="relative bg-white dark:bg-black rounded-xl sm:rounded-2xl lg:rounded-3xl dark:rounded-none border border-[#A9C8DA] dark:border-[#ff0000] hover:border-[#6693B2] dark:hover:border-[#00ff00] transition-all duration-300 shadow-md hover:shadow-xl lg:hover:shadow-2xl overflow-hidden h-full flex flex-col dark:animate-pulse">
      {/* Background pattern */}
      <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 opacity-5 dark:opacity-10">
        <div className="w-full h-full bg-[#6693B2] dark:bg-[#ffff00] rounded-full dark:rounded-none transform translate-x-8 -translate-y-8 dark:animate-spin"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-4 sm:p-6 lg:p-8 flex-1 flex flex-col">
        {/* Header with icon */}
        <div className="flex items-start mb-4 sm:mb-6">
          <div className="flex-shrink-0 mr-3 sm:mr-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-[#F1E8DF] dark:bg-[#ff00ff] rounded-xl sm:rounded-2xl dark:rounded-none flex items-center justify-center text-[#6693B2] dark:text-[#ffffff] group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300 dark:animate-bounce">
              <FaCertificate className="w-6 h-6" />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-[#ff0000] mb-1 group-hover:text-[#6693B2] dark:group-hover:text-[#00ff00] transition-colors duration-300">
              {cert.title}
            </h3>
            <p className="text-xs sm:text-sm font-medium text-[#A45F7B] dark:text-[#ffff00] dark:italic">
              {cert.issuer}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base text-gray-600 dark:text-[#ffffff] mb-4 sm:mb-6 leading-relaxed">
          {cert.description}
        </p>

        {/* Meta information */}
        <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
          <div className="flex items-center text-xs sm:text-sm text-gray-500 dark:text-[#ff00ff]">
            <FaCalendarAlt className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-[#6693B2] dark:text-[#00ffff]" />
            <span className="font-medium">{cert.date}</span>
          </div>
          {cert.credentialId && (
            <div className="flex items-center text-xs sm:text-sm text-gray-500 dark:text-[#ff0000]">
              <FaIdBadge className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-[#6693B2] dark:text-[#ffff00]" />
              <span className="font-mono bg-[#F1E8DF] dark:bg-[#00ff00] px-2 py-0.5 sm:py-1 rounded text-xxs sm:text-xs dark:rounded-none dark:animate-pulse">
                {cert.credentialId}
              </span>
            </div>
          )}
        </div>

        {/* Tech Stack */}
        {cert.techStack && (
          <div className="mb-4 sm:mb-6">
            <h4 className="text-xxs xs:text-xs font-semibold text-[#A45F7B] dark:text-[#ff00ff] mb-2 sm:mb-3 uppercase tracking-wider dark:animate-bounce">
              Skills Covered
            </h4>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {cert.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="flex items-center bg-[#F1E8DF] dark:bg-[#ff0000] px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg sm:rounded-full dark:rounded-none text-xxs xs:text-xs font-medium text-gray-700 dark:text-[#ffffff] border border-[#A9C8DA] dark:border-[#ffff00] hover:bg-[#A9C8DA] dark:hover:bg-[#00ffff] hover:text-white dark:hover:text-black transition-colors duration-200"
                >
                  {TECH_ICONS[tech] && (
                    <span className="mr-1 sm:mr-1.5">{TECH_ICONS[tech]}</span>
                  )}
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer link */}
      {cert.link && (
        <div className="relative z-10 border-t border-[#A9C8DA] dark:border-[#ff00ff] mt-auto">
          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full py-3 sm:py-4 text-xs sm:text-sm text-[#6693B2] dark:text-[#00ffff] font-medium hover:bg-[#F1E8DF] dark:hover:bg-[#ff0000] transition-colors duration-300 group-hover:text-[#A45F7B] dark:group-hover:text-[#ffffff]"
          >
            <span className="mr-1.5 sm:mr-2">View Credential</span>
            <FaExternalLinkAlt className="w-2.5 h-2.5 sm:w-3 sm:h-3 group-hover:translate-x-1 transition-transform duration-300 dark:animate-pulse" />
          </a>
        </div>
      )}

      {/* Hover indicator */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 sm:w-10 lg:w-12 h-0.5 sm:h-1 bg-[#6693B2] dark:bg-[#ff00ff] rounded-t-full dark:rounded-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  </motion.div>
);

const StatsCard = ({
  value,
  title,
  description,
  color,
}: {
  value: React.ReactNode;
  title: string;
  description: string;
  color: string;
}) => (
  <div className="text-center p-6 bg-[#F1E8DF] dark:bg-black rounded-2xl dark:rounded-none border border-[#A9C8DA] dark:border-[#ff0000] dark:animate-pulse transition-all duration-300">
    <div
      className={`w-12 h-12 ${color} rounded-full dark:rounded-none dark:animate-bounce flex items-center justify-center mx-auto mb-4`}
    >
      <span className="text-white dark:text-[#000000] font-bold text-lg">
        {value}
      </span>
    </div>
    <h4 className="font-semibold text-gray-800 dark:text-[#ffff00] mb-2 dark:animate-pulse">
      {title}
    </h4>
    <p className="text-sm text-gray-600 dark:text-[#ffffff] dark:italic">
      {description}
    </p>
  </div>
);

const SummaryStats = () => {
  const uniqueTechCount = [
    ...new Set(CERTIFICATIONS.flatMap((cert) => cert.techStack || [])),
  ].length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      viewport={{ once: true }}
      className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
    >
      <StatsCard
        value={CERTIFICATIONS.length}
        title="Active Certifications"
        description="Verified professional credentials"
        color="bg-[#6693B2] dark:bg-[#ff0000]"
      />
      <StatsCard
        value={uniqueTechCount}
        title="Technologies"
        description="Certified skill areas"
        color="bg-[#E57986] dark:bg-[#00ffff]"
      />
      <StatsCard
        value={new Date().getFullYear()}
        title="Latest Year"
        description="Continuously learning"
        color="bg-[#A45F7B] dark:bg-[#ff00ff]"
      />
    </motion.div>
  );
};

// Main Component
export default function Certification() {
  return (
    <div className="relative">
      <BackgroundDecorations />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="py-20 px-4 relative z-10"
      >
        <SectionHeader />

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATIONS.map((cert, index) => (
            <CertificationCard key={index} cert={cert} index={index} />
          ))}
        </div>

        <SummaryStats />
      </motion.div>
    </div>
  );
}
