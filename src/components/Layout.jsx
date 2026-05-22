import React, { useState } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

import Starfield from "./Starfield";
import RightSidebar from "./RightSidebar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full z-50 glass-nav border-b-0 py-2.5 xl:pr-24 transition-all duration-500">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">
        <div className="flex items-center justify-between h-12">
          <div className="flex-shrink-0 font-bold text-xl text-white font-['Space_Grotesk'] tracking-tighter">
            Nirdesh Khanal<span className="text-purple-500">.</span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-baseline space-x-8">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-400 hover:text-white uppercase text-[10px] font-semibold tracking-[0.22em] transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <a
              href="#contact"
              className="px-4.5 py-1.5 bg-purple-600 hover:bg-purple-500 text-white text-[10px] font-semibold uppercase tracking-wider rounded transition-all duration-300 shadow-[0_2px_10px_rgba(139,92,246,0.2)]"
            >
              Launch Console
            </a>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass-nav border-t border-white/5 bg-slate-950"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-xs font-semibold uppercase tracking-widest"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block w-full py-3 bg-purple-600 text-white text-xs font-semibold uppercase tracking-widest"
              onClick={() => setIsOpen(false)}
            >
              Launch Console
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="py-10 border-t border-white/5 xl:pr-24 transition-all duration-500">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-gray-500 text-[10px] font-medium uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} Nirdesh Khanal — Engineered in Nepal
        </div>

        <div className="flex space-x-8">
          <a
            href="https://github.com/Nirdesh-khanal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/nirdesh-khanal-76381835b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="mailto:khanalnirdsh0003@gmail.com"
            className="text-gray-500 hover:text-white transition-colors"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans relative">
      <Starfield />
      <Navbar />
      <main className="flex-grow xl:pr-24 transition-all duration-500">
        {children}
      </main>
      <RightSidebar />
      <Footer />
    </div>
  );
};

export default Layout;
