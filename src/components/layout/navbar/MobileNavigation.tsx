
import React from "react";
import { Link } from "react-router-dom";
import { Package, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavSearch from "./NavSearch";

interface MobileNavigationProps {
  isOpen: boolean;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ isOpen }) => {
  return (
    <div
      className={`md:hidden glass-effect border-t border-gray-200 dark:border-gray-800 overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? "max-h-96" : "max-h-0"
      }`}
    >
      <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
        <NavSearch />
        
        <div className="flex justify-around mt-4">
          <Link to="/reorder" className="flex flex-col items-center">
            <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full bg-gray-100 hover:bg-accent hover:text-white">
              <Package size={20} />
            </Button>
            <span className="text-xs mt-1">Reorder</span>
          </Link>
          
          <Link to="/track" className="flex flex-col items-center">
            <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full bg-gray-100 hover:bg-accent hover:text-white">
              <MapPin size={20} />
            </Button>
            <span className="text-xs mt-1">Track</span>
          </Link>
          
          <a href="tel:7817621900" className="flex flex-col items-center">
            <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full bg-gray-100 hover:bg-accent hover:text-white">
              <Phone size={20} />
            </Button>
            <span className="text-xs mt-1">Call</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;
