import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, ChevronRight, Layers, Hammer, Compass, TreePine, Home as HomeIcon, Mail, CheckCircle2, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://picsum.photos/seed/wood-interior-luxury/1920/1080" 
          alt="Artisanal Wooden Interior"
          className="w-full h-full object-cover brightness-[0.4] contrast-[1.1]"
          referrerPolicy="no-referrer"
        />
      </motion.div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="text-xs md:text-sm uppercase tracking-[0.5em] mb-6 block font-medium opacity-80">
            Artisanal Excellence & Structural Serenity
          </span>
          <h1 className="text-5xl md:text-8xl font-serif mb-8 leading-[1.1] tracking-tight">
            The Craft of <br /> Refined Living
          </h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 opacity-90 leading-relaxed">
            From solid wooden doors to bespoke gourmet kitchens. We master the details that transform a house into a sanctuary of African elegance.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link to="/projects" className="group flex items-center space-x-3 bg-white text-charcoal px-8 py-4 text-xs uppercase tracking-widest font-semibold transition-all hover:bg-gold-muted hover:text-white">
              <span>Explore Our Craft</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact" className="px-8 py-4 text-xs uppercase tracking-widest border border-white/40 text-white font-semibold transition-all hover:border-white hover:bg-white/10">
              Private Consultation
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent opacity-50"></div>
        <span className="text-[10px] uppercase tracking-[0.4em] text-white opacity-40">Scroll</span>
      </motion.div>
    </section>
  );
};

const AboutSection = () => (
  <section className="py-24 md:py-40 bg-beige-warm overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-gold-muted font-semibold mb-6 block">
            Our Philosophy
          </span>
          <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight text-charcoal">
            Building for <br /> Generations
          </h2>
          <div className="space-y-6 text-charcoal/70 text-lg leading-relaxed font-light">
            <p>
              At Serene Homes Africa, we believe that a building is more than just a structure; it is a sanctuary. Our approach is rooted in the pursuit of calmness and architectural excellence.
            </p>
            <p>
              Every project we undertake is a testament to our commitment to precision and durability. We blend traditional African elegance with modern global standards.
            </p>
          </div>
          <Link to="/about" className="mt-12 inline-flex items-center space-x-3 text-xs uppercase tracking-widest font-bold text-charcoal border-b border-gold-muted pb-1 hover:text-gold-muted transition-colors">
            <span>Our Full Story</span>
            <ArrowRight size={14} />
          </Link>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="aspect-[4/5] overflow-hidden rounded-sm">
            <img 
              src="https://picsum.photos/seed/africa-modern/800/1000" 
              alt="Modern African Home"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const HomePage = () => {
  return (
    <div className="bg-ivory">
      <Hero />
      <AboutSection />

      {/* Finishing Touches Section */}
      <section className="py-24 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <span className="text-xs uppercase tracking-[0.3em] text-gold-muted font-semibold mb-4 block">Artisanal Details</span>
            <h2 className="text-4xl md:text-6xl font-serif text-charcoal">The Finishing Touches</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Solid Wooden Doors", desc: "Hand-carved mahogany and teak entrances that command respect.", seed: "luxury-door" },
              { title: "Gourmet Kitchens", desc: "Precision-engineered culinary spaces with artisanal cabinetry.", seed: "modern-kitchen" },
              { title: "Veranda Design", desc: "Seamless transitions between interior luxury and natural serenity.", seed: "luxury-veranda" },
              { title: "Architectural Windows", desc: "High-performance glazing framed in premium wood or metal.", seed: "modern-window" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="aspect-[3/4] overflow-hidden rounded-sm mb-6 relative">
                  <img src={`https://picsum.photos/seed/${item.seed}/600/800`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <h3 className="text-xl font-serif mb-2 text-charcoal">{item.title}</h3>
                <p className="text-sm text-charcoal/60 font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Shortened Services for Home */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl font-serif mb-12">Our Core Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Architectural Construction", icon: <Layers className="text-gold-muted" />, seed: "architecture-luxury" },
              { title: "Premium Finishing", icon: <Hammer className="text-gold-muted" />, seed: "wood-door-luxury" },
              { title: "Interior Design", icon: <Compass className="text-gold-muted" />, seed: "kitchen-interior" }
            ].map((s, i) => (
              <div key={i} className="p-10 bg-beige-warm/50 border border-charcoal/5">
                <div className="mb-6 inline-block p-4 bg-white rounded-sm">{s.icon}</div>
                <h3 className="text-xl font-serif mb-4">{s.title}</h3>
                <div className="aspect-video overflow-hidden rounded-sm mb-6">
                  <img src={`https://picsum.photos/seed/${s.seed}/600/400`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <Link to="/services" className="text-[10px] uppercase tracking-widest font-bold text-gold-muted">Learn More</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Projects Preview */}
      <section className="py-24 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl font-serif">Signature Works</h2>
            <Link to="/projects" className="text-xs uppercase tracking-widest border-b border-gold-muted pb-1">View Portfolio</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-video overflow-hidden rounded-sm relative group">
              <img src="https://picsum.photos/seed/proj1/1200/800" className="w-full h-full object-cover brightness-50 group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute bottom-8 left-8">
                <h3 className="text-2xl font-serif">The Ivory Pavilion</h3>
                <p className="text-xs uppercase tracking-widest opacity-60">Lagos, Nigeria</p>
              </div>
            </div>
            <div className="aspect-video overflow-hidden rounded-sm relative group">
              <img src="https://picsum.photos/seed/proj2/1200/800" className="w-full h-full object-cover brightness-50 group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute bottom-8 left-8">
                <h3 className="text-2xl font-serif">Serene Heights</h3>
                <p className="text-xs uppercase tracking-widest opacity-60">Accra, Ghana</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Materials Supply Section */}
      <section className="py-24 md:py-40 bg-beige-warm">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs uppercase tracking-[0.3em] text-gold-muted font-semibold mb-6 block">Wholesale Supply</span>
              <h2 className="text-4xl md:text-6xl font-serif mb-8 text-charcoal">Premium Construction Materials</h2>
              <p className="text-charcoal/70 text-lg font-light leading-relaxed mb-10">
                We provide the foundation for excellence. Beyond our construction services, we supply high-grade sand, gravel, artisanal paints, and protective varnishes to builders who demand the best.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {['Refined Sand', 'High-Grade Gravel', 'Artisanal Paints', 'Premium Varnishes'].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3 text-xs uppercase tracking-widest font-bold text-charcoal/60">
                    <CheckCircle2 size={16} className="text-gold-muted" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="aspect-square overflow-hidden rounded-sm">
                <img src="https://picsum.photos/seed/sand-gravel/600/600" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="aspect-square overflow-hidden rounded-sm mt-8">
                <img src="https://picsum.photos/seed/paint-varnish/600/600" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-forest text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-serif mb-8">Ready to Build Your Sanctuary?</h2>
          <Link to="/contact" className="inline-block bg-white text-charcoal px-12 py-5 text-xs uppercase tracking-[0.3em] font-bold hover:bg-gold-muted hover:text-white transition-all">
            Start a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
