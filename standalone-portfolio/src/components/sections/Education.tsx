import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, CheckCircle, GraduationCap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function Education() {
  const certifications = [
    {
      title: "AWS Cloud Foundations",
      issuer: "Amazon Web Services"
    },
    {
      title: "Cisco Networking Academy",
      issuer: "Cisco"
    },
    {
      title: "Machine Learning Certification",
      issuer: "Stanford / Coursera"
    },
    {
      title: "Python Certification",
      issuer: "Python Institute"
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold">Education</h2>
            </div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card border-white/5 relative overflow-hidden group">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary group-hover:w-2 transition-all" />
                  <CardContent className="p-6 pl-8">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">Master of Computer Applications (MCA)</h3>
                      <span className="text-xs font-mono bg-primary/20 text-primary px-2 py-1 rounded-md">Pursuing</span>
                    </div>
                    <p className="text-muted-foreground flex items-center gap-2 mt-2">
                      <BookOpen className="h-4 w-4" /> Online Program
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <Card className="glass-card border-white/5 relative overflow-hidden group opacity-80 hover:opacity-100 transition-opacity">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-muted group-hover:w-2 transition-all" />
                  <CardContent className="p-6 pl-8">
                    <h3 className="text-xl font-bold mb-2">Bachelor of Science</h3>
                    <p className="text-muted-foreground flex items-center gap-2">
                      <BookOpen className="h-4 w-4" /> Computer Science
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-purple-500/10 text-purple-500">
                <Award className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold">Certifications</h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="glass-card border-white/5 h-full hover:border-purple-500/30 transition-colors group">
                    <CardContent className="p-5 flex items-start gap-4">
                      <CheckCircle className="h-5 w-5 text-purple-500 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-sm mb-1 group-hover:text-purple-400 transition-colors">{cert.title}</h4>
                        <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
