const API_URL = 'https://annthomascodes-backend.onrender.com/api';

export async function getProjects() {
  const res = await fetch(`${API_URL}/projects/`);

  return res.json();
}
