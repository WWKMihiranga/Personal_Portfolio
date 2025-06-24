"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import RobotScene from "./RobotScene";
import HeroContent from "./HeroContent";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F1E8DF] dark:bg-[#121212]">
      {/* Three.js Canvas */}
      {/* <RobotScene onLoadComplete={() => setIsLoaded(true)} /> */}

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-16 w-24 h-24 border border-[#A9C8DA] dark:border-[#6C3B3F] rounded-full opacity-20"></div>
        <div className="absolute top-48 right-24 w-16 h-16 border border-[#6693B2] dark:border-[#A99B8E] rounded-full opacity-15"></div>
        <div className="absolute bottom-32 left-32 w-20 h-20 border border-[#FFBB94] dark:border-[#CFC6BD] rounded-lg opacity-10 rotate-12"></div>
        <div className="absolute bottom-48 right-16 w-12 h-12 border border-[#E57986] dark:border-[#D9D9D9] rounded-full opacity-25"></div>
        <div className="absolute top-1/2 left-8 w-8 h-8 bg-[#A45F7B] dark:bg-[#EEEAE1] rounded-full opacity-10"></div>
        <div className="absolute top-1/3 right-12 w-6 h-6 bg-[#6693B2] dark:bg-[#A99B8E] rounded-full opacity-15"></div>
      </div>

      {/* Main content */}
      <HeroContent />
      {/* <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8"> */}
      {/* <div className="grid lg:grid-cols-2 gap-12 items-center"> */}
      {/* Left side - Text content */}
      {/* </div> */}
      {/* </div> */}

      {/* Scroll indicator */}
      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-[#A45F7B] dark:text-[#CFC6BD] font-medium">
            Scroll Down
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-[#A9C8DA] dark:border-[#A99B8E] rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-[#6693B2] dark:bg-[#CFC6BD] rounded-full mt-2"></div>
          </motion.div>
        </div>
      </motion.div> */}
    </section>
  );
}
