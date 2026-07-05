import { useEffect, useRef, useState } from 'react';
import { navLinks } from '../data/portfolio.js';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    }

    function handleClick(event) {
      if (!navRef.current?.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <header>
      <nav className="wrap" ref={navRef}>
        <div className="brand">
          <svg className="brand-logo" viewBox="0 0 240 210" fill="none" aria-hidden="true" focusable="false">
            <path d="M100,30 C62,30 32,58 32,92 C32,124 56,148 88,154 L104,154 L114,176 C116,180 122,180 124,176 L134,154 L150,154 C182,148 206,124 206,92 C206,58 176,30 138,30" stroke="#7C6CF0" strokeWidth="11" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M108,70 L84,94 L108,118" stroke="#F4F2FA" strokeWidth="11" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M132,70 L156,94 L132,118" stroke="#F4F2FA" strokeWidth="11" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="119" cy="188" r="7" fill="#7C6CF0" />
            <circle cx="102" cy="200" r="4" fill="#7C6CF0" />
          </svg>
          {/* YE ZARNI KO */}
          yezarniko
        </div>
        <div className={`navlinks${isMenuOpen ? ' is-open' : ''}`} id="primary-navigation">
          {navLinks.map((link) => (
            <a href={link.href} key={link.href} onClick={() => setIsMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
        <button
          className="menu-toggle"
          type="button"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span aria-hidden="true"></span>
        </button>
      </nav>
    </header>
  );
}

export default Header;
