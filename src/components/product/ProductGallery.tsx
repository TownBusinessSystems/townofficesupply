
import React from "react";
import { motion } from "framer-motion";

interface ProductGalleryProps {
  productImages: (string | undefined)[];
  productName: string;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ 
  productImages, 
  productName 
}) => {
  // Fix image paths by removing the "public" prefix if it exists
  const fixImagePath = (path: string | undefined): string => {
    if (!path) return "https://placehold.co/800x800/e2e8f0/a1a1aa?text=Product+Image";
    
    // Handle various image path scenarios
    if (path.startsWith("public/")) {
      return path.substring(7);
    } else if (path.startsWith("/")) {
      return path.substring(1);
    }
    return path;
  };

  const mainImage = fixImagePath(productImages[0]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-4"
    >
      <div className="glass-card p-6 rounded-xl overflow-hidden">
        <img
          src={mainImage}
          alt={productName}
          className="w-full h-auto object-contain aspect-square"
        />
      </div>
    </motion.div>
  );
};

export default ProductGallery;
