import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

class Checkout extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    // let { products, cart } = this.props
    return (
      <Container>
        <h1>Congratulations you saved a ton of money woohoo</h1>
      </Container>
    )
  }
}

Checkout.PropTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleUpdateCart: PropTypes.func.isRequired
}

const Container = styled.main`
  display: flex;
  height: calc(100vh - 48px);
`

export default Checkout
