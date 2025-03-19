
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { NavLinkType } from "./types";

interface MobileNavigationProps {
  navLinks: NavLinkType[];
  isOpen: boolean;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ navLinks, isOpen }) => {
  const location = useLocation();
  
  return (
    <div
      className={`md:hidden glass-effect border-t border-gray-200 dark:border-gray-800 overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? "max-h-96" : "max-h-0"
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
        {navLinks.map((link) => (
          <div key={link.name}>
            <Link
              to={link.path}
              className={`block py-3 text-base font-medium transition-colors duration-300 px-4 rounded-md ${
                location.pathname === link.path
                  ? "text-accent bg-accent/10"
                  : "hover:text-accent hover:bg-accent/5"
              }`}
            >
              {link.name}
            </Link>
            
            {/* Mobile Sublinks */}
            {link.sublinks && (
              <div className="pl-4 mt-1 border-l-2 border-gray-200 dark:border-gray-700 space-y-2">
                {link.sublinks.map((sublink) => (
                  <Link
                    key={sublink.name}
                    to={sublink.path}
                    className="block py-2 px-3 text-sm text-muted-foreground hover:text-accent transition-colors duration-200"
                  >
                    {sublink.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default MobileNavigation;
