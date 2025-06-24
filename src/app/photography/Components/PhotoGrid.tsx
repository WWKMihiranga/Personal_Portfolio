import React, { useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHeart,
  FaEye,
  FaMapMarkerAlt,
  FaClock,
  FaCamera,
  FaExpand,
} from "react-icons/fa";
import { Photo } from "@/lib/photography-data";

interface PhotoGridProps {
  photos: Photo[];
  likedPhotos: Set<string>;
  onPhotoClick: (photo: Photo, index: number) => void;
  onLikeClick: (photoTitle: string) => void;
}

const PhotoGrid = memo(function PhotoGrid({
  photos,
  likedPhotos,
  onPhotoClick,
  onLikeClick,
}: PhotoGridProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={photos.length}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {photos.map((photo, index) => (
          <PhotoCard
            key={`${photo.title}-${index}`}
            photo={photo}
            index={index}
            isLiked={likedPhotos.has(photo.title)}
            onPhotoClick={onPhotoClick}
            onLikeClick={onLikeClick}
          />
        ))}
      </motion.div>
    </AnimatePresence>
  );
});

interface PhotoCardProps {
  photo: Photo;
  index: number;
  isLiked: boolean;
  onPhotoClick: (photo: Photo, index: number) => void;
  onLikeClick: (photoTitle: string) => void;
}

const PhotoCard = memo(function PhotoCard({
  photo,
  index,
  isLiked,
  onPhotoClick,
  onLikeClick,
}: PhotoCardProps) {
  const handleClick = useCallback(() => {
    onPhotoClick(photo, index);
  }, [onPhotoClick, photo, index]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter") {
        onPhotoClick(photo, index);
      }
    },
    [onPhotoClick, photo, index]
  );

  const handleLikeClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      onLikeClick(photo.title);
    },
    [onLikeClick, photo.title]
  );

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      viewport={{ once: true, margin: "50px" }}
      whileHover={{ y: -12, scale: 1.03 }}
      className="group relative overflow-hidden rounded-3xl dark:rounded-none bg-white dark:bg-black shadow-lg hover:shadow-2xl dark:shadow-[#ff0000]/60 border border-[#A9C8DA] dark:border-[#ff00ff] hover:border-[#6693B2] dark:hover:border-[#00ff00] transition-all duration-500 cursor-pointer dark:animate-pulse"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-label={`View ${photo.title} photo details`}
      onKeyDown={handleKeyDown}
    >
      {/* <FilmStripCorner /> */}

      <div className="relative aspect-[4/3] overflow-hidden">
        <LensReflectionEffect />

        <img
          src={photo.src}
          alt={photo.alt}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          loading="lazy"
          decoding="async"
        />

        <VignetteEffect />

        <CategoryBadge category={photo.category} index={index} />

        <LikeButton isLiked={isLiked} onClick={handleLikeClick} />

        <PhotoOverlay />

        <CameraSettingsOverlay />
      </div>

      <PhotoContent photo={photo} index={index} />

      <BottomGradientBar index={index} />
    </motion.div>
  );
});

// const FilmStripCorner = memo(function FilmStripCorner() {
//   return (
//     <div className="absolute top-0 right-0 w-8 h-12 bg-gradient-to-bl from-[#6693B2]/20 dark:from-[#ff00ff]/40 to-transparent z-10 pointer-events-none dark:animate-pulse">
//       <div className="absolute top-1 right-1 w-1 h-1 bg-[#6693B2]/40 dark:bg-[#ff0000] dark:rounded-none rounded-full" />
//       <div className="absolute top-3 right-1 w-1 h-1 bg-[#6693B2]/40 dark:bg-[#ff0000] dark:rounded-none rounded-full" />
//       <div className="absolute top-5 right-1 w-1 h-1 bg-[#6693B2]/40 dark:bg-[#ff0000] dark:rounded-none rounded-full" />
//     </div>
//   );
// });

