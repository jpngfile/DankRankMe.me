import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';
import iconDoge from '../pics/icons/Doge.png';
import doge from '../pics/memes/perfectDoge.jpg';
import './About.css';
const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
};

export default class TabsExampleSwipeable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    return (
      <div className="about-Display">
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
		  
        >
          <Tab label="About DankRank" style={{backgroundColor:"purple"}} value={0} />
          <Tab label="Why Doge?" style={{backgroundColor:"purple"}} value={1} />

        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div>
			
			<img src={iconDoge} className="iconLogoDoge" alt="DankRank Logo"/>
			<h1 style={styles.headline}>DankRank</h1>
			DankRank was an application created to unite 
			the world using the power of memes. A meme is a humorous 
			image that is shared rapidly by users. They are used to
			show emotion, humour, or portray something that words 
			cannot. Not to mention memes are also very easy to make. 
			When used correctly memes have the power to unite and solidfy society.<br />
          </div>
          <div style={styles.slide}>
            <h1 style={styles.headline}>Cause</h1>
			<img src={doge} className="perfectDoge" alt="DankRank Logo"/>
          </div>
        </SwipeableViews>
      </div>
    );
  }
}
