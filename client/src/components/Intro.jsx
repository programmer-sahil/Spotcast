import "./Intro.css";

export default function Intro({ data }) {
  return (
    <section className="intro-section">
      <div className="intro-container">
        {/* LEFT */}
        <div className="intro-left">
          <h2>
            YOUR IDEA<br />
            YOUR VOICE<br />
            WE RECORD
          </h2>
        </div>

        {/* RIGHT */}
        <div className="intro-right">
          <p>
            Spotcast is a flexible podcast production crew that brings the studio
            to you. We record anywhere you prefer—indoors, outdoors, or on-location
            and deliver high-quality video and audio podcasts. Our mobility gives
            creators freedom, authenticity, and diverse backdrops that traditional
            studios can’t match.
          </p>
        </div>
      </div>
    </section>
  );
}
