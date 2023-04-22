import React from 'react';
import Container from 'react-bootstrap/Container'
import coffeeBarPic from './../../img/coffee-bar.jpeg';


export default class headerControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      currentTime: new Date()
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    const headerStyles={
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      backgroundImage: `url(${coffeeBarPic})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'fill',
      backgroundPosition: 'center',
      height: '30vh',
      width: '100vw',
      textAlign: 'center',
      padding: '25px'
    }
    const h3Styles={
      color: 'hsla(0, 0%, 100%, 0.8)',
      textShadow: "0 0 10px hsla(240, 10%, 40%, 0.5), 0 0 10px hsla(240, 10%, 40%, 0.5),0 0 10px hsla(240, 10%, 40%, 0.5),0 0 5px hsla(240, 10%, 40%, 1),0 0 5px hsla(240, 10%, 40%, 1),0 0 5px hsla(240, 10%, 40%, 1)",
      padding: '5px',
      textAlign: 'right'
    }
    const h1Style={
      color: 'hsla(0, 0%, 100%, 0.8)',
      textShadow: "0 0 10px hsla(240, 10%, 40%, 0.5), 0 0 10px hsla(240, 10%, 40%, 0.5),0 0 10px hsla(240, 10%, 40%, 0.5),0 0 5px hsla(240, 10%, 40%, 1),0 0 5px hsla(240, 10%, 40%, 1),0 0 5px hsla(240, 10%, 40%, 1)",
      padding: '5px',
      display: 'flex',
    }

    return(
      <Container style={headerStyles}>
        <h1 style={h1Style}>ErMaGerd A Cerfee Sherp</h1>
        <h3 style={h3Styles}>{this.state.currentTime.toLocaleTimeString()}</h3>
      </Container>

    )
  }

}
