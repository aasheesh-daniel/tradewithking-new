import { Link, Navigate, useParams } from 'react-router-dom';
import { marketDetails, markets } from '../data/content.js';
import BeamArt from '../components/BeamArt.jsx';

// ONE template for the 3 market pages (london , newyork , gold). the text and photo come from marketDetails in content.js
function MarketPage({ openPopup, openQuote }) {
  const { slug } = useParams(); //slug = the last part of the link , example /markets/london
  const m = marketDetails[slug];
  if (!m) return <Navigate to="/" replace />; //wrong link = go home

  return (
    <>
      {/* TOP : title on the left , photo with soft edges + floor reflection on the right */}
      <section className="mk-hero">
        <BeamArt />
        <div className="container mk-grid">
          <div>
            <p className="label">Market session</p>
            <h1 className="page-title">{m.title}</h1>
            <p className="lead">{m.lead}</p>
            <div className="btn-row">
              <button className="btn btn-teal" onClick={openPopup}>Join the Community</button>
              <button className="btn btn-red" onClick={() => openQuote('')}>Ask for a quote</button>
            </div>
          </div>
          <figure className="mk-photo">
            <div className="mk-clip"><img src={m.image} alt={m.alt} style={{ objectPosition: m.pos }} /></div>
          </figure>
        </div>
      </section>

      {/* MIDDLE : description + 3 key facts */}
      <section className="section">
        <div className="container mk-body">
          <div>
            <p className="label">Overview</p>
            {m.paragraphs.map((t) => <p key={t} className="mk-text">{t}</p>)}
          </div>
          <div className="facts">
            {m.facts.map(([k, v]) => (
              <div key={k} className="fact"><span>{k}</span><strong>{v}</strong></div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU WILL EXPLORE */}
      <section className="section section-alt">
        <div className="container">
          <p className="label">What you will explore</p>
          <h2>Learn it with <span className="teal">structure.</span></h2>
          <ul className="learn" role="list">
            {m.learn.map((t) => <li key={t}>{t}</li>)}
          </ul>
          <p className="note">Educational content only. Trading involves risk and no profits or specific results are guaranteed.</p>
        </div>
      </section>

      {/* OTHER SESSIONS */}
      <section className="section">
        <div className="container">
          <p className="label">Continue exploring</p>
          <div className="other-list">
            {markets.filter((x) => x.slug !== slug).map((x) => (
              <Link key={x.id} to={'/markets/' + x.slug} className="other"><span>{x.title}</span><b>→</b></Link>
            ))}
            <Link to="/program" className="other"><span>View program</span><b>→</b></Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default MarketPage;
