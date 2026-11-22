// one moving row of feedback cards (right to left , or left to right when reverse is true)
// the cards are shown twice in a row (2 groups) and the track moves exactly half its length , so the loop never jumps
function Stars() {
  return (
    <div className="stars" role="img" aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M12 2.4l2.9 6.1 6.7.8-4.9 4.6 1.3 6.6L12 17.2l-6 3.3 1.3-6.6L2.4 9.3l6.7-.8z" /></svg>
      ))}
    </div>
  );
}

function Card({ f }) {
  return (
    <article className="fb">
      <span className="fb-mark" aria-hidden="true">“</span>
      <p className="fb-text">{f.text}</p>
      <Stars />
      <footer className="fb-who">
        <span className="fb-avatar" aria-hidden="true">{f.name[0]}</span>
        <div><strong>{f.name}</strong><span>{f.place}</span></div>
      </footer>
    </article>
  );
}

function FeedbackRow({ items, reverse, width, speed }) {
  const gap = 24;
  const groupWidth = items.length * 2 * (width + gap);   // one group = the cards twice
  const seconds = Math.round(groupWidth / speed);         // speed = pixels per second
  const group = (hidden) => (
    <div className="fb-group" aria-hidden={hidden}>
      {[...items, ...items].map((f, i) => <Card key={f.name + i} f={f} />)}
    </div>
  );
  return (
    <div className={reverse ? 'fb-row rev' : 'fb-row'} style={{ '--w': width + 'px', '--dur': seconds + 's' }}>
      <div className="fb-track">{group(false)}{group(true)}</div>
    </div>
  );
}

export default FeedbackRow;
