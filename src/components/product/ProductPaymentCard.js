import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ProductCard from './ProductCard'
import styled from 'styled-components'

class ProductPaymentCard extends Component {
  render () {
    return (
      <Container>
        <ProductCard product={this.props.product} />
        <h1>{this.props.count}</h1>
      </Container>
    )
  }
}

ProductPaymentCard.PropTypes = {
  product: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired
}

const Container = styled.div`
  text-align: center;
  padding: 12px;
`

export default ProductPaymentCard
