'use client';

export default function Terminal({ title = 'terminal', children, className = '' }) {
  return (
    <div className={`terminal-window ${className}`}>
      <div className="terminal-header">
        <div className="terminal-dots">
          <span className="terminal-dot red"></span>
          <span className="terminal-dot yellow"></span>
          <span className="terminal-dot green"></span>
        </div>
        <span className="terminal-title">{title}</span>
        <span className="terminal-actions">—</span>
      </div>
      <div className="terminal-body">
        {children}
      </div>
    </div>
  );
}
