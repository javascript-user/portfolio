'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Terminal from './Terminal';
import '../styles/contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message);
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="section-prompt">echo &quot;Let&apos;s connect&quot; | mail -s &quot;hello&quot;</p>
          <h2 className="section-title">
            GET IN <span className="accent">TOUCH</span>
          </h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="contact-grid">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Terminal title="~/contact/send-message" className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-name">enter_name:</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    className="form-input"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-email">enter_email:</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    className="form-input"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-message">enter_message:</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    className="form-textarea"
                    placeholder="Hey, I'd love to work together..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                {status === 'error' && (
                  <p style={{ color: 'var(--neon-red)', fontSize: '12px', marginBottom: '12px' }}>
                    ✗ {errorMsg}
                  </p>
                )}
                <button
                  type="submit"
                  className="form-submit"
                  id="contact-submit"
                  disabled={status === 'sending'}
                  style={status === 'sending' ? { opacity: 0.6, cursor: 'wait' } : {}}
                >
                  {status === 'sending' && '⟳ SENDING...'}
                  {status === 'sent' && '✓ MESSAGE SENT!'}
                  {status === 'error' && '✗ RETRY'}
                  {status === 'idle' && '$ SEND_MESSAGE'}
                </button>
              </form>
            </Terminal>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Terminal title="~/contact/socials" className="contact-info">
              <ul className="contact-social">
                <li>
                  <a href="mailto:ankitgupta310802@gmail.com" className="social-link">
                    <span className="social-prefix">01</span>
                    <span className="social-label">email</span>
                    <span>ankitgupta310802@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a href="tel:+919560875675" className="social-link">
                    <span className="social-prefix">02</span>
                    <span className="social-label">phone</span>
                    <span>+91 9560875675</span>
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/in/ankitgupta-dev" className="social-link" target="_blank" rel="noopener noreferrer">
                    <span className="social-prefix">03</span>
                    <span className="social-label">linkedin</span>
                    <span>linkedin.com/in/ankitgupta-dev</span>
                  </a>
                </li>
                <li>
                  <a href="https://github.com" className="social-link" target="_blank" rel="noopener noreferrer">
                    <span className="social-prefix">04</span>
                    <span className="social-label">github</span>
                    <span>github.com/ankitgupta</span>
                  </a>
                </li>
              </ul>

              <div className="contact-status">
                <div className="status-line">
                  <span>●</span> response_time: ~24 hours
                </div>
                <div className="status-line">
                  <span>●</span> availability: open for opportunities
                </div>
                <div className="status-line">
                  <span>●</span> preferred: email / linkedin
                </div>
              </div>
            </Terminal>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
