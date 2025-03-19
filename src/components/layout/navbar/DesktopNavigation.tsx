
import React from "react";
import NavLink from "./NavLink";
import { NavLinkType } from "./types";

interface DesktopNavigationProps {
  navLinks: NavLinkType[];
}

const DesktopNavigation: React.FC<DesktopNavigationProps> = ({ navLinks }) => {
  return (
    <nav className="hidden md:flex items-center space-x-8">
      {navLinks.map((link) => (
        <NavLink
          key={link.name}
          name={link.name}
          path={link.path}
          sublinks={link.sublinks}
        />
      ))}
    </nav>
  );
};

export default DesktopNavigation;
