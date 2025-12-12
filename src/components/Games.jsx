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
    <section id="games" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Games I Play</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {games.map((game, index) => (
              <motion.div
                key={game.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-950 rounded-2xl p-6 border border-slate-800 hover:border-slate-700 transition-all hover:shadow-xl hover:shadow-sky-500/10 flex flex-col items-center text-center group"
              >
                <div className="mb-4 p-3 bg-slate-900 rounded-full group-hover:bg-slate-800 transition-colors">
                  {game.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-sky-400 transition-colors">{game.name}</h3>
                <p className="text-slate-400 text-sm">{game.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Games;
