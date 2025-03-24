
import { Product } from "@/context/CartContext";
import { products } from "@/data/productData";

/**
 * Get a list of all available brands
 */
export const getAllBrands = (): string[] => {
  const brands = [...new Set(products.map(product => product.brand))];
  return brands.sort();
};

/**
 * Get a list of all available colors
 */
export const getAllColors = (): string[] => {
  const colors = [...new Set(products.filter(p => p.color).map(product => product.color as string))];
  return colors.sort();
};

/**
 * Get a list of all available yield types
 */
export const getAllYieldTypes = (): string[] => {
  const yieldTypes = [...new Set(products.filter(p => p.cartridgeYieldType).map(product => product.cartridgeYieldType as string))];
  return yieldTypes.sort();
};

/**
 * Get a list of all available printer families
 */
export const getAllPrinterFamilies = (): string[] => {
  const families = [...new Set(products.filter(p => p.printerFamily).map(product => product.printerFamily as string))];
  return families.sort();
};

/**
 * Get a list of product details by id
 */
export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

/**
 * Get a comprehensive list of all products and their details
 */
export const getAllProductDetails = (): {
  totalCount: number;
  brandCount: { [key: string]: number };
  colorCount: { [key: string]: number };
  yieldTypeCount: { [key: string]: number };
  categoryCount: { [key: string]: number };
  products: Product[];
} => {
  // Count products by brand
  const brandCount: { [key: string]: number } = {};
  const colorCount: { [key: string]: number } = {};
  const yieldTypeCount: { [key: string]: number } = {};
  const categoryCount: { [key: string]: number } = {};

  products.forEach(product => {
    // Count by brand
    if (product.brand) {
      brandCount[product.brand] = (brandCount[product.brand] || 0) + 1;
    }

    // Count by color
    if (product.color) {
      colorCount[product.color] = (colorCount[product.color] || 0) + 1;
    }

    // Count by yield type
    if (product.cartridgeYieldType) {
      yieldTypeCount[product.cartridgeYieldType] = (yieldTypeCount[product.cartridgeYieldType] || 0) + 1;
    }

    // Count by category
    if (product.category) {
      categoryCount[product.category] = (categoryCount[product.category] || 0) + 1;
    }
  });

  return {
    totalCount: products.length,
    brandCount,
    colorCount,
    yieldTypeCount,
    categoryCount,
    products: products
  };
};

/**
 * Export all products as a formatted JSON string
 */
export const exportProductsToJson = (): string => {
  return JSON.stringify(products, null, 2);
};

/**
 * Get a comprehensive report of all products
 */
export const getProductReport = (): string => {
  const productData = getAllProductDetails();
  
  let report = `# Product Catalog Report\n\n`;
  report += `Total Products: ${productData.totalCount}\n\n`;
  
  report += `## Products by Brand\n`;
  Object.entries(productData.brandCount).forEach(([brand, count]) => {
    report += `- ${brand}: ${count} products\n`;
  });
  
  report += `\n## Products by Category\n`;
  Object.entries(productData.categoryCount).forEach(([category, count]) => {
    report += `- ${category}: ${count} products\n`;
  });
  
  report += `\n## Products by Color\n`;
  Object.entries(productData.colorCount).forEach(([color, count]) => {
    report += `- ${color}: ${count} products\n`;
  });
  
  report += `\n## Products by Yield Type\n`;
  Object.entries(productData.yieldTypeCount).forEach(([yieldType, count]) => {
    report += `- ${yieldType}: ${count} products\n`;
  });
  
  report += `\n## Product List\n`;
  productData.products.forEach(product => {
    report += `\n### ${product.name} (ID: ${product.id})\n`;
    report += `- Brand: ${product.brand}\n`;
    report += `- Category: ${product.category}\n`;
    report += `- Color: ${product.color || "N/A"}\n`;
    report += `- Price: $${product.price.toFixed(2)}\n`;
    if (product.originalPrice) {
      report += `- Original Price: $${product.originalPrice.toFixed(2)}\n`;
      const discount = ((product.originalPrice - product.price) / product.originalPrice) * 100;
      report += `- Discount: ${discount.toFixed(0)}%\n`;
    }
    report += `- Yield: ${product.yield || "N/A"} pages\n`;
    report += `- Yield Type: ${product.cartridgeYieldType || "N/A"}\n`;
    report += `- OEM Number: ${product.oemNumber || "N/A"}\n`;
    report += `- Compatible with: ${product.compatibility ? product.compatibility.join(", ") : "N/A"}\n`;
  });
  
  return report;
};
