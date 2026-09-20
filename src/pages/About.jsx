import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  Gem,
  Lightbulb,
  Eye,
  ShieldCheck,
  TrendingUp,
  Rocket,
  MapPin,
  Globe,
  MessageSquare,
  LifeBuoy,
} from "lucide-react";
import ProcessSteps from "../components/ProcessSteps";
import CTABanner from "../components/CTABanner";
import Team from "../components/Team";
import FAQ from "../components/FAQ";
import AnimatedNumber from "../components/AnimatedNumber";
import usePageMeta from "../hooks/usePageMeta";
import "./About.css";
import "./AboutExtras.css";

const stats = [
  {
    value: "150+",
    label: "Projects Completed",
    desc: "Successful projects delivered worldwide.",
  },
  {
    value: "80+",
    label: "Happy Clients",
    desc: "Clients who trust us and grow with us.",
  },
  {
    value: "5+",
    label: "Years Experience",
    desc: "Delivering excellence since 2019.",
  },
  {
    value: "99%",
    label: "Client Satisfaction",
    desc: "Our clients love our dedication and work.",
  },
];

const values = [
  {
    icon: Users,
    title: "Client First",
    desc: "We put our clients' success at the heart of everything we do.",
  },
  {
    icon: Gem,
    title: "Quality Driven",
    desc: "We never compromise on quality and always deliver our best.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "We embrace new ideas and technologies to build better solutions.",
  },
  {
    icon: Eye,
    title: "Transparency",
    desc: "We believe in clear communication and complete transparency.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    desc: "We work with honesty, respect and strong ethical values.",
  },
  {
    icon: TrendingUp,
    title: "Growth Mindset",
    desc: "We are always learning and improving to stay ahead.",
  },
];

const skills = [
  { label: "Web Development", value: 95, color: "#8b5cf6" },
  { label: "WordPress", value: 90, color: "#38bdf8" },
  { label: "UI/UX Design", value: 92, color: "#2dd4bf" },
  { label: "Graphic Design", value: 88, color: "#ec4899" },
  { label: "Video Editing", value: 90, color: "#f97316" },
];

const process = [
  {
    title: "Discover",
    desc: "We understand your business, goals and requirements.",
  },
  {
    title: "Plan & Strategy",
    desc: "We create the best strategy and plan to achieve results.",
  },
  {
    title: "Design",
    desc: "We design creative and engaging solutions.",
  },
  {
    title: "Develop",
    desc: "We build fast, secure and scalable products.",
  },
  {
    title: "Deliver",
    desc: "We test, launch and deliver a product that performs.",
  },
  {
    title: "Support",
    desc: "We provide ongoing support and help you grow.",
  },
];

// Edit these lists to change the content of the new About sections.
const technologies = [
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "WordPress",
  "Vite",
  "JavaScript",
  "HTML & CSS",
  "Cloudinary",
  "Vercel",
];

const workWithUs = [
  {
    icon: MapPin,
    title: "Based in Karachi",
    desc: "Our team is based in Karachi, Pakistan.",
  },
  {
    icon: Globe,
    title: "Remote Friendly",
    desc: "We collaborate with clients online, wherever they are.",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    desc: "You know the plan, the timeline and the progress at every stage.",
  },
  {
    icon: LifeBuoy,
    title: "Support After Launch",
    desc: "We stay available to fix, improve and grow your project after it goes live.",
  },
];

