import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

class CourierCard extends Component {
  componentDidMount() {
    console.log(this.props.courier)
  }
  render () {
    let { courier, selectCourier, index, chosen } = this.props
    return (
      <Container chosen={chosen}>
        <Name>{courier.courier_name}</Name>
        <Time>{`${courier.min_delivery_time} days to ${courier.max_delivery_time} days`}</Time>
        {!chosen &&
          <ChooseMe onClick={() => selectCourier(index)}>${courier.total_charge.toFixed(2)}</ChooseMe>
          }
      </Container>
    )
  }
}

CourierCard.propTypes = {
  courier: PropTypes.object.isRequired,
  selectCourier: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  chosen: PropTypes.bool
}

const Container = styled.div`
  width: ${props => props.chosen ? '100%' : '49%'};
  height: 4%;
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 12px;
  border: 1px solid lightGrey;
  margin-bottom: 12px;
  border-radius: 4px;
`

const Name = styled.h3`
  text-align: center;
  margin-bottom: 8px
`

const Time = styled.span`
  margin-bottom: 8px
`

const ChooseMe = styled.div`
  cursor: pointer;
  background-color: red;
  border-radius: 4px;
  padding: 12px;
  color: white;
`

export default CourierCard
