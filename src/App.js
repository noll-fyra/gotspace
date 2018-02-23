import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Catalogue from './containers/Catalogue'
import Cart from './containers/Cart'
import Checkout from './containers/Checkout'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      products: [],
      cart: []
    }
  }
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path='/' render={() => <Redirect to='/catalogue' />} />
          <Route path='/catalogue' render={(props) => <Catalogue products={this.state.products} cart={this.state.cart} {...props} />} />
          <Route path='/cart' render={(props) => <Cart products={this.state.products} cart={this.state.cart} {...props} />} />
          <Route path='/checkout' render={(props) => <Checkout products={this.state.products} cart={this.state.cart} {...props} />} />
        </Switch>
      </Router>
    )
  }
}

export default App
