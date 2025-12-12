import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import resume from '../assets/portfolio/nirdeshkhanal.pdf';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Abstract Glowing Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/30 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky-600/20 rounded-full blur-[100px] animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass-card p-8 md:p-12 rounded-3xl inline-block"
        >
          <span className="inline-block py-1 px-4 rounded-full bg-slate-900/50 border border-slate-700 text-sky-400 text-sm font-medium mb-6 backdrop-blur-sm">
            Available for Work
          </span>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-6 bg-gradient-to-r from-sky-400 via-purple-400 to-white bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(139,92,246,0.5)]">
            Nirdesh Khanal
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto mb-10 font-light">
            Crafting <span className="text-sky-400 font-semibold">Digital Universes</span> with Code
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="#projects"
              className="group relative inline-flex items-center justify-center px-8 py-3 rounded-full bg-sky-500/10 text-sky-400 font-semibold border border-sky-500/50 hover:bg-sky-500 hover:text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.6)] overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                View My Work
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a 
              href={resume}
              download="nirdeshkhanal.pdf"
              className="group relative inline-flex items-center justify-center px-8 py-3 rounded-full bg-purple-600/10 text-purple-400 font-semibold border border-purple-500/50 hover:bg-purple-600 hover:text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.6)]"
            >
               <span className="relative z-10 flex items-center">
                Download Resume
                <Download className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
               </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
