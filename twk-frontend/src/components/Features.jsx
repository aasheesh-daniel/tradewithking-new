import { features } from '../data/content.js';
import Icon from './Icon.jsx';

// 4 glass blocks at the bottom of the hero , red icon + title + short text
function Features() {
  return (
    <div className="container features">
      {features.map((f) => (
        <div key={f.title} className="feature">
          <Icon name={f.icon} />
          <div>
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Features;
