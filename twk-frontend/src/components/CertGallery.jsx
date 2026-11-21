import { useEffect, useRef, useState } from 'react';
import { certificates } from '../data/certs.js';
import { useReveal } from './Reveal.jsx';

// one picture in the gallery
function Item({ c, i, open }) {
  const ref = useReveal();
  return (
    <button ref={ref} className="cert reveal" style={{ '--d': (i % 3) * 0.12 + 's' }} onClick={() => open(i)} aria-label={'Open payout certificate ' + (i + 1)}>
      <img src={c.src} width={c.w} height={c.h} alt={'Payout certificate ' + (i + 1)} loading="lazy" />
      <span className="cert-view">View</span>
    </button>
  );
}

// big viewer : arrows , keyboard (Esc , left , right) and swipe on phones
function Lightbox({ index, setIndex, close }) {
  const total = certificates.length;
  const touchX = useRef(null);
  const go = (step) => setIndex((index + step + total) % total);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden'; //page behind does not scroll
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  });

  const c = certificates[index];
  return (
    <div className="lb" role="dialog" aria-modal="true" aria-label="Payout certificate viewer" onClick={close}
      onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
      onTouchEnd={(e) => { const d = e.changedTouches[0].clientX - touchX.current; if (Math.abs(d) > 60) go(d < 0 ? 1 : -1); }}>
      <button className="lb-btn lb-close" aria-label="Close" onClick={close}>✕</button>
      <button className="lb-btn lb-prev" aria-label="Previous certificate" onClick={(e) => { e.stopPropagation(); go(-1); }}>‹</button>
      <img key={c.src} className="lb-img" src={c.src} alt={'Payout certificate ' + (index + 1)} onClick={(e) => e.stopPropagation()} />
      <button className="lb-btn lb-next" aria-label="Next certificate" onClick={(e) => { e.stopPropagation(); go(1); }}>›</button>
      <p className="lb-count">{index + 1} / {total}</p>
    </div>
  );
}

function CertGallery() {
  const [open, setOpen] = useState(null); //null = closed , otherwise the number of the picture
  return (
    <>
      <div className="cert-grid">
        {certificates.map((c, i) => <Item key={c.src} c={c} i={i} open={setOpen} />)}
      </div>
      {open !== null && <Lightbox index={open} setIndex={setOpen} close={() => setOpen(null)} />}
    </>
  );
}

export default CertGallery;
