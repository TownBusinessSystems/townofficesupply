
import React from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Truck, 
  BadgePercent, 
  Users, 
  Phone,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Hero from "@/components/ui/Hero";
import CategoryCard from "@/components/ui/CategoryCard";
import FeaturedSection from "@/components/ui/FeaturedSection";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useCart, Product } from "@/context/CartContext";
import CartDrawer from "@/components/ui/CartDrawer";

// Mock data for featured products
const featuredInkProducts: Product[] = [
  {
    id: "ink-1",
    name: "HP 63XL Black Ink Cartridge",
    price: 34.99,
    image: "https://m.media-amazon.com/images/I/71umG0IYuLL._AC_SL1500_.jpg",
    brand: "HP",
    category: "ink",
    compatibility: ["HP Deskjet 1112", "HP Envy 4520", "HP OfficeJet 3830"],
    color: "Black",
    yield: "480"
  },
  {
    id: "ink-2",
    name: "Canon PG-245 Black Ink Cartridge",
    price: 19.99,
    image: "https://m.media-amazon.com/images/I/61tmihvQHdL._AC_SL1500_.jpg",
    brand: "Canon",
    category: "ink",
    compatibility: ["Canon PIXMA MG2420", "Canon PIXMA MG2520", "Canon PIXMA MG2920"],
    color: "Black",
    yield: "180"
  },
  {
    id: "ink-3",
    name: "Epson 702 Magenta Ink Cartridge",
    price: 21.99,
    image: "https://m.media-amazon.com/images/I/71zzjjqN9oL._AC_SL1500_.jpg",
    brand: "Epson",
    category: "ink",
    compatibility: ["Epson WorkForce Pro WF-3720", "Epson WorkForce Pro WF-3733"],
    color: "Magenta",
    yield: "300"
  },
  {
    id: "ink-4",
    name: "Brother LC3013 Cyan Ink Cartridge",
    price: 24.99,
    image: "https://m.media-amazon.com/images/I/61AUWL+sIiL._AC_SL1500_.jpg",
    brand: "Brother",
    category: "ink",
    compatibility: ["Brother MFC-J491DW", "Brother MFC-J497DW", "Brother MFC-J895DW"],
    color: "Cyan",
    yield: "400"
  }
];

const featuredTonerProducts: Product[] = [
  {
    id: "toner-1",
    name: "HP 26A Black Toner Cartridge",
    price: 84.99,
    image: "https://m.media-amazon.com/images/I/71cvRNILxDL._AC_SL1500_.jpg",
    brand: "HP",
    category: "toner",
    compatibility: ["HP LaserJet Pro M402dn", "HP LaserJet Pro MFP M426fdw"],
    color: "Black",
    yield: "3,100"
  },
  {
    id: "toner-2",
    name: "Brother TN660 High Yield Toner",
    price: 69.99,
    image: "https://m.media-amazon.com/images/I/71C+-YsOkfL._AC_SL1500_.jpg",
    brand: "Brother",
    category: "toner",
    compatibility: ["Brother HL-L2340DW", "Brother HL-L2360DW", "Brother DCP-L2540DW"],
    color: "Black",
    yield: "2,600"
  },
  {
    id: "toner-3",
    name: "Canon 055 Cyan Toner Cartridge",
    price: 76.99,
    image: "https://m.media-amazon.com/images/I/51NUf28QpVL._AC_SL1000_.jpg",
    brand: "Canon",
    category: "toner",
    compatibility: ["Canon Color imageCLASS MF743Cdw", "Canon LBP664Cdw"],
    color: "Cyan",
    yield: "2,100"
  },
  {
    id: "toner-4",
    name: "Lexmark 51B1000 Return Program Toner Cartridge",
    price: 89.99,
    image: "https://m.media-amazon.com/images/I/61CQow3NTvL._AC_SL1500_.jpg",
    brand: "Lexmark",
    category: "toner",
    compatibility: ["Lexmark MS317dn", "Lexmark MS417dn", "Lexmark MS517dn"],
    color: "Black",
    yield: "2,500"
  }
];

const features = [
  {
    icon: ShieldCheck,
    title: "Quality Guarantee",
    description: "All our products come with a 100% satisfaction guarantee."
  },
  {
    icon: Truck,
    title: "Fast Shipping",
    description: "Free shipping on orders over $50. Same-day dispatch on orders before 2pm."
  },
  {
    icon: BadgePercent,
    title: "Bulk Discounts",
    description: "Special pricing available for bulk orders and business accounts."
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "Our team of experts is ready to help you find the right products."
  }
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <CartDrawer />
      
      <main className="flex-grow pt-16">
        <Hero />
        
        {/* Categories Section */}
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
        
        {/* Featured Ink Products */}
        <FeaturedSection 
          title="Featured Ink Cartridges" 
          products={featuredInkProducts} 
        />
        
        {/* Features Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
          <div className="container px-4 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium mb-3 inline-block">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-medium mb-4">
                The Town Office Supply Difference
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                We're committed to providing high-quality office supplies with exceptional service.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-6 rounded-xl"
                >
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <feature.icon className="text-accent" size={24} />
                  </div>
                  <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Featured Toner Products */}
        <FeaturedSection 
          title="Featured Toner Cartridges" 
          products={featuredTonerProducts} 
        />
        
        {/* CTA Section */}
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
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
