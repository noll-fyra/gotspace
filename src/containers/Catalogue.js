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
    const filtered = this.state.category === 'all' ? this.props.products : this.props.products.filter(product => { return product.category_name === this.state.category })
    return (
      <Main>
        <ProductNav>
          {constants.lists.categories.map(category => {
            return <Category key={category} onClick={() => this.setState({category: category})} active={this.state.category === category}>
              {category.toUpperCase()}
            </Category>
          })}
        </ProductNav>
        <Container>
          <Breado>
            <div style={{marginRight: constants.size.margin.small, cursor: 'pointer'}} onClick={() => this.setState({category: 'all'})}>All</div>
            {this.state.category !== 'all' &&
            <div style={{display: 'flex', flexFlow: 'row'}}>
              <div style={{marginRight: constants.size.margin.small}}>></div>
              <div onClick={() => this.setState({category: this.state.category})} style={{cursor: 'pointer'}}>{this.state.category}</div>
            </div>
            }
          </Breado>

          {filtered.length > 0
            ? <Cards>
              {filtered.map(product => {
                return <CardDiv key={product.product_id}>
                  <ProductCard product={product} count={this.props.cart[product.product_id]} handleUpdateCart={this.props.handleUpdateCart} />
                </CardDiv>
              })}
              {(filtered.length - 2) % 3 === 0 && <CardDiv />}
            </Cards>
            : <div style={{textAlign: 'center'}}>Oops! We did not find any products.</div>
          }
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
  height: ${constants.size.height.small};
  width: 100vw;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  padding: ${constants.size.padding.small} ${constants.size.padding.media};
  background-color: #B9F0FFFF;
  top: 48px;
  position: -webkit-sticky;
  position: sticky;
  z-index: 20;
`

const Category = styled.div`
  width: 25%;
  height: ${constants.size.height.small};
  font-size: 0.8em;
  font-weight: 600;
  letter-spacing: 1px;
  display: flex;
  justify-content: center;
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
  margin-bottom: ${constants.size.padding.medium};
`

export default Catalogue
