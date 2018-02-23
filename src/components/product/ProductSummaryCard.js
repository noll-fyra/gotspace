import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

class ProductSummaryCard extends Component {
  formatCount (count) {
    return count < 10 ? '0' + count.toString() : count
  }
  render () {
    let { product, count, handleUpdateCart } = this.props
    return (
      <Container>
        <Image src={product.image} alt={product.title} />
        <Info>
          <Title>{product.title.toUpperCase()}</Title>
          <Category>{product.category_name.toUpperCase()}</Category>
          <Cost>
            <div style={{display: 'flex'}}>
              <Count onClick={() => handleUpdateCart(product.product_id, count - 1)}>-</Count>
              <Count><span style={{color: 'grey', fontSize: '0.8em'}}>x</span> {this.formatCount(this.props.count)}</Count>
              <Count onClick={() => handleUpdateCart(product.product_id, count + 1)}>+</Count>
            </div>
            <Price><span style={{color: 'grey', fontSize: '0.8em'}}>$</span>{(parseFloat(product.price) * count).toFixed(2)}</Price>
          </Cost>
        </Info>
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
  height: 76px;
  display: flex;
  margin-bottom: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid lightGrey;
`

const Image = styled.img`
  width: 64px;
  min-width: 64px;
  height: 64px;
  border-radius: 4px;
  border: 1px solid lightGrey;
  object-fit: cover;
  overflow: hidden;
  background-color: black;
`

const Info = styled.div`
  width: 100%;
  max-width: calc(100% - 80px);
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  margin-left: 8px;
`

const Title = styled.div`
  width: 100%;
  font-size: 0.9em;
  font-weight: bold;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

const Category = styled.div`
  color: grey;
  font-size: 0.6em;
  font-weight: bold;
  line-height: 12px;
`

const Cost = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
`

const Count = styled.h3`
  font-weight: lighter;
`

const Price = styled.h3`
  font-weight: lighter;
`

export default ProductSummaryCard
