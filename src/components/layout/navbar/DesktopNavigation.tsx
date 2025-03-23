
import React from "react";
import { Link } from "react-router-dom";
import { RefreshCw, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavSearch from "./NavSearch";

const DesktopNavigation: React.FC = () => {
  return (
    <div className="hidden md:flex items-center space-x-6 flex-1 justify-center">
      <NavSearch />
      
      <div className="flex items-center gap-6">
        <Link to="/reorder" className="flex flex-col items-center group">
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-12 w-12 rounded-full bg-gray-100 group-hover:bg-accent group-hover:text-white"
          >
            <RefreshCw size={30} className="font-bold" />
          </Button>
          <span className="text-xs mt-0.5 font-medium">Reorder</span>
        </Link>
        
        <Link to="/track" className="flex flex-col items-center group">
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-12 w-12 rounded-full bg-gray-100 group-hover:bg-accent group-hover:text-white"
          >
            <MapPin size={30} className="font-bold" />
          </Button>
          <span className="text-xs mt-0.5 font-medium">Track</span>
        </Link>
        
        <a href="tel:7817621900" className="flex flex-col items-center group">
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-12 w-12 rounded-full bg-gray-100 group-hover:bg-accent group-hover:text-white"
          >
            <Phone size={30} className="font-bold" />
          </Button>
          <span className="text-xs mt-0.5 font-medium">Call</span>
        </a>
      </div>
    </div>
  );
};

export default DesktopNavigation;
