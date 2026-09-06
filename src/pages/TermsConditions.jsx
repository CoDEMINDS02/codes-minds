import "./LegalPage.css";

const LAST_UPDATED = "September 2026";

export default function TermsConditions() {
  return (
    <div className="legal-page section">
      <div className="container">
        <div className="legal-page__header">
          <h1>Terms &amp; Conditions</h1>
          <p>Last updated: {LAST_UPDATED}</p>
        </div>

        <div className="legal-page__body">
          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing this website, you agree to be bound by these Terms
            & Conditions. If you do not agree with any part of these terms,
            please do not use this website.
          </p>

          <h2>2. Services</h2>
          <p>
            CØDES-MINDS provides web development, design, and related
            digital services as described on this website. Service details,
            pricing, and timelines are agreed separately with each client
            and are not governed by the general content of this website.
          </p>

          <h2>3. Intellectual Property</h2>
          <p>
            All content on this website — including text, graphics, logos,
            and images — is the property of CØDES-MINDS unless otherwise
            stated, and may not be copied or reused without written
            permission.
          </p>

          <h2>4. Client Responsibilities</h2>
          <p>
            Clients engaging our services are responsible for providing
            accurate project information, timely feedback, and any content
            or materials required to complete a project.
          </p>

          <h2>5. Payments</h2>
          <p>
            Payment terms, milestones, and refund conditions for any project
            are outlined in the individual project agreement or invoice
            shared with the client, not on this website.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            CØDES-MINDS is not liable for any indirect, incidental, or
            consequential damages arising from the use of this website or
            our services, to the fullest extent permitted by law.
          </p>

          <h2>7. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party sites. We are not
            responsible for the content or practices of any linked external
            site.
          </p>

          <h2>8. Changes to These Terms</h2>
          <p>
            We may revise these Terms & Conditions at any time. Continued
            use of this website after changes are posted means you accept
            the updated terms.
          </p>

          <h2>9. Contact Us</h2>
          <p>
            For questions about these Terms & Conditions, contact us at{" "}
            <a href="mailto:anoshacod@gmail.com">anoshacod@gmail.com</a> or
            via our <a href="/contact">contact page</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
