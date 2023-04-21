import React from 'react';

export default function inventoryItem(props) {
  return (
    <div>
    {/* <div onClick = {() => props.detailsRequested(props.id)}> */}
      <ul>
        <li>{props.Name}</li>
        {props.Origin && <li>{props.Origin}</li>}
        {props.Roast && <li>{props.Roast}</li>}
        {props.Price && <li>{props.Price}</li>}
      </ul>
      <hr/>
    </div>
  )
}
