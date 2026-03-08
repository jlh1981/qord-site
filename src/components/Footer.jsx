'use client';

export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="footer">
      <span>qord v1.0 / 2026</span>
      <span>
        <button
          onClick={() => scrollTo('protocol')}
          style={{
            background: 'none',
            border: 'none',
            color: 'inherit',
            font: 'inherit',
            cursor: 'pointer',
            opacity: 0.5,
            padding: 0,
          }}
          onMouseEnter={(e) => (e.target.style.opacity = 1)}
          onMouseLeave={(e) => (e.target.style.opacity = 0.5)}
        >
          protocol
        </button>
        {' \u00B7 '}
        <button
          onClick={() => scrollTo('toolkit')}
          style={{
            background: 'none',
            border: 'none',
            color: 'inherit',
            font: 'inherit',
            cursor: 'pointer',
            opacity: 0.5,
            padding: 0,
          }}
          onMouseEnter={(e) => (e.target.style.opacity = 1)}
          onMouseLeave={(e) => (e.target.style.opacity = 0.5)}
        >
          toolkit
        </button>
        {' \u00B7 '}
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          github
        </a>
      </span>
    </div>
  );
}
