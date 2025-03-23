
import React from "react";
import { Product } from "@/context/CartContext";

interface ProductSpecificationsProps {
  product: Product;
}

const ProductSpecifications: React.FC<ProductSpecificationsProps> = ({ product }) => {
  return (
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
  );
};

export default ProductSpecifications;
