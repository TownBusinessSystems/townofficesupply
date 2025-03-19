
import React from "react";
import { ShoppingCart, Search, Menu, X } from "lucide-react";
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
      <Button
        variant="ghost"
        size="icon"
        className="text-foreground hover:text-accent transition-colors duration-300"
        aria-label="Search"
        onClick={onSearchClick}
      >
        <Search size={20} />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="text-foreground hover:text-accent transition-colors duration-300 relative"
        aria-label="Cart"
        onClick={toggleCart}
      >
        <ShoppingCart size={20} />
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
