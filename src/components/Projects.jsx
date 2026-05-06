import React from "react";
import Section from "./Section";
import { motion } from "framer-motion";
import { Github, ExternalLink, Folder } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Nexora",
      description:
        "A high-performance SaaS foundation built with React and Django REST Framework, featuring modular architecture, real-time analytics, and seamless API integrations.",
      tech: ["React", "Tailwind", "Node.js"],
      github: "https://github.com/Nirdesh-khanal/Nexora",
      live: "#",
      featured: true,
    },
    {
      title: "EdgeChat",
      description:
        "Edge chat is a real-time chat application where you can connect and chat endlessly with your friends.",
      tech: ["React", "Socket.io", "Express"],
      github: "https://github.com/Nirdesh-khanal/edgechat",
      live: "#",
      featured: true,
    },
    {
      title: "Expense Tracker Backend",
      description:
        "A robust backend for an expense tracking application built with Django REST Framework. Features transaction management, category organization, and real-time budget updates.",
      tech: ["Django REST Framework", "Python", "PostgreSQL"],
      github: "https://github.com/Nirdesh-khanal/expensetracker-backend",
      live: "#",
      featured: true,
    },
  ];

  return (
    <Section id="projects" title="Featured Projects" subtitle="Latest Work">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card group flex flex-col h-full rounded-none border-white/5 hover:border-white/20 transition-all duration-500"
          >
            <div className="relative h-48 bg-slate-900 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 group-hover:opacity-50 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Folder
                  size={48}
                  className="text-white/10 group-hover:text-white/20 transition-colors"
                />
              </div>
            </div>

            <div className="p-8 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-white uppercase tracking-tight">
                  {project.title}
                </h3>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="text-slate-500 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={20} />
                  </a>
                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      className="text-slate-500 hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-slate-400 mb-8 text-sm leading-relaxed flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-bold uppercase tracking-widest text-purple-400/80 bg-purple-500/5 px-2 py-1 border border-purple-500/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
