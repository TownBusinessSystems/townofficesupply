
import React, { useState } from "react";
import { motion } from "framer-motion";

interface ProductGalleryProps {
  productImages: (string | undefined)[];
  productName: string;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ 
  productImages, 
  productName 
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Fix image paths by removing the "public" prefix if it exists
  const fixImagePath = (path: string | undefined): string => {
    if (!path) return "https://placehold.co/800x800/e2e8f0/a1a1aa?text=Product+Image";
    return path.startsWith("public/") ? path.substring(7) : path;
  };

  const processedImages = productImages.map(img => fixImagePath(img));

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-4"
    >
      <div className="glass-card p-6 rounded-xl overflow-hidden">
        <img
          src={processedImages[currentImageIndex] || processedImages[0]}
          alt={productName}
          className="w-full h-auto object-contain aspect-square"
        />
      </div>
      
      <div className="grid grid-cols-3 gap-4">
        {processedImages.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`p-3 rounded-lg border ${
              index === currentImageIndex
                ? "border-accent ring-2 ring-accent/20"
                : "border-gray-200 dark:border-gray-800 hover:border-accent/50"
            } bg-white dark:bg-gray-800 transition-all duration-200`}
          >
            <img
              src={image || processedImages[0]}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-auto aspect-square object-contain"
            />
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default ProductGallery;
