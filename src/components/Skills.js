'use client';

import { motion } from 'framer-motion';
import Terminal from './Terminal';
import '../styles/skills.css';

const skillCategories = [
  {
    title: 'FRONTEND',
    icon: '⚡',
    terminalTitle: '~/skills/frontend',
    skills: [
      { name: 'React.js', level: 88 },
      { name: 'Next.js', level: 85 },
      { name: 'HTML / CSS', level: 92 },
      { name: 'Tailwind CSS', level: 82 },
      { name: 'EJS / Bootstrap', level: 75 },
      { name: 'jQuery', level: 70 },
    ],
  },
  {
    title: 'BACKEND',
    icon: '🔧',
    terminalTitle: '~/skills/backend',
    skills: [
      { name: 'Node.js / Express.js', level: 90 },
      { name: 'JavaScript (ES6+)', level: 92 },
      { name: 'REST APIs', level: 88 },
      { name: 'Sequelize ORM', level: 82 },
      { name: 'MySQL', level: 85 },
      { name: 'BullMQ / Redis', level: 78 },
    ],
  },
  {
    title: 'CLOUD & TOOLS',
    icon: '🛠',
    terminalTitle: '~/skills/cloud',
    skills: [
      { name: 'Git / GitHub', level: 90 },
      { name: 'AWS S3 / CloudFront', level: 78 },
      { name: 'Nodemailer', level: 75 },
      { name: 'CI/CD Pipelines', level: 72 },
    ],
  },
];

function generateBarText(level) {
  const filled = Math.floor(level / 5);
  const empty = 20 - filled;
  return '[' + '█'.repeat(filled) + '░'.repeat(empty) + ']';
}

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="section-prompt">neofetch --skills</p>
          <h2 className="section-title">
            TECH <span className="accent">STACK</span>
          </h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIdx * 0.15 }}
              viewport={{ once: true }}
            >
              <Terminal title={category.terminalTitle}>
                <div className="skill-category-title">
                  <span className="icon">{category.icon}</span>
                  {category.title}
                </div>
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-bar-fill"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                      <span className="skill-bar-text">
                        {generateBarText(skill.level)} {skill.level}%
                      </span>
                    </div>
                  </div>
                ))}
              </Terminal>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
