import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader.jsx';
import { signatureImage } from '../data/content.js';

function AboutPage() {
  return (
    <>
      <PageHeader label="About Trade With King" title={<>Built on passion.<br />Driven by discipline.<br /><span className="teal">Defined by consistency.</span></>} />
      <section className="section">
        <div className="container about-grid">
          {/* owner photo , shown full and untouched (no colour layer on top) */}
          <figure className="owner-photo">
            <img src="/owner.jpg" alt="Kabir Maan, founder of Trade With King" />
          </figure>
          <div>
            <p className="lead">Founded in 2022 by Kabir Maan, Trade With King was established with a vision to make professional trading education accessible to aspiring traders worldwide.</p>
            <p>What began as a passion for financial markets has grown into a trading education brand built on dedication, market experience, continuous learning and a strong commitment to the trading community.</p>
            <p>Today it operates as a trading mentorship and market insights platform, offering structured educational programs, personalised mentorship, live market sessions and premium trading signals.</p>
            <p>Our approach focuses on understanding market behaviour, identifying potential trading opportunities, developing effective strategies and building the discipline needed to navigate financial markets, with a strong focus on trade accuracy, consistency and risk management.</p>
            <p className="mission">Our mission: to educate, empower, and help traders become more knowledgeable, confident, and disciplined in their trading journey.</p>
            <p className="vision"><strong>Our vision:</strong> to build a knowledgeable trading community where education, discipline and responsible trading remain the foundation of every decision.</p>
            {/* signature : handwritten style name , or a real signature picture if signatureImage is set in content.js */}
            <div className="signature">
              {signatureImage ? <img src={signatureImage} alt="Signature of Kabir Maan" /> : <span className="sig-script">Kabir Maan</span>}
              <span className="sig-line"></span>
              <span className="sig-role">Founder, Trade With King</span>
            </div>
            <Link to="/program" className="btn btn-teal">See our program</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
