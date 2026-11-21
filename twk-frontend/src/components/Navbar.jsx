import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navLinks } from '../data/content.js';

function Navbar({ openPopup }) {
  const [scrolled, setScrolled] = useState(false); //false = transparent navbar , true = dark navbar
  const [menuOpen, setMenuOpen] = useState(false); //mobile menu open or closed
  const close = () => setMenuOpen(false);

  // after 40px of scrolling the navbar becomes dark and slim
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={scrolled || menuOpen ? 'nav nav-dark' : 'nav'}>
      <div className="nav-inner">
        <Link to="/" className="brand" onClick={close}><img src="/logo.png" alt="Trade With King home" /></Link>

        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main">
          {navLinks.map((l) => (
            <NavLink key={l.name} to={l.to} end={l.to === '/'} onClick={close}>{l.name}</NavLink>
          ))}
          <button className="btn btn-teal btn-small" onClick={() => { close(); openPopup(); }}>Join Community</button>
        </nav>

        <button className="menu-btn" aria-label="Open menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? '✕' : '☰'}</button>
      </div>
    </header>
  );
}

export default Navbar;
