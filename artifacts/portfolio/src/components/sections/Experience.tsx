import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function Experience() {
  const responsibilities = [
    "Backend development using Erlang",
    "Telecom software development",
    "Production support",
    "Bug fixing",
    "Feature enhancements",
    "Unit testing",
    "Git & Jira for version control and task tracking",
    "Agile development and sprint ceremonies",
    "Cross-functional collaboration with Ericsson R&D teams"
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/50 border border-border text-sm font-medium mb-4"
          >
            <Briefcase className="h-4 w-4 text-primary" />
            <span>Professional Journey</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold"
          >
            Work <span className="text-gradient">Experience</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border md:block" />

          {/* Experience Item */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative pl-8 md:pl-24"
          >
            {/* Timeline Dot */}
            <div className="absolute left-[-4px] md:left-[28px] top-6 h-3 w-3 rounded-full bg-primary ring-4 ring-primary/20" />

            <Card className="glass-card border-white/5 overflow-hidden">
              <div className="h-2 w-full bg-gradient-to-r from-blue-500 to-purple-500" />
              <CardContent className="p-6 sm:p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Assistant Systems Engineer</h3>
                    <div className="text-lg font-medium text-primary mt-1">Tata Consultancy Services (TCS)</div>
                    <div className="text-sm text-muted-foreground mt-1">Ericsson R&D, Telecommunications</div>
                  </div>
                  
                  <div className="flex flex-col gap-2 md:items-end text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>November 2023 - Present</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>India</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <p className="text-muted-foreground leading-relaxed">
                    Backend development for telecommunications systems on the Ericsson R&D project, working with Erlang across production support, bug fixing, feature enhancements, and unit testing within Agile teams.
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <span className="h-px w-8 bg-border inline-block" />
                    Key Responsibilities
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-border flex flex-wrap gap-2">
                  {['Erlang', 'Telecom', 'Ericsson R&D', 'Agile', 'Git', 'Jira'].map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
