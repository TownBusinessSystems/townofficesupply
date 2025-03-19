
import React from "react";
import { Link } from "react-router-dom";

const Logo: React.FC = () => {
  return (
    <Link 
      to="/" 
      className="flex items-center gap-2 transition-opacity duration-300 hover:opacity-80"
    >
      <img 
        src="/lovable-uploads/719dc146-0c76-4965-b83a-67b6eb021ba2.png" 
        alt="Town Office Supply Logo" 
        className="h-10 w-auto" // Increased size from h-8 to h-10
      />
      <span className="text-xl md:text-2xl font-display font-semibold">
        <span className="text-accent">Town</span> Office Supply
      </span>
    </Link>
  );
};

export default Logo;
