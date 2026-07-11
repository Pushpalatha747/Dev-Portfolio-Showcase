import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Terminal, Database, Cloud, Wrench, Layers, Code2, Sparkles } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: 'Programming',
      icon: <Code2 className="h-5 w-5 text-blue-400" />,
      skills: [
        { name: 'Erlang', level: 85 },
        { name: 'Python', level: 85 },
        { name: 'JavaScript', level: 75 }
      ]
    },
    {
      title: 'Web',
      icon: <Layers className="h-5 w-5 text-purple-400" />,
      skills: [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
        { name: 'React', level: 80 },
        { name: 'Django', level: 80 }
      ]
    },
    {
      title: 'Database',
      icon: <Database className="h-5 w-5 text-green-400" />,
      skills: [
        { name: 'SQL', level: 85 }
      ]
    },
    {
      title: 'Tools',
      icon: <Wrench className="h-5 w-5 text-orange-400" />,
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Jira', level: 85 },
        { name: 'Linux', level: 80 }
      ]
    },
    {
      title: 'Cloud & AI',
      icon: <Cloud className="h-5 w-5 text-sky-400" />,
      items: [
        'AWS Cloud Foundations',
        'Amazon Q AI',
        'Google Gemini Enterprise (Learning)',
        'Generative AI',
        'Prompt Engineering'
      ]
    },
    {
      title: 'Concepts',
      icon: <Terminal className="h-5 w-5 text-pink-400" />,
      items: [
        'Object-Oriented Programming', 
        'Data Structures', 
        'Distributed Systems', 
        'Agile Methodology', 
        'Problem Solving'
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative bg-card/20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/50 border border-border text-sm font-medium mb-4"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span>Technical Arsenal</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold"
          >
            Tools & <span className="text-gradient">Technologies</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="h-full glass-card hover:border-primary/30 transition-colors duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-background/50 border border-white/5">
                      {category.icon}
                    </div>
                    <h3 className="font-semibold text-lg">{category.title}</h3>
                  </div>

                  {category.skills ? (
                    <div className="space-y-4">
                      {category.skills.map((skill) => (
                        <div key={skill.name} className="space-y-1.5">
                          <div className="flex justify-between text-sm">
                            <span className="font-medium text-foreground/80">{skill.name}</span>
                            <span className="text-muted-foreground">{skill.level}%</span>
                          </div>
                          <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.2 }}
                              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {category.items?.map((item) => (
                        <Badge key={item} variant="secondary" className="bg-muted/50 hover:bg-muted font-normal text-sm py-1">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
