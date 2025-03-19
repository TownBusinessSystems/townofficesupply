
import React from "react";
import { motion } from "framer-motion";

interface BrandLogosProps {
  brandLogos: Array<{
    name: string;
    image: string;
  }>;
}

const BrandLogos: React.FC<BrandLogosProps> = ({ brandLogos }) => {
  return (
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
  );
};

export default BrandLogos;
