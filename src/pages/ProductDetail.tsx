
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
  // ... (copy the rest of the allProducts array from Products.tsx)
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
  }
];

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { addToCart } = useCart();
  
  // Mock product images array (in real app, this would come from database)
  const productImages = [
    product?.image,
    "https://placehold.co/800x800/e2e8f0/a1a1aa?text=Product+Image+2",
    "https://placehold.co/800x800/e2e8f0/a1a1aa?text=Product+Image+3"
  ];
  
  // Find product and related products
  useEffect(() => {
    const foundProduct = allProducts.find(p => p.id === id) || null;
    setProduct(foundProduct);
    
    if (foundProduct) {
      // Find related products (same category, different id)
      const related = allProducts
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
                </div>
                
                <h1 className="text-3xl font-display font-medium mb-2">
                  {product.name}
                </h1>
                
                <div className="flex items-center mb-4">
                  <span className="text-sm text-muted-foreground mr-3">
                    Brand: <span className="font-medium">{product.brand}</span>
                  </span>
                  <span className="text-sm text-muted-foreground mr-3">
                    Yield: <span className="font-medium">{product.yield || "Standard"} pages</span>
                  </span>
                </div>
                
                <div className="text-2xl font-semibold mb-4">
                  ${product.price.toFixed(2)}
                </div>
              </div>
              
              <div className="border-t border-b border-gray-200 dark:border-gray-800 py-6">
                <h3 className="font-medium mb-3">Description</h3>
                <p className="text-muted-foreground">
                  Original {product.brand} {product.category === "ink" ? "ink" : "toner"} cartridge designed for optimal print quality and reliability. Compatible with various {product.brand} printer models including {product.compatibility?.join(", ")}.
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
                    <h4 className="font-medium text-sm">Quality Guarantee</h4>
                    <p className="text-sm text-muted-foreground">
                      Genuine {product.brand} product with 100% satisfaction guarantee.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Truck size={20} className="text-accent mr-4 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-sm">Fast Shipping</h4>
                    <p className="text-sm text-muted-foreground">
                      Free shipping on orders over $50. Same-day dispatch for orders before 2pm.
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
                    <h3 className="text-sm font-medium text-muted-foreground">Model Number</h3>
                    <p>{product.name.split(' ').slice(0, 2).join(' ')}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Condition</h3>
                    <p>New, Genuine OEM</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Warranty</h3>
                    <p>1 Year Manufacturer Warranty</p>
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
