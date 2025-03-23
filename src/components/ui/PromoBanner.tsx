
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Tag, Percent, Gift, ShoppingBag } from "lucide-react";

interface PromoMessage {
  text: string;
  icon: React.ReactNode;
}

interface PromoBannerProps {
  externalIndex?: number;
}

const PromoBanner: React.FC<PromoBannerProps> = ({ externalIndex }) => {
  const [showBanner, setShowBanner] = useState(true);
  const [internalIndex, setInternalIndex] = useState(0);

  const promoMessages: PromoMessage[] = [
    {
      text: "LIMITED TIME: UNLOCK 15% OFF | SPRING15 AT CHECKOUT",
      icon: <Percent size={16} />,
    },
    {
      text: "FREE SHIPPING | ARRIVES IN 1-3 DAYS",
      icon: <ShoppingBag size={16} />,
    },
    {
      text: "SHOP WITH CONFIDENCE: 100% SATISFACTION GUARANTEE",
      icon: <Tag size={16} />,
    },
    {
      text: "Buy 2 ink cartridges, get 1 free!",
      icon: <Gift size={16} />,
    },
  ];

  // Use external index if provided, otherwise use internal index
  const currentIndex = externalIndex !== undefined ? externalIndex % 4 : internalIndex;

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
