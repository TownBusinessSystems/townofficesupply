
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export function useNavSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Preserve existing query parameters
      const params = new URLSearchParams(location.search);
      params.set("search", searchQuery.trim());
      
      navigate({
        pathname: "/products",
        search: params.toString()
      });
    }
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return {
    searchQuery,
    setSearchQuery,
    handleSearch,
    handleSearchInputChange
  };
}
