
import { Product } from "@/context/CartContext";
import { proProducts } from "../products/proProducts";
import { tonerProducts } from "../products/tonerProducts";
import { brotherDrumUnits } from "../products/brotherDrumUnits";
import { brotherTonerProducts } from "../products/brotherTonerProducts";
import { enterpriseProducts } from "../products/enterpriseProducts";

// Featured toner products collection
export const featuredTonerProducts = [
  proProducts.find(p => p.id === "CF280A"),
  proProducts.find(p => p.id === "CF283A"),
  tonerProducts.find(p => p.id === "CF217A"),
  proProducts.find(p => p.id === "CF248A"),
  tonerProducts.find(p => p.id === "CF294X"),
  tonerProducts.find(p => p.id === "CF294A"), // Add the newly updated product
  brotherTonerProducts.find(p => p.id === "TN450"),
  brotherTonerProducts.find(p => p.id === "TN660"),
  brotherTonerProducts.find(p => p.id === "TN770")
].filter(Boolean) as Product[];

// Featured drum products collection
export const featuredDrumProducts = [
  brotherDrumUnits.find(p => p.id === "DR420"),
  brotherDrumUnits.find(p => p.id === "DR630"),
  brotherDrumUnits.find(p => p.id === "DR720"),
  tonerProducts.find(p => p.id === "CF232A") // Add the newly added drum unit
].filter(Boolean) as Product[];

// Featured ink products collection - empty for now
export const featuredInkProducts: Product[] = [];
