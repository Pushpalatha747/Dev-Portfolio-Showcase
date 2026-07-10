import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, FolderGit2, Sparkles, ListChecks } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function Projects() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Backend', 'Full Stack', 'Automation'];

  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "Designed and developed a responsive personal portfolio to showcase my professional experience, technical skills, education, certifications, and projects to recruiters and hiring managers.",
      image: "/images/project-portfolio.jpg",
      tags: ["React", "Tailwind CSS", "JavaScript"],
      category: "Full Stack",
      features: [
        "Single-page layout with sticky navigation and smooth scrolling",
        "Fully responsive design across mobile, tablet, and desktop",
        "Dark/light theme toggle with a modern, recruiter-friendly UI"
      ],
      skills: ["React", "Component-based UI design", "Responsive Web Design"],
      github: "https://github.com/pushpalatha-jammu"
    },
    {
      title: "Django Todo Application",
      description: "Developed a task management application with user authentication and full CRUD functionality, allowing users to create, update, delete, and organize daily tasks.",
      image: "/images/project-todo.jpg",
      tags: ["Python", "Django", "SQLite/PostgreSQL"],
      category: "Full Stack",
      features: [
        "User registration and authentication",
        "Create, update, delete, and organize tasks with due dates",
        "Server-rendered UI following Django MVT best practices"
      ],
      skills: ["Python", "Django", "Relational Database Design"],
      github: "https://github.com/pushpalatha-jammu"
    },
    {
      title: "Telecom Backend Development",
      description: "Contributed to backend modules for enterprise telecom applications at Tata Consultancy Services, working on bug fixes, feature enhancements, testing, debugging, and production support using Erlang/OTP within Agile teams.",
      image: "/images/project-telecom.jpg",
      tags: ["Erlang/OTP", "Git", "Jira"],
      category: "Backend",
      features: [
        "Bug fixes and feature enhancements on production telecom systems",
        "Testing, debugging, and production support",
        "Collaboration within Agile sprints using Jira and Git"
      ],
      skills: ["Erlang/OTP", "Production Support", "Agile Collaboration"],
      github: null
    },
    {
      title: "REST API Development",
      description: "Built secure REST APIs for backend applications using Django REST Framework, implementing authentication, validation, and structured API responses following industry best practices.",
      image: "/images/project-api.jpg",
      tags: ["Python", "Django REST Framework"],
      category: "Backend",
      features: [
        "Authentication and request validation",
        "Structured, consistent JSON API responses",
        "Adherence to REST and industry API design conventions"
      ],
      skills: ["Python", "Django REST Framework", "API Design"],
      github: "https://github.com/pushpalatha-jammu"
    },
    {
      title: "Python Automation Scripts",
      description: "Created automation scripts to simplify repetitive tasks such as file processing, data manipulation, and log analysis, improving efficiency and reducing manual work.",
      image: "/images/project-automation.jpg",
      tags: ["Python"],
      category: "Automation",
      features: [
        "Automated file processing and data manipulation",
        "Log analysis to speed up troubleshooting",
        "Reusable scripts that cut down manual, repetitive work"
      ],
      skills: ["Python", "Scripting", "Process Automation"],
      github: "https://github.com/pushpalatha-jammu"
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
                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="bg-muted/50 text-xs font-normal">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-foreground/70 mb-2">
                        <ListChecks className="h-3.5 w-3.5 text-primary" />
                        Key Features
                      </div>
                      <ul className="space-y-1.5">
                        {project.features.map((feature) => (
                          <li key={feature} className="text-xs text-muted-foreground flex gap-2">
                            <span className="text-primary mt-0.5">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-2 flex-1">
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-foreground/70 mb-2">
                        <Sparkles className="h-3.5 w-3.5 text-primary" />
                        Skills Demonstrated
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs font-normal border-primary/30 text-primary/90">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {project.github && (
                      <div className="flex items-center gap-3 pt-4 border-t border-border">
                        <Button asChild variant="ghost" size="sm" className="hover:bg-primary/10 hover:text-primary gap-2">
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" /> Code
                          </a>
                        </Button>
                      </div>
                    )}
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
