import React from 'react';
import Item from './inventoryItem';

export default function inventoryList(props) {
  return (
    <>
      <h1>Inventory List</h1>    
      {console.log(props)}
      {props.inventoryList.map((element)=> 
        <Item 
          Name = {element.Name}
          id={element.id}
          key={element.id}
        />
      )}
    </>
  )
}
