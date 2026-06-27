import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";
import { useTheme } from "../ThemeContext";

const projects = [
  {
    title: "HoshiWorks",
    subtitle: "AI-Powered Job Portal",
    period: "Recent",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini API", "CSS"],
    points: [
      "Developed a full-stack job portal enabling recruiters to post jobs and candidates to search and apply for opportunities.",
      "Implemented secure JWT Authentication with role-based access control for recruiters and job seekers.",
      "Built features for job posting, application management, profile updates, and resume uploads.",
      "Integrated the Google Gemini API to analyze uploaded resumes, provide ATS-friendly feedback, identify missing skills, and suggest improvements for better job applications.",
      "Designed responsive user interfaces and developed RESTful APIs for efficient communication between the frontend and backend."
    ],
    demo: "#",
    github: "https://github.com/Samarth-Kanagi/JobPortal-AI_Powered_Resume-Checking.git",
  },
  {
    title: "GUESS.com",
    subtitle: "Blog Web Application",
    period: "June 2026 — Present",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Vercel", "Render"],
    points: [
      "Engineered a full-stack blogging platform utilizing the MERN Stack, implementing secure JWT Authentication and role-based access control to manage user sessions and permissions.",
      "Architected scalable RESTful APIs with Node.js and Express.js, integrating MongoDB to efficiently handle dynamic CRUD operations and user interactions.",
      "Optimized content discovery by developing advanced search functionality and dynamic category-based filtering, enhancing user engagement and site navigation.",
      "Integrated Cloudinary for media storage and managed deployment using Vercel and Render, ensuring high application availability and a responsive mobile-first user experience.",
    ],
    demo: "https://guess-black.vercel.app/",
    github: "https://github.com/Samarth-Kanagi/BlogWebsite",
  },
  {
    title: "InternStatus (Demo Soon...)",
    subtitle: "Internship Management System",
    period: "March 2026 — Present",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    points: [
      "Developed a multi-user internship onboarding platform facilitating seamless communication between educational institutions and corporate partners.",
      "Engineered custom role-based navigation and dedicated dashboard interfaces for five user roles: Student, Mentor, Faculty, Company, and Admin.",
      "Built scalable RESTful APIs for internship postings, secure application tracking, and real-time task management.",
      "Implemented role-based authentication and authorization to ensure secure access control and data privacy across the platform.",
    ],
    demo: "#",
    github: "https://github.com/ambadasgote7/InternStatus",
  },

];

const Projects = () => {
  const { dark } = useTheme();

  return (
    <section id="projects" className="py-24 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subheading">
            Real-world applications I've built from the ground up.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`glass-card p-6 sm:p-8 group transition-colors duration-300 ${dark ? "hover:border-brand-500/25" : "hover:border-brand-300"
                }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                <div>
                  <h3
                    className={`text-xl sm:text-2xl font-bold ${dark ? "text-white" : "text-gray-900"}`}
                  >
                    {project.title}
                  </h3>
                  <p className="text-brand-500 font-medium text-sm">
                    {project.subtitle}
                  </p>
                </div>
                <span
                  className={`text-xs font-medium whitespace-nowrap mt-1 sm:mt-0 ${dark ? "text-gray-500" : "text-gray-400"}`}
                >
                  {project.period}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`px-2.5 py-1 text-xs font-medium rounded-lg ${dark
                      ? "text-brand-300 bg-brand-500/10 border border-brand-500/20"
                      : "text-brand-600 bg-brand-50 border border-brand-200"
                      }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <ul className="space-y-2 mb-6">
                {project.points.map((point, i) => (
                  <li
                    key={i}
                    className={`flex gap-2 text-sm leading-relaxed ${dark ? "text-gray-400" : "text-gray-600"}`}
                  >
                    <span className="text-brand-500 mt-1 shrink-0">▸</span>
                    {point}
                  </li>
                ))}
              </ul>

              <div className="flex gap-3">
                <a
                  href={project.demo}
                  className="btn-primary text-sm px-5 py-2"
                >
                  <ExternalLink size={14} />
                  <span className="hidden sm:inline">Live Demo</span>
                  <span className="sm:hidden">Demo</span>
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline text-sm px-5 py-2"
                >
                  <Code size={14} />
                  <span className="hidden sm:inline">Source Code</span>
                  <span className="sm:hidden">Code</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
