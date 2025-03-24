
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "@/pages/Index";
import Products from "@/pages/Products";
import ProductDetail from "@/pages/ProductDetail";
import Privacy from "@/pages/Privacy";
import NotFound from "@/pages/NotFound";
import ProductReport from "@/pages/ProductReport";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { CartProvider } from "@/context/CartContext";
import { Toaster } from "@/components/ui/toaster";
import "@/App.css";

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/product-report" element={<ProductReport />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <Toaster />
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
