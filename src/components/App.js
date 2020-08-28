import React from 'react';
import Header from './Header';
import projects from '../data/projects.json';
import ProjectList from './ProjectList';
import '../stylesheets/App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ProjectList projects={projects} />
      </div>
    );
  }
}

export default App;
