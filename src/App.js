import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import TopNav from './components/nav/TopNav'
import Catalogue from './containers/Catalogue'
import Cart from './containers/Cart'
import Checkout from './containers/Checkout'
import products from './assets/updatedProducts.json'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      products: products,
      cart: {},
      options: []
    }
    this.handleUpdateCart = this.handleUpdateCart.bind(this)
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
            <Route path='/catalogue' render={(props) => <Catalogue products={this.state.products} cart={this.state.cart} handleUpdateCart={this.handleUpdateCart} {...props} />} />
            <Route path='/cart' render={(props) => <Cart products={this.state.products} cart={this.state.cart} handleUpdateCart={this.handleUpdateCart} {...props} />} />
            <Route path='/checkout' render={(props) => <Checkout products={this.state.products} cart={this.state.cart} handleUpdateCart={this.handleUpdateCart} {...props} />} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
