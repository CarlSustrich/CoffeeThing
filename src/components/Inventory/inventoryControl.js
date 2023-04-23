import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

import ItemManagement from '../Inventory/itemManagement';
import ItemDetails from './itemDetails';
import InventoryList from './inventoryList';
import FilterList from "./filterList"

export default class inventoryControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      showForm: false,
      mainInventoryList: [{Name: 'Super Jitter Death Inducer', Origin: 'Nicaragua', Price: 235.75, Roast: 'Blonde', Remaining: 130, id:"f8e022a6-35a8-4c23-9d84-54ff9711a657"}, 
      {Name: 'Decaf Is For Weenies', Origin: 'Murica', Price: 0.99, Roast: 'Gross', Remaining: 130, id:"61c1afd0-b513-438f-94f1-fc0927716c3f"}],
      requestedDetails: null,
      ItemNameFilter: null,
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
    const selectedItem = this.state.mainInventoryList.filter(item => item.id === id)[0]
    this.setState({requestedDetails: selectedItem, showForm: false})
  }

  handleUpdateRequest = (qty) => {
    let updatedItem = {...this.state.requestedDetails};
    if(updatedItem.Remaining <= qty){
      updatedItem.Remaining = 0;
    } else {
    updatedItem.Remaining -= qty;
    }
    this.setState(prevState => ({
      mainInventoryList: prevState.mainInventoryList.filter(item => item.id !== this.state.requestedDetails.id)
      .concat(updatedItem),
      requestedDetails: updatedItem
    }))
  }

  handleCloseDetailsRequest = () => {
    this.setState({requestedDetails: null})
  }

  handleFilterRequest = (event) => {
    const whichProperty = event.target.id;
    if (whichProperty === 'ItemName') {
      this.setState({ItemNameFilter: event.target.value})
    } 
  }

  handleClearFiltersRequest = () => {
    this.setState({
      ItemNameFilter: null,
    })
    document.getElementById('filterForm').reset();

  }

 
  render() {
    let filteredResults = null;
    if (this.state.ItemNameFilter != null) {
      filteredResults = this.state.mainInventoryList.filter(item => item.Name.toLowerCase().includes(this.state.ItemNameFilter.toLowerCase()))
    }
    return(

      <Container>
        <Row>
          <Col>
            <FilterList onFilterRequest={this.handleFilterRequest} onClearFiltersRequest={this.handleClearFiltersRequest}/>
            <InventoryList inventoryList={filteredResults != null ? filteredResults : this.state.mainInventoryList} onDetailsRequest={this.handleDetailsRequest}/>
          </Col>
          <Col>
            {this.state.showForm ? 
              <ItemManagement onSwapRequest={this.handleMiddleColumnSwap} onAddNewInventory = {this.handleAddNewInventory}/> 
              :
              <ItemDetails onCloseDetailsRequest={this.handleCloseDetailsRequest} onSwapRequest={this.handleMiddleColumnSwap} onUpdateRequest={this.handleUpdateRequest} requestedDetails={this.state.requestedDetails}/>} 
          </Col>
        
        
        </Row>
      </Container>
    )
  }

}
