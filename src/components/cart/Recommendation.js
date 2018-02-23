import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

class Recommendation extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    // let { productsList, options, handleUpdateCart } = this.props

    return (
      <Container>
        <Top><h4>RECOMMENDATIONS</h4></Top>
      </Container>
    )
  }
}

Recommendation.propTypes = {
  productsList: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired,
  handleUpdateCart: PropTypes.func.isRequired
}

const Container = styled.div`
  width: 100%;
  height: 48%;
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

export default Recommendation
