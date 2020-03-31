import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './app/routes/Login';

import Login from './app/routes/Login';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
