import { Product, ProductBrand, ProductCategory, YieldType, validateProduct, ProductValidationError } from "@/types/product";
import { blackTonerProducts } from "@/data/products/blackTonerProducts";

/**
 * Service for managing product data and operations
 */
class ProductService {
  private static instance: ProductService;
  private products: Product[];

  private constructor() {
    // Validate all products on initialization
    this.products = blackTonerProducts;
    this.validateAllProducts();
  }

  public static getInstance(): ProductService {
    if (!ProductService.instance) {
      ProductService.instance = new ProductService();
    }
    return ProductService.instance;
  }

  private validateAllProducts(): void {
    const invalidProducts: { id: string; errors: ProductValidationError[] }[] = [];
    
    this.products.forEach(product => {
      const errors = validateProduct(product);
      if (errors.length > 0) {
        invalidProducts.push({ id: product.id, errors });
      }
    });

    if (invalidProducts.length > 0) {
      console.error("Invalid products found:", invalidProducts);
      throw new Error(`Found ${invalidProducts.length} invalid products. Check console for details.`);
    }
  }

  /**
   * Get all products
   */
  public getAllProducts(): Product[] {
    return this.products;
  }

  /**
   * Get a product by ID
   */
  public getProductById(id: string): Product | undefined {
    return this.products.find(product => product.id === id);
  }

  /**
   * Get products by brand
   */
  public getProductsByBrand(brand: ProductBrand): Product[] {
    return this.products.filter(product => product.brand === brand);
  }

  /**
   * Get products by category
   */
  public getProductsByCategory(category: ProductCategory): Product[] {
    return this.products.filter(product => product.category === category);
  }

  /**
   * Get products by yield type
   */
  public getProductsByYieldType(yieldType: YieldType): Product[] {
    return this.products.filter(product => product.cartridgeYieldType === yieldType);
  }

  /**
   * Search products by name or description
   */
  public searchProducts(query: string): Product[] {
    const lowercaseQuery = query.toLowerCase();
    return this.products.filter(product => 
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.description.toLowerCase().includes(lowercaseQuery) ||
      product.oemNumber.toLowerCase().includes(lowercaseQuery)
    );
  }

  /**
   * Get compatible products for a printer model
   */
  public getCompatibleProducts(printerModel: string): Product[] {
    return this.products.filter(product => 
      product.compatibility.some(model => 
        model.toLowerCase().includes(printerModel.toLowerCase())
      )
    );
  }

  public addProduct(product: Product): void {
    const errors = validateProduct(product);
    if (errors.length > 0) {
      throw new Error(`Invalid product: ${JSON.stringify(errors)}`);
    }

    if (this.getProductById(product.id)) {
      throw new Error(`Product with ID ${product.id} already exists`);
    }

    this.products.push(product);
  }

  public updateProduct(id: string, updatedProduct: Partial<Product>): void {
    const index = this.products.findIndex(product => product.id === id);
    if (index === -1) {
      throw new Error(`Product with ID ${id} not found`);
    }

    const updated = { ...this.products[index], ...updatedProduct };
    const errors = validateProduct(updated);
    if (errors.length > 0) {
      throw new Error(`Invalid product update: ${JSON.stringify(errors)}`);
    }

    this.products[index] = updated;
  }

  public deleteProduct(id: string): void {
    const index = this.products.findIndex(product => product.id === id);
    if (index === -1) {
      throw new Error(`Product with ID ${id} not found`);
    }

    this.products.splice(index, 1);
  }
}

// Export a singleton instance
export const productService = ProductService.getInstance(); 