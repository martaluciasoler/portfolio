import React from 'react';
import { Route, Switch } from 'react-router-dom';
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
        <main>
          <Switch>
            <Route exact path="/">
              <Header />
            </Route>
            <Route path="/projects">
              <ProjectList projects={projects} />
            </Route>
          </Switch>
        </main>
        <Contact infoContact={infoContact} />
      </div>
    );
  }
}

export default App;
