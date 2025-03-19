
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import HeroSearch from "./HeroSearch";

interface HeroContentProps {
  currentIndex: number;
  heroContent: Array<{
    heading: string;
    subtitle: string;
  }>;
}

const HeroContent: React.FC<HeroContentProps> = ({ currentIndex, heroContent }) => {
  // Function to render headings with specific words in accent color and line breaks
  const renderHighlightedHeading = (heading: string, index: number) => {
    if (index === 0) {
      // "Office Supplies that Work for You" - line break after "Office Supplies"
      return (
        <>
          <span>Office Supplies</span>
          <br />
          <span>that <span className="text-accent">Work</span> for You</span>
        </>
      );
    } else if (index === 1) {
      // "Print More, Pay Less" - line break after "More,"
      return (
        <>
          <span>Print <span className="text-accent">More</span>,</span>
          <br />
          <span><span className="text-accent">Pay Less</span></span>
        </>
      );
    } else {
      // "Trusted by Businesses for 50+ Years" - line breaks after "Trusted by" and "Businesses"
      return (
        <>
          <span>Trusted by</span>
          <br />
          <span>Businesses</span>
          <br />
          <span>for <span className="text-accent">50+</span> Years</span>
        </>
      );
    }
  };

  return (
    <div className="lg:w-1/2 lg:pr-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ 
              duration: 2,
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
        
        <HeroSearch />
      </motion.div>
    </div>
  );
};

export default HeroContent;
