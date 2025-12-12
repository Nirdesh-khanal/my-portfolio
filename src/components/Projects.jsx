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
    <section id="projects" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
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
              className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-sky-500/30 transition-all hover:shadow-2xl hover:shadow-sky-500/10 group flex flex-col"
            >
               <div className="p-6 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-sky-500/20 group-hover:text-sky-400 transition-colors text-slate-400">
                    <Folder size={24} />
                  </div>
                  <div className="flex gap-4">
                    <a href={project.github} className="text-slate-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                      <Github size={20} />
                    </a>
                    {project.live !== "#" && (
                      <a href={project.live} className="text-slate-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-sky-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 mb-6 text-sm flex-grow line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-mono text-sky-400/80">
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
