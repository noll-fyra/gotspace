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
      <Main>
        <ProductNav>
          {constants.lists.categories.map(category => {
            return <Category>{category.toUpperCase()}</Category>
          })}
        </ProductNav>
        <Container>
          <Breado>
            <div>All</div>
          </Breado>
        </Container>
      </Main>
    )
  }
}

Catalogue.PropTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleUpdateCart: PropTypes.func.isRequired
}

const Main = styled.div`
  display: flex;
  flex-flow: column;
`

const ProductNav = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  padding: ${constants.size.padding.small};
  background-color: #B9F0FFFF;
  height: ${constants.size.height.small};
  width: 100vw;
`

const Category = styled.div`
  margin-right: 32px;
  font-size: 0.8em;
  font-weight: 600;
  letter-spacing: 1px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const Container = styled.div`
  padding: 0 ${constants.size.padding.media};
`

const Breado = styled.div`
  display: flex;
  flex-flow: row;
`

export default Catalogue