const faqs = [
  {
    q: "Where is CØDES-MINDS based?",
    a: "We are based in Karachi, Pakistan, and we work with clients remotely.",
  },
  {
    q: "What services do you offer?",
    a: (
      <>
        We build websites and web applications, including WordPress websites,
        and offer related digital services. Some services are still being
        rolled out, so please check our{" "}
        <Link to="/services">Services page</Link> for what is available now.
      </>
    ),
  },
  {
    q: "What do I need to start a project?",
    a: "Just your idea and your goals. Tell us what you want to build, share any websites you like for reference, and we will come back with a clear plan.",
  },
  {
    q: "How long does a project take?",
    a: "It depends on the size and features of the project. After we review your requirements, we share a timeline with you before any work begins.",
  },
  {
    q: "Do you support the project after launch?",
    a: "Yes. We can help with fixes, updates and improvements after your project goes live.",
  },
  {
    q: "How do I get a quote?",
    a: (
      <>
        Send us your details through the <Link to="/contact">contact form</Link>{" "}
        and we will get back to you within 24 hours.
      </>
    ),
  },
];

function About() {
  usePageMeta({
    title: "About CØDES-MINDS | Creative Digital Agency in Karachi",
    description:
      "CØDES-MINDS is a creative digital agency in Karachi, Pakistan. Meet the team, our values, our process and the technologies we use to build modern websites.",
  });

  return (
    <>
      {/* HERO SECTION */}
      <section className="section about-hero">
        <div className="container about-hero__grid">
          <div>
            <nav className="about-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span aria-hidden="true">›</span>
              <span aria-current="page">About</span>
            </nav>

            <span className="eyebrow">ABOUT US</span>

            <h1>
              We Are <span className="gradient-text">CØDES-MINDS</span>
              <br />
              Your Partner In Digital Success
            </h1>

            <p>
              CØDES-MINDS is a creative digital agency passionate about turning
              ideas into powerful digital experiences. We combine creativity,
              technology and strategy to help businesses grow, stand out and
              succeed in the digital world.
            </p>

            <Link to="/contact" className="btn btn--primary">
              Let's Work Together <ArrowRight size={16} />
            </Link>
          </div>

          <div className="about-hero__badge">
            <Rocket size={28} />

            <div>
              <strong>5+</strong>
              <span>Years Of Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="section about-story">
        <div className="container about-story__grid">
          <div className="about-story__text">
            <span className="eyebrow">OUR STORY</span>

            <h2>
              From Passionate Developers To Your{" "}
              <span className="gradient-text">Digital Growth</span> Partners
            </h2>

            <p>
              CØDES-MINDS was founded with a simple goal — to deliver
              high-quality digital solutions that make a real impact. We believe
              in building long-term relationships with our clients by delivering
              results that matter.
            </p>

            <p>
              Our team of creative designers, developers and digital experts
              work together to create modern, functional and user-friendly
              digital experiences that drive success.
            </p>
          </div>

          <div className="about-story__stats">
            {stats.map((stat, i) => (
              <div key={i} className="about-stat-card">
                <AnimatedNumber
                  value={stat.value}
                  className="about-stat-card__value gradient-text"
                />

                <h4>{stat.label}</h4>
                <p>{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEET THE TEAM */}
      <section className="section about-team">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">MEET THE TEAM</span>

            <h2>
              The People Behind{" "}
              <span className="gradient-text">CØDES-MINDS</span>
            </h2>

            <p>
              Two developers, one shared vision — combining creativity,
              technology and innovation to build digital experiences that make a
              real difference.
            </p>
          </div>

          <div className="about-team__showcase">
            {/* TEAM IMAGE */}
            <div className="about-team__image-wrapper">
              <div className="about-team__glow about-team__glow--one" />
              <div className="about-team__glow about-team__glow--two" />

              <div className="about-team__image">
                <img
                  src="/team/team-duo.png"
                  alt="The team behind Codes-Minds"
                />
              </div>

              <div className="about-team__floating-card about-team__floating-card--left">
                <span className="about-team__floating-icon">💡</span>

                <div>
                  <strong>Creative Minds</strong>
                  <span>Ideas Into Reality</span>
                </div>
              </div>

              <div className="about-team__floating-card about-team__floating-card--right">
                <span className="about-team__floating-icon">🚀</span>

                <div>
                  <strong>Building Forward</strong>
                  <span>Digital Innovation</span>
                </div>
              </div>
            </div>

            {/* TEAM CONTENT */}
            <div className="about-team__content">
              <span className="eyebrow">THE MINDS BEHIND THE CODE</span>

              <h3>
                Creativity Meets{" "}
                <span className="gradient-text">Technology</span>
              </h3>

              <p>
                CØDES-MINDS is built by passionate developers who believe that
                great digital products begin with great ideas. We combine
                creativity, strategy and technology to turn concepts into
                meaningful digital experiences.
              </p>

              <p>
                Every project is an opportunity to create something unique,
                solve real problems and help businesses build a stronger digital
                presence.
              </p>

              <div className="about-team__mini-stats">
                <div>
                  <strong>150+</strong>
                  <span>Projects</span>
                </div>

                <div>
                  <strong>80+</strong>
                  <span>Clients</span>
                </div>

                <div>
                  <strong>99%</strong>
                  <span>Satisfaction</span>
                </div>
              </div>
            </div>
          </div>

          {/* EXISTING TEAM MEMBERS */}
          <Team />
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="section about-values">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">OUR VALUES</span>

            <h2>
              The Principles That Drive{" "}
              <span className="gradient-text">Everything</span> We Do
            </h2>

            <p>
              We follow strong values that guide our work, relationships and the
              way we grow together.
            </p>
          </div>

          <div className="about-values__grid">
            {values.map((value, i) => {
              const Icon = value.icon;

              return (
                <div key={i} className="about-value-card">
                  <div className="about-value-card__icon">
                    <Icon size={22} />
                  </div>

                  <div>
                    <h4>{value.title}</h4>
                    <p>{value.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* OUR EXPERTISE */}
      <section className="section about-skills">
        <div className="container about-skills__grid">
          <div>
            <span className="eyebrow">OUR EXPERTISE</span>

            <h2>
              Skills We Master For Your{" "}
              <span className="gradient-text">Success</span>
            </h2>

            <p>
              We combine creativity and technology to deliver solutions that
              drive real results.
            </p>

            <Link to="/services" className="btn btn--outline">
              Explore Our Services <ArrowRight size={16} />
            </Link>
          </div>

          <div className="about-skills__bars">
            {skills.map((skill, i) => (
              <div key={i} className="skill-bar">
                <div className="skill-bar__label">
                  <span>{skill.label}</span>
                  <span>{skill.value}%</span>
                </div>

                <div className="skill-bar__track">
                  <div
                    className="skill-bar__fill"
                    style={{
                      width: `${skill.value}%`,
                      background: skill.color,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="section about-tech">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">TECHNOLOGIES</span>

            <h2>
              Built With{" "}
              <span className="gradient-text">Modern Technologies</span>
            </h2>

            <p>
              A modern, proven stack that keeps your website fast, secure and
              easy to grow.
            </p>
          </div>

          <div className="about-tech__list">
            {technologies.map((tech) => (
              <span key={tech} className="about-tech__chip">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <ProcessSteps
          steps={process}
          eyebrow="OUR PROCESS"
          title="Our Simple Process For Outstanding"
          highlight="Results"
        />
      </section>

      {/* HOW WE WORK WITH YOU */}
      <section className="section about-how">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">WORKING WITH US</span>

            <h2>
              How We <span className="gradient-text">Work With You</span>
            </h2>

            <p>
              Simple, open and reliable — from your first message to long after
              launch.
            </p>
          </div>

          <div className="about-how__grid">
            {workWithUs.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="about-how__card">
                  <div className="about-how__icon">
                    <Icon size={22} />
                  </div>

                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section about-faq">
        <FAQ
          items={faqs}
          eyebrow="FAQ"
          title="Frequently Asked"
          highlight="Questions"
          subtitle="Quick answers about who we are and how we work."
        />
      </section>

      {/* CTA */}
      <section className="section about-cta">
        <CTABanner
          title="Ready To Start Your Next Project?"
          subtitle="Let's build something amazing together."
        />
      </section>
    </>
  );
}

export default About;
