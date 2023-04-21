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
      mainInventoryList: [{Name: 'Super Jitter Death Inducer', Origin: 'Nicaragua', Price: 0.01, Roast: 'Blonde', Remaining: 130, Roast: "Blonde", id:"f8e022a6-35a8-4c23-9d84-54ff9711a657"}],
      requestedDetails: null
    }
  }

  handleMiddleColumnSwap = () => {
    this.setState(prev => ({
      showForm: !prev.showForm
    }));
  }

  handleAddNewInventory = (newGenericObjectRepresentingAnInventoryItem) => {
    this.setState(beforeStateChangeState => ({
      showForm: !beforeStateChangeState.showForm,
      mainInventoryList: ([...beforeStateChangeState.mainInventoryList, newGenericObjectRepresentingAnInventoryItem])
      //is just declaring a new variable.concat new item faster here? probably, ... iterates through whole list i think?
    }))
  }

  handleDetailsRequest = (id) => {
    console.log(this.state.requestedDetails)
    const selectedItem = this.state.mainInventoryList.filter(item => item.id === id)[0]
    this.setState({requestedDetails: selectedItem, showForm: false})
  }

  render() {
    return(
      <Container>
        <Row>
          <Col>
            <InventoryList inventoryList={this.state.mainInventoryList} onDetailsRequest={this.handleDetailsRequest}/>
          </Col>
          <Col>
            {this.state.showForm ? 
              <ItemManagement onSwapRequest={this.handleMiddleColumnSwap} onAddNewInventory = {this.handleAddNewInventory}/> 
              :
              <ItemDetails onSwapRequest={this.handleMiddleColumnSwap} requestedDetails={this.state.requestedDetails}/>} 
          </Col>
          <Col>
            <h1>placeholder filters</h1>
          </Col>
        
        
        </Row>
      </Container>
    )
  }

}
