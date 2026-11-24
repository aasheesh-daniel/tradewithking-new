import Hero from '../components/Hero.jsx';
import Markets from '../components/Markets.jsx';
import Why from '../components/Why.jsx';
import Community from '../components/Community.jsx';

// HOME PAGE = hero + markets + why choose + community
function Home({ openPopup }) {
  return (
    <>
      <Hero openPopup={openPopup} />
      <Markets />
      <Why />
      <Community openPopup={openPopup} />
    </>
  );
}

export default Home;
