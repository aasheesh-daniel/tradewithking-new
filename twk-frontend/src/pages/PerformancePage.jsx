import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader.jsx';
import Reveal from '../components/Reveal.jsx';
import FeedbackRow from '../components/FeedbackRow.jsx';
import CertGallery from '../components/CertGallery.jsx';
import { feedbacks } from '../data/performance.js';

// PERFORMANCE PAGE = student feedbacks (moving rows) + payout certificates (separate gallery)
function PerformancePage() {
  const longOnes = feedbacks.filter((f) => f.row === 1);
  const shortOnes = feedbacks.filter((f) => f.row === 2);

  return (
    <>
      <PageHeader label="Performance" title={<>Real results.<br /><span className="teal">Real voices.</span></>} text="Hear from the Trade With King community, and see the payout certificates our students have shared." />

      {/* 1. FEEDBACKS : two rows moving in opposite directions , they keep moving like the yellow line on the home page */}
      <section className="section perf-feedback">
        <div className="container">
          <Reveal>
            <p className="label">Student feedback</p>
            <h2>In their <span className="teal">own words.</span></h2>
            <p className="lead">Traders from around the world share their journey with Trade With King.</p>
          </Reveal>
        </div>
        <Reveal className="fb-rows" delay={0.15}>
          <FeedbackRow items={longOnes} width={420} speed={55} />
          <FeedbackRow items={shortOnes} width={340} speed={55} reverse />
        </Reveal>
      </section>

      {/* 2. CERTIFICATES : separate from the feedbacks , pictures only */}
      <section className="section section-alt">
        <div className="container">
          <Reveal>
            <p className="label">Payout certificates</p>
            <h2>Payout <span className="teal">certificates.</span></h2>
            <p className="lead">Certificates shared by traders from our community. Tap any certificate to view it full size.</p>
          </Reveal>
          <CertGallery />
          <p className="note">Individual results vary and are not a guarantee of future performance. Trading involves risk. Read our <Link to="/risk-disclosure">Risk Disclosure</Link>.</p>
        </div>
      </section>
    </>
  );
}

export default PerformancePage;
