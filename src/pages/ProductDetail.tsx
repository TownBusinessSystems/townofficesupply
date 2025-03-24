
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
  
  // Create productImages array with the main image
  const productImages = product ? [product.image] : [];
  console.log("Product in detail page:", product?.id, "Image path:", product?.image);
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-10 px-4">
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
      
      <main className="flex-grow pt-8">
        <div className="container px-4 mx-auto max-w-6xl py-6">
          <ProductBreadcrumbs product={product} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
            {/* Product Images */}
            <div className="space-y-8">
              <ProductGallery 
                productImages={productImages} 
                productName={product.name} 
              />
              
              {/* Product Details - Moved here from below */}
              <ProductSpecifications product={product} />
            </div>
            
            {/* Product Details */}
            <ProductInfo product={product} />
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="py-8">
            <FeaturedSection
              title="Related Products"
              products={relatedProducts}
            />
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
