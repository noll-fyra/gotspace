import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Products from '../components/cart/Products'
import Summary from '../components/cart/Summary'
import constants from '../constants/constants'
import styled from 'styled-components'

class Cart extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    let { products, productsList, cart, handleUpdateCart, options } = this.props

    return (
      <Container>
        <LeftContainer>
          <AddressDiv>
            <h2>Shipping Address</h2>
            <Address>
              <b>Smile Person</b><br />
              2 Stamford Road<br />
              Level 70 Equinox Complex, Downtown Core<br />
              Singapore 178882<br />
            </Address>
          </AddressDiv>
          <Products products={products} cart={cart} />
        </LeftContainer>

        <SummaryContainer>
          <Summary products={products} productsList={productsList} cart={cart} handleUpdateCart={handleUpdateCart} options={options} />
        </SummaryContainer>
      </Container>
    )
  }
}

Cart.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  productsList: PropTypes.object.isRequired,
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleUpdateCart: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired
}

const Container = styled.main`
  display: flex;
  height: calc(100vh - 48px);
`

const LeftContainer = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-flow: column;
`

const AddressDiv = styled.div`
  width: 100%;
  padding: ${constants.size.padding.large};
`

const Address = styled.div`
  border: 1px solid black;
  border-radius: ${constants.size.borderRadius.small};
  font-family: 'Muli';
  padding: ${constants.size.padding.medium};
  margin-top: ${constants.size.margin.small};
`

const SummaryContainer = styled.div`
  width: 40%;
  height: 100%;
  padding: 12px;
`

export default Cart
