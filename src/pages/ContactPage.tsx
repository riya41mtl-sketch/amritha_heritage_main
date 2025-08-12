import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    checkIn: '',
    checkOut: '',
    guests: '1',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    alert('Thank you for your booking request! We will be in touch shortly to confirm.');
  };

  return (
    <div className="bg-heritage-ivory">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="font-serif-heading text-5xl md:text-7xl text-heritage-green">Contact & Bookings</h1>
          <p className="font-sans-body text-lg mt-4 max-w-3xl mx-auto text-heritage-green/80">
            We look forward to welcoming you to Amritha Heritage. Please get in touch with us for bookings or any inquiries.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3 bg-heritage-sandstone p-8 rounded-lg shadow-lg">
            <h2 className="font-serif-subheading text-3xl text-heritage-green mb-6">Make a Reservation</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="font-sans-body text-sm font-semibold text-heritage-green/90 mb-2 block">Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full p-3 bg-heritage-ivory border border-heritage-ochre/50 rounded-md focus:outline-none focus:ring-2 focus:ring-heritage-gold" />
                </div>
                <div>
                  <label htmlFor="email" className="font-sans-body text-sm font-semibold text-heritage-green/90 mb-2 block">Email</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full p-3 bg-heritage-ivory border border-heritage-ochre/50 rounded-md focus:outline-none focus:ring-2 focus:ring-heritage-gold" />
                </div>
              </div>
              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="checkIn" className="font-sans-body text-sm font-semibold text-heritage-green/90 mb-2 block">Check-in</label>
                  <input type="date" id="checkIn" name="checkIn" value={formData.checkIn} onChange={handleChange} required className="w-full p-3 bg-heritage-ivory border border-heritage-ochre/50 rounded-md focus:outline-none focus:ring-2 focus:ring-heritage-gold" />
                </div>
                <div>
                  <label htmlFor="checkOut" className="font-sans-body text-sm font-semibold text-heritage-green/90 mb-2 block">Check-out</label>
                  <input type="date" id="checkOut" name="checkOut" value={formData.checkOut} onChange={handleChange} required className="w-full p-3 bg-heritage-ivory border border-heritage-ochre/50 rounded-md focus:outline-none focus:ring-2 focus:ring-heritage-gold" />
                </div>
                <div>
                  <label htmlFor="guests" className="font-sans-body text-sm font-semibold text-heritage-green/90 mb-2 block">Guests</label>
                  <input type="number" id="guests" name="guests" min="1" value={formData.guests} onChange={handleChange} required className="w-full p-3 bg-heritage-ivory border border-heritage-ochre/50 rounded-md focus:outline-none focus:ring-2 focus:ring-heritage-gold" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="font-sans-body text-sm font-semibold text-heritage-green/90 mb-2 block">Message (Optional)</label>
                <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} className="w-full p-3 bg-heritage-ivory border border-heritage-ochre/50 rounded-md focus:outline-none focus:ring-2 focus:ring-heritage-gold resize-none"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full py-4 bg-heritage-terracotta text-heritage-ivory font-bold rounded-md hover:bg-opacity-90 transition-colors duration-300 text-lg">
                  Request Booking
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-heritage-sandstone p-8 rounded-lg shadow-lg">
              <h3 className="font-serif-subheading text-2xl text-heritage-green mb-4">Contact Details</h3>
              <ul className="space-y-4 text-heritage-green/90 font-sans-body">
                <li className="flex items-center"><MapPin size={18} className="mr-4 text-heritage-ochre" /><span>Thycaud, Thiruvananthapuram</span></li>
                <li className="flex items-center"><Mail size={18} className="mr-4 text-heritage-ochre" /><a href="mailto:reservations@amrithaheritage.com" className="hover:text-heritage-terracotta">reservations@amrithaheritage.com</a></li>
                <li className="flex items-center"><Phone size={18} className="mr-4 text-heritage-ochre" /><a href="tel:+914712345678" className="hover:text-heritage-terracotta">+91 (471) 234-5678</a></li>
              </ul>
            </div>
            <div className="h-80 bg-heritage-sandstone rounded-lg shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.4919!2d76.9555987!3d8.489801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bbb3cc8055af%3A0x529436fb75bb4d06!2sAmritha%20Heritage!5e0!3m2!1sen!2sin!4v1642000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Amritha Heritage Location"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
