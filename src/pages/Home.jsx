import { useRef } from "react";
import ContactForm from '../components/Contact/ContactForm';
import { Link } from "react-router-dom";
import { ArrowRight, Star, ChevronLeft, ChevronRight } from "lucide-react";
import StatBar from "../components/StatBar";
import ServiceCard from "../components/ServiceCard";
import CTABanner from "../components/CTABanner";
import TechStack from "../components/TechStack";
import ProcessSection from "../components/ProcessSection";
import WhatWeDeliver from "../components/WhatWeDeliver";
import ProductsPreview from "../components/ProductsPreview";
import HeroSlider from "../components/HeroSlider";
import { useServices } from "../hooks/useServices";
import { usePortfolio } from "../hooks/usePortfolio";
import { resolveImage } from "../api/config";
import HeroVisual from "../components/HeroVisual";
import "./Home.css";

const homeStats = [
  { value: "14+", label: "Projects Completed" },
  { value: "5+", label: "Happy Clients" },
  { value: "1+", label: "Years Experience" },
  { value: "99%", label: "Client Satisfaction" },
];

const testimonials = [
  {
    quote:
      "CØDES-MINDS delivered a website beyond our expectations. Their attention to detail and support is amazing.",
    name: "Sarah Khan",
    role: "CEO, StartupHub",
  },
  {
    quote:
      "Professional team, creative ideas and on-time delivery. Highly recommended for any digital project.",
    name: "Ali Raza",
    role: "Marketing Head, Penta",
  },
  {
    quote:
      "Outstanding work on our e-commerce store. They really know how to convert ideas into real success.",
    name: "Ayesha Malik",
    role: "Founder, Trendify",
  },
];

function Home() {
  const { services } = useServices();
  const { projects } = usePortfolio();
  const heroSliderRef = useRef(null);

  return (
    <>
      <section className="home-hero section" style={{ position: "relative" }}>
        <button
          className="home-hero__nav home-hero__nav--prev"
          onClick={() => heroSliderRef.current?.goPrev()}
          aria-label="Previous slide"
        >
          <ChevronLeft size={22} />
        </button>

        <button
          className="home-hero__nav home-hero__nav--next"
          onClick={() => heroSliderRef.current?.goNext()}
          aria-label="Next slide"
        >
          <ChevronRight size={22} />
        </button>

        <div className="container home-hero__grid">
          <div className="home-hero__content">
            <HeroSlider ref={heroSliderRef} />
            <div className="home-hero__actions">
              <Link to="/services" className="btn btn--primary">
                Explore Our Services <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn btn--outline">
                Get In Touch
              </Link>
            </div>
            <div className="home-hero__trust">
              <div className="home-hero__avatars">
                {["S", "A", "M", "R"].map((initial, i) => (
                  <span key={i} className="home-hero__avatar">
                    {initial}
                  </span>
                ))}
              </div>
              <div>
                <div className="home-hero__stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} fill="#eab308" color="#eab308" />
                  ))}
                </div>
                <span>Trusted by 50+ Clients Worldwide</span>
              </div>
            </div>
          </div>

          <div className="home-hero__visual">
            <HeroVisual />
          </div>
        </div>
      </section>

      <section className="section home-intro-video">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">WHO WE ARE</span>
            <h2>
              Meet The <span className="gradient-text">CØDES-MINDS</span> Way
            </h2>
            <p>
              Code. Design. Solve. Watch how we turn ideas into digital
              experiences that work.
            </p>
          </div>
          <div className="home-intro-video__frame">
  <video
    src="https://res.cloudinary.com/o8iikg0u/video/upload/v1788716333/WhatsApp_Video_2026-08-11_at_8.26.41_PM_p0j3ko.mp4"
    autoPlay
    muted
    loop
    playsInline
    controls
  />
</div>
        </div>
      </section>

      <StatBar stats={homeStats} />

      <WhatWeDeliver />

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">WHAT WE DO</span>
            <h2>
              Premium Services To Elevate{" "}
              <span className="gradient-text">Your Business</span>
            </h2>
            <p>
              We combine creativity, technology, and strategy to deliver digital
              solutions that drive real results.
            </p>
          </div>

          <div className="home-services-grid">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <TechStack />

      <ProductsPreview />

      <ProcessSection />

      <section className="section home-projects">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">OUR WORK</span>
            <h2>
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p>
              Here are some of our recent works that helped brands achieve real
              results.
            </p>
          </div>

          <div className="home-projects__grid">
            {projects.slice(0, 3).map((project) => (
              <div key={project._id} className="home-project-card">
                <div className="home-project-card__image">
                  <img
                    src={resolveImage(project.images?.[0])}
                    alt={project.title}
                  />
                </div>
                <div className="home-project-card__body">
                  <span className="home-project-card__tag">
                    {project.service?.title}
                  </span>
                  <h4>{project.title}</h4>
                </div>
              </div>
            ))}
          </div>

          <div className="home-projects__cta">
            <Link to="/portfolio" className="btn btn--outline">
              View All Projects <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section home-testimonials">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">CLIENTS LOVE US</span>
            <h2>
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
          </div>

          <div className="home-testimonials__grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <span className="testimonial-card__quote">&ldquo;</span>
                <p>{t.quote}</p>
                <div className="testimonial-card__footer">
                  <div className="testimonial-card__avatar">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h5>{t.name}</h5>
                    <span>{t.role}</span>
                  </div>
                  <div className="testimonial-card__stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={13} fill="#eab308" color="#eab308" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

<section id="contact" className="section" style={{ backgroundColor: '#0a0a0a' }}>
  <ContactForm />
</section>
      

<section className="section home-cta">
        <CTABanner />
      </section>
    </>
  );
}

export default Home;
