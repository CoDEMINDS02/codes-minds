import { ChevronDown } from "lucide-react";
import "./FAQ.css";

// items: [{ q: "Question?", a: "Answer text or JSX" }]
function FAQ({
  items = [],
  eyebrow = "FAQ",
  title = "Frequently Asked",
  highlight = "Questions",
  subtitle,
}) {
  return (
    <div className="container">
      <div className="section-header">
        <span className="eyebrow">{eyebrow}</span>

        <h2>
          {title} <span className="gradient-text">{highlight}</span>
        </h2>

        {subtitle && <p>{subtitle}</p>}
      </div>

      <div className="faq">
        {items.map((item) => (
          <details className="faq__item" key={item.q}>
            <summary>
              <span>{item.q}</span>
              <ChevronDown size={18} aria-hidden="true" />
            </summary>

            <div className="faq__answer">{item.a}</div>
          </details>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
