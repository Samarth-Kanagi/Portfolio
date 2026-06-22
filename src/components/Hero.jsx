import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useTheme } from '../ThemeContext';

const Hero = () => {
  const { dark } = useTheme();

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-5 sm:px-8 overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className={`absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] ${
          dark ? 'bg-brand-500/8' : 'bg-brand-500/5'
        }`} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium border ${
          dark
            ? 'bg-brand-500/10 text-brand-300 border-brand-500/20'
            : 'bg-brand-50 text-brand-600 border-brand-200'
        }`}
      >
        <Sparkles size={14} />
        Available for new opportunities
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight max-w-4xl ${
          dark ? 'text-white' : 'text-gray-900'
        }`}
      >
        Hi, I'm <span className="text-gradient">Samarth Kanagi</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className={`mt-2 text-xl sm:text-2xl font-semibold ${dark ? 'text-gray-400' : 'text-gray-500'}`}
      >
        Full Stack Web Developer
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`mt-6 max-w-2xl text-base sm:text-lg leading-relaxed ${dark ? 'text-gray-500' : 'text-gray-500'}`}
      >
        Hands-on experience in React, Node.js, Express.js & MongoDB — building responsive web applications, RESTful APIs, and scalable full-stack solutions.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="mt-10 flex flex-col sm:flex-row gap-4"
      >
        <a href="#projects" className="btn-primary text-base px-8 py-3.5">
          View My Work <ArrowRight size={18} />
        </a>
        <a href="#contact" className="btn-outline text-base px-8 py-3.5">
          Get In Touch
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
