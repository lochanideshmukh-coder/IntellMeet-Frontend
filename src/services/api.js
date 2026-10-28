// Backend integration placeholder.
// Ask your team for the API base URL, endpoint paths, authentication approach,
// request/response examples, and error format before implementing real requests.
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function apiRequest(path, options = {}) {
  if (!API_BASE_URL) {
    throw new Error("Backend API is not configured. This starter currently uses mock data.");
  }
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers: { "Content-Type": "application/json", ...options.headers }
  });
  if (!response.ok) throw new Error(`Request failed (${response.status})`);
  return response.status === 204 ? null : response.json();
}