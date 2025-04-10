
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart, Product } from "@/context/CartContext";
import { fixImagePath } from "@/utils/imagePathUtils";

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [imageError, setImageError] = useState(false);
  
  // Calculate discount percentage if originalPrice exists
  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 0;

  // Use our utility function to handle image paths
  const imagePath = fixImagePath(product.image);
  console.log("ProductCard - product id:", product.id, "image path:", imagePath);
    
  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent navigation when clicking the add to cart button
    addToCart(product);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="glass-card rounded-xl overflow-hidden group h-full flex flex-col cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="overflow-hidden relative">
        {imageError ? (
          <div className="w-full h-48 flex items-center justify-center bg-white dark:bg-gray-900 p-4 text-center">
            <p className="text-muted-foreground">
              {product.name}
              <br />
              <span className="text-xs">Image not available</span>
            </p>
          </div>
        ) : (
          <img
            src={imagePath}
            alt={product.name}
            className="w-full h-48 object-contain object-center p-4 bg-white dark:bg-gray-900 transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
            onError={(e) => {
              console.error(`Error loading image for product ${product.id}: ${imagePath}`);
              setImageError(true);
            }}
          />
        )}
        
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          <Badge className="bg-accent text-white">
            {product.category === "ink" ? "Ink" : "Toner"}
          </Badge>
          
          {product.color && (
            <Badge variant="outline" className="bg-white/70 dark:bg-black/70 backdrop-blur-sm">
              {product.color}
            </Badge>
          )}
          
          {discountPercentage > 0 && (
            <Badge className="bg-red-500 text-white">
              {discountPercentage}% OFF
            </Badge>
          )}
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="mb-2">
          <span className="text-xs text-muted-foreground font-medium">
            {product.brand}
          </span>
        </div>
        
        <h3 className="font-medium text-lg mb-1 line-clamp-2 text-balance">{product.name}</h3>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {product.compatibility && `Compatible with ${product.compatibility.slice(0, 3).join(", ")}${product.compatibility.length > 3 ? '...' : ''}`}
        </p>
        
        <div className="mt-auto flex items-end justify-between">
          <div>
            <span className="text-lg font-semibold">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-sm line-through ml-2 text-muted-foreground">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
            {product.yield && (
              <span className="text-xs block text-muted-foreground mt-1">
                {product.yield} pages
              </span>
            )}
          </div>
          
          <div>
            <Button 
              onClick={handleAddToCart}
              size="icon"
              className="rounded-full h-9 w-9 bg-accent hover:bg-accent/90 text-white"
            >
              <ShoppingCart size={18} />
              <span className="sr-only">Add to cart</span>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
