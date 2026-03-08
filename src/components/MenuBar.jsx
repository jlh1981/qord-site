'use client';

export default function MenuBar() {
  const scrollTo = (id) => {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="menu-bar">
      <button className="menu-logo" onClick={() => scrollTo('top')}>
        qord
      </button>
      <div className="menu-items">
        <button className="menu-item" onClick={() => scrollTo('problem')}>
          the problem
        </button>
        <button className="menu-item" onClick={() => scrollTo('protocol')}>
          protocol
        </button>
        <button className="menu-item" onClick={() => scrollTo('toolkit')}>
          toolkit
        </button>
        <button className="menu-item" onClick={() => scrollTo('about')}>
          about
        </button>
      </div>
      <div className="menu-right">
        <span>v1.0</span>
      </div>
    </nav>
  );
}
