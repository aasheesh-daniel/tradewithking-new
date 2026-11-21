import { faq } from '../data/content.js';

function Faq() {
  // details + summary = built in html accordion , no javascript needed
  return (
    <section className="section section-teal">
      <div className="container faq">
        <h2>Questions,<br /><span className="teal">answered.</span></h2>
        <div>
          {faq.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
