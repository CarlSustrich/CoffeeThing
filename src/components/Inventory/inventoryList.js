import React from 'react';
import Item from './inventoryItem';

export default function inventoryList(props) {
  return (
    <>
      <h1>Inventory List</h1>    
      {props.inventoryList.map((element)=> 
        <Item 
          detailsRequested = {props.onDetailsRequest}
          Name = {element.Name}
          Remaining = {element.Remaining}
          id={element.id}
          key={element.id}
        />
      )}
    </>
  )
}
