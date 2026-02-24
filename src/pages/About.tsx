import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Award, Users, ShieldCheck } from 'lucide-react';
import PageHero from '../components/PageHero';

const AboutPage = () => {
  return (
    <div className="bg-ivory">
      <PageHero 
        title="Wisdom in <br /> Every Structure"
        subtitle="Our Story"
        description="Founded on the principles of serenity and precision, Serene Homes Africa has evolved into a leading force in premium African property development."
        imageSeed="about-craft-hero"
      />

      {/* Values */}
      <section className="py-24 md:py-40">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-square overflow-hidden rounded-sm">
                <img src="https://picsum.photos/seed/about-craft/1000/1000" alt="Craftsmanship" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-serif mb-12 text-charcoal">Our Core Values</h2>
              <div className="space-y-12">
                {[
                  { icon: <ShieldCheck className="text-gold-muted" />, title: "Precision", desc: "Every measurement, every cut, and every finish is executed with absolute accuracy." },
                  { icon: <Award className="text-gold-muted" />, title: "Excellence", desc: "We set global standards for African architecture, ensuring luxury in every detail." },
                  { icon: <Users className="text-gold-muted" />, title: "Trust", desc: "Our clients rely on our wisdom and integrity to deliver their most precious assets." },
                  { icon: <CheckCircle2 className="text-gold-muted" />, title: "Sustainability", desc: "Building with the future in mind, using materials and methods that respect the environment." }
                ].map((v, i) => (
                  <div key={i} className="flex space-x-6">
                    <div className="shrink-0">{v.icon}</div>
                    <div>
                      <h3 className="text-xl font-serif mb-2">{v.title}</h3>
                      <p className="text-charcoal/60 font-light leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team/Philosophy */}
      <section className="py-24 md:py-40 bg-charcoal text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-serif mb-12">A Vision of African Elegance</h2>
          <p className="text-xl font-light opacity-70 leading-relaxed mb-16">
            "Our mission is to bridge the gap between traditional African warmth and modern architectural sophistication. We believe that serenity is the ultimate luxury, and we strive to embed it into every home we build."
          </p>
          <div className="w-24 h-[1px] bg-gold-muted mx-auto mb-8"></div>
          <span className="text-xs uppercase tracking-[0.4em] font-bold">The Serene Homes Leadership</span>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
