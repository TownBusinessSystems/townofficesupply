
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FeaturedSection from "@/components/ui/FeaturedSection";
import { Product } from "@/context/CartContext";
import CartDrawer from "@/components/ui/CartDrawer";
import { products } from "@/data/productData";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ProductSpecifications from "@/components/product/ProductSpecifications";
import ProductBreadcrumbs from "@/components/product/ProductBreadcrumbs";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  
  // Mock product images array (in real app, this would come from database)
  const productImages = product ? [
    product.image,
    "https://placehold.co/800x800/e2e8f0/a1a1aa?text=Product+Image+2",
    "https://placehold.co/800x800/e2e8f0/a1a1aa?text=Product+Image+3"
  ] : [];
  
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
          <ProductBreadcrumbs product={product} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product Images */}
            <ProductGallery 
              productImages={productImages} 
              productName={product.name} 
            />
            
            {/* Product Details */}
            <ProductInfo product={product} />
          </div>
          
          {/* Technical Specifications */}
          <ProductSpecifications product={product} />
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
