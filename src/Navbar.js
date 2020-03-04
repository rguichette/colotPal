import React, { Component } from 'react'

import Slider, { Range } from 'rc-slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { Snackbar } from '@material-ui/core';
import CloseIcon from "@material-ui/icons/Close"
import IconButton from "@material-ui/core/IconButton"

import {Link} from 'react-router-dom'

// We can just import Slider or Range to reduce bundle size
// import Slider from 'rc-slider/lib/Slider';
// import Range from 'rc-slider/lib/Range';
import 'rc-slider/assets/index.css';


export default class Navbar extends Component {
    constructor(props){
        super(props)
        this.state = {
            format:"hex",
            open:false
    }

        this.handleFormatChange = this.handleFormatChange.bind(this)
        this.closeSnackBar = this.closeSnackBar.bind(this)
    }

    handleFormatChange(e){
        this.setState({
            format:e.target.value,
            open:true
        }, ()=>{
            this.props.handleChange(this.state.format)
        })
        
    }
    closeSnackBar(){
        this.setState({
            open:false
        })
    }
    render() {
       
        return (
            <header className="Navbar">
                <div className="slider-container">
        <span>Level: {this.props.level} </span>
                  <div className="slider">
              
             
            <div className="logo">
                <Link to="/">reactColorPicker</Link>
                
                <Slider defaultValue={this.props.level} min={100} max={900} step={100} onAfterChange={this.props.changeLevel}/>
            </div>
            <div className="select-container">
           <Select value={this.state.format} onChange={this.handleFormatChange}>
               <MenuItem value="hex">HEX - #fffff</MenuItem>
               <MenuItem value="rgb">RGB - rgb(255,255,255) </MenuItem>
               <MenuItem value="rgba">RGBA - rgb(255,255,255, 1.0) </MenuItem>

           </Select>
            </div>
            <Snackbar ancorOrigin={{vertical:"bottom", horizontal:"right"}} open={this.state.open} autoHideDuration={3000}
            message={<span id="message-id">`format changed to {this.state.format.toUpperCase()}`</span>}

            ContentProps={{
                "aria-describedby":"message-id"
            }}
            onClose={this.closeSnackBar}
            action={
                [
                   <IconButton onClick={this.closeSnackBar} color="inherit" key="close" aria-label="close">
                    <CloseIcon/>

                   </IconButton>
                ]
            }
            >

            </Snackbar>
            </div>
             </div>
            </header>
        )
    }
}
