
import React from "react";
import { ShoppingCart, Printer, Package, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/context/CartContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const CategoryBar: React.FC = () => {
  const { cartItems, toggleCart } = useCart();
  
  const cartItemsCount = cartItems.reduce(
    (count, item) => count + item.quantity, 
    0
  );

  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-3 w-full shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  className="text-lg font-medium flex items-center gap-2 h-12"
                >
                  <Package className="h-5 w-5" />
                  SHOP BY CARTRIDGE
                  <ChevronDown className="h-4 w-4 opacity-70" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white">
                <DropdownMenuItem>HP Cartridges</DropdownMenuItem>
                <DropdownMenuItem>Canon Cartridges</DropdownMenuItem>
                <DropdownMenuItem>Brother Cartridges</DropdownMenuItem>
                <DropdownMenuItem>Epson Cartridges</DropdownMenuItem>
                <DropdownMenuItem>Dell Cartridges</DropdownMenuItem>
                <DropdownMenuItem>Lexmark Cartridges</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  className="text-lg font-medium flex items-center gap-2 h-12"
                >
                  <Printer className="h-5 w-5" />
                  SHOP BY PRINTER MODEL
                  <ChevronDown className="h-4 w-4 opacity-70" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white">
                <DropdownMenuItem>HP Printers</DropdownMenuItem>
                <DropdownMenuItem>Canon Printers</DropdownMenuItem>
                <DropdownMenuItem>Brother Printers</DropdownMenuItem>
                <DropdownMenuItem>Epson Printers</DropdownMenuItem>
                <DropdownMenuItem>Dell Printers</DropdownMenuItem>
                <DropdownMenuItem>Lexmark Printers</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="bg-accent hover:bg-accent/90 text-white transition-colors duration-300 relative rounded-full h-12 w-12 flex items-center justify-center"
            aria-label="Cart"
            onClick={toggleCart}
          >
            <ShoppingCart size={24} />
            {cartItemsCount > 0 && (
              <Badge className="absolute -top-1 -right-1 h-6 w-6 flex items-center justify-center p-0 bg-white text-accent text-xs font-bold animate-scale-in">
                {cartItemsCount}
              </Badge>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CategoryBar;
