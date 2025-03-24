
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
  
  // Debugging
  if (!productImages || productImages.length === 0) {
    console.error("ProductGallery: No product images provided");
  }

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
          onError={(e) => {
            console.error(`Error loading image: ${mainImage}`);
            e.currentTarget.src = "https://placehold.co/800x800/e2e8f0/a1a1aa?text=Image+Not+Found";
          }}
        />
      </div>
    </motion.div>
  );
};

export default ProductGallery;
