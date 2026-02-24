import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface PageHeroProps {
  title: string;
  subtitle: string;
  description: string;
  imageSeed: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, description, imageSeed }) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden flex items-center justify-center">
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <img 
          src={`https://picsum.photos/seed/${imageSeed}/1920/1080`} 
          alt={title}
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
            {subtitle}
          </span>
          <h1 className="text-5xl md:text-8xl font-serif mb-8 leading-[1.1] tracking-tight" dangerouslySetInnerHTML={{ __html: title }}>
          </h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto opacity-90 leading-relaxed">
            {description}
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-ivory to-transparent z-20"></div>
    </section>
  );
};

export default PageHero;
