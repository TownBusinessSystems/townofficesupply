
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ImageCarouselProps {
  images: string[];
  interval?: number;
  className?: string;
  onSlideChange?: (index: number) => void;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ 
  images, 
  interval = 7000, // Increased interval from 5000ms to 7000ms
  className = "",
  onSlideChange
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([]);
  
  // Initialize the imagesLoaded array when the component mounts
  useEffect(() => {
    setImagesLoaded(new Array(images.length).fill(false));
  }, [images.length]);

  // Handle image load completion
  const handleImageLoad = (index: number) => {
    setImagesLoaded(prev => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };
  
  useEffect(() => {
    // Set up the interval for auto-rotation
    const intervalId = setInterval(() => {
      const newIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(newIndex);
      if (onSlideChange) {
        onSlideChange(newIndex);
      }
    }, interval);
    
    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [images.length, interval, currentIndex, onSlideChange]);
  
  // Notify parent when slide changes (including initial render)
  useEffect(() => {
    if (onSlideChange) {
      onSlideChange(currentIndex);
    }
  }, [currentIndex, onSlideChange]);
  
  // Preload all images
  useEffect(() => {
    images.forEach((src, index) => {
      const img = new Image();
      img.src = src;
      img.onload = () => handleImageLoad(index);
    });
  }, [images]);
  
  return (
    <div className={`relative w-full h-full overflow-hidden rounded-2xl ${className}`}>
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentIndex}
          className="w-full h-full"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ 
            duration: 2, // Increased from 1.5s to 2s for slower transition
            ease: [0.25, 0.1, 0.25, 1.0] // Using cubic-bezier curve for smoother transition
          }}
        >
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-cover"
            style={{ opacity: 1 }}
          />
        </motion.div>
      </AnimatePresence>
      
      {/* Optional indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? "bg-white scale-125" : "bg-white/50"
            }`}
            onClick={() => {
              setCurrentIndex(index);
              if (onSlideChange) {
                onSlideChange(index);
              }
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
