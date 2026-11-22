import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader.jsx';
import { legalPages, legalLinks, legalDate } from '../data/legal.js';
import { links } from '../data/content.js';

// ONE template for the 4 policy pages. it looks like a formal paper document.
// headings are numbered automatically (1 , 2 , 3 ...) from the order in data/legal.js , so numbering can never go wrong
function LegalPage({ slug }) {
  const doc = legalPages[slug];

  return (
    <>
      <PageHeader label="Legal" title={doc.title} text={'Effective date: ' + legalDate} />
      <section className="section">
        <div className="container legal-grid">
          {/* LEFT : contents list (jumps to the section) + other policies + print button */}
          <aside className="legal-side">
            <nav aria-label="Contents">
              <p className="label">On this page</p>
              <ol>
                {doc.sections.map((s, i) => (
                  <li key={s.title}><Link to={'#s' + (i + 1)}>{i + 1}. {s.title}</Link></li>
                ))}
              </ol>
            </nav>
            <nav aria-label="Other policies">
              <p className="label">Other policies</p>
              <ul>
                {legalLinks.filter((l) => l.to !== '/' + slug).map((l) => (
                  <li key={l.to}><Link to={l.to}>{l.name}</Link></li>
                ))}
              </ul>
            </nav>
            <button className="btn btn-line btn-small" onClick={() => window.print()}>Print / Save as PDF</button>
          </aside>

          {/* RIGHT : the document (ivory paper) */}
          <article className="paper">
            <header className="paper-head">
              <p className="paper-brand">Trade With King</p>
              <h2 className="paper-title">{doc.title}</h2>
              <dl className="paper-meta">
                <div><dt>Document</dt><dd>{doc.title}</dd></div>
                <div><dt>Effective date</dt><dd>{legalDate}</dd></div>
                <div><dt>Operated by</dt><dd>Kabir Maan</dd></div>
                <div><dt>Contact</dt><dd>{links.email}</dd></div>
              </dl>
            </header>

            {doc.summary && (
              <div className="paper-summary">
                <strong>In brief</strong>
                <p>{doc.summary}</p>
                <small>This summary is for convenience only and does not replace the full text below.</small>
              </div>
            )}

            {doc.sections.map((s, i) => (
              <section key={s.title} id={'s' + (i + 1)} className="legal-section">
                <span className="sec-num">{i + 1}</span>
                <div>
                  <h3>{s.title}</h3>
                  {s.body.map((b, j) =>
                    Array.isArray(b)
                      ? <ul key={j} className="legal-list">{b.map((item) => <li key={item}>{item}</li>)}</ul>
                      : <p key={j}>{b}</p>
                  )}
                </div>
              </section>
            ))}

            {doc.note && <p className="legal-note"><strong>Note:</strong> {doc.note}</p>}

            <footer className="paper-foot">
              <span>Questions about this document?</span>
              <a href={'mailto:' + links.email}>{links.email}</a>
            </footer>
          </article>
        </div>
      </section>
    </>
  );
}

export default LegalPage;
