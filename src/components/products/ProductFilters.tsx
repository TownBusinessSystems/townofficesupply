
import React from "react";
import { Search, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";

interface ProductFiltersProps {
  categoryFilter: string | null;
  brandFilters: string[];
  colorFilters: string[];
  yieldTypeFilters: string[];
  priceRange: [number, number];
  searchQuery: string;
  setCategoryFilter: (category: string | null) => void;
  toggleBrandFilter: (brand: string) => void;
  toggleColorFilter: (color: string) => void;
  toggleYieldTypeFilter: (yieldType: string) => void;
  setPriceRange: (range: [number, number]) => void;
  clearSearchQuery: () => void;
  clearFilters: () => void;
}

const brands = ["HP", "Canon", "Epson", "Brother", "Lexmark"];
const colors = ["Black", "Cyan", "Magenta", "Yellow", "Tri-Color"];
const yieldTypes = ["Standard Yield", "High Yield"];

const ProductFilters: React.FC<ProductFiltersProps> = ({
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
  clearFilters
}) => {
  return (
    <div className="glass-card rounded-xl overflow-hidden">
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
        
        {/* Search filter */}
        {searchQuery && (
          <div className="py-4 border-b border-gray-200 dark:border-gray-800">
            <h4 className="text-sm font-medium mb-3">Search</h4>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">{searchQuery}</span>
              <Button
                variant="ghost"
                size="sm"
                className="text-xs"
                onClick={clearSearchQuery}
              >
                <X size={14} className="mr-1" />
                Clear
              </Button>
            </div>
          </div>
        )}
        
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
  );
};

export default ProductFilters;
