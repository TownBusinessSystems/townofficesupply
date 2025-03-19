
import React from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/context/CartContext";

interface ActionButtonsProps {
  onSearchClick: () => void;
  onMobileMenuClick: () => void;
  isMobileMenuOpen: boolean;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
  onSearchClick,
  onMobileMenuClick,
  isMobileMenuOpen,
}) => {
  const { cartItems, toggleCart } = useCart();
  
  const cartItemsCount = cartItems.reduce(
    (count, item) => count + item.quantity, 
    0
  );

  return (
    <div className="flex items-center space-x-3">
      <span className="hidden md:block text-foreground font-medium">
        (781) 762 1900
      </span>
      <Button
        variant="outline"
        size="default"
        className="text-foreground hover:bg-accent hover:text-white transition-colors duration-300 relative rounded-full border-accent"
        aria-label="Cart"
        onClick={toggleCart}
      >
        <ShoppingCart size={20} className="mr-1" />
        <span className="hidden sm:inline">Cart</span>
        {cartItemsCount > 0 && (
          <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-accent text-white text-xs animate-scale-in">
            {cartItemsCount}
          </Badge>
        )}
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden text-foreground hover:text-accent transition-colors duration-300"
        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        onClick={onMobileMenuClick}
      >
        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </Button>
    </div>
  );
};

export default ActionButtons;
