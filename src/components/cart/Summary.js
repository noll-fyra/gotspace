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
        <div style={{height: '5%'}}>
          <h4>SUMMARY</h4>
        </div>
        <div style={{maxHeight: '75%', overflow: 'auto'}}>
          {products.map((item, index) => cart[item.product_id] ? <ProductSummaryCard key={item.product_id} product={item} count={cart[item.product_id]} handleUpdateCart={handleUpdateCart} /> : <div key={item.product_id} />)}
        </div>
        <div style={{height: '20%'}}>
          <div>SUBTOTAL: $32</div>
          <div>SHIPPING: $12</div>
          <div>TOTAL: $44</div>
          <h1 style={{backgroundColor: 'gold'}}>Buy Now</h1>

        </div>

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

// const Total = styled.span`
//
// `

export default Summary
