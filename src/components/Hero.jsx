import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import resume from '../assets/portfolio/nirdeshkhanal.pdf';

const Hero = () => {
  return (
    <section id="hero" className="min-h-[90vh] flex items-center justify-center relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-600/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-slate-800 border border-slate-700 text-sky-400 text-sm font-medium mb-6">
            Available for Work
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Hi, I'm Nirdesh Khanal
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-10">
            A passionate Full-Stack Developer crafting clean, modern, and efficient web solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-sky-500 text-white font-semibold hover:bg-sky-600 transition-all hover:scale-105 shadow-lg shadow-sky-500/25"
            >
              View My Work
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a 
              href={resume}
              download="nirdeshkhanal.pdf"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-slate-800 text-white font-semibold border border-slate-700 hover:bg-slate-700 transition-all hover:scale-105"
            >
              Download Resume
              <Download className="ml-2 w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
