import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ProductPaymentCard from '../components/product/ProductPaymentCard'
import styled from 'styled-components'

class Cart extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    let { products, cart } = this.props
    return (
      <Container>
        <Products>
          {products.map((item, index) => cart[item.id] ? <ProductPaymentCard product={item} count={cart[item.id]} /> : <div />)}
        </Products>
        <Summary>
          <h1 style={{textAlign: 'center'}}>Summary</h1>
          {/* {products.map(item => <ProductPaymentCard product={products[item]} />)} */}
        </Summary>
      </Container>
    )
  }
}

Cart.PropTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  cart: PropTypes.arrayOf(PropTypes.object).isRequired
}

const Container = styled.main`
  display: flex;
  height: calc(100vh - 48px);
`

const Products = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
`

const Summary = styled.div`
  width: 30%;
  height: 100%;
  background-color: lightGrey;
`

export default Cart
