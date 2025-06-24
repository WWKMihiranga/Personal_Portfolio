'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface DiaryPhotoProps {
  image: string;
  alt: string;
  index: number;
  side?: 'left' | 'right' | 'auto';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

const DiaryPhoto: React.FC<DiaryPhotoProps> = ({
  image,
  alt,
  index,
  side = 'auto',
  size = 'md',
  className = '',
  onClick
}) => {
  // Determine side based on prop or auto-alternate
  const isLeftSide = side === 'auto' ? index % 2 === 0 : side === 'left';
  
  // Size configurations aligned with timeline design
  const sizeConfig = {
    sm: { width: 'w-40', height: 'h-52', translate: 'translate-x-12' },
    md: { width: 'w-48', height: 'h-64', translate: 'translate-x-16' },
    lg: { width: 'w-56', height: 'h-72', translate: 'translate-x-20' }
  };

  const currentSize = sizeConfig[size];

  return (
    <>
      <motion.div
        initial={{ 
          opacity: 0, 
          x: isLeftSide ? 60 : -60,
          y: 20,
          rotate: isLeftSide ? -6 : 6,
          scale: 0.85
        }}
        whileInView={{ 
          opacity: 1, 
          x: isLeftSide ? 80 : -80, 
          y: 0,
          rotate: isLeftSide ? 2 : -2,
          scale: 1
        }}
        whileHover={{
          scale: 1.03,
          rotate: 0,
          y: -6,
          transition: { 
            type: "spring", 
            stiffness: 260, 
            damping: 20,
            duration: 0.3
          }
        }}
        transition={{ 
          duration: 1, 
          delay: index * 0.15 + 0.2,
          type: "spring",
          stiffness: 120,
          damping: 18
        }}
        viewport={{ once: true, margin: "-40px" }}
        onClick={onClick}
        className={`
          group hidden md:block absolute 
          ${isLeftSide 
            ? `left-0 -${currentSize.translate}` 
            : `right-0 ${currentSize.translate}`
          } 
          top-1/2 -translate-y-1/2 ${currentSize.width} ${currentSize.height} z-10 
          ${onClick ? 'cursor-pointer' : ''} 
          ${className}
        `}
      >
        <div className="relative w-full h-full">
          {/* Main photo container with Timeline design alignment */}
          <motion.div 
            className={`
              absolute inset-0 rounded-2xl overflow-hidden
              bg-white dark:bg-[#312E29] 
              border-2 border-[#A9C8DA] dark:border-[#6C3B3F]
              shadow-xl hover:shadow-2xl
              transition-all duration-500
              diary-photo-card
            `}
            whileHover={{
              borderColor: isLeftSide ? '#6693B2' : '#E57986',
              transition: { duration: 0.3 }
            }}
          >
            {/* Decorative corner accent matching timeline */}
            <div 
              className={`
                absolute top-0 right-0 w-16 h-16 
                transform translate-x-8 -translate-y-8 rotate-45 
                opacity-20 group-hover:opacity-30 
                transition-opacity duration-300
                ${isLeftSide ? 'bg-[#6693B2]' : 'bg-[#E57986]'}
              `}
            />

            {/* Background gradient effect matching timeline */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#F1E8DF] dark:to-[#6C3B3F] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            
            {/* Image container with enhanced styling */}
            <div className="absolute inset-3 overflow-hidden rounded-lg">
              <motion.img 
                src={image} 
                alt={alt} 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                style={{
                  filter: 'contrast(1.05) saturate(1.1)'
                }}
                whileHover={{
                  filter: 'contrast(1.1) saturate(1.2) brightness(1.05)'
                }}
              />
              
              {/* Subtle overlay for better contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent group-hover:from-transparent transition-all duration-500" />
            </div>
            
            {/* Enhanced tape pieces with timeline color scheme */}
            <motion.div 
              className={`
                absolute top-2 left-1/2 w-16 h-5 
                transform -translate-x-1/2 rotate-8
                bg-[#F1E8DF] dark:bg-[#CFC6BD]
                border border-[#A9C8DA] dark:border-[#A99B8E]
                shadow-sm diary-tape
              `}
              whileHover={{
                transform: 'translateX(-50%) rotate(12deg) scale(1.05)',
                transition: { duration: 0.2 }
              }}
            >
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-1 left-1 right-1 h-px bg-[#A9C8DA] dark:bg-[#A99B8E]" />
                <div className="absolute bottom-1 left-1 right-1 h-px bg-[#A9C8DA] dark:bg-[#A99B8E]" />
              </div>
            </motion.div>
            
            <motion.div 
              className={`
                absolute bottom-2 left-1/2 w-16 h-5 
                transform -translate-x-1/2 -rotate-6
                bg-[#F1E8DF] dark:bg-[#CFC6BD]
                border border-[#A9C8DA] dark:border-[#A99B8E]
                shadow-sm diary-tape-bottom
              `}
              whileHover={{
                transform: 'translateX(-50%) rotate(-10deg) scale(1.05)',
                transition: { duration: 0.2 }
              }}
            >
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-1 left-1 right-1 h-px bg-[#A9C8DA] dark:bg-[#A99B8E]" />
                <div className="absolute bottom-1 left-1 right-1 h-px bg-[#A9C8DA] dark:border-[#A99B8E]" />
              </div>
            </motion.div>

            {/* Timeline-style corner fold */}
            <div className={`
              absolute top-0 right-0 w-6 h-6
              bg-gradient-to-br from-[#A9C8DA] to-[#6693B2] dark:from-[#6C3B3F] dark:to-[#A99B8E]
              opacity-40 group-hover:opacity-60
              transition-opacity duration-300
              diary-corner-fold
            `} />

            {/* Hover indicator matching timeline */}
            <div className={`
              absolute bottom-2 left-1/2 transform -translate-x-1/2 
              w-6 h-0.5 rounded-full opacity-0 group-hover:opacity-100 
              transition-opacity duration-300
              ${isLeftSide ? 'bg-[#6693B2]' : 'bg-[#E57986]'}
            `}></div>
          </motion.div>
          
          {/* Enhanced shadow system with timeline colors */}
          <div className={`
            absolute inset-0 rounded-2xl -z-10
            transform translate-x-1 translate-y-2
            bg-[#A9C8DA] dark:bg-[#6C3B3F] 
            opacity-20 blur-sm
            transition-all duration-500 group-hover:translate-y-3
            ${isLeftSide ? 'rotate-2' : '-rotate-2'}
            diary-shadow-primary
          `} />
          
          <div className={`
            absolute inset-0 rounded-2xl -z-20
            transform translate-x-2 translate-y-4
            bg-[#6693B2] dark:bg-[#A99B8E] 
            opacity-10 blur-md
            transition-all duration-700 group-hover:translate-y-5
            ${isLeftSide ? 'rotate-1' : '-rotate-1'}
            diary-shadow-secondary
          `} />

          {/* Ambient glow effect with timeline colors */}
          <motion.div
            className={`
              absolute inset-0 rounded-2xl -z-30
              opacity-0 group-hover:opacity-20
              transition-opacity duration-500
              transform scale-110 blur-xl
              ${isLeftSide 
                ? 'bg-[#6693B2] dark:bg-[#A99B8E]' 
                : 'bg-[#E57986] dark:bg-[#6C3B3F]'
              }
            `}
            animate={{
              opacity: [0, 0.1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Floating accent dots matching timeline theme */}
          <motion.div 
            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
            animate={{
              y: [0, -2, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className={`
              absolute top-4 right-6 w-1 h-1 rounded-full
              ${isLeftSide ? 'bg-[#6693B2]' : 'bg-[#E57986]'} 
              opacity-60
            `} />
            <div className={`
              absolute bottom-6 left-4 w-1.5 h-1.5 rounded-full
              ${isLeftSide ? 'bg-[#A9C8DA]' : 'bg-[#A45F7B]'} 
              opacity-40
            `} />
            <div className={`
              absolute top-1/2 left-6 w-0.5 h-0.5 rounded-full
              ${isLeftSide ? 'bg-[#F1E8DF]' : 'bg-[#FFBB94]'} 
              opacity-80
            `} />
          </motion.div>

          {/* Interactive pulse effect */}
          <motion.div
            className={`
              absolute top-1/2 left-1/2 w-2 h-2 
              transform -translate-x-1/2 -translate-y-1/2
              rounded-full opacity-0 group-hover:opacity-60
              ${isLeftSide ? 'bg-[#6693B2]' : 'bg-[#E57986]'}
            `}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.6, 0.3, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>

      {/* Custom styles for enhanced effects */}
      <style jsx>{`
        .diary-photo-card {
          transform: rotate(${isLeftSide ? '2deg' : '-2deg'});
          filter: drop-shadow(0 10px 20px rgba(0,0,0,0.1));
        }

        .group:hover .diary-photo-card {
          filter: drop-shadow(0 15px 30px rgba(0,0,0,0.15));
        }

        .diary-corner-fold {
          clip-path: polygon(100% 0%, 0% 100%, 100% 100%);
        }

        .diary-tape {
          backdrop-filter: blur(2px);
        }

        .diary-tape-bottom {
          backdrop-filter: blur(2px);
        }

        @media (max-width: 768px) {
          .group {
            display: none !important;
          }
        }

        @media (min-width: 768px) and (max-width: 1024px) {
          .${currentSize.width} {
            width: ${size === 'lg' ? '12rem' : size === 'md' ? '10rem' : '8rem'};
          }
          .${currentSize.height} {
            height: ${size === 'lg' ? '15rem' : size === 'md' ? '13rem' : '11rem'};
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .group,
          .group * {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default DiaryPhoto;