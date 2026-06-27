import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Database, Code2, Wrench, FileCode2, Brain } from 'lucide-react';
import { useTheme } from '../ThemeContext';

const skillCategories = [
  { title: 'Languages', icon: Code2, skills: ['Python', 'JavaScript', 'HTML5', 'CSS3'] },
  { title: 'Frontend', icon: Layout, skills: ['React.js', 'Redux (Basics)', 'Bootstrap 5', 'Tailwind CSS'] },
  { title: 'Database', icon: Database, skills: ['MySQL', 'MongoDB'] },
  { title: 'Backend', icon: Server, skills: ['Node.js', 'Express.js'] },
  { title: 'Deployment', icon: FileCode2, skills: ['Vercel', 'Render', 'Cloudinary', 'MongoDB Atlas'] },
  { title: 'Tools', icon: Wrench, skills: ['Git', 'GitHub', 'Postman'] },
  { title: 'Core Concepts', icon: Brain, skills: ["REST API", 'Responsive Web Design', 'Component-Based Architecture', 'API Integration', 'State Management (Basics)'] }
];

const Skills = () => {
  const { dark } = useTheme();

  return (
    <section id="skills" className="py-24 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-heading">My <span className="text-gradient">Skills</span></h2>
          <p className="section-subheading">Technologies and tools I use to bring ideas to life.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`glass-card p-6 group transition-colors duration-300 ${dark ? 'hover:border-brand-500/25' : 'hover:border-brand-300'
                  }`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${dark ? 'bg-brand-500/10 group-hover:bg-brand-500/20' : 'bg-brand-50 group-hover:bg-brand-100'
                    }`}>
                    <Icon size={20} className="text-brand-500" />
                  </div>
                  <h3 className={`text-lg font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, j) => (
                    <span key={j} className={`px-3 py-1 text-xs font-medium rounded-lg ${dark
                      ? 'text-gray-300 bg-white/[0.06] border border-white/[0.08]'
                      : 'text-gray-600 bg-gray-100 border border-gray-200'
                      }`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
