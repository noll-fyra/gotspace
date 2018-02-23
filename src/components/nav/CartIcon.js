import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

class CartIcon extends Component {
  render () {
    let cartArray = Object.values(this.props.cart)
    return (
      <Container className='fa-layers fa-fw' to='/cart'>
        <Cart className='fas fa-shopping-bag' />
        <span class='fa-layers-text' data-fa-transform='shrink-10 down-2' style={{color: 'white'}}>{cartArray.length > 0 ? cartArray.reduce((a, b) => a + b) : 0}</span>
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
