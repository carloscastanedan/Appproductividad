// Dependencies
import React, { Component } from 'react'
import PropTypes from 'prop-types'


class Content extends Component {
  static propTypes =
  {
    body: PropTypes.object.isRequired
  }
  render()
  {
    const { body } = this.props
    return (
      <main className="valign-wrapper">
        { body }
      </main>
    )
  }
}

export default Content
