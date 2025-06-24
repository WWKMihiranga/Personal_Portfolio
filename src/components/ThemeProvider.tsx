// "use client";
// import { useEffect, useState } from "react";

// export default function ThemeProvider({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [theme, setTheme] = useState<"light" | "dark">("light");

//   useEffect(() => {
//     const saved = localStorage.getItem("theme") as "light" | "dark" | null;
//     const system = window.matchMedia("(prefers-color-scheme: dark)").matches
//       ? "dark"
//       : "light";
//     const active = saved || system;
//     setTheme(active);
//     document.documentElement.classList.toggle("dark", active === "dark");
//   }, []);

//   const toggleTheme = () => {
//     const next = theme === "dark" ? "light" : "dark";
//     setTheme(next);
//     localStorage.setItem("theme", next);
//     document.documentElement.classList.toggle("dark", next === "dark");
//   };

//   return (
//     <>
//       <button
//         onClick={toggleTheme}
//         className="fixed bottom-4 right-4 z-50 bg-gray-200 dark:bg-gray-800 text-sm text-black dark:text-white px-4 py-2 rounded shadow"
//       >
//         {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
//       </button>
//       {children}
//     </>
//   );
// }

"use client";

import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}
