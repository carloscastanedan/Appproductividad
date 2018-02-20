// Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1>Home Page</h1>
        <p>
          Hola Mundo XDXDXDXD
        </p>
        <p> <Link to="/contact">About</Link></p>
      </div>
    );
  }
}

export default Home
