'use client';

import { motion } from 'framer-motion';
import Terminal from './Terminal';
import '../styles/education.css';

const education = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    school: 'Mohyal Educational & Research Institute of Technology',
    period: '2021 — 2024',
    terminalTitle: '~/education/bca',
  },
  {
    degree: 'AISSCE (Senior Secondary)',
    school: 'Govt. Boys Sr. Secondary School',
    period: '2020 — 2021',
    terminalTitle: '~/education/senior-secondary',
  },
];

export default function Education() {
  return (
    <section className="education section" id="education">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="section-prompt">cat /etc/education.conf</p>
          <h2 className="section-title">
            EDU<span className="accent">CATION</span>
          </h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="education-grid">
          {education.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              className="education-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              viewport={{ once: true }}
            >
              <Terminal title={edu.terminalTitle}>
                <h3 className="education-degree">{edu.degree}</h3>
                <p className="education-school">{edu.school}</p>
                <p className="education-period">{edu.period}</p>
              </Terminal>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
