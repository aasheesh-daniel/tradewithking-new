// red slanted light bar (css only) , colours taken from the red slab of the client's reference car image
// both = fades at top and bottom (hero , community) , without both it fades only at the top
function BeamArt({ both }) {
  return (
    <div className={both ? 'beam-art both' : 'beam-art'} aria-hidden="true">
      <span className="b-glow"></span>
      <span className="b-main"></span>
    </div>
  );
}

export default BeamArt;
