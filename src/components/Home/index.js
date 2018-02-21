// Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s12">

          <h4>Tus Tareas:</h4>
            <div className="row">
            <div className="col s12 m6 l4 xl3">
              <div className="card  red darken-1">
                <div className="card-content white-text">
                  <span className="card-title">Card Title</span>
                  <p>I am a very simple card. I am good at containing small bits of information.
                  I am convenient because I require little markup to use effectively.</p>
                </div>
                <div className="card-action">
                  <a href="#"><i className="material-icons">delete_sweep</i></a>
                  <a href="#"><i className="material-icons">autorenew</i></a>
                  <a href="#"><i className="material-icons">play_arrow</i></a>
                </div>
              </div>
            </div>

            <div className="col s12 m6 l4 xl3">
              <div className="card pink darken-1">
                <div className="card-content white-text">
                  <span className="card-title">Card Title</span>
                  <p>I am a very simple card. I am good at containing small bits of information.
                  I am convenient because I require little markup to use effectively.</p>
                </div>
                <div className="card-action">
                  <a href="#"><i className="material-icons">delete_sweep</i></a>
                  <a href="#"><i className="material-icons">autorenew</i></a>
                  <a href="#"><i className="material-icons">play_arrow</i></a>
                  </div>
              </div>
            </div>
            <Link to="/home">Home</Link>
          </div>
        </div>
      </div>

    )
  }
}

export default Home


