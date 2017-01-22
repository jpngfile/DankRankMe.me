import React, { Component } from 'react';
import meme1 from '../pics/memes/KermitTheFrogMeme.jpg';
import meme2 from '../pics/memes/Arthur.png';
import meme3 from '../pics/memes/SpongebobMeme.jpg';
import meme4 from '../pics/memes/MrKrabs.jpg';
import meme5 from '../pics/memes/HighGuy.png';
import meme6 from '../pics/memes/Fry.jpg';
import meme7 from '../pics/memes/Pepe.PNG';
import dp1 from '../pics/memes/JasonDP.jpg';
import dp2 from '../pics/memes/DanielDP.jpg';
import dp3 from '../pics/memes/@SushiDP.jpg';
import dp4 from '../pics/memes/IyvanDP.jpg';
import ScrollReveal from'scrollreveal'
import $ from 'jquery'

//material-ui components
import {Card, CardHeader, CardMedia, CardTitle} from 'material-ui/Card';

const AWS_DOWNLOAD_URL = "http://sample-env.zfiz29cagi.us-west-2.elasticbeanstalk.com/get/images"

class MemeContent extends Component {

  render () {
    return (
      <Card className="hideScroll">
        <CardHeader 
          title={this.props.submittedby}
          avatar={this.props.DP}
        />
        <CardMedia>
          <img src={this.props.memeImage} alt="Dank Meme" />
        </CardMedia>
        <CardTitle title={this.props.memeDescription}/>
      </Card>
    );
  }
}

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data : {}
    }

    this.componentWillMount = this.componentWillMount.bind(this);

  }

    componentWillMount() {
      var bar = this;
      console.log('Component DID MOUNT!');
      /*fetch (AWS_DOWNLOAD_URL).then (function(response) {
        console.log (response.json());
      debugger
        bar.setState({
          data: response.json()
        });
      });*/
      $.get (AWS_DOWNLOAD_URL, function (data) {
        console.log (data);
        bar.setState({
          data: data.results
        });
      })
   }

/*
    if (this.state.data != {}) { 
      memeContentArray = this.state.data.map((id, url) => {
            <MemeContent memeImage={url} submittedby="Jason" memeDescription="Kermit Inner Me Memes" DP={dp1}/>
          });
  }
*/
  
  render () {
    
    var memeContentArray = []
    try {
      console.log ("DId run");
       this.state.data.map(image => {
           memeContentArray.push(<MemeContent memeImage={image.path} submittedby={image.author} memeDescription={image.title} DP={dp1}/>)
          });
    } catch (e) {

    }



    return (
    <div className="App">


		<div className="Meme-display">
        <div>
          {memeContentArray}
        </div>

			  <MemeContent memeImage={meme1} href="/rate" submittedby="Jason" memeDescription="Kermit Inner Me Memes" DP={dp1}/>
			  <MemeContent memeImage={meme2} submittedby="Daniel" memeDescription="The Legendary Arthur Fist Memes" DP={dp2}/>
			  <MemeContent memeImage={meme3} submittedby="@Sushi" memeDescription="Caveman Spongebob Memes" DP={dp3}/>
			  <MemeContent memeImage={meme4} submittedby="Iyvan" memeDescription="Mr Krabs Memes" DP={dp4}/>
			  <MemeContent memeImage={meme5} submittedby="Daniel" memeDescription="High Guy Memes" DP={dp2}/>
			  <MemeContent memeImage={meme6} submittedby="Iyvan" memeDescription="Fry Memes" DP={dp4}/>
			  <MemeContent memeImage={meme7} submittedby="Iyvan" memeDescription="Pepe Memes" DP={dp4}/>
		</div>
    </div>
	
    );
  }
}




//prop arrowIcon

export default App;
