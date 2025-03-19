
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/ui/Hero";
import FeaturedSection from "@/components/ui/FeaturedSection";
import CategoriesSection from "@/components/sections/CategoriesSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import CTASection from "@/components/sections/CTASection";
import CartDrawer from "@/components/ui/CartDrawer";
import PromoBanner from "@/components/ui/PromoBanner";
import { featuredInkProducts, featuredTonerProducts } from "@/data/productData";
import { useHeroCarousel } from "@/hooks/useHeroCarousel";

const Index = () => {
  const { currentIndex } = useHeroCarousel({
    totalSlides: 3,
    interval: 7000
  });

  return (
    <div className="min-h-screen flex flex-col">
      <PromoBanner externalIndex={currentIndex} />
      <Navbar />
      <CartDrawer />
      
      <main className="flex-grow">
        <Hero externalIndex={currentIndex} />
        <CategoriesSection />
        <FeaturedSection title="Featured Ink Cartridges" products={featuredInkProducts} />
        <FeaturesSection />
        <FeaturedSection title="Featured Toner Cartridges" products={featuredTonerProducts} />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
