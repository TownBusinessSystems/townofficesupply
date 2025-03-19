
import React from "react";
import { motion } from "framer-motion";

interface BrandLogosProps {
  brandLogos: Array<{
    name: string;
    image: string;
  }>;
}

const BrandLogos: React.FC<BrandLogosProps> = ({ brandLogos }) => {
  // Container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  // Item animation
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="py-0 -mt-6 sm:mt-0" 
    >
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 lg:gap-10"
      >
        {brandLogos.map((brand, index) => (
          <motion.div
            key={brand.name}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            className="relative h-20 sm:h-24 md:h-28 bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center p-4"
          >
            <img 
              src={brand.image} 
              alt={`${brand.name} brand`} 
              className="max-w-full max-h-full object-contain"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default BrandLogos;
