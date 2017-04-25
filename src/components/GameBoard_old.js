import React, { Component } from 'react';
// import GameSquare from './GameSquare';
import './GameBoard.css';
import './GameSquare.css';

class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hi: '-',
      currentPlayer: '-'
    };
    this.drawSquares = this.drawSquares.bind(this);
  }
  // handleClick(e) => {
//
  // }
  drawSquares() {
    var pieces = [];
    for (var x = 0; x < 3; x++) {
      for (var y = 0; y < 3; y++) {
        pieces.push(
          <li
            key={`square${x}${y}`}
            onClick={
              this.state.currentPlayer === 'x'
              ? (e) => this.setState({hi: 'o', currentPlayer: 'o'})
              : (e) => this.setState({hi: 'x', currentPlayer: 'x'})
            }
            className={`square x${x} y${y}`}
          >{this.state.hi}</li>);
        }
      }
      console.log(pieces);
      return pieces;
    }
  render() {
    return (
      <ul className="game-board">
        { this.drawSquares() }
      </ul>
    );
  }
}

export default GameBoard;
