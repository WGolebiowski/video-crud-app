import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import About from "./components/About";
import Nav from "./components/Nav";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";
import Video from "./components/Video";

const App = () => {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/"><VideoList /></Route>
            <Route path="/about"><About /></Route>
            <Route path="/addVideo"><AddVideo /></Route>
            <Route path="/video/:id" component={Video} />
          </Switch>
        </div>
      </Router>
  )
}

export default App;
