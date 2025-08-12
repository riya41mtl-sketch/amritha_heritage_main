import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Music, Mic } from 'lucide-react';

const experiences = [
  {
    icon: <Calendar className="w-10 h-10 text-heritage-terracotta" />,
    title: 'Weddings & Events',
    description: 'Host your regal event in a setting that breathes history and elegance. Perfect for weddings, corporate gatherings, and family celebrations.'
  },
  {
    icon: <Music className="w-10 h-10 text-heritage-terracotta" />,
    title: 'Musical Evenings',
    description: 'Enjoy classical and contemporary musical performances under the stars in our serene garden environment.'
  },
  {
    icon: <Mic className="w-10 h-10 text-heritage-terracotta" />,
    title: 'Heritage Talks',
    description: 'Engage with historians and cultural experts in our series of talks about the rich heritage of Travancore.'
  }
];

const Experiences: React.FC = () => {
  return (
    <section className="py-20 bg-heritage-sandstone">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif-heading text-4xl md:text-6xl text-heritage-green">Unforgettable Experiences</h2>
          <p className="font-sans-body text-lg mt-4 max-w-3xl mx-auto text-heritage-green/80">
            At Amritha, we offer more than just a stay. We offer experiences that connect you with the culture and history of our land.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="p-8 text-center bg-heritage-ivory rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="flex justify-center mb-4">
                {exp.icon}
              </div>
              <h3 className="font-serif-subheading text-2xl text-heritage-green mb-3">{exp.title}</h3>
              <p className="font-sans-body text-heritage-green/90">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <button className="px-10 py-4 bg-heritage-terracotta text-heritage-ivory font-semibold rounded-md hover:bg-opacity-90 transition-colors duration-300 font-sans-body text-lg">
            Host Your Event at Amritha
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Experiences;
