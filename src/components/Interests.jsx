import React from 'react';
import { motion } from 'framer-motion';
import { Book, Lightbulb, Users, Gamepad2 } from 'lucide-react';

const Interests = () => {
  const interests = [
    {
      title: "Problem Solving",
      icon: <Lightbulb className="w-8 h-8 text-amber-400" />,
      description: "Strategic thinking through chess and competitive gaming, always seeking optimal solutions.",
      color: "amber"
    },
    {
      title: "Creative Exploration",
      icon: <Gamepad2 className="w-8 h-8 text-purple-400" />,
      description: "Exploring vast open worlds like Genshin Impact, fueling curiosity and imagination.",
      color: "purple"
    },
    {
      title: "Continuous Learning",
      icon: <Book className="w-8 h-8 text-sky-400" />,
      description: "Reading tech blogs, documentation, and taking online courses to stay ahead of the curve.",
      color: "sky"
    },
    {
      title: "Community Engagement",
      icon: <Users className="w-8 h-8 text-green-400" />,
      description: "Contributing to open source projects and helping fellow developers grow.",
      color: "green"
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      amber: {
        icon: "text-amber-400 group-hover:text-amber-300",
        bg: "group-hover:bg-amber-500/20",
        ring: "group-hover:ring-amber-500/50",
        shadow: "hover:shadow-[0_0_20px_rgba(251,191,36,0.2)]",
        glow: "drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]",
        title: "group-hover:text-amber-400"
      },
      purple: {
        icon: "text-purple-400 group-hover:text-purple-300",
        bg: "group-hover:bg-purple-500/20",
        ring: "group-hover:ring-purple-500/50",
        shadow: "hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]",
        glow: "drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]",
        title: "group-hover:text-purple-400"
      },
      sky: {
        icon: "text-sky-400 group-hover:text-sky-300",
        bg: "group-hover:bg-sky-500/20",
        ring: "group-hover:ring-sky-500/50",
        shadow: "hover:shadow-[0_0_20px_rgba(56,189,248,0.2)]",
        glow: "drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]",
        title: "group-hover:text-sky-400"
      },
      green: {
        icon: "text-green-400 group-hover:text-green-300",
        bg: "group-hover:bg-green-500/20",
        ring: "group-hover:ring-green-500/50",
        shadow: "hover:shadow-[0_0_20px_rgba(74,222,128,0.2)]",
        glow: "drop-shadow-[0_0_8px_rgba(74,222,128,0.5)]",
        title: "group-hover:text-green-400"
      }
    };
    return colorMap[color];
  };

  return (
    <section id="interests" className="py-20 bg-slate-900/0 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
            Interests & Hobbies
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {interests.map((interest, index) => {
              const colors = getColorClasses(interest.color);
              return (
                <motion.div
                  key={interest.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`glass-card rounded-2xl p-6 hover:bg-white/5 transition-all duration-300 ${colors.shadow} border-t border-white/10 group`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-4 rounded-full bg-white/5 ${colors.bg} transition-all duration-300 ring-1 ring-white/10 ${colors.ring} flex-shrink-0`}>
                      {React.cloneElement(interest.icon, { 
                        className: `w-8 h-8 ${colors.icon} transition-colors ${colors.glow}` 
                      })}
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-xl font-semibold mb-2 text-white ${colors.title} transition-colors`}>
                        {interest.title}
                      </h3>
                      <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors leading-relaxed">
                        {interest.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Interests;
