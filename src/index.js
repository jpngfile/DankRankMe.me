import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route} from 'react-router';

var Home = React.createClass({
  render: function() {
    return (<h1>Welcome to the Home Page</h1>);
  }
});
var Users = React.createClass({
  render: function() {
    return (<h1>Welcome to the Users Page</h1>);
  }
});
var Widgets = React.createClass({
  render: function() {
    return (<h1>Welcome to the Widgets Page</h1>);
  }
});
ReactDOM.render(
  <Router>
	<Route path="/" component={Home} />
	<Router compontent={SearchLayout}>
		<Route path="/users" component={Users} />
		<Route path="/widgets" component={Widgets} />
	</Router>
  </Router>,
  document.getElementById('root')
);

var MainLayout = React.createClass({
  render: function() {
    // Note the `className` rather than `class`
    // `class` is a reserved word in JavaScript, so JSX uses `className`
    // Ultimately, it will render with a `class` in the DOM
    return (
      <div className="app">
        <header className="primary-header"></header>
        <aside className="primary-aside"></aside>
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
});

var SearchLayout = React.createClass({
  render: function() {
    return (
      <div className="search">
        <header className="search-header"></header>
        <div className="results">
          {this.props.children}
        </div>
        <div className="search-footer pagination"></div>
      </div>
    );
  }
});

var UserList = React.createClass({
  render: function() {
    return (
      <ul className="user-list">
        <li>Dan</li>
        <li>Ryan</li>
        <li>Michael</li>
      </ul>
    );
  }
});
