
import React from "react";
import { ShoppingCart, Menu, X, PhoneCall, RotateCw, Truck } from "lucide-react";
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
    <div className="flex items-center space-x-5">
      <div className="flex flex-col items-center">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full h-14 w-14 flex flex-col items-center justify-center mb-0.5"
          aria-label="Reorder"
        >
          <RotateCw size={26} className="font-bold" />
        </Button>
        <span className="text-xs font-medium mt-0.5">Reorder</span>
      </div>
      
      <div className="flex flex-col items-center">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full h-14 w-14 flex flex-col items-center justify-center mb-0.5"
          aria-label="Track"
        >
          <Truck size={26} className="font-bold" />
        </Button>
        <span className="text-xs font-medium mt-0.5">Track</span>
      </div>
      
      <div className="flex flex-col items-center">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full h-14 w-14 flex flex-col items-center justify-center mb-0.5"
          aria-label="Call"
        >
          <PhoneCall size={26} className="font-bold" />
        </Button>
        <span className="text-xs font-medium mt-0.5">Call</span>
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
