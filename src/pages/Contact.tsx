import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-heritage-bg-primary">
      {/* Header Section */}
      <section className="bg-heritage-bg-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-text-primary-title mb-4 font-playfair">Contact Amritha Heritage</h1>
            <p className="text-xl text-text-description max-w-3xl mx-auto font-cormorant">
              Get in touch with us to experience the timeless elegance of colonial Thiruvithamkoor
              in the heart of Thiruvananthapuram.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-text-primary-title mb-6 font-playfair">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-description mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-border-soft rounded-md focus:outline-none focus:ring-2 focus:ring-border-accent focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-description mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-border-soft rounded-md focus:outline-none focus:ring-2 focus:ring-border-accent focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-text-description mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-border-soft rounded-md focus:outline-none focus:ring-2 focus:ring-border-accent focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="reservation">Room Reservation</option>
                    <option value="dining">Dining Reservation</option>
                    <option value="events">Events & Banquets</option>
                    <option value="heritage">Heritage Tours</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-description mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-3 py-2 border border-border-soft rounded-md focus:outline-none focus:ring-2 focus:ring-border-accent focus:border-transparent"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-button-primary-bg text-button-primary-text py-3 px-6 rounded-md font-semibold hover:bg-button-primary-hover-bg transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-text-primary-title mb-6 font-playfair">Get in Touch</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-heritage-bg-tertiary rounded-lg flex items-center justify-center mr-4 mt-1">
                      <svg className="w-4 h-4 text-button-accent-bg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary-title">Email</h3>
                      <p className="text-text-description">reservations@amrithaheritage.com</p>
                      <p className="text-text-description">info@amrithaheritage.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-heritage-bg-tertiary rounded-lg flex items-center justify-center mr-4 mt-1">
                      <svg className="w-4 h-4 text-button-accent-bg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary-title">Phone</h3>
                      <p className="text-text-description">+91 (471) 234-5678</p>
                      <p className="text-text-description">+91 (471) 234-5679</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-heritage-bg-tertiary rounded-lg flex items-center justify-center mr-4 mt-1">
                      <svg className="w-4 h-4 text-button-accent-bg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary-title">Address</h3>
                      <p className="text-text-description">Amritha Heritage</p>
                      <p className="text-text-description">Thycaud, Thiruvananthapuram</p>
                      <p className="text-text-description">Kerala 695014, India</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-text-primary-title mb-6 font-playfair">Hotel Hours</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-text-description">Check-in</span>
                    <span className="font-semibold text-text-primary-title">2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-description">Check-out</span>
                    <span className="font-semibold text-text-primary-title">11:00 AM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-description">Kohinoor Restaurant</span>
                    <span className="font-semibold text-text-primary-title">7:00 AM - 11:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
