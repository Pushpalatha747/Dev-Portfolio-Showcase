import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Star, Sparkles as SparkleIcon, Award, GraduationCap, Bot, BadgeCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function Highlights() {
  const highlights = [
    { icon: '🏆', label: 'A Band Performer (FY2025)' },
    { icon: '🏆', label: 'A Band Performer (FY2026)' },
    { icon: '🥇', label: 'Best Performer Award' },
    { icon: '⭐', label: 'Star of the Month Award' },
    { icon: '🌟', label: 'On-the-Spot Team Award' },
    { icon: '🏅', label: 'Multiple TCS Recognition Badges' },
    { icon: '🎓', label: 'Pursuing Online MCA' },
    { icon: '🤖', label: 'Learning Google Gemini Enterprise' }
  ];

  const achievements = [
    { icon: <Trophy className="h-6 w-6" />, title: 'A Band Performer', desc: 'FY2025', color: 'text-yellow-400 bg-yellow-500/10' },
    { icon: <Trophy className="h-6 w-6" />, title: 'A Band Performer', desc: 'FY2026', color: 'text-yellow-400 bg-yellow-500/10' },
    { icon: <Medal className="h-6 w-6" />, title: 'Best Performer Award', desc: 'TCS — Ericsson R&D', color: 'text-blue-400 bg-blue-500/10' },
    { icon: <Star className="h-6 w-6" />, title: 'Star of the Month Award', desc: 'TCS — Ericsson R&D', color: 'text-purple-400 bg-purple-500/10' },
    { icon: <SparkleIcon className="h-6 w-6" />, title: 'On-the-Spot Team Award', desc: 'TCS — Ericsson R&D', color: 'text-pink-400 bg-pink-500/10' },
    { icon: <BadgeCheck className="h-6 w-6" />, title: 'Recognition Badges', desc: 'Multiple TCS badges', color: 'text-green-400 bg-green-500/10' }
  ];

  return (
    <section id="highlights" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col items-center mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/50 border border-border text-sm font-medium mb-4"
          >
            <Award className="h-4 w-4 text-primary" />
            <span>Recognition</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold"
          >
            Professional <span className="text-gradient">Highlights</span>
          </motion.h2>
        </div>

        {/* Highlights badge cloud */}
        <div className="flex flex-wrap justify-center gap-3 mb-20">
          {highlights.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              whileHover={{ y: -4, scale: 1.03 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-white/10 text-sm font-medium hover:border-primary/30 transition-colors"
            >
              <span className="text-base leading-none">{item.icon}</span>
              <span>{item.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Achievements cards */}
        <div className="flex flex-col items-center mb-10 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold flex items-center gap-2"
          >
            <GraduationCap className="hidden" />
            <span>Key <span className="text-gradient">Achievements</span></span>
          </motion.h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, idx) => (
            <motion.div
              key={`${item.title}-${item.desc}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <Card className="h-full glass-card border-white/5 hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className={`p-3 rounded-xl shrink-0 ${item.color}`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground mt-0.5">{item.desc}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
