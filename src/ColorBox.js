import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
    return (
      // set the initial div to the inherited opacity on App.js
      <div className="color-box" style={{opacity: this.props.opacity}}>
      
      {/* you then re-render it below each time, by re-declaring ColorBox and setting the opacity
      to itself minus 0.1, otherwise null -- in react this means hide yourself(do not render)  */}
        { this.props.opacity >= 0.2 ? <ColorBox opacity={this.props.opacity - 0.1} /> : null}
      </div>

    )
  }
  
}
