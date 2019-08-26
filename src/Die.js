import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    wordify: ['one', 'two', 'three', 'four', 'five', 'six'],
    val: 6
  }
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick () {
    this.props.handleClick(this.props.idx);
  }
  render() {
    const {wordify, locked, val, disabled, rolling} = this.props;
    let newDice = `Die fas fa-dice-${wordify[val - 1]} fa-5x `
    if(locked) newDice += 'Die-locked ';
    if(rolling) newDice += 'Die-rolling';
    return (
      <i
        className={newDice} onClick={this.handleClick} disabled={disabled}
      >
      </i>
    );
  }
}

export default Die;
