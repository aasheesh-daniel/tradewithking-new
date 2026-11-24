import { tickerText } from '../data/content.js';

// yellow moving line (right to left). the text is repeated and the track is shown twice , so when the first half has moved away
// the second half is exactly in its place = the motion never jumps or stops
function Ticker() {
  const group = (hidden) => (
    <div className="ticker-group" aria-hidden={hidden}>
      {[0, 1, 2].map((i) => (
        <span key={i} className="ticker-item"><i></i>{tickerText}</span>
      ))}
    </div>
  );
  return (
    <div className="ticker" role="region" aria-label="Live stream announcement">
      <span className="ticker-badge">Live</span>
      <div className="ticker-window">
        <div className="ticker-track">{group(false)}{group(true)}</div>
      </div>
    </div>
  );
}

export default Ticker;
