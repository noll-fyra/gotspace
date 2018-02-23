import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Products from '../components/cart/Products'
import Summary from '../components/cart/Summary'
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
`

const SummaryContainer = styled.div`
  width: 40%;
  height: 100%;
  padding: 12px;
`

export default Cart
