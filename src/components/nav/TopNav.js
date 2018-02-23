import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import CartIcon from './CartIcon'
import constants from '../../constants/constants'
import styled from 'styled-components'

class TopNav extends Component {
  render () {
    return (
      <Container>
        <Third style={{justifyContent: 'flex-start'}}>
          <Logo>Got Space?</Logo>
        </Third>
        <Third>
          <NavLink to='/catalogue'>Catalogue</NavLink>

          <NavLink to='/checkout'>Checkout</NavLink>
        </Third>
        <Third style={{justifyContent: 'flex-end'}}>
          <CartIcon cart={this.props.cart} />
          <User className='far fa-user-circle' />
        </Third>
      </Container>
    )
  }
}

TopNav.PropTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired
}

const Container = styled.nav`
  display: flex;
  height: 48px;
  box-shadow: 0px 1px 1px 2px #eeeeee;
  background-image: url('https://i.imgur.com/aASzm5m.jpg');
  top: 0;
  position: -webkit-sticky;
  position: sticky;
  z-index: 20;
`

const Third = styled.div`
  width: 33.3333%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
`

const Logo = styled.h1`
  font-family: 'Bungee';
  font-size: 2em;
  color: ${constants.colors.white};
  letter-spacing: 1px;
`

const NavLink = styled(Link)`
  padding: 24px;
  color: ${constants.colors.white};
  text-decoration: none;
  font-family: 'Muli';
`

const User = styled.span`
  font-size: 32px;
  margin-left: 12px;
  color: ${constants.colors.white};
`

export default TopNav
