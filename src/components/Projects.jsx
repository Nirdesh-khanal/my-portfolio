import React, { useState } from "react";
import Section from "./Section";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Folder } from "lucide-react";

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "React", "Backend"];

  const projects = [
    {
      title: "Nexora",
      description:
        "A high-performance SaaS foundation built with React and Django REST Framework, featuring modular architecture, real-time analytics, and seamless API integrations.",
      tech: ["React", "Tailwind", "Node.js"],
      github: "https://github.com/Nirdesh-khanal/Nexora",
      live: "#",
      featured: true,
      category: "React",
    },
    {
      title: "EdgeChat",
      description:
        "Edge chat is a real-time chat application where you can connect and chat endlessly with your friends.",
      tech: ["React", "Socket.io", "Express"],
      github: "https://github.com/Nirdesh-khanal/edgechat",
      live: "#",
      featured: true,
      category: "React",
    },
    {
      title: "Expense Tracker Backend",
      description:
        "A robust backend for an expense tracking application built with Django REST Framework. Features transaction management, category organization, and real-time budget updates.",
      tech: ["Django REST Framework", "Python", "PostgreSQL"],
      github: "https://github.com/Nirdesh-khanal/expensetracker-backend",
      live: "#",
      featured: true,
      category: "Backend",
    },
  ];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <Section id="projects" title="Featured Projects" subtitle="Latest Work">
      {/* Category Filter */}
      <div className="flex gap-6 mb-8 justify-start">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`text-[10px] uppercase tracking-wider font-semibold transition-all duration-300 pb-1 border-b-2 ${
              filter === cat
                ? "text-purple-400 border-purple-500"
                : "text-slate-500 border-transparent hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="glass-card group flex flex-col h-full rounded-none border-white/5 hover:border-white/20 transition-all duration-500"
            >
              <div className="relative h-36 bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 group-hover:opacity-50 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Folder
                    size={36}
                    className="text-white/10 group-hover:text-white/20 transition-colors"
                  />
                </div>
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-white uppercase tracking-tight">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="text-slate-500 hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} />
                    </a>
                    {project.live !== "#" && (
                      <a
                        href={project.live}
                        className="text-slate-500 hover:text-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-slate-400 mb-5 text-xs leading-relaxed font-light flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[9px] font-bold uppercase tracking-wider text-purple-400/80 bg-purple-500/5 px-2 py-0.5 border border-purple-500/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
};

export default Projects;
