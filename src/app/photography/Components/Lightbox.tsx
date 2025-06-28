import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaHeart,
  FaShare,
  FaMapMarkerAlt,
  FaClock,
  FaCamera,
} from "react-icons/fa";
import { Photo } from "@/lib/photography-data";

// iPad-specific CSS styles
const iPadStyles = `
  @media only screen 
    and (min-device-width: 768px) 
    and (max-device-width: 1024px) 
    and (-webkit-min-device-pixel-ratio: 1) {
    
    .ipad-lightbox-container {
      max-width: 85vw !important;
      max-height: 85vh !important;
      margin: auto !important;
    }
    
    .ipad-image-section {
      max-width: 60vw !important;
      max-height: 70vh !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
    }
    
    .ipad-image-wrapper {
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      width: 100% !important;
      height: 100% !important;
    }
    
    .ipad-image {
      max-width: 100% !important;
      max-height: 70vh !important;
      object-fit: contain !important;
      margin: 0 auto !important;
      display: block !important;
    }
    
    .ipad-content-section {
      max-width: 25vw !important;
      min-width: 280px !important;
      max-height: 70vh !important;
      overflow-y: auto !important;
      padding: 1rem !important;
    }
    
    .ipad-layout {
      display: flex !important;
      flex-direction: row !important;
      align-items: center !important;
      justify-content: center !important;
      gap: 1rem !important;
      padding: 1rem !important;
      height: 100% !important;
      width: 100% !important;
    }
  }
  
  /* iPad Pro specific adjustments */
  @media only screen 
    and (min-device-width: 1024px) 
    and (max-device-width: 1366px) 
    and (-webkit-min-device-pixel-ratio: 2) {
    
    .ipad-lightbox-container {
      max-width: 90vw !important;
      max-height: 90vh !important;
    }
    
    .ipad-image-section {
      max-width: 65vw !important;
      max-height: 75vh !important;
    }
    
    .ipad-image {
      max-height: 55vh !important;
      max-width: 40vh !important;
    }
    
    .ipad-content-section {
      max-width: 25vw !important;
      min-width: 320px !important;
      max-height: 75vh !important;
      padding: 1.5rem !important;
    }
  }
`;

interface LightboxProps {
  photo: Photo | null;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (direction: "prev" | "next") => void;
  likedPhotos: Set<string>;
  onLikeClick: (photoTitle: string) => void;
}

export default function Lightbox({
  photo,
  isOpen,
  onClose,
  onNavigate,
  likedPhotos,
  onLikeClick,
}: LightboxProps) {
  if (!photo) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <style dangerouslySetInnerHTML={{ __html: iPadStyles }} />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center overflow-hidden"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="lightbox-title"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="ipad-lightbox-container relative w-full h-full max-w-none max-h-none sm:max-w-[90vw] sm:max-h-[90vh] lg:max-w-[95vw] lg:max-h-[95vh] sm:w-auto sm:h-auto bg-white dark:bg-black sm:rounded-3xl dark:sm:rounded-none shadow-2xl dark:shadow-[0_0_40px_#ff0000] dark:animate-pulse overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <CloseButton onClick={onClose} />

              <NavigationButton
                direction="prev"
                onClick={() => onNavigate("prev")}
                className="left-2 sm:left-4"
              />

              <NavigationButton
                direction="next"
                onClick={() => onNavigate("next")}
                className="right-2 sm:right-4"
              />

              {/* Mobile Layout */}
              <div className="flex flex-col h-full sm:hidden">
                {/* Image Section*/}
                <div className="flex-1 flex items-center justify-center bg-black p-2">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      data-nosnippet
                      className="object-contain"
                      sizes="100vw"
                      priority={false}
                      draggable={false}
                    />
                  </div>
                </div>

                {/* Content Section - Scrollable bottom panel */}
                <div className="bg-white dark:bg-black border-t dark:border-gray-800 max-h-[40vh] overflow-y-auto">
                  <LightboxContent
                    photo={photo}
                    isLiked={likedPhotos.has(photo.title)}
                    onLikeClick={onLikeClick}
                    isMobile={true}
                  />
                </div>
              </div>

              {/* Tablet and Desktop Layout */}
              <div className="ipad-layout hidden sm:flex flex-col lg:flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-6 p-2 sm:p-3 lg:p-6 h-full w-full">
                {/* Image Section */}
                <div className="ipad-image-section w-full lg:w-auto flex items-center justify-center flex-1 lg:flex-none min-h-0">
                  <div className="ipad-image-wrapper relative flex items-center justify-center w-full h-full max-w-full">
                    <div className="relative max-w-full max-h-full flex items-center justify-center">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        width={1200}
                        height={800}
                        data-nosnippet
                        className="ipad-image object-contain rounded-xl lg:rounded-2xl max-w-full max-h-full"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 65vw, 60vw"
                        style={{
                          maxHeight: "calc(90vh - 4rem)",
                          maxWidth: "calc(90vw - 2rem)",
                          height: "auto",
                          width: "auto",
                        }}
                        priority={false}
                        draggable={false}
                      />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="ipad-content-section w-full sm:max-w-xs md:max-w-sm lg:max-w-sm xl:max-w-md flex-shrink-0 max-h-[85vh] overflow-y-auto">
                  <LightboxContent
                    photo={photo}
                    isLiked={likedPhotos.has(photo.title)}
                    onLikeClick={onLikeClick}
                    isMobile={false}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function CloseButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="absolute top-2 right-2 sm:top-4 sm:right-4 z-20 w-8 h-8 sm:w-10 sm:h-10 bg-black/40 dark:bg-black/60 backdrop-blur-sm rounded-full dark:rounded-none flex items-center justify-center text-white hover:bg-black/80 dark:hover:bg-[#ff0000] dark:animate-shake transition-colors duration-300"
      aria-label="Close lightbox"
    >
      <FaTimes className="text-sm sm:text-base" />
    </button>
  );
}

