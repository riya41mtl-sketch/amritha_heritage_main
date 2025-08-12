import React from 'react';
import { motion } from 'framer-motion';

const timelineEvents = [
  { year: '1900s', event: 'Essenden Bungalow is constructed, reflecting the colonial architecture of the era.' },
  { year: '1950s', event: 'The bungalow becomes part of the Amritha Hotel, beginning its transformation into a heritage landmark.' },
  { year: '1970s', event: 'Amritha becomes a virtual home for the Malayalam film world, with the Kohinoor Restaurant as a star attraction.' },
  { year: 'Today', event: 'The structure is a celebrated heritage hotel, offering a nostalgic journey through time.' },
];

const AboutLegacy: React.FC = () => {
  return (
    <section className="py-20 bg-heritage-ivory text-heritage-green">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif-heading text-4xl md:text-6xl">The Story of Amritha</h2>
          <p className="font-sans-body text-lg mt-4 max-w-3xl mx-auto text-heritage-green/80">
            From Essenden Bungalow to a celebrated heritage hotel, our story is etched in the heart of Thiruvananthapuram.
          </p>
        </motion.div>

        <div className="relative">
          {/* The timeline line */}
          <div className="absolute left-1/2 h-full w-0.5 bg-heritage-ochre/30" />

          <div className="space-y-16">
            {timelineEvents.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="p-6 bg-heritage-sandstone rounded-lg shadow-md">
                    <h3 className="font-serif-subheading text-2xl text-heritage-green mb-2">{item.year}</h3>
                    <p className="font-sans-body text-heritage-green/90">{item.event}</p>
                  </div>
                </div>
                <div className="w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutLegacy;
