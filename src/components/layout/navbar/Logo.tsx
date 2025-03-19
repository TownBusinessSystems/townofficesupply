
import React from "react";
import { Link } from "react-router-dom";

const Logo: React.FC = () => {
  return (
    <Link 
      to="/" 
      className="flex items-center gap-3 transition-opacity duration-300 hover:opacity-80"
    >
      <img 
        src="/lovable-uploads/719dc146-0c76-4965-b83a-67b6eb021ba2.png" 
        alt="Town Office Supply Logo" 
        className="h-12 w-auto" // Increased size from h-10 to h-12
      />
      <div className="flex flex-col items-start">
        <span className="text-accent text-xl md:text-2xl font-display font-semibold leading-tight">
          Town
        </span>
        <span className="text-xl md:text-2xl font-display font-semibold leading-tight">
          Office Supply
        </span>
      </div>
    </Link>
  );
};

export default Logo;
