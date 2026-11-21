import { Link } from 'react-router-dom';
import { markets } from '../data/content.js';

function Markets() {
  return (
    <section className="section">
      <div className="container">
        <p className="label">The markets we trade</p>
        <h2>Three sessions.<br /><span className="teal">One disciplined approach.</span></h2>

        {/* first card is tall on the left , other two stack on the right. every card opens its own page */}
        <div className="market-grid">
          {markets.map((m) => (
            <Link key={m.id} to={'/markets/' + m.slug} className={'market photo market-' + m.id} aria-label={m.title + ' , read more'}>
              <img className="market-img" src={m.image} alt={m.alt} loading="lazy" style={{ objectPosition: m.pos }} />
              <h3>{m.title}</h3>
              <p>{m.text}</p>
              <span className="market-cta">Explore session <b>→</b></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Markets;
