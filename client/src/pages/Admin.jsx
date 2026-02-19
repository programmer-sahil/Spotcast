import { useEffect, useState } from "react";

const API = "http://localhost:5001/api/home";

export default function Admin() {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(setData);
  }, []);

  if (!data) return <p>Loading...</p>;

  const updateField = (section, field, value) => {
    setData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const saveData = async () => {
    await fetch(API, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    setStatus("Saved successfully");
  };

  return (
    <div style={{ padding: 30 }}>
      <h1>Admin Panel</h1>

      {/* HERO */}
      <h2>Hero Section</h2>
      <input
        placeholder="Hero Title"
        value={data.hero.title}
        onChange={e => updateField("hero", "title", e.target.value)}
      />
      <br />
      <input
        placeholder="Hero Subtitle"
        value={data.hero.subtitle}
        onChange={e => updateField("hero", "subtitle", e.target.value)}
      />

      {/* STORIES */}
      <h2>Stories</h2>
      {data.stories.map((story, i) => (
        <div key={i}>
          <input
            value={story.title}
            onChange={e => {
              const updated = [...data.stories];
              updated[i].title = e.target.value;
              setData({ ...data, stories: updated });
            }}
          />
          <button
            onClick={() =>
              setData({
                ...data,
                stories: data.stories.filter((_, idx) => idx !== i)
              })
            }
          >
            Remove
          </button>
        </div>
      ))}
      <button
        onClick={() =>
          setData({
            ...data,
            stories: [...data.stories, { title: "", image: "", link: "" }]
          })
        }
      >
        Add Story
      </button>

      {/* SERVICES */}
      <h2>Services</h2>
      {data.services.map((s, i) => (
        <div key={i}>
          <input
            value={s.title}
            onChange={e => {
              const updated = [...data.services];
              updated[i].title = e.target.value;
              setData({ ...data, services: updated });
            }}
          />
        </div>
      ))}

      {/* CTA */}
      <h2>CTA</h2>
      <input
        value={data.cta.text}
        onChange={e => updateField("cta", "text", e.target.value)}
      />

      {/* FOOTER */}
      <h2>Footer</h2>
      <input
        value={data.footer.email}
        onChange={e => updateField("footer", "email", e.target.value)}
      />

      <br /><br />
      <button onClick={saveData}>Save Changes</button>
      <p>{status}</p>
    </div>
  );
}
