import { useEffect, useState } from 'react';
import { getProjects } from '../services/api';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then(setProjects).catch(console.error);
  }, []);

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-10 text-center"> Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={projects.id}
            className="bg-gray-800 p-6 rounded-xl hover:scale-[1.02] transition"
          >
            <h3 className="text-xl font-semibold mb-2"> {project.title} </h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Projects;
