
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SearchDialog from "@/components/ui/SearchDialog";
import Logo from "./navbar/Logo";
import DesktopNavigation from "./navbar/DesktopNavigation";
import MobileNavigation from "./navbar/MobileNavigation";
import ActionButtons from "./navbar/ActionButtons";
import CategoryBar from "./navbar/CategoryBar";
import NavSearch from "./navbar/NavSearch";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const handleSearchClick = () => setIsSearchOpen(true);

  return (
    <>
      <header
        className={`relative z-40 transition-all duration-300 ${
          isScrolled 
            ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm" 
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-28 md:h-32">
            {/* Logo with more space */}
            <div className="flex-shrink-0">
              <Logo />
            </div>

            {/* Desktop Navigation */}
            <div className="flex-grow flex items-center justify-center max-w-2xl mx-auto">
              <NavSearch />
            </div>

            {/* Action Buttons */}
            <ActionButtons 
              onSearchClick={handleSearchClick}
              onMobileMenuClick={toggleMobileMenu}
              isMobileMenuOpen={isMobileMenuOpen}
              hideCart={true} // Hide the cart button in the top navbar
            />
          </div>
        </div>

        {/* Mobile Menu */}
        <MobileNavigation isOpen={isMobileMenuOpen} />

        {/* Search Dialog */}
        <SearchDialog open={isSearchOpen} onOpenChange={setIsSearchOpen} />
      </header>

      {/* New Category Bar that will be sticky */}
      <div className={`sticky top-0 left-0 right-0 z-50 ${
        isScrolled ? "shadow-md" : ""
      }`}>
        <CategoryBar />
      </div>
    </>
  );
};

export default Navbar;
