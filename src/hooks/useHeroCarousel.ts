
import { useState, useEffect, useCallback } from "react";

interface UseHeroCarouselProps {
  totalSlides: number;
  interval?: number;
}

export const useHeroCarousel = ({ totalSlides, interval = 7000 }: UseHeroCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Function to handle manual slide changes
  const handleSlideChange = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);
  
  // Auto-rotation effect
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, interval);
    
    return () => clearInterval(intervalId);
  }, [totalSlides, interval]);
  
  return {
    currentIndex,
    handleSlideChange
  };
};
