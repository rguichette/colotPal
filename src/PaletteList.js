import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import MiniPalette from './MiniPalette'

export default class PaletteList extends Component {
    render() {
        console.log(this.props.palettes);
        
        return (
            <div>
                <MiniPalette/>
               {this.props.palettes.map((pal)=>{
                   console.log(pal.paletteName);
               return <Link to={`/palette/${pal.id}`}>{pal.paletteName}</Link>
                //    return <h1>{pal.paletteName} y</h1>
               })}
            </div>
        )
    }
}
