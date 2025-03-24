
import { Product } from "@/context/CartContext";
import { blackTonerProducts } from "./products/blackTonerProducts";
import { colorTonerProducts } from "./products/colorTonerProducts";
import { blackInkProducts } from "./products/blackInkProducts";
import { colorInkProducts } from "./products/colorInkProducts";

// Define featured products collections
const featuredTonerProducts: Product[] = [
  blackTonerProducts.find(p => p.id === "CF280A"),
  blackTonerProducts.find(p => p.id === "CF283A"),
  blackTonerProducts.find(p => p.id === "CF217A"),
  blackTonerProducts.find(p => p.id === "CF248A"),
  blackTonerProducts.find(p => p.id === "CF294X"),
  blackTonerProducts.find(p => p.id === "CF294A"),
  blackTonerProducts.find(p => p.id === "TN450"),
  blackTonerProducts.find(p => p.id === "TN660"),
  blackTonerProducts.find(p => p.id === "TN770")
].filter(Boolean) as Product[];

// Featured drum products
const featuredDrumProducts: Product[] = [
  blackTonerProducts.find(p => p.id === "DR420"),
  blackTonerProducts.find(p => p.id === "DR630"),
  blackTonerProducts.find(p => p.id === "DR720"),
  blackTonerProducts.find(p => p.id === "CF232A")
].filter(Boolean) as Product[];

// Featured ink products collection - empty for now
const featuredInkProducts: Product[] = [];

// Combine all products into one array
export const products: Product[] = [
  ...blackTonerProducts,
  ...colorTonerProducts,
  ...blackInkProducts,
  ...colorInkProducts
];

// Export the featured collections
export { featuredTonerProducts, featuredInkProducts, featuredDrumProducts };
