import React from 'react';
import { motion } from 'motion/react';
import { MapPin, ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';

const ProjectsPage = () => {
  const projects = [
    { title: "The Ivory Pavilion", location: "Lagos, Nigeria", category: "Residential", image: "https://picsum.photos/seed/p1/1200/800" },
    { title: "Serene Heights", location: "Accra, Ghana", category: "Apartments", image: "https://picsum.photos/seed/p2/1200/800" },
    { title: "The Emerald Estate", location: "Nairobi, Kenya", category: "Landscaping", image: "https://picsum.photos/seed/p3/1200/800" },
    { title: "Oasis Villa", location: "Marrakech, Morocco", category: "Villa", image: "https://picsum.photos/seed/p4/1200/800" },
    { title: "Zenith Offices", location: "Johannesburg, SA", category: "Commercial", image: "https://picsum.photos/seed/p5/1200/800" },
    { title: "Coastal Serenity", location: "Cape Town, SA", category: "Residential", image: "https://picsum.photos/seed/p6/1200/800" },
  ];

  return (
    <div className="bg-ivory">
      <PageHero 
        title="Signature <br /> Works"
        subtitle="Portfolio"
        description="A curated collection of our most prestigious developments across the African continent."
        imageSeed="projects-header-luxury"
      />

      {/* Projects Grid */}
      <section className="pb-40">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 2) * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[16/10] overflow-hidden rounded-sm mb-8 relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/0 transition-colors duration-500"></div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-gold-muted font-bold mb-2 block">{project.category}</span>
                    <h3 className="text-3xl font-serif text-charcoal mb-2">{project.title}</h3>
                    <p className="flex items-center text-xs uppercase tracking-widest text-charcoal/40 font-medium">
                      <MapPin size={14} className="mr-2" /> {project.location}
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-charcoal/10 flex items-center justify-center group-hover:bg-charcoal group-hover:text-white transition-all">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-beige-warm">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: "Projects Completed", val: "120+" },
              { label: "Countries Present", val: "8" },
              { label: "Awards Won", val: "24" },
              { label: "Happy Families", val: "500+" }
            ].map((s, i) => (
              <div key={i}>
                <span className="block text-5xl font-serif text-charcoal mb-2">{s.val}</span>
                <span className="text-[10px] uppercase tracking-widest text-charcoal/40 font-bold">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
