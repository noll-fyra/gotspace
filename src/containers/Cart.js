import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import styled from 'styled-components'

class Cart extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    return (
      <div>Cart Page</div>
    )
  }
}

Cart.PropTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  cart: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Cart
