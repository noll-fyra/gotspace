import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import TopNav from './components/nav/TopNav'
import Catalogue from './containers/Catalogue'
import Cart from './containers/Cart'
import Checkout from './containers/Checkout'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      products: [
        {id: 1, title: 'car', price: 3.2, description: 'This is a car', image: ''},
        {id: 2, title: 'phone', price: 4.7, description: 'This is a phone', image: ''},
        {id: 3, title: 'donkey', price: 1.1, description: 'This is a donkey', image: ''}
      ],
      cart: {1: 3, 2: 1, 3: 0}
    }
  }
  render () {
    return (
      <Router>
        <div>
          <Route path='/' render={(props) => <TopNav cart={this.state.cart} {...props} />} />
          <Switch>
            <Route exact path='/' render={() => <Redirect to='/catalogue' />} />
            <Route path='/catalogue' render={(props) => <Catalogue products={this.state.products} cart={this.state.cart} {...props} />} />
            <Route path='/cart' render={(props) => <Cart products={this.state.products} cart={this.state.cart} {...props} />} />
            <Route path='/checkout' render={(props) => <Checkout products={this.state.products} cart={this.state.cart} {...props} />} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
