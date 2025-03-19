
import { useState, useEffect, useCallback } from "react";

interface UseHeroCarouselProps {
  totalSlides: number;
  interval?: number;
  externalControl?: boolean;
}

export const useHeroCarousel = ({ 
  totalSlides, 
  interval = 7000,
  externalControl = false
}: UseHeroCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Function to handle manual slide changes
  const handleSlideChange = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);
  
  // Auto-rotation effect
  useEffect(() => {
    if (externalControl) return; // Skip if externally controlled
    
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, interval);
    
    return () => clearInterval(intervalId);
  }, [totalSlides, interval, externalControl]);
  
  return {
    currentIndex,
    setCurrentIndex,
    handleSlideChange
  };
};
