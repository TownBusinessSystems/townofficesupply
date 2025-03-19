
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
        {/* Navigation items removed as requested */}
      </div>
    </div>
  );
};

export default MobileNavigation;
