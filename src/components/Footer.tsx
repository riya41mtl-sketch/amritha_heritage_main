import FooterBrand from './footer/FooterBrand';
import FooterNav from './footer/FooterNav';
import FooterSocials from './footer/FooterSocials';
import FooterLinkColumn from './footer/FooterLinkColumn';
import FooterNewsletter from './footer/FooterNewsletter';
import FooterAwards from './footer/FooterAwards';
import FooterLegal from './footer/FooterLegal';

const heritageExperienceLinks = [
  { href: "#", text: "About Amritha Heritage" },
  { href: "#", text: "Heritage Rooms" },
  { href: "#", text: "Kohinoor Restaurant" },
  { href: "#", text: "Colonial Architecture" },
  { href: "#", text: "Garden Dining" },
  { href: "#", text: "Heritage Tours" },
  { href: "#", text: "Events & Banquets" },
  { href: "#", text: "Film Industry History" },
];

const contactInfoContent = (
  <div className="space-y-4">
    <div className="space-y-2">
      <p className="text-sm text-heritage-bg-secondary">Address</p>
      <p className="text-sm text-heritage-bg-primary leading-relaxed">
        Amritha Heritage<br />
        Thycaud, Thiruvananthapuram<br />
        Kerala 695014, India
      </p>
    </div>
    <div className="space-y-2">
      <p className="text-sm text-heritage-bg-secondary">Email</p>
      <a
        href="mailto:reservations@amrithaheritage.com"
        className="text-sm text-heritage-bg-primary hover:text-button-accent-bg transition-colors duration-300"
      >
        reservations@amrithaheritage.com
      </a>
    </div>
    <div className="space-y-2">
      <p className="text-sm text-heritage-bg-secondary">Emergency</p>
      <p className="text-sm text-heritage-bg-primary">+91 (471) 234 5679</p>
    </div>
  </div>
);

const heritageServicesContent = (
    <div className="space-y-3">
    {[
      '24/7 Heritage Concierge', 'Valet Parking', 'Room Service', 'Laundry Service',
      'Heritage Tours', 'Garden Dining', 'Kohinoor Restaurant', 'Colonial Experience',
      'Airport Transfer', 'Cultural Events'
    ].map((service, index) => (
      <div key={index} className="flex items-center space-x-2">
        <span className="text-button-accent-bg text-sm">•</span>
        <span className="text-sm text-heritage-bg-secondary">{service}</span>
      </div>
    ))}
    </div>
);


function Footer() {
  return (
    <footer className="bg-text-primary-title text-heritage-bg-primary py-20">
      <div className="w-[70%] mx-auto px-8 sm:px-12 lg:px-16">
        <div className="space-y-16">
          <div className="text-center space-y-8">
            <FooterBrand />
            <FooterNav />
            <FooterSocials />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pt-8 border-t border-heritage-bg-secondary/30">
            <FooterLinkColumn title="Heritage Experience" links={heritageExperienceLinks} />
            <FooterLinkColumn title="Contact Info" content={contactInfoContent} />
            <FooterLinkColumn title="Heritage Services" content={heritageServicesContent} />
            <FooterNewsletter />
          </div>

          <FooterAwards />
          <FooterLegal />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
