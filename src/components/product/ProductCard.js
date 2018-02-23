import React, { Component } from 'react'
import constants from '../../constants/constants'
import styled from 'styled-components'

class ProductCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ProductCardDiv>
        <ImgDiv>
          <img src={this.props.product.image} />
        </ImgDiv>
        <Info>
          <Title>{this.props.product.title}</Title>
          <Description>{this.props.product.description}</Description>
        </Info>
      </ProductCardDiv>
    );
  }
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

const Info = styled.div`
  display: flex;
  flex-flow: column;
`

const Title = styled.div`
  font-size: 1.2em;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: ${constants.size.margin.small};
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const Description = styled.div`
  font-size: 0.9em;
  color: ${constants.colors.grey};
`

export default ProductCard;
