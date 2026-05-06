import React from "react";
import { motion } from "framer-motion";

const Section = ({ id, title, subtitle, children, className = "", showHeader = true }) => {
  return (
    <section id={id} className={`py-24 relative overflow-hidden ${className}`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {showHeader && title && (
            <div className="mb-20">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-[1px] w-8 bg-purple-500" />
                <span className="uppercase tracking-widest text-xs font-bold text-purple-400">
                  {subtitle}
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tighter">
                {title}
              </h2>
            </div>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default Section;
