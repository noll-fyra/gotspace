import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CourierCard from '../courier/CourierCard'
import constants from '../../constants/constants'
import styled from 'styled-components'

class Rates extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    let { rates, ratesLoading, selectCourier, addressSelected, isActive } = this.props

    return (
      <Container isActive={isActive}>
        <Top>
          <h4>2 - CHOOSE A SHIPPING OPTION</h4>
          {addressSelected && !isActive && <i className='fas fa-check-circle' style={{color: constants.colors.vegan, marginTop: constants.size.margin.small}} />}
        </Top>
        <div style={{textAlign: 'center', fontWeight: 'bold'}}>Pick the "golden" option to get free shipping on recommended items</div>
        {isActive &&
        <RatesDiv>
          {ratesLoading
            ? <div>{addressSelected ? 'Fetching EasyShip options...' : 'Choose a delivery address'}</div>
            : rates.map((courier, index) =>
              <CourierCard key={index} courier={courier} selectCourier={selectCourier} index={index} isBest={courier.total_charge === Math.min(...rates.map(courier => courier.total_charge))} />
    )
    }
        </RatesDiv>
        }
      </Container>
    )
  }
}

Rates.propTypes = {
  rates: PropTypes.arrayOf(PropTypes.object).isRequired,
  ratesLoading: PropTypes.bool.isRequired,
  selectCourier: PropTypes.func.isRequired,
  addressSelected: PropTypes.bool.isRequired,
  isActive: PropTypes.bool.isRequired
}

const Container = styled.div`
  width: 100%;
  height: ${props => props.isActive ? '80%' : '9%'};
  border: ${props => props.isActive ? '2px solid red' : '1px solid lightGrey'};
  padding: 12px;
  border-radius: 8px;
`

const Top = styled.div`
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`

const RatesDiv = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
`

export default Rates
