import React, { Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiDownload, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import Link from "next/link";
import ThreeBackground from "./ThreeBackground";
import Lottie from "lottie-react";

const PortfolioHomepage = () => {
  const [isSystemDark, setIsSystemDark] = useState(false);

  const socialLinks = [
    {
      icon: FiGithub,
      href: "https://github.com/WWKMihiranga",
      label: "GitHub",
    },
    {
      icon: FiLinkedin,
      href: "https://www.linkedin.com/in/kavindu-mihiranga-35a28a276",
      label: "LinkedIn",
    },
    {
      icon: FiMail,
      href: "mailto:kavirangot@gmail.com?subject=Hello&body=Hi%20there!",
      label: "Email",
    },
  ];

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 300,
      },
    },
    tap: {
      scale: 0.98,
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "cv.pdf";
    link.click();
  };

  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    const loadAnimation = async () => {
      const res = await fetch("/welcome.json");
      const data = await res.json();
      setAnimationData(data);
    };

    loadAnimation();
  }, []);

  if (!animationData) return <div className="h-[200px]" />;

  return (
    <div className={`min-h-screen`}>
      <ThreeBackground />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <motion.section
          className="min-h-screen flex items-center justify-center px-6 md:pb-8 sm:pb-0 relative overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Hero Content */}
          <div className="text-center max-w-6xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
            >
              {/* Animation Column */}
              <div className="order-1 md:order-1 flex justify-center mt-8 md:mt-0">
                <div className="w-full max-w-[280px] sm:max-w-md">
                  <Suspense fallback={<div className="h-[200px]" />}>
                    <Lottie
                      animationData={animationData}
                      loop
                      autoplay
                      className="w-full h-auto"
                    />
                  </Suspense>
                </div>
              </div>

              {/* Text Content Column */}
              <div className="order-2 md:order-2">
                <motion.div variants={itemVariants} className="mb-10">
                  <h1 className="text-5xl md:text-7xl lg:text-6xl font-extrabold text-[#312E29] dark:text-[#ffff00] mb-6 dark:animate-pulse">
                    Hi, I'm{" "}
                    <span className="text-[#6693B2] dark:text-[#ff0000] px-2 dark:animate-pulse">
                      Kavindu Mihiranga
                    </span>
                  </h1>

                  <p className="text-xl md:text-2xl text-[#A45F7B] dark:text-[#00ffff] font-medium mb-6 max-w-2xl mx-auto dark:animate-bounce">
                    Computer Science Undergraduate
                  </p>

                  <p className="text-lg md:text-xl text-[#6693B2] dark:text-[#ffffff] max-w-3xl mx-auto">
                    Passionate about pushing tech boundaries with intelligent
                    interfaces. Specializing in AI-infused design, smart
                    frontends, and seamless mobile experiences.
                  </p>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-4 px-4 sm:px-0"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-4 sm:px-6 md:px-8 py-3 sm:py-4 bg-[#6693B2] dark:bg-[#ff0000] text-white dark:text-black font-semibold rounded-2xl dark:rounded-none shadow-lg hover:shadow-xl dark:animate-pulse transition-all duration-300 overflow-hidden w-full sm:w-auto"
                    aria-label="Contact me"
                  >
                    <span
                      className="relative z-10 inline-flex items-center gap-2 sm:gap-3 px-1 sm:px-2 py-1 dark:cursor-not-allowed cursor-pointer justify-center text-sm sm:text-base"
                      onClick={handleDownload}
                    >
                      <FiDownload className="w-4 h-4 sm:w-5 sm:h-5" />
                      Download CV
                    </span>
                    <div className="absolute inset-0 bg-[#A45F7B] dark:bg-[#00ff00] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                  </motion.button>

                  <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="inline-flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 md:px-8 py-3 sm:py-4 bg-white dark:bg-black text-[#6693B2] dark:text-[#00ff00] font-semibold rounded-xl dark:rounded-none border-2 border-[#6693B2] dark:border-[#00ff00] hover:bg-[#6693B2] dark:hover:bg-[#00ff00] hover:text-white dark:hover:text-black transition-all duration-200 dark:animate-pulse w-full sm:w-auto text-sm sm:text-base"
                  >
                    <Link href="/contact">
                      <span className="relative z-10 inline-flex items-center gap-2 sm:gap-3 px-1 sm:px-2 py-1">
                        <FiMail className="w-4 h-4 sm:w-5 sm:h-5" />
                        Get In Touch
                      </span>
                    </Link>
                  </motion.button>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <div className="flex gap-3 sm:gap-4 justify-center px-4 sm:px-0 mb-10 sm:mb-6">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        className="p-2 sm:p-3 bg-white dark:bg-black text-[#6693B2] dark:text-[#00ffff] rounded-xl dark:rounded-none border border-[#A9C8DA] dark:border-[#ff00ff] hover:bg-[#A45F7B] hover:text-white hover:dark:border-[#ffffff] dark:hover:text-black dark:hover:bg-white dark:cursor-crosshair dark:animate-spin transition-all duration-200"
                        aria-label={social.label}
                      >
                        <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="w-full flex justify-center mt-6 sm:mt-5 mb-8 sm:mb-0"
            >
              <div className="flex flex-col items-center gap-2">
                <span className="text-sm text-[#A45F7B] dark:text-[#CFC6BD] font-medium">
                  Scroll Down
                </span>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-6 h-10 border-2 border-[#A9C8DA] dark:border-[#A99B8E] rounded-full flex justify-center"
                >
                  <div className="w-1 h-3 bg-[#6693B2] dark:bg-[#CFC6BD] rounded-full mt-2"></div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default PortfolioHomepage;
