import React from 'react';
import { motion } from 'framer-motion';
import { ThemeProvider, useTheme } from './ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Footer from './components/Footer';

const BackgroundFlow = () => {
  const { dark } = useTheme();
  if (!dark) {
    return (
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gray-50" />
        <motion.div
          animate={{ x: [0, 80, 0], y: [0, -60, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[10%] left-[15%] w-[500px] h-[500px] rounded-full bg-brand-100/40 blur-[130px]"
        />
        <motion.div
          animate={{ x: [0, -60, 0], y: [0, 80, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          className="absolute top-[50%] right-[10%] w-[400px] h-[400px] rounded-full bg-purple-100/40 blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, 50, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 6 }}
          className="absolute bottom-[10%] left-[40%] w-[350px] h-[350px] rounded-full bg-blue-100/30 blur-[110px]"
        />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[#0c0a1d]" />
      <motion.div
        animate={{ x: [0, 80, 0], y: [0, -60, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[10%] left-[15%] w-[500px] h-[500px] rounded-full bg-brand-600/10 blur-[130px]"
      />
      <motion.div
        animate={{ x: [0, -60, 0], y: [0, 80, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        className="absolute top-[50%] right-[10%] w-[400px] h-[400px] rounded-full bg-purple-600/8 blur-[120px]"
      />
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, 50, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 6 }}
        className="absolute bottom-[10%] left-[40%] w-[350px] h-[350px] rounded-full bg-indigo-500/6 blur-[110px]"
      />
    </div>
  );
};

function AppContent() {
  return (
    <div className="min-h-screen font-sans selection:bg-brand-500/30 selection:text-brand-200 relative">
      <BackgroundFlow />
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
