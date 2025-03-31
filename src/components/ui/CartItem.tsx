import React from "react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import { fixImagePath } from "@/utils/imagePathUtils";

interface CartItemProps {
  item: {
    product: {
      id: string;
      name: string;
      price: number;
      image?: string;
    };
    quantity: number;
  };
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

  // Use the fixImagePath utility for consistent image path handling
  const imagePath = fixImagePath(product.image);

  return (
    <div className="flex gap-4 py-4 border-b border-gray-200 dark:border-gray-800 last:border-b-0 animate-fade-in">
      <div className="w-20 h-20 bg-white dark:bg-gray-800 rounded-md overflow-hidden">
        <img
          src={imagePath}
          alt={product.name}
          className="w-full h-full object-contain p-1"
        />
      </div>
      
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-medium">{product.name}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            ${product.price.toFixed(2)}
          </p>
        </div>
        
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={decrementQuantity}
          >
            <Minus className="h-4 w-4" />
          </Button>
          
          <span className="w-8 text-center">{quantity}</span>
          
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={incrementQuantity}
          >
            <Plus className="h-4 w-4" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 ml-auto"
            onClick={handleRemove}
          >
            <Trash2 className="h-4 w-4 text-red-500" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
