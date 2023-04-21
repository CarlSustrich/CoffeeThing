import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';


// export default function itemDetails(props) {
//   const item = props.requestedDetails
//   if(item != null) {
//     return (
//       <>
//         <h1>Item Details:</h1>
//         <ul>
//           <li>{item.Name}</li>
//           <li>{item.Origin}</li>
//           <li>{item.Price}</li>
//           <li>{item.Roast}</li>
//           <li>{item.Remaining}lbs</li>
//         </ul>
//         <Button onClick={props.onSwapRequest}>Add Inventory Item</Button>
//       </>
//     )
//   } else {
//     return (
//     <>
//       <h1>Heres some details I guess</h1>
//       <Button onClick={props.onSwapRequest}>Add Inventory Item</Button>
//     </>
//     )
//   }
  
// }


export default function itemDetails(props) {
  const item = props.requestedDetails
  if(item != null) {
    return (
      <Container>
        <h1>Item Details:</h1>
        <ListGroup as='ul'>
          <ListGroup.Item as='li'>{item.Name}</ListGroup.Item>
          <ListGroup.Item as='li'>{item.Origin}</ListGroup.Item>
          <ListGroup.Item as='li'>{item.Price}</ListGroup.Item>
          <ListGroup.Item as='li'>{item.Roast}</ListGroup.Item>
          <ListGroup.Item as='li'>{item.Remaining}lbs</ListGroup.Item>
        </ListGroup>
        <Button onClick={props.onSwapRequest}>Add Inventory Item</Button>
      </Container>
    )
  } else {
    return (
    <>
      <h1>Heres some details I guess</h1>
      <Button onClick={props.onSwapRequest}>Add Inventory Item</Button>
    </>
    )
  }
  
}
