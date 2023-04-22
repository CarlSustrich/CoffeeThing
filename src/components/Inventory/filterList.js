import React from 'react';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
// import Filter from './filter';
import { ListGroupItem } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

export default function filterList(props) {
  return (


    <Accordion flush>
      <Accordion.Item eventKey='0'>
        <Accordion.Header>Filters</Accordion.Header>
        <Accordion.Body>
          <form onChange={props.onFilterRequest}>
            <Form.Group className="mb-3" controlId='ItemName' role='form'>
              <Form.Label>Bean Name</Form.Label>
              <Form.Control type="text" placeholder='ex Super Jitter Death Inducer' />
            </Form.Group>
            <Form.Group className="mb-3" controlId='beanOrigin'>
              <Form.Label>Origin</Form.Label>
              <Form.Control type="text"  placeholder="Feature Coming Soon" disabled />
              <Form.Text className="text-muted">
               
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId='beanRoast'>
              <Form.Label>Roast</Form.Label>
              <Form.Control type="text"  placeholder="Feature Coming Soon" />
            </Form.Group>
            <br />
            <br />
            <Button onClick={props.onClearFiltersRequest}>Clear Filters</Button>
          </form>
          
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}
