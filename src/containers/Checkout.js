import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import styled from 'styled-components'

class Checkout extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    return (
      <div>Checkout Page</div>
    )
  }
}

Checkout.PropTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  cart: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Checkout
