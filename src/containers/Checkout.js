import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import ProductPaymentCard from '../components/product/ProductPaymentCard'
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
        {/* <Products>
          {cart.map(item => <ProductPaymentCard product={products[item]} />)}
        </Products>
        <Summary>
          <h1>Summary</h1>
        </Summary> */}
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

const Products = styled.div`
  width: 70%;
  height: 100%;
  overflow: auto;

`

const Summary = styled.div`
  width: 30%;
  height: 100%;
`

export default Checkout
