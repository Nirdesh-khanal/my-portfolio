import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-20 items-center"
        >
          <div className="relative">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[1px] w-8 bg-purple-500" />
              <span className="uppercase tracking-widest text-xs font-bold text-purple-400">Who I Am</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-10 text-white uppercase tracking-tighter">About Me</h2>
            
            <div className="space-y-6 text-slate-400 leading-relaxed text-lg font-medium">
              <p>
                I am a passionate <span className="text-white">Full-Stack Developer</span> dedicated to turning complex problems into elegant, user-centric solutions. With a strong foundation in <span className="text-purple-400">React</span> and <span className="text-cyan-400">Django</span>, I bridge the gap between robust backend architecture and intuitive frontend experiences.
              </p>
              <p>
                I’m driven by curiosity and the challenge of solving problems. I’m always learning, whether it’s picking up a new framework, understanding system architecture, or just figuring out why something broke.
              </p>
            </div>
          </div>
          
          <div className="relative aspect-square">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-white/10" />
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="text-center p-12">
                  <div className="text-7xl font-bold text-white mb-2 uppercase tracking-tighter">01+</div>
                  <div className="text-xs font-bold uppercase tracking-[0.3em] text-purple-400">Years of Code</div>
               </div>
            </div>
            {/* Corner Decorative Elements */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-purple-500" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-500" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
