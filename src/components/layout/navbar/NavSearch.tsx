
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { useNavSearch } from "@/hooks/useNavSearch";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLocation } from "react-router-dom";

const NavSearch: React.FC = () => {
  const { searchQuery, handleSearch, handleSearchInputChange, setSearchQuery } = useNavSearch();
  const isMobile = useIsMobile();
  const location = useLocation();

  // Clear search input when navigating away from products page
  useEffect(() => {
    if (!location.pathname.includes("/products")) {
      setSearchQuery("");
    }
  }, [location.pathname, setSearchQuery]);

  return (
    <form 
      onSubmit={handleSearch}
      className="relative flex w-full max-w-xl transition-all duration-300"
    >
      <Input
        type="text"
        placeholder={isMobile ? "Search..." : "Search by Model Number or Printer..."}
        className="pr-12 h-10 md:h-12 text-sm rounded-lg border focus-visible:ring-accent/50 transition-all"
        value={searchQuery}
        onChange={handleSearchInputChange}
        aria-label="Search products"
      />
      {searchQuery ? (
        <Button 
          type="button" 
          onClick={() => setSearchQuery("")}
          size="icon" 
          variant="ghost"
          className="absolute right-9 top-1/2 -translate-y-1/2 h-8 w-8 md:h-10 md:w-10 text-muted-foreground
                    touch-manipulation transition-all"
          aria-label="Clear search"
        >
          <X size={isMobile ? 16 : 20} />
        </Button>
      ) : null}
      <Button 
        type="submit" 
        size="icon" 
        className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 md:h-10 md:w-10 bg-accent hover:bg-accent/90 text-white 
                  touch-manipulation active:scale-95 transition-all"
        aria-label="Submit search"
      >
        <Search size={isMobile ? 16 : 20} />
      </Button>
    </form>
  );
};

export default NavSearch;
