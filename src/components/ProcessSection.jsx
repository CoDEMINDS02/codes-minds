import { Search, PenTool, Code2, CheckCircle2, Rocket, LifeBuoy } from "lucide-react";
import "./ProcessSection.css";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discovery",
    description: "Understanding your goals, audience and requirements.",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Design",
    description: "Crafting wireframes and UI/UX that match your brand.",
  },
  {
    icon: Code2,
    number: "03",
    title: "Development",
    description: "Building fast, scalable and clean code.",
  },
  {
    icon: CheckCircle2,
    number: "04",
    title: "Testing & QA",
    description: "Making sure everything works flawlessly.",
  },
  {
    icon: Rocket,
    number: "05",
    title: "Deployment",
    description: "Launching your product to the world.",
  },
  {
    icon: LifeBuoy,
    number: "06",
    title: "Support",
    description: "Ongoing maintenance and improvements.",
  },
];

function ProcessSection() {
  return (
    <section className="section process-section">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">HOW WE WORK</span>
          <h2>
            Our Proven <span className="gradient-text">Process</span>
          </h2>
          <p>
            A clear, structured workflow that takes your idea from concept to
            a fully launched, supported product.
          </p>
        </div>

        <div className="process-timeline">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div className="process-step" key={step.title}>
                <div className="process-step__top">
                  <div className="process-step__icon">
                    <Icon size={24} />
                  </div>
                  <span className="process-step__number">{step.number}</span>
                </div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
                {index < steps.length - 1 && (
                  <span className="process-step__connector" aria-hidden="true" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
