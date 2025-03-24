
import { useState, useEffect } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { Product } from "@/context/CartContext";
import { products } from "@/data/productData";

export const useProductFilters = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  
  // Filter states
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [brandFilters, setBrandFilters] = useState<string[]>([]);
  const [colorFilters, setColorFilters] = useState<string[]>([]);
  const [yieldTypeFilters, setYieldTypeFilters] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 250]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  
  const brands = ["HP", "Canon", "Epson", "Brother", "Lexmark"];
  
  // Get the category, brand, and search query from URL query params if they exist
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get("category");
    const brand = params.get("brand");
    const search = params.get("search");
    
    if (category === "ink" || category === "toner") {
      setCategoryFilter(category);
    } else {
      setCategoryFilter(null);
    }
    
    if (brand && brands.includes(brand)) {
      setBrandFilters([brand]);
    }
    
    if (search) {
      setSearchQuery(search);
    } else {
      setSearchQuery("");
    }
  }, [location.search]);
  
  // Apply filters to products
  useEffect(() => {
    let result = [...products];
    
    // Filter by search query (model number or printer)
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.oemNumber?.toLowerCase().includes(query) ||
        product.compatibility?.some(printer => printer.toLowerCase().includes(query))
      );
    }
    
    // Filter by category
    if (categoryFilter) {
      result = result.filter(product => product.category === categoryFilter);
    }
    
    // Filter by brands
    if (brandFilters.length > 0) {
      result = result.filter(product => brandFilters.includes(product.brand));
    }
    
    // Filter by colors
    if (colorFilters.length > 0) {
      result = result.filter(product => 
        product.color && colorFilters.includes(product.color)
      );
    }
    
    // Filter by yield type
    if (yieldTypeFilters.length > 0) {
      result = result.filter(product => 
        product.cartridgeYieldType && yieldTypeFilters.includes(product.cartridgeYieldType)
      );
    }
    
    // Filter by price range
    result = result.filter(
      product => product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    setFilteredProducts(result);
  }, [categoryFilter, brandFilters, colorFilters, yieldTypeFilters, priceRange, searchQuery]);
  
  // Toggle brand filter
  const toggleBrandFilter = (brand: string) => {
    setBrandFilters(prev => 
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };
  
  // Toggle color filter
  const toggleColorFilter = (color: string) => {
    setColorFilters(prev => 
      prev.includes(color)
        ? prev.filter(c => c !== color)
        : [...prev, color]
    );
  };
  
  // Toggle yield type filter
  const toggleYieldTypeFilter = (yieldType: string) => {
    setYieldTypeFilters(prev => 
      prev.includes(yieldType)
        ? prev.filter(y => y !== yieldType)
        : [...prev, yieldType]
    );
  };
  
  // Clear search query
  const clearSearchQuery = () => {
    setSearchQuery("");
    
    // Update URL without search parameter
    const params = new URLSearchParams(location.search);
    params.delete("search");
    
    navigate({
      pathname: location.pathname,
      search: params.toString() ? `?${params.toString()}` : ""
    }, { replace: true });
  };
  
  // Clear all filters
  const clearFilters = () => {
    setBrandFilters([]);
    setColorFilters([]);
    setYieldTypeFilters([]);
    setPriceRange([0, 250]);
    setSearchQuery("");
    
    // Don't clear category from URL
    const params = new URLSearchParams(location.search);
    const newParams = new URLSearchParams();
    
    if (params.has("category")) {
      newParams.set("category", params.get("category")!);
    }
    
    navigate({
      pathname: location.pathname,
      search: newParams.toString() ? `?${newParams.toString()}` : ""
    }, { replace: true });
  };
  
  return {
    filteredProducts,
    categoryFilter,
    brandFilters,
    colorFilters,
    yieldTypeFilters,
    priceRange,
    searchQuery,
    setCategoryFilter,
    toggleBrandFilter,
    toggleColorFilter,
    toggleYieldTypeFilter,
    setPriceRange,
    clearSearchQuery,
    clearFilters,
    setSearchQuery
  };
};
