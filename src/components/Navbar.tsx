"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeSwitch from "./ThemeToggleButton";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Experience", path: "/experience" },
  { name: "Photography", path: "/photography" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/90 dark:bg-black/90 backdrop-blur-lg shadow-lg shadow-[#A9C8DA]/10 dark:shadow-[#ff0000]/40"
            : "bg-white/70 dark:bg-black/70 backdrop-blur-sm"
        }`}
      >
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#6693B2] via-[#E57986] to-[#A45F7B] dark:from-[#00ffff] dark:via-[#ff0000] dark:to-[#ff00ff] dark:animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 lg:py-6">
            {/* Logo with enhanced styling */}
            <div className="flex items-center space-x-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Link href="/" className="relative group">
                  <div className="flex items-center space-x-3">
                    {/* Logo icon */}
                    <div className="w-10 h-10 bg-[#6693B2] dark:bg-[#00ff00] rounded-2xl dark:rounded-none flex items-center justify-center group-hover:rotate-6 transition-transform duration-300 dark:animate-shake">
                      <span className="text-white dark:text-black font-bold text-lg">
                        K
                      </span>
                    </div>

                    {/* Logo text */}
                    <div className="hidden sm:block">
                      <span className="text-2xl lg:text-3xl font-bold text-gray-800 dark:text-white transition-colors duration-300">
                        My
                        <span className="text-[#6693B2] dark:text-[#ff00ff]">
                          Portfolio
                        </span>
                      </span>
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                        className="h-0.5 bg-[#E57986] dark:bg-[#ff0000] dark:animate-ping origin-left mt-1"
                      ></motion.div>
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Theme switch for mobile - hidden on desktop */}
              <div className="lg:hidden">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ThemeSwitch />
                </motion.div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              <div className="flex items-center bg-[#F1E8DF]/50 dark:bg-[#000000]/50 rounded-full dark:rounded-none p-1 border border-[#A9C8DA]/30 dark:border-[#ff0000]/60 dark:animate-bounce">
                {navItems.map(({ name, path }) => (
                  <motion.div
                    key={path}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={path}
                      className={`relative px-4 py-2 rounded-full dark:rounded-none text-sm font-medium transition-all duration-300 ${
                        pathname === path
                          ? "text-white dark:text-black bg-[#6693B2] dark:bg-[#00ffff] shadow-lg dark:animate-pulse"
                          : "text-gray-700 dark:text-[#ff00ff] hover:text-[#6693B2] dark:hover:text-[#00ff00] hover:bg-white/50 dark:hover:bg-[#ff0000]/40"
                      }`}
                    >
                      <span className="relative z-10">{name}</span>

                      {/* Active indicator dot */}
                      {pathname === path && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#E57986] dark:bg-[#ff00ff] dark:rounded-none rounded-full dark:animate-ping"
                        ></motion.div>
                      )}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Theme switch for desktop */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="ml-2"
              >
                <ThemeSwitch />
              </motion.div>

              {/* Contact CTA */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-4"
              >
                <Link
                  href="/contact"
                  className="px-6 py-2 bg-[#E57986] dark:bg-[#ff0000] text-white dark:text-[#ffffff] rounded-full dark:rounded-none font-medium hover:bg-[#6693B2] dark:hover:bg-[#00ff00] dark:hover:text-black transition-all duration-300 shadow-lg hover:shadow-xl dark:animate-pulse"
                >
                  Let&apos;s Talk
                </Link>
              </motion.div>
            </div>

            {/* Mobile menu button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative w-10 h-10 flex flex-col justify-center items-center bg-[#F1E8DF] dark:bg-black rounded-xl dark:rounded-none border border-[#A9C8DA] dark:border-[#ff0000] hover:bg-[#A9C8DA]/20 dark:hover:bg-[#ff0000]/30 transition-all duration-300 dark:animate-shake"
              aria-label="Toggle mobile menu"
            >
              <span
                className={`w-5 h-0.5 bg-gray-700 dark:bg-[#00ffff] transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-1" : ""
                }`}
              ></span>
              <span
                className={`w-5 h-0.5 bg-gray-700 dark:bg-[#00ffff] transition-all duration-300 my-1 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`w-5 h-0.5 bg-gray-700 dark:bg-[#00ffff] transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1" : ""
                }`}
              ></span>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="lg:hidden overflow-hidden"
            >
              <div className="bg-white/95 dark:bg-black/95 backdrop-blur-lg border-t border-[#A9C8DA]/20 dark:border-[#ff0000]/30 dark:animate-pulse">
                <div className="max-w-7xl mx-auto px-4 py-6 space-y-3">
                  {navItems.map(({ name, path }, index) => (
                    <motion.div
                      key={path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <Link
                        href={path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block w-full text-left px-4 py-3 rounded-2xl dark:rounded-none text-base font-medium transition-all duration-300 ${
                          pathname === path
                            ? "text-white dark:text-black bg-[#6693B2] dark:bg-[#00ffff] shadow-lg dark:animate-bounce"
                            : "text-gray-700 dark:text-[#ff00ff] hover:text-[#6693B2] dark:hover:text-[#00ff00] hover:bg-[#F1E8DF] dark:hover:bg-[#ff0000]/30"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{name}</span>
                          {pathname === path && (
                            <div className="w-2 h-2 bg-[#E57986] dark:bg-[#ff00ff] rounded-full dark:rounded-none dark:animate-ping"></div>
                          )}
                        </div>
                      </Link>
                    </motion.div>
                  ))}

                  {/* Mobile CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: navItems.length * 0.1 + 0.2,
                      duration: 0.3,
                    }}
                    className="pt-4 border-t border-[#A9C8DA]/20 dark:border-[#ff0000]/30"
                  >
                    <Link
                      href="/contact"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block w-full text-center px-6 py-3 bg-[#E57986] dark:bg-[#ff0000] text-white dark:text-white rounded-2xl dark:rounded-none font-bold hover:bg-[#A45F7B] dark:hover:bg-[#00ff00] transition-all duration-300 shadow-lg dark:animate-shake"
                    >
                      Let&apos;s Talk
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Spacer to prevent content jumping */}
      <div className="h-20 lg:h-24"></div>
    </>
  );
}
