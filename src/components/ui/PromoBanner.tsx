import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Tag, Percent, Gift, ShoppingBag } from "lucide-react";

interface PromoMessage {
  text: string;
  icon: React.ReactNode;
}

// Map of state names to their abbreviations
const stateAbbreviations: Record<string, string> = {
  "Alabama": "AL", "Alaska": "AK", "Arizona": "AZ", "Arkansas": "AR", "California": "CA",
  "Colorado": "CO", "Connecticut": "CT", "Delaware": "DE", "Florida": "FL", "Georgia": "GA",
  "Hawaii": "HI", "Idaho": "ID", "Illinois": "IL", "Indiana": "IN", "Iowa": "IA",
  "Kansas": "KS", "Kentucky": "KY", "Louisiana": "LA", "Maine": "ME", "Maryland": "MD",
  "Massachusetts": "MA", "Michigan": "MI", "Minnesota": "MN", "Mississippi": "MS", "Missouri": "MO",
  "Montana": "MT", "Nebraska": "NE", "Nevada": "NV", "New Hampshire": "NH", "New Jersey": "NJ",
  "New Mexico": "NM", "New York": "NY", "North Carolina": "NC", "North Dakota": "ND", "Ohio": "OH",
  "Oklahoma": "OK", "Oregon": "OR", "Pennsylvania": "PA", "Rhode Island": "RI", "South Carolina": "SC",
  "South Dakota": "SD", "Tennessee": "TN", "Texas": "TX", "Utah": "UT", "Vermont": "VT",
  "Virginia": "VA", "Washington": "WA", "West Virginia": "WV", "Wisconsin": "WI", "Wyoming": "WY",
  "District of Columbia": "DC"
};

interface PromoBannerProps {
  externalIndex?: number;
}

const PromoBanner: React.FC<PromoBannerProps> = ({ externalIndex }) => {
  const [showBanner, setShowBanner] = useState(true);
  const [internalIndex, setInternalIndex] = useState(0);
  const [locationString, setLocationString] = useState<string | null>(null);

  // Use external index if provided, otherwise use internal index
  const currentIndex = externalIndex !== undefined ? externalIndex % 4 : internalIndex;

  useEffect(() => {
    // Get user's location using the Geolocation API
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const response = await fetch(
              `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`
            );
            const data = await response.json();
            
            // Format as "City, State" if both are available
            const city = data.city || data.locality || "";
            const state = data.principalSubdivision || "";
            const stateAbbr = stateAbbreviations[state] || state;
            
            if (city && state) {
              setLocationString(`${city}, ${stateAbbr}`);
            } else if (city) {
              setLocationString(city);
            } else if (state) {
              setLocationString(stateAbbr);
            }
          } catch (error) {
            console.error("Error fetching location data:", error);
            setLocationString(null);
          }
        },
        (error) => {
          console.error("Geolocation error:", error);
          setLocationString(null);
        }
      );
    }
  }, []);

  const promoMessages: PromoMessage[] = [
    {
      text: "Spring Sale 15% off site-wide! Use code SPRING15",
      icon: <Percent size={16} />,
    },
    {
      text: locationString 
        ? `Free 1-3 day shipping to ${locationString}!`
        : "Free 1-3 day shipping on all orders!",
      icon: <ShoppingBag size={16} />,
    },
    {
      text: "New customers: Use WELCOME10 for 10% off",
      icon: <Tag size={16} />,
    },
    {
      text: "Buy 2 ink cartridges, get 1 free!",
      icon: <Gift size={16} />,
    },
  ];

  // Only use auto-rotation if no external index is provided
  useEffect(() => {
    if (externalIndex !== undefined) return;
    
    const interval = setInterval(() => {
      setInternalIndex((prevIndex) => (prevIndex + 1) % promoMessages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [externalIndex, promoMessages.length]);

  if (!showBanner) return null;

  const currentPromo = promoMessages[currentIndex];

  return (
    <div className="relative py-2 bg-gradient-to-r from-blue-400 to-cyan-500 text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center text-center text-sm sm:text-base font-medium"
            >
              <span className="mr-2">{currentPromo.icon}</span>
              {currentPromo.text}
            </motion.div>
          </AnimatePresence>
          <button
            onClick={() => setShowBanner(false)}
            className="absolute right-4 text-white/80 hover:text-white transition-colors"
            aria-label="Close banner"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
