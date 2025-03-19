
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
        className="h-14 w-auto" // Increased size from h-12 to h-14
      />
      <div className="flex flex-col items-start">
        <span className="text-accent text-lg md:text-xl font-display font-semibold leading-tight">
          Town
        </span>
        <span className="text-lg md:text-xl font-display font-semibold leading-tight">
          Office Supply
        </span>
      </div>
    </Link>
  );
};

export default Logo;
