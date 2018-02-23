import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ProductCard from '../components/product/ProductCard'
import constants from '../constants/constants'
import styled from 'styled-components'

class Catalogue extends Component {
  constructor (props) {
    super(props)
    this.state = {
      category: 'all'
    }
  }
  render () {
    const filtered = this.state.category === 'all' ? this.props.products : this.props.products.filter(product => {return product.category === this.state.category})
    return (
      <Main>
        <ProductNav>
          {constants.lists.categories.map(category => {
            return <Category onClick={() => this.setState({category: category})} active={this.state.category === category}>
              {category.toUpperCase()}
            </Category>
          })}
        </ProductNav>
        <Container>
          <Breado>
            <div style={{marginRight: constants.size.margin.small}}>All</div>
            {this.state.category !== 'all' &&
            <div style={{display: 'flex', flexFlow: 'row'}}>
              <div style={{marginRight: constants.size.margin.small}}>></div>
              <div>{this.state.category}</div>
            </div>
            }
          </Breado>
          <Cards>
            {filtered.map(product => {
              return <CardDiv key={product.id}>
                <ProductCard product={product} />
              </CardDiv>
            })}
          </Cards>
        </Container>
      </Main>
    )
  }
}

Catalogue.PropTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  cart: PropTypes.arrayOf(PropTypes.object).isRequired
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
  cursor: pointer;
  border-bottom: 2px solid ${props => props.active ? constants.colors.darkGrey : 'transparent'};
`

const Container = styled.div`
  padding: ${constants.size.padding.large} ${constants.size.padding.media};
`

const Breado = styled.div`
  display: flex;
  flex-flow: row;
  margin-bottom: ${constants.size.margin.large};
`

const Cards = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const CardDiv = styled.div`
  width: 32%;
`

export default Catalogue
