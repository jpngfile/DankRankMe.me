import React, { Component } from 'react';
import logo from './logo.svg';
import kermitMeme from '../pics/memes/KermitTheFrogMeme.jpg';
import rightArrow from '../pics/icons/chevron-right.png'
import leftArrow from '../pics/icons/chevron-left.png'

import './App.css';

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div className="App">
        <Header />
        <div className="Meme-display">
          <ArrowButton className="Left-arrow-button" icon={leftArrow}/>
          <MemeContent />
          <ArrowButton className="Right-arrow-button" icon={rightArrow}/>
        </div>
      </div>
    );
  }
}

class defaultReactComponent extends Component {
  render () {
    return (
      <div className = "App">
      <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        </div>
    );
  }
}

class Header extends Component {
  render () {
    return (
      <div className="Dank-header">
          <h1 className="Dank-header-title">DankRank</h1>
      </div>
    );
  }
}

class MemeContent extends Component {
  render () {
    return (
      <div className = "Meme-content Meme-display-component">
        <img src={kermitMeme} className="currentMeme" alt="dank meme" />
      </div>

    );
  }
}

//prop arrowIcon
class ArrowButton extends Component {
  render () {
    return (
      <button className={"Meme-display-component Arrow-button " + this.props.className}>
        <img src={this.props.icon} className="Arrow-button-img"/>
      </button>
    );
  }
}

export default App;
