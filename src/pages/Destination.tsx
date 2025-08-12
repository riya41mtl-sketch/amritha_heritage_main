import React from 'react';

const DestinationPage: React.FC = () => {
  return (
    <div className="bg-heritage-ivory py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="font-serif-heading text-5xl text-heritage-green mb-4">Explore Thiruvananthapuram</h1>
        <p className="font-sans-body text-lg text-heritage-green/80 max-w-3xl mx-auto">
          From our doorstep, the rich history and vibrant culture of Kerala's capital are yours to discover. Here are a few highlights.
        </p>
        <div className="mt-12 h-96 bg-heritage-sandstone rounded-lg shadow-md flex items-center justify-center">
          <p className="font-serif-subheading text-2xl text-heritage-green/50">Interactive Map Coming Soon</p>
        </div>
      </div>
    </div>
  );
};

export default DestinationPage;
