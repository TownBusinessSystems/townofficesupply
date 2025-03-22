
import React from "react";
import { motion } from "framer-motion";

interface BrandLogosProps {
  brandLogos: Array<{
    name: string;
    image: string;
  }>;
}

const BrandLogos: React.FC<BrandLogosProps> = ({ brandLogos }) => {
  // Container animation with slightly faster staggering for better UX
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // Faster staggering
        delayChildren: 0.2     // Shorter initial delay
      }
    }
  };

  // Item animation with smooth fade-in and subtle rise
  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="py-4 sm:py-6 mb-4" // Reduced vertical spacing
    >
      <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-4 text-center">Browse by Category</h3>
      <motion.div 
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6"
      >
        {brandLogos.map((brand, index) => (
          <motion.div
            key={brand.name}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            className="relative h-20 sm:h-24 bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center p-3"
          >
            <img 
              src={brand.image} 
              alt={`${brand.name} brand`} 
              className="max-w-full max-h-full object-contain"
              loading="lazy" // Add lazy loading for performance
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default BrandLogos;
