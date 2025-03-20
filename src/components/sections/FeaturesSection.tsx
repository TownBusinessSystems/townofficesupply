
import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Truck, Users, Sparkle, Star } from "lucide-react";

interface FeatureItem {
  icon: React.ElementType;
  title: string;
  description: string;
  gradient: string;
  iconClass: string;
}

const features: FeatureItem[] = [
  {
    icon: ShieldCheck,
    title: "Quality Guarantee",
    description: "All our products come with a 100% satisfaction guarantee.",
    gradient: "from-blue-500 to-indigo-600",
    iconClass: "bg-blue-400/30"
  },
  {
    icon: Truck,
    title: "Fast Shipping",
    description: "Free shipping on orders over $50. Same-day dispatch on orders before 2pm.",
    gradient: "from-blue-400 to-cyan-500",
    iconClass: "bg-cyan-400/30"
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "Our team of experts is ready to help you find the right products.",
    gradient: "from-blue-500 to-purple-600",
    iconClass: "bg-purple-400/30"
  }
];

const FeatureCard = ({ feature, index }: { feature: FeatureItem; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-lg`}
    >
      <div className="absolute top-0 right-0 w-32 h-32 -mr-10 -mt-10 opacity-20">
        <Sparkle className="w-full h-full" />
      </div>
      
      <div className="relative z-10 p-8 text-white">
        <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-5 ${feature.iconClass} backdrop-blur-md border border-white/20`}>
          <feature.icon className="size-8" />
        </div>
        
        <h3 className="text-xl font-bold mb-2 flex items-center">
          {feature.title}
          <Star className="w-4 h-4 ml-2 inline-block animate-pulse" />
        </h3>
        
        <p className="text-white/90">
          {feature.description}
        </p>
        
        <motion.div 
          className="absolute bottom-3 right-3 opacity-30"
          animate={{ 
            rotate: [0, 5, -5, 0],
            scale: [1, 1.05, 0.95, 1]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        >
          <feature.icon className="size-12" />
        </motion.div>
      </div>
    </motion.div>
  );
};

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Why Choose Us
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-24 h-1 bg-accent mx-auto mb-4"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            We pride ourselves on providing the best products with premium service
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
