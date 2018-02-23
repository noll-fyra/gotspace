import React, { Component } from 'react'
import PropTypes from 'prop-types'
import constants from '../constants/constants'
import styled from 'styled-components'

class Catalogue extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    return (
      <Main>Catalogue Page</Main>
    )
  }
}

Catalogue.PropTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  cart: PropTypes.arrayOf(PropTypes.object).isRequired
}

const Main = styled.div`
  padding: ${constants.size.padding.large} ${constants.size.padding.media};
`

export default Catalogue
