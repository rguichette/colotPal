import React, { Component } from 'react'
import ColorBox from "./ColorBox.js"
import "./palette.css"
import Navbar from "./Navbar"

import Slider, { Range } from 'rc-slider';
// We can just import Slider or Range to reduce bundle size
// import Slider from 'rc-slider/lib/Slider';
// import Range from 'rc-slider/lib/Range';
import 'rc-slider/assets/index.css';

export default class Palette extends Component {
constructor(props){
    super(props)
    this.state ={
        level:500, 
        format:"hex"
    }
    this.changeLevel = this.changeLevel.bind(this)
    this.changeFormat = this.changeFormat.bind(this)
}
   

changeLevel(newLevel){
this.setState({
    level:newLevel
})
}

changeFormat(val){
 this.setState({format:val})
}

    render() {
        const colorBoxes = this.props.palette.colors[this.state.level].map((color, i) =>{
        return <ColorBox background={color[this.state.format]} name={color.name} key={i}/>
        })

        return (
            <div className="Palette">
              <Navbar level={this.state.level} changeLevel={this.changeLevel} handleChange={this.changeFormat}/>
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
