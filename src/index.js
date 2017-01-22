

//import $ from 'jquery'; 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, Route, Link, browserHistory } from 'react-router'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Rate from './rate/Rate'
import Submit from './submit/Submit'

import AppHeader from './layout/AppHeader'


const ThemeWrapper = () => (
  <MuiThemeProvider>
    <Router history={browserHistory}>
      <Route component={AppHeader}>
        <Route path="/" component={App}>
          <Route path="rate" component={Rate} />
          <Route path="submit" component={Submit} />
        </Route>
      </Route>
    </Router>
  </MuiThemeProvider>
);

ReactDOM.render (
  <ThemeWrapper />,
  document.getElementById('root')
);





/*<Route path="/" component={App}>
        <Route path="rate" component={Rate} />
        <Route path="submit" component={Submit} />
      </Route> */
/*
ReactDOM.render(

  (<Router history={browserHistory}>
    <Route component={AppHeader}>
      <Route path="/" component={App}>
        <Route path="rate" component={Rate} />
        <Route path="submit" component={Submit} />
      </Route>
    </Route>
  </Router>)
,
  document.getElementById('root')
);
*/
