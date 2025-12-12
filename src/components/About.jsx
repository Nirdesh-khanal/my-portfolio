import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Code2, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
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
                <span className="text-sky-400"> Genshin Impact</span>, the fast-paced action of <span className="text-sky-400">Free Fire</span>, 
                and the social deduction of <span className="text-sky-400">Among Us</span>. Gaming keeps my problem-solving skills sharp and my creativity flowing.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 bg-slate-800 rounded-2xl border border-slate-700 hover:border-sky-500/50 transition-colors">
              <Code2 className="w-10 h-10 text-sky-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Developer</h3>
              <p className="text-slate-400 text-sm">Building robust applications with clean code.</p>
            </div>
            <div className="p-6 bg-slate-800 rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-colors">
              <Gamepad2 className="w-10 h-10 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Gamer</h3>
              <p className="text-slate-400 text-sm">Strategic thinking honed through competitive gaming.</p>
            </div>
            <div className="p-6 bg-slate-800 rounded-2xl border border-slate-700 hover:border-green-500/50 transition-colors sm:col-span-2">
              <Users className="w-10 h-10 text-green-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Team Player</h3>
              <p className="text-slate-400 text-sm">Collaborative and communicative, always ready to lend a hand.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
