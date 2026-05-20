import React from 'react';
import Section from "./Section";
import { motion } from 'framer-motion';
import { Book, Lightbulb, Users, Gamepad2, ChevronRight } from 'lucide-react';

const Interests = () => {
  const interests = [
    {
      title: "Problem Solving",
      icon: <Lightbulb size={24} />,
      description: "Strategic thinking through chess and competitive gaming.",
      tag: "Strategy"
    },
    {
      title: "Creative Exploration",
      icon: <Gamepad2 size={24} />,
      description: "Exploring vast digital worlds, fueling curiosity and imagination.",
      tag: "Exploration"
    },
    {
      title: "Continuous Learning",
      icon: <Book size={24} />,
      description: "Staying ahead of the curve through documentation and tech blogs.",
      tag: "Growth"
    },
    {
      title: "Community",
      icon: <Users size={24} />,
      description: "Contributing to the developer ecosystem and knowledge sharing.",
      tag: "Teamwork"
    }
  ];

  return (
    <Section id="interests" title="Interests & Hobbies" subtitle="Beyond Code">
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
        {interests.map((interest, index) => (
          <motion.div
            key={interest.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card group p-8 border-white/5 hover:border-purple-500/30 transition-all duration-500 rounded-none"
          >
            <div className="mb-6 text-purple-500 group-hover:text-cyan-400 transition-colors">
              {interest.icon}
            </div>
            <div className="uppercase tracking-widest text-[10px] font-bold text-slate-500 mb-2">{interest.tag}</div>
            <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-4">{interest.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {interest.description}
            </p>
            <div className="flex items-center gap-2 text-purple-500 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
              Read More <ChevronRight size={14} />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Interests;
