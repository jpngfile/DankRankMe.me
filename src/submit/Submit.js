import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = 'ix6uuwpz';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dw2tyakrm/image/upload';

export default class Submit extends Component {

	constructor(props) {
		super(props);

		this.state = {
			uploadedFileCloudinarUrl:'',
			uploadedFile:''
		}
	}

	//react-dropzone always returns an array of files
	onImageDrop(files) {
		this.setState ({
			uploadedFile: files[0]
		});

		this.handleImageUpload(files[0]);
	}

	handleImageUpload (file) {
		let upload = request.post (CLOUDINARY_UPLOAD_URL)
							.field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
							.field('file',file);

		upload.end((err, response) => {
			if (err) {
				console.error(err);
			}

			if (response.body.secure_url !== '') {
				this.setState({
					uploadedFileCloudinaryUrl: response.body.secure_url
				});
			}
		})
	}

  render() {
    // Top Menu with DropDown
    return (
      <div className="Submit">

      	<div className="FileUpload">
        	<h1>Submit works</h1>
        	<Dropzone multiple={false}
        		accept="image/*"
        		onDrop={this.onImageDrop.bind(this)}
        		> <p>Drop an image or click to select a file to upload. </p>
        	</Dropzone>
        </div>
        {this.state.uploadedFileCloudinaryUrl === '' ? null : 
        	<div>
          		<p>{this.state.uploadedFile.name}</p>
          		<img src={this.state.uploadedFileCloudinaryUrl} />
        	</div>}

       </div>
        
    );
  }
}

/*
<Dropzone 
        	multiple={false}
        	accept="image/*"
        	onDrop={this.onImageDrop.bind(this)} >

        	<p>Drop an image or click to select a file to upload. </p>
        </Dropzone>
*/

/*

<div>
        	{this.state.uploadedFileCloudinaryUrl === '' ? null : 
        	<div>
          		<p>{this.state.uploadedFile.name}</p>
          		<img src={this.state.uploadedFileCloudinaryUrl} />
        	</div>}}
        </div>
      </div>
*/