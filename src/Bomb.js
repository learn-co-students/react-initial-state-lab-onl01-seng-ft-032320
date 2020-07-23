// your Bomb code here!

import React, { Component } from 'react'

class Bomb extends Component {

    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    

    render() {
        const response = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;
        return (
            <div>
                {response}
            </div>
        )
    }
}

export default Bomb;

