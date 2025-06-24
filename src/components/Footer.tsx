"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaArrowRight,
  FaInstagram,
} from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  const socialLinks = [
    {
      icon: <FaGithub className="w-5 h-5" />,
      href: "https://github.com/WWKMihiranga",
      label: "GitHub",
      color: "hover:text-[#6693B2] dark:hover:text-[#A99B8E]",
    },
    {
      icon: <FaLinkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/kavindu-mihiranga-35a28a276",
      label: "LinkedIn",
      color: "hover:text-[#6693B2] dark:hover:text-[#A99B8E]",
    },
    {
      icon: <FaInstagram className="w-5 h-5" />,
      href: "https://instagram.com/w.w.kavindu_mihiranga",
      label: "Twitter",
      color: "hover:text-[#E57986] dark:hover:text-[#6C3B3F]",
    },
    {
      icon: <FaEnvelope className="w-5 h-5" />,
      href: "mailto:kavirangot@gmail.com",
      label: "Email",
      color: "hover:text-[#A45F7B] dark:hover:text-[#A99B8E]",
    },
  ];

  const footerLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Experience", href: "/experience" },
    { name: "Photography", href: "/photography" },
    { name: "Contact", href: "/contact" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <footer className="relative bg-[#F1E8DF] dark:bg-black border-t border-[#A9C8DA] dark:border-[#ff0000] overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 sm:top-20 sm:left-20 w-20 h-20 sm:w-32 sm:h-32 border border-[#A9C8DA] dark:border-[#ff0000] rounded-full dark:rounded-none dark:animate-pulse opacity-10"></div>
        <div className="absolute bottom-5 right-8 sm:bottom-10 sm:right-32 w-16 h-16 sm:w-24 sm:h-24 bg-[#E57986] dark:bg-[#00ffff] rounded-full dark:rounded-none dark:animate-spin opacity-5"></div>
        <div className="absolute top-16 right-10 sm:top-32 sm:right-20 w-4 h-4 sm:w-6 sm:h-6 bg-[#6693B2] dark:bg-[#ff00ff] rounded-full dark:rounded-none dark:animate-bounce opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-8"
        >
          {/* Branding section */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 space-y-4 sm:space-y-6"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#6693B2] dark:bg-[#00ff00] rounded-xl sm:rounded-2xl dark:rounded-none flex items-center justify-center animate-none dark:animate-ping">
                <span className="text-white dark:text-[#ff0000] font-bold text-lg sm:text-xl">
                  M
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                My
                <span className="text-[#6693B2] dark:text-[#ff00ff]">
                  Portfolio
                </span>
              </h3>
            </div>

            <p className="text-gray-600 dark:text-[#CFC6BD] text-base sm:text-lg leading-relaxed max-w-md">
              Creating innovative digital experiences with modern web
              technologies. Passionate about building solutions that make a
              difference.
            </p>

            {/* Social links with enhanced design */}
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 sm:w-12 sm:h-12 bg-white dark:bg-[#000000] rounded-xl sm:rounded-2xl dark:rounded-none flex items-center justify-center text-gray-500 dark:text-[#ff0000] ${link.color} transition-all duration-300 shadow-md hover:shadow-lg border border-[#A9C8DA]/30 dark:border-[#00ff00] dark:animate-shake`}
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>

            {/* Skills highlight */}
            <div className="flex flex-wrap gap-2 pt-2 sm:pt-4">
              {["React", "Next.js", "Three.js", "Tailwind"].map(
                (skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    viewport={{ once: true }}
                    className="px-2 py-1 sm:px-3 sm:py-1 bg-white dark:bg-[#000000] rounded-full dark:rounded-none text-xs font-bold text-[#A45F7B] dark:text-[#ffffff] border border-[#A9C8DA]/30 dark:border-[#ff0000] dark:animate-pulse"
                  >
                    {skill}
                  </motion.span>
                )
              )}
            </div>
          </motion.div>

          {/* Navigation links */}
          <motion.div
            variants={itemVariants}
            className="space-y-4 sm:space-y-6"
          >
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white flex items-center">
              <div className="w-1 h-5 sm:h-6 bg-[#6693B2] dark:bg-[#ff0000] rounded-full dark:rounded-none dark:animate-ping mr-2 sm:mr-3"></div>
              Navigation
            </h3>
            <ul className="space-y-2 sm:space-y-4">
              {footerLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    className="flex items-center text-sm sm:text-base text-gray-600 dark:text-[#ff0000] hover:text-[#6693B2] dark:hover:text-[#00ffff] transition-all duration-300 group"
                  >
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#E57986] dark:bg-[#ff00ff] rounded-full dark:rounded-none mr-2 sm:mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 dark:animate-bounce"></div>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact info */}
          <motion.div
            variants={itemVariants}
            className="space-y-4 sm:space-y-6"
          >
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white flex items-center">
              <div className="w-1 h-5 sm:h-6 bg-[#E57986] dark:bg-[#ff0000] rounded-full dark:rounded-none dark:animate-ping mr-2 sm:mr-3"></div>
              Get In Touch
            </h3>

            <div className="space-y-3 sm:space-y-4">
              <motion.a
                whileHover={{ x: 4 }}
                href="mailto:kavirangot@gmail.com"
                className="flex items-center text-sm sm:text-base text-gray-600 dark:text-[#ffffff] hover:text-[#6693B2] dark:hover:text-[#00ffff] transition-all duration-300 group"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white dark:bg-[#ff0000] rounded-lg sm:rounded-xl dark:rounded-none flex items-center justify-center mr-2 sm:mr-3 group-hover:bg-[#6693B2] dark:group-hover:bg-[#00ff00] transition-colors duration-300">
                  <FaEnvelope className="w-3 h-3 sm:w-4 sm:h-4 group-hover:text-white dark:group-hover:text-black" />
                </div>
                <span className="truncate">kavirangot@gmail.com</span>
              </motion.a>

              <motion.a
                whileHover={{ x: 4 }}
                href="tel:+11234567890"
                className="flex items-center text-sm sm:text-base text-gray-600 dark:text-[#ffffff] hover:text-[#6693B2] dark:hover:text-[#00ffff] transition-all duration-300 group"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white dark:bg-[#ff0000] rounded-lg sm:rounded-xl dark:rounded-none flex items-center justify-center mr-2 sm:mr-3 group-hover:bg-[#6693B2] dark:group-hover:bg-[#00ff00] transition-colors duration-300">
                  <FaPhone className="w-3 h-3 sm:w-4 sm:h-4 group-hover:text-white dark:group-hover:text-black" />
                </div>
                <span>+94 (77) 293 9510</span>
              </motion.a>

              <motion.div
                whileHover={{ x: 4 }}
                className="flex items-center text-sm sm:text-base text-gray-600 dark:text-[#ffffff] hover:text-[#6693B2] dark:hover:text-[#00ffff] transition-all duration-300 group"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white dark:bg-[#ff0000] rounded-lg sm:rounded-xl dark:rounded-none flex items-center justify-center mr-2 sm:mr-3 group-hover:bg-[#6693B2] dark:group-hover:bg-[#00ff00] transition-colors duration-300">
                  <FaMapMarkerAlt className="w-3 h-3 sm:w-4 sm:h-4 group-hover:text-white dark:group-hover:text-black" />
                </div>
                <span>Banwelgodella, Aluthwala</span>
              </motion.div>
            </div>

            {/* CTA Button */}
            {/* <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="pt-4"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-[#6693B2] dark:bg-[#00ff00] text-white dark:text-[#000000] rounded-2xl dark:rounded-none font-medium hover:bg-[#A45F7B] dark:hover:bg-[#ff0000] transition-all duration-300 shadow-lg hover:shadow-xl dark:animate-shake"
                >
                  Start a Project
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="ml-2"
                  >
                    →
                  </motion.div>
                </Link>
              </motion.div> */}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-[#6693B2] dark:bg-[#ff0000] text-white dark:text-[#000000] text-sm sm:text-base font-semibold rounded-xl sm:rounded-2xl dark:rounded-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden dark:animate-bounce"
              aria-label="Contact me"
            >
              <Link href="/contact">
                <span className="relative z-10 flex items-center">
                  Start a Project
                  <FaArrowRight className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300 dark:animate-ping" />
                </span>
                <div className="absolute inset-0 bg-[#A45F7B] dark:bg-[#00ff00] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-16 mb-6 sm:mb-8 h-px bg-gradient-to-r from-transparent via-[#A9C8DA] dark:via-[#ff00ff] to-transparent origin-center dark:animate-pulse"
        ></motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="text-center space-y-3 sm:space-y-4"
        >
          <div className="flex flex-col justify-center items-center space-y-2 text-xs sm:text-sm text-gray-500 dark:text-[#ffffff]">
            <span>
              © {new Date().getFullYear()} MyPortfolio. All rights reserved.
            </span>
            <span className="md:hidden w-1 h-1 bg-[#A9C8DA] dark:bg-[#ff0000] rounded-full dark:rounded-none"></span>
            <span className="flex items-center">
              Built with
              <span className="mx-1 text-[#E57986] dark:text-[#ff00ff] dark:animate-bounce">
                ❤️
              </span>
              using Next.js & Tailwind CSS
            </span>
          </div>

          {/* Made with love indicator */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="w-8 sm:w-12 h-0.5 sm:h-1 bg-gradient-to-r from-[#6693B2] via-[#E57986] to-[#A45F7B] dark:from-[#00ffff] dark:via-[#ff0000] dark:to-[#00ff00] dark:rounded-none dark:animate-spin"></div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
