import React from "react";
import Section from "./Section";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Terminal, ExternalLink } from "lucide-react";

const Contact = () => {
  return (
    <Section id="contact" title="Let's build something exceptional" subtitle="Connection Established">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <p className="text-slate-400 text-base md:text-lg font-light leading-relaxed max-w-xl">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Let's collaborate.
          </p>

          <div className="space-y-6">
            <div className="glass-card p-5 border-white/5 relative group overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Terminal size={48} />
                </div>
                <h3 className="text-base font-semibold text-white uppercase tracking-widest mb-2 flex items-center gap-2">
                    Remote Access
                </h3>
                <p className="text-slate-400 mb-4 text-xs leading-relaxed font-light">
                    <span className="text-white font-medium">Based in Kathmandu, Nepal 🇳🇵</span><br />
                    Available for <span className="text-purple-400 font-medium">remote work</span> and collaborations worldwide (GMT+5:45).
                </p>
                <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">
                    Preferred Communication: <span className="text-white font-medium">Email → Slack/Discord</span>
                </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
                <a
                  href="mailto:khanalnirdsh0003@gmail.com"
                  className="glass-card p-5 border-white/5 hover:border-purple-500/30 transition-all flex flex-col gap-3 group"
                >
                  <Mail size={18} className="text-purple-500 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-[9px] font-semibold text-slate-500 uppercase tracking-widest mb-0.5">Send Message</div>
                    <div className="text-xs text-white font-normal truncate">khanalnirdsh0003@gmail.com</div>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/nirdesh-khanal-76381835b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-5 border-white/5 hover:border-purple-500/30 transition-all flex flex-col gap-3 group"
                >
                  <Linkedin size={18} className="text-purple-500 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-[9px] font-semibold text-slate-500 uppercase tracking-widest mb-0.5">Professional</div>
                    <div className="text-xs text-white font-normal">LinkedIn Profile</div>
                  </div>
                </a>
            </div>
          </div>
        </div>

        <div className="glass-card p-8 border-white/5 bg-slate-950/50">
          <h3 className="text-lg font-semibold text-white uppercase tracking-tight mb-5">
            Quick Links
          </h3>
          <div className="space-y-4">
            <a
              href="mailto:khanalnirdsh0003@gmail.com"
              className="flex items-center justify-between group py-3 px-2 border-b border-white/5 hover:border-purple-500/50 transition-colors"
            >
              <span className="text-slate-400 text-xs group-hover:text-white transition-colors">Send Encrypted Message</span>
              <Mail size={16} className="text-slate-600 group-hover:text-purple-500" />
            </a>
            <a
              href="#"
              className="flex items-center justify-between group py-3 px-2 border-b border-white/5 hover:border-purple-500/50 transition-colors"
            >
              <span className="text-slate-400 text-xs group-hover:text-white transition-colors">Schedule a Call</span>
              <div className="text-[9px] font-semibold text-slate-600 uppercase tracking-wider">Coming Soon</div>
            </a>
            <a
              href="#"
              className="flex items-center justify-between group py-3 px-2 border-b border-white/5 hover:border-purple-500/50 transition-colors"
            >
              <span className="text-slate-400 text-xs group-hover:text-white transition-colors">View Full Resume</span>
              <ExternalLink size={16} className="text-slate-600 group-hover:text-purple-500" />
            </a>
          </div>

          <div className="mt-8 pt-8 border-t border-white/5 text-center">
             <p className="text-slate-500 text-[10px] font-semibold tracking-wider mb-4 uppercase">Encrypted Connection Ready</p>
             <a
                href="mailto:khanalnirdsh0003@gmail.com"
                className="btn-primary w-full inline-block text-center uppercase tracking-wider text-[10px] py-2"
              >
                Establish Secure Link
              </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
