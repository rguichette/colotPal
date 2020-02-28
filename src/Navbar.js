import React, { Component } from 'react'

import Slider, { Range } from 'rc-slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

// We can just import Slider or Range to reduce bundle size
// import Slider from 'rc-slider/lib/Slider';
// import Range from 'rc-slider/lib/Range';
import 'rc-slider/assets/index.css';


export default class Navbar extends Component {
    constructor(props){
        super(props)
        this.state = {format:"hex"}

        this.handleChange = this.handleChange.bind(this)

    }

    handleChange(e){
        this.setState({
            format:e.target.value
        }, ()=>{
            this.props.handleChange(this.state.format)
        })
        
    }
    render() {
       
        return (
            <header className="Navbar">
                <div className="slider-container">
        <span>Level: {this.props.level} </span>
                  <div className="slider">
              
             
            <div className="logo">
                <a>reactColor</a>
                <Slider defaultValue={this.props.level} min={100} max={900} step={100} onAfterChange={this.props.changeLevel}/>
            </div>
            <div className="select-container">
           <Select value={this.state.format} onChange={this.handleChange}>
               <MenuItem value="hex">HEX - #fffff</MenuItem>
               <MenuItem value="rgb">RGB - rgb(255,255,255) </MenuItem>
               <MenuItem value="rgba">RGBA - rgb(255,255,255, 1.0) </MenuItem>

           </Select>
            </div>
            </div>
             </div>
            </header>
        )
    }
}
