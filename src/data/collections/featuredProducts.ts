
import { Product } from "@/context/CartContext";
import { proProducts } from "../products/proProducts";
import { tonerProducts } from "../products/tonerProducts";
import { brotherDrumUnits } from "../products/brotherDrumUnits";

// Featured toner products collection
export const featuredTonerProducts = [
  proProducts.find(p => p.id === "CF280A"),
  proProducts.find(p => p.id === "CF283A"),
  tonerProducts.find(p => p.id === "CF217A"),
  proProducts.find(p => p.id === "CF248A"),
  tonerProducts.find(p => p.id === "CF294X")
].filter(Boolean) as Product[];

// Featured drum products collection
export const featuredDrumProducts = [
  brotherDrumUnits.find(p => p.id === "DR420"),
  brotherDrumUnits.find(p => p.id === "DR630"),
  brotherDrumUnits.find(p => p.id === "DR720")
].filter(Boolean) as Product[];

// Featured ink products collection - empty for now
export const featuredInkProducts: Product[] = [];
