'use client';

import { motion } from 'framer-motion';
import Terminal from './Terminal';
import '../styles/techbuddy.css';

const buddies = [
  {
    name: 'Varun Kumar Prajapati',
    initials: 'VK',
    tag: 'Full Stack Developer',
    bio: 'MERN stack & React Native developer. College buddy who loves building full-stack apps with TypeScript and Node.js. Always pushing code and shipping projects.',
    skills: ['TypeScript', 'Node.js', 'JavaScript', 'React Native', 'MERN'],
    linkedin: 'https://www.linkedin.com/in/varun-kumar-prajapati',
    portfolio: 'https://varunkumarprajapati.vercel.app',
    terminalTitle: '~/tech-buddies/varun',
  },
  {
    name: 'Sagar Shivhare',
    initials: 'SS',
    tag: 'Backend Developer',
    bio: 'Node.js backend developer with a strong foundation in C++ and Java. College buddy who enjoys solving problems and building solid server-side systems.',
    skills: ['Node.js', 'C++', 'Java', 'Backend'],
    linkedin: 'https://www.linkedin.com/in/sagarshivhare',
    portfolio: null,
    terminalTitle: '~/tech-buddies/sagar',
  },
  {
    name: 'Akash Prajapati',
    initials: 'AP',
    tag: 'Data Enthusiast',
    bio: 'Working on data-related projects — aspiring data analyst. College buddy who digs into data, research, and analytics to uncover meaningful insights.',
    skills: ['Data Analysis', 'Research', 'Analytics'],
    linkedin: 'https://www.linkedin.com/in/akash-prajapati-039463251',
    portfolio: null,
    terminalTitle: '~/tech-buddies/akash',
  },
];

export default function TechBuddy() {
  return (
    <section className="techbuddy section" id="techbuddy">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="section-prompt">cat ~/friends/tech-buddies.json</p>
          <h2 className="section-title">
            TECH <span className="accent">BUDDIES</span>
          </h2>
          <div className="section-divider"></div>
        </motion.div>

        {/* Group Photo */}
        <motion.div
          className="buddy-group-photo"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="terminal-dot red"></span>
                <span className="terminal-dot yellow"></span>
                <span className="terminal-dot green"></span>
              </div>
              <span className="terminal-title">~/photos/the-squad.png</span>
              <span className="terminal-actions">—</span>
            </div>
            <div className="group-photo-wrapper">
              <img
                src="/tech-buddies.png"
                alt="Tech Buddies — Ankit, Varun, Sagar & Akash"
                className="group-photo-img"
              />
              <div className="group-photo-overlay"></div>
            </div>
          </div>
          <p className="group-photo-caption">
            <span style={{ color: 'var(--neon-green)' }}>$</span> College crew that codes together, stays together ⚡
          </p>
        </motion.div>

        <div className="techbuddy-grid">
          {buddies.map((buddy, idx) => (
            <motion.div
              key={buddy.name}
              className="buddy-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              viewport={{ once: true }}
            >
              <Terminal title={buddy.terminalTitle}>
                <div className="buddy-header">
                  <div className="buddy-avatar">{buddy.initials}</div>
                  <div className="buddy-name-group">
                    <h3 className="buddy-name">{buddy.name}</h3>
                    <span className="buddy-tag">{buddy.tag}</span>
                  </div>
                </div>

                <p className="buddy-bio">{buddy.bio}</p>

                <div className="buddy-skills">
                  {buddy.skills.map(skill => (
                    <span key={skill} className="buddy-skill-tag">{skill}</span>
                  ))}
                </div>

                <div className="buddy-socials">
                  <a
                    href={buddy.linkedin}
                    className="buddy-social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="social-icon">in</span>
                    LinkedIn
                  </a>
                  {buddy.portfolio && (
                    <a
                      href={buddy.portfolio}
                      className="buddy-social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="social-icon">◈</span>
                      Portfolio
                    </a>
                  )}
                </div>
              </Terminal>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
