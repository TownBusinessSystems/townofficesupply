
import { Product } from "@/context/CartContext";
import { tonerProducts } from "./products/tonerProducts";
import { drumUnits } from "./products/drumUnits";
import { enterpriseProducts } from "./products/enterpriseProducts";
import { legacyProducts } from "./products/legacyProducts";
import { proProducts } from "./products/proProducts";
import { inkProducts } from "./products/inkProducts";
import { brotherDrumUnits } from "./products/brotherDrumUnits";
import { brotherDrumUnitsExtended } from "./products/brotherDrumUnitsExtended";
import { brotherTonerProducts } from "./products/brotherTonerProducts";
import { featuredTonerProducts, featuredInkProducts, featuredDrumProducts } from "./collections/featuredProducts";

// Combine all products into one array
export const products: Product[] = [
  ...tonerProducts,
  ...drumUnits,
  ...enterpriseProducts,
  ...legacyProducts,
  ...proProducts,
  ...inkProducts,
  ...brotherDrumUnits,
  ...brotherDrumUnitsExtended,
  ...brotherTonerProducts
];

// Re-export the featured collections
export { featuredTonerProducts, featuredInkProducts, featuredDrumProducts };
