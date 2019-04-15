import React, { Component } from 'react';

import './App.css';

import Quote from "./Quote";
import Newlogo from "./Working";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      speed: 20
    }
  }
  render() {

    return (
      <div className="App">
        <header className="App-header">
         
          <Newlogo url="https://risibank.fr/cache/stickers/d520/52080-full.png" classCSS="RoundSawBladeFast" textImgMissing="Round saw blade" />
          <h1 class="App-title">CHIRAC</h1>
          <p>
            Hello folks, welcome !!
          </p>
         
        </header>

        <Quote />
      </div>
    );
  }
}

export default App;
