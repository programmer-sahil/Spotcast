import { useState } from "react";
import "./Offer.css";

const offers = [
  {
    key: "mobile",
    title: "MOBILE PODCAST PRODUCTION",
    desc:
      "A fully equipped podcast studio brought directly to your office, home, or any location you choose.",
    image: "/assets/images/services/1.jpg",
  },
  {
    key: "cinematic",
    title: "CINEMATIC SET PODCASTS",
    desc:
      "High-end cinematic podcast setups designed for premium visual storytelling.",
    image: "/assets/images/services/2.jpg",
  },
  {
    key: "studio",
    title: "STUDIO PODCAST",
    desc:
      "Professional studio podcast recording with high-quality audio and video.",
    image: "/assets/images/services/3.jpg",
  },
  {
    key: "editing",
    title: "VIDEO EDITING & POST-PRODUCTION",
    desc:
      "Complete post-production services including editing, color grading, and sound design.",
    image: "/assets/images/services/4.jpg",
  },
];

export default function Offer() {
  const [active, setActive] = useState(offers[0]);

  return (
    <section className="offer">
      {/* LEFT */}
      <div className="offer-left">
        <h2>WHAT WE OFFER</h2>

        <div className="offer-tabs">
          {offers.map((item) => (
            <button
              key={item.key}
              className={active.key === item.key ? "active" : ""}
              onClick={() => setActive(item)}
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>

      {/* CENTER IMAGE (FIXED SIZE) */}
      <div className="offer-center">
        <div className="offer-image-wrapper">
          <img src={active.image} alt={active.title} />
        </div>
      </div>

      {/* RIGHT */}
      <div className="offer-right">
        <h3>{active.title}</h3>
        <p>{active.desc}</p>
      </div>
    </section>
  );
}
