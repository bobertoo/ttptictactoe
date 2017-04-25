import React, { Component } from 'react';
import './GameSquare.css';

class GameSquare extends Component {
  render() {
    var classes = `square x${this.props.x} y${this.props.y}`
    return (
      <li className={classes} >{this.props.hi}</li>
    );
  }
}

export default GameSquare;
