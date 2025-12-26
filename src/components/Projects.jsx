import { useEffect, useState } from 'react';
import { getProjects } from '../services/api';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then(setProjects);
  }, []);

  return (
    <section>
      <h2> Projects</h2>
      {projects.map((project) => (
        <div key={projects.id}>
          <h3> {project.title} </h3>
          <p>{project.description}</p>
        </div>
      ))}
    </section>
  );
};
export default Projects;
