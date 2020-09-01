import React from 'react';
import '../stylesheets/Project.scss';

class Project extends React.Component {
  render() {
    const technologiesList = this.props.technologies.map(
      (tecnologie, index) => {
        return <h4 key={index}>{tecnologie}</h4>;
      }
    );
    return (
      <li className="project">
        <div className="container">
          <div className="marco">
            <a className="tittle" name="Proyectos"></a>
            <a className="project__name" href={this.props.webURL}>
              {this.props.name}{' '}
            </a>
            <div className="project__image">
              <a className="project__name" href={this.props.webURL}>
                <img
                  className="project__image--real"
                  src={this.props.images}
                  alt={this.props.name}
                ></img>
              </a>
            </div>
          </div>
          <p>{this.props.description}</p>
          <div className="project__technologies">{technologiesList}</div>
          <a className="project__github" href={this.props.githubURL}>
            CÓDIGO
          </a>
        </div>
      </li>
    );
  }
}

export default Project;
