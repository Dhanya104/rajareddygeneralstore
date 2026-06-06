import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Lakshmi Narayana',
      role: 'Regular Customer',
      image: 'https://i.pravatar.cc/150?img=47',
      text: 'The quality of dal and spices is exactly like how we used to get in the old days. Very pure and aromatic. Delivery is always on time.',
      rating: 5
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Local Resident',
      image: 'https://i.pravatar.cc/150?img=43',
      text: 'I have been buying from Raja Reddy Store for 5 years. Now with the delivery app, it is so easy to order monthly provisions. Highly recommended!',
      rating: 5
    },
    {
      id: 3,
      name: 'Ramesh Babu',
      role: 'Home Chef',
      image: 'https://i.pravatar.cc/150?img=11',
      text: 'Best place for premium rice varieties and authentic pickles. The packaging is very neat and hygienic.',
      rating: 4
    }
  ];

  return (
    <div className="py-24 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v20h2v2H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z' fill='%232E4D3B' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">What Our Family Says</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-brand-cream rounded-3xl p-8 relative border border-brand-beige"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-brand-gold/20" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < testimonial.rating ? 'fill-brand-gold text-brand-gold' : 'fill-gray-200 text-gray-200'}`} 
                  />
                ))}
              </div>
              
              <p className="text-brand-brown mb-8 relative z-10 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full border-2 border-white shadow-sm"
                />
                <div>
                  <h4 className="font-bold text-brand-dark">{testimonial.name}</h4>
                  <p className="text-sm text-brand-green">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
