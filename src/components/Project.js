import React from 'react';
import '../stylesheets/Project.scss';

class Project extends React.Component {
  render() {
    return (
      <li className="project">
        <div className="container">
          <div className="marco">
            <a className="project__name" href={this.props.webURL}>
              {this.props.name}{' '}
            </a>
            <img
              className="project__image"
              src={this.props.images}
              alt={this.props.name}
            />
          </div>
          <p>{this.props.description}</p>
          <a className="project__github" href={this.props.githubURL}>
            Visítame en Github
          </a>
          <p className="project__languajes">{this.props.languajes}</p>
        </div>
      </li>
    );
  }
}

export default Project;
