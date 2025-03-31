import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { CartProvider } from "@/context/CartContext";
import { Toaster } from "@/components/ui/toaster";
import LoadingSpinner from "@/components/ui/loading-spinner";
import { routes } from "@/config/routes";
import "@/App.css";

/**
 * Main application component that sets up routing and global providers
 * @returns {JSX.Element} The rendered application
 */
function App(): JSX.Element {
  return (
    <ThemeProvider defaultTheme="light">
      <CartProvider>
        <BrowserRouter>
          <Suspense fallback={<LoadingSpinner text="Loading application..." />}>
            <Routes>
              {routes.map(({ path, component: Component }) => (
                <Route key={path} path={path} element={<Component />} />
              ))}
            </Routes>
          </Suspense>
        </BrowserRouter>
        <Toaster />
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
