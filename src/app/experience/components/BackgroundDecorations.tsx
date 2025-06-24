import React from "react";

const BackgroundDecorations = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-10 w-20 h-20 border border-[#A9C8DA] dark:border-[#ff0000] rounded-full dark:rounded-none opacity-20 dark:animate-ping"></div>
      <div className="absolute bottom-32 right-16 w-28 h-6 bg-[#FFBB94] dark:bg-[#00ff00] opacity-10 rounded-full dark:rounded-none rotate-45 dark:animate-bounce"></div>
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-[#E57986] dark:bg-[#ff00ff] rounded-full dark:rounded-none opacity-40 dark:animate-spin"></div>
    </div>
  </div>
);

export default BackgroundDecorations;
