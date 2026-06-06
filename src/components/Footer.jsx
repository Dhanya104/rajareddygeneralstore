import React from 'react';
import { MapPin, Phone, Mail, Camera, Globe, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10 border-t-4 border-brand-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-brand-green flex items-center justify-center border border-white/10">
                <span className="text-brand-gold font-bold text-xl font-serif">R</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-white tracking-tight leading-none">Raja Reddy</span>
                <span className="text-xs text-brand-gold uppercase tracking-widest font-medium">General Store</span>
              </div>
            </div>
            <p className="text-brand-beige/70 text-sm leading-relaxed max-w-xs">
              Your trusted neighborhood grocery store offering premium quality traditional provisions with modern doorstep delivery convenience.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-green hover:text-white transition-colors">
                <Globe className="w-5 h-5 text-brand-beige" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-green hover:text-white transition-colors">
                <Camera className="w-5 h-5 text-brand-beige" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-green hover:text-white transition-colors">
                <MessageCircle className="w-5 h-5 text-brand-beige" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-brand-gold">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Shop Categories', 'Today\'s Offers', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-brand-beige/80 hover:text-brand-gold transition-colors text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-green"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-brand-gold">Top Categories</h3>
            <ul className="space-y-4">
              {['Rice & Grains', 'Spices & Masalas', 'Oils & Ghee', 'Dry Fruits', 'Pooja Essentials'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-brand-beige/80 hover:text-brand-gold transition-colors text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-green"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-brand-gold">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                <span className="text-brand-beige/80 text-sm">
                  123 Market Road, Main Bazaar, Hyderabad, Telangana 500001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-green shrink-0" />
                <span className="text-brand-beige/80 text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-green shrink-0" />
                <span className="text-brand-beige/80 text-sm">support@rajareddystore.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-brand-beige/50 text-sm">
            &copy; {new Date().getFullYear()} Raja Reddy General Store. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-brand-beige/50">
            <a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-brand-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
