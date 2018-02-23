import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

class CartIcon extends Component {
  render () {
    return (
      <Container className='fa-layers fa-fw' to='/cart'>
        <Cart className='fas fa-shopping-bag' />
        <span class='fa-layers-text' data-fa-transform='shrink-10 down-2' style={{color: 'white'}}>{Object.values(this.props.cart).reduce((a, b) => a + b)}</span>
      </Container>
    )
  }
}

CartIcon.PropTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired
}

const Container = styled(Link)`
  font-size: 32px;
`

const Cart = styled.span`
  color: black;
`

export default CartIcon
