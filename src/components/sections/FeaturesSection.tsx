
import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Truck, BadgePercent, Users } from "lucide-react";

interface FeatureItem {
  icon: React.ElementType;
  title: string;
  description: string;
}

const features: FeatureItem[] = [
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

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
      <div className="container px-4 mx-auto">
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
  );
};

export default FeaturesSection;
