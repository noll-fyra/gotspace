import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import constants from '../../constants/constants'
import styled from 'styled-components'

class CartIcon extends Component {
  render () {
    return (
      <Container className='fa-layers fa-fw' to='/cart'>
        <i className='fas fa-shopping-cart' style={{color: 'white'}}/>
        <span class='fa-layers-counter' style={{backgroundColor: constants.colors.action, border: '1px solid black', fontSize: '56px', color: 'white'}}>{Object.values(this.props.cart).reduce((a, b) => a + b)}</span>
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
