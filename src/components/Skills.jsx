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
    <section id="skills" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Skills & Technologies</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((group, index) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-slate-700 transition-all hover:shadow-xl hover:shadow-sky-500/10"
              >
                <h3 className="text-xl font-semibold mb-6 text-sky-400 border-b border-slate-800 pb-2">{group.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {group.items.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-slate-800 rounded-full text-slate-300 text-sm border border-slate-700 hover:text-white hover:border-slate-600 transition-colors cursor-default"
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
