import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ProductCard from '../product/ProductCard'
import styled from 'styled-components'

class Recommendation extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    let { productsList, cart, handleUpdateCart, recommendations } = this.props

    return (
      <Container>
        <Top>
          <h4>RECOMMENDATIONS</h4>
          <div>{recommendations.length} Items</div>
        </Top>
        <RecDiv>
          {recommendations.slice(0, 8).map(product =>
            <CardDiv key={product.product_id}>
              <ProductCard product={productsList[product.product_id]} count={cart[product.product_id] || 0} handleUpdateCart={handleUpdateCart} smaller />
            </CardDiv>
    )
    }
        </RecDiv>
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
  height: 69%;
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

const RecDiv = styled.div`
  width: 100%;
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
`

const CardDiv = styled.div`
  width: 40%;
  min-width: 40%;
  margin-right: 8px;
`

export default Recommendation
