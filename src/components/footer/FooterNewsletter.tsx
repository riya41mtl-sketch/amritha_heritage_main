const FooterNewsletter = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-light mb-6 font-playfair">
        Stay Connected
      </h3>
      <p className="text-sm text-heritage-bg-secondary leading-relaxed font-cormorant">
        Subscribe to our newsletter for heritage insights, colonial stories, and exclusive offers.
      </p>
      <div className="space-y-3">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-3 bg-heritage-bg-primary/10 border border-heritage-bg-secondary/30 text-heritage-bg-primary placeholder-heritage-bg-secondary/60 focus:outline-none focus:border-button-accent-bg transition-colors duration-300"
          style={{ fontFamily: 'Work Sans, sans-serif' }}
        />
        <button className="w-full px-6 py-3 bg-button-accent-bg text-heritage-bg-primary hover:bg-button-accent-hover-bg transition-colors duration-300 text-sm tracking-[0.1em]">
          SUBSCRIBE
        </button>
      </div>
      <p className="text-xs text-heritage-bg-secondary/80">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );
};

export default FooterNewsletter;
