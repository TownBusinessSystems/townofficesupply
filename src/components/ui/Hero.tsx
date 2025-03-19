
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-20 overflow-hidden">
      {/* Background element */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950"></div>
        <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-br from-accent/10 to-transparent"></div>
      </div>

      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center py-16 lg:py-24">
          <div className="lg:w-1/2 lg:pr-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <span className="inline-block py-1 px-3 bg-accent/10 text-accent rounded-full text-sm font-medium mb-5">
                Premium Quality Supplies
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold mb-6 leading-tight text-balance">
                Office Supplies That <span className="text-accent">Work</span> For You
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Specializing in high-quality ink and toner cartridges for all major printer brands,
                delivered directly to your door.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button asChild className="bg-accent hover:bg-accent/90 text-white px-8 py-6 h-auto">
                <Link to="/products">
                  Shop Now
                  <ChevronRight size={16} className="ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="px-8 py-6 h-auto">
                <Link to="/products?category=ink">
                  Shop Ink Cartridges
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 flex flex-wrap gap-6"
            >
              {["HP", "Canon", "Epson", "Brother", "Lexmark"].map((brand) => (
                <motion.div
                  key={brand}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-center py-2 px-4 bg-white dark:bg-gray-800 shadow-soft rounded-lg"
                >
                  <span className="text-muted-foreground font-medium text-sm">{brand}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:w-1/2 mt-10 lg:mt-0"
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
              
              <div className="relative rounded-2xl overflow-hidden glass-card p-6 shadow-glossy">
                <img
                  src="https://images.unsplash.com/photo-1562664377-709f2c337eb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                  alt="Office Supplies"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
