
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
        className="h-24 w-auto" 
      />
      <div className="flex flex-col items-start">
        <span className="text-accent text-xl md:text-2xl font-display font-semibold leading-tight">
          Town
        </span>
        <span className="text-xl md:text-2xl font-display font-semibold leading-tight">
          Office Supply
        </span>
        <span className="text-xs md:text-sm text-gray-600 italic font-medium leading-tight">
          Ink & Toner Depot
        </span>
      </div>
      <div className="flex flex-col items-start border-l border-gray-300 pl-2 ml-2">
        <span className="text-accent text-lg md:text-xl font-display font-bold leading-tight">
          Over 50 Years
        </span>
        <span className="text-sm md:text-base text-gray-700 font-medium leading-tight">
          of excellence
        </span>
      </div>
    </Link>
  );
};

export default Logo;
