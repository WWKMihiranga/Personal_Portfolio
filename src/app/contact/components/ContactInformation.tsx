import React from "react";
import { motion } from "framer-motion";
import { FiClock, FiMail, FiMapPin, FiExternalLink } from "react-icons/fi";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { ContactCard } from "./ContactCard";

interface ContactItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href: string | null;
  description: string;
}

interface SocialLink {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href: string;
  color: string;
}

export const ContactInformation: React.FC = () => {
  const contactItems: ContactItem[] = [
    {
      icon: FiMail,
      label: "Email",
      value: "kavirangot@gmail.com",
      href: "mailto:kavirangot@gmail.com",
      description: "Drop me a line anytime",
    },
    {
      icon: FiMapPin,
      label: "Location",
      value: "Galle, Sri Lanka",
      href: null,
      description: "Available for remote work",
    },
    {
      icon: FiClock,
      label: "Availability",
      value: "Mon-Fri, 9am-5pm",
      href: null,
      description: "Usually respond within 24hrs",
    },
  ];

  const socialLinks: SocialLink[] = [
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/kavindu-mihiranga-35a28a276",
      color: "hover:text-[#0077B5]",
    },
    {
      icon: FaGithub,
      label: "GitHub",
      href: "https://github.com/WWKMihiranga",
      color: "hover:text-[#333]",
    },
    {
      icon: FaInstagram,
      label: "Instagram",
      href: "https://instagram.com/w.w.kavindu_mihiranga",
      color: "hover:text-[#1DA1F2]",
    },
  ];

  return (
    <ContactCard
      icon={
        <FiMail
          className="text-white dark:text-[#ff0000] dark:hover:text-black dark:animate-spin dark:hover:animate-none dark:hover:cursor-crosshair dark:rounded-none"
          size={20}
        />
      }
      title="Contact Information"
      subtitle="Let's start a conversation"
    >
      {/* Contact Items */}
      <div className="relative z-10 space-y-6 mb-8">
        {contactItems.map((item, index) => (
          <ContactItem key={index} item={item} index={index} />
        ))}
      </div>

      {/* Divider */}
      <div className="relative z-10 my-8">
        <div className="flex items-center">
          <div className="flex-1 h-px bg-[#A9C8DA] dark:bg-[#6C3B3F] dark:animate-pulse"></div>
          <div className="px-4">
            <div className="w-2 h-2 bg-[#6693B2] dark:bg-[#ffff00] rounded-full dark:rounded-none dark:animate-bounce"></div>
          </div>
          <div className="flex-1 h-px bg-[#A9C8DA] dark:bg-[#6C3B3F] dark:animate-pulse"></div>
        </div>
      </div>

      {/* Social Links Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <h4 className="text-sm font-semibold text-[#A45F7B] dark:text-[#ff00ff] dark:animate-ping uppercase tracking-wide mb-6 text-center dark:rounded-none">
          Connect with me
        </h4>

        <div className="flex justify-center space-x-4">
          {socialLinks.map((social, index) => (
            <SocialLink key={index} social={social} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center px-4 py-2 bg-[#6693B2] dark:bg-[#ff0000] text-white dark:text-[#ffffff] rounded-full dark:animate-shake dark:rounded-none text-sm font-medium">
            <div className="w-2 h-2 bg-white dark:bg-[#00ff00] dark:animate-ping rounded-full dark:rounded-none mr-2"></div>
            Available for new opportunities
          </div>
        </motion.div>
      </motion.div>
    </ContactCard>
  );
};

const ContactItem: React.FC<{ item: ContactItem; index: number }> = ({
  item,
  index,
}) => {
  const Icon = item.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
      viewport={{ once: true }}
      whileHover={{ x: 8, transition: { duration: 0.2 } }}
      className="group/item cursor-pointer"
    >
      <div className="flex items-start p-4 rounded-2xl dark:rounded-none bg-[#F1E8DF] dark:bg-[#121212] border border-transparent hover:border-[#6693B2] dark:hover:border-[#ff00ff] transition-all duration-300 dark:animate-pulse">
        {/* Icon */}
        <div className="flex-shrink-0 w-12 h-12 bg-[#6693B2] dark:bg-[#00ffff] text-white dark:text-[#000000] rounded-2xl dark:rounded-none flex items-center justify-center group-hover/item:scale-110 group-hover/item:rotate-6 transition-all duration-300 dark:animate-spin">
          <Icon className="h-5 w-5" />
        </div>

        {/* Content */}
        <div className="ml-4 flex-1">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-semibold text-[#A45F7B] dark:text-[#ff0000] uppercase tracking-wide dark:animate-bounce dark:rounded-none">
              {item.label}
            </h4>
            {item.href && (
              <FiExternalLink className="h-4 w-4 text-gray-400 dark:text-[#ffff00] opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
            )}
          </div>

          {item.href ? (
            <a
              href={item.href}
              className="text-base font-bold text-gray-800 dark:text-[#ffffff] hover:text-[#6693B2] dark:hover:text-[#00ff00] duration-300 block mt-1 group-hover/item:translate-x-1 transform transition-transform dark:rounded-none"
              aria-label={`Contact via ${item.label}`}
            >
              {item.value}
            </a>
          ) : (
            <p className="text-base font-bold text-gray-800 dark:text-[#ffffff] mt-1 group-hover/item:translate-x-1 transform transition-transform duration-300 dark:rounded-none">
              {item.value}
            </p>
          )}

          <p className="text-xs text-gray-500 dark:text-[#ff00ff] mt-1 opacity-70 group-hover/item:opacity-100 transition-opacity duration-300 dark:animate-puls dark:rounded-none">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const SocialLink: React.FC<{ social: SocialLink; index: number }> = ({
  social,
  index,
}) => {
  const Icon = social.icon;
  return (
    <motion.a
      href={social.href}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.7 + index * 0.1, duration: 0.3 }}
      viewport={{ once: true }}
      whileHover={{
        y: -8,
        scale: 1.1,
        transition: { duration: 0.2, ease: "easeOut" },
      }}
      whileTap={{ scale: 0.95 }}
      className="group/social relative"
      aria-label={social.label}
    >
      {/* Icon Button */}
      <div
        className={`w-12 h-12 bg-[#F1E8DF] dark:bg-[#ff0000] dark:hover:bg-[#000000] dark:hover:text-[#ffffff] border border-[#A9C8DA] dark:border-[#ffff00] text-gray-600 dark:text-[#00ff00] hover:border-[#6693B2] dark:hover:border-[#ff00ff] ${social.color} rounded-2xl dark:rounded-none flex items-center justify-center transition-all duration-300 hover:shadow-lg dark:animate-spin dark:hover:animate-none dark:hover:cursor-crosshair`}
      >
        <Icon className="h-5 w-5" />
      </div>

      {/* Tooltip (visible only on hover) */}
      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 dark:bg-[#ffffff] text-white dark:text-[#ff0000] text-xs rounded-lg dark:rounded-none opacity-0 group-hover/social:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        {social.label}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800 dark:border-t-[#ffffff]"></div>
      </div>
    </motion.a>
  );
};
