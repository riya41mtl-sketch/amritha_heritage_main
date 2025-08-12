import React from 'react';
import { motion } from 'framer-motion';
import { ChefHat, Film, Leaf } from 'lucide-react';

const menuItems = [
  { name: 'Travancore Royal Thali', description: 'A regal platter showcasing the finest flavours of the kingdom.' },
  { name: 'Colonial Roast Chicken', description: 'Slow-roasted with a blend of European herbs and local spices.' },
  { name: 'Prawn Moilee', description: 'A creamy, coconut-based curry with Portuguese influences.' },
];

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop', alt: 'Elegant outdoor dining setup for an event' },
  { src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop', alt: 'A view of the restaurant at night' },
  { src: 'https://images.unsplash.com/photo-1504754524776-8f4f37790774?w=600&h=400&fit=crop', alt: 'A close up of a beautiful dish' },
];

const DiningSection: React.FC = () => {
  return (
    <section className="bg-heritage-ivory py-20">
      <div className="container mx-auto px-6">
        {/* Main Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif-heading text-4xl md:text-6xl text-heritage-green">Dining at Kohinoor</h2>
          <p className="font-sans-body text-lg mt-4 max-w-3xl mx-auto text-heritage-green/80">
            A legendary name revived. Experience a culinary journey where heritage flavors meet modern elegance.
          </p>
        </motion.div>

        {/* Two-part Layout */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
          {/* The Legend of Kohinoor */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="p-8 bg-heritage-sandstone rounded-lg shadow-md">
              <Film className="w-12 h-12 text-heritage-maroon mb-4" />
              <h3 className="font-serif-subheading text-3xl text-heritage-maroon mb-4">The Legend of Kohinoor</h3>
              <p className="font-sans-body text-heritage-green/90 leading-relaxed">
                In the 1970s, the Kohinoor Restaurant at Amritha was a star attraction, a virtual home for the Malayalam film world. We bring back the same magic, blending timeless recipes with stories from a golden era.
              </p>
            </div>
          </motion.div>
          {/* The Revival */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="p-8">
              <ChefHat className="w-12 h-12 text-heritage-terracotta mb-4" />
              <h3 className="font-serif-subheading text-3xl text-heritage-terracotta mb-4">The Revival</h3>
              <p className="font-sans-body text-heritage-green/90 leading-relaxed mb-6">
                Our chefs have revived the classic menu, offering a perfect blend of European and Indian cuisines. Each dish is a tribute to our rich culinary heritage.
              </p>
              <h4 className="font-serif-subheading text-xl text-heritage-green mb-3">Menu Highlights:</h4>
              <ul className="space-y-2">
                {menuItems.map(item => (
                  <li key={item.name} className="font-sans-body">
                    <strong className="text-heritage-green/90">{item.name}:</strong>
                    <span className="text-heritage-green/80"> {item.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Dining on the Lawn Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Leaf className="w-12 h-12 text-heritage-green mx-auto mb-4" />
          <h3 className="font-serif-heading text-3xl text-heritage-green mb-4">Dining on the Lawn</h3>
          <p className="font-sans-body text-lg mt-4 max-w-3xl mx-auto text-heritage-green/80 mb-8">
            Amritha Heritage brings back the first-ever 'dining on the lawn' experience in the city, perfect for banquets and special celebrations under the open sky.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {galleryImages.map((img, index) => (
              <motion.div
                key={index}
                className="overflow-hidden rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <img src={img.src} alt={img.alt} className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DiningSection;
