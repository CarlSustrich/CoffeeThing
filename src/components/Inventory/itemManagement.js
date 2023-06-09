import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {v4} from 'uuid';
import PropTypes from "prop-types";

export default function itemManagement(props) {

  function handleNewInventoryFormSubmission(formReturnDataEvent) {
    formReturnDataEvent.preventDefault();
    const data = formReturnDataEvent.target
    props.onAddNewInventory({
      Name: data.beanName.value,
      Origin: data.beanOrigin.value,
      Price: +data.beanPrice.value,
      Roast: data.beanRoast.value,
      Remaining: 130,
      id: v4()
    })
  }
 
  return (
    <>
      <form onSubmit={handleNewInventoryFormSubmission}>
        <Form.Group className="mb-3" controlId='beanName' role='form'>
          <Form.Label>Bean Name</Form.Label>
          <Form.Control type="text" placeholder='ex Super Jitter Death Inducer' />
        </Form.Group>
        <Form.Group className="mb-3" controlId='beanOrigin'>
          <Form.Label>Origin</Form.Label>
          <Form.Control type="text" placeholder='ex Nicaragua' />
        </Form.Group>
        <Form.Group className="mb-3" controlId='beanPrice'>
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" placeholder='ex 225.75' step='.01'/>
          <Form.Text className="text-muted">
            Please enter price per bag
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId='beanRoast'>
          <Form.Label>Roast</Form.Label>
          <Form.Control type="text" placeholder='ex Blonde' />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <br />
        <br />
      </form>
      <Button onClick={props.onSwapRequest}>Back to Details</Button>
    </>
  )
}


itemManagement.propTypes = {
  onSwapRequest: PropTypes.func,
  onAddNewInventory: PropTypes.func,
};
