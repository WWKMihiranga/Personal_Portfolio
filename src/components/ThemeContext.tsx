// "use client";

// import { createContext, useContext, useEffect, useState } from "react";

// type Theme = "light" | "dark";

// interface ThemeContextType {
//   theme: Theme;
//   toggleTheme: () => void;
// }

// const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
//   const [theme, setTheme] = useState<Theme>("light");

//   useEffect(() => {
//     // Check localStorage or fallback to system
//     const savedTheme = localStorage.getItem("theme") as Theme | null;
//     const systemPrefersDark = window.matchMedia(
//       "(prefers-color-scheme: dark)"
//     ).matches;

//     const initialTheme = savedTheme || (systemPrefersDark ? "dark" : "light");
//     setTheme(initialTheme);
//     document.documentElement.classList.toggle("dark", initialTheme === "dark");
//   }, []);

//   const toggleTheme = () => {
//     setTheme((prev) => {
//       const next = prev === "dark" ? "light" : "dark";
//       localStorage.setItem("theme", next);
//       document.documentElement.classList.toggle("dark", next === "dark");
//       return next;
//     });
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export const useTheme = (): ThemeContextType => {
//   const context = useContext(ThemeContext);
//   if (!context) {
//     throw new Error("useTheme must be used within a ThemeProvider");
//   }
//   return context;
// };
