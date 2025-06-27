import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const BackgroundPattern = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-20 right-10 w-32 h-32 border border-gray-200 dark:border-[#ff0000] rounded-full dark:rounded-none opacity-30 dark:animate-pulse" />
    <div className="absolute bottom-40 left-20 w-24 h-24 bg-[#A9C8DA] dark:bg-[#00ff00] opacity-6 rounded-lg dark:rounded-none rotate-45 dark:animate-bounce" />
    <div className="absolute top-60 left-1/4 w-16 h-16 border-2 border-[#6693B2] dark:border-[#ff00ff] opacity-40 rotate-12 dark:rounded-none dark:animate-spin" />
  </div>
);

// Profile Image Component
const ProfileImage = () => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
    className="lg:w-2/5 flex justify-center lg:justify-start w-full"
  >
    <div className="relative group">
      <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl dark:rounded-none overflow-hidden shadow-xl border border-[#A9C8DA] dark:border-[#ff00ff] bg-[#F1E8DF] dark:bg-black dark:animate-pulse">
        <div className="w-full h-full flex items-center justify-center relative">
          <div className="text-center">
            <Image
              src="/Me.jpg"
              alt="Profile photo"
              fill
              className="object-cover transition-transform duration-2000 ease-in-out group-hover:scale-120"
              priority
            />
          </div>
        </div>
      </div>
      <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#FFBB94] dark:bg-[#ff00ff] rounded-full dark:rounded-none opacity-80 dark:animate-ping" />
      <div className="absolute -bottom-6 -left-6 w-12 h-12 border-2 border-[#E57986] dark:border-[#ff0000] rounded-full dark:rounded-none opacity-60 dark:animate-bounce" />
    </div>
  </motion.div>
);

const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "/cv.pdf";
  link.download = "cv.pdf";
  link.click();
};

// Bio Content Component
const BioContent = () => {
  const bioItems = [
    {
      content: (
        <>
          I'm a Computer Science undergraduate driven by a deep curiosity in
          <span className="font-semibold text-[#A45F7B] dark:text-[#ff0000] dark:animate-pulse">
            {" "}
            AI, machine learning
          </span>
          ,
          <span className="font-semibold text-[#E57986] dark:text-[#ff00ff] dark:animate-pulse">
            {" "}
            mobile
          </span>
          , and
          <span className="font-semibold text-[#6693B2] dark:text-[#00ffff] dark:animate-pulse">
            {" "}
            front-end
          </span>{" "}
          innovation. Since creating my first website at 15, I've loved crafting
          intuitive, performant, and visually striking user experiences.
        </>
      ),
      className:
        "p-4 sm:p-6 bg-[#F1E8DF] dark:bg-black rounded-xl sm:rounded-2xl dark:rounded-none border border-[#A9C8DA] dark:border-[#ff0000] dark:animate-pulse",
      delay: 0.3,
    },
    {
      content: (
        <>
          Right now, I'm exploring
          <span className="font-semibold text-[#A45F7B] dark:text-[#ff0000] dark:animate-pulse">
            {" "}
            machine learning models
          </span>
          , AI-driven apps, and mobile development with
          <span className="font-semibold text-[#E57986] dark:text-[#ff00ff] dark:animate-pulse">
            {" "}
            Flutter
          </span>
          {" - "}
          while sharpening my frontend stack with
          <span className="font-semibold text-[#6693B2] dark:text-[#00ffcc] dark:animate-pulse">
            {" "}
            Next.js
          </span>{" "}
          and
          <span className="font-semibold text-[#6693B2] dark:text-[#00ffcc] dark:animate-pulse">
            {" "}
            TypeScript
          </span>
          {"."}
        </>
      ),
      className:
        "p-4 sm:p-6 bg-white dark:bg-[#000000] rounded-xl sm:rounded-2xl dark:rounded-none border border-[#A9C8DA] dark:border-[#00ff00] shadow-sm dark:shadow-[0_0_20px_#00ff00]",
      delay: 0.4,
    },
    {
      content:
        "Outside coding, I contribute to open-source, follow cutting-edge UX trends, and tinker with AI experiments and mobile UI concepts.",
      className:
        "flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-[#F1E8DF] dark:bg-[#0a0a0a] rounded-xl sm:rounded-2xl dark:rounded-none border border-[#FFBB94] dark:border-[#ff00ff] dark:animate-pulse",
      delay: 0.5,
      withIcon: true,
    },
  ];

  return (
    <div className="space-y-4 sm:space-y-6">
      {bioItems.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: item.delay, duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className={item.className}
        >
          {item.withIcon && (
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#FFBB94] dark:bg-[#ff00ff] rounded-full dark:rounded-none flex-shrink-0 flex items-center justify-center dark:animate-ping">
              <div className="w-2 h-2 bg-white dark:bg-[#000000] rounded-full dark:rounded-none" />
            </div>
          )}
          <p className="text-base sm:text-lg text-gray-700 dark:text-[#ffffff] leading-relaxed">
            {item.content}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

// CallToAction Component
const CallToAction = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.6, duration: 0.6 }}
    viewport={{ once: true }}
    className="pt-6 w-full"
  >
    <div className="flex flex-wrap gap-3 sm:gap-4 justify-center sm:justify-start">
      <Link href="/projects" className="w-full sm:w-auto">
        <button className="w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 bg-[#6693B2] dark:bg-[#ff00ff] text-white dark:text-[#ffffff] rounded-full dark:rounded-none font-medium hover:bg-[#A45F7B] dark:hover:bg-[#00ff00] dark:hover:text-[#ff00ff] transition-colors duration-300 shadow-lg dark:animate-pulse cursor-pointer text-sm sm:text-base">
          View My Work
        </button>
      </Link>
      <button
        className="w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 border-2 border-[#A9C8DA] dark:border-[#ff0000] text-[#6693B2] dark:text-[#00ffff] rounded-full dark:rounded-none font-medium hover:bg-[#F1E8DF] dark:hover:bg-[#000000] hover:text-[#A45F7B] dark:hover:text-[#ff00ff] transition-colors duration-300 dark:animate-pulse cursor-pointer text-sm sm:text-base"
        onClick={handleDownload}
      >
        Download Resume
      </button>
    </div>
  </motion.div>
);

// Main HeroSection Component
export default function HeroSection() {
  return (
    <div className="relative">
      <BackgroundPattern />

      {/* Hero section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-24 relative z-10"
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
            Available for opportunities
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
          About{" "}
          <span className="text-[#6693B2] dark:text-[#00ffff] relative dark:animate-pulse dark:rounded-none">
            Me
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
          Computer Science undergraduate passionate about crafting
          <span className="font-medium text-[#A45F7B] dark:text-[#A99B8E]">
            {" "}
            beautiful
          </span>
          ,
          <span className="font-medium text-[#E57986] dark:text-[#6C3B3F]">
            {" "}
            functional
          </span>{" "}
          digital experiences.
        </motion.p>
      </motion.section>

      {/* Profile section */}
      <div className="flex flex-col lg:flex-row gap-16 items-start mb-32">
        <div className="lg:w-2/5 flex flex-col items-center lg:items-start w-full">
          <ProfileImage />
          <div className="w-full flex justify-center lg:justify-start pt-8">
            <CallToAction />
          </div>
        </div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="lg:w-3/5 space-y-8"
        >
          {/* Section header */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-1 bg-[#6693B2] dark:bg-[#A99B8E] dark:animate-pulse" />
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-[#EEEAE1]">
                Who am I?
              </h2>
            </motion.div>
          </div>

          <BioContent />
        </motion.div>
      </div>
    </div>
  );
}
