import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

class ProductSummaryCard extends Component {
  render () {
    let { product, count, handleUpdateCart } = this.props
    return (
      <Container>
        <Image src={product.image} alt={product.title} />
        <Title>{product.title}</Title>
        <Count onClick={() => handleUpdateCart(product.id, count - 1)}>-</Count>
        <Count>{this.props.count}</Count>
        <Count onClick={() => handleUpdateCart(product.id, count + 1)}>+</Count>
        <Price>{product.price.toFixed(2)}</Price>
        <Total>{(product.price * count).toFixed(2)}</Total>
      </Container>
    )
  }
}

ProductSummaryCard.PropTypes = {
  product: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
  handleUpdateCart: PropTypes.func.isRequired
}

const Container = styled.div`
  display: flex;
  padding: 12px;
`

const Image = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 4px;
  object-fit: cover;
`

const Title = styled.span`
  font-weight: bold;
`

const Count = styled.span`
  font-weight: bold;
`

const Price = styled.span`

`

const Total = styled.span`

`

export default ProductSummaryCard
