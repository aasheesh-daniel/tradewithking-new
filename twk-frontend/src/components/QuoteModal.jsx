import { useState, useEffect } from 'react';
import { links } from '../data/content.js';

// "Ask for a quote" box : the visitor sends an email to the owner (Gmail , email app , or copy the address)
function QuoteModal({ plan, close }) {
  const [copied, setCopied] = useState(false);
  const email = links.email;

  // message that will already be typed inside the email
  const subject = plan ? 'Quote request - ' + plan : 'Quote request';
  const body = `Hello Trade With King,\n\nI would like to ask for a quote${plan ? ' for ' + plan : ''}.\n\nName:\nPhone (optional):\n\nThank you.`;
  const gmailLink = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + email + '&su=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  const mailtoLink = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

  // Esc key closes the box
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') close(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [close]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) { /* old browser : the address is visible above so the user can copy it by hand */ }
  };

  return (
    <div className="overlay" onClick={close}>
      <div className="popup" role="dialog" aria-modal="true" aria-labelledby="quote-title" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="popup-close" aria-label="Close" onClick={close}>✕</button>
        <h3 id="quote-title">Ask for a quote</h3>
        {plan && <p className="popup-plan">{plan}</p>}
        <p>Send us an email and we will reply with your quote.</p>
        <div className="mail-box"><img src="/icons/mail.png" alt="" width="34" height="34" /><span>{email}</span></div>
        <a className="btn btn-teal" href={gmailLink} target="_blank" rel="noreferrer" onClick={close}>Open Gmail</a>
        <a className="btn btn-red" href={mailtoLink} onClick={close}>Open email app</a>
        <button type="button" className="btn btn-line" onClick={copy}>{copied ? 'Copied ✓' : 'Copy email address'}</button>
      </div>
    </div>
  );
}

export default QuoteModal;
