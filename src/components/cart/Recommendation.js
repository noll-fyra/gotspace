import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ProductCard from '../product/ProductCard'
import constants from '../../constants/constants'
import styled from 'styled-components'

class Recommendation extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    let { productsList, cart, handleUpdateCart, loading, recommendations } = this.props

    return (
      <Container>
        <Top><h4>RECOMMENDATIONS</h4></Top>
        {recommendations.map(product =>
        <CardDiv key={product.product_id}>
          <ProductCard product={productsList[product.product_id]} count={cart[product.product_id]} handleUpdateCart={handleUpdateCart} />
        </CardDiv>
    )
    }
      </Container>
    )
  }
}

Recommendation.propTypes = {
  productsList: PropTypes.object.isRequired,
  cart: PropTypes.object.isRequired,
  handleUpdateCart: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  recommendations: PropTypes.arrayOf(PropTypes.object).isRequired
}

const Container = styled.div`
  width: 100%;
  height: 49%;
  border: 1px solid lightGrey;
  padding: 12px;
  border-radius: 8px;
`

const Top = styled.div`
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`

const CardDiv = styled.div`
  width: 32%;
  margin-bottom: ${constants.size.padding.medium};
`

export default Recommendation
