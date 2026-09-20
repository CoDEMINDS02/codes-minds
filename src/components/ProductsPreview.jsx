import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { products } from "../data/products";
import "./ProductsPreview.css";

function ProductsPreview() {
  return (
    <section className="section products-preview">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">OUR PRODUCTS</span>
          <h2>
            Digital Products{" "}
            <span className="gradient-text">Built By Our Own Team</span>
          </h2>
          <p>
            Real platforms we&apos;ve engineered end-to-end — proof of the work
            we bring to every client project.
          </p>
        </div>

        <div className="products-preview__grid">
          {products.map((product) => (
            <Link
              to="/products"
              key={product.slug}
              className="products-preview-card"
            >
              <span
                className={`products-preview-card__badge products-preview-card__badge--${product.status}`}
              >
                {product.statusLabel}
              </span>

              <h3>{product.name}</h3>
              <p>{product.tagline}</p>

              <div className="products-preview-card__tech">
                {product.tech.slice(0, 3).map((tech) => (
                  <span key={tech} className="products-preview-card__tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <span className="products-preview-card__link">
                View Details <ArrowRight size={15} />
              </span>
            </Link>
          ))}
        </div>

        <div className="products-preview__cta">
          <Link to="/products" className="btn btn--outline">
            View All Products <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProductsPreview;
