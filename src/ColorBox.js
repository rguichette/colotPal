import React, { Component } from 'react'
import "./colorBox.css"
import {CopyToClipboard} from 'react-copy-to-clipboard'
export default class ColorBox extends Component {
    render() {
        const {name, background} = this.props
        return (
            <CopyToClipboard text={this.props.background}>
            <div className="ColorBox" style={{background: this.props.background}}>
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
