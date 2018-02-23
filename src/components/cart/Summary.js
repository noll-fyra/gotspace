import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import ProductSummaryCard from '../product/ProductSummaryCard'
import styled from 'styled-components'

class Summary extends Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.renderCart = this.renderCart.bind(this)
    this.totalPayment = this.totalPayment.bind(this)
  }

  totalPayment () {
    let productsList = this.props.productsList
    let cart = this.props.cart
    let total = 0
    for (var item in cart) {
      total += productsList[item].price * cart[item]
    }
    return total
  }

  renderCart () {
    let productsList = this.props.productsList
    let cart = this.props.cart
    let buy = []
    for (var item in cart) {
      if (cart[item]) { buy.push(productsList[item]) }
    }
    return buy
  }

  render () {
    let { cart, handleUpdateCart } = this.props

    let count = Object.values(cart).length > 0 ? Object.values(cart).reduce((a, b) => a + b) : 0
    return (
      <Container>
        <Top>
          <h4>SUMMARY</h4>
          <h5>{count}{count === 1 ? ' Item' : ' Items'}</h5>
        </Top>

        <Products>
          {this.renderCart().map((item, index) => <ProductSummaryCard key={item.product_id} product={item} count={cart[item.product_id]} handleUpdateCart={handleUpdateCart} />)}
        </Products>

        <Payment>
          <table style={{width: '100%'}}>
            <tbody>
              <tr>
                <td>Subtotal</td>
                <td style={{textAlign: 'right', paddingBottom: '8px'}}>
                  <Dollar>$</Dollar>
                  <Amount>{this.totalPayment().toFixed(2)}</Amount>
                </td>
              </tr>
              <tr>
                <td>Shipping</td>
                <td style={{textAlign: 'right', paddingBottom: '8px'}}>
                  <Dollar>$</Dollar>
                  <Amount>12.00</Amount>
                </td>
              </tr>
              <tr>
                <td>Total</td>
                <td style={{textAlign: 'right', paddingBottom: '8px'}}>
                  <Dollar>$</Dollar>
                  <Amount>{(this.totalPayment() + 12).toFixed(2)}</Amount>
                </td>
              </tr>
            </tbody>
          </table>
          <Checkout to='/checkout'>Checkout</Checkout>
        </Payment>

      </Container>
    )
  }
}

Summary.propTypes = {
  // products: PropTypes.arrayOf(PropTypes.object).isRequired,
  productsList: PropTypes.object.isRequired,
  cart: PropTypes.object.isRequired,
  handleUpdateCart: PropTypes.func.isRequired
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid lightGrey;
  padding: 12px;
  border-radius: 8px;
`

const Top = styled.div`
  height: 5%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`

const Products = styled.div`
  max-height: 70%;
  overflow: auto;
`

const Payment = styled.div`
  height: 25%;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
`

const Dollar = styled.span`
  font-size: 0.9em;
  color: grey;
`

const Amount = styled.span`
  font-size: 1.2em;
  font-weight: lighter;
`

const Checkout = styled(Link)`
  width: 100%;
  padding: 8px;
  background-color: gold;
  font-weight: bold;
  font-size: 1.3em;
  text-align: center;
  color: black;
  text-decoration: none;
  border-radius: 4px;
`

export default Summary
