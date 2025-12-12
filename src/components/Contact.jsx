import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="text-sky-400 font-semibold tracking-wider text-sm uppercase mb-2 block">Get in Touch</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Let's Build Something Together</h2>
          <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            I'll try my best to get back to you!
          </p>
          
          <div className="flex flex-row gap-6 justify-center mb-16">
            <a href="mailto:khanalnirdsh0003@gmail.com" className="group flex flex-col items-center gap-3">
               <div className="p-4 rounded-full bg-slate-900 border border-slate-800 group-hover:border-sky-500 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all duration-300">
                 <Mail className="w-6 h-6 text-slate-400 group-hover:text-sky-400" />
               </div>
               <span className="text-sm text-slate-400 group-hover:text-sky-400 transition-colors">Email Me</span>
            </a>
            
            <a href="https://linkedin.com/in/nirdesh-khanal" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-3">
               <div className="p-4 rounded-full bg-slate-900 border border-slate-800 group-hover:border-sky-500 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all duration-300">
                 <Linkedin className="w-6 h-6 text-slate-400 group-hover:text-sky-400" />
               </div>
               <span className="text-sm text-slate-400 group-hover:text-sky-400 transition-colors">LinkedIn</span>
            </a>

            <a href="https://github.com/nirdesh-khanal" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-3">
               <div className="p-4 rounded-full bg-slate-900 border border-slate-800 group-hover:border-sky-500 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all duration-300">
                 <Github className="w-6 h-6 text-slate-400 group-hover:text-sky-400" />
               </div>
               <span className="text-sm text-slate-400 group-hover:text-sky-400 transition-colors">GitHub</span>
            </a>
          </div>

          <a 
            href="mailto:nirdesh.khanal@example.com"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-slate-900 transition-all duration-200 bg-sky-400 rounded-full hover:bg-sky-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-400 focus:ring-offset-slate-900"
          >
            <MessageSquare className="w-5 h-5 mr-2" />
            Say Hello
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
