const legalLinks = ['INSTRUCTIONS', 'LICENSES', 'CHANGELOG', 'PRIVACY POLICY', 'TERMS OF SERVICE'];
const credits = ['POWERED BY WEBFLOW', 'WEBFLOW TEMPLATES', '© 2024 AMRITHA HERITAGE'];

const FooterLegal = () => {
  return (
    <div className="space-y-4 pt-8 border-t border-heritage-bg-secondary/30">
      <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-8 text-xs lg:text-sm">
        {legalLinks.map((link) => (
          <a
            key={link}
            href="#"
            className="text-heritage-bg-secondary hover:text-button-accent-bg transition-colors duration-300 tracking-[0.1em]"
            style={{ fontFamily: 'Work Sans, sans-serif' }}
          >
            {link}
          </a>
        ))}
      </div>
      <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-8 text-xs lg:text-sm">
        {credits.map((text) => (
          <span
            key={text}
            className="text-heritage-bg-secondary tracking-[0.1em]"
            style={{ fontFamily: 'Work Sans, sans-serif' }}
          >
            {text}
          </span>
        ))}
      </div>
      <p
        className="text-xs lg:text-sm text-heritage-bg-secondary tracking-[0.1em] text-center"
        style={{ fontFamily: 'Work Sans, sans-serif' }}
      >
        MADE BY METRIK
      </p>
    </div>
  );
};

export default FooterLegal;
