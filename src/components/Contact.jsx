import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Terminal } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-8 bg-purple-500" />
            <span className="uppercase tracking-widest text-xs font-bold text-purple-400">Connection Established</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-10 text-white uppercase tracking-tighter">Initiate Contact</h2>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <p className="text-slate-400 text-lg leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
                Let's build something exceptional.
              </p>
              
              <div className="flex flex-col gap-6">
                <a href="mailto:khanalnirdsh0003@gmail.com" className="group flex items-center gap-4 text-slate-400 hover:text-white transition-colors">
                  <div className="p-3 bg-white/5 rounded-full border border-white/5 group-hover:border-purple-500/50 transition-all">
                    <Mail size={20} />
                  </div>
                  <span className="font-medium tracking-wide">khanalnirdsh0003@gmail.com</span>
                </a>
                
                <a href="https://www.linkedin.com/in/nirdesh-khanal-76381835b/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 text-slate-400 hover:text-white transition-colors">
                  <div className="p-3 bg-white/5 rounded-full border border-white/5 group-hover:border-purple-500/50 transition-all">
                    <Linkedin size={20} />
                  </div>
                  <span className="font-medium tracking-wide">LinkedIn Profile</span>
                </a>
                
                <a href="https://github.com/Nirdesh-khanal" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 text-slate-400 hover:text-white transition-colors">
                  <div className="p-3 bg-white/5 rounded-full border border-white/5 group-hover:border-purple-500/50 transition-all">
                    <Github size={20} />
                  </div>
                  <span className="font-medium tracking-wide">GitHub Repositories</span>
                </a>
              </div>
            </div>
            
            <div className="glass-card p-10 border-white/5 flex flex-col justify-center items-center text-center">
              <Terminal size={48} className="text-purple-500 mb-6" />
              <h3 className="text-xl font-bold text-white uppercase tracking-widest mb-4">Remote Access</h3>
              <p className="text-slate-400 text-sm mb-8">
                Currently based in Nepal, working globally. 
                Available for remote collaborations and engineering roles.
              </p>
              <a 
                href="mailto:khanalnirdsh0003@gmail.com"
                className="btn-primary w-full uppercase tracking-widest text-xs"
              >
                Send Encrypted Message
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;