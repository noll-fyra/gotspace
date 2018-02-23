import React, { Component } from 'react'
import constants from '../../constants/constants'
import PropTypes from 'prop-types'
import { capitalizeString } from '../../format/utilities'
import styled from 'styled-components'

class ProductCard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      added: false,
      count: 1
    }
    this.handleAdd = this.handleAdd.bind(this)
    this.handleSubtract = this.handleSubtract.bind(this)
  }

  handleAdd() {
    if (!this.state.added) {
      this.setState({added: true})
      this.props.handleUpdateCart(this.props.product.id, 1)
    } else {
      let currentCount = this.state.count
      currentCount += 1
      this.setState({count: currentCount})
      this.props.handleUpdateCart(this.props.product.id, currentCount)
    }
  }

  handleSubtract() {
    if (this.state.count === 1) {
      this.setState({added: false})
      this.props.handleUpdateCart(this.props.product.id, 0)
    } else {
      let currentCount = this.state.count
      currentCount -= 1
      this.setState({count: currentCount})
      this.props.handleUpdateCart(this.props.product.id, currentCount)
    }
  }

  render () {
    return (
      <ProductCardDiv>
        <ImgDiv>
          <Image src={this.props.product.image ? this.props.procuct.image : 'https://i.imgur.com/e2Xhr9V.png'} />
        </ImgDiv>
        <Info>
          <Title>{this.props.product.title.toUpperCase()}</Title>
          {/*<Price>${this.props.product.price.toFixed(2)}</Price>*/}
          <Description>{this.props.product.description}</Description>
          {this.state.added ?
            <ButtonAdd>
              <Inner onClick={() => this.handleSubtract()}><i className='fas fa-minus' /></Inner>
              <Inner>{this.state.count}</Inner>
              <Inner onClick={() => this.handleAdd()}><i className='fas fa-plus' /></Inner>
            </ButtonAdd> :
          <Button onClick={() => this.setState({added: true})}>
            <i className='fas fa-shopping-cart' />&nbsp;&nbsp;Add to cart
          </Button> 
          }
        </Info>
      </ProductCardDiv>
    )
  }
}

ProductCard.PropTypes = {
  product: PropTypes.object.isRequired
}

const ProductCardDiv = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
`

const ImgDiv = styled.div`
  width: 100%;
  height: 300px;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Info = styled.div`
  display: flex;
  flex-flow: column;
`

const Title = styled.div`
  font-size: 1.1em;
  font-weight: 600;
  letter-spacing: 1px;
  margin: ${constants.size.margin.tiny} 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: 'Oswald';
`

const Price = styled.div`
  font-size: 0.9em;
  font-family: 'Muli';
`

const Description = styled.div`
  font-size: 0.9em;
  font-family: 'Muli';
  color: ${constants.colors.grey};
  margin-bottom: ${constants.size.margin.tiny};
`

const Button = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${constants.size.padding.small};
  cursor: pointer;
  border-radius: ${constants.size.borderRadius.small};
  background-color: ${constants.colors.brand};
  color: ${constants.colors.white};
  font-family: 'Muli';
  font-size: 0.9em;

  &: hover {
    background-color: ${constants.colors.omnivore}
  }
`

const ButtonAdd = Button.extend`
  justify-content: space-between;
  flex-flow: row;

  &: hover {
    background-color: ${constants.colors.brand}
  }
`

const Inner = styled.div`
  width: 33.333%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${constants.colors.white};
  font-size: 1.2em;
`

export default ProductCard
