const awards = [
  '⭐ Heritage Hotel Award', '🏆 Colonial Architecture', '🌟 Kohinoor Restaurant',
  '💎 Cultural Landmark', '🌿 Historical Preservation'
];

const FooterAwards = () => {
  return (
    <div className="text-center space-y-6 pt-8 border-t border-heritage-bg-secondary/30">
      <h3 className="text-2xl font-light font-playfair">
        Heritage Recognition
      </h3>
      <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
        {awards.map((award, index) => (
          <span
            key={index}
            className="text-sm text-heritage-bg-secondary tracking-[0.1em]"
            style={{ fontFamily: 'Work Sans, sans-serif' }}
          >
            {award}
          </span>
        ))}
      </div>
    </div>
  );
};

export default FooterAwards;
