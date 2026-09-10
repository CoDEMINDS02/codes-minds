import { useState } from "react";
import CTABanner from "../components/CTABanner";
import { useServices } from "../hooks/useServices";
import { usePortfolio } from "../hooks/usePortfolio";
import { resolveImage } from "../api/config";
import "./Portfolio.css";

function Portfolio() {
  const { services } = useServices();
  const [activeService, setActiveService] = useState("all");
  const { projects, loading } = usePortfolio(
    activeService === "all" ? undefined : activeService
  );

  const [hoveredId, setHoveredId] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
    const openProject = (project) => {
    setSelectedProject(project);
    window.dispatchEvent(new Event("codesminds:modalOpened"));
  };

  const stats = [
    { value: `${projects.length}+`, label: "Projects Completed" },
    { value: "5+", label: "Happy Clients" },
    { value: "1+", label: "Years Experience" },
    { value: "99%", label: "Client Satisfaction" },
  ];

  return (
    <>
      {/* HERO */}
      <section className="section portfolio-hero">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">OUR PORTFOLIO</span>

            <h1>
              Our Work. <span className="gradient-text">Your Success.</span>
            </h1>

            <p>
              Explore our latest projects that showcase creativity, technical
              expertise and results that speak for themselves.
            </p>
          </div>

          <div className="portfolio-stats">
            {stats.map((stat, index) => (
              <div key={index} className="portfolio-stat">
                <span className="gradient-text">{stat.value}</span>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="section portfolio-grid-section">
        <div className="container">

          {/* FILTERS */}
          <div className="portfolio-filters">
            <button
              type="button"
              className={`portfolio-filter-btn ${
                activeService === "all" ? "active" : ""
              }`}
              onClick={() => setActiveService("all")}
            >
              All
            </button>

            {services.map((service) => (
              <button
                type="button"
                key={service._id || service.id}
                className={`portfolio-filter-btn ${
                  activeService === (service._id || service.id)
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  setActiveService(service._id || service.id)
                }
              >
                {service.title}
              </button>
            ))}
          </div>

          {/* EMPTY STATE */}
          {!loading && projects.length === 0 && (
            <p
              style={{
                textAlign: "center",
                color: "var(--color-text-muted)",
              }}
            >
              No projects yet in this category.
            </p>
          )}

          {/* LOADING */}
          {loading && (
            <p
              style={{
                textAlign: "center",
                color: "var(--color-text-muted)",
              }}
            >
              Loading projects...
            </p>
          )}

          {/* PROJECT GRID */}
          {!loading && projects.length > 0 && (
            <div className="portfolio-grid">
              {projects.map((project) => (
                <div
                  key={project._id}
                  className="portfolio-card"
                                    onClick={() => openProject(project)}
                  onMouseEnter={() => setHoveredId(project._id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* MEDIA */}
                  <div className="portfolio-card__image">

                    {/* PROJECT IMAGE */}
                    <img
                      src={resolveImage(project.images?.[0])}
                      alt={project.title || "Portfolio project"}
                    />

                    {/* PROJECT VIDEO */}
                    {project.video && hoveredId === project._id && (
                      <video
                        className="portfolio-card__video"
                        src={project.video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                      />
                    )}
                  </div>

                  {/* CONTENT */}
                  <div className="portfolio-card__body">
                    <div className="portfolio-card__tags">
                      {project.service?.title && (
                        <span className="portfolio-card__tag">
                          {project.service.title}
                        </span>
                      )}
                    </div>

                    <h3>{project.title}</h3>

                    <p>{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section portfolio-cta">
        <CTABanner
          title="Have A Project In Mind?"
          subtitle="Let's work together and create something amazing."
        />
      </section>

      {/* PROJECT MODAL */}
      {selectedProject && (
        <div
          className="portfolio-modal-overlay"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="portfolio-modal"
            onClick={(event) => event.stopPropagation()}
          >
            {/* CLOSE */}
            <button
              type="button"
              className="portfolio-modal__close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project"
            >
              &times;
            </button>

            {/* MODAL MEDIA */}
            <div className="portfolio-modal__media">
              {selectedProject.video ? (
                <video
                  className="portfolio-modal__video"
                  src={selectedProject.video}
                  controls
                  autoPlay
                  muted
                  playsInline
                  preload="metadata"
                />
              ) : (
                <img
                  className="portfolio-modal__img"
                  src={resolveImage(selectedProject.images?.[0])}
                  alt={selectedProject.title || "Portfolio project"}
                />
              )}
            </div>

            {/* MODAL CONTENT */}
            <div className="portfolio-modal__body">
              {selectedProject.service?.title && (
                <span className="portfolio-card__tag">
                  {selectedProject.service.title}
                </span>
              )}

              <h2>{selectedProject.title}</h2>

              <p>{selectedProject.description}</p>

              {selectedProject.client && (
                <p className="portfolio-modal__client">
                  Client: {selectedProject.client}
                </p>
              )}

              {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-modal__link"
                >
                  Visit Project
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Portfolio;