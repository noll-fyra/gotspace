import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ProductPaymentCard from '../product/ProductSummaryCard'
import styled from 'styled-components'

class Products extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    let { products, cart } = this.props

    return (
      <Container>
        {/* {products.map((item, index) => cart[item.id] ? <ProductPaymentCard product={item} count={cart[item.id]} /> : <div />)} */}
      </Container>
    )
  }
}

Products.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  cart: PropTypes.arrayOf(PropTypes.object).isRequired
}

const Container = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
`

export default Products
