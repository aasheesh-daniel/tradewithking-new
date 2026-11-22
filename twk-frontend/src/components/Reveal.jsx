import { useEffect, useRef } from 'react';

// scroll animation : the element fades up the first time it comes on screen
// useReveal gives a ref , put it on any element that has class "reveal"
export function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) { el.classList.add('in'); return; } //old browsers : just show it
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { el.classList.add('in'); io.disconnect(); }
    }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

// wrapper version : <Reveal delay={0.2}>...</Reveal>
function Reveal({ children, delay = 0, className = '' }) {
  const ref = useReveal();
  return <div ref={ref} className={'reveal ' + className} style={{ '--d': delay + 's' }}>{children}</div>;
}

export default Reveal;
