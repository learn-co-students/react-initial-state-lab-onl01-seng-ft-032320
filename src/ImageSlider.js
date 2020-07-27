// your ImageSlider code here!
import React, { Component } from 'react'

export default class ImageSlider extends Component {

    constructor() {
        super()
        this.state = {
            currentSlideIndex : 0
        }
    }
    
    increment = () => {
        const newCount = this.state.currentSlideIndex + 1
        this.setState({
          count: newCount
        })
      }

    render() {
        return (
            <div>
                I am on slide {this.state.currentSlideIndex}
            </div>
        )
    }
}
