
import React from "react";
import { Product } from "@/context/CartContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProductSpecificationsProps {
  product: Product;
}

const ProductSpecifications: React.FC<ProductSpecificationsProps> = ({ product }) => {
  // Determine if product is a toner cartridge or drum unit
  const productType = product.name.toLowerCase().includes('drum') 
    ? "Drum Unit" 
    : product.category === "ink" 
      ? "Ink Cartridge" 
      : "Toner Cartridge";

  // Determine if the product is a high yield or standard yield
  const yieldType = product.cartridgeYieldType || "Standard Yield";

  return (
    <section>
      <Card className="glass-card rounded-xl overflow-hidden border-none">
        <CardHeader className="bg-gray-50 dark:bg-gray-800/50 pb-2">
          <CardTitle className="text-lg">Product Details</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Brand</h3>
                <p>{product.brand}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Type</h3>
                <p>{productType}</p>
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
                <p>{yieldType}</p>
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
        </CardContent>
      </Card>
    </section>
  );
};

export default ProductSpecifications;
