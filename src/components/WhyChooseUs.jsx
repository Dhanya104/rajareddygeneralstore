import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Leaf, ThumbsUp } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: 'Trusted Local Store',
      description: 'Serving the community for over 25 years with unwavering trust and reliability.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Fast Delivery',
      description: 'Quick neighborhood delivery ensuring your kitchen never runs out of essentials.'
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: 'Quality Products',
      description: 'Handpicked grains, pure spices, and premium brands you know and love.'
    },
    {
      icon: <ThumbsUp className="w-8 h-8" />,
      title: 'Easy Ordering',
      description: 'Simple app-like experience for all ages to order groceries effortlessly.'
    }
  ];

  return (
    <div className="py-24 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Why Raja Reddy Store?</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full mb-6"></div>
          <p className="text-brand-brown max-w-2xl mx-auto">
            We combine the personal touch of your favorite local kirana store with the convenience of modern online shopping.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-brand-beige hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-beige flex items-center justify-center text-brand-green mb-6 group-hover:bg-brand-green group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">{feature.title}</h3>
              <p className="text-brand-brown leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
