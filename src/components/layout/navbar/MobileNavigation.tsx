
import React from "react";
import { Link } from "react-router-dom";

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
        <Link 
          to="/products" 
          className="text-lg font-medium px-4 py-3 rounded-md hover:bg-accent/10 transition-colors"
        >
          All Products
        </Link>
        <Link 
          to="/products?brand=HP" 
          className="text-lg font-medium px-4 py-3 rounded-md hover:bg-accent/10 transition-colors"
        >
          HP
        </Link>
        <Link 
          to="/products?brand=Dell" 
          className="text-lg font-medium px-4 py-3 rounded-md hover:bg-accent/10 transition-colors"
        >
          Dell
        </Link>
        <Link 
          to="/products?brand=Brother" 
          className="text-lg font-medium px-4 py-3 rounded-md hover:bg-accent/10 transition-colors"
        >
          Brother
        </Link>
      </div>
    </div>
  );
};

export default MobileNavigation;
