'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function MenuBar() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  const scrollTo = (id) => {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="menu-bar">
      <Link href="/" className="menu-logo" style={{ textDecoration: 'none' }}>
        qord
      </Link>
      <div className="menu-items">
        {isHome ? (
          <>
            <button className="menu-item" onClick={() => scrollTo('problem')}>
              the problem
            </button>
            <button className="menu-item" onClick={() => scrollTo('howitworks')}>
              how it works
            </button>
            <button className="menu-item" onClick={() => scrollTo('about')}>
              about
            </button>
          </>
        ) : (
          <>
            <Link href="/" className="menu-item" style={{ textDecoration: 'none' }}>
              home
            </Link>
          </>
        )}
        <Link href="/experience" className="menu-item" style={{ textDecoration: 'none' }}>
          experience
        </Link>
      </div>
      <div className="menu-right">
        <span>beta v1.6</span>
      </div>
    </nav>
  );
}
