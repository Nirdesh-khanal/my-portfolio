import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Code2, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-900/0 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="glass-card p-8 rounded-3xl relative overflow-hidden group">
            {/* Hover glow effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-sky-500/20 transition-all duration-500" />
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white relative z-10">About Me</h2>
            <div className="space-y-4 text-slate-300 leading-relaxed relative z-10">
              <p>
                I'm a Full-Stack developer with a strong foundation in modern web technologies including React, Python, and Django. 
                My journey involves solving real-world problems through code, from budget trackers to immersive web applications.
              </p>
              <p>
                What drives me is the constant pursuit of learning. Whether it's mastering a new framework or optimizing legacy code, 
                I approach every challenge with passion and practicality.
              </p>
              <p>
                When I'm not coding, you can find me exploring virtual worlds. I'm an avid gamer who enjoys the strategic depth of 
                <span className="text-sky-400 font-semibold drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]"> Genshin Impact</span>, the fast-paced action of <span className="text-sky-400 font-semibold">Free Fire</span>, 
                and the social deduction of <span className="text-sky-400 font-semibold">Among Us</span>. Gaming keeps my problem-solving skills sharp and my creativity flowing.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="p-6 glass-card rounded-2xl hover:bg-white/5 transition-all duration-300 hover:shadow-[0_0_20px_rgba(56,189,248,0.2)] border border-sky-500/20"
            >
              <Code2 className="w-10 h-10 text-sky-400 mb-4 drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]" />
              <h3 className="text-xl font-bold mb-2">Developer</h3>
              <p className="text-slate-400 text-sm">Building robust applications with clean code.</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="p-6 glass-card rounded-2xl hover:bg-white/5 transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] border border-purple-500/20"
            >
              <Gamepad2 className="w-10 h-10 text-purple-400 mb-4 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
              <h3 className="text-xl font-bold mb-2">Gamer</h3>
              <p className="text-slate-400 text-sm">Strategic thinking honed through competitive gaming.</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="p-6 glass-card rounded-2xl hover:bg-white/5 transition-all duration-300 hover:shadow-[0_0_20px_rgba(74,222,128,0.2)] border border-green-500/20 sm:col-span-2"
            >
              <Users className="w-10 h-10 text-green-400 mb-4 drop-shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
              <h3 className="text-xl font-bold mb-2">Team Player</h3>
              <p className="text-slate-400 text-sm">Collaborative and communicative, always ready to lend a hand.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
