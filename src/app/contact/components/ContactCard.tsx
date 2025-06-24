import { motion } from "framer-motion";
import React from "react";

interface ContactCardProps {
  children: React.ReactNode;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  iconBgColor?: string;
}

export const ContactCard: React.FC<ContactCardProps> = ({
  children,
  icon,
  title,
  subtitle,
  iconBgColor = "bg-[#6693B2] dark:bg-[#00ff00] dark:hover:bg-white",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="relative bg-white dark:bg-black p-8 rounded-3xl dark:rounded-none border border-[#A9C8DA] dark:border-[#ff0000] shadow-lg hover:shadow-2xl transition-all duration-300 h-fit overflow-hidden dark:animate-pulse">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#F1E8DF] dark:to-[#ff00ff] opacity-0 group-hover:opacity-20 transition-opacity duration-300 dark:animate-shake"></div>

        {/* Header */}
        <div className="relative z-10 mb-8">
          <div className="flex items-center mb-3">
            <div
              className={`w-10 h-10 ${iconBgColor} rounded-2xl dark:rounded-none flex items-center justify-center mr-3 dark:animate-bounce`}
            >
              {icon}
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
              {title}
            </h3>
          </div>
          <p className="text-gray-600 dark:text-[#00ffff] ml-13">{subtitle}</p>
        </div>

        {children}

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-[#6693B2] dark:bg-[#ff0000] rounded-full dark:rounded-none opacity-30 group-hover:opacity-100 group-hover:w-24 transition-all duration-300 dark:animate-ping"></div>
      </div>
    </motion.div>
  );
};
