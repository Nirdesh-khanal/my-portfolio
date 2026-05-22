import React from "react";
import { motion } from "framer-motion";

const Section = ({ id, title, subtitle, children, className = "", showHeader = true }) => {
  return (
    <section id={id} className={`py-16 md:py-20 relative overflow-hidden ${className}`}>
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {showHeader && title && (
            <div className="mb-10 md:mb-12">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-[1px] w-6 bg-purple-500" />
                <span className="uppercase tracking-[0.25em] text-[10px] font-semibold text-purple-400">
                  {subtitle}
                </span>
              </div>
              <h2 className="text-2xl md:text-[2.25rem] font-bold text-white uppercase tracking-tight">
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
