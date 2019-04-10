import React, { Component } from 'react';
import './App.css';

import Login from  './components/Login/Login'
import Uploader from './components/Uploader/Uploader'

class App extends Component {
  render() {
    return (
      <div>
        <Uploader />
        <Login />
      </div>
    );
  }
}

export default App;
