import React from "react";

export default function DecorativeBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-16 right-12 w-32 h-32 border border-[#A9C8DA] dark:border-[#ff0000] rounded-full dark:rounded-none opacity-10 dark:animate-ping" />
      <div className="absolute bottom-20 left-16 w-24 h-6 bg-[#FFBB94] dark:bg-[#00ff00] opacity-15 rounded-full dark:rounded-none rotate-45 dark:animate-bounce" />
      <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-[#E57986] dark:bg-[#ff00ff] rounded-full dark:rounded-none opacity-30 dark:animate-shake" />
      <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-[#6693B2] dark:bg-[#00ffff] rounded-full dark:rounded-none opacity-20 dark:animate-spin" />
    </div>
  );
}
