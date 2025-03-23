
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
      className="relative flex w-full max-w-3xl mx-auto" // Added mx-auto to center it
    >
      <Input
        type="text"
        placeholder="Search by SKU or Printer..."
        className="pr-12 h-14 text-base rounded-lg border focus-visible:ring-accent/50" // Increased height from h-12 to h-14
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button 
        type="submit" 
        size="icon" 
        className="absolute right-1 top-1/2 -translate-y-1/2 h-12 w-12 bg-accent hover:bg-accent/90 text-white" // Increased from h-10 w-10 to h-12 w-12
      >
        <Search size={22} /> {/* Increased icon size from 20 to 22 */}
      </Button>
    </form>
  );
};

export default NavSearch;
