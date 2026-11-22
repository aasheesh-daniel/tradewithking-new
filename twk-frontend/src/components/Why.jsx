import { whyChoose } from '../data/content.js';
import Icon from './Icon.jsx';

// teal section : each reason is a glass block with its own drawing
function Why() {
  return (
    <section className="section section-teal">
      <div className="container why-layout">
        <div>
          <p className="label">Why Trade With King</p>
          <h2>Built on <span className="teal">years of</span><br />market learning.</h2>
        </div>
        <div className="why-list">
          {whyChoose.map((w) => (
            <div key={w.title} className="why">
              <Icon name={w.icon} size={40} />
              <div>
                <h4>{w.title}</h4>
                <p>{w.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Why;
