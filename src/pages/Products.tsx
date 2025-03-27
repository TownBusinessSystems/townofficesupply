
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/ui/CartDrawer";
import ProductFilters from "@/components/products/ProductFilters";
import ActiveFilters from "@/components/products/ActiveFilters";
import ProductsGrid from "@/components/products/ProductsGrid";
import { useProductFilters } from "@/hooks/useProductFilters";

const Products = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const {
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
    clearFilters
  } = useProductFilters();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <CartDrawer />
      
      <main className="flex-grow">
        <section className="py-6 bg-gray-50 dark:bg-gray-900/50">
          <div className="container px-4 mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
              <div>
                <h1 className="text-3xl md:text-4xl font-display font-medium">
                  {categoryFilter === "ink" 
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
            <ActiveFilters 
              brandFilters={brandFilters}
              colorFilters={colorFilters}
              yieldTypeFilters={yieldTypeFilters}
              priceRange={priceRange}
              searchQuery={searchQuery}
              toggleBrandFilter={toggleBrandFilter}
              toggleColorFilter={toggleColorFilter}
              toggleYieldTypeFilter={toggleYieldTypeFilter}
              clearSearchQuery={clearSearchQuery}
              clearFilters={clearFilters}
            />
            
            <div className="flex flex-col md:flex-row gap-8">
              {/* Filters sidebar */}
              <div 
                className={`transition-all duration-300 md:w-72 md:block ${
                  isFilterOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 md:max-h-screen md:opacity-100"
                }`}
              >
                <ProductFilters 
                  categoryFilter={categoryFilter}
                  brandFilters={brandFilters}
                  colorFilters={colorFilters}
                  yieldTypeFilters={yieldTypeFilters}
                  priceRange={priceRange}
                  searchQuery={searchQuery}
                  setCategoryFilter={setCategoryFilter}
                  toggleBrandFilter={toggleBrandFilter}
                  toggleColorFilter={toggleColorFilter}
                  toggleYieldTypeFilter={toggleYieldTypeFilter}
                  setPriceRange={setPriceRange}
                  clearSearchQuery={clearSearchQuery}
                  clearFilters={clearFilters}
                />
              </div>
              
              {/* Products grid */}
              <div className="flex-1">
                <ProductsGrid 
                  products={filteredProducts} 
                  clearFilters={clearFilters} 
                />
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
