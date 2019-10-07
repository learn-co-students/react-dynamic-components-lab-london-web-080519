import React, { Component } from 'react';
import Comment from './Comment.js'
import BlogPost from './BlogPost.js'
import ColorBox from './ColorBox.js'

class App extends Component {
  
  // Nothing needs to change here! 
  // Make note of what prop we are initially passing to `ColorBox` below!
  
  render() {
    return (
      <div id="app">
          <BlogPost />

          <div className="wrapper">
            <ColorBox opacity={1} />
          </div>
          <Comment />
      </div>
    )
  }
}

export default App;
