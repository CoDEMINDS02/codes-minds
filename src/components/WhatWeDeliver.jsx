import { Code2, Palette, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./WhatWeDeliver.css";

const deliverHubs = [
  {
    number: "01",
    icon: Code2,
    title: "Development",
    description:
      "Websites, apps and online stores built to perform, scale and grow with your business.",
    tags: ["Web Development", "Mobile App Development", "E-commerce Solutions"],
  },
  {
    number: "02",
    icon: Palette,
    title: "Design & Creative",
    description:
      "Interfaces, visuals and video content that make your brand memorable and easy to trust.",
    tags: ["UI/UX Design", "Graphic Design", "Video Editing"],
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Growth & Support",
    description:
      "Getting your site found online and keeping it fast, secure and up to date.",
    tags: ["SEO Optimization", "Website Maintenance"],
  },
];

function WhatWeDeliver() {
  return (
    <section className="section what-we-deliver">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">WHAT WE DELIVER</span>
          <h2>
            Technology Services Built For{" "}
            <span className="gradient-text">Real Business Growth</span>
          </h2>
          <p>
            From first sketch to launch and beyond — we design, build and
            support digital products that actually move the needle.
          </p>
        </div>

        <div className="what-we-deliver__grid">
          {deliverHubs.map((hub) => {
            const Icon = hub.icon;

            return (
              <Link
                to="/services"
                key={hub.number}
                className="deliver-hub-card"
              >
                <div className="deliver-hub-card__top">
                  <span className="deliver-hub-card__number">
                    {hub.number}
                  </span>
                  <span className="deliver-hub-card__icon">
                    <Icon size={22} />
                  </span>
                </div>

                <h3>{hub.title}</h3>
                <p>{hub.description}</p>

                <div className="deliver-hub-card__tags">
                  {hub.tags.map((tag) => (
                    <span key={tag} className="deliver-hub-card__tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <span className="deliver-hub-card__link">
                  Explore <ArrowRight size={15} />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhatWeDeliver;
