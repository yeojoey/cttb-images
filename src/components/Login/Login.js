import React, { Component } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class Login extends Component {

  render () {
    return (
      <Form>
      <h3>Admin Login</h3>
      <Form.Group>
        <Form.Label>Channel Name</Form.Label>
        <Form.Control placeholder="Enter channel name" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      </Form>
    );
  }

}

export default Login
