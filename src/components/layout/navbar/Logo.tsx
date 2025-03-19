
import React from "react";
import { Link } from "react-router-dom";

const Logo: React.FC = () => {
  return (
    <Link 
      to="/" 
      className="flex items-center gap-3 transition-opacity duration-300 hover:opacity-80"
    >
      <img 
        src="/lovable-uploads/ab1f6601-ffd2-4335-91ba-a40b6f4064c3.png" 
        alt="Town Office Supply Logo" 
        className="h-8 w-auto"
      />
      <span className="text-xl md:text-2xl font-display font-semibold">
        Town Office Supply
      </span>
    </Link>
  );
};

export default Logo;
