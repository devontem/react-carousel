import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title={"KING KONG"} />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
