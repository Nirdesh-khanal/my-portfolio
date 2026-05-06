import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText, Globe } from "lucide-react";

const RightSidebar = () => {
  return (
    <div className="hidden xl:flex fixed right-0 top-0 h-screen w-24 flex-col items-center justify-center z-40">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="flex flex-col items-center gap-8 py-10 glass-card border-y-0 border-r-0 rounded-none h-auto w-16"
      >
        {/* Profile Circle */}
        <div className="w-10 h-10 rounded-full border border-purple-500/30 overflow-hidden bg-slate-900 group cursor-pointer relative">
          <div className="absolute inset-0 bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors" />
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Nirdesh"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="h-12 w-[1px] bg-white/10" />

        {/* Social Links */}
        <div className="flex flex-col gap-6">
          <a
            href="https://github.com/Nirdesh-khanal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-purple-500 transition-all hover:scale-110"
            title="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/nirdesh-khanal-76381835b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-purple-500 transition-all hover:scale-110"
            title="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:khanalnirdsh0003@gmail.com"
            className="text-slate-500 hover:text-purple-500 transition-all hover:scale-110"
            title="Email"
          >
            <Mail size={18} />
          </a>
        </div>

        <div className="h-12 w-[1px] bg-white/10" />

        {/* Tech Stack Icons (Mini) */}
        <div className="flex flex-col gap-4 text-[10px] font-bold text-slate-600 uppercase vertical-text tracking-widest">
          <span className="hover:text-purple-400 transition-colors cursor-default">
            React
          </span>
          <span className="hover:text-cyan-400 transition-colors cursor-default">
            DRF
          </span>
        </div>

        <div className="h-12 w-[1px] bg-white/10" />

        {/* Badge / Resume */}
        <a
          href="#"
          className="text-slate-500 hover:text-purple-500 transition-all hover:scale-110"
          title="Download Resume"
        >
          <FileText size={18} />
        </a>

        <div className="mt-auto relative group">
          <div className="vertical-text text-[9px] font-bold tracking-[0.3em] text-purple-500/50 group-hover:text-purple-500 transition-colors whitespace-nowrap">
            AVAILABLE FOR HIRE
          </div>
          <div className="absolute -left-1 top-0 w-1 h-1 bg-purple-500 rounded-full animate-pulse" />
        </div>
      </motion.div>
    </div>
  );
};

export default RightSidebar;
