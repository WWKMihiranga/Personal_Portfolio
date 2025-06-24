// "use client";

// import { useTheme } from "@/components/ThemeContext"; // this hooks into your theme logic
// import { FaSun, FaMoon } from "react-icons/fa"; // icons for light/dark

// export default function ThemeToggleButton() {
//   const { theme, toggleTheme } = useTheme(); // gets theme and toggle function from context

//   return (
//     <button
//       onClick={toggleTheme}
//       className="fixed top-4 right-4 z-50 p-2 rounded-full bg-[#F1E8DF] dark:bg-black border border-[#A9C8DA] dark:border-[#ff00ff] hover:bg-[#A9C8DA] dark:hover:bg-[#00ffff] transition-colors duration-300 shadow-md"
//       aria-label="Toggle Theme"
//     >
//       {theme === "dark" ? (
//         <FaSun className="text-yellow-300 w-4 h-4" />
//       ) : (
//         <FaMoon className="text-[#312E29] w-4 h-4" />
//       )}
//     </button>
//   );
// }

"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="p-2 border rounded bg-gray-200 dark:bg-gray-800 text-black dark:text-white"
    >
      Toggle Theme ({resolvedTheme})
    </button>
  );
}
