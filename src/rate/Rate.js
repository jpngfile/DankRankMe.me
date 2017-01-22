import React, { Component } from 'react';
import RateArrowButton from './RateArrowButton';
import RateMemeContent from './RateMemeContent';
//material-ui components
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import arrowBack from 'material-ui/svg-icons/navigation/close';
import ActionHome from 'material-ui/svg-icons/navigation/arrow-back';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ArrowRight from 'material-ui/svg-icons/navigation/chevron-right';
import ArrowLeft from 'material-ui/svg-icons/navigation/chevron-left';
import kermitMeme from '../pics/memes/KermitTheFrogMeme.jpg';

import '../App.css';
import './Rate.css';

export default class Rate extends Component {

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
      index : 0,
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
    <div className="Rate">
    	<div className="Meme-display">
          <RateMemeContent caption={this.state.data[this.state.index].caption} />
          <RateArrowButton className="Left-arrow-button" icon={ArrowLeft} isRight={false} onClick={() => this.changeCaption(1)} />        
          <RateArrowButton className="Right-arrow-button" icon={ArrowRight} isRight={true} onClick={() => this.changeCaption(1)}/>
    	</div>
    	<FloatingActionButton secondary={true} className="FloatingActionAdd">
      		<ContentAdd />
    	</FloatingActionButton>
    </div>
    );
  }
};

