
import React from "react";
import { motion } from "framer-motion";
import { Phone, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5"></div>
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white dark:from-gray-950 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white dark:from-gray-950 to-transparent"></div>
      
      <div className="container px-4 mx-auto relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card text-center p-10 md:p-16 rounded-2xl shadow-glossy max-w-4xl mx-auto"
        >
          <h2 className="text-2xl md:text-4xl font-display font-medium mb-4">
            Need Help Finding the Right Product?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Our team of experts is ready to assist you in finding the perfect ink or toner 
            cartridge for your specific printer model.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-accent hover:bg-accent/90 text-white px-8 py-6 h-auto">
              <Phone size={18} className="mr-2" />
              Contact Us
            </Button>
            <Button asChild variant="outline" className="px-8 py-6 h-auto">
              <a href="/products">
                Browse All Products
                <ChevronRight size={16} className="ml-2" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
