import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import MiniPalette from './MiniPalette';

import {withStyles, mergeClasses} from "@material-ui/styles"

const styles ={
root:{
    backgroundColor: "blue", 
    height:"100%", 
    display:"flex", 
    alignItems:"flex-start", 
    justifyContent: "center"

}, 
container:{
width: "50%", 
display:"flex", 
alignItems:"flext-start", 
flexDirection: "column", 
flexWrap: "wrap", 
border: "1px solid white"
}, 
nav:{
display:"flex",
width:"100%", 
justifyContent:"space-between", 
color: "white"
}, 
palettes:{
boxSizing: 'border-box',
width: "100%", 
display:"grid", 
gridTemplateColumns: "repeat(3, 30%)", 
gridGap: '5%'


}
}


class PaletteList extends Component {
    render() {
        console.log(this.props.palettes);
        
        return (

            <div className={this.props.classes.root}>
                <div className={this.props.classes.container}>
                    <nav className={this.props.classes.nav}>
                    <h1>React Colors</h1>
                    </nav>
<div className={this.props.classes.palettes}>


               {this.props.palettes.map((pal)=>{
                   console.log(pal.paletteName);
               return <MiniPalette {...pal}/>
                //    return <h1>{pal.paletteName} y</h1>
               })}
               </div>
               </div>
            </div>
        )
    }
}


export default withStyles(styles)(PaletteList)


