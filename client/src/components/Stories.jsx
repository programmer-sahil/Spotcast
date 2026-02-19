import "./Stories.css";

const stories = [
  {
    id: 1,
    image: "/assets/images/work/1.jpg",
    title: "THE MORNING RUSH PODCAST",
    location: "Dubai",
    large: true,
  },
  {
    id: 2,
    image: "/assets/images/work/2.jpg",
    title: "CAPITAL INSIGHTS : JAMES ANTONY",
    location: "Burj Khalifa, Dubai",
  },
  {
    id: 3,
    image: "/assets/images/work/3.jpg",
    title: "HE DUBAI ROUNDTABLE",
    location: "A Luxury Hotel, Dubai",
  },
  {
    id: 4,
    image: "/assets/images/work/4.jpg",
    title: "DESERT DIARIES : ALEX JAMES",
    location: "Qudra Desert, Dubai",
  },
  {
    id: 5,
    image: "/assets/images/work/5.jpg",
    title: "DESERT DIARIES : ELINA ALBERT JAMES",
    location: "Qudra Desert, Dubai",
  },
];

export default function Stories() {
  return (
    <section className="stories">
      <div className="stories-header">
        <h2>STORIES WE'VE BROUGHT TO LIFE</h2>
        <p>
          From industry leaders to rising creators, we've helped produce
          captivating content in Dubai’s most unique settings.
        </p>
      </div>

      <div className="stories-grid">
        {stories.map((story) => (
          <div
            key={story.id}
            className={`story-card ${story.large ? "large" : ""}`}
          >
            <div className="story-image">
              <img src={story.image} alt={story.title} />
            </div>

            <div className="story-info">
              <h4>{story.title}</h4>
              <span>{story.location}</span>
              <span className="external">↗</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
