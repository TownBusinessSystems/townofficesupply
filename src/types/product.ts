/**
 * Represents a product in the e-commerce system
 */
export interface Product {
  id: string;
  name: string;
  price: number;        // Must be positive
  originalPrice: number; // Must be positive and >= price
  image: string;
  brand: ProductBrand;
  category: ProductCategory;
  compatibility: string[];
  color: string;
  yield: string;        // Must be a valid number string
  printerFamily: string;
  cartridgeYieldType: YieldType;
  shelfLife: string;
  oemNumber: string;
  description: string;
}

/**
 * Type for product categories
 */
export type ProductCategory = "toner" | "ink" | "paper" | "accessories";

/**
 * Type for product brands
 */
export type ProductBrand = "HP" | "Brother" | "Canon" | "Epson" | "Lexmark";

/**
 * Type for yield categories
 */
export type YieldType = "Standard Yield" | "High Yield" | "Super High Yield";

/**
 * Validation error types for product data
 */
export interface ProductValidationError {
  field: keyof Product;
  message: string;
}

/**
 * Validates a product object and returns any validation errors
 */
export function validateProduct(product: Product): ProductValidationError[] {
  const errors: ProductValidationError[] = [];

  // Validate price
  if (product.price <= 0) {
    errors.push({
      field: "price",
      message: "Price must be greater than 0"
    });
  }

  // Validate original price
  if (product.originalPrice <= 0) {
    errors.push({
      field: "originalPrice",
      message: "Original price must be greater than 0"
    });
  } else if (product.originalPrice < product.price) {
    errors.push({
      field: "originalPrice",
      message: "Original price must be greater than or equal to current price"
    });
  }

  // Validate yield
  if (isNaN(Number(product.yield))) {
    errors.push({
      field: "yield",
      message: "Yield must be a valid number"
    });
  }

  // Validate required fields
  if (!product.id) {
    errors.push({
      field: "id",
      message: "Product ID is required"
    });
  }

  if (!product.name) {
    errors.push({
      field: "name",
      message: "Product name is required"
    });
  }

  if (!product.image) {
    errors.push({
      field: "image",
      message: "Product image is required"
    });
  }

  if (!product.brand) {
    errors.push({
      field: "brand",
      message: "Product brand is required"
    });
  }

  if (!product.category) {
    errors.push({
      field: "category",
      message: "Product category is required"
    });
  }

  if (!product.compatibility || product.compatibility.length === 0) {
    errors.push({
      field: "compatibility",
      message: "Product must have at least one compatible printer"
    });
  }

  if (!product.color) {
    errors.push({
      field: "color",
      message: "Product color is required"
    });
  }

  if (!product.printerFamily) {
    errors.push({
      field: "printerFamily",
      message: "Printer family is required"
    });
  }

  if (!product.cartridgeYieldType) {
    errors.push({
      field: "cartridgeYieldType",
      message: "Cartridge yield type is required"
    });
  }

  if (!product.shelfLife) {
    errors.push({
      field: "shelfLife",
      message: "Shelf life is required"
    });
  }

  if (!product.oemNumber) {
    errors.push({
      field: "oemNumber",
      message: "OEM number is required"
    });
  }

  if (!product.description) {
    errors.push({
      field: "description",
      message: "Product description is required"
    });
  }

  return errors;
} 