import "./AmbientOrb.css";

// A soft, blurred glow that drifts slowly behind hero content — an ambient
// light accent in the site's own cyan/violet colours (not a literal 3D ball).
// Purely decorative: it never captures clicks and sits behind the content.
function AmbientOrb({ className = "" }) {
  return <div className={`ambient-orb ${className}`} aria-hidden="true" />;
}

export default AmbientOrb;
