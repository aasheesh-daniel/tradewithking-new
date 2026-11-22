import BeamArt from './BeamArt.jsx';

// top banner used by every inner page (Programs , Performance , About , Contact)
function PageHeader({ label, title, text }) {
  return (
    <section className="page-head">
      <BeamArt />
      <div className="container">
        <p className="label">{label}</p>
        <h1 className="page-title">{title}</h1>
        {text && <p className="lead">{text}</p>}
      </div>
    </section>
  );
}

export default PageHeader;
