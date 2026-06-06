import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus, ShoppingCart, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';

const FeaturedProducts = () => {
  // Using traditional grocery items
  const products = [
    {
      id: 1,
      name: 'Premium Basmati Rice',
      price: '₹250',
      weight: '1 kg',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 2,
      name: 'Organic Turmeric Powder',
      price: '₹85',
      weight: '250 g',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1615486171448-4fbab884bbde?q=80&w=1974&auto=format&fit=crop'
    },
    {
      id: 3,
      name: 'Pure Desi Ghee',
      price: '₹590',
      weight: '1 L',
      rating: 5.0,
      image: 'https://plus.unsplash.com/premium_photo-1671379040902-86ee81112613?q=80&w=1974&auto=format&fit=crop'
    },
    {
      id: 4,
      name: 'Toor Dal (Premium)',
      price: '₹140',
      weight: '1 kg',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1515543904379-3d757afe72e3?q=80&w=2012&auto=format&fit=crop'
    },
    {
      id: 5,
      name: 'Mixed Dry Fruits',
      price: '₹850',
      weight: '500 g',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1596591606975-97ee5cef3a1e?q=80&w=2096&auto=format&fit=crop'
    },
    {
      id: 6,
      name: 'Mango Pickle (Homemade Style)',
      price: '₹120',
      weight: '300 g',
      rating: 4.8,
      image: 'https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?q=80&w=1974&auto=format&fit=crop'
    },
    {
      id: 7,
      name: 'Whole Cashews',
      price: '₹420',
      weight: '500 g',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1599579084880-975da6043fc4?q=80&w=1935&auto=format&fit=crop'
    },
    {
      id: 8,
      name: 'Garam Masala Blend',
      price: '₹110',
      weight: '100 g',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Featured Essentials</h2>
            <div className="w-24 h-1 bg-brand-gold rounded-full mb-4 md:mb-0"></div>
          </div>
          <button className="text-brand-green font-medium hover:text-brand-green-light transition-colors self-start md:self-auto">
            View All Products &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({ product, index }) => {
  const { getProductQuantity, addToCart, updateQuantity } = useCart();
  const quantity = getProductQuantity(product.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-brand-cream rounded-3xl overflow-hidden border border-brand-beige group hover:shadow-xl hover:border-brand-green/20 transition-all duration-300 flex flex-col h-full"
    >
      <div className="relative aspect-square overflow-hidden bg-white">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-bold text-brand-dark shadow-sm">
          {product.weight}
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center gap-1 mb-2">
          <Star className="w-4 h-4 fill-brand-gold text-brand-gold" />
          <span className="text-sm font-medium text-brand-dark">{product.rating}</span>
        </div>
        
        <h3 className="font-bold text-lg text-brand-dark mb-1 flex-grow">{product.name}</h3>
        
        <div className="flex items-center justify-between mt-4 mb-5">
          <span className="text-xl font-bold text-brand-green">{product.price}</span>
        </div>

        {quantity === 0 ? (
          <button 
            onClick={() => addToCart(product)}
            className="w-full flex items-center justify-center gap-2 bg-white border border-brand-green text-brand-green hover:bg-brand-green hover:text-white py-2.5 rounded-full font-medium transition-colors"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Add to Cart</span>
          </button>
        ) : (
          <div className="w-full flex items-center justify-between bg-brand-green text-white py-1.5 px-1.5 rounded-full font-medium">
            <button 
              onClick={() => updateQuantity(product.id, quantity - 1)}
              className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span>{quantity}</span>
            <button 
              onClick={() => updateQuantity(product.id, quantity + 1)}
              className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default FeaturedProducts;
