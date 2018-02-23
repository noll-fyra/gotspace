import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import constants from '../../constants/constants'
import styled from 'styled-components'

class Address extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    // let { productsList, options, handleUpdateCart } = this.props

    return (
      <Container>
        <Top><h4>SHIPPING ADDRESS</h4></Top>
        <MainAddress>
          <b>Smile Person</b><br />
          2 Stamford Road<br />
          Level 70 Equinox Complex, Downtown Core<br />
          Singapore 178882<br />
        </MainAddress>
      </Container>
    )
  }
}

Address.propTypes = {}

const Container = styled.div`
  width: 100%;
  height: 29%;
  border: 1px solid lightGrey;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: ${constants.size.margin.medium};
`

const Top = styled.div`
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: ${constants.size.margin.medium};
`

const MainAddress = styled.div`
  border: 1px solid black;
  border-radius: ${constants.size.borderRadius.small};
  font-family: 'Muli';
  padding: ${constants.size.padding.medium};
  margin-top: ${constants.size.margin.small};
`

export default Address
