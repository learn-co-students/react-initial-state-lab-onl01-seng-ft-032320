import React, { Component } from 'react'

export default class ImageSlider extends Component {
   constructor(props){
      super()
      this.state = {
         secondsLeft: props.initialCount
      }
   }

   render() {
      const sLeft = this.state.secondsLeft
      const message = " seconds left before I go boom!"

      return (
         <div>
            { sLeft > 0 ? sLeft + message : "Boom!"}
         </div>
      )
   }
}