function NavigationButton({
  direction,
  onClick,
  className,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  className: string;
}) {
  const Icon = direction === "prev" ? FaChevronLeft : FaChevronRight;
  return (
    <button
      onClick={onClick}
      className={`absolute top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 bg-black/40 dark:bg-black/60 backdrop-blur-sm rounded-full dark:rounded-none flex items-center justify-center text-white dark:text-[#00ff00] hover:bg-black/80 dark:hover:bg-[#ff00ff] dark:animate-pulse transition-colors duration-300 ${className}`}
      aria-label={direction === "prev" ? "Previous photo" : "Next photo"}
    >
      <Icon className="text-sm sm:text-base" />
    </button>
  );
}

function LightboxContent({
  photo,
  isLiked,
  onLikeClick,
  isMobile,
}: {
  photo: Photo;
  isLiked: boolean;
  onLikeClick: (photoTitle: string) => void;
  isMobile: boolean;
}) {
  return (
    <div
      className={`${
        isMobile ? "p-4" : "p-3 sm:p-4 lg:p-6"
      } flex flex-col justify-between h-full`}
    >
      <div>
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <span
            className={`px-2 sm:px-3 py-1 bg-[#F1E8DF] dark:bg-[#ff0000] text-[#A45F7B] dark:text-[#ffffff] rounded-full dark:rounded-none ${
              isMobile ? "text-xs" : "text-xs sm:text-sm"
            } font-medium dark:font-bold dark:animate-pulse`}
          >
            {photo.category}
          </span>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => onLikeClick(photo.title)}
              className={`${
                isMobile ? "w-6 h-6" : "w-6 h-6 sm:w-8 sm:h-8"
              } bg-[#F1E8DF] dark:bg-black rounded-full dark:rounded-none flex items-center justify-center hover:bg-[#A9C8DA] dark:hover:bg-[#00ff00] transition-colors duration-300`}
              aria-label={isLiked ? "Unlike this photo" : "Like this photo"}
            >
              <FaHeart
                className={`${isMobile ? "text-xs" : "text-xs sm:text-sm"} ${
                  isLiked
                    ? "text-red-500 dark:animate-pulse"
                    : "text-[#A45F7B] dark:text-[#ffffff]"
                }`}
              />
            </button>
            <button
              className={`${
                isMobile ? "w-6 h-6" : "w-6 h-6 sm:w-8 sm:h-8"
              } bg-[#F1E8DF] dark:bg-black rounded-full dark:rounded-none flex items-center justify-center text-[#A45F7B] dark:text-[#00ffff] hover:bg-[#A9C8DA] dark:hover:bg-[#ff0000] transition-colors duration-300`}
              aria-label="Share this photo"
            >
              <FaShare
                className={isMobile ? "text-xs" : "text-xs sm:text-sm"}
              />
            </button>
          </div>
        </div>

        <h2
          id="lightbox-title"
          className={`${
            isMobile ? "text-xl" : "text-lg sm:text-xl lg:text-2xl xl:text-3xl"
          } font-bold text-gray-800 dark:text-white mb-2 sm:mb-3 dark:animate-shake leading-tight`}
        >
          {photo.title}
        </h2>

        <p
          className={`text-gray-600 dark:text-[#ffff00] mb-4 sm:mb-6 leading-relaxed dark:font-semibold ${
            isMobile ? "text-sm" : "text-sm sm:text-base"
          }`}
        >
          {photo.story}
        </p>

        <PhotoDetails
          location={photo.location}
          date={photo.date}
          camera={photo.camera}
          isMobile={isMobile}
        />
      </div>
    </div>
  );
}

function PhotoDetails({
  location,
  date,
  camera,
  isMobile,
}: {
  location: string;
  date: string;
  camera: string;
  isMobile: boolean;
}) {
  return (
    <div
      className={`space-y-2 sm:space-y-3 mb-4 sm:mb-6 ${
        isMobile ? "text-xs" : "text-sm"
      }`}
    >
      <div className="flex items-center dark:animate-pulse">
        <FaMapMarkerAlt
          className={`text-[#E57986] dark:text-[#ff0000] mr-2 ${
            isMobile ? "text-xs" : ""
          }`}
        />
        <span className="text-gray-700 dark:text-white truncate">
          {location}
        </span>
      </div>
      <div className="flex items-center dark:animate-pulse">
        <FaClock
          className={`text-[#6693B2] dark:text-[#00ffff] mr-2 ${
            isMobile ? "text-xs" : ""
          }`}
        />
        <span className="text-gray-700 dark:text-[#ffffff] truncate">
          {date}
        </span>
      </div>
      <div className="flex items-center dark:animate-bounce">
        <FaCamera
          className={`text-[#A45F7B] dark:text-[#ff00ff] mr-2 ${
            isMobile ? "text-xs" : ""
          }`}
        />
        <span className="text-gray-700 dark:text-[#ff00ff] truncate">
          {camera}
        </span>
      </div>
    </div>
  );
}
