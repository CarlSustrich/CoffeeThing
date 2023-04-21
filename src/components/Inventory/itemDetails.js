import React from 'react';
import Button from 'react-bootstrap/Button';

export default function itemDetails(props) {
  const item = props.requestedDetails
  if(item != null) {
    return (
      <>
        <h1>Item Details:</h1>
        <ul>
          <li>{item.Name}</li>
          <li>{item.Origin}</li>
          <li>{item.Price}</li>
          <li>{item.Roast}</li>
          <li>{item.Remaining}lbs</li>
        </ul>
        <Button onClick={props.onSwapRequest}>Add Inventory Item</Button>
      </>
    )
  } else {
    return (
    <>
      <h1>Heres some details I guess</h1>
      <Button onClick={props.onSwapRequest}>Add Inventory Item</Button>
    </>
    )
  }
  
}
