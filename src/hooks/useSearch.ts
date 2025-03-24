
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { searchItems, SearchItem } from "@/data/searchData";

// Key for storing recent searches in localStorage
const RECENT_SEARCHES_KEY = "recent-searches";

export function useSearch(open: boolean, onOpenChange: (open: boolean) => void) {
  const [searchQuery, setSearchQuery] = useState("");
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const navigate = useNavigate();
  
  // Load recent searches from localStorage on mount
  useEffect(() => {
    const savedSearches = localStorage.getItem(RECENT_SEARCHES_KEY);
    if (savedSearches) {
      try {
        const parsedSearches = JSON.parse(savedSearches);
        if (Array.isArray(parsedSearches)) {
          setRecentSearches(parsedSearches);
        }
      } catch (e) {
        console.error("Failed to parse recent searches", e);
      }
    }
  }, []);
  
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
    
    // Save search term if it's a product search
    if (item.category === "ink" || item.category === "toner") {
      saveRecentSearch(item.name);
    }
    
    navigate(item.url);
  };
  
  // Save a search term to recent searches
  const saveRecentSearch = (term: string) => {
    // Add the new term and limit to 5 most recent, avoiding duplicates
    const newSearches = [term, ...recentSearches.filter(s => s !== term)].slice(0, 5);
    setRecentSearches(newSearches);
    
    // Save to localStorage
    localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(newSearches));
  };
  
  // Clear all recent searches
  const clearRecentSearches = () => {
    setRecentSearches([]);
    localStorage.removeItem(RECENT_SEARCHES_KEY);
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
    recentSearches,
    handleSelect,
    saveRecentSearch,
    clearRecentSearches
  };
}
