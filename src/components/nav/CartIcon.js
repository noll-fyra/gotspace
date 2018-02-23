import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import constants from '../../constants/constants'
import styled from 'styled-components'

class CartIcon extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cart: []    
    }
  }

  componentWillMount() {
    this.setState({cart: Object.values(this.props.cart)})
  }

  componentWillReceiveProps(nextProps) {
    // this.setState({cart: cartArray}, function(){console.log(this.state.cart)})
  }
  // cartArray.length > 0 ? cartArray.reduce((a, b) => a + b) : 0

  render () {
    let cartArray = Object.values(this.props.cart)
    let show = cartArray.length > 0 ? cartArray.reduce((a, b) => a + b, 0) : 0
    return (
      <Container className='fa-layers fa-fw' to='/cart'>
        <Cart className='fas fa-shopping-bag' />
        <span className='fa-layers-text' data-fa-transform='shrink-10 down-2' style={{color: 'green', fontSize: '2em'}}>
          {show}</span>
      </Container>
    )
  }
}

CartIcon.PropTypes = {
  cart: PropTypes.object.isRequired
}

const Container = styled(Link)`
  font-size: 32px;
`

const Cart = styled.span`
  color: white;
`

export default CartIcon
