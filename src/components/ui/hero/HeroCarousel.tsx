
import React from "react";
import { motion } from "framer-motion";
import ImageCarousel from "../ImageCarousel";

interface HeroCarouselProps {
  images: string[];
  onSlideChange: (index: number) => void;
  currentIndex: number;
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ images, onSlideChange, currentIndex }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="lg:w-1/2 mt-8 lg:mt-0"
    >
      <div className="relative">
        {/* Animated background elements */}
        <motion.div 
          className="absolute -top-6 -left-6 w-24 h-24 md:w-32 md:h-32 bg-accent/20 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{ 
            y: [0, -15, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        
        <motion.div 
          className="absolute -bottom-8 -right-8 w-32 h-32 md:w-40 md:h-40 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{ 
            y: [0, 15, 0],
            scale: [1, 1.08, 1]
          }}
          transition={{ 
            duration: 7,
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        
        <div className="relative rounded-2xl overflow-hidden shadow-glossy h-[280px] sm:h-[350px] md:h-[400px]">
          <ImageCarousel 
            images={images} 
            interval={7000}
            className="w-full h-full"
            onSlideChange={onSlideChange}
            currentIndex={currentIndex}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default HeroCarousel;
