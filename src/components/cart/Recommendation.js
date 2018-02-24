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
    let { productsList, cart, handleUpdateCart, loading, recommendations, isActive } = this.props

    return (
      <Container isActive={isActive}>
        <Top>
          <h4>3 - (OPTIONAL) RECOMMENDATIONS FOR YOU</h4>
          <div>{recommendations.length} Items</div>
        </Top>
        {isActive &&
        <RecDiv>
          {loading
            ? <div>Fetching recommendations...</div>
            : recommendations.slice(0, 8).map(product =>
              <CardDiv key={product.product_id}>
                <ProductCard product={productsList[product.product_id]} count={cart[product.product_id] || 0} handleUpdateCart={handleUpdateCart} smaller />
              </CardDiv>
    )
    }
        </RecDiv>
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
  recommendations: PropTypes.arrayOf(PropTypes.object).isRequired,
  isActive: PropTypes.bool.isRequired
}

const Container = styled.div`
  width: 100%;
  height: ${props => props.isActive ? '80%' : '9%'};
  border: ${props => props.isActive ? '2px solid red' : '1px solid lightGrey'};
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
