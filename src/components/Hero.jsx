import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-start relative overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {/* Tagline */}
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-purple-500" />
            <span className="uppercase tracking-[0.3em] text-xs font-bold text-slate-400">
              FullStack Developer
            </span>
          </div>

          {/* Name */}
          <h1 className="text-7xl md:text-[10rem] font-bold leading-[0.85] tracking-tighter mb-12 uppercase">
            <span className="block text-white">Nirdesh</span>
            <span className="block text-gradient-violet-cyan">Khanal.</span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-slate-400 max-w-xl mb-12 font-medium leading-relaxed">
            Crafting high-performance digital systems from the heart of <span className="text-white italic">Nepal.</span>
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <a href="#projects" className="btn-primary uppercase text-sm tracking-widest w-full sm:w-auto text-center">
              Explore Projects
            </a>
            
            <div className="flex items-center gap-6 text-slate-400">
              <a href="https://github.com/Nirdesh-khanal" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/nirdesh-khanal-76381835b/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:khanalnirdsh0003@gmail.com" className="hover:text-white transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[50%] h-full pointer-events-none opacity-20">
        <div className="w-full h-full bg-gradient-to-l from-purple-500/20 to-transparent blur-[120px]" />
      </div>
    </section>
  );
};

export default Hero;
