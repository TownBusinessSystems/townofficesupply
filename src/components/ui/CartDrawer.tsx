
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import CartItem from "./CartItem";
import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";

const CartDrawer = () => {
  const { cartItems, isCartOpen, toggleCart, cartTotal, clearCart } = useCart();

  return (
    <>
      {/* Cart Backdrop */}
      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-xs z-50"
            onClick={toggleCart}
          />
        )}
      </AnimatePresence>

      {/* Cart Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md z-50 glass-card border-l border-gray-200 dark:border-gray-800 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Cart Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-800">
              <h2 className="text-xl font-medium">Your Cart</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleCart}
                aria-label="Close cart"
              >
                <X size={20} />
              </Button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto px-6">
              {cartItems.length > 0 ? (
                <div className="py-4">
                  {cartItems.map((item) => (
                    <CartItem key={item.product.id} item={item} />
                  ))}
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4">
                    <ShoppingBag className="text-muted-foreground" size={24} />
                  </div>
                  <h3 className="text-lg font-medium mb-2">Your cart is empty</h3>
                  <p className="text-muted-foreground max-w-xs mb-6">
                    Looks like you haven't added any products to your cart yet.
                  </p>
                  <Button
                    onClick={toggleCart}
                    className="bg-accent hover:bg-accent/90 text-white"
                  >
                    Start Shopping
                  </Button>
                </div>
              )}
            </div>

            {/* Cart Footer */}
            {cartItems.length > 0 && (
              <div className="px-6 py-6 border-t border-gray-200 dark:border-gray-800">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">${cartTotal.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="text-muted-foreground">Calculated at checkout</span>
                  </div>

                  <div className="h-px bg-gray-200 dark:bg-gray-800 my-2"></div>

                  <div className="flex justify-between">
                    <span className="font-medium">Total</span>
                    <span className="font-semibold">${cartTotal.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex flex-col space-y-2 pt-2">
                    <Button asChild className="w-full bg-accent hover:bg-accent/90 text-white py-6 h-auto">
                      <Link to="/checkout">
                        Checkout
                        <ArrowRight size={16} className="ml-2" />
                      </Link>
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={clearCart}
                    >
                      Clear Cart
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default CartDrawer;
