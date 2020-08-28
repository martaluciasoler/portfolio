import React from 'react';
import '../stylesheets/Project.scss';

class Project extends React.Component {
  render() {
    return (
      <div className="poke-item">
        <div>
          <img src={this.props.images} alt={this.props.name} width="400px" />
        </div>
        <a href={this.props.webURL}>{this.props.name}</a>
        <p>{this.props.description}</p>
        <a href={this.props.githubURL}>Repositorio en Github</a>
        <p>{this.props.languajes}</p>
      </div>
    );
  }
}

export default Project;
