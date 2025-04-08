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
        alt="TonerEmpire Logo" 
        className="h-16 w-auto" // Reduced from h-24 to h-16
      />
      <div className="flex flex-col items-start">
        <span className="text-accent text-lg font-display font-semibold leading-tight">
          Toner
        </span>
        <span className="text-lg font-display font-semibold leading-tight">
          Empire
        </span>
        <span className="text-xs text-gray-600 italic font-medium leading-tight">
          Ink & Toner Store
        </span>
      </div>
      <div className="flex flex-col items-start border-l border-gray-300 pl-2 ml-2">
        <span className="font-display font-bold leading-tight text-base">
          Celebrating 50 Years
        </span>
        <span className="text-xs text-gray-700 font-medium leading-tight">
          of Excellence in Service
        </span>
      </div>
    </Link>
  );
};

export default Logo;
