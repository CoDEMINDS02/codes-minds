import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import "./ServiceCard.css";

function ServiceCard({ service }) {
  const Icon = service.icon;
  const isComingSoon = service.status === "coming-soon";

  return (
    <Link
      to={`/services/${service.slug}`}
      className={`servicecard servicecard--${service.color}${
        isComingSoon ? " servicecard--soon" : ""
      }`}
    >
      {isComingSoon && (
        <span className="servicecard__badge">
          <Clock size={12} /> Coming Soon
        </span>
      )}
      <div className="servicecard__icon">
        <Icon size={26} />
      </div>
      <h3>{service.title}</h3>
      <p>{service.shortDesc}</p>
      <span className="servicecard__link">
        {isComingSoon ? "View Details" : "Learn More"} <ArrowRight size={16} />
      </span>
    </Link>
  );
}

export default ServiceCard;
