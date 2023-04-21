
import './App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header/headerControl';
import InventoryControl from './Inventory/inventoryControl'

function App() {
  return (
    <Container>
      <Row>
        <Header />
      </Row>
      <Row>
        <InventoryControl />
      </Row>
    </Container>
  );
}

export default App;
