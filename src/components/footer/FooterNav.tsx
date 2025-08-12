const navLinks = [
  'Home', 'Heritage', 'Rooms', 'Dining', 'Contact', 'About', 'Gallery', 'Kohinoor', 'Events', 'Location'
];

const FooterNav = () => {
  return (
    <nav className="flex flex-wrap justify-center items-center gap-8 lg:gap-10 text-base lg:text-lg">
      {navLinks.map((link) => (
        <a
          key={link}
          href="#"
          className={`transition-colors duration-300 hover:text-button-accent-bg ${
            link === 'Rooms' ? 'text-button-accent-bg font-medium' : 'text-heritage-bg-secondary'
          }`}
          style={{ fontFamily: 'Work Sans, sans-serif' }}
        >
          {link}
        </a>
      ))}
    </nav>
  );
};

export default FooterNav;
