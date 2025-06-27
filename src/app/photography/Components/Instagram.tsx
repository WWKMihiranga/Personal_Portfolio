import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FiExternalLink, FiInstagram } from "react-icons/fi";

export default function Instagram() {
  return (
    <div>
      {/* Instagram CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-50px" }}
        className="relative"
      >
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[#F1E8DF] dark:bg-black rounded-3xl dark:rounded-none border border-[#A9C8DA] dark:border-[#ff0000] opacity-50 dark:animate-pulse"></div>

        <div className="relative z-10 text-center py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover="hover"
            whileTap="tap"
            className="mb-6 sm:mb-8"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#6693B2] dark:bg-[#00ffff] hover:dark:bg-white rounded-full dark:rounded-none flex items-center justify-center mx-auto mb-4 sm:mb-6 dark:cursor-crosshair dark:animate-spin dark:hover:animate-pulse">
              <FiInstagram className="w-8 h-8 sm:w-10 sm:h-10 text-white dark:text-black" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4 dark:animate-shake">
              Want to see more?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-[#ff00ff] mb-6 sm:mb-8 max-w-2xl mx-auto dark:font-semibold dark:animate-bounce">
              Check out my Instergram profile for more ...
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link
              href="https://instagram.com/w.w.kavindu_mihiranga"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                whileHover={{
                  y: -3,
                  scale: 1.05,
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-gray-800 dark:bg-white text-white dark:text-black font-semibold rounded-xl sm:rounded-2xl dark:rounded-none shadow-md sm:shadow-lg hover:shadow-xl sm:hover:shadow-2xl dark:hover:shadow-[#ff0000] transition-all duration-300 cursor-pointer dark:animate-pulse"
              >
                <FiInstagram className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-sm sm:text-base">
                  View Instagram Profile
                </span>

                <FiExternalLink className="w-3 h-3 sm:w-4 sm:h-4 ml-2 sm:ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </motion.div>
            </Link>
          </motion.div>

          {/* Decorative elements */}
          <div className="absolute top-4 sm:top-6 lg:top-8 left-4 sm:left-6 lg:left-8 w-3 h-3 sm:w-4 sm:h-4 bg-[#E57986] dark:bg-[#ff0000] rounded-full dark:rounded-none opacity-40 dark:animate-ping"></div>
          <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 right-4 sm:right-6 lg:right-8 w-4 h-4 sm:w-6 sm:h-6 border border-[#A9C8DA] dark:border-[#00ff00] rounded-full dark:rounded-none opacity-30 dark:animate-pulse"></div>
        </div>
      </motion.div>
    </div>
  );
}
