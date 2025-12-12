import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      items: ["JavaScript (ES6+)", "React.js", "Vite", "Tailwind CSS", "Context API", "HTML5 & CSS3"]
    },
    {
      category: "Backend",
      items: ["Python", "Django", "Django REST Framework", "REST APIs", "Java Basics"]
    },
    {
      category: "Core & Tools",
      items: ["C (DSA, File Handling)", "Git & GitHub", "Problem Solving", "VS Code"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900/0 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">Skills & Technologies</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((group, index) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`glass-card rounded-2xl p-6 hover:bg-white/5 transition-all duration-300 hover:shadow-[0_0_20px_rgba(56,189,248,0.15)] border-t border-white/10 ${
                    index === 0 ? 'hover:border-sky-500/50' : 
                    index === 1 ? 'hover:border-purple-500/50' : 
                    'hover:border-green-500/50'
                }`}
              >
                <h3 className={`text-xl font-semibold mb-6 border-b border-white/10 pb-2 ${
                    index === 0 ? 'text-sky-400' :
                    index === 1 ? 'text-purple-400' :
                    'text-green-400'
                }`}>{group.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {group.items.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-white/5 rounded-full text-slate-300 text-sm border border-white/10 hover:text-white hover:border-white/30 transition-colors cursor-default hover:shadow-[0_0_10px_rgba(255,255,255,0.1)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
