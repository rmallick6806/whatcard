import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="what-card">
        <div className="what-card-header">
          <div className='what-card-name'>WhatCard</div>
        </div>

        <div className='outer-container'>
          <div className='row-card-container'>
            <div className="what-card-info card-type">
              <h1>Here we are putting in information about What Card</h1>
              <h4>Its really cool. Trust me. Here is more product information by the way. Here is more product information by the way. </h4>
            </div>

            <div className="what-card-action card-type">
              <h2>Here we are putting in information about What Card</h2>
              <h4>There will be a dropdown below this.</h4>
              <div className='card-button'>{`Get Started`}</div>
            </div>
          </div>

          <div className="what-card-all card-type">
            <h1>All Cards Available</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
