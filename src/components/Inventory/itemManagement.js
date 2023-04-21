import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function itemManagement(props) {
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId='beanName'>
          <Form.Label>Bean Name</Form.Label>
          <Form.Control type="text" placeholder='ex Super Jitter Death Inducer' />
        </Form.Group>
        <Form.Group className="mb-3" controlId='beanOrigin'>
          <Form.Label>Origin</Form.Label>
          <Form.Control type="text" placeholder='ex Nicaragua' />
        </Form.Group>
        <Form.Group className="mb-3" controlId='beanPrice'>
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" placeholder='ex 225.75' />
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
      </Form>
      <br />
      <br />
      <Button onClick={props.onSwapRequest}>Back to Details</Button>
    </>
  )
}
