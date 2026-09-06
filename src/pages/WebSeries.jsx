import { useEffect, useState } from "react";
import CTABanner from "../components/CTABanner";
import { getWebSeries } from "../api/webSeries";
import { resolveImage } from "../api/config";
import "./WebSeries.css";

function WebSeries() {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    getWebSeries()
      .then((res) => setEpisodes(res.data || []))
      .catch((err) => console.error("Failed to load web series:", err))
      .finally(() => setLoading(false));
  }, []);

  const openEpisode = (episode) => {
    setSelected(episode);
    setActiveImage(0);
  };

  const closeEpisode = () => {
    setSelected(null);
    setActiveImage(0);
  };

  return (
    <>
      <section className="section web-series-hero">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">OUR WEB SERIES</span>
            <h1>
              Behind The <span className="gradient-text">Scenes.</span>
            </h1>
            <p>
              A look through our web series — episode slides, moments, and
              highlights from the journey so far.
            </p>
          </div>
        </div>
      </section>

      <section className="section web-series-grid-section">
        <div className="container">
          {!loading && episodes.length === 0 && (
            <p style={{ textAlign: "center", color: "var(--color-text-muted)" }}>
              No episodes published yet. Check back soon.
            </p>
          )}

          <div className="web-series-grid">
            {episodes.map((episode) => (
              <div
                key={episode._id}
                className="web-series-card"
                onClick={() => openEpisode(episode)}
              >
                <div className="web-series-card__image">
                  <img
                    src={resolveImage(episode.images?.[0])}
                    alt={episode.title}
                  />
                  <div className="web-series-card__overlay">
                    <span>View Gallery</span>
                  </div>
                  {episode.images?.length > 1 && (
                    <span className="web-series-card__count">
                      {episode.images.length} photos
                    </span>
                  )}
                </div>

                <div className="web-series-card__body">
                  {episode.episodeNumber > 0 && (
                    <span className="web-series-card__tag">
                      Episode {episode.episodeNumber}
                    </span>
                  )}
                  <h3>{episode.title}</h3>
                  {episode.description && <p>{episode.description}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section web-series-cta">
        <CTABanner
          title="Want To Collaborate On A Series?"
          subtitle="Let's talk about your next video or content project."
        />
      </section>

      {selected && (
        <div className="web-series-modal-overlay" onClick={closeEpisode}>
          <div
            className="web-series-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="web-series-modal__close" onClick={closeEpisode}>
              &times;
            </button>

            <div className="web-series-modal__media">
              <img
                src={resolveImage(selected.images?.[activeImage])}
                alt={`${selected.title} slide ${activeImage + 1}`}
                className="web-series-modal__img"
              />
            </div>

            <div className="web-series-modal__body">
              {selected.episodeNumber > 0 && (
                <span className="web-series-card__tag">
                  Episode {selected.episodeNumber}
                </span>
              )}
              <h2>{selected.title}</h2>
              {selected.description && <p>{selected.description}</p>}

              {selected.images?.length > 1 && (
                <div className="web-series-modal__thumbs">
                  {selected.images.map((img, index) => (
                    <button
                      key={index}
                      className={`web-series-modal__thumb ${
                        index === activeImage ? "active" : ""
                      }`}
                      onClick={() => setActiveImage(index)}
                    >
                      <img src={resolveImage(img)} alt={`Slide ${index + 1}`} />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default WebSeries;