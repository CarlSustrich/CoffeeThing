import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function itemManagement(props) {
  return (
    <>
      <h1>Heres a form i guess</h1>
      <Button onClick={props.onSwapRequest}>Back to Details</Button>
    </>
  )
}
