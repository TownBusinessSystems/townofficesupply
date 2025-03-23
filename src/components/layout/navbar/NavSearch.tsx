
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const NavSearch: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <form 
      onSubmit={handleSearch}
      className="relative flex w-full max-w-xl" // Reduced from max-w-3xl to max-w-xl
    >
      <Input
        type="text"
        placeholder="Search by SKU or Printer..."
        className="pr-12 h-10 text-sm rounded-lg border focus-visible:ring-accent/50" // Reduced height from h-12 to h-10 and font size from text-base to text-sm
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button 
        type="submit" 
        size="icon" 
        className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 bg-accent hover:bg-accent/90 text-white" // Reduced button size from h-10 w-10 to h-8 w-8
      >
        <Search size={16} /> {/* Reduced icon size from 20 to 16 */}
      </Button>
    </form>
  );
};

export default NavSearch;
