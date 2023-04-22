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
      mainInventoryList: [{Name: 'Super Jitter Death Inducer', Origin: 'Nicaragua', Price: 235.75, Roast: 'Blonde', Remaining: 130, id:"f8e022a6-35a8-4c23-9d84-54ff9711a657"}, 
      {Name: 'Decaf Is For Weenies', Origin: 'Murica', Price: 0.99, Roast: 'Gross', Remaining: 130, id:"61c1afd0-b513-438f-94f1-fc0927716c3f"}],
      requestedDetails: null,
      ItemNameFilter: null,
      RoastFilter: null,
      OriginFilter: null,
      FilteredList: null
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

    if (whichProperty === 'beanRoast') {
      this.setState({RoastFilter: event.target.value})
    }

    if (whichProperty === 'beanOrigin') {
      this.setState({OriginFilter: event.target.value})
    }
    this.filterResults();
  }

  handleClearFiltersRequest = () => {
    this.setState({
      ItemNameFilter: null,
      RoastFilter: null,
      OriginFilter: null
    })

  }

  filterResults = () => {
    let filteredList = this.state.mainInventoryList;
    if (this.state.ItemNameFilter != null) {
      filteredList = filteredList.filter(item => item.Name.toLowerCase().includes(this.state.NameFilter.toLowerCase()));
    }
    if (this.state.RoastFilter!=null){
      filteredList = filteredList.filter(item => item.Roast.toLowerCase().includes(this.state.RoastFilter.toLowerCase()));
    }
    this.setState({
      FilteredList: filteredList
    })
  }

  render() {
    return(
      <Container>
        <Row>
          <Col>
            <FilterList onFilterRequest={this.handleFilterRequest} onClearFiltersRequest={this.handleClearFiltersRequest}/>
            <InventoryList inventoryList={this.state.FilteredList != null ? this.state.FilteredList : this.state.mainInventoryList} onDetailsRequest={this.handleDetailsRequest}/>
          </Col>
          <Col>
            {this.state.showForm ? 
              <ItemManagement onSwapRequest={this.handleMiddleColumnSwap} onAddNewInventory = {this.handleAddNewInventory}/> 
              :
              <ItemDetails onSwapRequest={this.handleMiddleColumnSwap} onUpdateRequest={this.handleUpdateRequest} requestedDetails={this.state.requestedDetails}/>} 
          </Col>
          <Col>
            <h1>placeholder filters</h1>
          </Col>
        
        
        </Row>
      </Container>
    )
  }

}
