import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import CloseButton from 'react-bootstrap/CloseButton'
import PropTypes from "prop-types";



export default function itemDetails(props) {
  const item = props.requestedDetails
  const update= props.onUpdateRequest
  const CloseStyle = {
    position: 'relative',
    left: '30%'
  }
  if(item != null) {
    return (
      <Container>
        <h1>Item Details:<CloseButton style={CloseStyle} onClick={props.onCloseDetailsRequest}></CloseButton></h1>
          {item.Name}<br />
          {item.Origin}<br />
          ${item.Price}<br />
          {item.Roast}<br />
          {item.Remaining}lbs
          <br /><br />
          <DropdownButton id="dropdown-basic-button" title="Manage Qty Remaining">
            <Dropdown.Item onClick={()=>update(1)}>Sold 1lb</Dropdown.Item>
            <Dropdown.Item onClick={()=>update(5)}>Sold 5lb</Dropdown.Item>
            <Dropdown.Item onClick={()=>update(130)}>Sold Out</Dropdown.Item>
          </DropdownButton>
          <br /><br />
        <Button onClick={props.onSwapRequest}>Add Inventory Item</Button>
      </Container>
    )
  } else {
    return (
    <>
      <h1>Select a Product to view its Details</h1>
      <Button onClick={props.onSwapRequest}>Add Inventory Item</Button>
    </>
    )
  }
  
}

itemDetails.propTypes = {
  onCloseDetailsRequest: PropTypes.func,
  onSwapRequest: PropTypes.func,
  onUpdateRequest: PropTypes.func,
  requestedDetails: PropTypes.object
};
