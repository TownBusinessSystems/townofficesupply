
import React from "react";
import { motion } from "framer-motion";
import ImageCarousel from "../ImageCarousel";

interface HeroCarouselProps {
  images: string[];
  onSlideChange: (index: number) => void;
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ images, onSlideChange }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="lg:w-1/2 mt-8 lg:mt-0"
    >
      <div className="relative">
        <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
        
        <div className="relative rounded-2xl overflow-hidden shadow-glossy h-[300px] sm:h-[350px] md:h-[400px]">
          <ImageCarousel 
            images={images} 
            interval={7000}
            className="w-full h-full"
            onSlideChange={onSlideChange}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default HeroCarousel;
