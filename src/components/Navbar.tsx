import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Philosophy', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  const isHome = location.pathname === '/';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-ivory/80 backdrop-blur-md border-b border-charcoal/5 py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="flex flex-col">
          <span className={`text-xl md:text-2xl font-serif tracking-widest uppercase ${(isScrolled || !isHome) ? 'text-charcoal' : 'text-white'}`}>
            Serene Homes
          </span>
          <span className={`text-[10px] tracking-[0.3em] uppercase font-sans font-semibold opacity-70 ${(isScrolled || !isHome) ? 'text-charcoal' : 'text-white'}`}>
            Africa
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href}
              className={`text-xs uppercase tracking-widest font-medium transition-colors hover:text-gold-muted ${(isScrolled || !isHome) ? 'text-charcoal' : 'text-white'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className={`px-6 py-2.5 text-xs uppercase tracking-widest border transition-all duration-300 ${
            (isScrolled || !isHome)
              ? 'border-charcoal text-charcoal hover:bg-charcoal hover:text-white' 
              : 'border-white text-white hover:bg-white hover:text-charcoal'
          }`}>
            Consultation
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className={(isScrolled || !isHome) ? 'text-charcoal' : 'text-white'} /> : <Menu className={(isScrolled || !isHome) ? 'text-charcoal' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-ivory p-8 flex flex-col space-y-6 md:hidden shadow-xl"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm uppercase tracking-widest text-charcoal font-medium"
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="w-full py-4 text-center text-xs uppercase tracking-widest bg-charcoal text-white">
              Request Consultation
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
