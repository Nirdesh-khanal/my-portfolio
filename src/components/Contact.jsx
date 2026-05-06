import React from "react";
import Section from "./Section";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Terminal, ExternalLink } from "lucide-react";

const Contact = () => {
  return (
    <Section id="contact" title="Let's build something exceptional" subtitle="Connection Established">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-12">
          <p className="text-slate-400 text-xl leading-relaxed max-w-xl">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Let's collaborate.
          </p>

          <div className="space-y-8">
            <div className="glass-card p-8 border-white/5 relative group overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Terminal size={64} />
                </div>
                <h3 className="text-xl font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-2">
                    Remote Access
                </h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                    <span className="text-white font-bold">Based in Kathmandu, Nepal 🇳🇵</span><br />
                    Available for <span className="text-purple-400">remote work</span> and collaborations worldwide (GMT+5:45).
                </p>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                    Preferred Communication: <span className="text-white">Email → Slack/Discord</span>
                </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
                <a
                  href="mailto:khanalnirdsh0003@gmail.com"
                  className="glass-card p-6 border-white/5 hover:border-purple-500/30 transition-all flex flex-col gap-4 group"
                >
                  <Mail className="text-purple-500 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Send Message</div>
                    <div className="text-sm text-white font-medium">khanalnirdsh0003@gmail.com</div>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/nirdesh-khanal-76381835b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-6 border-white/5 hover:border-purple-500/30 transition-all flex flex-col gap-4 group"
                >
                  <Linkedin className="text-purple-500 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Professional</div>
                    <div className="text-sm text-white font-medium">LinkedIn Profile</div>
                  </div>
                </a>
            </div>
          </div>
        </div>

        <div className="glass-card p-12 border-white/5 bg-slate-950/50">
          <h3 className="text-2xl font-bold text-white uppercase tracking-tighter mb-8">
            Quick Links
          </h3>
          <div className="space-y-6">
            <a
              href="mailto:khanalnirdsh0003@gmail.com"
              className="flex items-center justify-between group p-4 border-b border-white/5 hover:border-purple-500/50 transition-colors"
            >
              <span className="text-slate-400 group-hover:text-white transition-colors">Send Encrypted Message</span>
              <Mail size={18} className="text-slate-600 group-hover:text-purple-500" />
            </a>
            <a
              href="#"
              className="flex items-center justify-between group p-4 border-b border-white/5 hover:border-purple-500/50 transition-colors"
            >
              <span className="text-slate-400 group-hover:text-white transition-colors">Schedule a Call</span>
              <div className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Coming Soon</div>
            </a>
            <a
              href="#"
              className="flex items-center justify-between group p-4 border-b border-white/5 hover:border-purple-500/50 transition-colors"
            >
              <span className="text-slate-400 group-hover:text-white transition-colors">View Full Resume</span>
              <ExternalLink size={18} className="text-slate-600 group-hover:text-purple-500" />
            </a>
          </div>

          <div className="mt-12 pt-12 border-t border-white/5 text-center">
             <p className="text-slate-500 text-sm mb-6 uppercase tracking-widest font-bold">Encrypted Connection Ready</p>
             <a
                href="mailto:khanalnirdsh0003@gmail.com"
                className="btn-primary w-full inline-block text-center uppercase tracking-widest text-xs"
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
