'use client';

import { motion } from 'framer-motion';
import Terminal from './Terminal';
import '../styles/projects.css';

const projects = [
  {
    title: 'YOUTUBE VIDEO DOWNLOADER',
    type: 'Web Application',
    description: 'A full-stack web app to download YouTube videos using REST APIs powered by yt-dlp on the backend. Multi-format download support with automatic download trigger in a new browser tab.',
    tech: ['React', 'Node.js', 'Express', 'yt-dlp'],
    github: 'https://github.com',
    live: '#',
    terminalTitle: '~/projects/yt-downloader',
  },
  {
    title: 'LETSDISKUSS PLATFORM',
    type: 'Q&A / Blogging Platform',
    description: 'Production Q&A and blogging platform with content management, cloud media storage via AWS S3 + CloudFront, and BullMQ-powered background jobs for abandoned checkout workflows.',
    tech: ['Node.js', 'Express', 'MySQL', 'Sequelize', 'AWS S3', 'BullMQ'],
    github: '#',
    live: '#',
    terminalTitle: '~/projects/letsdiskuss',
  },
  {
    title: 'SNAPSHOPHUB',
    type: 'E-Commerce Platform',
    description: 'Medical e-commerce platform with PayPal payment integration, backend verification, and production bug resolution. Improved system stability and UI consistency.',
    tech: ['Node.js', 'Express', 'MySQL', 'Sequelize', 'PayPal'],
    github: '#',
    live: '#',
    terminalTitle: '~/projects/snapshophub',
  },
  {
    title: 'LIFELINKR MODULES',
    type: 'SaaS Platform',
    description: 'Built IPD, Billing, and Inventory modules for a SaaS IVF platform. Integrated Redis + BullMQ email system with templates, segmentation, and tracking. Migrated legacy UI to React.',
    tech: ['React', 'Node.js', 'Express', 'Redis', 'BullMQ', 'MySQL'],
    github: '#',
    live: '#',
    terminalTitle: '~/projects/lifelinkr',
  },
];

export default function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="section-prompt">ls -la ~/projects/</p>
          <h2 className="section-title">
            MY <span className="accent">PROJECTS</span>
          </h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Terminal title={project.terminalTitle}>
                <span className="project-type">{project.type}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map(t => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                    git clone
                  </a>
                  <a href={project.live} className="project-link" target="_blank" rel="noopener noreferrer">
                    open --live
                  </a>
                </div>
              </Terminal>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
