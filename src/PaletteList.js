import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import MiniPalette from './MiniPalette';

export default class PaletteList extends Component {
    render() {
        console.log(this.props.palettes);
        
        return (
            <div>
               {this.props.palettes.map((pal)=>{
                   console.log(pal.paletteName);
               return <MiniPalette {...pal}/>
                //    return <h1>{pal.paletteName} y</h1>
               })}
            </div>
        )
    }
}
