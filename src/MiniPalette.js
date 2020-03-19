import React from 'react'
import {withStyles} from "@material-ui/styles"


const styles = {
    main:{
backgroundColor:"green", 
"& h1":{
    color: "red"
}
    }
    
}

function MiniPalette(props){
    return (
        <div className={props.classes.main}>


            <h1>Mini Pal </h1>
        </div>
        
        
        
        )
}

export default withStyles(styles)(MiniPalette)