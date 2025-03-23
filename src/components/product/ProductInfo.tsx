
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Minus, Plus, ShieldCheck, Truck, Undo } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Product, useCart } from "@/context/CartContext";

interface ProductInfoProps {
  product: Product;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  
  // Calculate discount percentage if originalPrice exists
  const discountPercentage = product?.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 0;
    
  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  // Determine if product is a toner cartridge or drum unit
  const productType = product.name.toLowerCase().includes('drum') 
    ? "Drum Unit" 
    : product.category === "ink" 
      ? "Ink Cartridge" 
      : "Toner Cartridge";

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div>
        <div className="flex items-center mb-2 space-x-2">
          <Badge className="bg-accent text-white">
            {productType}
          </Badge>
          <Badge variant="outline">
            {product.color || "Standard"}
          </Badge>
          {discountPercentage > 0 && (
            <Badge className="bg-red-500 text-white">
              {discountPercentage}% OFF
            </Badge>
          )}
        </div>
        
        <h1 className="text-3xl font-display font-medium mb-2">
          {product.name}
        </h1>
        
        <div className="flex flex-wrap items-center mb-4 gap-3">
          <span className="text-sm text-muted-foreground">
            Brand: <span className="font-medium">{product.brand}</span>
          </span>
          <span className="text-sm text-muted-foreground">
            Yield: <span className="font-medium">{product.yield || "Standard"} pages</span>
          </span>
          <span className="text-sm text-muted-foreground">
            Type: <span className="font-medium">{product.cartridgeYieldType || "Standard"}</span>
          </span>
        </div>
        
        <div className="mb-4">
          <div className="flex items-center">
            <span className="text-2xl font-semibold">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <>
                <span className="text-base line-through ml-3 text-muted-foreground">
                  ${product.originalPrice.toFixed(2)}
                </span>
                <span className="text-sm ml-2 text-red-500 font-medium">
                  Save ${(product.originalPrice - product.price).toFixed(2)}
                </span>
              </>
            )}
          </div>
        </div>
      </div>
      
      <div className="border-t border-b border-gray-200 dark:border-gray-800 py-6">
        <h3 className="font-medium mb-3">Description</h3>
        <p className="text-muted-foreground">
          {product.description || `Original ${product.brand} ${product.category === "ink" ? "ink" : "toner"} cartridge designed for optimal print quality and reliability. Compatible with various ${product.brand} printer models including ${product.compatibility?.join(", ")}.`}
        </p>
      </div>
      
      <div className="space-y-4">
        <h3 className="font-medium">Compatible Printers</h3>
        <div className="flex flex-wrap gap-2">
          {product.compatibility?.map((printer) => (
            <Badge 
              key={printer} 
              variant="outline"
              className="py-1.5"
            >
              {printer}
            </Badge>
          ))}
        </div>
      </div>
      
      <div className="space-y-4 pt-4">
        <div className="flex items-center">
          <span className="mr-4">Quantity:</span>
          <div className="flex items-center">
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-l-lg rounded-r-none"
              onClick={decrementQuantity}
              disabled={quantity <= 1}
            >
              <Minus size={16} />
            </Button>
            
            <span className="h-10 w-16 flex items-center justify-center border-y border-gray-200 dark:border-gray-800">
              {quantity}
            </span>
            
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-r-lg rounded-l-none"
              onClick={incrementQuantity}
            >
              <Plus size={16} />
            </Button>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button 
            className="bg-accent hover:bg-accent/90 text-white py-6 h-auto flex-1"
            onClick={handleAddToCart}
          >
            <ShoppingCart size={18} className="mr-2" />
            Add to Cart
          </Button>
          
          <Button 
            variant="outline" 
            className="py-6 h-auto"
          >
            Buy Now
          </Button>
        </div>
      </div>
      
      <div className="pt-6 space-y-4">
        <div className="flex items-start">
          <ShieldCheck size={20} className="text-accent mr-4 mt-0.5" />
          <div>
            <h4 className="font-medium text-sm">Lifetime Guarantee</h4>
            <p className="text-sm text-muted-foreground">
              All our compatible cartridges come with a lifetime guarantee for peace of mind.
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Truck size={20} className="text-accent mr-4 mt-0.5" />
          <div>
            <h4 className="font-medium text-sm">Fast Shipping</h4>
            <p className="text-sm text-muted-foreground">
              Enjoy free 1-3 day shipping on all orders.
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Undo size={20} className="text-accent mr-4 mt-0.5" />
          <div>
            <h4 className="font-medium text-sm">Easy Returns</h4>
            <p className="text-sm text-muted-foreground">
              30-day hassle-free return policy.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductInfo;
