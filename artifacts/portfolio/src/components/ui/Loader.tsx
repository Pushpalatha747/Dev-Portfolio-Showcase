import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const interval = 20;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setProgress(Math.min((currentStep / steps) * 100, 100));
      
      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(onComplete, 500); // Wait half a second before hiding
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background">
      <motion.div 
        className="text-4xl md:text-6xl font-mono font-bold mb-8 tracking-tighter"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="text-primary">&lt;</span>
        PJ
        <span className="text-primary">/&gt;</span>
      </motion.div>
      
      <div className="w-64 md:w-80 h-1 bg-muted rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"
          style={{ width: `${progress}%` }}
          initial={{ width: '0%' }}
        />
      </div>
      
      <motion.div 
        className="mt-4 text-sm font-mono text-muted-foreground flex justify-between w-64 md:w-80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <span>Initializing System</span>
        <span>{Math.round(progress)}%</span>
      </motion.div>
    </div>
  );
}
