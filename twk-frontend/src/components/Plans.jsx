import { programs } from '../data/content.js';

// the active program (more can be added later in content.js , they will be shown one under another)
function Plans({ openQuote }) {
  return (
    <section className="section">
      <div className="container">
        <div className="plan-list">
          {programs.map((p) => (
            <article key={p.id} id={p.id} className="plan">
              {/* left : name , price , button */}
              <div className="plan-main">
                <p className="tag">{p.tagline}</p>
                <h3>{p.name}</h3>
                <p className="price"><span className="teal">{p.price}</span><small>{p.period}</small></p>
                <p className="prog-desc">{p.text}</p>
                <button className="btn btn-red" onClick={() => openQuote(p.name)}>Ask for a quote</button>
              </div>
              {/* right : benefits */}
              <ul className="plan-benefits" role="list">
                {p.benefits.map(([name, detail]) => (
                  <li key={name}><div><strong>{name}</strong><span>{detail}</span></div></li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="note">The program is educational. Trading involves risk and no profits or specific results are guaranteed.</p>
      </div>
    </section>
  );
}

export default Plans;
