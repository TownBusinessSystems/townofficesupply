
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import NavSearch from "./NavSearch";

const DesktopNavigation: React.FC = () => {
  return (
    <div className="hidden md:flex items-center space-x-6 flex-1 justify-center">
      <Button asChild className="bg-accent hover:bg-accent/90 text-white px-6 py-2 h-10">
        <Link to="/products">
          Ink & Toner
        </Link>
      </Button>
      
      <div className="w-full max-w-md">
        <NavSearch />
      </div>
    </div>
  );
};

export default DesktopNavigation;
