import React from 'react'
import {withStyles, mergeClasses} from "@material-ui/styles"


const styles = {
    root:{
        backGroundColor: "white", 
        border: "1px solid black",
boarderRaduis:"5px",
padding:"0.5rem",
position:"relative",
overflow:"hidden",

"&:hover": {
    cursor:'pointer'
}

    },
    colors:{
backGroundColor:"grey"
    },
    title:{
display:"flex",
justifyContent: "spacebetween", 
alignItems:"center", 
margin: "0",
paddingTop: "0.5rem",
 fontSize:"1rem", 
 position:'relative'
    }, 
    emoji:{
marginLeft:"0.5rem", 
fontSize:"1.5rem"
    }
    
}

function MiniPalette(props){
    let {classes, paletteName, emoji} = props
    return (
        <div className={classes.root}>


            <div className={classes.colors}></div>
            <h5 className={classes.title}>{paletteName}
            <span className={classes.emoji}>{emoji}</span>
            
            </h5>
        </div>
        
        
        
        )
}

export default withStyles(styles)(MiniPalette)