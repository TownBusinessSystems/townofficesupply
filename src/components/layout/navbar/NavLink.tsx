
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";

interface SubLink {
  name: string;
  path: string;
}

interface NavLinkProps {
  name: string;
  path: string;
  sublinks?: SubLink[];
}

const NavLink: React.FC<NavLinkProps> = ({ name, path, sublinks }) => {
  const location = useLocation();
  
  return (
    <div className="relative group">
      <Link
        to={path}
        className={`inline-block text-base font-medium transition-colors duration-300 px-3 py-2 rounded-md ${
          location.pathname === path
            ? "text-accent bg-accent/10"
            : "hover:text-accent hover:bg-accent/5"
        }`}
      >
        <div className="flex items-center gap-1">
          {name}
          {sublinks && <ChevronDown size={16} />}
        </div>
      </Link>
      
      {/* Dropdown menu */}
      {sublinks && (
        <div className="absolute left-0 mt-2 w-48 origin-top-left glass-card rounded-md shadow-glossy opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
          <div className="py-2">
            {sublinks.map((sublink) => (
              <Link
                key={sublink.name}
                to={sublink.path}
                className="block px-4 py-2 text-sm hover:bg-accent/10 transition-colors duration-200"
              >
                {sublink.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavLink;
