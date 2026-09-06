import { ShieldCheck, Clock } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import ProcessSteps from '../components/ProcessSteps';
import CTABanner from '../components/CTABanner';
import HeroVisual from '../components/HeroVisual';
import { useServices } from '../hooks/useServices';
import './Services.css';

const whyChooseUs = [
  { title: 'Expert Team', desc: 'Skilled professionals with years of experience in multiple technologies.' },
  { title: 'Fast Delivery', desc: 'We value your time and always deliver projects on schedule.' },
  { title: 'Quality Focused', desc: 'We never compromise on quality and follow best industry practices.' },
  { title: '24/7 Support', desc: 'Our support team is always ready to assist you whenever you need.' },
  { title: 'Affordable Pricing', desc: 'High-quality services at competitive and transparent pricing.' },
  { title: 'Client Satisfaction', desc: 'Our top priority is client satisfaction and long-term relationships.' },
];

const process = [
  { title: 'Discover', desc: 'We understand your business, goals and requirements.' },
  { title: 'Plan & Strategy', desc: 'We create the best strategy and plan to achieve results.' },
  { title: 'Design', desc: 'We design creative and engaging solutions.' },
  { title: 'Develop', desc: 'We build fast, secure and scalable digital products.' },
  { title: 'Launch', desc: 'We test, launch and make your project live.' },
  { title: 'Support', desc: 'We provide ongoing support and help you grow.' },
];

function Services() {
  const { services } = useServices();
  const activeServices = services.filter((s) => s.status !== "coming-soon");
  const comingSoonServices = services.filter((s) => s.status === "coming-soon");

  return (
    <>
      <section className="section services-hero">
        <div className="container services-hero__grid">
          <div>
            <span className="eyebrow">OUR SERVICES</span>
            <h1>
              Building Digital Solutions That Help Your <span className="gradient-text">Business Grow</span>
            </h1>
            <p>
              We currently specialize in Web Development and WordPress
              Development, with additional digital services coming soon.
            </p>
            <div className="services-hero__badges">
              <span><ShieldCheck size={16} /> Quality Focused Delivery</span>
              <span><Clock size={16} /> On-Time Delivery</span>
            </div>
          </div>

          <HeroVisual icon={ShieldCheck} color="violet" floatingIcons={services.slice(0, 6).map((s) => ({ icon: s.icon }))} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">AVAILABLE NOW</span>
            <h2>
              Services We're <span className="gradient-text">Currently Offering</span>
            </h2>
            <p>These are the services we actively deliver for clients today.</p>
          </div>

          <div className="services-grid">
            {activeServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {comingSoonServices.length > 0 && (
        <section className="section">
          <div className="container">
            <div className="section-header">
              <span className="eyebrow">COMING SOON</span>
              <h2>
                Expanding Our <span className="gradient-text">Service Lineup</span>
              </h2>
              <p>
                We're growing our range of services. These aren't available
                to book yet, but reach out if you'd like to be notified when
                they launch.
              </p>
            </div>

            <div className="services-grid">
              {comingSoonServices.map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section services-why">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">WHY CHOOSE US</span>
            <h2>
              The Reasons Clients Choose <span className="gradient-text">CØDES-MINDS</span>
            </h2>
          </div>

          <div className="services-why__grid">
            {whyChooseUs.map((item, i) => (
              <div key={i} className="why-card">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <ProcessSteps
          steps={process}
          eyebrow="OUR PROCESS"
          title="Simple Process."
          highlight="Powerful Results."
        />
      </section>

      <section className="section services-cta">
        <CTABanner />
      </section>
    </>
  );
}

export default Services;
