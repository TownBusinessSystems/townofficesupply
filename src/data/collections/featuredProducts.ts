
import { Product } from "@/context/CartContext";
import { proProducts } from "../products/proProducts";
import { tonerProducts } from "../products/tonerProducts";

// Featured toner products collection
export const featuredTonerProducts = [
  proProducts.find(p => p.id === "CF280A"),
  proProducts.find(p => p.id === "CF283A"),
  tonerProducts.find(p => p.id === "CF217A"),
  proProducts.find(p => p.id === "CF248A")
].filter(Boolean) as Product[];

// Featured ink products collection - empty for now
export const featuredInkProducts: Product[] = [];
