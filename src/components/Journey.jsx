import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import { useTheme } from '../ThemeContext';

const education = [
  {
    degree: 'B.Tech in Technology',
    institution: 'N B Navale Sinhgad College of Engineering, Solapur',
    year: 'Pass Out: 2026',
    score: 'CGPA: 8.56 / 10',
  },
  {
    degree: 'Higher Secondary (12th)',
    institution: 'C B Khedagi College of Science, Akkalkot',
    year: 'Pass Out: 2022',
    score: 'Percentage: 71.83%',
  },
];

const certifications = [
  {
    title: 'Google Cloud Generative AI Fundamentals',
    year: '2026',
    description: 'Completed training in Generative AI, Large Language Models, Responsible AI, prompt engineering, and Google Cloud AI tools.',
  },
  {
    title: 'IBM SkillsBuild AI Fundamentals',
    year: '2026',
    description: 'Gained knowledge of AI, Machine Learning, Deep Learning, Neural Networks, and AI Ethics through IBM SkillsBuild training.',
  },
];

const Journey = () => {
  const { dark } = useTheme();

  return (
    <section id="journey" className="py-24 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-heading">My <span className="text-gradient">Journey</span></h2>
          <p className="section-subheading">Education and certifications that shaped my career.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                dark ? 'bg-brand-500/10' : 'bg-brand-50'
              }`}>
                <GraduationCap size={20} className="text-brand-500" />
              </div>
              <h3 className={`text-xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>Education</h3>
            </div>

            <div className={`relative pl-6 border-l space-y-8 ${dark ? 'border-white/[0.08]' : 'border-gray-200'}`}>
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative"
                >
                  <div className={`absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-brand-500 border-2 ${
                    dark ? 'border-[#0c0a1d]' : 'border-gray-50'
                  }`} />
                  <div className="glass-card p-5">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h4 className={`font-bold text-base ${dark ? 'text-white' : 'text-gray-900'}`}>{edu.degree}</h4>
                      <span className={`text-xs whitespace-nowrap ${dark ? 'text-gray-500' : 'text-gray-400'}`}>{edu.year}</span>
                    </div>
                    <p className={`text-sm mb-2 ${dark ? 'text-gray-400' : 'text-gray-500'}`}>{edu.institution}</p>
                    <span className={`inline-block px-2.5 py-1 text-xs font-medium rounded-lg ${
                      dark
                        ? 'text-brand-300 bg-brand-500/10 border border-brand-500/20'
                        : 'text-brand-600 bg-brand-50 border border-brand-200'
                    }`}>
                      {edu.score}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                dark ? 'bg-brand-500/10' : 'bg-brand-50'
              }`}>
                <Award size={20} className="text-brand-500" />
              </div>
              <h3 className={`text-xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>Certifications</h3>
            </div>

            <div className={`relative pl-6 border-l space-y-8 ${dark ? 'border-white/[0.08]' : 'border-gray-200'}`}>
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative"
                >
                  <div className={`absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-brand-500 border-2 ${
                    dark ? 'border-[#0c0a1d]' : 'border-gray-50'
                  }`} />
                  <div className="glass-card p-5">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h4 className={`font-bold text-base ${dark ? 'text-white' : 'text-gray-900'}`}>{cert.title}</h4>
                      <span className={`text-xs whitespace-nowrap ${dark ? 'text-gray-500' : 'text-gray-400'}`}>{cert.year}</span>
                    </div>
                    <p className={`text-sm leading-relaxed ${dark ? 'text-gray-400' : 'text-gray-500'}`}>{cert.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
