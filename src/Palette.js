import React, { Component } from 'react'
import ColorBox from "./ColorBox.js"
import "./palette.css"

import Slider, { Range } from 'rc-slider';
// We can just import Slider or Range to reduce bundle size
// import Slider from 'rc-slider/lib/Slider';
// import Range from 'rc-slider/lib/Range';
import 'rc-slider/assets/index.css';

export default class Palette extends Component {
constructor(props){
    super(props)
    this.state ={
        level:500
    }
    this.changeLevel = this.changeLevel.bind(this)
}
   

changeLevel(newLevel){
this.setState({
    level:newLevel
})
}

    render() {
        const colorBoxes = this.props.palette.colors[this.state.level].map((color, i) =>{
        return <ColorBox background={color.hex} name={color.name} key={i}/>
        })

        return (
            <div className="Palette">
                <Slider defaultValue={this.state.level} min={100} max={900} step={100} onAfterChange={this.changeLevel}/>
                {/* navbar goes here */}
                
                <div className="Palette-colors">{/* bunch of c */}
                {colorBoxes}
                
                </div>
                {/* footer */}
                hi there
            </div>
        )
    }
}
