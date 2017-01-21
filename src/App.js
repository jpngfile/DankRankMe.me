import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
		
		<div id="root">

			/* Main Layout */
			<div class="app">
				<header class="primary-header"></header>
				<aside class="primary-aside"></aside>
				<main>
					/* Search Layout */
					<div class="search">
						<header class="search-header"></header>
					<div class="results">

					/* User List */
					<ul class="user-list">
						<li>Dan</li>
						<li>Ryan</li>
						<li>Michael</li>
					</ul>
				</div>
			
				<div class="search-footer pagination"></div>
			</div>

			</main>
  </div>

</div>
    );
  }
}

export default App;
