'use client';

import { motion } from 'framer-motion';
import Terminal from './Terminal';
import '../styles/experience.css';

const experiences = [
  {
    hash: 'a3f7c2d',
    role: 'Full Stack Developer',
    company: 'Giggle&Bytes (LetsDiskcuss & Snapshophub)',
    location: 'Gurugram, Haryana',
    period: 'Jan 2026 — Present',
    description: [
      'Worked on two production platforms — Q&A/blogging and medical e-commerce',
      'Migrated media storage to AWS S3 + CloudFront, improving scalability and delivery',
      'Implemented BullMQ queues for abandoned checkout workflows',
      'Fixed PayPal payment issues and added backend verification',
      'Resolved production bugs and improved UI consistency',
    ],
    tech: ['Node.js', 'Express', 'MySQL', 'Sequelize', 'AWS S3', 'BullMQ'],
  },
  {
    hash: 'b9e1f4a',
    role: 'Web Developer',
    company: 'Lifelinkr (SaaS IVF Platform)',
    location: 'New Delhi',
    period: 'Mar 2025 — Sep 2025',
    description: [
      'Built email marketing system with templates, segmentation, and tracking',
      'Integrated Redis + BullMQ for scheduling and delivery',
      'Developed IPD, Billing, and Inventory modules',
      'Improved backend performance with Node.js, Express, Sequelize, and MySQL',
      'Migrated legacy UI to React',
    ],
    tech: ['React', 'Node.js', 'Express', 'Redis', 'BullMQ', 'MySQL'],
  },
  {
    hash: 'c4d8e2b',
    role: 'Backend Developer Intern',
    company: 'Small Fare Services Pvt. Ltd.',
    location: 'Remote',
    period: 'Sep 2024 — Feb 2025',
    description: [
      'Built REST APIs using Node.js, Express, and MongoDB',
      'Implemented authentication, validation, and error handling',
    ],
    tech: ['Node.js', 'Express', 'MongoDB'],
  },
];

export default function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="section-prompt">git log --oneline --career</p>
          <h2 className="section-title">
            WORK <span className="accent">EXPERIENCE</span>
          </h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="experience-timeline">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.hash}
              className="experience-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="experience-dot"></div>
              <div className="experience-hash">commit {exp.hash}</div>
              <Terminal title={`~/career/${exp.company.toLowerCase().replace(/\s+/g, '-')}`} className="experience-card">
                <h3 className="experience-role">{exp.role}</h3>
                <p className="experience-company">{exp.company}</p>
                <p className="experience-period">{exp.period} · {exp.location}</p>
                <ul className="experience-desc">
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
                <div className="experience-tech">
                  {exp.tech.map(t => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </Terminal>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
