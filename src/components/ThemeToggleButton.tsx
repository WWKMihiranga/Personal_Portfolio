"use client";

import { FiSun, FiMoon } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <div className="w-10 h-10 rounded-full dark:rounded-none bg-[#F1E8DF] dark:bg-[#000000] flex items-center justify-center border border-[#A9C8DA]/30 dark:border-[#ff0000]/60">
        <Image
          src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
          width={24}
          height={24}
          alt="Loading Light/Dark Toggle"
          priority={false}
          title="Loading Light/Dark Toggle"
          className="opacity-50"
        />
      </div>
    );

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="w-10 h-10 rounded-full dark:rounded-none bg-[#F1E8DF] dark:bg-[#000000] flex items-center justify-center border border-[#A9C8DA]/30 dark:border-[#ff0000]/60 hover:bg-[#A9C8DA]/20 dark:hover:bg-[#ff0000]/30 transition-all duration-300"
      aria-label={`Toggle ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? (
        <motion.div
          key="sun"
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: 90 }}
          transition={{ duration: 0.2 }}
        >
          <FiSun className="w-5 h-5 text-[#00ffff] hover:text-[#00ff00]" />
        </motion.div>
      ) : (
        <motion.div
          key="moon"
          initial={{ opacity: 0, rotate: 90 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: -90 }}
          transition={{ duration: 0.2 }}
        >
          <FiMoon className="w-5 h-5 text-[#6693B2] hover:text-[#E57986]" />
        </motion.div>
      )}
    </motion.button>
  );
}
