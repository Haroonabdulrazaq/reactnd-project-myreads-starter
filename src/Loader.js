import React, { Component } from 'react';
import "./App.css";

export class Loader extends Component {
  render() {
    return(
      <div className="loader-wrapper"> 
         <div className="loader"></div>
         <h2>{this.props.text}</h2>
       </div>
     )
  }
}

export default Loader
