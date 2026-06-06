import React from 'react';
import { Clock, Truck, HeadphonesIcon, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const DeliveryInfo = () => {
  return (
    <div className="py-12 bg-brand-beige border-y border-brand-brown/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-green/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-brand-brown/20">
          
          <motion.div 
            whileHover={{ y: -5 }}
            className="flex items-center gap-4 px-4 py-2"
          >
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0 text-brand-green">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-brand-dark">Doorstep Delivery</h4>
              <p className="text-sm text-brand-brown">Safe and secure packaging</p>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="flex items-center gap-4 px-4 py-2 pt-6 md:pt-2"
          >
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0 text-brand-green">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-brand-dark">Same Day Delivery</h4>
              <p className="text-sm text-brand-brown">For orders before 2 PM</p>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="flex items-center gap-4 px-4 py-2 pt-6 md:pt-2"
          >
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0 text-brand-green">
              <HeadphonesIcon className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-brand-dark">Customer Support</h4>
              <p className="text-sm text-brand-brown">8 AM to 9 PM daily</p>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="flex items-center gap-4 px-4 py-2 pt-6 md:pt-2"
          >
            <div className="w-12 h-12 rounded-full bg-brand-green flex items-center justify-center shadow-md shadow-brand-green/30 shrink-0 text-white">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-brand-dark">Order via Call</h4>
              <p className="text-sm font-bold text-brand-green">+91 98765 43210</p>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default DeliveryInfo;
