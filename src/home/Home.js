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


//material-ui components
import AppBar from 'material-ui/AppBar';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';



class App extends Component {


  render () {
    return (
    <div className="App">


		<div className="Meme-display">
			  <MemeContent memeImage={meme1} submittedby="Jason" memeDescription="Kermit Inner Me Memes" DP={dp1}/>
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



/* */

class MemeContent extends Component {

  render () {
    return (
  <Card>
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

//prop arrowIcon

export default App;
