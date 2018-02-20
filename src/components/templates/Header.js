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
        <div className="Logo">
          <h2>{title}</h2>
        </div>
      </header>
    )
  }
}

export default Header
