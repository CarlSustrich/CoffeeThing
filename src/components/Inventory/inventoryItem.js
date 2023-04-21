import React from 'react';

export default function inventoryItem(props) {
  return (
    <div onClick = {() => props.detailsRequested(props.id)}>
      <ul>
        <li>{props.Name} - {props.Remaining} lbs</li>
        {props.Origin && <li>{props.Origin}</li>}
        {props.Roast && <li>{props.Roast}</li>}
        {props.Price && <li>{props.Price}</li>}
      </ul>
      <hr/>
    </div>
  )
}
