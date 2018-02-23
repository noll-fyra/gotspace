import React, { Component } from 'react'
import constants from '../../constants/constants'
import PropTypes from 'prop-types'
import { capitalizeString } from '../../format/utilities'
import styled from 'styled-components'

class ProductCard extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <ProductCardDiv>
        <ImgDiv>
          <Image src={this.props.product.image} />
        </ImgDiv>
        <Info>
          <Title>{this.props.product.title.toUpperCase()}</Title>
          <Description>{this.props.product.description}</Description>
          <Button><i className='fas fa-shopping-cart' />&nbsp;Add to cart</Button>
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
  padding: ${constants.size.padding.small};
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
`

export default ProductCard
