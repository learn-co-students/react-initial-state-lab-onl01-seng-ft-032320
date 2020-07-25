// your Bomb code here!
import React, { Component } from 'react'

export default class Bomb extends Component {
    constructor(props){
     super(props)
     this.state ={
        secondsLeft:props.initialCount
        
     }
    
    }
    timer =()=>{
       
        secondsLeft === 0 ? "Bom!":"120 seconds left before I go boom!"
    }
    render() {
        return (
            <div>
                {this.timer}
            </div>
        )
    }
}
