import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Code2, Award, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function About() {
  const highlights = [
    {
      icon: <Briefcase className="h-5 w-5 text-blue-500" />,
      title: 'Experience',
      desc: '2+ Years Industry Experience'
    },
    {
      icon: <Code2 className="h-5 w-5 text-purple-500" />,
      title: 'Focus',
      desc: 'Backend & Telecommunications'
    },
    {
      icon: <GraduationCap className="h-5 w-5 text-green-500" />,
      title: 'Education',
      desc: 'Pursuing Online MCA'
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/50 border border-border text-sm font-medium mb-4"
          >
            <Award className="h-4 w-4 text-primary" />
            <span>About Me</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold"
          >
            Passionate About <span className="text-gradient">Problem Solving</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              I am an <strong className="text-foreground">Assistant Systems Engineer</strong> at Tata Consultancy Services (TCS) with over 2 years of professional software development experience, specializing in backend architecture and telecommunications systems.
            </p>
            <p>
              My expertise lies in building robust applications using <strong className="text-foreground">Python, Django, and Erlang/OTP</strong>. I thrive on solving complex technical challenges and optimizing system performance for scale. I'm deeply passionate about cloud technologies and continuously expanding my skill set.
            </p>
            <p>
              Currently, I am balancing my full-time role with academic growth by pursuing an Online MCA. I am driven by the desire to contribute meaningfully to innovative projects, learn from talented peers, and grow as a software engineer.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 grid gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <Card className="glass-card hover:bg-accent/5 transition-colors border-white/5">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-background/50 border border-white/5">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
