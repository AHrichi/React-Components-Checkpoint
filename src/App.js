import FullName from './Component/Profile/FullName'
import Address from './Component/Profile/Address'
import ProfilePhoto from './Component/Profile/ProfilePhoto'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Row, Col } from 'react-bootstrap';



function App() {
  return (
    <div className="App ">
      <Container fluid>
        <Navbar expand="lg" variant="light" bg="light">
          <Navbar.Brand href="#">Checkpoint</Navbar.Brand>
        </Navbar>
      </Container>
      <Container fluid className="d-flex justify-content-center ">
        <Row className="d-flex justify-content-cennter p-3 mb-2 bg-dark text-white border border-3 border-dark rounded-pill my-5 py-5 hhh" >
          <Col className="d-flex justify-content-center align-items-center">
            <ProfilePhoto />
          </Col>
          <Col className="">
            <Row className=""><FullName /></Row>
            <Row className=""><Address /></Row>
          </Col>
        </Row>
      </Container>


    </div>
  );
}

export default App;
