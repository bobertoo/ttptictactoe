import React, { Component } from 'react';
import './GameBoard.css';
import './GameSquare.css';

class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlayer: 'x',
      winner: false
    };
    this.winning = {x: {}, o: {}};
    this.handleClick = this.handleClick.bind(this);
    this.drawSquares = this.drawSquares.bind(this);
  }
  handleClick(e) {
    if (!this.state.winner) {
      if (e.target.innerHTML === 'x' || e.target.innerHTML === 'o') {
        console.log('nope!');
      }
      else {
        this.winning[this.state.currentPlayer][e.target.className.split(" ")[1]] = true;
        e.target.innerHTML = this.state.currentPlayer;
        if (this.winning[this.state.currentPlayer]['00']) {
          if (this.winning[this.state.currentPlayer]['01'] && this.winning[this.state.currentPlayer]['02']) {
            console.log('YOU WIN!');
            this.setState({winner: this.state.currentPlayer});
          }
          else if (this.winning[this.state.currentPlayer]['11'] && this.winning[this.state.currentPlayer]['22']) {
            console.log('YOU WIN!');
            this.setState({winner: this.state.currentPlayer});
          }
          else if (this.winning[this.state.currentPlayer]['10'] && this.winning[this.state.currentPlayer]['20']) {
            console.log('YOU WIN!');
            this.setState({winner: this.state.currentPlayer});
          }
        }
        else if (this.winning[this.state.currentPlayer]['01'] && this.winning[this.state.currentPlayer]['11'] && this.winning[this.state.currentPlayer]['21']) {
            console.log('YOU WIN!');
            this.setState({winner: this.state.currentPlayer});
        }
        else if (this.winning[this.state.currentPlayer]['02']) {
          if (this.winning[this.state.currentPlayer]['11'] && this.winning[this.state.currentPlayer]['20']) {
            console.log('YOU WIN!');
            this.setState({winner: this.state.currentPlayer});
          }
          else if (this.winning[this.state.currentPlayer]['12'] && this.winning[this.state.currentPlayer]['22']) {
            console.log('YOU WIN!');
            this.setState({winner: this.state.currentPlayer});
          }
        }
        else if (this.winning[this.state.currentPlayer]['12'] && this.winning[this.state.currentPlayer]['11'] && this.winning[this.state.currentPlayer]['10']) {
            console.log('YOU WIN!');
            this.setState({winner: this.state.currentPlayer});
        }
        this.state.currentPlayer === 'x' ? this.setState({currentPlayer: 'o'}) : this.setState({currentPlayer: 'x'});
      }
    }
  }
  drawSquares() {
    var squareArray = [];
    for (var x = 0; x < 3; x++) {
      for (var y = 0; y < 3; y++) {
        squareArray.push(
          <li
            key={`square${x}${y}`}
            className={`square ${x}${y}`}
            onClick={this.handleClick}>
            -
          </li>
        );
      }
    }
    return squareArray;
  }
  render() {
    return (
      <div>
        {(this.state.winner) ? <p>{`${this.state.winner} Wins!`}</p> : <p>WEE</p>}
        <ul className="game-board">
          {this.drawSquares()}
        </ul>
      </div>
    );
  }
}

export default GameBoard;
