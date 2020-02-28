import React, { Component } from 'react'
import "./colorBox.css"
import {CopyToClipboard} from 'react-copy-to-clipboard'
export default class ColorBox extends Component {
    constructor(props){
        super(props)
        this.state = {
            copied: false
        }


        this.changeCopyState = this.changeCopyState.bind(this)
    }


    changeCopyState(){
        this.setState({copied: true}, ()=>{
            setTimeout(()=>{this.setState({copied:false})}, 1500)
        })
    }
    render() {
        const {name, background} = this.props
        return (
            <CopyToClipboard text={name} onCopy={this.changeCopyState}>
            <div className="ColorBox" style={{background}}>
                
                
                <div style={{background}} className={`copy-overlay ${this.state.copied && "show"}`}>

                <div  className={`copy-msg ${this.state.copied && "show"}`}>
                    <h1>Copied!</h1>
                    <p>{this.props.background}</p>
                </div>
                    
                </div>

        
                <div className="copy-container">
             <div className="box-content">
        <span>{name}</span>
             </div>
             <button className="copy-button">Copy</button>
             </div>
             <span className="see-more">More</span>
            </div>
            </CopyToClipboard>
        )
    }
}
