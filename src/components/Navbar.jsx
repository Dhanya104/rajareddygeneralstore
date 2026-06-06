import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, X, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toggleCart, cartTotalCount } = useCart();

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Categories', href: '#categories' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-brand-cream/90 backdrop-blur-md border-b border-brand-beige shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-brand-green flex items-center justify-center">
              <span className="text-brand-gold font-bold text-xl font-serif">R</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-brand-green tracking-tight leading-none">Raja Reddy</span>
              <span className="text-xs text-brand-brown uppercase tracking-widest font-medium">General Store</span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-brand-dark hover:text-brand-green transition-colors font-medium text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Icons & Actions */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="relative group">
              <Search className="w-5 h-5 text-brand-dark cursor-pointer group-hover:text-brand-green transition-colors" />
            </div>
            <div className="relative cursor-pointer group" onClick={toggleCart}>
              <ShoppingCart className="w-5 h-5 text-brand-dark group-hover:text-brand-green transition-colors" />
              {cartTotalCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand-gold text-brand-dark text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartTotalCount}
                </span>
              )}
            </div>
            <button className="flex items-center gap-2 bg-brand-green hover:bg-brand-green-light text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-md">
              <User className="w-4 h-4" />
              <span>Login</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-4">
            <div className="relative cursor-pointer" onClick={toggleCart}>
              <ShoppingCart className="w-5 h-5 text-brand-dark" />
              {cartTotalCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand-gold text-brand-dark text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartTotalCount}
                </span>
              )}
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-brand-dark focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-cream border-t border-brand-beige overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full bg-brand-beige text-brand-dark rounded-full py-2.5 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                />
                <Search className="absolute left-3 top-3 w-4 h-4 text-brand-brown/50" />
              </div>
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-brand-dark font-medium py-2 border-b border-brand-beige/50"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              <button className="w-full flex items-center justify-center gap-2 bg-brand-green text-white px-5 py-3 rounded-full font-medium mt-4">
                <User className="w-5 h-5" />
                <span>Login / Register</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
