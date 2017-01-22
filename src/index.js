
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, Link, browserHistory } from 'react-router'
import React from 'react';
import ReactDOM from 'react-dom';
import Rate from './rate/Rate';
import Submit from './submit/Submit';

import AppHeader from './layout/AppHeader'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const ThemeWrapper = () => (
    <Router history={browserHistory}>
      <Route component={AppHeader}>
        <Route path="/" component={Rate} />
        <Route path="/rate" component={Rate} />  
        <Route path="/submit" component={Submit} />
      </Route>
    </Router>
);

ReactDOM.render (
  <ThemeWrapper />,
  document.getElementById('root')
);
