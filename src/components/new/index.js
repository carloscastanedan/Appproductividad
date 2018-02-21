import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class CreateTask extends Component
{
  render()
  {
    return(
        <div className="row">
          <form action="">
            <div className="col s8 offset-s2">
              <h4 className="grey-text">Crea una nueva Tarea:</h4>
            </div>
            <div className="input-field col s8 offset-s2">
              <input id="name" type="text" className="validate" Name="name"/>
              <label htmlFor="name">Nombre</label>
            </div>
            <div className="input-field col s8 offset-s2">
              <textarea id="descrition" className="materialize-textarea" name="description"></textarea>
              <label htmlFor="description">Descripción</label>
            </div>
            <p className="range-field col s8 offset-s2">
              <input type="range" id="duration" name="duration" min="0" max="120" step="1"/>
              <label htmlFor="duration">Duración(min)</label>
            </p>
            <Link to="/home">Update Task</Link>
          </form>
        </div>
    )
  }
}

export default CreateTask
