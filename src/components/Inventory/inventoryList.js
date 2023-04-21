import React from 'react';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Item from './inventoryItem';
import { ListGroupItem } from 'react-bootstrap';

export default function inventoryList(props) {
 
  return (
    
    <>
      <h1>Inventory List</h1>    
      <ListGroup as="ol" numbered>
        {props.inventoryList.map((element)=> 
          
          <ListGroup.Item key={element.id} as='li' className="d-flex justify-content-between align-items-start"> 
            <Item 
              detailsRequested = {props.onDetailsRequest}
              Name = {element.Name}
              id={element.id}
            />
            {element.Remaining<=0 ? <Badge bg="danger" pill> {element.Remaining}lbs</Badge> : element.Remaining<=50 ? <Badge bg="warning" pill> {element.Remaining}lbs</Badge> : <Badge bg="primary" pill> {element.Remaining}lbs</Badge>}
           
          </ListGroup.Item>

        )}
      </ListGroup>
    </>
  )
}
