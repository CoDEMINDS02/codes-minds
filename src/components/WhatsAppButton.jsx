import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppButton.css";

// Change these two values to update the number or the pre-filled message.
const WHATSAPP_NUMBER = "923170939872"; // country code + number, no "+" or spaces
const WHATSAPP_MESSAGE =
  "Hi CØDES-MINDS, I'd like to discuss a project with you.";

function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE,
  )}`;

  return (
    <a
      className="whatsapp-float"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <span className="whatsapp-float__label">Chat with us</span>

      <span className="whatsapp-float__icon">
        <FaWhatsapp size={30} aria-hidden="true" />
      </span>
    </a>
  );
}

export default WhatsAppButton;
