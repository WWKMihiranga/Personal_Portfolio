import React from "react";

export default function BackgroundDecorations() {
  return (
    <div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-24 left-12 w-20 h-20 border border-[#A9C8DA] dark:border-[#ff0000] rounded-full dark:rounded-none opacity-15 dark:animate-ping"></div>
        <div className="absolute bottom-32 right-16 w-28 h-6 bg-[#FFBB94] dark:bg-[#00ff00] opacity-8 rounded-full dark:rounded-none rotate-45 dark:animate-bounce"></div>
        <div className="absolute top-40 right-1/4 w-3 h-3 bg-[#E57986] dark:bg-[#ffff00] rounded-full dark:rounded-none opacity-30 dark:animate-spin"></div>
        <div className="absolute bottom-20 left-1/3 w-16 h-16 border border-[#6693B2] dark:border-[#ff00ff] rounded-full dark:rounded-none opacity-10 dark:animate-shake"></div>
      </div>
    </div>
  );
}
