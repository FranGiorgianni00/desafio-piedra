 import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Game from './pages/Game';

const App = () => {
  return (
    <Router basename="/desafio-piedra">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/game" component={Game} />
      </Switch>
    </Router>
  );
};

export default App;
