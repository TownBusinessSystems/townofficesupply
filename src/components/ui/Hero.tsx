
import React from "react";
import HeroContent from "./hero/HeroContent";
import HeroCarousel from "./hero/HeroCarousel";
import BrandLogos from "./hero/BrandLogos";
import { useHeroCarousel } from "@/hooks/useHeroCarousel";

interface HeroProps {
  externalIndex?: number;
}

const Hero: React.FC<HeroProps> = ({ externalIndex }) => {
  // Hero carousel images
  const carouselImages = [
    "/lovable-uploads/743b3a0a-c402-48ee-acba-49844ae9ce3b.png",
    "/lovable-uploads/538a4cc7-c20b-432e-a143-bcb3adf9e6e8.png",
    "/lovable-uploads/eea103c3-ad52-413d-9f73-bf4914455b9b.png"
  ];

  // Hero content pairs (heading + subtitle)
  const heroContent = [
    {
      heading: "Office Supplies that Work for You",
      subtitle: "Specializing in high-quality ink and toner cartridges for all major printer brands, delivered directly to your door."
    },
    {
      heading: "Print More Pay Less",
      subtitle: "Premium ink & toner without the premium price. Affordable printing solutions at a fraction of the price."
    },
    {
      heading: "Trusted by Businesses Since 1973",
      subtitle: "Join the thousands of satisfied businesses who've trusted our refills for over five decades. Try risk-free with our 100% satisfaction guarantee."
    }
  ];

  // Brand logo images
  const brandLogos = [
    { name: "HP", image: "/lovable-uploads/4de92062-abd6-4268-bdc6-2b5ec3f6d108.png" },
    { name: "Toshiba", image: "/lovable-uploads/c178c966-b78f-4eeb-987d-ffb0e99d982e.png" },
    { name: "Dell", image: "/lovable-uploads/4dcaa6bc-2ee5-4fe0-824b-530a0f0ec533.png" },
    { name: "Canon", image: "/lovable-uploads/9669507d-7161-4fc7-a70e-0840f24f7f1f.png" },
    { name: "Brother", image: "/lovable-uploads/6b8b0370-856f-4190-a0a0-6851f7c66044.png" },
    { name: "Lexmark", image: "/lovable-uploads/59cc5440-9951-4896-9af6-3af550477d0f.png" },
    { name: "Panasonic", image: "/lovable-uploads/6d1f179e-4008-4c5a-ab9f-bb22382d2eb0.png" },
    { name: "Samsung", image: "/lovable-uploads/0a19d3dc-ba65-4b19-ba59-8bfcff1cdb90.png" }
  ];

  // Use our custom hook to manage carousel state
  const { currentIndex, handleSlideChange } = useHeroCarousel({
    totalSlides: carouselImages.length,
    externalControl: externalIndex !== undefined
  });

  // Use external index if provided
  const displayIndex = externalIndex !== undefined ? externalIndex : currentIndex;

  return (
    <section className="relative pt-0 pb-4 overflow-hidden bg-hero">
      {/* Background element */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/80 to-white dark:from-gray-900/80 dark:to-gray-950"></div>
        <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-br from-accent/10 to-transparent"></div>
      </div>

      <div className="container px-4 mx-auto">
        {/* Hero content: Text + Image - adjusted spacing to account for removed elements */}
        <div className="flex flex-col lg:flex-row lg:items-center py-12 sm:py-16 lg:py-20">
          <HeroContent 
            currentIndex={displayIndex} 
            heroContent={heroContent} 
          />
          <HeroCarousel 
            images={carouselImages} 
            onSlideChange={handleSlideChange} 
            currentIndex={displayIndex}
          />
        </div>
        
        {/* Brand logos */}
        <BrandLogos brandLogos={brandLogos} />
      </div>
    </section>
  );
};

export default Hero;
