import React from 'react';
import { motion } from 'framer-motion';

const Categories = () => {
  const categories = [
    { name: 'Rice & Grains', icon: '🌾', color: 'bg-amber-50' },
    { name: 'Spices', icon: '🌶️', color: 'bg-orange-50' },
    { name: 'Oils & Ghee', icon: '🫙', color: 'bg-yellow-50' },
    { name: 'Snacks', icon: '🍪', color: 'bg-stone-50' },
    { name: 'Dry Fruits', icon: '🥜', color: 'bg-rose-50' },
    { name: 'Pickles', icon: '🍯', color: 'bg-red-50' },
    { name: 'Bakery', icon: '🍞', color: 'bg-yellow-50' },
    { name: 'Pooja Essentials', icon: '🪔', color: 'bg-orange-50' },
    { name: 'Household Items', icon: '🧹', color: 'bg-teal-50' },
  ];

  return (
    <div id="categories" className="py-20 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Shop By Category</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full mb-6"></div>
          <p className="text-brand-brown max-w-2xl mx-auto">
            Browse through our wide selection of premium quality traditional Indian groceries and household essentials.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8 justify-center">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="cursor-pointer group flex flex-col items-center p-6 bg-white rounded-3xl shadow-sm hover:shadow-md border border-brand-beige transition-all"
            >
              <div className={`w-20 h-20 rounded-full flex items-center justify-center text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 ${category.color} border border-brand-beige/50 shadow-inner`}>
                {category.icon}
              </div>
              <h3 className="font-medium text-brand-dark text-center group-hover:text-brand-green transition-colors">
                {category.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
