import { useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

// Initialize EmailJS
if (EMAILJS_PUBLIC_KEY) {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      if (!EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
        throw new Error('EmailJS is not configured. Check your .env file.');
      }

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_email: 'codeminds.team@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.service,
          message: formData.message
        }
      );

      if (response.status === 200) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: ''
        });
        setTimeout(() => setStatus(''), 5000);
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-form-wrap section">
      <div className="contact-form-card">
        <h2>Get In Touch</h2>
        <p className="contact-form-card__subtitle">
          We'll get back to you within 24 hours
        </p>

        {status === 'success' && (
          <div className="contact-form-alert contact-form-alert--success">
            ✓ Message sent successfully! We'll contact you soon.
          </div>
        )}

        {status === 'error' && (
          <div className="contact-form-alert contact-form-alert--error">
            ✗ Error sending message. Please try again.
          </div>
        )}

        <form onSubmit={handleSubmit} className="contact-form-grid">
          <div className="contact-form-field">
            <label>Full Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
            />
          </div>

          <div className="contact-form-field">
            <label>Email Address *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
            />
          </div>

          <div className="contact-form-field">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+92 300 0000000"
            />
          </div>

          <div className="contact-form-field">
            <label>Company / Organization</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Your company"
            />
          </div>

          <div className="contact-form-field">
            <label>Service Interested In</label>
            <select name="service" value={formData.service} onChange={handleChange}>
              <option value="">Select a service</option>
              <option value="web-development">Web Development</option>
              <option value="wordpress">WordPress Development</option>
              <option value="ui-ux">UI/UX Design</option>
              <option value="graphic-design">Graphic Design</option>
              <option value="video-editing">Video Editing</option>
              <option value="ecommerce">E-Commerce Solutions</option>
              <option value="seo">SEO Optimization</option>
              <option value="maintenance">Website Maintenance</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="contact-form-field">
            <label>Message *</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              placeholder="Tell us about your project..."
            />
          </div>

          <button type="submit" disabled={loading} className="contact-form-submit">
            {loading ? 'Sending...' : 'Send Message'}
          </button>

          <p className="contact-form-required">* Required fields</p>
        </form>
      </div>
    </div>
  );
}
