import React, { Component } from 'react';

import ArrowRight from 'material-ui/svg-icons/navigation/chevron-right';
import ArrowLeft from 'material-ui/svg-icons/navigation/chevron-left';
import IconButton from 'material-ui/IconButton';

import '../App.css';
import './Rate.css';
export default class RateArrowButton extends Component {
  render () {
    return (
      <IconButton className={"Meme-display-component Arrow-button " + this.props.className} onClick={this.props.onClick}>
        <ArrowRight />
      </IconButton>
    );
  }
}

//<img src={this.props.icon} className="Arrow-button-img" alt="chevron arrow"/>