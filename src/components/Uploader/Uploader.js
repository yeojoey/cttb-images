import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

class Uploader extends Component {

  render () {
    return (

      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">Upload</span>
        </div>
        <div class="custom-file">
          <input type="file" class="custom-file-input" id="inputGroupFile01"></input>
          <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
        </div>
    </div>

    )
  }

}

export default Uploader
