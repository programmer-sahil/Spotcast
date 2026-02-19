const API_BASE = "https://spotcast-nesc.onrender.com";

export const fetchHome = async () => {
  const res = await fetch(`${API_BASE}/api/home`);
  if (!res.ok) throw new Error("Failed to fetch home data");
  return res.json();
};

export const updateHome = async (data) => {
  const res = await fetch(`${API_BASE}/api/home`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Failed to update home data");
  return res.json();
};
