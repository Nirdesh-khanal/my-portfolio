import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Sword, Target, Brain } from 'lucide-react';

const Games = () => {
  const games = [
    {
      name: "Genshin Impact",
      icon: <Sword className="w-8 h-8 text-sky-400" />,
      description: "Open-world action RPG"
    },
    {
      name: "Free Fire",
      icon: <Target className="w-8 h-8 text-sky-400" />,
      description: "Battle Royale"
    },
    {
      name: "Among Us",
      icon: <Gamepad2 className="w-8 h-8 text-sky-400" />,
      description: "Social Deduction"
    },
    {
      name: "Chess",
      icon: <Brain className="w-8 h-8 text-sky-400" />,
      description: "Strategy"
    }
  ];

  return (
    <section id="games" className="py-20 bg-slate-900/0 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">Games I Play</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {games.map((game, index) => (
              <motion.div
                key={game.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-card rounded-2xl p-6 hover:bg-white/5 transition-all duration-300 hover:shadow-[0_0_20px_rgba(56,189,248,0.2)] border-t border-white/10 flex flex-col items-center text-center group"
              >
                <div className="mb-4 p-4 rounded-full bg-white/5 group-hover:bg-sky-500/20 transition-all duration-300 ring-1 ring-white/10 group-hover:ring-sky-500/50">
                  {React.cloneElement(game.icon, { className: "w-8 h-8 text-sky-400 group-hover:text-sky-300 transition-colors drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]" })}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-sky-400 transition-colors">{game.name}</h3>
                <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">{game.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Games;
