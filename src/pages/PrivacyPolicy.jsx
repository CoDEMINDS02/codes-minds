import "./LegalPage.css";

const LAST_UPDATED = "September 2026";

export default function PrivacyPolicy() {
  return (
    <div className="legal-page section">
      <div className="container">
        <div className="legal-page__header">
          <h1>Privacy Policy</h1>
          <p>Last updated: {LAST_UPDATED}</p>
        </div>

        <div className="legal-page__body">
          <h2>1. Introduction</h2>
          <p>
            CØDES-MINDS ("we", "us", "our") respects your privacy. This
            policy explains what information we collect through this
            website, how we use it, and the choices you have.
          </p>

          <h2>2. Information We Collect</h2>
          <ul>
            <li>
              <strong>Contact form submissions:</strong> your name, email
              address, phone number, and message when you reach out to us.
            </li>
            <li>
              <strong>Newsletter sign-ups:</strong> your email address, if
              you subscribe to updates.
            </li>
            <li>
              <strong>Usage data:</strong> basic technical information such
              as browser type and pages visited, collected automatically to
              help us improve the site.
            </li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <ul>
            <li>To respond to inquiries submitted through our contact form.</li>
            <li>To send newsletter updates, only if you've subscribed.</li>
            <li>To improve our website and services.</li>
          </ul>
          <p>We do not sell or rent your personal information to third parties.</p>

          <h2>4. Data Storage &amp; Security</h2>
          <p>
            Information you submit is stored securely and is only accessible
            to authorized members of our team. We take reasonable measures
            to protect your data, but no online transmission is 100% secure.
          </p>

          <h2>5. Third-Party Services</h2>
          <p>
            We may use trusted third-party services (such as email delivery
            or analytics providers) to operate this website. These providers
            only receive the information necessary to perform their
            function.
          </p>

          <h2>6. Your Rights</h2>
          <p>
            You can request access to, correction of, or deletion of your
            personal data at any time by contacting us using the details
            below. You may also unsubscribe from our newsletter at any time.
          </p>

          <h2>7. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated revision date.
          </p>

          <h2>8. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, contact us
            at <a href="mailto:anoshacod@gmail.com">anoshacod@gmail.com</a>{" "}
            or via our{" "}
            <a href="/contact">contact page</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
