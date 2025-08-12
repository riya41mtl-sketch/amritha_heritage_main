import React from 'react';

const BlogPage: React.FC = () => {
  return (
    <div className="bg-heritage-ivory py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="font-serif-heading text-5xl text-heritage-green mb-4">Heritage Journal</h1>
        <p className="font-sans-body text-lg text-heritage-green/80 max-w-3xl mx-auto">
          Stories of Travancore culture, architecture, and the rich history of Amritha.
        </p>
        <div className="mt-12 text-left max-w-4xl mx-auto">
          {/* Placeholder for blog posts */}
          {[...Array(3)].map((_, i) => (
            <div key={i} className="mb-12 pb-8 border-b border-heritage-ochre/30">
              <h2 className="font-serif-subheading text-3xl text-heritage-green mb-2">Blog Post Title {i + 1}</h2>
              <p className="font-sans-body text-sm text-heritage-green/70 mb-4">October 26, 2023</p>
              <p className="font-sans-body text-heritage-green/90 leading-relaxed">
                This is a placeholder for a blog post summary. The full article would be available on a separate page. We would discuss topics like the restoration process, the history of the film industry's connection to the hotel, and deep dives into local culture.
              </p>
              <a href="#" className="text-heritage-terracotta font-semibold mt-4 inline-block hover:underline">Read More</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
