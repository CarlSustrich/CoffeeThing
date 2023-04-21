import React from 'react';
import coffeeBarPic from './../../img/coffee-bar.jpeg';


export default class headerControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      currentTime: new Date()
    }
  }

  render() {
    const headerStyles={
      backgroundImage: `url(${coffeeBarPic})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'fill',
      backgroundPosition: 'center',
      height: '30vh',
      width: '100vw',
      textAlign: 'center'
    }
    return(
      <div style={headerStyles}>
        <h1>ErMaGerd A Cerfee Sherp</h1>
      </div>

    )
  }

}
