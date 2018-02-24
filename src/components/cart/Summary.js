import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import ProductSummaryCard from '../product/ProductSummaryCard'
import CourierCard from '../courier/CourierCard'
import constants from '../../constants/constants'
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
    let { cart, handleUpdateCart, courier, isActive, chosenAddress } = this.props

    let count = Object.values(cart).length > 0 ? Object.values(cart).reduce((a, b) => a + b) : 0
    return (
      <Container isActive={isActive}>
        <Top>
          <h4>SUMMARY</h4>
          <h5>{count}{count === 1 ? ' Item' : ' Items'}</h5>
        </Top>

        <Products>
          {this.renderCart().map((item, index) => <ProductSummaryCard key={item.product_id} product={item} count={cart[item.product_id]} handleUpdateCart={handleUpdateCart} />)}
        </Products>

        {chosenAddress > 0 &&
        <div style={{width: '100%', marginTop: constants.size.margin.medium}}>
          <div style={{marginBottom: constants.size.margin.tiny}}>Selected address:</div>
          {chosenAddress === 1 ?
            <AddressCard>
              <MainAddress>
                <b>Smile Person</b><br />
              2 Stamford Road<br />
              Level 70 Equinox Complex, Downtown Core<br />
              Singapore 178882<br />
              </MainAddress>
            </AddressCard> :
            <AddressCard>
              <MainAddress>
                <b>Mumen Dickie</b><br />
              3 Orchard Road<br />
              #10-01 Mandarin Gallery, Somerset<br />
              Singapore 375894<br />
              </MainAddress>
             </AddressCard>
          }
        </div>
        }

        <Payment>
          <table style={{width: '100%'}}>
            <tbody>
              <tr>
                <td>Subtotal</td>
                <td style={{textAlign: 'right', padding: '8px 0'}}>
                  <Dollar>$</Dollar>
                  <Amount>{this.totalPayment().toFixed(2)}</Amount>
                </td>
              </tr>
              <tr>
                <td>Shipping</td>
                <td style={{textAlign: 'right', padding: '8px 0'}}>
                  <Dollar>{courier ? '$' : ''}</Dollar>
                  <Amount>{courier ? courier.total_charge : 'Choose a shipping option'}</Amount>
                </td>
              </tr>
              {courier &&
              <tr>
                <td colSpan={2}>
                  <CourierCard courier={courier} chosen />
                </td>
              </tr>
              }
              <tr>
                <td>Total</td>
                {courier
                ? <td style={{textAlign: 'right', padding: '8px 0'}}>
                  <Dollar>$</Dollar>
                  <Amount>{(this.totalPayment() + courier.total_charge).toFixed(2)}</Amount>
                </td>
                : <td />
              }
              </tr>
            </tbody>
          </table>
          <Link to='/checkout' style={{textDecoration: 'none'}}>
            <Checkout active={courier}>Checkout</Checkout>
          </Link>
        </Payment>
      </Container>
    )
  }
}

Summary.propTypes = {
  productsList: PropTypes.object.isRequired,
  cart: PropTypes.object.isRequired,
  handleUpdateCart: PropTypes.func.isRequired,
  courier: PropTypes.object,
  isActive: PropTypes.bool.isRequired
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  border: ${props => props.isActive ? '2px solid red' : '1px solid lightGrey'};
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
`

const Dollar = styled.span`
  font-size: 0.9em;
  color: grey;
`

const Amount = styled.span`
  font-size: 1.2em;
  font-weight: lighter;
`

const Checkout = styled.div`
  width: 100%;
  padding: 8px;
  background-color: ${props => props.active ? 'red' : 'lightGrey'};
  font-weight: bold;
  font-size: 1.3em;
  text-align: center;
  color: white;
  text-decoration: none;
  border-radius: 4px;
`

const AddressCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid grey;
  border-radius: ${constants.size.borderRadius.small};
  margin-bottom: ${constants.size.margin.medium};
`
const MainAddress = styled.div`
  width: 85%;
  font-family: 'Muli';
  padding: ${constants.size.padding.medium};
`

const SelectDiv = styled.div`
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`

export default Summary
