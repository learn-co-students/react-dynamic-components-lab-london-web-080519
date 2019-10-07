import React, { Component } from 'react';

let opacityValue = 1.1

export default class ColorBox extends Component {
  render() {
    opacityValue -= 0.1
    const newOpacity = this.props.opacity * 2
    if (this.props.opacity < 100) {
      return (
        <div className="color-box" style={{opacity: opacityValue}}>
          <ColorBox opacity={newOpacity} /> 
        </div>
      )
    } else {
      return null
    }
  }
  
}
