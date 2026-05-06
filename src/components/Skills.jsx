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
      <div className="grid md:grid-cols-3 gap-12">
        {skills.map((group, index) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <h3 className="text-xl font-bold mb-8 text-white uppercase tracking-widest border-b border-white/10 pb-4 group-hover:border-purple-500/50 transition-colors">
              {group.category}
            </h3>
            <div className="flex flex-col gap-4">
              {group.items.map((skill) => (
                <div key={skill} className="flex items-center gap-3 group/item">
                  <div className="w-1.5 h-1.5 bg-purple-500/50 rounded-full group-hover/item:bg-purple-500 transition-colors" />
                  <span className="text-slate-400 text-sm font-medium group-hover/item:text-white transition-colors">
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
