import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-heritage-green text-heritage-ivory/80 font-sans-body">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="lg:col-span-1">
            <h3 className="font-serif-heading text-xl text-heritage-ivory mb-4">Amritha Heritage</h3>
            <p className="text-sm leading-relaxed">
              Experience the timeless elegance of colonial Thiruvithamkoor in the heart of Thiruvananthapuram. A living legacy since the 1950s.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif-subheading text-lg text-heritage-ivory mb-4">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="hover:text-heritage-ochre transition-colors">About Us</a></li>
              <li><a href="/rooms" className="hover:text-heritage-ochre transition-colors">Rooms</a></li>
              <li><a href="/dining" className="hover:text-heritage-ochre transition-colors">Dining</a></li>
              <li><a href="/events" className="hover:text-heritage-ochre transition-colors">Events</a></li>
              <li><a href="/gallery" className="hover:text-heritage-ochre transition-colors">Gallery</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif-subheading text-lg text-heritage-ivory mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin size={16} className="mr-3 mt-1 flex-shrink-0" />
                <span>Thycaud, Thiruvananthapuram, Kerala 695014</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-3" />
                <a href="mailto:reservations@amrithaheritage.com" className="hover:text-heritage-ochre transition-colors">reservations@amrithaheritage.com</a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-3" />
                <a href="tel:+914712345678" className="hover:text-heritage-ochre transition-colors">+91 (471) 234-5678</a>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="md:col-span-3 lg:col-span-1">
            <h3 className="font-serif-subheading text-lg text-heritage-ivory mb-4">Get Heritage in Your Inbox</h3>
            <form>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 bg-heritage-ivory/10 border border-heritage-ochre/50 rounded-l-md text-heritage-ivory placeholder-heritage-ivory/60 focus:outline-none focus:ring-2 focus:ring-heritage-gold"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-heritage-ochre text-heritage-green font-semibold rounded-r-md hover:bg-opacity-90 transition-colors"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-heritage-ochre/20 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} Amritha Heritage. All Rights Reserved.</p>
          <p className="mt-4 sm:mt-0">
            Crafted with care by <a href="#" className="font-semibold text-heritage-ochre hover:underline">Jules</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
