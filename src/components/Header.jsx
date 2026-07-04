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
          <span className="dot"></span>
          YE ZARNI KO
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
