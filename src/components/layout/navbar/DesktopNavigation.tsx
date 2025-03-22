
import React from "react";
import { Link } from "react-router-dom";
import { Package, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavSearch from "./NavSearch";

const DesktopNavigation: React.FC = () => {
  return (
    <div className="hidden md:flex items-center space-x-6 flex-1 justify-center">
      <NavSearch />
      
      <div className="flex items-center gap-4">
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
  );
};

export default DesktopNavigation;
