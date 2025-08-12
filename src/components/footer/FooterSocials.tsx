const socialLinks = [
  { icon: 'f', platform: 'Facebook', href: '#' },
  { icon: 'in', platform: 'LinkedIn', href: '#' },
  { icon: '▶', platform: 'YouTube', href: '#' },
  { icon: '📸', platform: 'Instagram', href: '#' },
  { icon: '🐦', platform: 'Twitter', href: '#' }
];

const FooterSocials = () => {
  return (
    <div className="flex justify-center items-center space-x-6">
      {socialLinks.map((social) => (
        <a
          key={social.platform}
          href={social.href}
          className="w-12 h-12 rounded-full border border-heritage-bg-secondary flex items-center justify-center text-heritage-bg-secondary hover:text-button-accent-bg hover:border-button-accent-bg transition-all duration-300"
          title={social.platform}
          style={{ fontFamily: 'Work Sans, sans-serif' }}
        >
          <span className="text-base font-medium">{social.icon}</span>
        </a>
      ))}
    </div>
  );
};

export default FooterSocials;
