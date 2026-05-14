'use client';

import TypingEffect from './TypingEffect';
import '../styles/hero.css';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-boot">
          [<span>SYSTEM</span>] boot sequence complete — v3.14.7
        </div>

        <div className="hero-name-line">
          <span className="hero-prompt">&gt;_</span>
          <h1 className="hero-name">
            <span className="highlight">ANKIT</span> GUPTA
          </h1>
        </div>

        <div className="hero-subtitle">
          <TypingEffect
            texts={[
              'Full Stack Developer',
              'Backend Engineer',
              'React / Next.js Developer',
              'Node.js Specialist',
            ]}
            speed={70}
            deleteSpeed={35}
            pauseTime={2500}
          />
        </div>

        <p className="hero-desc">
          <span className="cmd">$</span> Building production platforms at scale — from <span className="cmd">SaaS</span> products
          to <span className="cmd">e-commerce</span> systems. Specializing in Node.js, React, Next.js,
          and cloud infrastructure with <span className="cmd">AWS</span>.
        </p>

        <div className="hero-cta">
          <a href="#projects" className="btn-terminal primary">
            <span>view_projects</span>
            <span className="arrow">→</span>
          </a>
          <a href="#contact" className="btn-terminal secondary">
            <span>init_contact</span>
            <span className="arrow">→</span>
          </a>
        </div>

        <div className="hero-status">
          <div className="status-item">
            <span className="status-dot"></span>
            <span>Open to opportunities</span>
          </div>
          <div className="status-item">
            <span className="status-dot amber"></span>
            <span>New Delhi, India</span>
          </div>
          <div className="status-item">
            <span className="status-dot"></span>
            <span>1+ year exp</span>
          </div>
        </div>
      </div>

      <div className="hero-ascii" aria-hidden="true">
{`╔══════════════╗
║  ████  ████  ║
║  █  █  █  █  ║
║  ████  ████  ║
║              ║
║  ▓▓▓▓▓▓▓▓▓  ║
║  ░░░░░░░░░  ║
║  ▒▒▒▒▒▒▒▒▒  ║
╚══════════════╝`}
      </div>
    </section>
  );
}
