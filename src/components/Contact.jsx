import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900/0 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="text-sky-400 font-semibold tracking-wider text-sm uppercase mb-2 block drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]">Get in Touch</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">Let's Build Something Together</h2>
          <p className="text-slate-300 text-lg mb-12 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            I'll try my best to get back to you!
          </p>
          
          <div className="flex flex-row gap-8 justify-center mb-16">
            <a href="mailto:khanalnirdsh0003@gmail.com" className="group flex flex-col items-center gap-3">
               <div className="p-4 rounded-full glass-card hover:bg-sky-500/20 hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all duration-300 ring-1 ring-white/10 group-hover:ring-sky-500/50">
                 <Mail className="w-6 h-6 text-slate-300 group-hover:text-sky-400 transition-colors" />
               </div>
               <span className="text-sm text-slate-400 group-hover:text-sky-400 transition-colors">Email Me</span>
            </a>
            
            <a href="https://www.linkedin.com/in/nirdesh-khanal/" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-3">
               <div className="p-4 rounded-full glass-card hover:bg-purple-500/20 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300 ring-1 ring-white/10 group-hover:ring-purple-500/50">
                 <Linkedin className="w-6 h-6 text-slate-300 group-hover:text-purple-400 transition-colors" />
               </div>
               <span className="text-sm text-slate-400 group-hover:text-purple-400 transition-colors">LinkedIn</span>
            </a>

            <a href="https://github.com/nirdesh-khanal" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-3">
               <div className="p-4 rounded-full glass-card hover:bg-green-500/20 hover:shadow-[0_0_20px_rgba(74,222,128,0.4)] transition-all duration-300 ring-1 ring-white/10 group-hover:ring-green-500/50">
                 <Github className="w-6 h-6 text-slate-300 group-hover:text-green-400 transition-colors" />
               </div>
               <span className="text-sm text-slate-400 group-hover:text-green-400 transition-colors">GitHub</span>
            </a>
          </div>

          <a 
            href="mailto:nirdesh.khanal@example.com"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-sky-500/20 border border-sky-500/50 rounded-full hover:bg-sky-500 hover:shadow-[0_0_30px_rgba(56,189,248,0.6)] group"
          >
            <MessageSquare className="w-5 h-5 mr-2 group-hover:animate-bounce" />
            Say Hello
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
