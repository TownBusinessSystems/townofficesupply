
import React from "react";
import { Link } from "react-router-dom";

const Logo: React.FC = () => {
  return (
    <Link 
      to="/" 
      className="flex items-center gap-2 transition-opacity duration-300 hover:opacity-80"
    >
      <span className="text-xl md:text-2xl font-display font-semibold">
        Town Office Supply
      </span>
    </Link>
  );
};

export default Logo;
