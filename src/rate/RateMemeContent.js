import React, { Component } from 'react';
import kermitMeme from '../pics/memes/KermitTheFrogMeme.jpg';

import '../App.css';
import './Rate.css';

export default class RateMemeContent extends Component {

  render () {
    return (
      <div className="Meme-content Meme-display-component">
        <img src={kermitMeme} className="currentMeme" alt="dank meme" />
        <h2 className="Meme-caption">{this.props.caption}</h2>
      </div>

    );
  }

}