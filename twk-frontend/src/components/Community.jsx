import BeamArt from './BeamArt.jsx';

function Community({ openPopup }) {
  return (
    <section className="section community-sec">
      <BeamArt both />
      <div className="container community">
        <h2>Grow with knowledge.<br /><span className="teal">Trade with discipline.</span></h2>
        <div>
          <p className="lead">Learning next to other traders keeps you consistent. Ask questions, follow live market discussions and grow with people who take trading seriously.</p>
          <button className="btn btn-teal" onClick={openPopup}>Join the Community</button>
        </div>
      </div>
    </section>
  );
}

export default Community;
