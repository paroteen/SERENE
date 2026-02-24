import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Linkedin, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex flex-col mb-8">
              <span className="text-2xl font-serif tracking-widest uppercase">Serene Homes</span>
              <span className="text-[10px] tracking-[0.3em] uppercase font-sans font-semibold opacity-50">Africa</span>
            </div>
            <p className="text-sm text-white/40 font-light leading-relaxed mb-8">
              Redefining luxury living through architectural excellence and African elegance. Building sanctuaries for generations.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white/40 hover:text-gold-muted transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-white/40 hover:text-gold-muted transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-8 text-gold-muted">Navigation</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'Philosophy', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Projects', path: '/projects' },
                { name: 'Contact', path: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-sm text-white/60 hover:text-white transition-colors font-light">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-8 text-gold-muted">Contact</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <MapPin size={18} className="text-gold-muted shrink-0" />
                <span className="text-sm text-white/60 font-light">Kigali Heights, <br /> Kigali, Rwanda</span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone size={18} className="text-gold-muted shrink-0" />
                <span className="text-sm text-white/60 font-light">+250 788 SERENE</span>
              </li>
              <li className="flex items-center space-x-4">
                <Mail size={18} className="text-gold-muted shrink-0" />
                <span className="text-sm text-white/60 font-light">concierge@serenehomes.africa</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-8 text-gold-muted">Newsletter</h4>
            <p className="text-sm text-white/40 font-light mb-6">Receive curated insights on luxury architecture and property development.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-white/5 border border-white/10 px-4 py-3 text-sm w-full focus:outline-none focus:border-gold-muted transition-colors"
              />
              <button className="bg-gold-muted px-4 py-3 hover:bg-gold-muted/80 transition-colors">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest text-white/30">
            &copy; {new Date().getFullYear()} Serene Homes Africa. All Rights Reserved.
          </p>
          <div className="flex space-x-8">
            <Link to="/privacy" className="text-[10px] uppercase tracking-widest text-white/30 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-[10px] uppercase tracking-widest text-white/30 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
