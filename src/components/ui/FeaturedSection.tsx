
import React from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { Product } from "@/context/CartContext";

interface FeaturedSectionProps {
  title: string;
  products: Product[];
}

const FeaturedSection: React.FC<FeaturedSectionProps> = ({ 
  title, 
  products 
}) => {
  return (
    <section className="py-8">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-display font-medium mb-2">{title}</h2>
          <div className="h-1 w-16 bg-accent rounded"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
