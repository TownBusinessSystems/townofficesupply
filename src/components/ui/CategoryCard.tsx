
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  path: string;
  index: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ 
  title, 
  description, 
  image, 
  path,
  index
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="glass-card rounded-xl overflow-hidden h-full group"
    >
      <Link to={path} className="block h-full">
        <div className="flex flex-col h-full">
          <div className="relative overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-48 sm:h-56 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <h3 className="text-white text-xl sm:text-2xl font-medium p-6">
                {title}
              </h3>
            </div>
          </div>
          
          <div className="p-6 flex flex-col flex-grow">
            <p className="text-muted-foreground text-sm mb-4">
              {description}
            </p>
            
            <div className="mt-auto flex items-center text-accent font-medium">
              <span>Browse Products</span>
              <ArrowRight 
                size={16} 
                className="ml-2 transition-transform duration-300 group-hover:translate-x-2" 
              />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;
