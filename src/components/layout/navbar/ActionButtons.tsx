
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
          className="rounded-full h-16 w-16 flex flex-col items-center justify-center mb-0" // Increased from h-14 w-14
          aria-label="Reorder"
        >
          <RotateCw size={28} className="font-bold" /> {/* Increased from 26 */}
        </Button>
        <span className="text-xs font-medium -mt-0.5">Reorder</span> {/* Adjusted margin */}
      </div>
      
      <div className="flex flex-col items-center">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full h-16 w-16 flex flex-col items-center justify-center mb-0" // Increased from h-14 w-14
          aria-label="Track"
        >
          <Truck size={28} className="font-bold" /> {/* Increased from 26 */}
        </Button>
        <span className="text-xs font-medium -mt-0.5">Track</span> {/* Adjusted margin */}
      </div>
      
      <div className="flex flex-col items-center">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full h-16 w-16 flex flex-col items-center justify-center mb-0" // Increased from h-14 w-14
          aria-label="Call"
        >
          <PhoneCall size={28} className="font-bold" /> {/* Increased from 26 */}
        </Button>
        <span className="text-xs font-medium -mt-0.5">Call</span> {/* Adjusted margin */}
      </div>

      {!hideCart && (
        <Button
          variant="ghost"
          size="default"
          className="relative rounded-full bg-accent text-white hover:bg-accent/90 transition-colors duration-300 h-16 w-16 flex items-center justify-center" // Updated styles for cart button
          aria-label="Cart"
          onClick={toggleCart}
        >
          <ShoppingCart size={28} /> {/* Increased size */}
          <Badge className="absolute -top-1 -right-1 h-6 w-6 flex items-center justify-center p-0 bg-white text-accent text-xs">
            {cartItemsCount}
          </Badge>
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
