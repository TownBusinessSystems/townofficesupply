
import React from "react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ui/ProductCard";
import { Product } from "@/context/CartContext";

interface ProductsGridProps {
  products: Product[];
  clearFilters: () => void;
}

const ProductsGrid: React.FC<ProductsGridProps> = ({ products, clearFilters }) => {
  if (products.length === 0) {
    return (
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
    );
  }
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          index={index}
        />
      ))}
    </div>
  );
};

export default ProductsGrid;
