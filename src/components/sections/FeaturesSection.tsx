
import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Truck, Users, Check } from "lucide-react";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface FeatureItem {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
}

const features: FeatureItem[] = [
  {
    icon: ShieldCheck,
    title: "Quality Guarantee",
    description: "All our products come with a 100% satisfaction guarantee.",
    color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
  },
  {
    icon: Truck,
    title: "Fast Shipping",
    description: "Free shipping on orders over $50. Same-day dispatch on orders before 2pm.",
    color: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "Our team of experts is ready to help you find the right products.",
    color: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
  }
];

const FeatureCard = ({ feature, index }: { feature: FeatureItem; index: number }) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -5 }}
          className="flex flex-col items-center text-center cursor-pointer relative overflow-hidden rounded-xl border p-6 shadow-md bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-lg"
        >
          <div className={cn("w-12 h-12 rounded-full flex items-center justify-center mb-4", feature.color)}>
            <feature.icon className="size-6" />
          </div>
          <Badge className="mb-2 bg-accent/10 hover:bg-accent/20 text-accent font-medium">
            {feature.title}
          </Badge>
          <Check className="text-green-500 dark:text-green-400 absolute top-3 right-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100" size={16} />
        </motion.div>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 p-4">
        <div>
          <h4 className="text-lg font-medium mb-2">{feature.title}</h4>
          <p className="text-sm text-muted-foreground">{feature.description}</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900/50">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
