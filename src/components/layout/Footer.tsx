
import React from "react";
import { Link } from "react-router-dom";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 pt-12 pb-8 bg-gray-50/50 dark:bg-gray-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Town Office Supply</h3>
            <p className="text-sm text-muted-foreground">
              Specializing in ink and toner refills for businesses and individuals 
              across the United States.
            </p>
            <div className="flex space-x-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 rounded-full hover:text-accent hover:bg-accent/10"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 rounded-full hover:text-accent hover:bg-accent/10"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 rounded-full hover:text-accent hover:bg-accent/10"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "Ink Cartridges", path: "/products?category=ink" },
                { name: "Toner Cartridges", path: "/products?category=toner" },
                { name: "About Us", path: "/about" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors duration-300 inline-flex items-center group"
                  >
                    <ArrowRight 
                      size={14} 
                      className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" 
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-0.5 text-accent" />
                <span className="text-sm text-muted-foreground">
                  123 Office Way, Suite 456<br />
                  Business District, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-accent" />
                <span className="text-sm text-muted-foreground">
                  (555) 123-4567
                </span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-accent" />
                <span className="text-sm text-muted-foreground">
                  info@townofficesupply.com
                </span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to our newsletter for special deals and updates.
            </p>
            <div className="flex flex-col space-y-2">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="h-10"
              />
              <Button className="bg-accent hover:bg-accent/90 text-white transition-colors duration-300">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="divider"></div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Town Office Supply. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-accent transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-accent transition-colors duration-300">
              Terms of Service
            </Link>
            <Link to="/shipping" className="hover:text-accent transition-colors duration-300">
              Shipping Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
