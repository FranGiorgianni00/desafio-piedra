 import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home'; // Asegúrate de crear este componente
import Game from './pages/Game'; // Asegúrate de crear este componente

const App = () => {
return (
<Router>
<Switch>
  <Route exact path="/" component={Home} />
  <Route path="/game" component={Game} />
</Switch>
</Router>
);
};

export default App;