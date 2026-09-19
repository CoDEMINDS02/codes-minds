import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiVite,
  SiJavascript,
  SiCss,
  SiGit,
  SiGithub,
} from "react-icons/si";
import "./TechStack.css";

const techs = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Express", icon: SiExpress, color: "#FFFFFF" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Vite", icon: SiVite, color: "#B73BFE" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "CSS3", icon: SiCss, color: "#1572B6" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
];

// Duplicated so the CSS marquee loop looks seamless (no gap/jump)
const marqueeTechs = [...techs, ...techs];

function TechStack() {
  return (
    <section className="section tech-stack">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">OUR STACK</span>
          <h2>
            Technologies We <span className="gradient-text">Master</span>
          </h2>
          <p>
            We build with modern, battle-tested tools to deliver fast,
            scalable and reliable digital products.
          </p>
        </div>
      </div>

      <div className="tech-stack__marquee-wrapper">
        <div className="tech-stack__marquee-track">
          {marqueeTechs.map((tech, i) => {
            const Icon = tech.icon;
            return (
              <div className="tech-stack__item" key={`${tech.name}-${i}`}>
                <div className="tech-stack__icon">
                  <Icon size={40} color={tech.color} />
                </div>
                <span className="tech-stack__label">{tech.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
