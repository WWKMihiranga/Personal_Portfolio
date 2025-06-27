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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 overflow-auto"
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
            className="relative w-full h-auto max-w-6xl mx-auto max-h-screen overflow-y-auto bg-white dark:bg-black rounded-3xl dark:rounded-none shadow-2xl dark:shadow-[0_0_40px_#ff0000] dark:animate-pulse"
            onClick={(e) => e.stopPropagation()}
          >
            <CloseButton onClick={onClose} />

            <NavigationButton
              direction="prev"
              onClick={() => onNavigate("prev")}
              className="left-4"
            />

            <NavigationButton
              direction="next"
              onClick={() => onNavigate("next")}
              className="right-4"
            />

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 p-6 max-h-full w-full">
              <div className="w-full md:w-auto flex justify-center">
                <div className="relative w-full h-auto max-h-[80vh] elect-none pointer-events-none">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={1200}
                    height={800}
                    data-nosnippet
                    className="object-contain rounded-2xl"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 50vw"
                    style={{ maxHeight: "80vh", height: "auto", width: "100%" }}
                    priority={false}
                    draggable={false}
                  />
                </div>
              </div>

              <div className="w-full md:max-w-sm flex-shrink-0">
                <LightboxContent
                  photo={photo}
                  isLiked={likedPhotos.has(photo.title)}
                  onLikeClick={onLikeClick}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function CloseButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/60 backdrop-blur-sm rounded-full dark:rounded-none flex items-center justify-center text-white hover:bg-black/80 dark:hover:bg-[#ff0000] dark:animate-shake transition-colors duration-300"
      aria-label="Close lightbox"
    >
      <FaTimes />
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
      className={`absolute top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/60 backdrop-blur-sm rounded-full dark:rounded-none flex items-center justify-center text-white dark:text-[#00ff00] hover:bg-black/80 dark:hover:bg-[#ff00ff] dark:animate-pulse transition-colors duration-300 ${className}`}
      aria-label={direction === "prev" ? "Previous photo" : "Next photo"}
    >
      <Icon />
    </button>
  );
}

function LightboxContent({
  photo,
  isLiked,
  onLikeClick,
}: {
  photo: Photo;
  isLiked: boolean;
  onLikeClick: (photoTitle: string) => void;
}) {
  return (
    <div className="p-8 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="px-3 py-1 bg-[#F1E8DF] dark:bg-[#ff0000] text-[#A45F7B] dark:text-[#ffffff] rounded-full dark:rounded-none text-sm font-medium dark:font-bold dark:animate-pulse">
            {photo.category}
          </span>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => onLikeClick(photo.title)}
              className="w-8 h-8 bg-[#F1E8DF] dark:bg-black rounded-full dark:rounded-none flex items-center justify-center hover:bg-[#A9C8DA] dark:hover:bg-[#00ff00] transition-colors duration-300"
              aria-label={isLiked ? "Unlike this photo" : "Like this photo"}
            >
              <FaHeart
                className={`text-sm ${
                  isLiked
                    ? "text-red-500 dark:animate-pulse"
                    : "text-[#A45F7B] dark:text-[#ffffff]"
                }`}
              />
            </button>
            <button
              className="w-8 h-8 bg-[#F1E8DF] dark:bg-black rounded-full dark:rounded-none flex items-center justify-center text-[#A45F7B] dark:text-[#00ffff] hover:bg-[#A9C8DA] dark:hover:bg-[#ff0000] transition-colors duration-300"
              aria-label="Share this photo"
            >
              <FaShare className="text-sm" />
            </button>
          </div>
        </div>

        <h2
          id="lightbox-title"
          className="text-3xl font-bold text-gray-800 dark:text-white mb-3 dark:animate-shake"
        >
          {photo.title}
        </h2>

        <p className="text-gray-600 dark:text-[#ffff00] mb-6 leading-relaxed dark:font-semibold">
          {photo.story}
        </p>

        <PhotoDetails
          location={photo.location}
          date={photo.date}
          camera={photo.camera}
        />
      </div>

      {/* <CameraSettings settings={photo.settings} /> */}
    </div>
  );
}

function PhotoDetails({
  location,
  date,
  camera,
}: {
  location: string;
  date: string;
  camera: string;
}) {
  return (
    <div className="space-y-3 mb-6">
      <div className="flex items-center text-sm dark:animate-pulse">
        <FaMapMarkerAlt className="text-[#E57986] dark:text-[#ff0000] mr-2" />
        <span className="text-gray-700 dark:text-white">{location}</span>
      </div>
      <div className="flex items-center text-sm dark:animate-pulse">
        <FaClock className="text-[#6693B2] dark:text-[#00ffff] mr-2" />
        <span className="text-gray-700 dark:text-[#ffffff]">{date}</span>
      </div>
      <div className="flex items-center text-sm dark:animate-bounce">
        <FaCamera className="text-[#A45F7B] dark:text-[#ff00ff] mr-2" />
        <span className="text-gray-700 dark:text-[#ff00ff]">{camera}</span>
      </div>
    </div>
  );
}

function CameraSettings({ settings }: { settings: string }) {
  return (
    <div className="p-4 bg-[#F1E8DF] dark:bg-black rounded-2xl dark:rounded-none dark:shadow-[0_0_20px_#ff0000] dark:animate-pulse">
      <h4 className="font-semibold text-gray-800 dark:text-white mb-2 dark:animate-pulse">
        Camera Settings
      </h4>
      <p className="text-sm text-gray-600 dark:text-[#00ff00] font-mono">
        {settings}
      </p>
    </div>
  );
}
