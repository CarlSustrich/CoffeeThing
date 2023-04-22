import React from 'react';
import PropTypes from "prop-types";

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

inventoryItem.propTypes ={
  Name: PropTypes.string,
  Origin: PropTypes.string,
  Roast: PropTypes.number,
  Price: PropTypes.string,
  Remaining: PropTypes.number
}
