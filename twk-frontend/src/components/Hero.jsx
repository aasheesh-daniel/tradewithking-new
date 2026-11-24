import { Link } from 'react-router-dom';
import { heroImage } from '../data/content.js';
import Features from './Features.jsx';
import BeamArt from './BeamArt.jsx';
import Ticker from './Ticker.jsx';

function Hero({ openPopup }) {
  return (
    <section className="hero">
      <BeamArt both />
      <Ticker />
      <div className="container hero-grid">
        {/* LEFT : photo , reveals left to right on load (the signature animation) */}
        <div className="hero-visual">
          {/* hero-clip does the reveal animation , hero-visual keeps the floor reflection outside */}
          <div className="hero-frame">
            <div className="hero-clip">
              <img src={heroImage} alt="Glowing gold growth chart rising on a dark emerald stage" className="hero-img" />
            </div>
          </div>
          <p className="hero-mark">Est. 2022<br />London | New York | Gold</p>
        </div>

        {/* RIGHT : the words */}
        <div className="hero-text">
          <p className="label">Trading | Education | Discipline</p>
          {/* the red beam (css) sweeps across the headline once on load = our one signature animation */}
          <div className="headline-wrap">
            <h1>
              <span>Trade Smart.</span><br />
              <span>Trade Like a</span><br />
              <span className="king">King.</span>
            </h1>
          </div>
          <p className="hero-sub">Specializing in London Session, NYSE Open, and Gold trading, with a focus on precision, discipline, and consistency.</p>
          <div className="btn-row">
            {/* join community = shiny teal , explore program = red (BUILT red) */}
            <button className="btn btn-teal" onClick={openPopup}>Join the Community</button>
            <Link to="/program" className="btn btn-red">Explore Program</Link>
          </div>
        </div>
      </div>

      <Features />
    </section>
  );
}

export default Hero;
