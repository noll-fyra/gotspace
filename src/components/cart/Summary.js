import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ProductSummaryCard from '../product/ProductSummaryCard'
import styled from 'styled-components'

class Summary extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    let { products, cart, handleUpdateCart } = this.props
    return (
      <Container>
        <h2 style={{textAlign: 'center'}}>Summary</h2>
        {products.map((item, index) => cart[item.product_id] ? <ProductSummaryCard product={item} count={cart[item.product_id]} handleUpdateCart={handleUpdateCart} /> : <div />)}
      </Container>
    )
  }
}

Summary.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleUpdateCart: PropTypes.func.isRequired
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid lightGrey;
  padding: 12px;
  border-radius: 8px;
`

export default Summary
