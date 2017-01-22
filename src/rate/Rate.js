import React, { Component } from 'react';
import kermitMeme from '../../pics/memes/KermitTheFrogMeme.jpg';


//material-ui components
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import arrowBack from 'material-ui/svg-icons/navigation/close';
import ActionHome from 'material-ui/svg-icons/navigation/arrow-back';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ArrowRight from 'material-ui/svg-icons/navigation/chevron-right';
import ArrowLeft from 'material-ui/svg-icons/navigation/chevron-left';
import '../App.css';

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
    	<Header />

    	<div className="Meme-display">
          <MemeContent caption={this.state.data[this.state.index].caption} />
          <ArrowButton className="Left-arrow-button" icon={ArrowLeft} onClick={() => this.changeCaption(1)} />
          
          <ArrowButton className="Right-arrow-button" icon={ArrowRight} onClick={() => this.changeCaption(1)}/>
    	</div>
    	<FloatingActionButton secondary={true} className="FloatingActionAdd">
      		<ContentAdd />
    	</FloatingActionButton>
    </div>
    );
  }
};



class Header extends Component {
  render () {
    return (
      <AppBar
        className="Dank-header" title="DankRank"
        iconElementLeft={<IconButton><ActionHome /></IconButton>}
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
      <IconButton className={"Meme-display-component Arrow-button " + this.props.className} onClick={this.props.onClick}>
        <ArrowRight />
      </IconButton>
    );
  }
}

//<img src={this.props.icon} className="Arrow-button-img" alt="chevron arrow"/>