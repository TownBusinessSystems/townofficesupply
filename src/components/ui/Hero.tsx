
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <section className="relative pt-20 overflow-hidden">
      {/* Background element */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950"></div>
        <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-br from-accent/10 to-transparent"></div>
      </div>

      <div className="container px-4 mx-auto">
        {/* Hero content: Text + Image */}
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold mb-6 leading-tight">
                Office Supplies <br className="block" />
                That <span className="text-accent">Work</span> For You
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
              className="flex flex-col gap-6"
            >
              <Button asChild className="bg-accent hover:bg-accent/90 text-white px-8 py-6 h-auto w-fit">
                <Link to="/products">
                  Shop Deals
                  <ChevronRight size={16} className="ml-2" />
                </Link>
              </Button>
              
              <motion.form 
                onSubmit={handleSearch}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative flex w-full max-w-md"
              >
                <Input
                  type="text"
                  placeholder="Search by brand, type, or color..."
                  className="pr-10 py-6 h-auto text-base rounded-lg border-2 focus-visible:ring-accent/50"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button 
                  type="submit" 
                  size="icon" 
                  className="absolute right-1 top-1/2 -translate-y-1/2 h-10 w-10 bg-accent hover:bg-accent/90 text-white"
                >
                  <Search size={18} />
                </Button>
              </motion.form>
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
        
        {/* Brand logos - Moved below hero content, removed labels and boxes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="py-10 mb-16"
        >
          <h3 className="text-xl font-display font-medium mb-8 text-center">Top Brands We Support</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
            {[
              { name: "HP", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
              { name: "Canon", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
              { name: "Epson", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
              { name: "Brother", image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
              { name: "Lexmark", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" }
            ].map((brand) => (
              <motion.div
                key={brand.name}
                whileHover={{ scale: 1.05 }}
                className="relative h-28 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <img 
                  src={brand.image} 
                  alt={`${brand.name} brand`} 
                  className="w-full h-full object-cover transition-transform hover:scale-110 duration-300"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
