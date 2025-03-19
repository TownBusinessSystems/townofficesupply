
import React from "react";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";

const DesktopNavigation: React.FC = () => {
  return (
    <div className="hidden md:flex items-center space-x-6 flex-1 justify-center">
      <NavLink 
        name="Ink & Toner"
        path="/products"
      />
    </div>
  );
};

export default DesktopNavigation;