const LensReflectionEffect = memo(function LensReflectionEffect() {
  return (
    <div className="absolute top-2 left-2 w-16 h-16 bg-gradient-radial from-white/10 via-white/5 to-transparent dark:from-[#ff00ff]/20 dark:via-[#ff00ff]/10 rounded-full dark:rounded-none opacity-0 group-hover:opacity-100 transition-all duration-700 transform rotate-45 group-hover:rotate-90 z-20 pointer-events-none" />
  );
});

const VignetteEffect = memo(function VignetteEffect() {
  return (
    <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/20 dark:to-[#ff00ff]/25 opacity-0 group-hover:opacity-100 transition-all duration-500" />
  );
});

interface CategoryBadgeProps {
  category: string;
  index: number;
}

const CategoryBadge = memo(function CategoryBadge({
  category,
  index,
}: CategoryBadgeProps) {
  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: index * 0.1 + 0.3 }}
      className="absolute top-4 left-4 px-3 py-1.5 bg-black/70 dark:bg-[#00ff00]/90 backdrop-blur-md rounded-full dark:rounded-none text-white dark:text-black text-xs font-medium dark:font-bold border border-white/20 dark:border-[#00ff00] shadow-lg dark:shadow-[#00ff00]/40 dark:animate-pulse"
    >
      <div className="flex items-center space-x-1">
        <FaCamera className="w-2.5 h-2.5" />
        <span>{category}</span>
      </div>
    </motion.div>
  );
});

interface LikeButtonProps {
  isLiked: boolean;
  onClick: (e: React.MouseEvent) => void;
}

const LikeButton = memo(function LikeButton({
  isLiked,
  onClick,
}: LikeButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.15, rotate: isLiked ? 360 : 0 }}
      whileTap={{ scale: 0.85 }}
      onClick={onClick}
      className={`absolute top-4 right-4 w-9 h-9 backdrop-blur-md rounded-full dark:rounded-none flex items-center justify-center border transition-all duration-300 ${
        isLiked
          ? "bg-red-500/90 border-red-400/30 shadow-lg shadow-red-500/25 dark:animate-pulse"
          : "bg-black/70 dark:bg-[#312E29] border-white/20 dark:border-[#ff00ff] text-white hover:bg-black/80 dark:hover:bg-[#ff00ff]"
      }`}
      aria-label={isLiked ? "Unlike this photo" : "Like this photo"}
    >
      <motion.div
        animate={isLiked ? { scale: [1, 1.3, 1] } : { scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <FaHeart
          className={`text-sm transition-colors duration-300 ${
            isLiked
              ? "text-white"
              : "text-white dark:text-[#ff00ff] group-hover:text-red-400"
          }`}
        />
      </motion.div>

      {isLiked && (
        <motion.div
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 1 }}
          className="absolute inset-0 border-2 border-red-400 dark:border-[#ff00ff] rounded-full dark:rounded-none"
        />
      )}
    </motion.button>
  );
});

