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
    let { productsList, cart, handleUpdateCart, loading, recommendations, isActive, refetch } = this.props

    return (
      <Container isActive={isActive}>
        <Top>
          <h4>3 - (OPTIONAL) RECOMMENDATIONS FOR YOU (FREE SHIPPING OF 1 ITEM WITH "GOLDEN" OPTION)</h4>
          <div>{recommendations.length} Items</div>
        </Top>
        {isActive &&
        <RecDiv>
          {loading
            ? <div>Fetching recommendations...</div>
            : recommendations.slice(0, 8).map(product =>
              <CardDiv key={product.product_id}>
                <ProductCard product={productsList[product.product_id]} count={cart[product.product_id] || 0} handleUpdateCart={handleUpdateCart} refetch={refetch} />
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
  isActive: PropTypes.bool.isRequired,
  refetch: PropTypes.func.isRequired
}

const Container = styled.div`
  width: 100%;
  height: ${props => props.isActive ? '80%' : '9%'};
  border: ${props => props.isActive ? '2px solid red' : '1px solid lightGrey'};
  padding: 12px;
  border-radius: 8px;
  overflow: hidden;
`

const Top = styled.div`
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`

const RecDiv = styled.div`
  width: 100%;
  height: 80%;
  max-height: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  overflow: auto;
`

const CardDiv = styled.div`
  width: 45%;
  margin-bottom: 12px;
`

export default Recommendation
