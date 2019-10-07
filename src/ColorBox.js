import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
    const newValue = (this.props.opacity * 0.8);
  

    
    console.log(this.props.opacity)

    if (this.props.opacity > 0.3) {
      {let rounded = parseFloat(newValue.toFixed(1))}
      console.log (React.version)
      console.log(rounded)
      console.log(typeof rounded)
    
      return (
      <div className="color-box">
        {/* < ColorBox opacity = {this.props.opacity} /> */}
        {/* < ColorBox opacity={rounded} /> */}
       
       {console.log('hello')}
      </div>
    )
      }else {
        console.log('nope')
        return null;
        
      }
      
  }
}
  

