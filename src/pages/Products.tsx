
import React, { useState, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { X, Filter, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import ProductCard from "@/components/ui/ProductCard";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Product } from "@/context/CartContext";
import CartDrawer from "@/components/ui/CartDrawer";
import { products } from "@/data/productData";

const brands = ["HP", "Canon", "Epson", "Brother", "Lexmark"];
const colors = ["Black", "Cyan", "Magenta", "Yellow", "Tri-Color"];
const yieldTypes = ["Standard Yield", "High Yield"];

const Products = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Filter states
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [brandFilters, setBrandFilters] = useState<string[]>([]);
  const [colorFilters, setColorFilters] = useState<string[]>([]);
  const [yieldTypeFilters, setYieldTypeFilters] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 250]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  
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
  
  // Clear all filters
  const clearFilters = () => {
    setBrandFilters([]);
    setColorFilters([]);
    setYieldTypeFilters([]);
    setPriceRange([0, 250]);
    
    // Don't clear category or search from URL
    const params = new URLSearchParams(location.search);
    const newParams = new URLSearchParams();
    
    if (params.has("category")) {
      newParams.set("category", params.get("category")!);
    }
    
    if (params.has("search")) {
      newParams.set("search", params.get("search")!);
    }
    
    window.history.replaceState({}, "", 
      location.pathname + (newParams.toString() ? `?${newParams.toString()}` : "")
    );
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <CartDrawer />
      
      <main className="flex-grow pt-16">
        <section className="py-12 bg-gray-50 dark:bg-gray-900/50">
          <div className="container px-4 mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
              <div>
                <h1 className="text-3xl md:text-4xl font-display font-medium">
                  {searchQuery 
                    ? `Search Results for "${searchQuery}"` 
                    : categoryFilter === "ink" 
                      ? "Ink Cartridges" 
                      : categoryFilter === "toner" 
                        ? "Toner Cartridges" 
                        : "All Products"}
                </h1>
                <p className="text-muted-foreground mt-2">
                  {filteredProducts.length} products available
                </p>
              </div>
              
              <Button 
                variant="outline" 
                className="md:hidden"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                <Filter size={16} className="mr-2" />
                {isFilterOpen ? "Hide Filters" : "Show Filters"}
              </Button>
            </div>
            
            {/* Active filters */}
            {(brandFilters.length > 0 || colorFilters.length > 0 || yieldTypeFilters.length > 0 || priceRange[0] > 0 || priceRange[1] < 250) && (
              <div className="flex flex-wrap gap-2 mb-6">
                {brandFilters.map(brand => (
                  <Badge 
                    key={brand} 
                    variant="secondary"
                    className="px-3 py-1 flex items-center gap-1"
                  >
                    {brand}
                    <X 
                      size={14} 
                      className="ml-1 cursor-pointer"
                      onClick={() => toggleBrandFilter(brand)}
                    />
                  </Badge>
                ))}
                
                {colorFilters.map(color => (
                  <Badge 
                    key={color} 
                    variant="secondary"
                    className="px-3 py-1 flex items-center gap-1"
                  >
                    {color}
                    <X 
                      size={14} 
                      className="ml-1 cursor-pointer"
                      onClick={() => toggleColorFilter(color)}
                    />
                  </Badge>
                ))}
                
                {yieldTypeFilters.map(yieldType => (
                  <Badge 
                    key={yieldType} 
                    variant="secondary"
                    className="px-3 py-1 flex items-center gap-1"
                  >
                    {yieldType}
                    <X 
                      size={14} 
                      className="ml-1 cursor-pointer"
                      onClick={() => toggleYieldTypeFilter(yieldType)}
                    />
                  </Badge>
                ))}
                
                {(priceRange[0] > 0 || priceRange[1] < 250) && (
                  <Badge 
                    variant="secondary"
                    className="px-3 py-1 flex items-center gap-1"
                  >
                    ${priceRange[0]} - ${priceRange[1]}
                  </Badge>
                )}
                
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-sm"
                  onClick={clearFilters}
                >
                  Clear all
                </Button>
              </div>
            )}
            
            <div className="flex flex-col md:flex-row gap-8">
              {/* Filters sidebar */}
              <div 
                className={`glass-card rounded-xl overflow-hidden transition-all duration-300 md:w-72 md:block ${
                  isFilterOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 md:max-h-screen md:opacity-100"
                }`}
              >
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium">Filters</h3>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-muted-foreground"
                      onClick={clearFilters}
                    >
                      Clear all
                    </Button>
                  </div>
                  
                  {/* Category filter */}
                  <div className="py-4 border-b border-gray-200 dark:border-gray-800">
                    <h4 className="text-sm font-medium mb-3">Category</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Checkbox 
                          id="filter-ink" 
                          checked={categoryFilter === "ink"}
                          onCheckedChange={() => setCategoryFilter(categoryFilter === "ink" ? null : "ink")}
                        />
                        <label 
                          htmlFor="filter-ink" 
                          className="ml-2 text-sm cursor-pointer"
                        >
                          Ink Cartridges
                        </label>
                      </div>
                      <div className="flex items-center">
                        <Checkbox 
                          id="filter-toner" 
                          checked={categoryFilter === "toner"}
                          onCheckedChange={() => setCategoryFilter(categoryFilter === "toner" ? null : "toner")}
                        />
                        <label 
                          htmlFor="filter-toner" 
                          className="ml-2 text-sm cursor-pointer"
                        >
                          Toner Cartridges
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  {/* Brand filter */}
                  <div className="py-4 border-b border-gray-200 dark:border-gray-800">
                    <h4 className="text-sm font-medium mb-3">Brand</h4>
                    <div className="space-y-2">
                      {brands.map(brand => (
                        <div key={brand} className="flex items-center">
                          <Checkbox 
                            id={`filter-brand-${brand}`} 
                            checked={brandFilters.includes(brand)}
                            onCheckedChange={() => toggleBrandFilter(brand)}
                          />
                          <label 
                            htmlFor={`filter-brand-${brand}`} 
                            className="ml-2 text-sm cursor-pointer"
                          >
                            {brand}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Color filter */}
                  <div className="py-4 border-b border-gray-200 dark:border-gray-800">
                    <h4 className="text-sm font-medium mb-3">Color</h4>
                    <div className="space-y-2">
                      {colors.map(color => (
                        <div key={color} className="flex items-center">
                          <Checkbox 
                            id={`filter-color-${color}`} 
                            checked={colorFilters.includes(color)}
                            onCheckedChange={() => toggleColorFilter(color)}
                          />
                          <label 
                            htmlFor={`filter-color-${color}`} 
                            className="ml-2 text-sm cursor-pointer"
                          >
                            {color}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Yield Type filter */}
                  <div className="py-4 border-b border-gray-200 dark:border-gray-800">
                    <h4 className="text-sm font-medium mb-3">Yield Type</h4>
                    <div className="space-y-2">
                      {yieldTypes.map(yieldType => (
                        <div key={yieldType} className="flex items-center">
                          <Checkbox 
                            id={`filter-yield-${yieldType}`} 
                            checked={yieldTypeFilters.includes(yieldType)}
                            onCheckedChange={() => toggleYieldTypeFilter(yieldType)}
                          />
                          <label 
                            htmlFor={`filter-yield-${yieldType}`} 
                            className="ml-2 text-sm cursor-pointer"
                          >
                            {yieldType}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Price range filter */}
                  <div className="py-4">
                    <h4 className="text-sm font-medium mb-3">Price Range</h4>
                    <Slider
                      defaultValue={[0, 250]}
                      min={0}
                      max={250}
                      step={1}
                      value={priceRange}
                      onValueChange={(value) => setPriceRange(value as [number, number])}
                      className="mb-6"
                    />
                    <div className="flex justify-between">
                      <span className="text-sm">
                        ${priceRange[0]}
                      </span>
                      <span className="text-sm">
                        ${priceRange[1]}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Products grid */}
              <div className="flex-1">
                {filteredProducts.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map((product, index) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        index={index}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="glass-card rounded-xl p-10 text-center">
                    <h3 className="text-xl font-medium mb-2">No products found</h3>
                    <p className="text-muted-foreground mb-4">
                      Try adjusting your filters or search terms to find what you're looking for.
                    </p>
                    <Button 
                      variant="outline"
                      onClick={clearFilters}
                    >
                      Clear all filters
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;
