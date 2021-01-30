import React from 'react';

export default class Bomb extends React.Component {
  constructor(props){
    super()
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  counter = () => {
    if (this.state.secondsLeft === 0) return "Boom!"
    return `${this.state.secondsLeft} seconds left before I go boom!`
  }

  render() {
    return <div>{this.counter()}</div>
  }
}