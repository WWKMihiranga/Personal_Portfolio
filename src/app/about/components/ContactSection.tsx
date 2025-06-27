import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaArrowRight,
  FaCode,
  FaHeart,
} from "react-icons/fa";

// Animation configurations
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6 },
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6 },
};

const fadeInUpDelayed = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6 },
});

interface ContactCardProps {
  icon: IconType;
  title: string;
  description: string;
  link: string;
  lable: String;
  delay: number;
}

// Reusable Contact Card Component
const ContactCard = ({
  icon: Icon,
  title,
  description,
  link,
  lable,
  delay,
}: ContactCardProps) => {
  const handleClick = () => {
    if (!link) return;

    if (link.startsWith("mailto:")) {
      window.location.href = link;
    } else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(link)) {
      window.location.href = `mailto:${link}`;
    } else {
      window.open(link, "_blank");
    }
  };
  return (
    <motion.div
      {...fadeInUpDelayed(delay)}
      viewport={{ once: true }}
      className="group"
    >
      <div className="bg-white dark:bg-black p-8 rounded-3xl dark:rounded-none border border-[#A9C8DA] dark:border-[#ff0000] hover:border-[#6693B2] dark:hover:border-[#00ff00] transition-all duration-300 shadow-lg hover:shadow-xl text-center group-hover:scale-105 dark:animate-shake">
        <div className="w-16 h-16 bg-[#A9C8DA] dark:bg-[#00ffff] rounded-2xl dark:rounded-none flex items-center justify-center mx-auto mb-6 group-hover:scale-110  transition-all duration-300 group-hover:rotate-6 dark:animate-bounce">
          <Icon className="w-8 h-8 text-[#6693B2] dark:text-[#ff00ff]" />
        </div>

        <h3 className="text-xl font-semibold text-gray-800 dark:text-[#ffff00] mb-3 dark:animate-pulse">
          {title}
        </h3>

        <p className="text-gray-600 dark:text-[#ffffff] mb-4">{description}</p>

        <span
          onClick={handleClick}
          className="text-[#6693B2] dark:text-[#ff0000] font-medium hover:underline cursor-pointer dark:hover:text-[#ffffff]"
        >
          {lable}
        </span>
      </div>
    </motion.div>
  );
};

const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "/cv.pdf";
  link.download = "cv.pdf";
  link.click();
};

// Decorative Background Elements
const DecorativeElements = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-20 left-10 w-32 h-32 border-2 border-[#A9C8DA] dark:border-[#ff0000] rounded-full dark:rounded-none opacity-20 dark:animate-pulse"></div>

    <div className="absolute bottom-10 right-20 w-24 h-24 bg-[#FFBB94] dark:bg-[#00ff00] opacity-15 rounded-lg dark:rounded-none rotate-45 dark:animate-bounce"></div>

    <div className="absolute top-32 right-1/4 w-6 h-6 bg-[#E57986] dark:bg-[#ffff00] rounded-full dark:rounded-none opacity-40 dark:animate-spin"></div>

    <div className="absolute bottom-40 left-1/3 w-16 h-4 bg-[#A9C8DA] dark:bg-[#00ffff] opacity-20 rounded-full dark:rounded-none rotate-12 dark:animate-shake"></div>
  </div>
);

