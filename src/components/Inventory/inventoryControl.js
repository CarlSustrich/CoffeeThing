import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

import ItemManagement from '../Inventory/itemManagement';
import ItemDetails from './itemDetails';
import InventoryList from './inventoryList';

export default class inventoryControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      showForm: false,
      mainInventoryList: []
    }
  }

  handleMiddleColumnSwap = () => {
    this.setState(prev => ({
      showForm: !prev.showForm
    }));
  }

  render() {
    return(
      <Container>
        <Row>
          <Col>
            <InventoryList />
          </Col>
          <Col>
            {this.state.showForm ? <ItemManagement onSwapRequest={this.handleMiddleColumnSwap} /> : <ItemDetails onSwapRequest={this.handleMiddleColumnSwap} />} 
          </Col>
          <Col>
            <h1>placeholder filters</h1>
          </Col>
        
        
        </Row>
      </Container>
    )
  }

}
