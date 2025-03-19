
import React from "react";
import HeroContent from "./hero/HeroContent";
import HeroCarousel from "./hero/HeroCarousel";
import BrandLogos from "./hero/BrandLogos";
import { useHeroCarousel } from "@/hooks/useHeroCarousel";

const Hero = () => {
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
      heading: "Print More, Pay Less",
      subtitle: "Premium ink & toner without the premium price. Affordable solutions at factory-direct prices."
    },
    {
      heading: "Trusted by Businesses for 50+ Years",
      subtitle: "Print with confidence. Try risk-free with our 100% satisfaction guarantee."
    }
  ];

  // Brand logo images
  const brandLogos = [
    { name: "Panasonic", image: "/lovable-uploads/fffef16e-8bcd-431f-a564-7e86a8b25509.png" },
    { name: "Canon", image: "/lovable-uploads/9220cfab-8aa8-4c55-a25b-eeea9b9516fa.png" },
    { name: "Epson", image: "/lovable-uploads/e7e37c39-5925-442d-a84a-39ced51dfa48.png" },
    { name: "Dell", image: "/lovable-uploads/ab2ad9bf-dd1c-4e16-a53e-48b60afd68c6.png" },
    { name: "Brother", image: "/lovable-uploads/aa266675-78cb-414c-a312-0683a3d51ec0.png" }
  ];

  // Use our custom hook to manage carousel state
  const { currentIndex, handleSlideChange } = useHeroCarousel({
    totalSlides: carouselImages.length
  });

  return (
    <section className="relative pt-0 overflow-hidden">
      {/* Background element */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950"></div>
        <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-br from-accent/10 to-transparent"></div>
      </div>

      <div className="container px-4 mx-auto">
        {/* Hero content: Text + Image */}
        <div className="flex flex-col lg:flex-row lg:items-center py-8 sm:py-10 lg:py-16">
          <HeroContent 
            currentIndex={currentIndex} 
            heroContent={heroContent} 
          />
          <HeroCarousel 
            images={carouselImages} 
            onSlideChange={handleSlideChange} 
          />
        </div>
        
        {/* Brand logos */}
        <BrandLogos brandLogos={brandLogos} />
      </div>
    </section>
  );
};

export default Hero;
