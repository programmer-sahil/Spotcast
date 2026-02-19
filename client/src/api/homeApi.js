const API_URL = "http://localhost:5001/api/home";

export const fetchHome = async () => {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Failed to fetch home data");
  return res.json();
};

export const updateHome = async (data) => {
  const res = await fetch(API_URL, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Failed to update home data");
  return res.json();
};
