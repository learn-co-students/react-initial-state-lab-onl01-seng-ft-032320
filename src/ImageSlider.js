// your ImageSlider code here!
import React, { Component } from 'react'

export default class ImageSlider extends Component {

    constructor(props){
     super(props)
     this.state={
        currentSlideIndex: 0
     }

    }
    // infor = ()=>{
    //  "I am on slide" + this.state.currentSlideIndex
    // }
    
    render() {
        return (
            <div>
              {"I am on slide " + this.state.currentSlideIndex}  
            </div>
        )
    }
}
