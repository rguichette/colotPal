import React, { Component } from 'react'
import ColorBox from "./ColorBox.js"
import "./palette.css"
export default class Palette extends Component {

   
    render() {
        const colorBoxes = this.props.palette.colors.map(color =>{
        return <ColorBox background={color.color} name={color.name}/>
        })

        return (
            <div className="Palette">
                {/* navbar goes here */}
                {colorBoxes}
                <div className="Palette-colors">{/* bunch of c */}</div>
                {/* footer */}
                hi there
            </div>
        )
    }
}
