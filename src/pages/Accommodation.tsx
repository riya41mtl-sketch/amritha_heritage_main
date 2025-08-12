import React from "react";
import { motion } from 'framer-motion';
import { BedDouble, Bath } from 'lucide-react';

interface Room {
  id: number;
  type: string;
  title: string;
  price: string;
  size: string;
  guests: string;
  description: string;
  image: string;
  floorPlanImage: string;
  furnitureHighlights: string[];
}

const AccommodationPage: React.FC = () => {
  const rooms: Room[] = [
    {
      id: 1,
      type: "HERITAGE ROOMS",
      title: "Colonial Suite",
      price: "FROM ₹8,500",
      size: "35 SQM / 376 SQFT",
      guests: "UP TO 2 ADULTS",
      description: "Elegant suite featuring heritage furniture and colonial architecture, offering a glimpse into Thiruvithamkoor's regal past with modern comfort.",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
      floorPlanImage: "/floorplan-placeholder.svg",
      furnitureHighlights: ["Four-poster bed", "Antique writing desk", "Velvet armchair"],
    },
    {
      id: 2,
      type: "HERITAGE ROOMS",
      title: "Essenden Room",
      price: "FROM ₹10,000",
      size: "45 SQM / 484 SQFT",
      guests: "UP TO 2 ADULTS, 1 CHILD",
      description: "Named after the original bungalow, this spacious room features individual verandas and authentic colonial design elements with garden views.",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop",
      floorPlanImage: "/floorplan-placeholder.svg",
      furnitureHighlights: ["Private veranda seating", "Carved teak wood wardrobe", "Original tile flooring"],
    },
    // ... add other rooms here
  ];

  return (
    <div className="bg-heritage-ivory">
      <motion.div
        className="text-center py-20 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="font-serif-heading text-5xl md:text-7xl text-heritage-green">Our Rooms</h1>
        <p className="font-sans-body text-lg mt-4 max-w-3xl mx-auto text-heritage-green/80">
          Five unique heritage rooms, each telling a story of colonial elegance and modern comfort.
        </p>
      </motion.div>

      <div className="space-y-20 pb-20">
        {rooms.map((room, index) => (
          <motion.div
            key={room.id}
            className="container mx-auto px-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className={`h-[500px] rounded-lg overflow-hidden shadow-lg ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <img src={room.image} alt={room.title} className="w-full h-full object-cover" />
              </div>
              <div className={`p-8 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <span className="font-sans-body text-sm tracking-widest text-heritage-terracotta uppercase">{room.type}</span>
                <h2 className="font-serif-heading text-4xl text-heritage-green my-4">{room.title}</h2>
                <p className="font-sans-body text-heritage-green/90 leading-relaxed mb-6">{room.description}</p>
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-heritage-green/80 mb-6">
                  <span className="flex items-center"><BedDouble size={18} className="mr-2 text-heritage-ochre" /> {room.guests}</span>
                  <span className="flex items-center"><Bath size={18} className="mr-2 text-heritage-ochre" /> {room.size}</span>
                </div>
                <div>
                  <h4 className="font-serif-subheading text-xl text-heritage-green mb-3">Heritage Highlights:</h4>
                  <ul className="list-disc list-inside space-y-1 font-sans-body text-heritage-green/80">
                    {room.furnitureHighlights.map(highlight => <li key={highlight}>{highlight}</li>)}
                  </ul>
                </div>
                <div className="mt-8 flex items-center justify-between bg-heritage-sandstone p-4 rounded-lg">
                  <div>
                    <span className="font-sans-body text-lg text-heritage-green/90">Starting from</span>
                    <p className="font-serif-heading text-2xl text-heritage-green">{room.price}</p>
                  </div>
                  <button className="px-6 py-3 bg-heritage-terracotta text-heritage-ivory font-semibold rounded-md hover:bg-opacity-90 transition-colors duration-300">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AccommodationPage;
