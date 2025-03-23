
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

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
      // "Print More Pay Less" - removed comma - highlight "More" and "Less" in accent color
      return (
        <>
          <span>Print <span className="text-accent">More</span></span>
          <br />
          <span>Pay <span className="text-accent">Less</span></span>
        </>
      );
    } else {
      // "Trusted by Businesses Since 1973" - all on one line with "Since 1973" on next line
      return (
        <>
          <span>Trusted by Businesses</span>
          <br />
          <span>Since <span className="text-accent">1973</span></span>
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
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ 
              duration: 0.8,  // Matched with image transition duration
              ease: [0.25, 0.1, 0.25, 1.0]
            }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold mb-6 leading-tight">
              {renderHighlightedHeading(heroContent[currentIndex].heading, currentIndex)}
            </h1>
            <motion.p 
              className="text-lg text-muted-foreground max-w-lg mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              {heroContent[currentIndex].subtitle}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default HeroContent;
