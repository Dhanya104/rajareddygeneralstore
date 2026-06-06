import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-brand-beige overflow-hidden">
      {/* Subtle traditional pattern background overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238B5E34' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="pt-20 pb-24 md:pt-32 md:pb-36 flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1.5 px-4 rounded-full bg-brand-gold/20 text-brand-brown font-medium text-sm mb-6 border border-brand-gold/30">
                Premium Local Grocer Since 1995
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-brand-dark leading-tight">
                Fresh Groceries Delivered To <span className="text-brand-green">Your Doorstep</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-brand-brown max-w-lg leading-relaxed">
                Experience the warmth of a traditional Indian kirana store with modern convenience. Quality grains, spices, and household essentials.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-green-light text-white px-8 py-4 rounded-full font-medium transition-all shadow-lg shadow-brand-green/30 group">
                <ShoppingBag className="w-5 h-5" />
                <span>Order Now</span>
              </button>
              <button className="flex items-center justify-center gap-2 bg-white hover:bg-brand-cream text-brand-green border border-brand-green/20 px-8 py-4 rounded-full font-medium transition-all group">
                <span>Explore Categories</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-6 pt-6"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-beige bg-brand-cream overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Customer" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <p className="text-brand-dark font-bold">10,000+ Happy Families</p>
                <p className="text-brand-brown">Trusted locally in the community</p>
              </div>
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] md:aspect-[4/4]">
              <div className="absolute inset-0 bg-brand-green/10 mix-blend-multiply z-10" />
              <img 
                src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop" 
                alt="Traditional Indian Spices and Groceries" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 z-20 border border-brand-beige"
            >
              <div className="w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center text-brand-brown font-bold text-xl">
                ⚡
              </div>
              <div>
                <p className="text-xs text-brand-brown font-medium uppercase tracking-wider">Delivery</p>
                <p className="text-brand-dark font-bold">Under 60 Mins</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
