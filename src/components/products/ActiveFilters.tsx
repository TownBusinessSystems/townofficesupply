
import React from "react";
import { X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ActiveFiltersProps {
  brandFilters: string[];
  colorFilters: string[];
  yieldTypeFilters: string[];
  priceRange: [number, number];
  toggleBrandFilter: (brand: string) => void;
  toggleColorFilter: (color: string) => void;
  toggleYieldTypeFilter: (yieldType: string) => void;
  clearFilters: () => void;
}

const ActiveFilters: React.FC<ActiveFiltersProps> = ({
  brandFilters,
  colorFilters,
  yieldTypeFilters,
  priceRange,
  toggleBrandFilter,
  toggleColorFilter,
  toggleYieldTypeFilter,
  clearFilters
}) => {
  const hasActiveFilters = brandFilters.length > 0 || 
                         colorFilters.length > 0 || 
                         yieldTypeFilters.length > 0 || 
                         priceRange[0] > 0 || 
                         priceRange[1] < 250;
  
  if (!hasActiveFilters) return null;
  
  return (
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
  );
};

export default ActiveFilters;
