import React from "react";
import Section from "./Section";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <Section
      id="hero"
      className="min-h-screen flex items-center pt-[80px] lg:pt-[100px] pb-12"
      showHeader={false}
    >
      <div className="grid lg:grid-cols-2 gap-8 items-center w-full">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {/* Tagline */}
          <div className="flex items-center gap-3 mb-5">
            <div className="h-[1px] w-8 bg-purple-500" />
            <span className="uppercase tracking-[0.25em] text-[10px] font-semibold text-slate-400">
              FullStack Developer
            </span>
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-6xl md:text-[5rem] lg:text-[6rem] xl:text-[6.5rem] font-bold leading-[1.0] md:leading-[0.95] tracking-tight mb-8 uppercase">
            <span className="block text-white">Nirdesh</span>
            <span className="block text-gradient-violet-cyan">Khanal.</span>
          </h1>

          {/* Description */}
          <div className="text-base md:text-lg text-slate-400 max-w-lg mb-8 font-light leading-relaxed">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              Crafting high-performance digital systems from the heart of{" "}
              <span className="text-white italic">Nepal.</span>
            </motion.p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-5">
            <a
              href="#projects"
              className="btn-primary uppercase text-xs tracking-wider w-full sm:w-auto text-center"
            >
              Explore Projects
            </a>

            <div className="flex items-center gap-5 text-slate-400">
              <a
                href="https://github.com/Nirdesh-khanal"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/nirdesh-khanal-76381835b/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:khanalnirdsh0003@gmail.com"
                className="hover:text-white transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Terminal Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="hidden lg:block"
        >
          <div className="glass-card rounded-lg overflow-hidden border-white/10 shadow-2xl">
            <div className="bg-white/5 px-4 py-2 border-b border-white/5 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
              </div>
              <div className="text-[9px] font-mono text-slate-500 uppercase tracking-widest ml-4">
                bash — 80x24
              </div>
            </div>
            <motion.div
              className="p-6 font-mono text-xs leading-relaxed"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
            >
              <motion.div
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                className="flex gap-3 mb-2"
              >
                <span className="text-purple-500">➜</span>
                <span className="text-cyan-400">~</span>
                <span className="text-white">whoami</span>
              </motion.div>
              <motion.div
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                className="text-slate-400 mb-4 ml-6"
              >
                nirdesh_khanal (FullStack Developer)
              </motion.div>

              <motion.div
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                className="flex gap-3 mb-2"
              >
                <span className="text-purple-500">➜</span>
                <span className="text-cyan-400">~</span>
                <span className="text-white">ls skills/</span>
              </motion.div>
              <motion.div
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                className="grid grid-cols-2 gap-x-4 gap-y-1 text-slate-400 mb-4 ml-6"
              >
                <span>react.js</span>
                <span>django rest framework</span>
                <span>python</span>
                <span>javascript</span>
                <span>tailwind</span>
                <span>postgresql</span>
              </motion.div>

              <motion.div
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                className="flex gap-3 mb-2"
              >
                <span className="text-purple-500">➜</span>
                <span className="text-cyan-400">~</span>
                <span className="text-white">cat about.txt</span>
              </motion.div>
              <motion.div
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                className="text-slate-400 ml-6"
              >
                Building the future of web applications with precision and
                passion. Based in Kathmandu, operating at lightspeed.
              </motion.div>
              <div className="flex gap-1 mt-4 ml-6">
                <div className="w-1.5 h-3.5 bg-purple-500 animate-pulse" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[50%] h-full pointer-events-none opacity-20">
        <div className="w-full h-full bg-gradient-to-l from-purple-500/20 to-transparent blur-[120px]" />
      </div>
    </Section>
  );
};

export default Hero;
