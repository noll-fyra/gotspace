import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

class CartIcon extends Component {
  render () {
    return (
      <Container className='fa-layers fa-fw' to='/cart'>
        <i className='fas fa-shopping-cart' />
        <span class='fa-layers-counter' style={{backgroundColor: 'white', border: '1px solid black', fontSize: '56px', color: 'black'}}>{Object.values(this.props.cart).reduce((a, b) => a + b)}</span>
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

export default CartIcon
