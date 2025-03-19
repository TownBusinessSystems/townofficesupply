
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { searchItems, SearchItem } from "@/data/searchData";

export function useSearch(open: boolean, onOpenChange: (open: boolean) => void) {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  
  // Reset search when dialog opens
  useEffect(() => {
    if (open) {
      setSearchQuery("");
    }
  }, [open]);

  const filteredItems = searchItems.filter((item) => {
    if (!searchQuery) return true;
    return item.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const handleSelect = (item: SearchItem) => {
    onOpenChange(false);
    navigate(item.url);
  };

  // Group items by category
  const groupedItems = {
    ink: filteredItems.filter((item) => item.category === "ink"),
    toner: filteredItems.filter((item) => item.category === "toner"),
    category: filteredItems.filter((item) => item.category === "category"),
  };

  return {
    searchQuery,
    setSearchQuery,
    filteredItems,
    groupedItems,
    handleSelect
  };
}
