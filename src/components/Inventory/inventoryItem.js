import React from 'react';

export default function inventoryItem(props) {
  return (
    <div className="ms-2 me-auto" onClick = {() => props.detailsRequested(props.id)}>
        {props.Name}
        {props.Origin && props.Origin}
        {props.Roast && props.Roast}
        {props.Price && props.Price}
        {props.Remaining && props.Remaining}
    </div>
  )
}
