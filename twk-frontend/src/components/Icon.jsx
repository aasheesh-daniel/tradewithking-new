// all the small line drawings (logos) of the website , used by Features and Why sections
// every drawing is made inside a 48 x 48 box , colour comes from css (currentColor)
const drawings = {
  clock: <><circle cx="24" cy="24" r="15" /><path d="M24 14v10l7 4" /><path d="M24 3v3M24 42v3M3 24h3M42 24h3" /></>,
  cap: <><path d="M3 18 24 8l21 10-21 10z" /><path d="M11 23v10c0 3 6 6 13 6s13-3 13-6V23" /><path d="M45 18v13" /></>,
  people: <><circle cx="24" cy="15" r="6" /><path d="M12 39c0-7 5-12 12-12s12 5 12 12" /><circle cx="8" cy="20" r="4" /><path d="M2 37c0-5 2-8 6-9" /><circle cx="40" cy="20" r="4" /><path d="M46 37c0-5-2-8-6-9" /></>,
  growth: <><rect x="5" y="30" width="7" height="12" /><rect x="17" y="24" width="7" height="18" /><rect x="29" y="18" width="7" height="24" /><path d="M5 19l11-9 8 5 16-11" /><path d="M32 4h8v8" /></>,
  medal: <><circle cx="24" cy="18" r="11" /><path d="M24 12l2.2 4.6 5 .7-3.6 3.5.9 5-4.5-2.4-4.5 2.4.9-5-3.6-3.5 5-.7z" /><path d="M17 28l-5 15 12-6 12 6-5-15" /></>,
  layers: <><path d="M24 5 4 15l20 10 20-10z" /><path d="M4 24l20 10 20-10" /><path d="M4 33l20 10 20-10" /></>,
  candles: <><path d="M10 6v8M10 34v8M24 4v6M24 32v12M38 12v6M38 34v8" /><rect x="6" y="14" width="8" height="20" rx="1" /><rect x="20" y="10" width="8" height="22" rx="1" /><rect x="34" y="18" width="8" height="16" rx="1" /></>,
  book: <><path d="M24 11c-5-4-12-5-19-4v29c7-1 14 0 19 4 5-4 12-5 19-4V7c-7-1-14 0-19 4z" /><path d="M24 11v29" /></>,
  branch: <><circle cx="9" cy="24" r="4" /><circle cx="39" cy="9" r="4" /><circle cx="39" cy="24" r="4" /><circle cx="39" cy="39" r="4" /><path d="M13 24h6c5 0 5-15 16-15M13 24h22M13 24h6c5 0 5 15 16 15" /></>,
};

function Icon({ name, size = 46 }) {
  return (
    <svg className="icon" viewBox="0 0 48 48" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {drawings[name]}
    </svg>
  );
}

export default Icon;
