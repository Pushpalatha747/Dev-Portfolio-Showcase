import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Code, Database, Server, ChevronDown, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const titles = [
  'Assistant Systems Engineer',
  'Backend Software Engineer',
  'AI & Cloud Enthusiast'
];

export function Hero() {
  const skills = ['Erlang', 'Python', 'AWS', 'Generative AI', 'Prompt Engineering', 'Amazon Q AI'];
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-10 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 bg-gradient-mesh opacity-50" />
      <div className="absolute top-1/4 -right-64 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -left-64 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-mono w-fit">
              <Terminal className="h-4 w-4" />
              <span>Available for opportunities</span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
                Hi, I'm <span className="text-gradient">Pushpalatha Jammu</span>
              </h1>
              <div className="text-lg md:text-2xl font-semibold text-muted-foreground h-[40px] flex items-center overflow-hidden">
                <div className="relative flex-1 h-full">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={titleIndex}
                      initial={{ y: 40, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -40, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute left-0 text-foreground whitespace-nowrap"
                    >
                      {titles[titleIndex]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-sm md:text-base font-mono text-primary/80 tracking-wide"
              >
                Assistant Systems Engineer | Backend Software Engineer | AI &amp; Cloud Enthusiast
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-xs md:text-sm font-mono text-muted-foreground/80 tracking-wide"
              >
                Backend Developer | Erlang | Python | Telecommunications | Continuous Learner
              </motion.p>
            </div>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg">
              I am an Assistant Systems Engineer at Tata Consultancy Services (TCS) working on the Ericsson R&D project. I specialize in backend development using Erlang and continuously expand my expertise in Python, Artificial Intelligence, Cloud Technologies, and Software Engineering. I am currently pursuing an Online MCA and actively learning Google Gemini Enterprise and Generative AI.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <Badge variant="glass" className="text-sm py-1 px-3">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="rounded-full px-8 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all">
                <a href="#projects">
                  <Code className="mr-2 h-4 w-4" /> View Projects
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 glass hover:bg-white/5 border-white/10">
                <a href="/resume.pdf" target="_blank">
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </a>
              </Button>
              <Button asChild variant="ghost" size="lg" className="rounded-full px-6">
                <a href="#contact">
                  <Mail className="mr-2 h-4 w-4" /> Contact Me
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Profile Image / Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center hidden md:flex"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Decorative elements behind image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-[2rem] rotate-6 opacity-20 blur-lg animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-[2rem] -rotate-3 opacity-30" />
              
              <div className="absolute inset-0 bg-card rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl glass-card">
                <img 
                  src="/images/profile.jpg" 
                  alt="Pushpalatha Jammu" 
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500 mix-blend-luminosity hover:mix-blend-normal"
                />
              </div>

              {/* Floating badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-6 top-12 glass p-3 rounded-xl border border-white/10 shadow-lg flex items-center gap-3 bg-card/80 backdrop-blur-md"
              >
                <div className="p-2 bg-blue-500/20 rounded-lg text-blue-500">
                  <Server className="h-5 w-5" />
                </div>
                <div className="text-sm font-medium">Backend Dev</div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-8 bottom-24 glass p-3 rounded-xl border border-white/10 shadow-lg flex items-center gap-3 bg-card/80 backdrop-blur-md"
              >
                <div className="p-2 bg-purple-500/20 rounded-lg text-purple-500">
                  <Database className="h-5 w-5" />
                </div>
                <div className="text-sm font-medium">Database Arch</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll down indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hidden md:flex"
        >
          <span className="text-xs tracking-widest uppercase font-mono">Scroll</span>
          <motion.div 
            animate={{ y: [0, 5, 0] }} 
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="h-4 w-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
