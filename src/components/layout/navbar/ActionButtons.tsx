
import React from "react";
import { ShoppingCart, Menu, X, PhoneCall, RotateCcw, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/context/CartContext";

interface ActionButtonsProps {
  onSearchClick: () => void;
  onMobileMenuClick: () => void;
  isMobileMenuOpen: boolean;
  hideCart?: boolean;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
  onSearchClick,
  onMobileMenuClick,
  isMobileMenuOpen,
  hideCart = false,
}) => {
  const { cartItems, toggleCart } = useCart();
  
  const cartItemsCount = cartItems.reduce(
    (count, item) => count + item.quantity, 
    0
  );

  return (
    <div className="flex items-center space-x-4">
      <div className="flex flex-col items-center">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full h-12 w-12 flex flex-col items-center justify-center"
          aria-label="Reorder"
        >
          <RotateCcw size={22} />
        </Button>
        <span className="text-xs mt-1">Reorder</span>
      </div>
      
      <div className="flex flex-col items-center">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full h-12 w-12 flex flex-col items-center justify-center"
          aria-label="Track"
        >
          <Truck size={22} />
        </Button>
        <span className="text-xs mt-1">Track</span>
      </div>
      
      <div className="flex flex-col items-center">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full h-12 w-12 flex flex-col items-center justify-center"
          aria-label="Call"
        >
          <PhoneCall size={22} />
        </Button>
        <span className="text-xs mt-1">Call</span>
      </div>

      {!hideCart && (
        <Button
          variant="ghost"
          size="default"
          className="text-foreground hover:bg-accent hover:text-white transition-colors duration-300 relative rounded-full text-base md:text-lg px-4 py-3 h-auto"
          aria-label="Cart"
          onClick={toggleCart}
        >
          <ShoppingCart size={22} className="mr-1" />
          <span className="hidden sm:inline">Cart</span>
          {cartItemsCount > 0 && (
            <Badge className="absolute -top-1 -right-1 h-6 w-6 flex items-center justify-center p-0 bg-accent text-white text-xs animate-scale-in">
              {cartItemsCount}
            </Badge>
          )}
        </Button>
      )}
      
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden text-foreground hover:text-accent transition-colors duration-300 h-12 w-12"
        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        onClick={onMobileMenuClick}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </Button>
    </div>
  );
};

export default ActionButtons;