// Main Contact Section Component
export default function ContactSection() {
  const contactMethods = [
    {
      icon: FaEnvelope,
      title: "Email",
      description: "Drop me a line anytime",
      link: "mailto:kavirangot@gmail.com?subject=Hello&body=Hi%20there!",
      lable: "kavirangot@gmail.com",
      delay: 0.5,
    },
    {
      icon: FaLinkedin,
      title: "LinkedIn",
      description: "Let's connect professionally",
      link: "https://www.linkedin.com/in/kavindu-mihiranga-35a28a276",
      lable: "linkedin.com/in/kavindu-mihiranga",
      delay: 0.6,
    },
    {
      icon: FaGithub,
      title: "GitHub",
      description: "Check out my projects",
      link: "https://github.com/WWKMihiranga",
      lable: "github.com/WWKMihiranga",
      delay: 0.7,
    },
  ];

  return (
    <div className="relative">
      <DecorativeElements />

      <motion.div
        {...fadeInUp}
        viewport={{ once: true, margin: "-50px" }}
        className="mt-16 sm:mt-24 lg:mt-32 mb-16 sm:mb-24 relative z-10"
      >
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full dark:rounded-none bg-[#F1E8DF] dark:bg-black border border-[#A9C8DA] dark:border-[#ff0000] dark:animate-shake mb-6"
          >
            <FaHeart className="w-4 h-4 text-[#E57986] dark:text-[#00ff00] animate-pulse dark:rounded-none dark:animate-ping mr-2" />
            <span className="text-sm font-medium text-[#A45F7B] dark:text-[#ff00ff]">
              Ready to Collaborate
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
            Let's Build Something{" "}
            <span className="text-[#6693B2] dark:text-[#00ffff] relative dark:animate-pulse dark:rounded-none">
              Amazing
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
            Interested in working together or want to learn more about my work?
            <br />
            <span className="text-[#A45F7B] dark:text-[#A99B8E] font-medium">
              I'd love to hear from you!
            </span>
          </motion.p>
        </div>

        {/* Contact Methods Grid */}
        <div className="max-w-6xl mx-auto mb-12 sm:mb-16 px-4 sm:px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {contactMethods.map((method, index) => (
              <ContactCard key={index} {...method} />
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <motion.div
          {...fadeInUpDelayed(0.8)}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 px-4 sm:px-0"
        >
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-6 py-3 sm:px-8 sm:py-3 md:px-10 md:py-4 bg-[#6693B2] dark:bg-[#ff0000] text-white dark:text-[#000000] font-semibold rounded-xl sm:rounded-2xl dark:rounded-none shadow-md sm:shadow-lg hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 overflow-hidden dark:animate-bounce w-full sm:w-auto"
              aria-label="Contact me"
            >
              <Link href="/contact">
                <span className="relative z-10 flex justify-center items-center">
                  Contact Me
                  <FaArrowRight className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300 dark:animate-ping" />
                </span>
              </Link>
              <div className="absolute inset-0 bg-[#A45F7B] dark:bg-[#00ff00] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 sm:px-8 sm:py-3 md:px-10 md:py-4 border-2 border-[#A9C8DA] dark:border-[#ffff00] text-[#6693B2] dark:text-[#00ffff] font-semibold rounded-xl sm:rounded-2xl dark:rounded-none hover:bg-[#F1E8DF] dark:hover:bg-[#ff00ff] transition-all duration-300 dark:animate-pulse w-full sm:w-auto"
              aria-label="View resume"
              onClick={handleDownload}
            >
              View Resume
            </motion.button>
          </div>
        </motion.div>

        {/* Footer Message */}
        <motion.div
          {...fadeIn}
          transition={{ delay: 1 }}
          viewport={{ once: true }}
          className="text-center px-4 sm:px-0"
        >
          <div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8 bg-[#F1E8DF] dark:bg-black rounded-xl sm:rounded-2xl lg:rounded-3xl dark:rounded-none border border-[#A9C8DA] dark:border-[#ff0000] dark:animate-shake">
            <div className="flex flex-col sm:flex-row items-center justify-center mb-4 sm:mb-6">
              <div className="flex items-center mb-2 sm:mb-0 sm:mr-3"></div>
              <FaCode className="w-6 h-6 text-[#6693B2] dark:text-[#ffff00] mr-3 dark:animate-spin" />
              <div className="flex items-center">
                <span className="text-gray-600 dark:text-[#ffffff] mr-2">
                  Built with
                </span>
                <FaHeart className="w-3 h-3 sm:w-4 sm:h-4 text-[#E57986] dark:text-[#00ff00] mx-1 sm:mx-2 dark:animate-ping" />
                <span className="text-sm sm:text-base text-gray-600 dark:text-[#ffffff]">
                  and lots of coffee
                </span>
              </div>
            </div>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 dark:text-[#ffffff] leading-relaxed">
              I'm always excited to work on innovative projects and collaborate
              with amazing people. Whether it's{" "}
              <span className="font-semibold text-[#6693B2] dark:text-[#ff00ff]">
                AI-powered apps
              </span>
              ,
              <span className="font-semibold text-[#A45F7B] dark:text-[#00ffff]">
                {" "}
                mobile app
              </span>
              , or
              <span className="font-semibold text-[#E57986] dark:text-[#ffff00]">
                {" "}
                smart web experiences
              </span>
              , let's make something incredible together.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
