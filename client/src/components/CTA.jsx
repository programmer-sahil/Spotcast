import "./CTA.css";

export default function CTA({ data }) {
  return (
    <section className="cta">
      <div className="cta-container">
        <div className="cta-text">
          <h2>LET&apos;S RECORD YOUR STORY</h2>
          <p>
            Ready to create content that stands out? Tell us your vision.
          </p>
        </div>

        <div className="cta-action">
          <a href="/contact" className="cta-button">
            GET A FREE QUOTE
          </a>
        </div>
      </div>
    </section>
  );
}
