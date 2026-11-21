import { links } from '../data/content.js';

// small box that shows discord and telegram links , click outside or on X to close
function CommunityPopup({ close }) {
  return (
    <div className="overlay" onClick={close}>
      <div className="popup" onClick={(e) => e.stopPropagation()}> {/* stopPropagation = clicking inside the box does not close it */}
        <button className="popup-close" aria-label="Close" onClick={close}>✕</button>
        <h3>Join the community</h3>
        <p>Choose where you want to join. Both groups are free.</p>
        <a className="btn btn-teal" href={links.discord} target="_blank" rel="noreferrer">Join on Discord</a>
        <a className="btn btn-line" href={links.telegram} target="_blank" rel="noreferrer">Join on Telegram</a>
      </div>
    </div>
  );
}

export default CommunityPopup;
