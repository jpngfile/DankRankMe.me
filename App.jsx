import React from 'react';

class App extends React.Component {
	render () {

		var titleStyle = {
			fontSize: 50,
			color: '#FFFFFF'
		}

		var headerStyle = {
			background-color: black
		}
		return (
			<div style={headerStyle}>
				<h1 style = {titleStyle}>DankRankMeme</h1>
				<h2>For all your ranking needs</h2>
			</div>
		);
	}
}

class Meme extends React.Component {
	
}

export default App;