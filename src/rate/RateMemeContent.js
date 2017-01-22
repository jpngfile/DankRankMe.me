import React, { Component } from 'react';
import kermitMeme from '../../pics/memes/KermitTheFrogMeme.jpg';
import ReactSwipe from 'react-swipe';
import ArrowRight from 'material-ui/svg-icons/navigation/chevron-right';
import ArrowLeft from 'material-ui/svg-icons/navigation/chevron-left';

import '../App.css';
import './Rate.css';

export default class RateMemeContent extends Component {
	constructor() {
    	super();
		this.state = {
	      data:
	      [
	        {
	          "id":1,
	          "caption":"It's lit fam"
	        },
	        {
	          "id":2,
	          "caption":"LOLOLOLOLOLOO"
	        },
	        {
	          "id":3,
	          "caption":"[deleted]"
	        },
	        {
	          "id":4,
	          "caption":":) :) :) :("
	        },
	      ],
	      index : 0,
	      length: 4
	    }
	}
	  render () {
	    return (
	      <div className="Meme-content Meme-display-component">
	        <img src={kermitMeme} className="currentMeme" alt="dank meme" />
	        <div className="captionCarouselContainer">
	        <ArrowLeft className="Left-arrow-button"/>
	        <ReactSwipe className="captionCarousel" swipeOptions={{continuous:false}}>
	        	<div><h2 className="Meme-caption">{this.state.data[0].caption}</h2></div>
	        	<div><h2 className="Meme-caption">{this.state.data[1].caption}</h2></div>
	        	<div><h2 className="Meme-caption">{this.state.data[2].caption}</h2></div>     	
	        	<div><h2 className="Meme-caption">{this.state.data[3].caption}</h2></div>
	      	</ReactSwipe>
	      	<ArrowRight className="Right-arrow-button"/>
	      	</div>
	      </div>
	    );
	  }
}

/*	        <h2 className="Meme-caption">{this.props.caption}</h2>*/