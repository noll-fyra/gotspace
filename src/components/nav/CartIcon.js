import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import constants from '../../constants/constants'
import styled from 'styled-components'

class CartIcon extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    let cartArray = Object.values(this.props.cart)
    let show = cartArray.length > 0 ? cartArray.reduce((a, b) => a + b, 0) : 0
    return (
      <Container to='/cart'>
        <div style={{ display: 'flex', flexFlow: 'row', alignItems: 'center', backgroundColor: 'white', borderRadius: constants.size.borderRadius.small, width: constants.size.width.smallMedium, paddingTop: constants.size.padding.small, paddingBottom: constants.size.padding.small }}>
          <div style={{width: '55%', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRight: `2px solid ${constants.colors.darkGrey}`}}><Cart className='fas fa-shopping-bag' /></div>
          <div style={{width: '45%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '0.8em', color: constants.colors.black}}>{show}</div>
        </div>
      </Container>
    )
  }
}

CartIcon.propTypes = {
  cart: PropTypes.object.isRequired
}

const Container = styled(Link)`
  font-size: 20px;
  position: relative;
  text-decoration: none;
`

const Cart = styled.i`
  color: black;
  position: 'absolute';
`

export default CartIcon
