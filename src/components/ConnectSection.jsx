import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import "./ConnectSection.css";

// Real links only — reuse the same ones as the footer, so nothing here is a
// dead or placeholder icon. Add an entry (or remove one) to change the row.
const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61592237829755",
    icon: FaFacebookF,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/groups/32890000/",
    icon: FaLinkedinIn,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/923170939872",
    icon: FaWhatsapp,
  },
];

function ConnectSection() {
  return (
    <div className="container connect">
      <div className="connect__visual">
        <img src="/team/team-duo.png" alt="The CØDES-MINDS team" loading="lazy" />

        <a
          href="https://wa.me/923170939872?text=Hi%20CØDES-MINDS%2C%20I%27d%20like%20to%20discuss%20a%20project."
          target="_blank"
          rel="noopener noreferrer"
          className="connect__pill"
        >
          Kickstart Your Vision
        </a>
      </div>

      <div className="connect__content">
        <span className="eyebrow">GET IN TOUCH</span>

        <h2>
          Let&apos;s <span className="gradient-text">Connect!</span>
        </h2>

        <p className="connect__tagline">
          Bring your digital ideas to life — get in touch today.
        </p>

        <div className="connect__socials">
          {socials.map((social) => {
            const Icon = social.icon;

            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="connect__social"
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ConnectSection;
