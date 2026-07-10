import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, Send, MessageSquare } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      toast({
        title: "Message Sent Successfully",
        description: "Thank you for reaching out. I'll get back to you shortly.",
      });
      
      // Reset form success state after a few seconds
      setTimeout(() => setIsSuccess(false), 3000);
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "pushpalatha.jammu@example.com",
      href: "mailto:pushpalatha.jammu@example.com"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "India",
      href: "#"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/pushpalatha-jammu",
      href: "#"
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      value: "github.com/pushpalatha-jammu",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-24 relative bg-card/10">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/50 border border-border text-sm font-medium mb-4"
          >
            <MessageSquare className="h-4 w-4 text-primary" />
            <span>Get In Touch</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold"
          >
            Let's Build Something <span className="text-gradient">Together</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed mb-8">
              Whether you have a question, a project opportunity, or just want to say hi, my inbox is always open. I'll try my best to get back to you!
            </p>

            <div className="grid gap-4">
              {contactInfo.map((info, idx) => (
                <a 
                  key={info.label} 
                  href={info.href}
                  target={info.href !== "#" && info.href !== "mailto:pushpalatha.jammu@example.com" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <Card className="glass-card hover:bg-accent/5 transition-colors border-white/5">
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground">{info.label}</h4>
                        <p className="font-semibold text-foreground group-hover:text-primary transition-colors">{info.value}</p>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <Card className="glass-card border-white/10">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Your Name</label>
                      <Input 
                        id="name" 
                        required 
                        placeholder="John Doe" 
                        className="bg-background/50 border-white/10 focus-visible:ring-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Your Email</label>
                      <Input 
                        id="email" 
                        type="email" 
                        required 
                        placeholder="john@example.com"
                        className="bg-background/50 border-white/10 focus-visible:ring-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                    <Input 
                      id="subject" 
                      required 
                      placeholder="Project Opportunity"
                      className="bg-background/50 border-white/10 focus-visible:ring-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <Textarea 
                      id="message" 
                      required 
                      placeholder="I'd like to discuss a potential collaboration..."
                      className="min-h-[150px] bg-background/50 border-white/10 focus-visible:ring-primary resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full sm:w-auto px-8" 
                    disabled={isSubmitting || isSuccess}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <Send className="h-4 w-4" />
                        </motion.div>
                        Sending...
                      </span>
                    ) : isSuccess ? (
                      <span className="flex items-center gap-2 text-green-400">
                        Message Sent!
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="h-4 w-4" /> Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
