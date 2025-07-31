import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'WEB',
      description: 'A simple WEB PAGE  built with React and localStorage.',
      link: 'https://zahin2o.github.io/assinment-2/'
    },
    {
      title: 'QUIZ APP',
      description: 'Full-stack MERN QUIZ app with .',
      link: ' https://zahin2o.github.io/Quiz-App/'
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
