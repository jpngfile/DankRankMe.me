import React, { Component } from 'react';

import ArrowRight from 'material-ui/svg-icons/navigation/chevron-right';
import ArrowLeft from 'material-ui/svg-icons/navigation/chevron-left';
import IconButton from 'material-ui/IconButton';

import '../App.css';
import './Rate.css';

const styles = {
  smallIcon: {
    width: 36,
    height: 36,
  },
  medIcon: {
    width: 70,
    height: 70,
  }
 }
export default class RateArrowButton extends Component {

  render () {
    return (
      <IconButton className={"Meme-display-component Arrow-button " + this.props.className} iconStyle={styles.smallIcon} onClick={this.props.onClick}>
        {this.props.isRight? <ArrowRight /> : <ArrowLeft />}
      </IconButton>
    );
  }
}

//<img src={this.props.icon} className="Arrow-button-img" alt="chevron arrow"/>