import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { isCartOpen, toggleCart, cartItems, updateQuantity, cartTotalPrice } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 bg-brand-dark/40 backdrop-blur-sm z-50"
          />

          {/* Cart Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-brand-cream shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-brand-beige bg-white">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-6 h-6 text-brand-green" />
                <h2 className="text-xl font-bold text-brand-dark">Your Cart</h2>
              </div>
              <button 
                onClick={toggleCart}
                className="w-10 h-10 rounded-full bg-brand-beige flex items-center justify-center text-brand-dark hover:bg-brand-green hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-brand-brown/50">
                  <ShoppingBag className="w-16 h-16 mb-4 opacity-50" />
                  <p className="font-medium">Your cart is empty.</p>
                  <p className="text-sm mt-2 text-center">Looks like you haven't added any traditional goodness yet!</p>
                  <button 
                    onClick={toggleCart}
                    className="mt-6 bg-brand-green text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-brand-green-light transition-colors"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 bg-white p-3 rounded-2xl border border-brand-beige shadow-sm">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-20 h-20 object-cover rounded-xl"
                    />
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <h4 className="font-bold text-brand-dark text-sm leading-tight mb-1">{item.name}</h4>
                        <p className="text-xs text-brand-brown">{item.weight}</p>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <span className="font-bold text-brand-green text-sm">{item.price}</span>
                        
                        <div className="flex items-center bg-brand-beige rounded-full px-2 py-1">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-brand-dark shadow-sm"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-sm font-bold text-brand-dark">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-brand-dark shadow-sm"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer / Checkout */}
            {cartItems.length > 0 && (
              <div className="p-6 bg-white border-t border-brand-beige shadow-[0_-4px_15px_-10px_rgba(0,0,0,0.1)]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-brand-brown">Subtotal</span>
                  <span className="font-bold text-brand-dark">₹{cartTotalPrice}</span>
                </div>
                <div className="flex items-center justify-between mb-6 text-sm">
                  <span className="text-brand-brown">Delivery</span>
                  <span className="font-bold text-brand-green">FREE</span>
                </div>
                <button className="w-full bg-brand-green hover:bg-brand-green-light text-white py-4 rounded-full font-bold flex justify-between items-center px-6 transition-colors shadow-lg shadow-brand-green/30">
                  <span>Proceed to Checkout</span>
                  <span>₹{cartTotalPrice}</span>
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Cart;
