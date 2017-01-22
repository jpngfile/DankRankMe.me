import React, { Component } from 'react';
import logo from './logo.svg';
import kermitMeme from '../pics/memes/KermitTheFrogMeme.jpg';
import rightArrow from '../pics/icons/chevron-right.png';
import leftArrow from '../pics/icons/chevron-left.png';


//material-ui components
import AppBar from 'material-ui/AppBar';


import './App.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      data:
      [
        {
          "id":1,
          "caption":"Caption 1"
        },
        {
          "id":2,
          "caption":"Caption 2"
        },
        {
          "id":3,
          "caption":"Caption 3"
        },
        {
          "id":4,
          "caption":"Caption 4"
        },
      ],
      index : 2,
      length: 4
    }
  }

  changeCaption (incre) {
    this.setState ({
      data: this.state.data,
      index: (this.state.index+incre)%this.state.length,
      length: this.state.length
    });
  }

  render () {
    return (
    <div className="App">
    
    <Header />

    <div className="Meme-display">
          <MemeContent caption={this.state.data[this.state.index].caption} />
          <ArrowButton className="Left-arrow-button" icon={leftArrow} onClick={() => alert('click')} />
          <ArrowButton className="Right-arrow-button" icon={rightArrow} onClick={() => this.changeCaption(1)}/>
        
    </div>
     {this.props.children}
    </div>
    );
  }
}

/*  */

class Header extends Component {
  render () {
    return (
      {/* <div className="Dank-header">
          <h1 className="Dank-header-title">DankRank</h1>
      </div>*/},
      <AppBar
        className="Dank-header" title="DankRank"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      /> 
    );
  }
}


class MemeContent extends Component {

  render () {
    return (
      <div className="Meme-content Meme-display-component">
        <img src={kermitMeme} className="currentMeme" alt="dank meme" />
        <h2 className="Meme-caption">{this.props.caption}</h2>
      </div>

    );
  }

}

//prop arrowIcon

class ArrowButton extends Component {
  render () {
    return (
      <button className={"Meme-display-component Arrow-button " + this.props.className} onClick={this.props.onClick}>
        <img src={this.props.icon} className="Arrow-button-img" alt="chevron arrow"/>
      </button>
    );
  }
}

export default App;