const PhotoOverlay = memo(function PhotoOverlay() {
  return (
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent dark:from-[#ff0000]/70 dark:via-[#ff00ff]/30 dark:to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        whileHover={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="relative"
      >
        <div className="w-14 h-14 bg-white/20 dark:bg-[#ff0000]/40 backdrop-blur-md rounded-full dark:rounded-none flex items-center justify-center border border-white/30 dark:border-[#ff00ff]/30 shadow-xl dark:animate-pulse">
          <FaEye className="text-white dark:text-[#ffffff] text-xl" />
        </div>

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        >
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#6693B2]/80 dark:bg-[#ff00ff]/80 backdrop-blur-sm rounded-full dark:rounded-none flex items-center justify-center">
            <FaEye className="text-white text-xs" />
          </div>
          <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-4 h-4 bg-[#E57986]/80 dark:bg-[#00ff00]/90 backdrop-blur-sm rounded-full dark:rounded-none flex items-center justify-center">
            <FaExpand className="text-white text-xs" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
});

const CameraSettingsOverlay = memo(function CameraSettingsOverlay() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileHover={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100"
    >
      <div className="bg-black/80 dark:bg-[#000000] backdrop-blur-md rounded-lg dark:rounded-none px-3 py-2 text-white text-xs dark:text-[#00ffff] dark:border dark:border-[#ff00ff]/40 shadow-md dark:shadow-[#00ff00]/20">
        <div className="flex justify-between items-center">
          <div className="flex space-x-3 font-mono dark:animate-pulse">
            <span>f/2.8</span>
            <span>1/250s</span>
            <span>ISO 200</span>
          </div>
          <div className="w-2 h-2 bg-green-400 dark:bg-[#ff0000] rounded-full dark:rounded-none animate-pulse" />
        </div>
      </div>
    </motion.div>
  );
});

interface PhotoContentProps {
  photo: Photo;
  index: number;
}

const PhotoContent = memo(function PhotoContent({
  photo,
  index,
}: PhotoContentProps) {
  return (
    <div className="p-6 relative">
      <div className="absolute inset-0 opacity-[0.02] bg-gradient-to-br from-gray-900 via-transparent to-gray-900 dark:from-[#ff0000] dark:via-transparent dark:to-[#ff00ff] pointer-events-none dark:animate-pulse" />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-3">
          <motion.h3
            whileHover={{ x: 4 }}
            className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-[#6693B2] dark:group-hover:text-[#ff00ff] transition-all duration-300 cursor-pointer"
          >
            {photo.title}
          </motion.h3>

          <motion.div
            initial={{ rotate: -45, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="w-2 h-2 bg-gradient-to-br from-[#6693B2] to-[#E57986] dark:from-[#ff00ff] dark:to-[#00ff00] rounded-full dark:rounded-none shadow-sm dark:shadow-[#ff00ff]/40"
          />
        </div>

        <p className="text-gray-600 dark:text-[#ff00ff] text-sm mb-4 leading-relaxed">
          {photo.description}
        </p>

        <PhotoMeta location={photo.location} date={photo.date} />
      </div>
    </div>
  );
});

interface PhotoMetaProps {
  location: string;
  date: string;
}

const PhotoMeta = memo(function PhotoMeta({ location, date }: PhotoMetaProps) {
  return (
    <div className="flex flex-wrap gap-4 text-xs text-gray-500 dark:text-white">
      <MetaItem
        icon={
          <FaMapMarkerAlt className="mr-1.5 text-[#6693B2] dark:text-[#00ffff] group-hover/meta:text-[#E57986] dark:group-hover/meta:text-[#ff0000] transition-colors duration-300" />
        }
        text={location}
      />
      <MetaItem
        icon={
          <FaClock className="mr-1.5 text-[#E57986] dark:text-[#00ffff] group-hover/meta:text-[#6693B2] dark:group-hover/meta:text-[#00ff00] transition-colors duration-300" />
        }
        text={date}
      />
    </div>
  );
});

interface MetaItemProps {
  icon: React.ReactNode;
  text: string;
}

const MetaItem = memo(function MetaItem({ icon, text }: MetaItemProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, x: 2 }}
      className="flex items-center group/meta cursor-pointer dark:animate-pulse"
    >
      {icon}
      <span className="group-hover/meta:text-gray-700 dark:group-hover/meta:text-white transition-colors duration-300">
        {text}
      </span>
    </motion.div>
  );
});

interface BottomGradientBarProps {
  index: number;
}

const BottomGradientBar = memo(function BottomGradientBar({
  index,
}: BottomGradientBarProps) {
  return (
    <div className="relative h-1 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#6693B2] via-[#E57986] to-[#A45F7B] dark:from-[#ff00ff] dark:via-[#00ff00] dark:to-[#ff0000] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <motion.div
        initial={{ x: "-100%" }}
        whileInView={{ x: "100%" }}
        transition={{ duration: 2, delay: index * 0.1, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform opacity-0 group-hover:opacity-100 dark:via-[#ffffff]/30 dark:animate-pulse"
      />
    </div>
  );
});

export default PhotoGrid;
