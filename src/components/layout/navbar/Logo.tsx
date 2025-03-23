
import React from "react";
import { Link } from "react-router-dom";

const Logo: React.FC = () => {
  return (
    <Link 
      to="/" 
      className="flex items-center gap-1.5 transition-opacity duration-300 hover:opacity-80"
    >
      <img 
        src="/lovable-uploads/719dc146-0c76-4965-b83a-67b6eb021ba2.png" 
        alt="Town Office Supply Logo" 
        className="h-16 w-auto" // Reduced from h-24
      />
      <div className="flex flex-col items-start">
        <span className="text-accent text-base md:text-lg font-display font-semibold leading-tight"> {/* Reduced from text-xl md:text-2xl */}
          Town
        </span>
        <span className="text-base md:text-lg font-display font-semibold leading-tight"> {/* Reduced from text-xl md:text-2xl */}
          Office Supply
        </span>
        <span className="text-xs text-gray-600 italic font-medium leading-tight"> {/* Reduced from text-xs md:text-sm */}
          Ink & Toner Store
        </span>
      </div>
      <div className="flex flex-col items-start border-l border-gray-300 pl-2 ml-1"> {/* Reduced margins */}
        <span className="font-display font-bold leading-tight text-sm md:text-base"> {/* Reduced from text-lg md:text-xl */}
          Celebrating 50 Years
        </span>
        <span className="text-xs text-gray-700 font-medium leading-tight"> {/* Reduced from text-sm md:text-base */}
          of Excellence in Service
        </span>
      </div>
    </Link>
  );
};

export default Logo;
