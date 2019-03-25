import React, { Component } from 'react';
import Post from "./Post"

class App extends Component {
  render() {
    return(
      <div className="parent">
        <Post/>
      </div>
    )
  }
}

export default App