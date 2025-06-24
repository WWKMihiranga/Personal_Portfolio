import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { photos, categories } from "@/lib/photography-data";
import PhotographyHeader from "./PhotographyHeader";
import CategoryFilter from "./CategoryFilter";
import PhotoGrid from "./PhotoGrid";
import Lightbox from "./Lightbox";
import DecorativeBackground from "./DecorativeBackground";
import Instagram from "./Instagram";
import ThreeBackground from "@/components/ThreeBackground";

export default function PhotographyPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPhoto, setSelectedPhoto] = useState<(typeof photos)[0] | null>(
    null
  );
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [likedPhotos, setLikedPhotos] = useState(new Set<string>());

  const filteredPhotos =
    selectedCategory === "All"
      ? photos
      : photos.filter((photo) => photo.category === selectedCategory);

  const openLightbox = (photo: (typeof photos)[0], index: number) => {
    setSelectedPhoto(photo);
    setCurrentPhotoIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const navigatePhoto = (direction: "prev" | "next") => {
    const newIndex =
      direction === "next"
        ? (currentPhotoIndex + 1) % filteredPhotos.length
        : (currentPhotoIndex - 1 + filteredPhotos.length) %
          filteredPhotos.length;
    setCurrentPhotoIndex(newIndex);
    setSelectedPhoto(filteredPhotos[newIndex]);
  };

  const toggleLike = (photoTitle: string) => {
    const newLiked = new Set(likedPhotos);
    newLiked.has(photoTitle)
      ? newLiked.delete(photoTitle)
      : newLiked.add(photoTitle);
    setLikedPhotos(newLiked);
  };

  return (
    <div className="relative">
      <ThreeBackground />
      <DecorativeBackground />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10"
      >
        <PhotographyHeader photos={photos} categories={categories} />

        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <PhotoGrid
          photos={filteredPhotos}
          likedPhotos={likedPhotos}
          onPhotoClick={openLightbox}
          onLikeClick={toggleLike}
        />
      </motion.div>

      <Lightbox
        photo={selectedPhoto}
        isOpen={!!selectedPhoto}
        onClose={closeLightbox}
        onNavigate={navigatePhoto}
        likedPhotos={likedPhotos}
        onLikeClick={toggleLike}
      />
      <Instagram />
    </div>
  );
}
