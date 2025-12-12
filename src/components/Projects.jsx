import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Expense Tracker",
      description: "A comprehensive expense tracking application built with React and Django REST Framework. Features transaction management, category organization, and real-time budget updates.",
      tech: ["React", "Django REST Framework", "Tailwind"],
      github: "https://github.com/nirdesh-khanal/expense-tracker",
      live: "#",
      featured: true
    },
    {
      title: "To-Do App",
      description: "A sleek and responsive task management application designed for daily productivity. Utilizes local storage for data persistence and a drag-and-drop interface.",
      tech: ["React", "JavaScript", "CSS3"],
      github: "https://github.com/nirdesh-khanal/todo-app",
      live: "#",
      featured: false
    },
    {
      title: "C Mini-Projects",
      description: "A collection of C programs demonstrating understanding of core concepts like Linked Lists, Stacks, Queues, and File Handling.",
      tech: ["C", "TDM-GCC", "Make"],
      github: "https://github.com/nirdesh-khanal/c-projects",
      live: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900/0 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">Featured Projects</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, ranging from web applications to system-level programming.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card rounded-xl overflow-hidden hover:bg-white/5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] border-t border-white/10 group flex flex-col"
            >
               <div className="p-6 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-white/5 rounded-lg group-hover:bg-sky-500/20 group-hover:text-sky-400 transition-colors text-slate-400 ring-1 ring-white/10">
                    <Folder size={24} />
                  </div>
                  <div className="flex gap-4">
                    <a href={project.github} className="text-slate-400 hover:text-white transition-colors hover:scale-110" target="_blank" rel="noopener noreferrer">
                      <Github size={20} />
                    </a>
                    {project.live !== "#" && (
                      <a href={project.live} className="text-slate-400 hover:text-white transition-colors hover:scale-110" target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-sky-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 mb-6 text-sm flex-grow line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-mono text-sky-400/80 bg-sky-500/10 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
