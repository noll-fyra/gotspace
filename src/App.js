import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Catalogue from './containers/Catalogue'
import Cart from './containers/Cart'
import Checkout from './containers/Checkout'

class App extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path='/' render={() => <Redirect to='/catalogue' />} />
          <Route path='/catalogue' render={(props) => <Catalogue {...props} />} />
          <Route path='/cart' render={(props) => <Cart {...props} />} />
          <Route path='/checkout' render={(props) => <Checkout {...props} />} />
        </Switch>
      </Router>
    )
  }
}

export default App
