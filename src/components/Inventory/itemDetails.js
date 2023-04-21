import React from 'react';
import Button from 'react-bootstrap/Button';

export default function itemDetails(props) {
  return (
    <>
      <h1>Heres some details I guess</h1>
      <Button onClick={props.onSwapRequest}>Add Inventory Item</Button>
    </>
  )
}
