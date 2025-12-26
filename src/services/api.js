const API_URL = 'https://annthomascodes-backend.onrender.com/api';

export async function getProjects() {
  const res = await fetch(`${API_URL}/projects/`);

  if (!res.ok) {
    throw new Error('Failed to fetch projects');
  }

  return res.json();
}
