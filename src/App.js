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
        {id: 1, title: 'car', price: 3.2, description: 'This is a car', image: 'https://images.unsplash.com/photo-1469457245180-8b90ba0fdfa2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cf399f697c9dd104baf8e3c6786b7d4d&auto=format&fit=crop&w=1500&q=80'},
        {id: 2, title: 'phone', price: 4.7, description: 'This is a phone', image: 'https://images.unsplash.com/photo-1498661705887-3778d9ecb4ff?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c548b0c3aa4583ff28d1394304834733&auto=format&fit=crop&w=1500&q=80'},
        {id: 3, title: 'donkey', price: 1.1, description: 'This is a donkey', image: 'https://images.unsplash.com/photo-1492693429561-1c283eb1b2e8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a48ce90544794a96507c4797450584a7&auto=format&fit=crop&w=1000&q=80'}
      ],
      cart: {
        1: 3, 
        2: 1, 
        3: 0
      }
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
