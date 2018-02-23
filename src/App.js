import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import TopNav from './components/nav/TopNav'
import Catalogue from './containers/Catalogue'
import Cart from './containers/Cart'
import Checkout from './containers/Checkout'
// import constants from './constants/constants'
import products from './assets/products.json'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      products: products,
      productsList: {},
      cart: {},
      options: []
    }
    this.convertProductsToObject = this.convertProductsToObject.bind(this)
    this.loadRandomCart = this.loadRandomCart.bind(this)
    this.handleUpdateCart = this.handleUpdateCart.bind(this)
  }

  componentWillMount () {
    this.convertProductsToObject()
    this.loadRandomCart()
  }

  convertProductsToObject () {
    let obj = {}
    products.forEach(item => { obj[item.product_id] = item })
    this.setState({ productsList: obj })
  }

  loadRandomCart () {
    let temp = {}
    let length = products.length
    for (var i = 0; i < 10; i++) {
      let random = Math.floor(Math.random() * length)
      let product = products[random]
      temp[product.product_id] = Math.floor(Math.random() * 5)
    }
    this.setState({ cart: temp })
  }

  handleUpdateCart (productID, amount) {
    let cart = Object.assign({}, this.state.cart)
    cart[productID] = amount
    this.setState({ cart: cart })
  }

  render () {
    return (
      <Router>
        <div>
          <Route path='/' render={(props) => <TopNav cart={this.state.cart} {...props} />} />
          <Switch>
            <Route exact path='/' render={() => <Redirect to='/catalogue' />} />
            <Route path='/catalogue' render={(props) => <Catalogue products={this.state.products} productsList={this.state.productsList} cart={this.state.cart} handleUpdateCart={this.handleUpdateCart} {...props} />} />
            <Route path='/cart' render={(props) => <Cart products={this.state.products} productsList={this.state.productsList} cart={this.state.cart} handleUpdateCart={this.handleUpdateCart} options={this.state.options} {...props} />} />
            <Route path='/checkout' render={(props) => <Checkout products={this.state.products} productsList={this.state.productsList} cart={this.state.cart} handleUpdateCart={this.handleUpdateCart} options={this.state.options} {...props} />} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
