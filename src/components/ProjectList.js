import React from 'react';
import Project from './Project';
import '../stylesheets/ProjectList.scss';

class ProjectList extends React.Component {
  render() {
    const result = this.props.projects.map((project) => {
      return (
        <div className="listItem" key={project.id}>
          <Project
            name={project.name}
            technologies={project.technologies}
            description={project.description}
            images={project.image}
            webURL={project.webURL}
            githubURL={project.githubURL}
          />
        </div>
      );
    });
    return (
      <ul>
        <li className="pokes">{result}</li>
      </ul>
    );
  }
}

export default ProjectList;
