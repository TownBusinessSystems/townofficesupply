
import React from "react";
import { motion } from "framer-motion";
import { fixImagePath } from "@/utils/imagePathUtils";

interface ProductGalleryProps {
  productImages: (string | undefined)[];
  productName: string;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ 
  productImages, 
  productName 
}) => {
  // Use our utility function to get the main image path
  const mainImage = fixImagePath(productImages[0]);
  console.log("ProductGallery using utility function - image path:", mainImage);

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
