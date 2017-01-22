import React, { Component } from 'react';
import kermitMeme from '../pics/memes/KermitTheFrogMemeCropped.jpg';
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
	          "caption":"*On Thanksgiving*\n\nMe: \"I ate 2 plates. I can\'t eat anymore\"\n\nMe to me: \"shut up & go get some more macoroni before it\'s all gone\""

	        },
	        {
	          "id":2,
	          "caption":"Me: I'm so happy I'm saving money\n\nMe to me: Now spend all of it"
	        },
	        {
	          "id":3,
	          "caption":"*Alarm goes off*\nMe: just sleep 10 more mins\nMe: how about 30 more mins\nMe: just skip the class\nMe: just drop out"
	        },
	        {
	          "id":4,
	          "caption":"me: sees a fluffy dog\n\nme to me: steal him"
	        },
	      ],
	      index : 0,
	      length: 4
	    }
	}
	  render () {
	    return (
	      <div className="Meme-content Meme-display-component">
	      <div className="captionCarouselContainer">
	        <ArrowLeft className="Left-arrow-button"/>
	        <ReactSwipe className="captionCarousel" swipeOptions={{continuous:false}}>
	        	<div><pre className="Meme-caption wordwrap">{this.state.data[0].caption}</pre></div>
	        	<div><pre className="Meme-caption wordwrap">{this.state.data[1].caption}</pre></div>
	        	<div><pre className="Meme-caption wordwrap">{this.state.data[2].caption}</pre></div>     	
	        	<div><pre className="Meme-caption wordwrap">{this.state.data[3].caption}</pre></div>
	      	</ReactSwipe>
	      	<ArrowRight className="Right-arrow-button"/>
	      	</div>
	        <img src={kermitMeme} className="currentMeme" alt="dank meme" />
	        
	      </div>
	    );
	  }
}

/*	        <h2 className="Meme-caption">{this.props.caption}</h2>*/