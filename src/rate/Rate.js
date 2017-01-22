

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

import Dropzone from 'react-dropzone';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = 'ix6uuwpz';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dw2tyakrm/image/upload';
const OUR_API_POST = "http://sample-env.zfiz29cagi.us-west-2.elasticbeanstalk.com/post/upload?url="

import '../App.css';
import './Rate.css';
import $ from 'jquery'

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
	this.onDrop = this.onDrop.bind(this)
  }

componentDidMount() {
  var copyEmailBtn = document.querySelector('.js-emailcopybtn');
  copyEmailBtn.addEventListener('click', function(event) {
    // Select the email link anchor text
    var emailLink = document.querySelector('.js-emaillink');
    var range = document.createRange();
    range.selectNode(emailLink);
    window.getSelection().addRange(range);

    try {
      // Now that we've selected the anchor text, execute the copy command
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      console.log('Copy email command was ' + msg);
    } catch(err) {
      console.log('Oops, unable to copy');
    }

    // Remove the selections - NOTE: Should use
    // removeRange(range) when it is supported
    window.getSelection().removeAllRanges();
  });
}

  changeCaption (incre) {
    this.setState ({
      data: this.state.data,
      index: (this.state.index+incre)%this.state.length,
      length: this.state.length
    });
  }

  onDrop(file) {
		let upload = request.post (CLOUDINARY_UPLOAD_URL)
							.field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
							.field('file',file);

		upload.end((err, response) => {
			if (err) {
				console.error(err);
			}

			if (response.body.secure_url !== '') {
        var final_url = OUR_API_POST + response.body.secure_url;
        $.ajax({
          type: "POST",
          url: final_url,
          crossDomain: true,
          dataType: 'jsonp',
          success: () => {console.log('IT WORKEDDD');debugger}
        });
			}
		})
	}

  onDropAccepted() {
    return(
      <div class="alert alert-dismissible alert-success">
        <button type="button" class="close" data-dismiss="alert">×</button>
        <strong>File Upload Succeded!</strong>
      </div>
    )
  }

  onDropRejected() {
    return(
      <div class="alert alert-dismissible alert-success">
        <button type="button" class="close" data-dismiss="alert">×</button>
        <strong>File Upload Succeded!</strong>
      </div>
    )
  }

  render () {
    return (
    <div className="Rate">
    	<div className="Meme-display">
          <RateMemeContent caption={this.state.data[this.state.index].caption} />

    	</div>
      <p><a className="js-emaillink" >{window.location.href}</a></p>

      <p><button className="js-emailcopybtn">COPY URL</button></p>
      <Dropzone onDrop={this.onDrop} className="noDropZone">
      	<FloatingActionButton secondary={true} className="FloatingActionAdd">
        		<ContentAdd />
      	</FloatingActionButton>
    </Dropzone>
    </div>
    );
  }
};


// <a className="js-emaillink hide">{window.location.href} </a>
// <p><button className="js-emailcopybtn FloatingActionCopy">Copy URL</button></p>
