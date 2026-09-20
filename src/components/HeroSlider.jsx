import { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import "./HeroSlider.css";

const slides = [
  {
    badge: "WELCOME TO CØDES-MINDS",
    titleMain: "We Code Ideas. ",
    titleAccent: "You Get Results.",
    text: "We are a creative digital agency delivering modern web solutions, stunning designs, and digital experiences that help your business grow and stand out.",
  },
  {
    badge: "MODERN & SCALABLE",
    titleMain: "Modern Web & App ",
    titleAccent: "Experiences Built For Growth",
    text: "From responsive websites to powerful mobile apps, we build digital products that help your brand grow, engage and convert.",
  },
  {
    badge: "END-TO-END DELIVERY",
    titleMain: "From Idea To Deployment — ",
    titleAccent: "We've Got You Covered",
    text: "Strategy, design, development and support — we handle every step so you can focus on running your business.",
  },
];

const SLIDE_DURATION = 5000;

const HeroSlider = forwardRef(function HeroSlider(_, ref) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, []);

  const slide = slides[index];

  const goPrev = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goNext = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  useImperativeHandle(ref, () => ({
    goPrev,
    goNext,
  }));

  return (
    <div className="hero-slider">
      <span key={`badge-${index}`} className="badge hero-slider__fade">
        {slide.badge}
      </span>

      <h1 key={`title-${index}`} className="hero-slider__fade">
        {slide.titleMain}
        <span className="gradient-text">{slide.titleAccent}</span>
      </h1>

      <p key={`text-${index}`} className="hero-slider__fade">
        {slide.text}
      </p>

      <div className="hero-slider__dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero-slider__dot ${
              i === index ? "hero-slider__dot--active" : ""
            }`}
            onClick={() => setIndex(i)}
            aria-label={`Show slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
});

export default HeroSlider;
