
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import ImageCarousel from "./ImageCarousel";

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  // Hero carousel images
  const carouselImages = [
    "/lovable-uploads/743b3a0a-c402-48ee-acba-49844ae9ce3b.png",
    "/lovable-uploads/538a4cc7-c20b-432e-a143-bcb3adf9e6e8.png",
    "/lovable-uploads/eea103c3-ad52-413d-9f73-bf4914455b9b.png"
  ];

  // Hero content pairs (heading + subtitle)
  const heroContent = [
    {
      heading: "Office Supplies That Work For You",
      subtitle: "Specializing in high-quality ink and toner cartridges for all major printer brands, delivered directly to your door."
    },
    {
      heading: "Print More, Pay Less",
      subtitle: "Premium ink & toner without the premium price. Affordable solutions at factory-direct prices."
    },
    {
      heading: "Trusted by Businesses For Over 50 Years",
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

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  // Update currentIndex when the ImageCarousel changes slides
  const handleSlideChange = (index: number) => {
    setCurrentIndex(index);
  };

  // Function to render headings with specific words in accent color
  const renderHighlightedHeading = (heading: string, index: number) => {
    const words = heading.split(" ");
    
    if (index === 0) {
      // "Office Supplies That Work For You" - highlight "Work"
      return words.map((word, i) => 
        word === "Work" ? (
          <span key={i} className="text-accent">{word} </span>
        ) : (
          <span key={i}>{word} </span>
        )
      );
    } else if (index === 1) {
      // "Print More, Pay Less" - highlight "More" and "Less"
      return words.map((word, i) => {
        const cleanWord = word.replace(",", "");
        if (cleanWord === "More" || cleanWord === "Less") {
          return <span key={i} className="text-accent">{word} </span>;
        }
        return <span key={i}>{word} </span>;
      });
    } else {
      // "Trusted by Businesses For Over 50 Years" - highlight "50 Years"
      return words.map((word, i) => {
        if (word === "50" || word === "Years") {
          return <span key={i} className="text-accent">{word} </span>;
        }
        return <span key={i}>{word} </span>;
      });
    }
  };

  return (
    <section className="relative pt-0 overflow-hidden">
      {/* Background element */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950"></div>
        <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-br from-accent/10 to-transparent"></div>
      </div>

      <div className="container px-4 mx-auto">
        {/* Hero content: Text + Image */}
        <div className="flex flex-col lg:flex-row lg:items-center py-12 lg:py-16">
          <div className="lg:w-1/2 lg:pr-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              {/* Removed the Premium Quality Supplies tag that was here */}
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ 
                    duration: 2,  // Increased from 1.5s to 2s for slower transition
                    ease: [0.25, 0.1, 0.25, 1.0]
                  }}
                >
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold mb-6 leading-tight">
                    {renderHighlightedHeading(heroContent[currentIndex].heading, currentIndex)}
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-lg">
                    {heroContent[currentIndex].subtitle}
                  </p>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row sm:items-center gap-4"
            >
              <Button asChild className="bg-accent hover:bg-accent/90 text-white px-6 py-2 h-10 w-fit">
                <Link to="/products">
                  Shop Deals
                  <ChevronRight size={16} className="ml-2" />
                </Link>
              </Button>
              
              <motion.form 
                onSubmit={handleSearch}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative flex w-full max-w-sm"
              >
                <Input
                  type="text"
                  placeholder="Search by brand, type, or color..."
                  className="pr-10 h-10 text-sm rounded-lg border focus-visible:ring-accent/50"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button 
                  type="submit" 
                  size="icon" 
                  className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 bg-accent hover:bg-accent/90 text-white"
                >
                  <Search size={16} />
                </Button>
              </motion.form>
            </motion.div>
          </div>

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
                  images={carouselImages} 
                  interval={7000}
                  className="w-full h-full"
                  onSlideChange={handleSlideChange}
                />
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Brand logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="py-0 -mt-6" 
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
            {brandLogos.map((brand) => (
              <motion.div
                key={brand.name}
                whileHover={{ scale: 1.05 }}
                className="relative h-28 bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex items-center justify-center p-4"
              >
                <img 
                  src={brand.image} 
                  alt={`${brand.name} brand`} 
                  className="max-w-full max-h-full object-contain"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
