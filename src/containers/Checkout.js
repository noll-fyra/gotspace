import React, { Component } from 'react'
import PropTypes from 'prop-types'
import constants from '../constants/constants'
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
        <h1>It's ordered!</h1>
        <div style={{marginTop: constants.size.margin.large}}>
          Thank you for your order - we hope you had a good time shopping with us. <br /><br />

          You have saved a tonne of money by ordering with us!
        </div>
      </Container>
    )
  }
}

Checkout.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleUpdateCart: PropTypes.func.isRequired
}

const Container = styled.main`
  display: flex;
  height: calc(100vh - 48px);
  padding: ${constants.size.padding.large} ${constants.size.padding.media};
  flex-flow: column;
`

export default Checkout
