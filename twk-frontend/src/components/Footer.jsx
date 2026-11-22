import { Link } from 'react-router-dom';
import { links, navLinks, markets } from '../data/content.js';
import { legalLinks } from '../data/legal.js';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-big">Trade With <span className="king">King</span></p>
        <div className="footer-grid">
          <div>
            <img src="/logo.png" alt="Trade With King logo" className="footer-logo" />
            <p>Built on Passion. Driven by Discipline. Defined by Consistency.</p>
          </div>
          <div>
            <h4>Explore</h4>
            {navLinks.map((l) => <Link key={l.name} to={l.to}>{l.name}</Link>)}
          </div>
          <div>
            <h4>Markets</h4>
            {markets.map((m) => <Link key={m.id} to={'/markets/' + m.slug}>{m.title}</Link>)}
          </div>
          <div>
            <h4>Contact</h4>
            <a href={'mailto:' + links.email}>{links.email}</a>
            <a href={links.discord} target="_blank" rel="noreferrer">Discord</a>
            <a href={links.telegram} target="_blank" rel="noreferrer">Telegram</a>
          </div>
        </div>
        <nav className="legal-links" aria-label="Legal">
          {legalLinks.map((l) => <Link key={l.name} to={l.to}>{l.name}</Link>)}
        </nav>
        <p className="copy">© {new Date().getFullYear()} Trade With King. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
