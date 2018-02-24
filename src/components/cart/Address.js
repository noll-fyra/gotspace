import React, { Component } from 'react'
import PropTypes from 'prop-types'
import constants from '../../constants/constants'
import styled from 'styled-components'

class Address extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    let { selectAddress, addressSelected, isActive } = this.props

    return (
      <Container isActive={isActive}>
        <Top>
          <h4>1 - CHOOSE A DELIVERY ADDRESS</h4>
        </Top>
        <AddressCard>
          <MainAddress>
            <Saved>SAVED</Saved>
            <b>Smile Person</b><br />
          2 Stamford Road<br />
          Level 70 Equinox Complex, Downtown Core<br />
          Singapore 178882<br />
          </MainAddress>
          <SelectDiv>
            <Select onClick={selectAddress} selected={addressSelected}>{addressSelected ? 'Selected' : 'Select'}</Select>
          </SelectDiv>
        </AddressCard>
        <AddNew><i className='fas fa-plus-circle' style={{marginRight: constants.size.margin.tiny}}/>Add New Address</AddNew>
      </Container>
    )
  }
}

Address.propTypes = {
  addressSelected: PropTypes.bool.isRequired,
  selectAddress: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired
}

const Container = styled.div`
  width: 100%;
  height: ${props => props.isActive ? '70%' : '30%'};
  border: ${props => props.isActive ? '2px solid red' : '1px solid lightGrey'};
  padding: 12px;
  border-radius: 8px;
  margin-bottom: ${constants.size.margin.medium};
`

const Top = styled.div`
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: ${constants.size.margin.medium};
`

const AddNew = styled.div`
  margin-top: ${constants.size.margin.small};
  font-weight: 500;
  font-size: 0.8em;
  text-decoration: underline;
  cursor: pointer;
  color: ${constants.colors.omnivore};
  padding: 4px;
  border-radius: 4px;
`

const AddressCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid grey;
  border-radius: ${constants.size.borderRadius.small};
`
const MainAddress = styled.div`
  width: 85%;
  font-family: 'Muli';
  padding: ${constants.size.padding.medium};
`

const SelectDiv = styled.div`
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`

const Select = styled.div`
  background-color: ${props => props.selected ? 'white' : 'red'};
  font-size: 0.8em;
  font-weight: bold;
  cursor: pointer;
  color: ${props => props.selected ? 'grey' : 'white'};
  border: 1px solid ${props => props.selected ? 'grey' : 'red'};
  padding: 4px 24px;
  border-radius: 4px;
`

const Saved = styled.div`
  font-size: 0.8em;
  color: grey;
  margin-bottom: 8px;
`

export default Address
