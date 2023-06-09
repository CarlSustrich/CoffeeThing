import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import PropTypes from "prop-types";

export default function filterList(props) {
  return (


    <Accordion flush>
      <Accordion.Item eventKey='0'>
        <Accordion.Header>Filters</Accordion.Header>
        <Accordion.Body>
          <form onChange={props.onFilterRequest} id='filterForm'>
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
              <Form.Control type="text"  placeholder="Feature Coming Soon" disabled/>
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

filterList.propTypes = {
  onFilterRequest: PropTypes.func,
  onClearFiltersRequest: PropTypes.func
}
