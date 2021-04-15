import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {
  Homepage
} from './views/index';

export default function App() {

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Homepage} />
        </Switch>
      </Router>
    </div>
  );
}
