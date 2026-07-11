import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, FolderGit2, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function Projects() {
  const project = {
    title: "Personal Portfolio Website",
    description: "Designed and developed a responsive portfolio using React, Vite, TypeScript, and Tailwind CSS. Deployed on Vercel to showcase my professional experience, technical skills, certifications, achievements, and career journey.",
    image: "/images/project-portfolio.jpg",
    tags: ["React", "Vite", "TypeScript", "Tailwind CSS", "Vercel"],
    github: "https://github.com/Pushpalatha747",
    live: "#"
  };

  return (
    <section id="projects" className="py-24 relative bg-card/20">
      <div className="container mx-auto px-6 max-w-4xl">
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
            className="text-3xl md:text-4xl font-bold"
          >
            Technical <span className="text-gradient">Projects</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mx-auto"
        >
          <Card className="glass-card overflow-hidden border-white/10 hover:border-primary/30 transition-all duration-300 group">
            <div className="relative h-52 overflow-hidden">
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10 mix-blend-overlay" />
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-muted/50 text-xs font-normal">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <Button asChild variant="ghost" size="sm" className="hover:bg-primary/10 hover:text-primary gap-2">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                </Button>
                <Button asChild variant="ghost" size="sm" className="hover:bg-primary/10 hover:text-primary gap-2">
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" /> Live Portfolio
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-2 text-sm text-muted-foreground text-center mt-10"
        >
          <Sparkles className="h-4 w-4 text-primary" />
          More software engineering projects will be added as I continue building and publishing them.
        </motion.p>
      </div>
    </section>
  );
}
