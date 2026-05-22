import React from "react";
import Section from "./Section";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      items: [
        "JavaScript (ES6+)",
        "React.js",
        "Vite",
        "Tailwind CSS",
        "Context API",
        "HTML5 & CSS3",
      ],
    },
    {
      category: "Backend",
      items: [
        "Python",
        "Django REST Framework (DRF)",
        "REST APIs",
        "Java Basics",
      ],
    },
    {
      category: "Core & Tools",
      items: [
        "C (DSA, File Handling)",
        "Git & GitHub",
        "Problem Solving",
        "VS Code",
      ],
    },
  ];

  return (
    <Section id="skills" title="Core Expertise" subtitle="Tech Stack.log()">
      <div className="grid md:grid-cols-3 gap-8">
        {skills.map((group, index) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.4 }}
            className="group"
          >
            <h3 className="text-sm font-semibold mb-5 text-white uppercase tracking-widest border-b border-white/10 pb-2.5 group-hover:border-purple-500/50 transition-colors">
              {group.category}
            </h3>
            <div className="flex flex-col gap-3">
              {group.items.map((skill) => (
                <div key={skill} className="flex items-center gap-2.5 group/item">
                  <div className="w-1 h-1 bg-purple-500/40 rounded-full group-hover/item:bg-purple-500 transition-colors" />
                  <span className="text-slate-400 text-xs font-normal group-hover/item:text-white transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
