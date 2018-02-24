import React, { Component } from 'react'
import constants from '../../constants/constants'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import picture from '../../assets/default.jpg'
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
    let { product, smaller } = this.props
    return (
      <ProductCardDiv>
        <ImgDiv smaller={smaller}>
          <Image src={picture} />
        </ImgDiv>
        <Info>
          <div>
            <Title>{this.shorten(product.title, 'title')}</Title>
            <PriceDiv>
              <Price style={{color: 'red'}}>${parseFloat(product.price)}</Price>
              <Price style={{textDecoration: 'line-through'}}>${(parseFloat(product.price) * 1.25).toFixed(2)}</Price>
            </PriceDiv>
            <Description>{this.shorten(product.description, 'description')}</Description>
          </div>
          <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start', alignItems: 'baseline'}}>
            <ButtonLink to='/cart' onClick={this.handleAdd}>
              <i className='fas fa-shopping-cart' />&nbsp;&nbsp;BUY
        </ButtonLink>
            {/* {count > 0
              ? <ButtonAdd>
                <Inner onClick={this.handleSubtract}><i className='fas fa-minus' /></Inner>
                <Inner>{count}</Inner>
                <Inner onClick={this.handleAdd}><i className='fas fa-plus' /></Inner>
              </ButtonAdd>
              : <Button onClick={this.handleAdd}>
                <i className='fas fa-shopping-cart' />&nbsp;&nbsp;Add to cart
          </Button>
          } */}
          </div>
        </Info>
      </ProductCardDiv>
    )
  }
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
  smaller: PropTypes.bool
}

const ProductCardDiv = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
`

const ImgDiv = styled.div`
  width: 100%;
  height: ${props => props.smaller ? '200px' : '300px'};
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Info = styled.div`
  height: 160px;
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

const PriceDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 12px 0;
`

const Price = styled.span`
  font-size: 1.1em;
  font-weight: bold;
  font-family: 'Muli';
  margin-left: 8px;
`

const Description = styled.div`
  font-size: 0.9em;
  font-family: 'Muli';
  color: ${constants.colors.grey};
  margin-bottom: ${constants.size.margin.tiny};
`

// const Button = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: ${constants.size.padding.small};
//   cursor: pointer;
//   border-radius: ${constants.size.borderRadius.small};
//   background-color: ${constants.colors.brand};
//   color: ${constants.colors.white};
//   font-family: 'Muli';
//   font-size: 0.9em;
//   flex-wrap: wrap;
//
//   &: hover {
//     background-color: ${constants.colors.omnivore}
//   }
// `

// const ButtonAdd = Button.extend`
//   justify-content: space-between;
//   flex-flow: row;
//   align-items: baseline;
//
//   &: hover {
//     background-color: ${constants.colors.brand}
//   }
// `
//
// const Inner = styled.div`
//   width: 33.333%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   color: ${constants.colors.white};
//   font-size: 1.1em;
// `

const ButtonLink = styled(Link)`
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
  font-weight: 500;
  flex-wrap: wrap;
  text-decoration: none;

  &: hover {
    background-color: ${constants.colors.omnivore};
  }
`

export default ProductCard
