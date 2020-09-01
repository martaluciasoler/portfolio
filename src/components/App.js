import React from 'react';
import Header from './Header';
import projects from '../data/projects.json';
import infoContact from '../data/infoContact.json';
import ProjectList from './ProjectList';
import Contact from './Contact';
import '../stylesheets/App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <a className="tittle" name="Proyectos">
            Proyectos
          </a>
          <ProjectList projects={projects} />
          <Contact infoContact={infoContact} />
        </main>
      </div>
    );
  }
}

export default App;
