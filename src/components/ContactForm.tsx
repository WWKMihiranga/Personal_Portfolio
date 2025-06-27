"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import {
  FiMail,
  FiMapPin,
  FiPhone,
  FiClock,
  FiCalendar,
  FiArrowRight,
  FiMessageCircle,
  FiExternalLink,
} from "react-icons/fi";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: FiMail,
      label: "Email",
      value: "kavirangot@gmail.com",
      href: "mailto:your.email@example.com",
      description: "Best way to reach me",
      color: "text-[#6693B2] dark:text-[#ff0000]",
      bg: "bg-[#6693B2] dark:bg-[#00ff00]",
    },
    {
      icon: FiPhone,
      label: "Phone",
      value: "+94 (77) 293 9510",
      href: "tel:+94772939510",
      description: "Available during business hours",
      color: "text-[#E57986] dark:text-[#ffff00]",
      bg: "bg-[#E57986] dark:bg-[#ff00ff]",
    },
    {
      icon: FiMapPin,
      label: "Location",
      value: "Galle, Sri Lanka",
      href: null,
      description: "Open to remote work",
      color: "text-[#A45F7B] dark:text-[#00ffff]",
      bg: "bg-[#A45F7B] dark:bg-[#ff0000]",
    },
  ];

  const availability = [
    {
      icon: FiClock,
      label: "Working Hours",
      value: "Monday - Friday",
      subtitle: "9:00 AM - 5:00 PM PST",
      color: "text-[#6693B2] dark:text-[#00ff00]",
      bg: "bg-[#6693B2] dark:bg-[#ff00ff]",
    },
    {
      icon: FiCalendar,
      label: "Response Time",
      value: "Within 24 hours",
      subtitle: "On weekdays",
      color: "text-[#E57986] dark:text-[#00ffff]",
      bg: "bg-[#E57986] dark:bg-[#ffff00]",
    },
  ];

  return (
    <div className="relative pl-8 pr-8 pt-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 border border-[#A9C8DA] dark:border-[#ff0000] rounded-full dark:rounded-none opacity-20 dark:animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-28 h-6 bg-[#FFBB94] dark:bg-[#00ff00] opacity-10 rounded-full dark:rounded-none rotate-12 dark:animate-bounce"></div>
        <div className="absolute top-40 right-1/4 w-3 h-3 bg-[#E57986] dark:bg-[#ffff00] rounded-full dark:rounded-none opacity-40 dark:animate-spin"></div>
        <div className="absolute bottom-20 left-1/3 w-16 h-16 border border-[#6693B2] dark:border-[#00ffff] rounded-full dark:rounded-none opacity-15 dark:animate-shake"></div>
      </div>

      {/* Contact section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mb-32 relative z-10"
      >
        {/* Section Header */}
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
              Get In Touch
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
            Let's Work{" "}
            <span className="text-[#6693B2] dark:text-[#00ffff] relative dark:animate-pulse dark:rounded-none">
              Together
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
            Ready to bring your ideas to life? Let's discuss your project and
            explore how we can create something amazing together.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Information Cards */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {contactInfo.map((item, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                  key={index}
                  className="group"
                >
                  <div className="relative bg-white dark:bg-black p-6 rounded-3xl dark:rounded-none border border-[#A9C8DA] dark:border-[#ff0000] hover:border-[#6693B2] dark:hover:border-[#00ff00] transition-all duration-300 shadow-lg hover:shadow-2xl text-center overflow-hidden dark:animate-pulse">
                    {/* Background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#F1E8DF] dark:to-[#ff00ff] opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon container */}
                      <div className="mb-4">
                        <div
                          className={`w-12 h-12 mx-auto ${item.bg} rounded-2xl dark:rounded-none flex items-center justify-center text-white dark:text-[#000000] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 dark:animate-bounce`}
                        >
                          <item.icon className="w-6 h-6" />
                        </div>
                      </div>

                      {/* Contact info */}
                      <h3 className="text-lg font-bold text-gray-800 dark:text-[#ffff00] mb-2 group-hover:text-[#6693B2] dark:group-hover:text-[#00ffff] transition-colors duration-300">
                        {item.label}
                      </h3>

                      {item.href ? (
                        <a
                          href={item.href}
                          className={`text-base font-medium hover:underline transition-all duration-300 block mb-2 ${item.color}`}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p
                          className={`text-base font-medium mb-2 ${item.color}`}
                        >
                          {item.value}
                        </p>
                      )}

                      {/* Description */}
                      <p className="text-sm text-gray-600 dark:text-[#ffffff] opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                        {item.description}
                      </p>
                    </div>

                    {/* Hover indicator */}
                    <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-[#6693B2] dark:bg-[#00ff00] rounded-full dark:rounded-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Availability Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white dark:bg-black p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl lg:rounded-3xl dark:rounded-none border border-[#A9C8DA] dark:border-[#ff0000] shadow-md sm:shadow-lg dark:animate-pulse"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-[#ffff00] mb-4 sm:mb-6 text-center dark:animate-pulse">
                Availability
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                {availability.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true, margin: "-30px" }}
                    className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg sm:rounded-xl lg:rounded-2xl bg-[#F1E8DF] dark:bg-[#00ff00] dark:rounded-none hover:bg-[#A9C8DA] dark:hover:bg-[#00ffff] transition-all duration-300"
                  >
                    <div
                      className={`flex-shrink-0 p-2 sm:p-3 rounded-lg sm:rounded-xl ${item.bg} text-white dark:text-black dark:animate-bounce`}
                    >
                      <item.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-[#ff0000] mb-0.5 sm:mb-1">
                        {item.label}
                      </h4>
                      <p className="text-sm sm:text-base font-medium text-gray-700 dark:text-[#000000]">
                        {item.value}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-[#000000] opacity-75">
                        {item.subtitle}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Contact CTA Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-1"
          >
            <div className="bg-white dark:bg-black p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl lg:rounded-3xl dark:rounded-none border border-[#A9C8DA] dark:border-[#ff00ff] shadow-md sm:shadow-lg h-full flex flex-col justify-center text-center dark:animate-pulse">
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
                viewport={{ once: true }}
                className="w-16 h-16 sm:w-20 sm:h-20 bg-[#6693B2] dark:bg-[#ff0000] rounded-full dark:rounded-none flex items-center justify-center mx-auto mb-4 sm:mb-6 dark:animate-bounce"
              >
                <FiMessageCircle className="w-8 h-8 sm:w-10 sm:h-10 text-white dark:text-[#00ff00]" />
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-[#ffff00] mb-3 sm:mb-4">
                  Start a Conversation
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-[#ffffff] mb-6 sm:mb-8 leading-relaxed">
                  Have a project in mind? I'd love to hear about it. Let's
                  discuss how we can work together to bring your vision to life.
                </p>

                {/* Contact Page Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative w-full sm:w-auto px-4 py-3 sm:px-15 sm:py-5 bg-[#6693B2] dark:bg-[#ff0000] text-white dark:text-[#000000] font-semibold rounded-xl sm:rounded-2xl dark:rounded-none shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden dark:animate-bounce"
                  aria-label="Contact me"
                >
                  <Link href="/contact" className="w-full">
                    <span className="relative z-10 flex items-center">
                      Send Message
                      <FaArrowRight className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300 dark:animate-ping" />
                    </span>
                    <div className="absolute inset-0 bg-[#A45F7B] dark:bg-[#00ff00] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </Link>
                </motion.button>

                {/* Quick contact link */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="mt-4 sm:mt-6"
                >
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-[#ffffff] mb-2">
                    Or reach out directly
                  </p>
                  <a
                    href="mailto:kavirangot@example.com"
                    className="inline-flex items-center text-sm sm:text-base text-[#6693B2] dark:text-[#00ffff] hover:text-[#A45F7B] dark:hover:text-[#ff0000] font-medium transition-colors duration-300 break-all"
                  >
                    <FiExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    kavirangot@example.com
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
