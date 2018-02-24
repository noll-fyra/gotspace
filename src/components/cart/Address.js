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
    return (
      <Container>
        <Top>
          <h4>SHIPPING ADDRESS</h4>
          <AddNew>Add New Address</AddNew>
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
            <Select onClick={this.props.selectAddress} selected={this.props.addressSelected}>{this.props.addressSelected ? 'Selected' : 'Select'}</Select>
          </SelectDiv>
        </AddressCard>
      </Container>
    )
  }
}

Address.propTypes = {
  addressSelected: PropTypes.bool.isRequired,
  selectAddress: PropTypes.func.isRequired
}

const Container = styled.div`
  width: 100%;
  height: 29%;
  border: 1px solid lightGrey;
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
  font-size: 0.8em;
  font-weight: bold;
  cursor: pointer;
  color: blue;
  border: 1px solid blue;
  padding: 4px;
  border-radius: 4px;
`

const AddressCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  border-radius: ${constants.size.borderRadius.small};
`
const MainAddress = styled.div`
  width: 70%;
  font-family: 'Muli';
  padding: ${constants.size.padding.medium};
`

const SelectDiv = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Select = styled.div`
  background-color: ${props => props.selected ? 'grey' : 'blue'};
  color: white;
  padding: 8px 24px;
  border-radius: 4px;
  cursor: pointer;
`

const Saved = styled.div`
  font-size: 0.8em;
  color: grey;
  margin-bottom: 8px;
`

export default Address
