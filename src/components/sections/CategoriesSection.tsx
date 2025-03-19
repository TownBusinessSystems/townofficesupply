
import React from "react";
import { motion } from "framer-motion";
import CategoryCard from "@/components/ui/CategoryCard";

const CategoriesSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium mb-3 inline-block">
            Our Product Categories
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-medium mb-4">
            Find What You Need
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Explore our wide selection of high-quality ink and toner cartridges
            for all major printer brands.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CategoryCard
            title="Ink Cartridges"
            description="High-quality ink cartridges for inkjet printers. Available in black and color options for all major brands."
            image="https://images.unsplash.com/photo-1585167151781-19a2d4538841?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
            path="/products?category=ink"
            index={0}
          />
          <CategoryCard
            title="Toner Cartridges"
            description="Premium toner cartridges for laser printers. Long-lasting and reliable for high-volume printing needs."
            image="https://images.unsplash.com/photo-1616628957998-7107e89f3a76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
            path="/products?category=toner"
            index={1}
          />
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
