
// Sample data for the search functionality
// In a real app, this would come from your API or context
export interface SearchItem {
  id: string;
  name: string;
  category: string;
  url: string;
}

export const searchItems: SearchItem[] = [
  { id: "p1", name: "HP 67 Black Ink Cartridge", category: "ink", url: "/product/p1" },
  { id: "p2", name: "Canon PG-245 Black Ink Cartridge", category: "ink", url: "/product/p2" },
  { id: "p3", name: "Epson 302 Claria Premium Ink", category: "ink", url: "/product/p3" },
  { id: "p4", name: "Brother TN760 High Yield Toner", category: "toner", url: "/product/p4" },
  { id: "p5", name: "HP 55A Black Toner Cartridge", category: "toner", url: "/product/p5" },
  { id: "cat1", name: "All Ink Cartridges", category: "category", url: "/products?category=ink" },
  { id: "cat2", name: "All Toner Cartridges", category: "category", url: "/products?category=toner" },
  { id: "cat3", name: "All Products", category: "category", url: "/products" },
];
