import ContactForm from "../components/Contact/ContactForm";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";

import StatBar from "../components/StatBar";
import ServiceCard from "../components/ServiceCard";
import CTABanner from "../components/CTABanner";
import TechStack from "../components/TechStack";
import ProcessSection from "../components/ProcessSection";
import WhatWeDeliver from "../components/WhatWeDeliver";
import ProductsPreview from "../components/ProductsPreview";
import HeroVisual from "../components/HeroVisual";

import { useServices } from "../hooks/useServices";
import { usePortfolio } from "../hooks/usePortfolio";
import { resolveImage } from "../api/config";

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

  return (
    <>
      {/* =====================================================
          HERO SECTION (new video as background)
          ===================================================== */}

      <section
        className="home-hero section"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <video
          src="/videos/intro.mp4"
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            background: "rgba(8, 4, 20, 0.55)",
          }}
        />

        <div
          className="container home-hero__grid"
          style={{ position: "relative", zIndex: 2 }}
        >
          {/* LEFT — HERO CONTENT */}
          <div className="home-hero__content">
            <span className="badge">CØDES-MINDS · DIGITAL AGENCY</span>

            <h1>
              We Build Digital{" "}
              <span className="gradient-text">Experiences.</span>
            </h1>

            <p>
              From idea to launch, we turn your vision into powerful digital
              solutions that are built to perform, scale, and stand out.
            </p>

            <div className="home-hero__actions">
              <Link to="/contact" className="btn btn--primary">
                Start a Project
                <ArrowRight size={16} />
              </Link>

              <Link to="/portfolio" className="btn btn--outline">
                Explore Work
              </Link>
            </div>

            <div className="home-hero__trust">
              <div className="home-hero__avatars">
                {["C", "M", "D", "S"].map((initial, i) => (
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

                <span>Building ideas into digital experiences</span>
              </div>
            </div>
          </div>

          {/* RIGHT — PREMIUM HERO VISUAL */}
          <div className="home-hero__visual">
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO VIDEO (previous video)
          ===================================================== */}

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

      {/* =====================================================
          STATS
          ===================================================== */}

      <StatBar stats={homeStats} />

      {/* =====================================================
          WHAT WE DELIVER
          ===================================================== */}

      <WhatWeDeliver />

      {/* =====================================================
          SERVICES
          ===================================================== */}

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">WHAT WE DO</span>

            <h2>
              Premium Services To Elevate{" "}
              <span className="gradient-text">Your Business</span>
            </h2>

            <p>
              We combine creativity, technology, and strategy to deliver
              digital solutions that drive real results.
            </p>
          </div>

          <div className="home-services-grid">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          TECHNOLOGY STACK
          ===================================================== */}

      <TechStack />

      {/* =====================================================
          PRODUCTS
          ===================================================== */}

      <ProductsPreview />

      {/* =====================================================
          PROCESS
          ===================================================== */}

      <ProcessSection />

      {/* =====================================================
          PROJECTS
          ===================================================== */}

      <section className="section home-projects">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">OUR WORK</span>

            <h2>
              Featured <span className="gradient-text">Projects</span>
            </h2>

            <p>
              Here are some of our recent works that helped brands achieve
              real results.
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
              View All Projects
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          TESTIMONIALS
          ===================================================== */}

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
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} size={13} fill="#eab308" color="#eab308" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT
          ===================================================== */}

      <section
        id="contact"
        className="section"
        style={{ backgroundColor: "#0a0a0a" }}
      >
        <ContactForm />
      </section>

      {/* =====================================================
          CTA
          ===================================================== */}

      <section className="section home-cta">
        <CTABanner />
      </section>
    </>
  );
}

export default Home;