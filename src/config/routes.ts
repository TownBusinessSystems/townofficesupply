import { lazy } from "react";

// Define route types
export type RouteConfig = {
  path: string;
  component: React.LazyExoticComponent<() => JSX.Element>;
  label?: string;
};

// Lazy load components
const Index = lazy(() => import("@/pages/Index"));
const Products = lazy(() => import("@/pages/Products"));
const ProductDetail = lazy(() => import("@/pages/ProductDetail"));
const Privacy = lazy(() => import("@/pages/Privacy"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const ProductReport = lazy(() => import("@/pages/ProductReport"));

// Route configurations
export const routes: RouteConfig[] = [
  { path: "/", component: Index, label: "Home" },
  { path: "/products", component: Products, label: "Products" },
  { path: "/product/:id", component: ProductDetail },
  { path: "/privacy", component: Privacy, label: "Privacy Policy" },
  { path: "/product-report", component: ProductReport, label: "Product Report" },
  { path: "*", component: NotFound },
];

// Helper function to get route by path
export const getRouteByPath = (path: string): RouteConfig | undefined => {
  return routes.find(route => route.path === path);
}; 