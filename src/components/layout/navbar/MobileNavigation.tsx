
import React from "react";
import { Link } from "react-router-dom";
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
        <Button asChild className="bg-accent hover:bg-accent/90 text-white w-full justify-center">
          <Link to="/products">
            Ink & Toner
          </Link>
        </Button>
        
        <NavSearch />
      </div>
    </div>
  );
};

export default MobileNavigation;
