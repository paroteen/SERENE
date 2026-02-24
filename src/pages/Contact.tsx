import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import PageHero from '../components/PageHero';

const ContactPage = () => {
  return (
    <div className="bg-ivory">
      <PageHero 
        title="Begin Your <br /> Consultation"
        subtitle="Inquiry"
        description="We invite you to experience the Serene Homes difference. Contact our concierge team in Kigali to discuss your architectural vision."
        imageSeed="kigali-office"
      />

      {/* Contact Form & Info */}
      <section className="py-24 md:py-40">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-serif mb-12 text-charcoal">Private Inquiry</h2>
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-charcoal/40">Full Name</label>
                    <input type="text" className="w-full bg-transparent border-b border-charcoal/10 py-4 focus:outline-none focus:border-gold-muted transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-charcoal/40">Email Address</label>
                    <input type="email" className="w-full bg-transparent border-b border-charcoal/10 py-4 focus:outline-none focus:border-gold-muted transition-colors" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-charcoal/40">Service of Interest</label>
                  <select className="w-full bg-transparent border-b border-charcoal/10 py-4 focus:outline-none focus:border-gold-muted transition-colors appearance-none">
                    <option>Architectural Construction</option>
                    <option>Premium Finishing</option>
                    <option>Interior Design</option>
                    <option>Landscape Architecture</option>
                    <option>Executive Leasing</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-charcoal/40">Message</label>
                  <textarea rows={4} className="w-full bg-transparent border-b border-charcoal/10 py-4 focus:outline-none focus:border-gold-muted transition-colors resize-none" placeholder="Tell us about your vision..."></textarea>
                </div>
                <button className="flex items-center space-x-3 bg-charcoal text-white px-12 py-5 text-xs uppercase tracking-[0.3em] font-bold hover:bg-gold-muted transition-all">
                  <span>Send Inquiry</span>
                  <Send size={16} />
                </button>
              </form>
            </div>

            {/* Info */}
            <div className="space-y-16">
              <div>
                <h2 className="text-3xl font-serif mb-12 text-charcoal">Our Headquarters</h2>
                <div className="space-y-12">
                  {[
                    { city: "Kigali", address: "Kigali Heights, Floor 3, Kigali, Rwanda", phone: "+250 788 SERENE" }
                  ].map((office, i) => (
                    <div key={i} className="flex space-x-6">
                      <div className="shrink-0 text-gold-muted"><MapPin size={24} /></div>
                      <div>
                        <h3 className="text-xl font-serif mb-2">{office.city}</h3>
                        <p className="text-charcoal/60 font-light mb-2">{office.address}</p>
                        <p className="text-sm font-bold text-charcoal">{office.phone}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-serif mb-8 text-charcoal">Direct Contact</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 text-charcoal/60">
                    <Mail size={18} className="text-gold-muted" />
                    <span className="text-sm font-light">concierge@serenehomes.africa</span>
                  </div>
                  <div className="flex items-center space-x-4 text-charcoal/60">
                    <Clock size={18} className="text-gold-muted" />
                    <span className="text-sm font-light">Mon - Fri: 09:00 - 18:00</span>
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

export default ContactPage;

