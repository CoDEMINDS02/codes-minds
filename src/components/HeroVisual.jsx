import {
  Code2,
  Palette,
  BrainCircuit,
  Layers3,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import "./HeroVisual.css";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    text: "Modern & scalable",
    className: "hero-orbit-card--web",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    text: "Beautiful experiences",
    className: "hero-orbit-card--design",
  },
  {
    icon: BrainCircuit,
    title: "AI Solutions",
    text: "Smart digital systems",
    className: "hero-orbit-card--ai",
  },
  {
    icon: Layers3,
    title: "Full Stack",
    text: "Complete solutions",
    className: "hero-orbit-card--stack",
  },
];

function HeroVisual() {
  return (
    <div className="cm-hero-visual">
      {/* Ambient background */}
      <div className="cm-hero-glow cm-hero-glow--one" />
      <div className="cm-hero-glow cm-hero-glow--two" />

      {/* Tech grid */}
      <div className="cm-hero-grid" />

      {/* Orbit rings */}
      <div className="cm-orbit cm-orbit--outer">
        <span className="cm-orbit-dot cm-orbit-dot--one" />
        <span className="cm-orbit-dot cm-orbit-dot--two" />
      </div>

      <div className="cm-orbit cm-orbit--inner">
        <span className="cm-orbit-dot cm-orbit-dot--three" />
      </div>

      {/* Floating service cards */}
      {services.map((service) => {
        const Icon = service.icon;

        return (
          <div
            key={service.title}
            className={`cm-hero-service-card ${service.className}`}
          >
            <div className="cm-hero-service-icon">
              <Icon size={18} />
            </div>

            <div>
              <strong>{service.title}</strong>
              <span>{service.text}</span>
            </div>
          </div>
        );
      })}

      {/* Main CM identity */}
      <div className="cm-core">
        <div className="cm-core__halo" />

        <div className="cm-core__symbol">
          <span>C</span>
          <span className="cm-core__slash">/</span>
          <span>M</span>
        </div>

        <div className="cm-core__spark">
          <Sparkles size={13} />
        </div>

        <div className="cm-core__label">
          <span>CØDES-MINDS</span>
          <small>IDEAS × CODE × IMPACT</small>
        </div>
      </div>

      {/* Small floating code element */}
      <div className="cm-code-pill">
        <span>&lt;/&gt;</span>
        <span>Build something remarkable</span>
      </div>

      {/* Bottom mini stats */}
      <div className="cm-mini-stats">
        <div>
          <strong>14+</strong>
          <span>Projects</span>
        </div>

        <i />

        <div>
          <strong>5+</strong>
          <span>Clients</span>
        </div>

        <i />

        <div>
          <strong>99%</strong>
          <span>Satisfaction</span>
        </div>
      </div>

      {/* Explore indicator */}
      <div className="cm-explore">
        <span>EXPLORE</span>
        <ArrowUpRight size={14} />
      </div>
    </div>
  );
}

export default HeroVisual;