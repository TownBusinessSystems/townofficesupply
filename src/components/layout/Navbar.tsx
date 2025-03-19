
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  ShoppingCart, 
  Search, 
  Menu, 
  X,
  ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartItems, toggleCart } = useCart();
  const location = useLocation();
  
  const cartItemsCount = cartItems.reduce(
    (count, item) => count + item.quantity, 
    0
  );

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

  const navLinks = [
    { name: "Home", path: "/" },
    { 
      name: "Products", 
      path: "/products",
      sublinks: [
        { name: "Ink Cartridges", path: "/products?category=ink" },
        { name: "Toner Cartridges", path: "/products?category=toner" }
      ]
    },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2 transition-opacity duration-300 hover:opacity-80"
          >
            <span className="text-xl md:text-2xl font-display font-semibold">
              Town Office Supply
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  to={link.path}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    location.pathname === link.path
                      ? "text-accent"
                      : "hover:text-accent"
                  }`}
                >
                  <div className="flex items-center gap-1">
                    {link.name}
                    {link.sublinks && <ChevronDown size={14} />}
                  </div>
                </Link>
                
                {/* Dropdown menu */}
                {link.sublinks && (
                  <div className="absolute left-0 mt-2 w-48 origin-top-left glass-card rounded-md shadow-glossy opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="py-2">
                      {link.sublinks.map((sublink) => (
                        <Link
                          key={sublink.name}
                          to={sublink.path}
                          className="block px-4 py-2 text-sm hover:bg-accent/10 transition-colors duration-200"
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground hover:text-accent transition-colors duration-300"
              aria-label="Search"
            >
              <Search size={20} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground hover:text-accent transition-colors duration-300 relative"
              aria-label="Cart"
              onClick={toggleCart}
            >
              <ShoppingCart size={20} />
              {cartItemsCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-accent text-white text-xs animate-scale-in">
                  {cartItemsCount}
                </Badge>
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-foreground hover:text-accent transition-colors duration-300"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden glass-effect border-t border-gray-200 dark:border-gray-800 overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <div key={link.name}>
              <Link
                to={link.path}
                className={`block py-2 text-base font-medium transition-colors duration-300 ${
                  location.pathname === link.path
                    ? "text-accent"
                    : "hover:text-accent"
                }`}
              >
                {link.name}
              </Link>
              
              {/* Mobile Sublinks */}
              {link.sublinks && (
                <div className="pl-4 mt-1 border-l-2 border-gray-200 dark:border-gray-700 space-y-1">
                  {link.sublinks.map((sublink) => (
                    <Link
                      key={sublink.name}
                      to={sublink.path}
                      className="block py-1 text-sm text-muted-foreground hover:text-accent transition-colors duration-200"
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
    </header>
  );
};

export default Navbar;
