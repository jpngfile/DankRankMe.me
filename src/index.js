
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, Link, browserHistory } from 'react-router'
import React from 'react';
import ReactDOM from 'react-dom';
import Rate from './rate/Rate';
import Submit from './submit/Submit';
import Home from './home/Home';
import About from './about/About';

import AppHeader from './layout/AppHeader'
import ScrollReveal from'scrollreveal'
window.sr = ScrollReveal({ reset: true });
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const ThemeWrapper = () => (
    <Router history={browserHistory}>
      <Route component={AppHeader}>
        <Route path="/" component={Home} />
        <Route path="/rate" component={Rate} />  
        <Route path="/submit" component={Submit} />
		<Route path="/about" component={About} />
      </Route>
    </Router>
);

ReactDOM.render (
  <ThemeWrapper />,
  document.getElementById('root')
);
window.sr.reveal('.hideScroll',{duration:400});