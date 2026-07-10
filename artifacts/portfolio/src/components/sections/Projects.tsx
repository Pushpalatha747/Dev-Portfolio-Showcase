import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, FolderGit2, Layers } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function Projects() {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'Backend', 'Full Stack', 'Automation'];

  const projects = [
    {
      title: "Telecom Backend Development",
      description: "Highly scalable, fault-tolerant backend infrastructure for telecommunication services using Erlang/OTP. Handles high concurrent connections with minimal latency.",
      image: "/images/project-telecom.jpg",
      tags: ["Erlang/OTP", "Distributed Systems", "PostgreSQL", "Backend"],
      category: "Backend",
      github: "#",
      demo: "#"
    },
    {
      title: "Django Todo Application",
      description: "A robust task management REST API and web application built with Django. Features include user authentication, task categorization, priority levels, and due dates.",
      image: "/images/project-todo.jpg",
      tags: ["Python", "Django", "REST API", "Full Stack"],
      category: "Full Stack",
      github: "#",
      demo: "#"
    },
    {
      title: "REST API Architecture",
      description: "Comprehensive enterprise RESTful API built following best practices. Includes JWT authentication, rate limiting, comprehensive error handling, and automated testing.",
      image: "/images/project-api.jpg",
      tags: ["Python", "API Design", "Security", "Backend"],
      category: "Backend",
      github: "#",
      demo: "#"
    },
    {
      title: "Python Automation Suite",
      description: "A collection of sophisticated automation scripts for system administration, data processing, and CI/CD pipeline integration, significantly reducing manual overhead.",
      image: "/images/project-automation.jpg",
      tags: ["Python", "Shell Scripting", "Jenkins", "Automation"],
      category: "Automation",
      github: "#",
      demo: "#"
    },
    {
      title: "Personal Portfolio Website",
      description: "Premium, responsive single-page application built with modern web technologies. Features a dark theme, glassmorphism UI, and smooth framer-motion animations.",
      image: "/images/project-portfolio.jpg",
      tags: ["React", "Tailwind CSS", "Framer Motion", "Full Stack"],
      category: "Full Stack",
      github: "#",
      demo: "#"
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 relative bg-card/20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col items-center mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/50 border border-border text-sm font-medium mb-4"
          >
            <FolderGit2 className="h-4 w-4 text-primary" />
            <span>Featured Work</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-8"
          >
            Technical <span className="text-gradient">Projects</span>
          </motion.h2>

          {/* Filters */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2"
          >
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={filter === cat ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(cat)}
                className={`rounded-full transition-all ${
                  filter === cat 
                    ? 'shadow-[0_0_15px_rgba(59,130,246,0.3)]' 
                    : 'glass hover:bg-white/5 border-white/10'
                }`}
              >
                {cat}
              </Button>
            ))}
          </motion.div>
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.title}
                className="group"
              >
                <Card className="h-full glass-card overflow-hidden border-white/10 flex flex-col hover:border-primary/30 transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10 mix-blend-overlay" />
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-6 flex-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="bg-muted/50 text-xs font-normal">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center gap-3 pt-4 border-t border-border">
                      <Button asChild variant="ghost" size="sm" className="hover:bg-primary/10 hover:text-primary gap-2">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" /> Code
                        </a>
                      </Button>
                      <Button asChild variant="ghost" size="sm" className="hover:bg-primary/10 hover:text-primary gap-2">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" /> Live Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
