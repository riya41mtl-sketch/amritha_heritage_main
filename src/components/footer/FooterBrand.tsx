const FooterBrand = () => {
  return (
    <div className="text-center space-y-8">
      {/* Brand/Logo */}
      <div className="space-y-3">
        <div className="flex items-center justify-center space-x-3 mb-3">
          <span className="text-3xl text-button-accent-bg">*</span>
          <span className="text-4xl font-light tracking-wider font-playfair">
            AMRITHA HERITAGE
          </span>
        </div>
        <p className="text-base tracking-[0.2em] text-heritage-bg-secondary font-cormorant">
          THYCAUD, THIRUVANANTHAPURAM
        </p>
      </div>

      {/* Call to Action */}
      <div className="space-y-3">
        <h2 className="text-5xl lg:text-6xl font-light tracking-wide font-playfair">
          Book a Heritage Stay
        </h2>
        <p className="text-3xl lg:text-4xl font-light tracking-wider font-playfair">
          +91 (471) 234 5678
        </p>
        <p className="text-lg text-heritage-bg-secondary max-w-2xl mx-auto leading-relaxed font-cormorant">
          Experience the timeless elegance of colonial Thiruvithamkoor in the heart of Thiruvananthapuram.
        </p>
      </div>
    </div>
  );
};

export default FooterBrand;
