// Dependencies
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


class Header extends Component {
  static propTypes =
  {
    title: PropTypes.string.isRequired,
  }

  render() {
    const { title } = this.props;
    return (
      <header>
        <nav>
          <div className="nav-wrapper teal">
            <a href="#!" className="brand-logo"><i className="material-icons">accessibility</i>Productivity</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="#">{ title }</a></li>
              </ul>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header
