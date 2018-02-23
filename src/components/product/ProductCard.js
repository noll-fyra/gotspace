import React, { Component } from 'react'
import constants from '../../constants/constants'
import PropTypes from 'prop-types'
import styled from 'styled-components'

class ProductCard extends Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.handleAdd = this.handleAdd.bind(this)
    this.handleSubtract = this.handleSubtract.bind(this)
    this.shorten = this.shorten.bind(this)
  }

  handleAdd () {
    this.props.handleUpdateCart(this.props.product.product_id, (this.props.count || 0) + 1)
  }

  handleSubtract () {
    this.props.handleUpdateCart(this.props.product.product_id, (this.props.count || 0) - 1)
  }

  shorten (title, type) {
    let text = title.split('')
    let length = title.length
    let limit1 = 35
    let limit2 = 31

    if (type === 'description') {
      limit1 = 80
      limit2 = 76
    }

    if (length < limit1) {
      return title
    } else {
      let blank = ''
      let total = 0
      while (total < limit2) {
        let first = text.shift()
        blank += first
        total += 1
      }
      let final = blank + '...'
      return final
    }
  }

  render () {
    let { product, count } = this.props
    return (
      <ProductCardDiv>
        <ImgDiv>
          <Image src={product.image ? product.image : 'https://i.imgur.com/e2Xhr9V.png'} />
        </ImgDiv>
        <Info>
          <div>
            <Title>{this.shorten(product.title.toUpperCase(), 'title')}</Title>
            <Price>${parseFloat(product.price)}</Price>
            <Description>{this.shorten(product.description, 'description')}</Description>
          </div>
          <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start', alignItems: 'baseline'}}>
            {count > 0
              ? <ButtonAdd>
                <Inner onClick={this.handleSubtract}><i className='fas fa-minus' /></Inner>
                <Inner>{count}</Inner>
                <Inner onClick={this.handleAdd}><i className='fas fa-plus' /></Inner>
              </ButtonAdd>
              : <Button onClick={this.handleAdd}>
                <i className='fas fa-shopping-cart' />&nbsp;&nbsp;Add to cart
          </Button>
          }
          </div>
        </Info>
      </ProductCardDiv>
    )
  }
}

ProductCard.PropTypes = {
  product: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired
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
  height: 150px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
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
  flex-wrap: wrap;

  &: hover {
    background-color: ${constants.colors.omnivore}
  }
`

const ButtonAdd = Button.extend`
  justify-content: space-between;
  flex-flow: row;
  align-items: baseline;

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
  font-size: 1.1em;
`

export default ProductCard
