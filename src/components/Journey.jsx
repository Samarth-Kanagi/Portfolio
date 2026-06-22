import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase } from 'lucide-react';
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

const experience = [
  {
    role: 'Full Stack Web Developer Intern',
    company: 'ScaleFull Technologies LLP | Pune',
    period: 'Dec 2025 – Jun 2026',
    points: [
      'Engineered an AI-integrated full-stack web application utilizing React.js, Node.js, and MySQL, improving system scalability and data relational mapping.',
      'Implemented secure JWT Authentication protocols to safeguard user data and restrict unauthorized access.',
      'Designed and developed a comprehensive Administrative Dashboard for streamlined data monitoring and system management.',
      'Managed deployment workflows and backend services within a Linux-based environment to ensure consistent application uptime.'
    ],
  }
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
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${dark ? 'bg-brand-500/10' : 'bg-brand-50'
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
                  <div className={`absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-brand-500 border-2 ${dark ? 'border-[#0c0a1d]' : 'border-gray-50'
                    }`} />
                  <div className="glass-card p-5">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h4 className={`font-bold text-base ${dark ? 'text-white' : 'text-gray-900'}`}>{edu.degree}</h4>
                      <span className={`text-xs whitespace-nowrap ${dark ? 'text-gray-500' : 'text-gray-400'}`}>{edu.year}</span>
                    </div>
                    <p className={`text-sm mb-2 ${dark ? 'text-gray-400' : 'text-gray-500'}`}>{edu.institution}</p>
                    <span className={`inline-block px-2.5 py-1 text-xs font-medium rounded-lg ${dark
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

          {/* Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${dark ? 'bg-brand-500/10' : 'bg-brand-50'
                }`}>
                <Briefcase size={20} className="text-brand-500" />
              </div>
              <h3 className={`text-xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>Experience</h3>
            </div>

            <div className={`relative pl-6 border-l space-y-8 ${dark ? 'border-white/[0.08]' : 'border-gray-200'}`}>
              {experience.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative"
                >
                  <div className={`absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-brand-500 border-2 ${dark ? 'border-[#0c0a1d]' : 'border-gray-50'
                    }`} />
                  <div className="glass-card p-5">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-1">
                      <h4 className={`font-bold text-base ${dark ? 'text-white' : 'text-gray-900'}`}>{exp.role}</h4>
                      <span className={`text-xs whitespace-nowrap mt-1 sm:mt-0 ${dark ? 'text-gray-500' : 'text-gray-400'}`}>{exp.period}</span>
                    </div>
                    <p className={`text-sm font-medium mb-3 ${dark ? 'text-brand-400' : 'text-brand-600'}`}>{exp.company}</p>
                    <ul className="space-y-2">
                      {exp.points.map((point, idx) => (
                        <li key={idx} className={`flex gap-2 text-sm leading-relaxed ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
                          <span className="text-brand-500 mt-1 shrink-0">▸</span>
                          {point}
                        </li>
                      ))}
                    </ul>
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
