import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "A truly magical experience. The heritage and hospitality are unmatched. It felt like stepping back in time.",
    author: "— Anjali & Rohan, Mumbai"
  },
  {
    quote: "The food at Kohinoor was just as I remembered from my childhood. A nostalgic and delicious journey.",
    author: "— Mr. Menon, Film Director"
  },
  {
    quote: "We hosted our wedding here and it was a dream come true. The setting is absolutely regal.",
    author: "— Priya & David, London"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-heritage-ivory">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif-heading text-4xl md:text-6xl text-heritage-green">Words from Our Guests</h2>
        </motion.div>

        <div className="space-y-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <p className="font-serif-subheading text-2xl md:text-3xl italic text-heritage-green/90 mb-4">
                "{testimonial.quote}"
              </p>
              <p className="font-sans-body text-heritage-maroon font-semibold">
                {testimonial.author}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
