
import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Product } from "@/context/CartContext";

interface ProductBreadcrumbsProps {
  product: Product;
}

const ProductBreadcrumbs: React.FC<ProductBreadcrumbsProps> = ({ product }) => {
  return (
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
  );
};

export default ProductBreadcrumbs;
