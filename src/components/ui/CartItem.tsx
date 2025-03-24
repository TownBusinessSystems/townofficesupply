
import React from "react";
import { Trash2, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart, CartItem as CartItemType } from "@/context/CartContext";

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { removeFromCart, updateQuantity } = useCart();
  const { product, quantity } = item;

  const handleRemove = () => {
    removeFromCart(product.id);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      updateQuantity(product.id, quantity - 1);
    }
  };

  const incrementQuantity = () => {
    updateQuantity(product.id, quantity + 1);
  };

  // Fix image path by removing the "public" prefix if it exists
  const imagePath = product.image.startsWith("public/") 
    ? product.image.substring(7) 
    : product.image;

  return (
    <div className="flex gap-4 py-4 border-b border-gray-200 dark:border-gray-800 last:border-b-0 animate-fade-in">
      <div className="w-20 h-20 bg-white dark:bg-gray-800 rounded-md overflow-hidden">
        <img
          src={imagePath || "https://placehold.co/200x200/e2e8f0/a1a1aa?text=Product"}
          alt={product.name}
          className="w-full h-full object-contain p-1"
        />
      </div>
      
      <div className="flex-1">
        <div className="flex justify-between">
          <div>
            <h4 className="font-medium text-sm mb-1 line-clamp-1">{product.name}</h4>
            <p className="text-xs text-muted-foreground mb-2">
              {product.brand} · {product.color || "Standard"}
            </p>
          </div>
          
          <button 
            onClick={handleRemove}
            className="text-muted-foreground hover:text-destructive transition-colors"
            aria-label="Remove item"
          >
            <Trash2 size={16} />
          </button>
        </div>
        
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center">
            <Button
              variant="outline"
              size="icon"
              className="h-7 w-7 rounded-full"
              onClick={decrementQuantity}
              disabled={quantity <= 1}
              aria-label="Decrease quantity"
            >
              <Minus size={14} />
            </Button>
            
            <span className="mx-2 w-6 text-center text-sm">{quantity}</span>
            
            <Button
              variant="outline"
              size="icon"
              className="h-7 w-7 rounded-full"
              onClick={incrementQuantity}
              aria-label="Increase quantity"
            >
              <Plus size={14} />
            </Button>
          </div>
          
          <span className="font-medium">
            ${(product.price * quantity).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
