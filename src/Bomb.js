import React, { Component } from 'react';

export default class Bomb extends Component {
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    increment = () => {
        const newTimeLeft = this.state.secondsLeft - 1
        this.setState({
            secondsLeft: newTimeLeft
        })
    }

    render() {
        return (
            <p>
                {this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`}
            </p>
        )
    }
}
