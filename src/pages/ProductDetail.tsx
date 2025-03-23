
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ShoppingCart, 
  Minus, 
  Plus, 
  ChevronRight, 
  ShieldCheck, 
  Truck, 
  Undo
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FeaturedSection from "@/components/ui/FeaturedSection";
import { useCart, Product } from "@/context/CartContext";
import CartDrawer from "@/components/ui/CartDrawer";
import { products } from "@/data/productData";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { addToCart } = useCart();
  
  // Calculate discount percentage if originalPrice exists
  const discountPercentage = product?.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 0;
  
  // Mock product images array (in real app, this would come from database)
  const productImages = [
    product?.image,
    "https://placehold.co/800x800/e2e8f0/a1a1aa?text=Product+Image+2",
    "https://placehold.co/800x800/e2e8f0/a1a1aa?text=Product+Image+3"
  ];
  
  // Find product and related products
  useEffect(() => {
    const foundProduct = products.find(p => p.id === id) || null;
    setProduct(foundProduct);
    
    if (foundProduct) {
      // Find related products (same category, different id)
      const related = products
        .filter(p => 
          p.category === foundProduct.category && 
          p.id !== foundProduct.id
        )
        .slice(0, 4);
      
      setRelatedProducts(related);
    }
  }, [id]);
  
  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };
  
  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
    }
  };
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center py-16">
              <h2 className="text-2xl font-medium mb-4">Product not found</h2>
              <p className="text-muted-foreground mb-6">
                The product you're looking for doesn't exist or has been removed.
              </p>
              <Button asChild>
                <Link to="/products">
                  Browse all products
                </Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <CartDrawer />
      
      <main className="flex-grow pt-16">
        <div className="container px-4 mx-auto max-w-6xl py-12">
          {/* Breadcrumbs */}
          <nav className="mb-8 flex items-center text-sm text-muted-foreground">
            <Link to="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <ChevronRight size={14} className="mx-2" />
            <Link to="/products" className="hover:text-accent transition-colors">
              Products
            </Link>
            <ChevronRight size={14} className="mx-2" />
            <Link 
              to={`/products?category=${product.category}`}
              className="hover:text-accent transition-colors"
            >
              {product.category === "ink" ? "Ink Cartridges" : "Toner Cartridges"}
            </Link>
            <ChevronRight size={14} className="mx-2" />
            <span className="font-medium text-foreground truncate max-w-[200px] sm:max-w-xs">
              {product.name}
            </span>
          </nav>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product Images */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="glass-card p-6 rounded-xl overflow-hidden">
                <img
                  src={productImages[currentImageIndex] || product.image}
                  alt={product.name}
                  className="w-full h-auto object-contain aspect-square"
                />
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`p-3 rounded-lg border ${
                      index === currentImageIndex
                        ? "border-accent ring-2 ring-accent/20"
                        : "border-gray-200 dark:border-gray-800 hover:border-accent/50"
                    } bg-white dark:bg-gray-800 transition-all duration-200`}
                  >
                    <img
                      src={image || product.image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-auto aspect-square object-contain"
                    />
                  </button>
                ))}
              </div>
            </motion.div>
            
            {/* Product Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div>
                <div className="flex items-center mb-2 space-x-2">
                  <Badge className="bg-accent text-white">
                    {product.category === "ink" ? "Ink Cartridge" : "Toner Cartridge"}
                  </Badge>
                  <Badge variant="outline">
                    {product.color || "Standard"}
                  </Badge>
                  {discountPercentage > 0 && (
                    <Badge className="bg-red-500 text-white">
                      {discountPercentage}% OFF
                    </Badge>
                  )}
                </div>
                
                <h1 className="text-3xl font-display font-medium mb-2">
                  {product.name}
                </h1>
                
                <div className="flex flex-wrap items-center mb-4 gap-3">
                  <span className="text-sm text-muted-foreground">
                    Brand: <span className="font-medium">{product.brand}</span>
                  </span>
                  <span className="text-sm text-muted-foreground">
                    Yield: <span className="font-medium">{product.yield || "Standard"} pages</span>
                  </span>
                  <span className="text-sm text-muted-foreground">
                    Type: <span className="font-medium">{product.cartridgeYieldType || "Standard"}</span>
                  </span>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center">
                    <span className="text-2xl font-semibold">${product.price.toFixed(2)}</span>
                    {product.originalPrice && (
                      <>
                        <span className="text-base line-through ml-3 text-muted-foreground">
                          ${product.originalPrice.toFixed(2)}
                        </span>
                        <span className="text-sm ml-2 text-red-500 font-medium">
                          Save ${(product.originalPrice - product.price).toFixed(2)}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="border-t border-b border-gray-200 dark:border-gray-800 py-6">
                <h3 className="font-medium mb-3">Description</h3>
                <p className="text-muted-foreground">
                  {product.description || `Original ${product.brand} ${product.category === "ink" ? "ink" : "toner"} cartridge designed for optimal print quality and reliability. Compatible with various ${product.brand} printer models including ${product.compatibility?.join(", ")}.`}
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-medium">Compatible Printers</h3>
                <div className="flex flex-wrap gap-2">
                  {product.compatibility?.map((printer) => (
                    <Badge 
                      key={printer} 
                      variant="outline"
                      className="py-1.5"
                    >
                      {printer}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4 pt-4">
                <div className="flex items-center">
                  <span className="mr-4">Quantity:</span>
                  <div className="flex items-center">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-10 w-10 rounded-l-lg rounded-r-none"
                      onClick={decrementQuantity}
                      disabled={quantity <= 1}
                    >
                      <Minus size={16} />
                    </Button>
                    
                    <span className="h-10 w-16 flex items-center justify-center border-y border-gray-200 dark:border-gray-800">
                      {quantity}
                    </span>
                    
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-10 w-10 rounded-r-lg rounded-l-none"
                      onClick={incrementQuantity}
                    >
                      <Plus size={16} />
                    </Button>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button 
                    className="bg-accent hover:bg-accent/90 text-white py-6 h-auto flex-1"
                    onClick={handleAddToCart}
                  >
                    <ShoppingCart size={18} className="mr-2" />
                    Add to Cart
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="py-6 h-auto"
                  >
                    Buy Now
                  </Button>
                </div>
              </div>
              
              <div className="pt-6 space-y-4">
                <div className="flex items-start">
                  <ShieldCheck size={20} className="text-accent mr-4 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-sm">Lifetime Guarantee</h4>
                    <p className="text-sm text-muted-foreground">
                      All our compatible cartridges come with a lifetime guarantee for peace of mind.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Truck size={20} className="text-accent mr-4 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-sm">Fast Shipping</h4>
                    <p className="text-sm text-muted-foreground">
                      Enjoy free 1-3 day shipping on all orders.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Undo size={20} className="text-accent mr-4 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-sm">Easy Returns</h4>
                    <p className="text-sm text-muted-foreground">
                      30-day hassle-free return policy.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Technical Specifications */}
          <section className="mt-20">
            <h2 className="text-2xl font-display font-medium mb-6">
              Technical Specifications
            </h2>
            
            <div className="glass-card rounded-xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Brand</h3>
                    <p>{product.brand}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Type</h3>
                    <p>{product.category === "ink" ? "Ink Cartridge" : "Toner Cartridge"}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Color</h3>
                    <p>{product.color || "Standard"}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Page Yield</h3>
                    <p>{product.yield || "Standard"} pages</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">OEM Number</h3>
                    <p>{product.oemNumber || "Not specified"}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Yield Type</h3>
                    <p>{product.cartridgeYieldType || "Standard"}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Shelf Life</h3>
                    <p>{product.shelfLife || "24-36 Months"}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Packaging</h3>
                    <p>Retail Packaging</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <FeaturedSection
            title="Related Products"
            products={relatedProducts}
          />
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
