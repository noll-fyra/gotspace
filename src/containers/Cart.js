import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import Recommendation from '../components/cart/Recommendation'
import Summary from '../components/cart/Summary'
import Address from '../components/cart/Address'
import styled from 'styled-components'

class Cart extends Component {
  constructor (props) {
    super(props)
    this.state = {
      originCountry: 'SG',
      destinationCountry: 'SG',
      originPostalCode: '389779',
      destinationPostalCode: '277993',
      declaredCurrency: 'SGD',
      recommendations: [],
      loading: false
    }
    this.fetchRecommendations = this.fetchRecommendations.bind(this)
  }

  componentWillMount () {
    this.fetchRecommendations()
  }

  fetchRecommendations () {
    let _this = this
    function convertForAPI (arr) {
      return arr.map(item => {
        let temp = {}
        temp.product_id = item.product_id
        temp.title = item.title
        temp.description = item.description
        temp.actual_weight = parseFloat(item.weight)
        temp.height = item.height
        temp.width = item.width
        temp.length = item.breadth
        temp.category = item.category_name
        temp.declared_currency = _this.state.declaredCurrency
        temp.declared_customs_value = parseFloat(item.price)
        return temp
      })
    }

    let cartItems = []
    for (var i in this.props.cart) {
      for (var j = 0; j < this.props.cart[i]; j++) {
        cartItems.push(this.props.productsList[i])
      }
    }

    const api = 'https://got-space.herokuapp.com/api/recommend'
    let data = {}
    let order = {}
    order.origin_country = this.state.originCountry
    order.destination_country = this.state.destinationCountry
    order.origin_postal_code = this.state.originPostalCode
    order.destination_postal_code = this.state.destinationPostalCode
    order.items = convertForAPI(cartItems)
    data.order = order
    data.catalog = convertForAPI(this.props.products)

    this.setState({ loading: true })
    axios.post(api, JSON.stringify(data), {headers: {'content-type': 'application/json'}})
    .then(res => { console.log(res.data); this.setState({ recommendations: res.data, loading: false }) })
    .catch(err => {
      console.error(err)
      this.setState({ loading: false })
    })
  }

  render () {
    let { products, productsList, cart, handleUpdateCart } = this.props

    return (
      <Container>
        <LeftContainer>
          <Address />
          <Recommendation productsList={productsList} cart={cart} handleUpdateCart={handleUpdateCart} loading={this.state.loading} recommendations={this.state.recommendations} />
        </LeftContainer>

        <SummaryContainer>
          <Summary products={products} productsList={productsList} cart={cart} handleUpdateCart={handleUpdateCart} />
        </SummaryContainer>
      </Container>
    )
  }
}

Cart.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  productsList: PropTypes.object.isRequired,
  cart: PropTypes.object.isRequired,
  handleUpdateCart: PropTypes.func.isRequired
}

const Container = styled.main`
  display: flex;
  height: calc(100vh - 48px);
`

const LeftContainer = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  padding: 12px;
  padding-right: 0;
`

const SummaryContainer = styled.div`
  width: 40%;
  height: 100%;
  padding: 12px;
`

export default Cart
