const API_BASE = "http://localhost:5001/api";

export async function fetchHomeData() {
  const res = await fetch(`${API_BASE}/home`);
  if (!res.ok) {
    throw new Error("Failed to fetch home data");
  }
  return res.json();
}
