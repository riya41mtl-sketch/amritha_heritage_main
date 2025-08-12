import React from 'react';

const GalleryPage: React.FC = () => {
  return (
    <div className="bg-heritage-ivory py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="font-serif-heading text-5xl text-heritage-green mb-4">Virtual Tour</h1>
        <p className="font-sans-body text-lg text-heritage-green/80 max-w-3xl mx-auto">
          A curated visual journey through the halls and gardens of Amritha Heritage.
        </p>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
          {/* Placeholder for gallery images */}
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-64 bg-heritage-sandstone rounded-lg shadow-md flex items-center justify-center">
              <p className="font-serif-subheading text-xl text-heritage-green/50">Image {i + 1}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
