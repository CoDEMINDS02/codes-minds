import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  ExternalLink,
  UtensilsCrossed,
  HeartPulse,
  ScanSearch,
} from "lucide-react";
import CTABanner from "../components/CTABanner";
import usePageMeta from "../hooks/usePageMeta";
import { products } from "../data/products";
import "./Products.css";

const icons = {
  restaurant: UtensilsCrossed,
  health: HeartPulse,
  fabric: ScanSearch,
};

function Products() {
  usePageMeta({
    title: "Products | CØDES-MINDS",
    description:
      "Software platforms built by CØDES-MINDS: RestaurantOS for food delivery, an AI health monitoring platform and ColorIX for textile defect detection.",
  });

  return (
    <>
      {/* HERO */}
      <section className="section products-hero">
        <div className="container">
          <nav className="products-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">Products</span>
          </nav>

          <div className="section-header">
            <span className="eyebrow">OUR PRODUCTS</span>

            <h1>
              Products Built By{" "}
              <span className="gradient-text">CØDES-MINDS</span>
            </h1>

            <p>
              Beyond client websites, we design and build our own platforms.
              Here is what we have built and what is on the way.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="section products-list-section">
        <div className="container products-list">
          {products.map((product, index) => {
            const Icon = icons[product.icon] || ScanSearch;

            return (
              <article
                key={product.slug}
                id={product.slug}
                className={`product ${index % 2 === 1 ? "product--reverse" : ""}`}
              >
                <div className="product__visual">
                  {product.image ? (
                    <img src={product.image} alt={product.name} />
                  ) : (
                    <div className="product__panel">
                      <div className="product__panel-icon">
                        <Icon size={44} />
                      </div>

                      <strong>{product.name}</strong>
                    </div>
                  )}
                </div>

                <div className="product__content">
                  <span
                    className={`product__badge product__badge--${product.status}`}
                  >
                    {product.statusLabel}
                  </span>

                  <h2>{product.name}</h2>
                  <p className="product__tagline">{product.tagline}</p>
                  <p className="product__desc">{product.description}</p>

                  <ul className="product__features">
                    {product.features.map((feature) => (
                      <li key={feature}>
                        <Check size={16} aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="product__tech">
                    {product.tech.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <div className="product__actions">
                    <Link to="/contact" className="btn btn--primary">
                      {product.status === "development"
                        ? "Ask About Early Access"
                        : "Request A Demo"}{" "}
                      <ArrowRight size={16} />
                    </Link>

                    {product.demoUrl && (
                      <a
                        href={product.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn--outline"
                      >
                        Live Demo <ExternalLink size={15} />
                      </a>
                    )}

                    {product.repoUrl && (
                      <a
                        href={product.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn--outline"
                      >
                        View Source <ExternalLink size={15} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="section products-cta">
        <CTABanner
          title="Want A Platform Like These?"
          subtitle="Tell us your idea and we will turn it into a working product."
          buttonText="Discuss Your Idea"
        />
      </section>
    </>
  );
}

export default Products;
