
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import ImageCarousel from "./ImageCarousel";

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Hero carousel images
  const carouselImages = [
    "/lovable-uploads/743b3a0a-c402-48ee-acba-49844ae9ce3b.png",
    "/lovable-uploads/538a4cc7-c20b-432e-a143-bcb3adf9e6e8.png",
    "/lovable-uploads/eea103c3-ad52-413d-9f73-bf4914455b9b.png"
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <section className="relative pt-4 overflow-hidden">
      {/* Background element */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950"></div>
        <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-br from-accent/10 to-transparent"></div>
      </div>

      <div className="container px-4 mx-auto">
        {/* Hero content: Text + Image */}
        <div className="flex flex-col lg:flex-row lg:items-center py-12 lg:py-16">
          <div className="lg:w-1/2 lg:pr-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
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
              className="flex flex-col sm:flex-row sm:items-center gap-4"
            >
              <Button asChild className="bg-accent hover:bg-accent/90 text-white px-6 py-2 h-10 w-fit">
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
                className="relative flex w-full max-w-sm"
              >
                <Input
                  type="text"
                  placeholder="Search by brand, type, or color..."
                  className="pr-10 h-10 text-sm rounded-lg border focus-visible:ring-accent/50"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button 
                  type="submit" 
                  size="icon" 
                  className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 bg-accent hover:bg-accent/90 text-white"
                >
                  <Search size={16} />
                </Button>
              </motion.form>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:w-1/2 mt-8 lg:mt-0"
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
              
              <div className="relative rounded-2xl overflow-hidden shadow-glossy h-[300px] sm:h-[350px] md:h-[400px]">
                <ImageCarousel 
                  images={carouselImages} 
                  interval={7000} // Updated from 5000 to 7000 to match
                  className="w-full h-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Brand logos - Further reduced spacing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="py-0 -mt-6" 
        >
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
