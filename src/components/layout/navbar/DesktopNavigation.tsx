
import React from "react";
import { Link } from "react-router-dom";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const DesktopNavigation: React.FC = () => {
  return (
    <div className="hidden md:flex items-center space-x-6 flex-1 justify-center">
      <NavigationMenu>
        <NavigationMenuList className="text-lg">
          <NavigationMenuItem>
            <Link to="/products">
              <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-base md:text-lg py-2.5 px-5`}>
                All Products
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <Link to="/products?brand=HP">
              <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-base md:text-lg py-2.5 px-5`}>
                HP
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <Link to="/products?brand=Dell">
              <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-base md:text-lg py-2.5 px-5`}>
                Dell
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <Link to="/products?brand=Brother">
              <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-base md:text-lg py-2.5 px-5`}>
                Brother
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default DesktopNavigation;
