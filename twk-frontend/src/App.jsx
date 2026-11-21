import { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import CommunityPopup from './components/CommunityPopup.jsx';
import QuoteModal from './components/QuoteModal.jsx';
import Home from './pages/Home.jsx';
import ProgramsPage from './pages/ProgramsPage.jsx';
import PerformancePage from './pages/PerformancePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import MarketPage from './pages/MarketPage.jsx';
import LegalPage from './pages/LegalPage.jsx';

// title shown in the browser tab for each page (good for google too)
const titles = {
  '/': 'Trade With King | Forex Trading Mentorship',
  '/program': 'Program | Trade With King',
  '/privacy-policy': 'Privacy Policy | Trade With King',
  '/terms-and-conditions': 'Terms & Conditions | Trade With King',
  '/refund-policy': 'Refund Policy | Trade With King',
  '/risk-disclosure': 'Risk Disclosure | Trade With King',
  '/performance': 'Performance | Trade With King',
  '/about': 'About Us | Trade With King',
  '/contact': 'Contact | Trade With King',
  '/markets/london': 'London Session | Trade With King',
  '/markets/newyork': 'NYSE Open | Trade With King',
  '/markets/gold': 'Gold Trading | Trade With King',
};

// when the page (or the #section of the link) changes : set the title , scroll there , and give that section a small "pop"
function PageChange() {
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    document.title = titles[pathname] || titles['/'];
    if (!hash) { window.scrollTo(0, 0); return; }
    const timer = setTimeout(() => {
      const el = document.getElementById(hash.slice(1));
      if (!el) return;
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      el.classList.remove('pop');
      void el.offsetWidth; //restarts the animation if the same section is clicked again
      el.classList.add('pop');
      setTimeout(() => el.classList.remove('pop'), 1500);
    }, 80);
    return () => clearTimeout(timer);
  }, [pathname, hash, key]);
  return null;
}

function App() {
  // --- POPUP MEMORY --- true = discord/telegram popup is open
  const [popupOpen, setPopupOpen] = useState(false);
  const openPopup = () => setPopupOpen(true); //every "Join the Community" button calls this

  // --- QUOTE BOX MEMORY --- null = closed , otherwise it holds the plan name ('' = general)
  const [quotePlan, setQuotePlan] = useState(null);
  const openQuote = (plan) => setQuotePlan(plan || '');

  return (
    <>
      <PageChange />
      <Navbar openPopup={openPopup} />
      <main>
        {/* each Route = one page */}
        <Routes>
          <Route path="/" element={<Home openPopup={openPopup} />} />
          <Route path="/program" element={<ProgramsPage openQuote={openQuote} />} />
          <Route path="/programs" element={<Navigate to="/program" replace />} />
          <Route path="/performance" element={<PerformancePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/markets/:slug" element={<MarketPage openPopup={openPopup} openQuote={openQuote} />} />
          {/* policy pages : one template , the text comes from data/legal.js */}
          <Route path="/privacy-policy" element={<LegalPage slug="privacy-policy" />} />
          <Route path="/terms-and-conditions" element={<LegalPage slug="terms-and-conditions" />} />
          <Route path="/refund-policy" element={<LegalPage slug="refund-policy" />} />
          <Route path="/risk-disclosure" element={<LegalPage slug="risk-disclosure" />} />
          <Route path="/contact" element={<ContactPage openQuote={openQuote} />} />
          <Route path="*" element={<Home openPopup={openPopup} />} />
        </Routes>
      </main>
      <Footer />
      {quotePlan !== null && <QuoteModal plan={quotePlan} close={() => setQuotePlan(null)} />}
      {popupOpen && <CommunityPopup close={() => setPopupOpen(false)} />}
    </>
  );
}

export default App;
