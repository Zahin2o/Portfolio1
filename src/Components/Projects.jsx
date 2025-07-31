import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Todo App',
      description: 'A simple todo app built with React and localStorage.',
      link: 'https://github.com/zahin/todo-app'
    },
    {
      title: 'Blog CMS',
      description: 'Full-stack MERN blog app with login and dashboard.',
      link: 'https://github.com/zahin/blog-cms'
    }
  ];

  return (
    <section className="container my-5">
      <h2>Projects</h2>
      <div className="row">
        {projects.map((proj, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{proj.title}</h5>
                <p className="card-text">{proj.description}</p>
                <a href={proj.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline-warning">
                  View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
