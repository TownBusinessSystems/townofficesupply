
import React, { useState } from "react";
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
  const [imageError, setImageError] = useState(false);
  
  // Use our utility function to get the main image path
  const mainImage = fixImagePath(productImages[0]);
  console.log("ProductGallery - product name:", productName, "image path:", mainImage);
  
  // Debugging
  if (!productImages || productImages.length === 0) {
    console.error("ProductGallery: No product images provided for", productName);
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-4"
    >
      <div className="glass-card p-6 rounded-xl overflow-hidden">
        {imageError ? (
          <div className="w-full h-auto aspect-square flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-center p-4">
            <p className="text-muted-foreground">
              {productName}
              <br />
              <span className="text-sm">Image not available</span>
            </p>
          </div>
        ) : (
          <img
            src={mainImage}
            alt={productName}
            className="w-full h-auto object-contain aspect-square"
            onError={(e) => {
              console.error(`Error loading image for ${productName}: ${mainImage}`);
              setImageError(true);
              e.currentTarget.src = "https://placehold.co/800x800/e2e8f0/a1a1aa?text=Image+Not+Found";
            }}
          />
        )}
      </div>
    </motion.div>
  );
};

export default ProductGallery;
