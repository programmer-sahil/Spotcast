import { useEffect, useState } from "react";
import { fetchHomeData } from "../services/api";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Stories from "../components/Stories";
import Offer from "../components/Offer";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchHomeData()
      .then(setData)
      .catch(() => setError("Unable to load homepage"));
  }, []);

  if (error) return <p>{error}</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <>
      <Navbar data={data.navbar} />
      <Hero data={data.hero} />
      <Intro data={data.intro} />
      <Stories data={data.stories} />
      <Offer data={data.services} />
      <CTA data={data.cta} />
      <Footer data={data.footer} />
    </>
  );
}
