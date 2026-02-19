import "./Hero.css";

export default function Hero({ data }) {
  if (!data) return null; // safety guard

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${data.backgroundImage})`,
      }}
    >
      {/* Top captions (LEFT aligned – Figma) */}
      <div className="hero-bottom-info">
        <div className="hero-info">
          <span className="hero-line" />
          <h4>PREMIUM & COMFORTABLE SPACE</h4>
          <p>Outdoor in Burj Khalifa</p>
        </div>

        <div className="hero-info">
          <span className="hero-line" />
          <h4>YOUR STORY ANYWHERE</h4>
          <p>Sahara Desert Dubai</p>
        </div>

        <div className="hero-info">
          <span className="hero-line" />
          <h4>YOUR STORY ANYWHERE</h4>
          <p>Sahara Desert Dubai</p>
        </div>
      </div>

      {/* Center text */}
      <div className="hero-center">
        <h1>{data.title}</h1>
        <h2>{data.subtitle}</h2>
      </div>
    </section>
  );
}
