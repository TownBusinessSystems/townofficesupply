
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const HeroSearch: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <motion.form 
      onSubmit={handleSearch}
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="relative flex w-full max-w-sm"
    >
      <Input
        type="text"
        placeholder="Search by brand, type, or color..."
        className="pr-10 h-10 text-sm rounded-lg border focus-visible:ring-accent/50"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button 
        type="submit" 
        size="icon" 
        className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 bg-accent hover:bg-accent/90 text-white"
        whileTap={{ scale: 0.95 }}
        as={motion.button}
      >
        <Search size={16} />
      </Button>
    </motion.form>
  );
};

export default HeroSearch;
