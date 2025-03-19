
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
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

// Mock data for products
const allProducts: Product[] = [
  // Ink products
  {
    id: "ink-1",
    name: "HP 63XL Black Ink Cartridge",
    price: 34.99,
    image: "https://m.media-amazon.com/images/I/71umG0IYuLL._AC_SL1500_.jpg",
    brand: "HP",
    category: "ink",
    compatibility: ["HP Deskjet 1112", "HP Envy 4520", "HP OfficeJet 3830"],
    color: "Black",
    yield: "480"
  },
  {
    id: "ink-2",
    name: "Canon PG-245 Black Ink Cartridge",
    price: 19.99,
    image: "https://m.media-amazon.com/images/I/61tmihvQHdL._AC_SL1500_.jpg",
    brand: "Canon",
    category: "ink",
    compatibility: ["Canon PIXMA MG2420", "Canon PIXMA MG2520", "Canon PIXMA MG2920"],
    color: "Black",
    yield: "180"
  },
  {
    id: "ink-3",
    name: "Epson 702 Magenta Ink Cartridge",
    price: 21.99,
    image: "https://m.media-amazon.com/images/I/71zzjjqN9oL._AC_SL1500_.jpg",
    brand: "Epson",
    category: "ink",
    compatibility: ["Epson WorkForce Pro WF-3720", "Epson WorkForce Pro WF-3733"],
    color: "Magenta",
    yield: "300"
  },
  {
    id: "ink-4",
    name: "Brother LC3013 Cyan Ink Cartridge",
    price: 24.99,
    image: "https://m.media-amazon.com/images/I/61AUWL+sIiL._AC_SL1500_.jpg",
    brand: "Brother",
    category: "ink",
    compatibility: ["Brother MFC-J491DW", "Brother MFC-J497DW", "Brother MFC-J895DW"],
    color: "Cyan",
    yield: "400"
  },
  {
    id: "ink-5",
    name: "HP 67XL Tri-Color Ink Cartridge",
    price: 36.99,
    image: "https://m.media-amazon.com/images/I/71rrRJQ7sdL._AC_SL1500_.jpg",
    brand: "HP",
    category: "ink",
    compatibility: ["HP DeskJet 2732", "HP DeskJet Plus 4155", "HP ENVY 6055"],
    color: "Tri-Color",
    yield: "200"
  },
  {
    id: "ink-6",
    name: "Canon CLI-281 Yellow Ink Tank",
    price: 17.99,
    image: "https://m.media-amazon.com/images/I/71TQOkLMiML._AC_SL1500_.jpg",
    brand: "Canon",
    category: "ink",
    compatibility: ["Canon PIXMA TS6120", "Canon PIXMA TS8120", "Canon PIXMA TR8520"],
    color: "Yellow",
    yield: "256"
  },
  
  // Toner products
  {
    id: "toner-1",
    name: "HP 26A Black Toner Cartridge",
    price: 84.99,
    image: "https://m.media-amazon.com/images/I/71cvRNILxDL._AC_SL1500_.jpg",
    brand: "HP",
    category: "toner",
    compatibility: ["HP LaserJet Pro M402dn", "HP LaserJet Pro MFP M426fdw"],
    color: "Black",
    yield: "3,100"
  },
  {
    id: "toner-2",
    name: "Brother TN660 High Yield Toner",
    price: 69.99,
    image: "https://m.media-amazon.com/images/I/71C+-YsOkfL._AC_SL1500_.jpg",
    brand: "Brother",
    category: "toner",
    compatibility: ["Brother HL-L2340DW", "Brother HL-L2360DW", "Brother DCP-L2540DW"],
    color: "Black",
    yield: "2,600"
  },
  {
    id: "toner-3",
    name: "Canon 055 Cyan Toner Cartridge",
    price: 76.99,
    image: "https://m.media-amazon.com/images/I/51NUf28QpVL._AC_SL1000_.jpg",
    brand: "Canon",
    category: "toner",
    compatibility: ["Canon Color imageCLASS MF743Cdw", "Canon LBP664Cdw"],
    color: "Cyan",
    yield: "2,100"
  },
  {
    id: "toner-4",
    name: "Lexmark 51B1000 Return Program Toner Cartridge",
    price: 89.99,
    image: "https://m.media-amazon.com/images/I/61CQow3NTvL._AC_SL1500_.jpg",
    brand: "Lexmark",
    category: "toner",
    compatibility: ["Lexmark MS317dn", "Lexmark MS417dn", "Lexmark MS517dn"],
    color: "Black",
    yield: "2,500"
  },
  {
    id: "toner-5",
    name: "HP 508X High Yield Yellow Toner",
    price: 209.99,
    image: "https://m.media-amazon.com/images/I/71y8aTJuOgL._AC_SL1500_.jpg",
    brand: "HP",
    category: "toner",
    compatibility: ["HP Color LaserJet Enterprise M552dn", "HP Color LaserJet Enterprise M553dn"],
    color: "Yellow",
    yield: "9,500"
  },
  {
    id: "toner-6",
    name: "Brother TN760 High Yield Toner Cartridge",
    price: 79.99,
    image: "https://m.media-amazon.com/images/I/71BkjJOipuL._AC_SL1500_.jpg",
    brand: "Brother",
    category: "toner",
    compatibility: ["Brother DCP-L2550DW", "Brother HL-L2350DW", "Brother MFC-L2710DW"],
    color: "Black",
    yield: "3,000"
  }
];

const brands = ["HP", "Canon", "Epson", "Brother", "Lexmark"];
const colors = ["Black", "Cyan", "Magenta", "Yellow", "Tri-Color"];

const Products = () => {
  const location = useLocation();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Filter states
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [brandFilters, setBrandFilters] = useState<string[]>([]);
  const [colorFilters, setColorFilters] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 250]);
  
  // Get the category from URL query params if it exists
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get("category");
    
    if (category === "ink" || category === "toner") {
      setCategoryFilter(category);
    } else {
      setCategoryFilter(null);
    }
  }, [location.search]);
  
  // Apply filters to products
  useEffect(() => {
    let result = [...allProducts];
    
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
    
    // Filter by price range
    result = result.filter(
      product => product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    setFilteredProducts(result);
  }, [categoryFilter, brandFilters, colorFilters, priceRange]);
  
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
  
  // Clear all filters
  const clearFilters = () => {
    setBrandFilters([]);
    setColorFilters([]);
    setPriceRange([0, 250]);
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
            {(brandFilters.length > 0 || colorFilters.length > 0 || priceRange[0] > 0 || priceRange[1] < 250) && (
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
                      Try adjusting your filters to find what you're looking for.
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
