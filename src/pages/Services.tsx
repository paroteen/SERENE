import React from 'react';
import { motion } from 'motion/react';
import { Layers, Hammer, Compass, TreePine, Home as HomeIcon, CheckCircle2, ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';

const ServicesPage = () => {
  const detailedServices = [
    {
      title: "Architectural Construction",
      icon: <Layers size={40} />,
      desc: "From single-family luxury villas to expansive multi-family residential complexes. We manage the entire build lifecycle with structural integrity and aesthetic vision.",
      details: ["Structural Engineering", "Project Management", "Luxury Villa Construction", "Apartment Complexes"],
      imageSeed: "architecture-luxury"
    },
    {
      title: "Premium Finishing",
      icon: <Hammer size={40} />,
      desc: "The final touch that defines the space. We specialize in the installation of solid wooden doors, precision-engineered windows, and high-end architectural hardware.",
      details: ["Solid Mahogany Doors", "Thermal Insulated Windows", "Custom Cabinetry", "Artisanal Hardware"],
      imageSeed: "wood-door-luxury"
    },
    {
      title: "Interior Design & Fit-out",
      icon: <Compass size={40} />,
      desc: "Bespoke interior solutions for gourmet kitchens, grand salons, private master suites, and executive home offices. We create spaces that reflect your lifestyle.",
      details: ["Kitchen Architecture", "Salon Design", "Office Fit-outs", "Custom Furniture"],
      imageSeed: "kitchen-interior"
    },
    {
      title: "Exterior & Landscape Architecture",
      icon: <TreePine size={40} />,
      desc: "Extending serenity beyond the walls. Our landscape architects design verandas, garden structures, and outdoor living spaces that harmonize with nature.",
      details: ["Veranda Design", "Garden Architecture", "Outdoor Lighting", "Sustainable Landscapes"],
      imageSeed: "veranda-landscape"
    },
    {
      title: "Painting & Decorative Finishing",
      icon: <CheckCircle2 size={40} />,
      desc: "Expert interior and exterior painting using premium pigments and protective varnishes. We ensure your home remains vibrant and protected for years.",
      details: ["Artisanal Painting", "Premium Varnishing", "Weather Protection", "Decorative Plaster"],
      imageSeed: "painting-interior"
    },
    {
      title: "Executive Residential Leasing",
      icon: <HomeIcon size={40} />,
      desc: "A curated portfolio of furnished and unfurnished luxury apartments in prime locations across Africa, designed for long-term residential excellence.",
      details: ["Serviced Apartments", "Long-term Leases", "Prime Locations", "Concierge Services"],
      imageSeed: "luxury-apartment"
    }
  ];

  return (
    <div className="bg-ivory">
      <PageHero 
        title="Crafting <br /> Perfection"
        subtitle="Our Expertise"
        description="We offer a comprehensive suite of services designed to deliver architectural excellence from foundation to the finest interior detail."
        imageSeed="services-header-wood"
      />

      {/* Detailed Services List */}
      <section className="py-24 md:py-40">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="space-y-32">
            {detailedServices.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={idx % 2 !== 0 ? 'lg:order-2' : ''}>
                  <div className="mb-8 p-6 bg-beige-warm inline-block rounded-sm text-gold-muted">
                    {service.icon}
                  </div>
                  <h2 className="text-4xl font-serif mb-6 text-charcoal">{service.title}</h2>
                  <p className="text-lg text-charcoal/70 font-light leading-relaxed mb-10">
                    {service.desc}
                  </p>
                  <ul className="grid grid-cols-2 gap-4">
                    {service.details.map((d, i) => (
                      <li key={i} className="flex items-center text-xs uppercase tracking-widest text-charcoal/50 font-bold">
                        <ArrowRight size={12} className="mr-2 text-gold-muted" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`aspect-video lg:aspect-square overflow-hidden rounded-sm ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <img 
                    src={`https://picsum.photos/seed/${service.imageSeed}/1000/1000`} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-24 md:py-40 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <span className="text-xs uppercase tracking-[0.3em] text-gold-muted font-semibold mb-4 block">Methodology</span>
            <h2 className="text-4xl md:text-6xl font-serif">The Path to Serenity</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { step: "01", title: "Conceptual Wisdom", desc: "We begin with a deep understanding of your vision, blending architectural logic with the soul of the landscape." },
              { step: "02", title: "Precision Execution", desc: "Our master craftsmen and engineers work in unison, ensuring every millimeter aligns with our global standards." },
              { step: "03", title: "Refined Handover", desc: "A meticulous final inspection ensures that every door, window, and finish meets the Serene Homes seal of excellence." }
            ].map((item, i) => (
              <div key={i} className="relative p-10 border border-white/10 hover:border-gold-muted transition-colors duration-500">
                <span className="text-5xl font-serif text-gold-muted/20 absolute top-6 right-8">{item.step}</span>
                <h3 className="text-2xl font-serif mb-6">{item.title}</h3>
                <p className="text-white/60 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-24 md:py-40 bg-beige-warm">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl font-serif mb-8">Premium Materials Supply</h2>
          <p className="max-w-2xl mx-auto text-charcoal/60 font-light mb-12">
            We provide wholesale access to the same high-grade materials we use in our signature projects. From refined sand and gravel to artisanal paints and varnishes.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Refined Sand', 'Premium Gravel', 'Artisanal Paints', 'Luxury Varnishes'].map((m, i) => (
              <div key={i} className="p-8 bg-white border border-charcoal/5 rounded-sm">
                <span className="text-xs uppercase tracking-widest font-bold text-charcoal">{m}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
