'use client';

import { motion } from 'framer-motion';
import Terminal from './Terminal';
import '../styles/about.css';

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="section-prompt">cat ./sections/about.md</p>
          <h2 className="section-title">
            ABOUT <span className="accent">ME</span>
          </h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="about-grid">
          {/* Profile Side */}
          <motion.div
            className="about-profile"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="profile-image-wrapper">
              <div
                className="profile-image"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,255,245,0.15), rgba(255,0,255,0.15))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '60px',
                  color: 'var(--neon-cyan)',
                  fontFamily: 'var(--font-display)',
                  textShadow: '0 0 20px rgba(0,255,245,0.5)',
                  borderRadius: 'var(--radius-md)',
                  border: '2px solid var(--terminal-border)',
                }}
              >
                AG
              </div>
              <div className="profile-glitch-overlay"></div>
            </div>
            <p className="profile-label">
              <span>$</span> user.profile —  verified ✓
            </p>

            <div className="about-system-info">
              <div className="system-row">
                <span className="label">OS</span>
                <span className="value">Ubuntu 24.04 LTS</span>
              </div>
              <div className="system-row">
                <span className="label">Shell</span>
                <span className="value">zsh 5.9</span>
              </div>
              <div className="system-row">
                <span className="label">Editor</span>
                <span className="value">VS Code</span>
              </div>
              <div className="system-row">
                <span className="label">Uptime</span>
                <span className="value">1+ year in dev</span>
              </div>
              <div className="system-row">
                <span className="label">Status</span>
                <span className="value" style={{ color: 'var(--neon-green)' }}>● Online</span>
              </div>
            </div>
          </motion.div>

          {/* Bio Terminal */}
          <motion.div
            className="about-bio"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Terminal title="~/about/bio.txt">
              <div className="terminal-line">
                <span className="prompt">$</span>
                <span className="command">cat bio.txt</span>
              </div>
              <div className="bio-text">
                <p>
                  Hey there! I&apos;m Ankit Gupta — a full stack developer from New Delhi who loves
                  building production-grade web platforms. I&apos;ve worked on SaaS products,
                  Q&amp;A/blogging platforms, and e-commerce systems, handling everything from
                  API design to cloud deployment.
                </p>
                <p>
                  My stack revolves around <span style={{color: 'var(--neon-cyan)'}}>Node.js</span>,{' '}
                  <span style={{color: 'var(--neon-cyan)'}}>Express</span>,{' '}
                  <span style={{color: 'var(--neon-cyan)'}}>React</span>,{' '}
                  <span style={{color: 'var(--neon-cyan)'}}>Next.js</span>, and{' '}
                  <span style={{color: 'var(--neon-cyan)'}}>MySQL</span> with
                  tools like Sequelize, BullMQ, Redis, and AWS S3/CloudFront. I enjoy
                  optimizing backends, building queue systems, and migrating legacy UIs.
                </p>
                <p>
                  BCA graduate from Mohyal Educational &amp; Research Institute of Technology.
                  Currently building at Giggle&amp;Bytes across LetsDiskcuss &amp; Snapshophub.
                </p>
              </div>
              <div className="terminal-line" style={{ marginTop: '16px' }}>
                <span className="prompt">$</span>
                <span className="command">ls traits/</span>
              </div>
              <div className="about-traits">
                {['Problem Solver', 'Team Player', 'Fast Learner', 'Detail Oriented', 'Creative Thinker'].map(trait => (
                  <span key={trait} className="trait-tag">{trait}</span>
                ))}
              </div>
            </Terminal>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
